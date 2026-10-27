"use client"

import { ArrowRightIcon } from "lucide-react"
import { AnimatePresence, motion } from "motion/react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

import { cn } from "@/lib/utils"

export type ServiceRow = { key: string; href: string; name: string; card: string; photo: { src: string; width: number; height: number; alt: string } }

/**
 * The services as an index you read down the left, with the photograph of the one you point at on the right.
 * On a phone the photograph sits in each row instead. Every row is a real link.
 */
export function ServiceIndex({ rows }: { rows: ServiceRow[] }) {
  const [active, setActive] = useState(0)
  return (
    <div className="grid gap-10 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:gap-16">
      <ul className="border-t border-ink">
        {rows.map((r, i) => (
          <li key={r.key} className="border-b border-rule">
            <Link
              href={r.href}
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              className="group grid min-h-24 grid-cols-[minmax(0,1fr)_auto] items-center gap-x-5 gap-y-1 py-5 lg:py-6"
            >
              <span className="min-w-0">
                <span className={cn("block text-xl leading-tight font-bold tracking-[-0.015em] text-ink transition-colors sm:text-2xl", active === i && "lg:text-primary")}>
                  {r.name}
                </span>
                <span className="mt-1.5 block max-w-[52ch] text-[0.9375rem] leading-relaxed text-body">{r.card}</span>
              </span>
              <span className="flex items-center gap-4">
                <Image src={r.photo.src} alt="" width={160} height={107} sizes="96px" className="hidden h-16 w-24 rounded-md object-cover sm:block lg:hidden" />
                <ArrowRightIcon className="size-5 text-ink transition-transform group-hover:translate-x-1 group-focus-visible:translate-x-1" aria-hidden />
              </span>
            </Link>
          </li>
        ))}
      </ul>

      <div className="hidden lg:block">
        <div className="sticky top-28">
          <div className="relative aspect-[4/5] overflow-hidden rounded-lg bg-paper">
            <AnimatePresence initial={false}>
              <motion.div
                key={rows[active].key}
                className="absolute inset-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
              >
                <Image src={rows[active].photo.src} alt={rows[active].photo.alt} fill sizes="(min-width: 1024px) 38vw, 0px" className="object-cover" />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  )
}
