import { pageMeta } from "@/lib/meta"
import { getContent } from "@/content"
import { ThanksView } from "@/views/pages"

export const generateMetadata = () => {
  const t = getContent().contact.thanks
  return pageMeta({ key: "thanks", title: t.metaTitle, description: t.metaDescription, noindex: true })
}

export default async function Page({ searchParams }: { searchParams: Promise<{ t?: string | string[] }> }) {
  const { t } = await searchParams
  return <ThanksView token={typeof t === "string" ? t : undefined} />
}
