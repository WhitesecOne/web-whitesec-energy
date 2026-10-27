import type { Metadata } from "next"

import { getContent } from "@/content"
import { NotFoundView } from "@/views/not-found"

export const metadata: Metadata = { title: getContent().notFound.metaTitle, robots: { index: false } }

export default function NotFound() {
  return <NotFoundView />
}
