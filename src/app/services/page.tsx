import { pageMeta } from "@/lib/meta"
import { getContent } from "@/content"
import { ServicesIndexView } from "@/views/services"

export const generateMetadata = () =>
  pageMeta({ key: "services", title: getContent().servicePage.indexMetaTitle, description: getContent().servicePage.indexMeta })

export default function Page() {
  return <ServicesIndexView />
}
