import { pageMeta } from "@/lib/meta"
import { getContent } from "@/content"
import { HomeView } from "@/views/home"

export const generateMetadata = () => pageMeta({ key: "home", title: getContent().home.metaTitle, description: getContent().description })

export default function Page() {
  return <HomeView />
}
