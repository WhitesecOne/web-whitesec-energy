"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

import { Button } from "@/components/ui/button"

// Mobile-only bar; steps aside while an on-page CTA marked data-primary-cta is fully on screen.
export function StickyCta({ href, label, hiddenOn }: { href: string; label: string; hiddenOn: string[] }) {
  const pathname = usePathname()
  const [visibleOn, setVisibleOn] = useState<string | null>(null)
  const ctaVisible = visibleOn === pathname

  useEffect(() => {
    const seen = new Set<Element>()
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.intersectionRatio >= 0.99) seen.add(e.target)
          else seen.delete(e.target)
        }
        setVisibleOn(seen.size > 0 ? pathname : null)
      },
      { threshold: [0, 0.99] },
    )
    document.querySelectorAll("[data-primary-cta]").forEach((t) => io.observe(t))
    return () => io.disconnect()
  }, [pathname])

  if (hiddenOn.some((p) => pathname === p)) return null

  return (
    <>
      <div aria-hidden className="h-[calc(4.5rem+env(safe-area-inset-bottom))] md:hidden" />
      <div
        data-hidden={ctaVisible}
        className="fixed inset-x-0 bottom-0 z-30 border-t border-rule bg-white/95 px-4 pt-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] transition-transform duration-200 ease-out data-[hidden=true]:translate-y-full md:hidden"
      >
        <Button size="lg" className="w-full" render={<Link href={href} />} nativeButton={false} tabIndex={ctaVisible ? -1 : undefined}>
          {label}
        </Button>
      </div>
    </>
  )
}
