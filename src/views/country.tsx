import Image from "next/image"
import Link from "next/link"

import { PageHero, Section, SectionHeading } from "@/components/section"
import { Button } from "@/components/ui/button"
import { getContent } from "@/content"
import { photos } from "@/lib/photos"
import { route } from "@/lib/routes"
import { site, type Country } from "@/lib/site"
import { CtaBand } from "@/views/cta-band"

export function CountryView({ country }: { country: Country }) {
  const c = getContent()
  const cc = c.countries[country]
  const entity = site.entities[country]

  return (
    <>
      <PageHero
       
        crumbs={[{ label: cc.title }]}
        title={cc.title}
        lead={cc.lead}
        actions={
          <div className="mt-8" data-primary-cta>
            <Button size="lg" render={<Link href={route("contact")} />} nativeButton={false}>
              {cc.cta}
            </Button>
          </div>
        }
      >
        <figure className="mt-10">
          <div className="relative aspect-[16/9] overflow-hidden rounded-lg bg-paper lg:aspect-[21/9]">
            <Image src={photos[country === "id" ? "indonesia" : "australia"].src} alt={cc.photoAlt} fill priority sizes="(min-width: 1280px) 1180px, 100vw" className="object-cover" />
          </div>
          <figcaption className="mt-3 text-sm text-muted-foreground">{c.common.photoNote}</figcaption>
        </figure>
      </PageHero>

      <Section>
        <SectionHeading title={cc.rulesTitle} lead={cc.entityLine} className="mb-10" />
        <ul className="border-t border-ink">
          {cc.rules.map((r) => {
            const svc = c.services.find((s) => s.key === r.service)!
            return (
              <li key={r.service} className="grid gap-2 border-b border-rule py-6 lg:grid-cols-[minmax(0,4fr)_minmax(0,8fr)] lg:gap-16">
                <Link href={route("service", r.service)} className="text-lg font-bold text-ink underline-offset-4 hover:text-primary hover:underline">
                  {svc.name}
                </Link>
                <p className="max-w-[62ch] text-[1.0625rem] leading-relaxed text-body">{r.text}</p>
              </li>
            )
          })}
        </ul>
      </Section>

      <Section tone="paper">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="h3 text-[1.5rem]">{cc.officeTitle}</h2>
            <p className="mt-4 font-semibold text-ink">{entity.name}</p>
            <ul className="mt-4 flex flex-col gap-5">
              {entity.offices.map((o) => (
                <li key={o.label}>
                  <p className="font-semibold text-ink">{o.label}</p>
                  <address className="mt-1 text-body not-italic">
                    {o.lines.map((l) => (
                      <span key={l} className="block">
                        {l}
                      </span>
                    ))}
                  </address>
                </li>
              ))}
            </ul>
            <p className="mt-5 flex flex-col text-[0.9375rem]">
              <a href={`mailto:${entity.email}`} className="link-action min-h-11 self-start">
                {entity.email}
              </a>
              <a href={entity.phoneHref} className="link-action min-h-11 self-start">
                {entity.phone}
              </a>
            </p>
          </div>
          <div>
            <h2 className="h3 text-[1.5rem]">{cc.projectsTitle}</h2>
            <p className="mt-4 max-w-[52ch] text-[1.0625rem] leading-relaxed text-body">{cc.projectsText}</p>
            <Link href={route("experience")} className="link-action mt-5 min-h-11">
              {c.nav.experience}
            </Link>
          </div>
        </div>
      </Section>

      <CtaBand />
    </>
  )
}
