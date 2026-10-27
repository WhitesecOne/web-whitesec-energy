import { pageMeta } from "@/lib/meta"
import { getContent } from "@/content"
import { CountryView } from "@/views/country"

export const generateMetadata = () => {
  const cc = getContent().countries.id
  return pageMeta({ key: "indonesia", title: cc.metaTitle, description: cc.lead })
}

export default function Page() {
  return <CountryView country="id" />
}
