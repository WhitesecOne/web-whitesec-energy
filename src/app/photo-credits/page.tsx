import { pageMeta } from "@/lib/meta"
import { getContent } from "@/content"
import { CreditsView } from "@/views/legal"

export const generateMetadata = () => {
  const k = getContent().credits
  return pageMeta({ key: "credits", title: k.metaTitle, description: k.metaDescription })
}

export default function Page() {
  return <CreditsView />
}
