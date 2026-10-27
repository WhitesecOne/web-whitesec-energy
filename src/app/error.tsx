"use client"

import { getContent } from "@/content"
import { route } from "@/lib/routes"
import { ErrorView } from "@/views/error-view"

export default function ErrorPage({ error, retry }: { error: Error & { digest?: string }; retry: () => void }) {
  return <ErrorView error={error} retry={retry} copy={getContent().error} homeHref={route("home")} />
}
