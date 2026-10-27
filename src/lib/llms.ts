import { getContent } from "@/content"
import { abs, route } from "@/lib/routes"
import { site } from "@/lib/site"

/** The short index for AI search and answer engines: what the site is and where each page lives. */
export function llmsIndex(): string {
  const c = getContent()
  const out: string[] = []
  out.push(`# ${site.name}`, "", `> ${c.description}`, "")
  out.push(
    "whitesec.energy is the energy practice of PT Topi Putih Siberindo (Whitesec ID) and Whitesec AU. Seven services run in Indonesia and Australia; each client contracts with the local entity. Installation work is carried out by licensed EPC partners. The site is in English.",
    "",
  )
  out.push(`- [${c.nav.services}](${abs(route("services"))}): ${c.servicePage.indexLead}`)
  for (const s of c.services) out.push(`  - [${s.name}](${abs(route("service", s.key))}): ${s.card}`)
  out.push(`- [${c.countries.id.title}](${abs(route("indonesia"))}): ${c.countries.id.entityLine}`)
  out.push(`- [${c.countries.au.title}](${abs(route("australia"))}): ${c.countries.au.entityLine}`)
  out.push(`- [${c.nav.how}](${abs(route("how"))}): ${c.how.metaDescription}`)
  out.push(`- [${c.nav.experience}](${abs(route("experience"))}): ${c.experience.metaDescription}`)
  out.push(`- [${c.nav.about}](${abs(route("about"))}): ${c.about.metaDescription}`)
  out.push(`- [${c.nav.contact}](${abs(route("contact"))}): ${c.contact.metaDescription}`, "")
  out.push("## Full text", "", `- [llms-full.txt](${abs("/llms-full.txt")}): every service page, the rules by country and the FAQ in one file.`, "")
  return out.join("\n")
}

/** Every service in full, then the rules by country, so an answer engine can quote from one file. */
export function llmsFull(): string {
  const c = getContent()
  const out: string[] = [`# ${site.name}`, "", `> ${c.description}`, ""]
  for (const s of c.services) {
    out.push(`## ${s.name}`, `URL: ${abs(route("service", s.key))}`, "", s.intro, "")
    out.push(`### ${c.servicePage.whatIncluded}`, ...s.included.map((x) => `- ${x}`), "")
    out.push(`### ${c.servicePage.whoFor}`, s.whoFor, "")
    out.push(`### ${c.servicePage.receives}`, ...s.receives.map((x) => `- ${x}`), "")
    out.push(`### ${c.servicePage.rulesTitle}`, `- ${c.servicePage.rulesIndonesia}: ${s.rules.id}`, `- ${c.servicePage.rulesAustralia}: ${s.rules.au}`, "")
    out.push(`### ${c.servicePage.howRuns}`, ...s.steps.map((x, i) => `${i + 1}. ${x.title}${x.gate ? ` (${c.servicePage.gateLabel})` : ""}: ${x.text}`), "")
    out.push(`### ${c.servicePage.faq}`, ...s.faq.flatMap((f) => [`Q: ${f.q}`, `A: ${f.a}`, ""]))
  }
  for (const k of ["id", "au"] as const) {
    const cc = c.countries[k]
    out.push(`## ${cc.title}`, `URL: ${abs(route(k === "id" ? "indonesia" : "australia"))}`, "", cc.lead, cc.entityLine, "")
    out.push(...cc.rules.map((r) => `- ${c.services.find((s) => s.key === r.service)!.name}: ${r.text}`), "")
  }
  out.push(`## ${c.how.title}`, `URL: ${abs(route("how"))}`, "", c.how.studyLead, ...c.how.steps.map((x, i) => `${i + 1}. ${x.title}: ${x.text}`), "", c.how.buildLead, "")
  out.push(`## ${c.contact.title}`, `URL: ${abs(route("contact"))}`, "")
  for (const e of [site.entities.id, site.entities.au]) {
    out.push(`- ${e.name}: ${e.email}, ${e.phone}, ${e.offices.map((o) => `${o.label}, ${o.lines.join(", ")}`).join("; ")}`)
  }
  out.push("")
  return out.join("\n")
}
