import type { Metadata, Viewport } from "next"

import { SiteShell } from "@/components/site-shell"
import { getContent } from "@/content"
import { jakarta } from "@/lib/fonts"
import { site } from "@/lib/site"

import "./globals.css"

const c = getContent()

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.name}: ${c.tagline}`, template: `%s | ${site.name}` },
  description: c.description,
  applicationName: site.name,
  openGraph: { siteName: site.name, images: [{ url: "/og", width: 1200, height: 630, alt: site.name }] },
}

export const viewport: Viewport = { themeColor: "#ffffff" }

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={jakarta.variable}>
      <body className="min-h-dvh">
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  )
}
