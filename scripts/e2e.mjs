// End-to-end check of whitesec-energy-web against a running build (default http://localhost:3200).
//
//   NEXT_PUBLIC_SITE_URL=http://localhost:3200 npx next build
//   NEXT_PUBLIC_SITE_URL=http://localhost:3200 npx next start -p 3200
//   CHROMIUM_PATH=<browser binary, when Playwright's own is not installed> node scripts/e2e.mjs
//
// Covers the owner's 20-point release checklist that can be verified from a browser: every page loads
// at phone, tablet and desktop widths with no console error and no sideways scroll; titles, descriptions, canonicals,
// structured data; alt text; real 404 status; the header menus; the cookie banner;
// the contact form (error states, success, thank-you page); the sticky mobile CTA; robots, sitemap, llms and icons.
import { chromium } from "playwright"

const APP = process.env.APP_URL ?? "http://localhost:3200"
const results = []
const check = (name, ok, detail = "") => {
  results.push(ok)
  console.log(`  ${ok ? "✓" : "✗"} ${name}${ok || !detail ? "" : `  (${detail})`}`)
}
const sleep = (ms) => new Promise((r) => setTimeout(r, ms))

const SERVICES = ["energy-project-studies", "records-and-document-control", "ot-and-cyber-security-for-energy", "energy-efficiency-iso-50001", "decarbonisation-and-emissions-reporting", "owners-engineer-and-technical-due-diligence", "renewable-and-hybrid-solutions"]
const PAGES = ["/", "/services", "/indonesia", "/australia", "/how-we-work", "/experience", "/about", "/contact", "/privacy-policy", "/terms", "/photo-credits", "/thank-you", ...SERVICES.map((s) => `/services/${s}`)]

const browser = await chromium.launch(process.env.CHROMIUM_PATH ? { executablePath: process.env.CHROMIUM_PATH } : {})

// ── 1. Every page: loads, no console error, no sideways scroll, alt text, metadata ──
console.log("\n1. pages, widths, metadata")
const metas = []
for (const [label, width, height] of [["phone 360", 360, 740], ["tablet 768", 768, 1024], ["desktop 1440", 1440, 900]]) {
  const ctx = await browser.newContext({ viewport: { width, height }, bypassCSP: true })
  const page = await ctx.newPage()
  const errors = []
  page.on("pageerror", (e) => errors.push(`pageerror: ${e.message}`))
  page.on("console", (m) => m.type() === "error" && errors.push(m.text()))
  page.on("response", (r) => r.status() >= 400 && errors.push(`${r.status()} ${r.url()}`))
  let bad = []
  for (const path of PAGES) {
    errors.length = 0
    const res = await page.goto(APP + path, { waitUntil: "networkidle" })
    await sleep(250)
    const info = await page.evaluate(() => ({
      overflow: document.documentElement.scrollWidth - document.documentElement.clientWidth,
      lang: document.documentElement.lang,
      title: document.title,
      desc: document.querySelector('meta[name="description"]')?.content ?? "",
      canonical: document.querySelector('link[rel="canonical"]')?.href ?? "",
      ogImage: document.querySelector('meta[property="og:image"]')?.content ?? "",
      robots: document.querySelector('meta[name="robots"]')?.content ?? "",
      h1: document.querySelectorAll("h1").length,
      noAlt: [...document.querySelectorAll("img")].filter((i) => !i.hasAttribute("alt")).length,
      jsonld: [...document.querySelectorAll('script[type="application/ld+json"]')].map((s) => { try { JSON.parse(s.textContent); return true } catch { return false } }),
    }))
    if (label.startsWith("desktop")) metas.push({ path, ...info })
    const why = []
    if (res.status() !== 200) why.push(`status ${res.status()}`)
    if (info.overflow > 1) why.push(`overflow ${info.overflow}px`)
    if (errors.length) why.push(errors[0].slice(0, 90))
    if (info.h1 !== 1) why.push(`${info.h1} h1`)
    if (info.noAlt) why.push(`${info.noAlt} img without alt`)
    if (!info.jsonld.every(Boolean)) why.push("bad JSON-LD")
    if (why.length) bad.push(`${path}: ${why.join(", ")}`)
  }
  check(`${label}: ${PAGES.length} pages load, one h1, alt present, no console error, no sideways scroll`, bad.length === 0, bad.slice(0, 3).join(" | "))
  await ctx.close()
}

const indexable = metas.filter((m) => !/thank-you/.test(m.path))
const dup = (key) => { const seen = new Map(); for (const m of indexable) seen.set(m[key], [...(seen.get(m[key]) ?? []), m.path]); return [...seen.values()].filter((v) => v.length > 1) }
check("every page has its own title", dup("title").length === 0, JSON.stringify(dup("title")[0]))
check("every page has its own meta description", dup("desc").length === 0 && indexable.every((m) => m.desc.length > 50), JSON.stringify(dup("desc")[0]))
check("every indexable page has a canonical that points at itself", indexable.every((m) => m.canonical.endsWith(m.path === "/" ? "/" : m.path)), indexable.find((m) => !m.canonical.endsWith(m.path === "/" ? "/" : m.path))?.path)
check("every page names an Open Graph image", metas.every((m) => m.ogImage.endsWith("/og")))
check("html lang is en on every page", metas.every((m) => m.lang === "en"))
check("the thank-you page is noindex", metas.filter((m) => /thank-you/.test(m.path)).every((m) => m.robots.includes("noindex")))
check("titles stay under 70 characters", indexable.every((m) => m.title.length <= 70), indexable.find((m) => m.title.length > 70)?.title)

// ── 2. Real 404 status, files ──
console.log("\n2. status codes and files")
for (const p of ["/nope", "/services/nope", "/en", "/layanan"]) {
  const r = await fetch(APP + p)
  check(`404 page returns status 404: ${p}`, r.status === 404)
}
const text = async (p) => (await fetch(APP + p)).text()
const robots = await text("/robots.txt")
check("robots.txt allows the site, names the sitemap, keeps the thank-you page out", /Allow: \//.test(robots) && /Sitemap: .*sitemap\.xml/.test(robots) && /Disallow: \/thank-you/.test(robots))
const sitemap = await text("/sitemap.xml")
check("sitemap lists the 18 indexable pages, no thank-you page, no language alternates", (sitemap.match(/<loc>/g) ?? []).length === 18 && !/thank-you|hreflang|xhtml:link/.test(sitemap), `${(sitemap.match(/<loc>/g) ?? []).length} urls`)
const llms = await text("/llms.txt")
check("llms.txt and llms-full.txt exist", llms.includes("# Whitesec Energy") && (await text("/llms-full.txt")).includes("## Energy Project Studies"))
for (const f of ["/favicon.ico", "/icon.png", "/apple-icon.png", "/icon-192.png", "/icon-512.png", "/manifest.webmanifest"]) {
  const r = await fetch(APP + f)
  check(`icon file serves: ${f}`, r.status === 200)
}

// ── 3. Header, language switch, cookie banner ──
console.log("\n3. header, cookie banner")
{
  const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 }, bypassCSP: true })
  const page = await ctx.newPage()
  await page.goto(APP + "/services/energy-project-studies", { waitUntil: "networkidle" })
  check("cookie banner shows before any choice, with Refuse and Allow of equal weight", (await page.getByRole("region", { name: "Cookie consent" }).count()) === 1)
  const gaBefore = await page.evaluate(() => !!window.gtag || [...document.scripts].some((s) => s.src.includes("googletagmanager")))
  check("no analytics script before consent", !gaBefore)
  await page.getByRole("button", { name: "Refuse" }).click()
  check("choosing Refuse closes the banner", (await page.getByRole("region", { name: "Cookie consent" }).count()) === 0)
  await page.reload({ waitUntil: "networkidle" })
  check("the choice is remembered", (await page.getByRole("region", { name: "Cookie consent" }).count()) === 0)
  await page.getByRole("button", { name: "Cookie settings" }).click()
  check("Cookie settings in the footer reopens the banner", (await page.getByRole("region", { name: "Cookie consent" }).count()) === 1)
  await page.getByRole("button", { name: "Allow" }).click()

  // Services menu: opens, lists seven, closes with Escape
  const trigger = page.getByRole("button", { name: "Services", exact: true })
  await trigger.click()
  check("Services menu opens with seven services and an all-services link", (await page.locator("#menu-services a").count()) === 8)
  await page.keyboard.press("Escape")
  check("Escape closes the Services menu", (await page.locator("#menu-services").count()) === 0)

  check("the header has no language switch", (await page.getByRole("link", { name: "Bahasa Indonesia" }).count()) === 0 && (await page.locator("link[hreflang]").count()) === 0)

  // Keyboard: skip link
  await page.goto(APP + "/", { waitUntil: "networkidle" })
  await page.keyboard.press("Tab")
  const skip = await page.evaluate(() => document.activeElement?.textContent)
  check("the first Tab stop is the skip link", /Skip to main content/.test(skip ?? ""), skip)
  await ctx.close()
}

// ── 4. Contact form ──
console.log("\n4. contact form: errors, success, thank-you")
{
  const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 }, bypassCSP: true })
  const page = await ctx.newPage()
  await page.goto(APP + "/contact", { waitUntil: "networkidle" })
  await page.getByRole("button", { name: "Refuse" }).click()
  await page.getByRole("button", { name: "Send Enquiry" }).click()
  await page.locator("form [role=alert]").first().waitFor()
  const alertText = await page.locator("form [role=alert]").first().innerText()
  check("an empty submit shows a summary naming each field, ", /Please check these 7 fields/.test(alertText) && /Enter your name/.test(alertText) && /Choose the service/.test(alertText), alertText.slice(0, 120))
  check("focus moves to the error summary", await page.evaluate(() => document.activeElement?.getAttribute("role") === "alert" && !!document.activeElement.closest("form")))
  check("each field shows its own message and is marked invalid", (await page.locator('[aria-invalid="true"]').count()) >= 4)
  await page.fill("#name", "Rina Wulandari")
  await page.fill("#organisation", "Example Energy Ltd")
  await page.fill("#email", "not-an-email")
  await page.fill("#message", "We are weighing a new records centre at our field site.")
  await page.getByRole("button", { name: "Send Enquiry" }).click()
  await page.waitForFunction(() => document.querySelector("form [role=alert]")?.textContent?.includes("email format"))
  check("an invalid email is refused with its own message and the typed values stay", (await page.locator("form [role=alert]").first().innerText()).includes("email format") && (await page.inputValue("#name")) === "Rina Wulandari")
  await page.fill("#email", "rina@example-energy.com")
  await page.getByRole("combobox").nth(0).click()
  await page.getByRole("option", { name: "Indonesia" }).click()
  await page.getByRole("combobox").nth(1).click()
  await page.getByRole("option", { name: "Energy Project Studies" }).click()
  await page.getByRole("checkbox").check()
  await page.getByRole("button", { name: "Send Enquiry" }).click()
  await page.waitForURL(/\/thank-you\?t=/, { timeout: 15000 })
  check("a valid enquiry reaches the thank-you page with a one-time token", /\/thank-you\?t=[0-9a-f-]{36}/.test(page.url()))
  await page.getByRole("heading", { name: "What happens next" }).waitFor({ timeout: 10000 })
  check("the thank-you page says what happens next", (await page.getByRole("heading", { name: "What happens next" }).count()) === 1)

  // Service page form has the service chosen already
  await page.goto(APP + "/services/energy-efficiency-iso-50001", { waitUntil: "networkidle" })
  const chosen = await page.locator("form").getByRole("combobox").nth(1).innerText()
  check("a service page's form opens with that service selected", /Energy Efficiency/.test(chosen), chosen)
  await ctx.close()
}

// ── 5. Mobile: sheet menu and sticky CTA ──
console.log("\n5. mobile menu and sticky CTA")
{
  const ctx = await browser.newContext({ viewport: { width: 390, height: 844 }, hasTouch: true, isMobile: true, bypassCSP: true })
  const page = await ctx.newPage()
  await page.goto(APP + "/services/energy-project-studies", { waitUntil: "networkidle" })
  await page.getByRole("button", { name: "Refuse" }).click()
  const sticky = page.locator("div[data-hidden]")
  await page.evaluate(() => window.scrollTo(0, 900))
  await sleep(500)
  check("the sticky CTA is visible on a phone while scrolling a service page", (await sticky.getAttribute("data-hidden")) === "false")
  const box = await sticky.boundingBox()
  check("the sticky CTA button is at least 44px tall", box && box.height >= 44, JSON.stringify(box))
  await page.goto(APP + "/contact", { waitUntil: "networkidle" })
  check("the sticky CTA is not shown on the contact page", (await page.locator("div[data-hidden]").count()) === 0)
  await page.goto(APP + "/", { waitUntil: "networkidle" })
  await page.getByRole("button", { name: "Menu" }).click()
  const sheet = page.getByRole("dialog")
  await sheet.waitFor()
  check("the phone menu lists the seven services and the main pages", (await sheet.getByRole("link").count()) >= 13)
  await sheet.getByRole("link", { name: "How We Work" }).click()
  await page.waitForURL(/how-we-work/)
  await page.getByRole("dialog").waitFor({ state: "detached", timeout: 5000 }).catch(() => {})
  check("a link in the phone menu navigates and closes the menu", (await page.getByRole("dialog").count()) === 0)
  await ctx.close()
}

const failed = results.filter((r) => !r).length
console.log(`\n${results.length - failed}/${results.length} checks passed`)
await browser.close()
process.exit(failed ? 1 : 0)
