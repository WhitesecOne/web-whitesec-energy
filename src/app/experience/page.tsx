import { pageMeta } from "@/lib/meta"
import { getContent } from "@/content"
import { ExperienceView } from "@/views/pages"

export const generateMetadata = () => {
  const c = getContent().experience
  return pageMeta({ key: "experience", title: c.metaTitle, description: c.metaDescription })
}

export default function Page() {
  return <ExperienceView />
}
