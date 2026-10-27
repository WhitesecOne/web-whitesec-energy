import { Skeleton } from "@/components/ui/skeleton"

/** The shape of an inner page while it loads: breadcrumb, heading, lead, one wide image, then rows. */
export function PageSkeleton() {
  return (
    <div className="container-page pt-6 pb-16" role="status" aria-busy="true">
      <span className="sr-only">Loading…</span>
      <Skeleton className="h-5 w-48" />
      <Skeleton className="mt-8 h-14 w-full max-w-xl" />
      <Skeleton className="mt-6 h-5 w-full max-w-2xl" />
      <Skeleton className="mt-3 h-5 w-full max-w-lg" />
      <Skeleton className="mt-10 aspect-[21/9] w-full" />
      <div className="mt-12 grid gap-4 lg:grid-cols-[minmax(0,4fr)_minmax(0,8fr)] lg:gap-16">
        <Skeleton className="h-10 w-56" />
        <div className="flex flex-col gap-3">
          {Array.from({ length: 5 }, (_, i) => (
            <Skeleton key={i} className="h-12 w-full" />
          ))}
        </div>
      </div>
    </div>
  )
}
