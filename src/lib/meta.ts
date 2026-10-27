import type { Metadata } from "next"

import { getContent, type ServiceKey } from "@/content"
import { abs, route, type RouteKey } from "@/lib/routes"
import { site } from "@/lib/site"

/** Title, description, canonical and social tags for one page. Every page passes its own title and description. */
export function pageMeta(input: {
  key: RouteKey
  serviceKey?: ServiceKey
  title: string
  description: string
  noindex?: boolean
}): Metadata {
  const { key, serviceKey, title, description, noindex } = input
  const url = abs(route(key, serviceKey))
  const image = abs("/og")
  return {
    title: key === "home" ? { absolute: `${site.name}: ${title}` } : title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url, siteName: site.name, locale: getContent().ogLocale, type: "website", images: [{ url: image, width: 1200, height: 630, alt: site.name }] },
    twitter: { card: "summary_large_image", title, description, images: [image] },
    ...(noindex ? { robots: { index: false, follow: false } } : {}),
  }
}
