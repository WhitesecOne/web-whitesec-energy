import Link from "next/link"
import { ChevronRightIcon } from "lucide-react"

import { JsonLd } from "@/components/json-ld"
import { getContent } from "@/content"
import { breadcrumbGraph } from "@/lib/seo"
import { route } from "@/lib/routes"
import { cn } from "@/lib/utils"

export function Section({
  id,
  tone = "white",
  className,
  children,
}: {
  id?: string
  tone?: "white" | "paper" | "ink"
  className?: string
  children: React.ReactNode
}) {
  return (
    <section id={id} className={cn("py-16 lg:py-24", tone === "paper" && "bg-paper", tone === "ink" && "bg-ink text-white", className)}>
      <div className="container-page">{children}</div>
    </section>
  )
}

export function SectionHeading({
  title,
  lead,
  className,
  inverse,
  as: H = "h2",
}: {
  title: React.ReactNode
  lead?: React.ReactNode
  className?: string
  inverse?: boolean
  as?: "h2" | "h3"
}) {
  return (
    <div className={cn("max-w-3xl", className)}>
      <H className={cn("h2", inverse && "text-white")}>{title}</H>
      {lead && <p className={cn("lead mt-5 max-w-[62ch]", inverse ? "text-white/80" : "text-body")}>{lead}</p>}
    </div>
  )
}

export type Crumb = { href?: string; label: string }

export function Breadcrumb({ items }: { items: Crumb[] }) {
  const c = getContent()
  return (
    <nav aria-label={c.common.breadcrumb} className="text-sm text-muted-foreground">
      <ol className="flex flex-wrap items-center gap-1.5">
        <li>
          <Link href={route("home")} className="inline-flex min-h-9 items-center underline-offset-4 hover:text-ink hover:underline">
            {c.common.home}
          </Link>
        </li>
        {items.map((it, i) => (
          <li key={it.label} className="flex items-center gap-1.5">
            <ChevronRightIcon className="size-3.5" aria-hidden />
            {it.href && i < items.length - 1 ? (
              <Link href={it.href} className="inline-flex min-h-9 items-center underline-offset-4 hover:text-ink hover:underline">
                {it.label}
              </Link>
            ) : (
              <span aria-current="page" className="font-medium text-ink">
                {it.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}

/** Inner-page opening: breadcrumb, the page's one h1, a lead, and an optional visual or actions. Rules, not boxes, give it structure. */
export function PageHero({
  crumbs,
  title,
  lead,
  actions,
  children,
  className,
}: {
  crumbs: Crumb[]
  title: React.ReactNode
  lead?: React.ReactNode
  actions?: React.ReactNode
  children?: React.ReactNode
  className?: string
}) {
  return (
    <section className={cn("border-b border-rule bg-white", className)}>
      <JsonLd data={breadcrumbGraph(crumbs)} />
      <div className="container-page pt-6 pb-12 lg:pb-16">
        <Breadcrumb items={crumbs} />
        <h1 className="display mt-8 max-w-[22ch] text-[clamp(2.25rem,5vw,3.75rem)]">{title}</h1>
        {lead && <p className="lead mt-6 max-w-[62ch] text-body">{lead}</p>}
        {actions}
        {children}
      </div>
    </section>
  )
}
