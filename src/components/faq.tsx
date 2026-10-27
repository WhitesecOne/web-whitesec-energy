import type { Faq } from "@/content"

/** Every answer stays on the page, so the markup a visitor reads is the markup the FAQ structured data describes. */
export function FaqList({ items }: { items: Faq[] }) {
  return (
    <dl className="border-t border-ink">
      {items.map((f) => (
        <div key={f.q} className="grid gap-2 border-b border-rule py-6 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-10">
          <dt className="text-lg font-bold text-ink">{f.q}</dt>
          <dd className="max-w-[62ch] text-body">{f.a}</dd>
        </div>
      ))}
    </dl>
  )
}
