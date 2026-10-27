import { pageMeta } from "@/lib/meta"
import { getContent } from "@/content"
import { HowView } from "@/views/pages"

export const generateMetadata = () => {
  const c = getContent().how
  return pageMeta({ key: "how", title: c.metaTitle, description: c.metaDescription })
}

export default function Page() {
  return <HowView />
}
