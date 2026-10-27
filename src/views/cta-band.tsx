import Link from "next/link"

import { Section } from "@/components/section"
import { Button } from "@/components/ui/button"
import { getContent } from "@/content"
import { route } from "@/lib/routes"

/** The closing call to talk: one line, one button, on the dark band. */
export function CtaBand({ title, text }: { title?: string; text?: string }) {
  const c = getContent()
  return (
    <Section tone="ink" className="py-16 lg:py-20">
      <div className="grid gap-8 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:items-end">
        <div>
          <h2 className="h2 max-w-[24ch] text-white">{title ?? c.home.contactTitle}</h2>
          <p className="lead mt-5 max-w-[56ch] text-white/80">{text ?? c.home.contactText}</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row lg:justify-end" data-primary-cta>
          <Button size="lg" render={<Link href={route("contact")} />} nativeButton={false}>
            {c.common.talk}
          </Button>
        </div>
      </div>
    </Section>
  )
}
