"use client"

import Link from "next/link"
import { useEffect } from "react"

import { Button } from "@/components/ui/button"

export type ErrorCopy = { title: string; lead: string; reference: string; retry: string; home: string }

export function ErrorView({ error, retry, copy, homeHref }: { error: Error & { digest?: string }; retry: () => void; copy: ErrorCopy; homeHref: string }) {
  useEffect(() => {
    console.error(error)
  }, [error])
  return (
    <section className="border-b border-rule">
      <div className="container-page py-16 lg:py-24">
        <h1 className="display text-[clamp(2.25rem,4.6vw,3.5rem)]">{copy.title}</h1>
        <p className="lead mt-6 max-w-[60ch] text-body">{copy.lead}</p>
        {error.digest && (
          <p className="mt-4 text-sm text-muted-foreground">
            {copy.reference} {error.digest}
          </p>
        )}
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button size="lg" onClick={() => retry()}>
            {copy.retry}
          </Button>
          <Button size="lg" variant="outline" render={<Link href={homeHref} />} nativeButton={false}>
            {copy.home}
          </Button>
        </div>
      </div>
    </section>
  )
}
