import { notFound } from "next/navigation"

import { getContent } from "@/content"
import { pageMeta } from "@/lib/meta"
import { ServiceView } from "@/views/services"

// Only the seven real slugs exist; any other address is a static 404, never a streamed page.
export const dynamicParams = false

type Params = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return getContent().services.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: Params) {
  const { slug } = await params
  const s = getContent().services.find((x) => x.slug === slug)
  if (!s) return {}
  return pageMeta({ key: "service", serviceKey: s.key, title: s.metaTitle ?? s.name, description: s.metaDescription })
}

export default async function Page({ params }: Params) {
  const { slug } = await params
  const s = getContent().services.find((x) => x.slug === slug)
  if (!s) notFound()
  return <ServiceView serviceKey={s.key} />
}
