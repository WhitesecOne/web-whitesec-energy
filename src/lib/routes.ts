import { getContent } from "@/content"
import type { ServiceKey } from "@/content/types"
import { site } from "@/lib/site"

export type RouteKey =
  | "home"
  | "services"
  | "service"
  | "indonesia"
  | "australia"
  | "how"
  | "experience"
  | "about"
  | "contact"
  | "thanks"
  | "privacy"
  | "terms"
  | "credits"

const paths: Record<Exclude<RouteKey, "service">, string> = {
  home: "/",
  services: "/services",
  indonesia: "/indonesia",
  australia: "/australia",
  how: "/how-we-work",
  experience: "/experience",
  about: "/about",
  contact: "/contact",
  thanks: "/thank-you",
  privacy: "/privacy-policy",
  terms: "/terms",
  credits: "/photo-credits",
}

export function serviceSlug(key: ServiceKey): string {
  return getContent().services.find((s) => s.key === key)!.slug
}

export function route(key: RouteKey, serviceKey?: ServiceKey): string {
  if (key === "service") return `${paths.services}/${serviceSlug(serviceKey!)}`
  return paths[key]
}

export const abs = (path: string) => new URL(path, site.url).href

/** Every indexable page, for the sitemap. The thank-you page is left out on purpose. */
export function allPages(): { key: RouteKey; serviceKey?: ServiceKey }[] {
  const keys: RouteKey[] = ["home", "services", "indonesia", "australia", "how", "experience", "about", "contact", "privacy", "terms", "credits"]
  const pages: { key: RouteKey; serviceKey?: ServiceKey }[] = keys.map((key) => ({ key }))
  for (const s of getContent().services) pages.push({ key: "service", serviceKey: s.key })
  return pages
}
