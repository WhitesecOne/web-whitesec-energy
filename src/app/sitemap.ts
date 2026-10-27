import type { MetadataRoute } from "next"

import { abs, allPages, route } from "@/lib/routes"

// Canonical 200 pages only: no thank-you page, no 404.
// Date of the last content revision; bump it when page copy changes.
const lastModified = new Date("2026-10-27")

export default function sitemap(): MetadataRoute.Sitemap {
  return allPages().map(({ key, serviceKey }) => ({ url: abs(route(key, serviceKey)), lastModified }))
}
