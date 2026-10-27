import Image from "next/image"

import type { Logo } from "@/lib/partners"
import { cn } from "@/lib/utils"

/** Logos at one optical height. The names are real; each carries its own alt text. */
export function LogoRow({ logos, className, height = "h-12" }: { logos: Logo[]; className?: string; height?: string }) {
  return (
    <ul className={cn("flex flex-wrap items-center gap-x-10 gap-y-6", className)}>
      {logos.map((l) => (
        <li key={l.name}>
          <Image src={l.src} alt={l.name} width={l.width} height={l.height} className={cn("w-auto max-w-[11rem] object-contain", height)} />
        </li>
      ))}
    </ul>
  )
}
