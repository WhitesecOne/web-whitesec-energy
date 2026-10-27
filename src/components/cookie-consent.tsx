"use client"

import Link from "next/link"
import Script from "next/script"
import { useEffect, useState, useSyncExternalStore } from "react"

import { Button } from "@/components/ui/button"

type Consent = "granted" | "denied"

const KEY = "we-consent"
const REOPEN = "we:cookie-settings"
const GA_ID = process.env.NEXT_PUBLIC_GA_ID

function read(): Consent | null {
  try {
    const v = localStorage.getItem(KEY)
    return v === "granted" || v === "denied" ? v : null
  } catch {
    return null
  }
}

function subscribe(cb: () => void) {
  window.addEventListener("storage", cb)
  return () => window.removeEventListener("storage", cb)
}

export type CookieCopy = { label: string; title: string; text: string; link: string; reject: string; accept: string }

export function CookieConsent({ copy, privacyHref }: { copy: CookieCopy; privacyHref: string }) {
  // Server snapshot "denied": analytics stays off and the banner hidden until the browser knows.
  const stored = useSyncExternalStore(subscribe, read, () => "denied" as Consent)
  const [editing, setEditing] = useState(false)

  useEffect(() => {
    const open = () => setEditing(true)
    window.addEventListener(REOPEN, open)
    return () => window.removeEventListener(REOPEN, open)
  }, [])

  function choose(value: Consent) {
    try {
      localStorage.setItem(KEY, value)
    } catch {}
    setEditing(false)
    window.dispatchEvent(new StorageEvent("storage"))
    // Revoking after the analytics script loaded needs a reload to drop it.
    if (value === "denied" && stored === "granted") window.location.reload()
  }

  return (
    <>
      {GA_ID && stored === "granted" && (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
          <Script id="ga-init" strategy="afterInteractive">
            {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}window.gtag=gtag;gtag('consent','default',{analytics_storage:'granted'});gtag('js',new Date());gtag('config','${GA_ID}');`}
          </Script>
        </>
      )}

      {(editing || stored === null) && (
        <section
          role="region"
          aria-label={copy.label}
          className="fixed inset-x-3 bottom-3 z-50 mx-auto max-w-3xl rounded-lg border border-ink/20 bg-white p-4 shadow-[0_18px_40px_-18px_rgb(15_23_42/0.4)] sm:inset-x-6 sm:p-5 mb-[env(safe-area-inset-bottom)]"
        >
          <p className="font-bold text-ink">{copy.title}</p>
          <p className="mt-1 text-[0.9375rem] text-body">
            {copy.text}{" "}
            <Link href={privacyHref} className="font-semibold text-primary underline">
              {copy.link}
            </Link>
            .
          </p>
          {/* Equal weight on purpose: refusing is as easy as allowing. */}
          <div className="mt-4 grid grid-cols-2 gap-2 sm:flex sm:justify-end">
            <Button variant="outline" size="lg" onClick={() => choose("denied")}>
              {copy.reject}
            </Button>
            <Button variant="outline" size="lg" onClick={() => choose("granted")}>
              {copy.accept}
            </Button>
          </div>
        </section>
      )}
    </>
  )
}

export function OpenCookieSettings({ className, label }: { className?: string; label: string }) {
  return (
    <button type="button" onClick={() => window.dispatchEvent(new Event(REOPEN))} className={className}>
      {label}
    </button>
  )
}
