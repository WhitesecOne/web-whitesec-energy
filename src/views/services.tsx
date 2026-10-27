import Image from "next/image"
import Link from "next/link"

import { ContactFormFor } from "@/components/contact-section"
import { EngagementDiagram } from "@/components/engagement-diagram"
import { FaqList } from "@/components/faq"
import { JsonLd } from "@/components/json-ld"
import { Reveal } from "@/components/motion"
import { PageHero, Section, SectionHeading } from "@/components/section"
import { ServiceIndex } from "@/components/service-index"
import { getContent, type ServiceKey } from "@/content"
import { servicePhoto } from "@/lib/photos"
import { route } from "@/lib/routes"
import { faqGraph, serviceGraph } from "@/lib/seo"
import { site } from "@/lib/site"
import { CtaBand } from "@/views/cta-band"

export function ServicesIndexView() {
  const c = getContent()
  const p = c.servicePage
  return (
    <>
      <PageHero crumbs={[{ label: p.indexTitle }]} title={p.indexTitle} lead={p.indexLead} />
      <Section>
        <ServiceIndex
          rows={c.services.map((s) => ({
            key: s.key,
            href: route("service", s.key),
            name: s.name,
            card: s.card,
            photo: { src: servicePhoto[s.key].src, width: servicePhoto[s.key].width, height: servicePhoto[s.key].height, alt: s.photoAlt },
          }))}
        />
      </Section>
      <CtaBand />
    </>
  )
}

export function ServiceView({ serviceKey }: { serviceKey: ServiceKey }) {
  const c = getContent()
  const p = c.servicePage
  const s = c.services.find((x) => x.key === serviceKey)!
  const photo = servicePhoto[serviceKey]
  const others = c.services.filter((x) => x.key !== serviceKey)

  return (
    <>
      <JsonLd data={serviceGraph(s)} />
      <JsonLd data={faqGraph(s.faq)} />

      <PageHero crumbs={[{ label: p.indexTitle, href: route("services") }, { label: s.name }]} title={s.name} lead={s.intro}>
        <figure className="mt-10">
          <div className="relative aspect-[16/9] overflow-hidden rounded-lg bg-paper lg:aspect-[21/9]">
            <Image src={photo.src} alt={s.photoAlt} fill priority sizes="(min-width: 1280px) 1180px, 100vw" className="object-cover" />
          </div>
          <figcaption className="mt-3 text-sm text-muted-foreground">{c.common.photoNote}</figcaption>
        </figure>
      </PageHero>

      <Section>
        <div className="grid gap-8 lg:grid-cols-[minmax(0,4fr)_minmax(0,8fr)] lg:gap-16">
          <h2 className="h2">{p.whatIncluded}</h2>
          <ul className="border-t border-ink">
            {s.included.map((item) => (
              <li key={item} className="border-b border-rule py-4 text-[1.0625rem] leading-relaxed text-ink">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section tone="paper">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,4fr)_minmax(0,8fr)] lg:gap-16">
          <div>
            <h2 className="h3 text-[1.5rem]">{p.whoFor}</h2>
            <p className="mt-4 max-w-[40ch] text-[1.0625rem] leading-relaxed text-body">{s.whoFor}</p>
          </div>
          <div>
            <h2 className="h3 text-[1.5rem]">{p.receives}</h2>
            <ul className="mt-4 border-t border-ink">
              {s.receives.map((item) => (
                <li key={item} className="border-b border-rule py-3.5 text-[1.0625rem] leading-relaxed text-ink">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section>
        <Reveal>
          <SectionHeading title={p.rulesTitle} className="mb-10" />
        </Reveal>
        <dl className="grid border-t border-ink md:grid-cols-2 md:gap-x-14">
          {([["id", p.rulesIndonesia], ["au", p.rulesAustralia]] as const).map(([k, label]) => (
            <div key={k} className="border-b border-rule py-6">
              <dt className="text-lg font-bold text-ink">{label}</dt>
              <dd className="mt-2 max-w-[52ch] text-[1.0625rem] leading-relaxed text-body">{s.rules[k]}</dd>
              <dd className="mt-3 text-sm text-muted-foreground">
                {c.common.entity}: {site.entities[k].name}
              </dd>
            </div>
          ))}
        </dl>
      </Section>

      <Section tone="paper">
        <Reveal>
          <SectionHeading title={p.howRuns} lead={p.howRunsLead} className="mb-12" />
        </Reveal>
        <EngagementDiagram steps={s.steps} gateLabel={p.gateLabel} />
      </Section>

      <Section>
        <div className="grid gap-8 lg:grid-cols-[minmax(0,4fr)_minmax(0,8fr)] lg:gap-16">
          <h2 className="h2">{p.faq}</h2>
          <FaqList items={s.faq} />
        </div>
      </Section>

      <Section tone="paper" id="formulir">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,4fr)_minmax(0,8fr)] lg:gap-16">
          <div>
            <h2 className="h2">{p.formTitle}</h2>
            <p className="lead mt-5 max-w-[40ch] text-body">{p.formLead}</p>
          </div>
          <div className="rounded-lg border border-rule bg-white p-5 sm:p-8" data-primary-cta>
            <ContactFormFor defaultService={serviceKey} />
          </div>
        </div>
      </Section>

      <Section>
        <h2 className="h3 text-[1.5rem]">{p.related}</h2>
        <ul className="mt-5 grid border-t border-ink sm:grid-cols-2 sm:gap-x-12">
          {others.map((o) => (
            <li key={o.key} className="border-b border-rule">
              <Link href={route("service", o.key)} className="flex min-h-14 items-center py-3 font-semibold text-ink underline-offset-4 hover:text-primary hover:underline">
                {o.name}
              </Link>
            </li>
          ))}
        </ul>
      </Section>
    </>
  )
}
