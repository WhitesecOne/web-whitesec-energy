import { ArrowRightIcon } from "lucide-react"
import Link from "next/link"

import { getContent } from "@/content"
import { route } from "@/lib/routes"

export function NotFoundView() {
  const c = getContent()
  const n = c.notFound
  const hrefs = [route("home"), route("services"), route("how"), route("contact")]
  return (
    <section className="border-b border-rule">
      <div className="container-page py-16 lg:py-24">
        <h1 className="display text-[clamp(2.25rem,4.6vw,3.5rem)]">{n.title}</h1>
        <p className="lead mt-6 max-w-[60ch] text-body">{n.lead}</p>
        <ul className="mt-10 grid max-w-4xl gap-x-10 border-t border-ink sm:grid-cols-2">
          {n.suggestions.map((s, i) => (
            <li key={s.label} className="border-b border-rule">
              <Link href={hrefs[i]} className="group flex min-h-11 items-start justify-between gap-4 py-5">
                <span>
                  <span className="block font-bold text-ink group-hover:text-primary group-hover:underline">{s.label}</span>
                  <span className="mt-1 block text-[0.9375rem] text-muted-foreground">{s.desc}</span>
                </span>
                <ArrowRightIcon className="mt-1 size-4 shrink-0 text-ink transition-transform group-hover:translate-x-0.5" aria-hidden />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
