import { pageMeta } from "@/lib/meta"
import { getContent } from "@/content"
import { LegalView } from "@/views/legal"

export const generateMetadata = () => {
  const d = getContent().legal.terms
  return pageMeta({ key: "terms", title: d.metaTitle, description: d.metaDescription })
}

export default function Page() {
  return <LegalView kind="terms" />
}
