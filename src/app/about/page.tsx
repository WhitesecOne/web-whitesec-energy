import { pageMeta } from "@/lib/meta"
import { getContent } from "@/content"
import { AboutView } from "@/views/pages"

export const generateMetadata = () => {
  const c = getContent().about
  return pageMeta({ key: "about", title: c.metaTitle, description: c.metaDescription })
}

export default function Page() {
  return <AboutView />
}
