import { getContent, type Service } from "@/content"
import { abs, route } from "@/lib/routes"
import { site } from "@/lib/site"

const orgId = abs("/#organisation")

function postal(label: string, lines: readonly string[], country: "ID" | "AU") {
  return { "@type": "PostalAddress", name: label, streetAddress: lines[0], addressLocality: lines[1], addressCountry: country }
}

/** Organization and WebSite, emitted once per page from the root layout. */
export function siteGraph() {
  const c = getContent()
  const { id, au } = site.entities
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": orgId,
        name: site.name,
        url: abs(route("home")),
        logo: abs("/brand/logo-mark.png"),
        description: c.description,
        sameAs: [site.linkedin],
        areaServed: ["ID", "AU"],
        subOrganization: [
          {
            "@type": "Organization",
            name: id.name,
            alternateName: id.brand,
            email: id.email,
            telephone: id.phone,
            address: postal(id.offices[0].label, id.offices[0].lines, "ID"),
          },
          {
            "@type": "Organization",
            name: au.name,
            email: au.email,
            telephone: au.phone,
            address: postal(au.offices[0].label, au.offices[0].lines, "AU"),
          },
        ],
        contactPoint: [
          { "@type": "ContactPoint", contactType: "sales", areaServed: "ID", email: id.email, telephone: id.phone, availableLanguage: ["en"] },
          { "@type": "ContactPoint", contactType: "sales", areaServed: "AU", email: au.email, telephone: au.phone, availableLanguage: ["en"] },
        ],
      },
      {
        "@type": "WebSite",
        "@id": abs("/#website"),
        name: site.name,
        url: abs(route("home")),
        inLanguage: "en",
        publisher: { "@id": orgId },
      },
    ],
  }
}

/** One service page: the Service itself, which countries it covers, and who provides it. No price or rating exists. */
export function serviceGraph(s: Service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: s.name,
    description: s.metaDescription,
    url: abs(route("service", s.key)),
    inLanguage: "en",
    serviceType: s.name,
    provider: { "@id": orgId },
    areaServed: [
      { "@type": "Country", name: "Indonesia" },
      { "@type": "Country", name: "Australia" },
    ],
  }
}

/** Mirrors the FAQ a visitor can read on the page. */
export function faqGraph(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  }
}

/** BreadcrumbList that mirrors the visible breadcrumb: Home first, the current page last. */
export function breadcrumbGraph(crumbs: { href?: string; label: string }[]) {
  const c = getContent()
  const items = [{ label: c.common.home, href: route("home") }, ...crumbs]
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.label,
      ...(it.href ? { item: abs(it.href) } : {}),
    })),
  }
}
