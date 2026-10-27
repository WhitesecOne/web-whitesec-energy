import Image from "next/image"

import { cn } from "@/lib/utils"

/** The Whitesec cube mark with "energy" added to the wordmark. The mark is the family's own file. */
export function Logo({ className, inverse }: { className?: string; inverse?: boolean }) {
  return (
    <span className={cn("flex items-center gap-2.5", className)}>
      <Image src="/brand/logo-mark.png" alt="" width={217} height={256} className="h-8 w-auto" priority={!inverse} />
      <span className={cn("text-[1.1875rem] leading-none tracking-[-0.03em]", inverse ? "text-white" : "text-ink")}>
        <span className="font-extrabold">Whitesec</span>
        <span className="ml-1.5 font-medium">energy</span>
      </span>
    </span>
  )
}
