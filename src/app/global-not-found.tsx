import type { Metadata } from "next"
import Link from "next/link"

import { getContent } from "@/content"
import { jakarta } from "@/lib/fonts"

import "./globals.css"

export const metadata: Metadata = { title: "404 | Whitesec Energy", robots: { index: false } }

/** One 404 for every URL no route matches. It renders without the site shell. */
export default function GlobalNotFound() {
  const c = getContent()
  return (
    <html lang="en" className={jakarta.variable}>
      <body className="min-h-dvh">
        <main className="container-page py-20 lg:py-28">
          <p className="font-extrabold tracking-[-0.03em] text-ink">
            Whitesec <span className="font-medium">energy</span>
          </p>
          <h1 className="display mt-10 text-[clamp(2.25rem,4.6vw,3.5rem)]">{c.notFound.title}</h1>
          <p className="lead mt-5 max-w-[60ch] text-body">{c.notFound.lead}</p>
          <p className="mt-6">
            <Link href="/" className="link-action min-h-11">
              {c.common.home}
            </Link>
          </p>
        </main>
      </body>
    </html>
  )
}
