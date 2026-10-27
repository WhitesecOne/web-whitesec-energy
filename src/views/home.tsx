import Image from "next/image"
import Link from "next/link"

import { EngagementDiagram } from "@/components/engagement-diagram"
import { LogoRow } from "@/components/logo-row"
import { HeroPhoto, HeroText, Reveal } from "@/components/motion"
import { Section, SectionHeading } from "@/components/section"
import { ServiceIndex } from "@/components/service-index"
import { Button } from "@/components/ui/button"
import { getContent } from "@/content"
import { assurancePartners } from "@/lib/partners"
import { photos, servicePhoto } from "@/lib/photos"
import { route } from "@/lib/routes"
import { CtaBand } from "@/views/cta-band"

export function HomeView() {
  const c = getContent()
  const h = c.home

  return (
    <>
      <section className="bg-white">
        <div className="container-page grid gap-10 pt-8 pb-14 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:items-end lg:gap-14 lg:pt-14 lg:pb-20">
          <HeroText className="min-w-0">
            <h1 className="display max-w-[19ch] text-[clamp(2.375rem,4.9vw,4rem)]">{h.heroTitle}</h1>
            <p className="lead mt-6 max-w-[56ch] text-body">{h.heroLead}</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row" data-primary-cta>
              <Button size="lg" render={<Link href={route("contact")} />} nativeButton={false}>
                {c.common.talk}
              </Button>
              <Button size="lg" variant="outline" render={<Link href={route("services")} />} nativeButton={false}>
                {c.common.seeServices}
              </Button>
            </div>
            <ul className="mt-12 grid gap-3 border-t border-ink pt-5 text-[0.9375rem] sm:grid-cols-2 sm:gap-8">
              <li>{h.entityStrip.id}</li>
              <li>{h.entityStrip.au}</li>
            </ul>
          </HeroText>

          <figure className="min-w-0">
            <HeroPhoto className="relative aspect-[4/3] rounded-lg bg-paper lg:aspect-[4/5]">
              <Image src={photos.hero.src} alt={h.heroPhotoAlt} fill priority sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover" />
            </HeroPhoto>
            <figcaption className="mt-3 text-sm text-muted-foreground">
              {h.heroPhotoCaption} {c.common.photoNote}
            </figcaption>
          </figure>
        </div>
      </section>

      <Section id="services" className="border-t border-rule">
        <Reveal>
          <SectionHeading title={h.servicesTitle} lead={h.servicesLead} className="mb-12" />
        </Reveal>
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

      <Section tone="paper">
        <Reveal>
          <SectionHeading title={h.countriesTitle} lead={h.countriesLead} className="mb-12" />
        </Reveal>
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
          {(["id", "au"] as const).map((k, i) => {
            const cc = c.countries[k]
            return (
              <Reveal key={k} delay={i * 0.08}>
                <article className="flex h-full flex-col">
                  <div className="relative aspect-[2/1] overflow-hidden rounded-lg bg-white">
                    <Image src={photos[k === "id" ? "indonesia" : "australia"].src} alt={cc.photoAlt} fill sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover" />
                  </div>
                  <h3 className="h3 mt-6 text-[1.5rem]">{cc.title}</h3>
                  <p className="mt-1 font-semibold text-ink">{cc.entityLine}</p>
                  <ul className="mt-5 flex flex-1 flex-col border-t border-ink">
                    {cc.highlights.map((r) => (
                      <li key={r} className="border-b border-rule py-3 text-[0.9375rem] text-body">
                        {r}
                      </li>
                    ))}
                  </ul>
                  <Link href={route(k === "id" ? "indonesia" : "australia")} className="link-action mt-6 min-h-11 self-start">
                    {cc.title}: {c.common.readMore.toLowerCase()}
                  </Link>
                </article>
              </Reveal>
            )
          })}
        </div>
      </Section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,4fr)_minmax(0,8fr)] lg:gap-16">
          <Reveal>
            <SectionHeading title={h.howTitle} lead={h.howLead} />
            <Link href={route("how")} className="link-action mt-6 min-h-11">
              {h.howLink}
            </Link>
          </Reveal>
          <EngagementDiagram steps={c.how.steps} gateLabel={c.servicePage.gateLabel} className="md:self-center" />
        </div>
      </Section>

      <Section tone="paper">
        <Reveal>
          <SectionHeading title={h.experienceTitle} lead={h.experienceLead} className="mb-10" />
        </Reveal>
        <ul className="grid border-t border-ink lg:grid-cols-2 lg:gap-x-14">
          {c.experience.cases.slice(0, 2).map((k) => (
            <li key={k.title} className="border-b border-rule py-8">
              <p className="text-sm font-semibold text-muted-foreground">{k.sector}</p>
              <h3 className="h3 mt-2">{k.title}</h3>
              <p className="mt-3 max-w-[54ch] text-body">{k.challenge}</p>
              <p className="mt-3 max-w-[54ch] font-medium text-ink">
                {c.experience.outcome}: {k.outcome[0]}
              </p>
            </li>
          ))}
        </ul>
        <Link href={route("experience")} className="link-action mt-8 min-h-11">
          {h.experienceLink}
        </Link>
      </Section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,6fr)_minmax(0,6fr)] lg:gap-16">
          <Reveal>
            <SectionHeading title={h.backedTitle} />
            <p className="lead mt-5 max-w-[56ch] text-body">{h.backedText}</p>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="text-sm font-semibold text-muted-foreground">{h.partnersLabel}</p>
            <LogoRow logos={assurancePartners} className="mt-5 gap-x-8" height="h-11" />
          </Reveal>
        </div>
      </Section>

      <CtaBand />
    </>
  )
}
