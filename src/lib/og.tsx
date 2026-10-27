import { readFile } from "node:fs/promises"
import { join } from "node:path"

import { ImageResponse } from "next/og"

import { getContent } from "@/content"

const fontDir = join(process.cwd(), "node_modules/@fontsource/plus-jakarta-sans/files")

/** 1200 x 630 social card: the mark, the wordmark and the positioning line, on white with orange only in the mark. */
export async function ogCard() {
  const c = getContent()
  const [heavy, medium, mark] = await Promise.all([
    readFile(join(fontDir, "plus-jakarta-sans-latin-800-normal.woff")),
    readFile(join(fontDir, "plus-jakarta-sans-latin-500-normal.woff")),
    readFile(join(process.cwd(), "public/brand/logo-mark.png")),
  ])
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", background: "#ffffff", padding: "64px 72px", fontFamily: "Jakarta" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          {/* eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text -- Satori image, not a page element */}
          <img src={`data:image/png;base64,${mark.toString("base64")}`} width={62} height={73} />
          <div style={{ display: "flex", fontSize: 44, color: "#0f172a", letterSpacing: -1.2 }}>
            <span style={{ fontWeight: 800 }}>Whitesec</span>
            <span style={{ fontWeight: 500, marginLeft: 12 }}>energy</span>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 72, fontWeight: 800, color: "#0f172a", lineHeight: 1.04, letterSpacing: -2.4, maxWidth: 980 }}>{c.home.heroTitle}</div>
          <div style={{ marginTop: 28, height: 2, width: 120, background: "#0f172a" }} />
          <div style={{ marginTop: 24, fontSize: 28, fontWeight: 500, color: "#334155", maxWidth: 940 }}>{c.tagline}</div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        { name: "Jakarta", data: heavy, weight: 800, style: "normal" },
        { name: "Jakarta", data: medium, weight: 500, style: "normal" },
      ],
    },
  )
}
