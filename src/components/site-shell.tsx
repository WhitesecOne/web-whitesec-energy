import { CookieConsent } from "@/components/cookie-consent"
import { JsonLd } from "@/components/json-ld"
import { MotionProvider } from "@/components/motion"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { StickyCta } from "@/components/sticky-cta"
import { getContent } from "@/content"
import { route } from "@/lib/routes"
import { siteGraph } from "@/lib/seo"

/** Everything inside <body>: skip link, header, page, footer, sticky mobile CTA and the cookie banner. */
export function SiteShell({ children }: { children: React.ReactNode }) {
  const c = getContent()
  return (
    <>
      <a href="#content" className="sr-only z-[60] rounded-md bg-white px-4 py-3 font-semibold text-ink focus:not-sr-only focus:fixed focus:top-3 focus:left-3">
        {c.nav.skip}
      </a>
      <JsonLd data={siteGraph()} />
      <MotionProvider>
        <SiteHeader />
        <main id="content" tabIndex={-1} className="outline-none">
          {children}
        </main>
        <SiteFooter />
        <StickyCta href={route("contact")} label={c.sticky.label} hiddenOn={[route("contact"), route("thanks")]} />
      </MotionProvider>
      <CookieConsent copy={c.cookie} privacyHref={route("privacy")} />
    </>
  )
}
