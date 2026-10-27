import { ChevronDownIcon } from "lucide-react"

import { PageHero } from "@/components/section"
import { getContent } from "@/content"
import { photos } from "@/lib/photos"
import { site } from "@/lib/site"

/** Numbered legal document: effective date, a contents list (side column on desktop, collapsible on a phone), a 70ch reading column. */
export function LegalView({ kind }: { kind: "privacy" | "terms" }) {
  const c = getContent()
  const doc = c.legal[kind]
  const toc = (
    <ol className="flex flex-col border-l border-rule text-[0.9375rem]">
      {doc.sections.map((s, i) => (
        <li key={s.id}>
          <a href={`#${s.id}`} className="-ml-px flex min-h-9 items-baseline gap-2 border-l-2 border-transparent py-1.5 pl-4 text-body hover:border-primary hover:text-ink">
            <span className="w-5 shrink-0 text-muted-foreground tabular-nums">{i + 1}.</span>
            {s.title}
          </a>
        </li>
      ))}
    </ol>
  )
  return (
    <>
      <PageHero crumbs={[{ label: doc.metaTitle }]} title={doc.title} lead={doc.lead} />
      <div className="container-page grid gap-12 py-12 lg:grid-cols-[16rem_minmax(0,1fr)] lg:gap-16 lg:py-20">
        <nav aria-label={c.legal.toc} className="hidden lg:sticky lg:top-28 lg:block lg:max-h-[calc(100dvh-8rem)] lg:self-start lg:overflow-y-auto">
          <p className="mb-3 text-sm font-semibold text-ink">{c.legal.toc}</p>
          {toc}
        </nav>

        <article className="min-w-0 max-w-[70ch]">
          <dl className="flex flex-wrap gap-x-8 gap-y-2 text-sm">
            <div className="flex gap-2">
              <dt className="text-muted-foreground">{c.legal.effectiveLabel}</dt>
              <dd className="font-medium text-ink">{c.legal.effective}</dd>
            </div>
            <div className="flex gap-2">
              <dt className="text-muted-foreground">{c.legal.operatorLabel}</dt>
              <dd className="font-medium text-ink">{site.entities.id.name}, {site.entities.au.name}</dd>
            </div>
          </dl>

          <details className="group mt-8 rounded-md border border-rule lg:hidden">
            <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between px-4 font-semibold text-ink [&::-webkit-details-marker]:hidden">
              {c.legal.toc}
              <ChevronDownIcon className="size-4 transition-transform group-open:rotate-180" aria-hidden />
            </summary>
            <nav aria-label={c.legal.toc} className="px-4 pb-4">
              {toc}
            </nav>
          </details>

          {doc.sections.map((s, i) => (
            <section key={s.id} id={s.id} aria-labelledby={`${s.id}-judul`} className="mt-12 border-t border-rule pt-10 first-of-type:mt-10">
              <h2 id={`${s.id}-judul`} className="text-2xl leading-tight font-bold tracking-[-0.02em]">
                <span className="tabular-nums">{i + 1}.</span> {s.title}
              </h2>
              <div className="mt-4 flex flex-col gap-4 leading-relaxed text-body">
                {s.paragraphs.map((p) => (
                  <p key={p}>{p}</p>
                ))}
                {s.list && (
                  <ul className="list-disc pl-5 [&>li]:mt-2 [&>li]:pl-1">
                    {s.list.map((l) => (
                      <li key={l}>{l}</li>
                    ))}
                  </ul>
                )}
              </div>
            </section>
          ))}
        </article>
      </div>
    </>
  )
}

export function CreditsView() {
  const c = getContent()
  const k = c.credits
  const rows = Object.values(photos)
  return (
    <>
      <PageHero crumbs={[{ label: k.metaTitle }]} title={k.title} lead={k.lead} />
      <div className="container-page py-12 lg:py-16">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[40rem] border-t border-ink text-left text-[0.9375rem]">
            <thead>
              <tr className="border-b border-rule text-sm text-muted-foreground">
                <th scope="col" className="py-3 pr-4 font-semibold">{k.colPhoto}</th>
                <th scope="col" className="py-3 pr-4 font-semibold">{k.colSource}</th>
                <th scope="col" className="py-3 font-semibold">{k.colLicence}</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((p) => (
                <tr key={p.src} className="border-b border-rule align-top">
                  <th scope="row" className="py-4 pr-4 font-semibold text-ink">{p.title}</th>
                  <td className="py-4 pr-4 text-body">
                    {p.rightsHolder}
                    <br />
                    <a href={p.source} rel="noopener" className="text-primary underline break-all">
                      {p.source.replace("https://", "")}
                    </a>
                  </td>
                  <td className="py-4 text-body">
                    <a href={p.licenceUrl} rel="noopener" className="text-primary underline">
                      {p.licence}
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-6 max-w-[62ch] text-sm text-muted-foreground">{k.note}</p>
      </div>
    </>
  )
}
