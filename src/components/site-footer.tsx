import Link from "next/link"

import { OpenCookieSettings } from "@/components/cookie-consent"
import { Logo } from "@/components/logo"
import { getContent } from "@/content"
import { route } from "@/lib/routes"
import { site } from "@/lib/site"

export function SiteFooter() {
  const c = getContent()
  const year = new Date().getFullYear()
  const pages = [
    { href: route("services"), label: c.nav.services },
    { href: route("indonesia"), label: c.nav.indonesia },
    { href: route("australia"), label: c.nav.australia },
    { href: route("how"), label: c.nav.how },
    { href: route("experience"), label: c.nav.experience },
    { href: route("about"), label: c.nav.about },
    { href: route("contact"), label: c.nav.contact },
  ]
  const entities = [site.entities.id, site.entities.au]
  const linkClass = "inline-flex min-h-11 items-center text-[0.9375rem] text-white/80 underline-offset-4 hover:text-white hover:underline sm:min-h-9"

  return (
    <footer className="bg-ink text-white">
      <div className="container-page grid gap-12 py-14 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-20 lg:py-20">
        <div>
          <Link href={route("home")} aria-label="Whitesec Energy" className="inline-block">
            <Logo inverse />
          </Link>
          <p className="mt-6 max-w-[46ch] text-[1.0625rem] leading-relaxed text-white/85">{c.footer.statement}</p>
          <p className="mt-6 max-w-[46ch] text-sm leading-relaxed text-white/60">{c.tagline}</p>
        </div>

        <div className="grid gap-10 sm:grid-cols-2">
          <nav aria-label={c.footer.links}>
            <p className="text-sm font-semibold text-white/60">{c.footer.links}</p>
            <ul className="mt-3 flex flex-col">
              {pages.map((p) => (
                <li key={p.href}>
                  <Link href={p.href} className={linkClass}>
                    {p.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="text-sm font-semibold text-white/60">{c.common.contactDirect}</p>
            <ul className="mt-3 flex flex-col gap-5 text-[0.9375rem]">
              {entities.map((e) => (
                <li key={e.name}>
                  <p className="font-semibold text-white">{e.brand}</p>
                  <a href={`mailto:${e.email}`} className="mt-1 block min-h-9 py-1 text-white/80 underline-offset-4 hover:text-white hover:underline">
                    {e.email}
                  </a>
                  <a href={e.phoneHref} className="block min-h-9 py-1 text-white/80 underline-offset-4 hover:text-white hover:underline">
                    {e.phone}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/15">
        <div className="container-page flex flex-col gap-4 py-6 text-sm text-white/70 lg:flex-row lg:items-center lg:justify-between">
          <p>
            © {year} {site.name}. {c.footer.copyright}
          </p>
          <ul className="flex flex-wrap gap-x-5 gap-y-1">
            <li>
              <Link href={route("privacy")} className={linkClass}>
                {c.footer.privacy}
              </Link>
            </li>
            <li>
              <Link href={route("terms")} className={linkClass}>
                {c.footer.terms}
              </Link>
            </li>
            <li>
              <Link href={route("credits")} className={linkClass}>
                {c.footer.credits}
              </Link>
            </li>
            <li>
              <OpenCookieSettings label={c.footer.cookieSettings} className={linkClass} />
            </li>
          </ul>
          <ul className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <li className="text-white/60">{c.footer.otherSites}:</li>
            {Object.values(site.related).map((r) => (
              <li key={r.url}>
                <a href={r.url} className={linkClass} rel="noopener">
                  {r.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}
