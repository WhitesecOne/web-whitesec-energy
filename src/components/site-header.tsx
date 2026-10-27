import { HeaderNav, type NavProps } from "@/components/header-nav"
import { getContent } from "@/content"
import { route } from "@/lib/routes"

export function SiteHeader() {
  const c = getContent()
  const props: NavProps = {
    homeHref: route("home"),
    services: c.services.map((s) => ({ href: route("service", s.key), name: s.name, card: s.card })),
    servicesHref: route("services"),
    links: [
      { href: route("indonesia"), label: c.nav.indonesia },
      { href: route("australia"), label: c.nav.australia },
      { href: route("how"), label: c.nav.how },
      { href: route("experience"), label: c.nav.experience },
      { href: route("about"), label: c.nav.about },
    ],
    contact: { href: route("contact"), label: c.nav.contact },
    labels: { services: c.nav.services, allServices: c.nav.allServices, menu: c.nav.menu, close: c.nav.close, primaryNav: c.nav.primaryNav },
  }
  return <HeaderNav {...props} />
}
