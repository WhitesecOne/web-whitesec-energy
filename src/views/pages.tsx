import Image from "next/image"
import Link from "next/link"

import { ContactFormFor } from "@/components/contact-section"
import { ConversionPing } from "@/components/conversion-ping"
import { EngagementDiagram } from "@/components/engagement-diagram"
import { LogoRow } from "@/components/logo-row"
import { Reveal } from "@/components/motion"
import { PageHero, Section, SectionHeading } from "@/components/section"
import { Button } from "@/components/ui/button"
import { getContent } from "@/content"
import { assurancePartners, civdPartners, energyClients } from "@/lib/partners"
import { photos } from "@/lib/photos"
import { route } from "@/lib/routes"
import { site } from "@/lib/site"
import { CtaBand } from "@/views/cta-band"

export function HowView() {
  const c = getContent()
  const h = c.how
  return (
    <>
      <PageHero crumbs={[{ label: c.nav.how }]} title={h.title} lead={h.lead} />
      <Section>
        <Reveal>
          <SectionHeading title={h.studyTitle} lead={h.studyLead} className="mb-12" />
        </Reveal>
        <EngagementDiagram steps={h.steps} gateLabel={c.servicePage.gateLabel} />
        <p className="mt-8 text-sm text-muted-foreground">{h.gateExplain}</p>
      </Section>
      <Section tone="paper">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
          <div>
            <h2 className="h2">{h.buildTitle}</h2>
            <p className="lead mt-5 max-w-[46ch] text-body">{h.buildLead}</p>
            <div className="relative mt-8 aspect-[3/2] overflow-hidden rounded-lg bg-white">
              <Image src={photos.offshore.src} alt={h.photoAlt} fill sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover" />
            </div>
            <p className="mt-3 text-sm text-muted-foreground">{c.common.photoNote}</p>
          </div>
          <ul className="border-t border-ink lg:self-start">
            {h.buildPoints.map((p) => (
              <li key={p.title} className="border-b border-rule py-6">
                <h3 className="text-lg font-bold text-ink">{p.title}</h3>
                <p className="mt-2 max-w-[52ch] text-[1.0625rem] leading-relaxed text-body">{p.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </Section>
      <CtaBand />
    </>
  )
}

export function ExperienceView() {
  const c = getContent()
  const e = c.experience
  return (
    <>
      <PageHero crumbs={[{ label: c.nav.experience }]} title={e.title} lead={e.lead} />

      <Section>
        <div className="grid gap-6 lg:grid-cols-[minmax(0,4fr)_minmax(0,8fr)] lg:gap-16">
          <h2 className="h3 text-[1.5rem]">{e.noteTitle}</h2>
          <p className="max-w-[62ch] text-[1.0625rem] leading-relaxed text-body">{e.noteText}</p>
        </div>
      </Section>

      <Section tone="paper">
        <SectionHeading title={e.casesTitle} lead={e.casesLead} className="mb-12" />
        <ol className="border-t border-ink">
          {e.cases.map((k) => (
            <li key={k.title} className="grid gap-8 border-b border-rule py-10 lg:grid-cols-[minmax(0,4fr)_minmax(0,8fr)] lg:gap-16">
              <div>
                <p className="text-sm font-semibold text-muted-foreground">{k.sector}</p>
                <h3 className="h3 mt-2">{k.title}</h3>
                <p className="mt-4 text-sm text-body">
                  {e.duration}: {k.duration}
                </p>
                <p className="mt-1 text-sm text-body">
                  {e.related}: {k.related}
                </p>
              </div>
              <div className="grid gap-6 md:grid-cols-3 md:gap-8">
                <div>
                  <h4 className="font-bold text-ink">{e.challenge}</h4>
                  <p className="mt-2 text-[0.9375rem] leading-relaxed text-body">{k.challenge}</p>
                </div>
                <div>
                  <h4 className="font-bold text-ink">{e.approach}</h4>
                  <ul className="mt-2 flex flex-col gap-2 text-[0.9375rem] leading-relaxed text-body">
                    {k.approach.map((a) => (
                      <li key={a}>{a}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-ink">{e.outcome}</h4>
                  <ul className="mt-2 flex flex-col gap-2 text-[0.9375rem] leading-relaxed text-body">
                    {k.outcome.map((a) => (
                      <li key={a}>{a}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      <Section>
        <SectionHeading title={e.clientsTitle} lead={e.clientsLead} className="mb-10" />
        <LogoRow logos={energyClients} className="gap-x-10 gap-y-8" height="h-14" />
        <p className="mt-10 text-sm font-semibold text-muted-foreground">CIVD</p>
        <LogoRow logos={civdPartners} className="mt-4 gap-x-10" height="h-14" />
      </Section>

      <CtaBand />
    </>
  )
}

export function AboutView() {
  const c = getContent()
  const a = c.about
  return (
    <>
      <PageHero crumbs={[{ label: c.nav.about }]} title={a.title} lead={a.lead} />

      <Section>
        <div className="grid gap-8 lg:grid-cols-[minmax(0,4fr)_minmax(0,8fr)] lg:gap-16">
          <h2 className="h2">{a.practiceTitle}</h2>
          <div className="flex max-w-[62ch] flex-col gap-5 text-[1.0625rem] leading-relaxed text-body">
            {a.practiceText.map((t) => (
              <p key={t}>{t}</p>
            ))}
          </div>
        </div>
      </Section>

      <Section tone="paper">
        <SectionHeading title={a.teamTitle} lead={a.teamLead} className="mb-10" />
        <ul className="grid border-t border-ink md:grid-cols-2 md:gap-x-14">
          {a.team.map((m) => (
            <li key={m.name} className="border-b border-rule py-7">
              <p className="text-xl font-bold text-ink">{m.name}</p>
              <p className="mt-1 text-sm font-semibold text-brand-deep">{m.role}</p>
              <p className="mt-3 max-w-[52ch] text-[1.0625rem] leading-relaxed text-body">{m.bio}</p>
            </li>
          ))}
        </ul>
        <h3 className="h3 mt-12 text-[1.25rem]">{a.credentialsTitle}</h3>
        <p className="mt-3 max-w-[62ch] text-[1.0625rem] leading-relaxed text-ink">{a.credentials.join(" · ")}</p>
      </Section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="h3 text-[1.5rem]">{a.partnersTitle}</h2>
            <p className="mt-4 max-w-[52ch] text-[1.0625rem] leading-relaxed text-body">{a.partnersText}</p>
            <LogoRow logos={assurancePartners} className="mt-6 gap-x-8" height="h-11" />
          </div>
          <div>
            <h2 className="h3 text-[1.5rem]">{a.epcTitle}</h2>
            <p className="mt-4 max-w-[52ch] text-[1.0625rem] leading-relaxed text-body">{a.epcText}</p>
            <h2 className="h3 mt-10 text-[1.5rem]">{a.familyTitle}</h2>
            <p className="mt-4 max-w-[52ch] text-[1.0625rem] leading-relaxed text-body">{a.familyText}</p>
            <ul className="mt-4 flex flex-wrap gap-x-6">
              {Object.values(site.related).map((r) => (
                <li key={r.url}>
                  <a href={r.url} rel="noopener" className="link-action min-h-11">
                    {r.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <CtaBand />
    </>
  )
}

export function ContactView() {
  const c = getContent()
  const k = c.contact
  return (
    <>
      <PageHero crumbs={[{ label: c.nav.contact }]} title={k.title} lead={k.lead} />
      <Section>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:gap-16">
          <div className="rounded-lg border border-rule bg-white p-5 sm:p-8" data-primary-cta>
            <ContactFormFor />
          </div>
          <aside id="contact-direct" aria-label={k.directTitle} className="flex flex-col gap-10">
            <p className="max-w-[46ch] text-body">{k.routeNote}</p>
            {(["id", "au"] as const).map((key) => {
              const e = site.entities[key]
              return (
                <section key={key} className="border-t border-ink pt-5">
                  <h2 className="text-lg font-bold text-ink">{e.name}</h2>
                  <p className="text-sm text-muted-foreground">{c.common.country[key]}</p>
                  <ul className="mt-4 flex flex-col gap-4">
                    {e.offices.map((o) => (
                      <li key={o.label}>
                        <p className="font-semibold text-ink">{o.label}</p>
                        <address className="mt-1 text-[0.9375rem] text-body not-italic">
                          {o.lines.map((l) => (
                            <span key={l} className="block">
                              {l}
                            </span>
                          ))}
                        </address>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-3 flex flex-col text-[0.9375rem]">
                    <a href={`mailto:${e.email}`} className="link-action min-h-11 self-start">
                      {e.email}
                    </a>
                    <a href={e.phoneHref} className="link-action min-h-11 self-start">
                      {e.phone}
                    </a>
                    <a href={e.whatsapp} rel="noopener" className="link-action min-h-11 self-start">
                      {c.common.whatsapp}
                    </a>
                  </p>
                </section>
              )
            })}
          </aside>
        </div>
      </Section>
    </>
  )
}

export function ThanksView({ token }: { token?: string }) {
  const c = getContent()
  const t = c.contact.thanks
  return (
    <>
      <ConversionPing token={token} />
      <PageHero
       
        crumbs={[{ label: c.nav.contact, href: route("contact") }, { label: t.metaTitle }]}
        title={t.title}
        lead={t.lead}
        actions={
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button size="lg" render={<Link href={route("how")} />} nativeButton={false}>
              {t.primary}
            </Button>
            <Button size="lg" variant="outline" render={<Link href={route("home")} />} nativeButton={false}>
              {t.secondary}
            </Button>
          </div>
        }
      />
      <Section>
        <SectionHeading title={t.stepsTitle} className="mb-10" />
        <ol className="grid border-t border-ink md:grid-cols-3 md:gap-x-10">
          {t.steps.map((s, i) => (
            <li key={s.title} className="border-b border-rule py-6">
              <p className="text-sm font-bold text-brand-deep tabular-nums" aria-hidden>
                {i + 1}
              </p>
              <h3 className="mt-1 text-lg font-bold text-ink">{s.title}</h3>
              <p className="mt-2 text-[1.0625rem] leading-relaxed text-body">{s.text}</p>
            </li>
          ))}
        </ol>
      </Section>
    </>
  )
}
