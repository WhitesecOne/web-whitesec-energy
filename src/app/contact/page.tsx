import { pageMeta } from "@/lib/meta"
import { getContent } from "@/content"
import { ContactView } from "@/views/pages"

export const generateMetadata = () => {
  const c = getContent().contact
  return pageMeta({ key: "contact", title: c.metaTitle, description: c.metaDescription })
}

export default function Page() {
  return <ContactView />
}
