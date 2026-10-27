"use client"

import { ChevronDownIcon, MenuIcon } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useRef, useState } from "react"

import { Logo } from "@/components/logo"
import { Button } from "@/components/ui/button"
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"

export type NavService = { href: string; name: string; card: string }
export type NavProps = {
  homeHref: string
  services: NavService[]
  servicesHref: string
  links: { href: string; label: string }[]
  contact: { href: string; label: string }
  labels: { services: string; allServices: string; menu: string; close: string; primaryNav: string }
}

function useActive() {
  const pathname = usePathname()
  return (href: string) => (href === "/" ? pathname === href : pathname === href || pathname.startsWith(`${href}/`))
}

export function HeaderNav(p: NavProps) {
  const pathname = usePathname()
  const isActive = useActive()
  const [open, setOpen] = useState(false)
  const [sheet, setSheet] = useState(false)
  const wrap = useRef<HTMLDivElement>(null)

  // The menus close when the page changes, on Escape, and on a click outside.
  useEffect(() => {
    const t = setTimeout(() => {
      setOpen(false)
      setSheet(false)
    }, 0)
    return () => clearTimeout(t)
  }, [pathname])
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false)
    const onDown = (e: MouseEvent) => wrap.current && !wrap.current.contains(e.target as Node) && setOpen(false)
    document.addEventListener("keydown", onKey)
    document.addEventListener("mousedown", onDown)
    return () => {
      document.removeEventListener("keydown", onKey)
      document.removeEventListener("mousedown", onDown)
    }
  }, [open])

  const servicesActive = isActive(p.servicesHref)
  const link = "inline-flex min-h-11 items-center rounded-md px-3 text-[0.9375rem] font-medium text-ink hover:bg-paper"

  return (
    <header className="sticky top-0 z-40 border-b border-rule bg-white/95 backdrop-blur-sm supports-[backdrop-filter]:bg-white/90">
      <div className="container-page flex h-[4.5rem] items-center justify-between gap-6">
        <Link href={p.homeHref} aria-label="Whitesec Energy" className="shrink-0">
          <Logo />
        </Link>

        <nav aria-label={p.labels.primaryNav} className="hidden items-center gap-0.5 lg:flex">
          <div ref={wrap} className="relative">
            <button
              type="button"
              aria-expanded={open}
              aria-controls="menu-services"
              onClick={() => setOpen((v) => !v)}
              className={cn(link, "gap-1.5", servicesActive && "text-primary")}
            >
              {p.labels.services}
              <ChevronDownIcon className={cn("size-4 transition-transform", open && "rotate-180")} aria-hidden />
            </button>
            {open && (
              <div id="menu-services" className="absolute top-full left-1/2 z-50 mt-2 w-[44rem] -translate-x-1/2 rounded-lg border border-rule bg-white p-3 shadow-[0_18px_40px_-18px_rgb(15_23_42/0.35)]">
                <ul className="grid grid-cols-2 gap-x-2">
                  {p.services.map((s) => (
                    <li key={s.href}>
                      <Link href={s.href} className="block rounded-md px-3 py-2.5 hover:bg-paper focus-visible:bg-paper">
                        <span className="block font-semibold text-ink">{s.name}</span>
                        <span className="mt-0.5 block text-sm leading-snug text-muted-foreground">{s.card}</span>
                      </Link>
                    </li>
                  ))}
                  <li>
                    <Link href={p.servicesHref} className="flex min-h-11 items-center rounded-md px-3 py-2.5 font-semibold text-primary underline decoration-primary/40 hover:bg-paper">
                      {p.labels.allServices}
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
          {p.links.map((l) => (
            <Link key={l.href} href={l.href} aria-current={isActive(l.href) ? "page" : undefined} className={cn(link, isActive(l.href) && "text-primary")}>
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button className="hidden lg:inline-flex" render={<Link href={p.contact.href} />} nativeButton={false}>
            {p.contact.label}
          </Button>

          <Sheet open={sheet} onOpenChange={setSheet}>
            <SheetTrigger render={<Button variant="outline" size="icon" aria-label={p.labels.menu} className="lg:hidden" />}>
              <MenuIcon aria-hidden />
            </SheetTrigger>
            <SheetContent side="right" className="w-full overflow-y-auto p-0 sm:max-w-md" showCloseButton closeLabel={p.labels.close}>
              <SheetHeader className="border-b border-rule px-5 py-4">
                <SheetTitle className="text-lg font-bold text-ink">{p.labels.menu}</SheetTitle>
              </SheetHeader>
              <nav aria-label={p.labels.primaryNav} className="flex flex-col px-3 py-2">
                <p className="px-3 pt-3 pb-1 text-sm font-semibold text-muted-foreground">{p.labels.services}</p>
                <ul className="flex flex-col">
                  {p.services.map((s) => (
                    <li key={s.href}>
                      <SheetClose render={<Link href={s.href} className="flex min-h-11 items-center rounded-md px-3 py-2 font-medium text-ink hover:bg-paper" />}>{s.name}</SheetClose>
                    </li>
                  ))}
                  <li>
                    <SheetClose render={<Link href={p.servicesHref} className="flex min-h-11 items-center rounded-md px-3 py-2 font-semibold text-primary underline decoration-primary/40" />}>
                      {p.labels.allServices}
                    </SheetClose>
                  </li>
                </ul>
                <div className="my-3 border-t border-rule" />
                <ul className="flex flex-col">
                  {p.links.map((l) => (
                    <li key={l.href}>
                      <SheetClose render={<Link href={l.href} className="flex min-h-11 items-center rounded-md px-3 py-2 font-medium text-ink hover:bg-paper" />}>{l.label}</SheetClose>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 flex flex-col gap-3 px-3 pb-6">
                  <SheetClose render={<Link href={p.contact.href} className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-6 font-semibold text-primary-foreground hover:bg-brand-deep" />}>
                    {p.contact.label}
                  </SheetClose>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
