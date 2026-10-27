"use client"

import Link from "next/link"
import { useActionState, useEffect, useRef, useState } from "react"

import { sendEnquiry } from "@/app/_actions/contact"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Field, FieldContent, FieldDescription, FieldError, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Spinner } from "@/components/ui/spinner"
import { Textarea } from "@/components/ui/textarea"
import type { ContactField } from "@/lib/contact-schema"

export type FormCopy = {
  intro: string
  labels: Record<ContactField, string>
  placeholders: { country: string; service: string }
  messageHint: string
  consent: string
  consentLink: string
  submit: string
  sending: string
  /** "Please check {n} fields:" with {n} where the count goes. */
  summaryTemplate: string
  failedTitle: string
  failedText: string
}

export type Option = { value: string; label: string }

export function ContactForm({
  copy,
  countries,
  services,
  defaultService,
  privacyHref,
  className,
}: {
  copy: FormCopy
  countries: Option[]
  services: Option[]
  defaultService?: string
  privacyHref: string
  className?: string
}) {
  const [state, formAction, pending] = useActionState(sendEnquiry, {})
  // Fields the visitor has touched since the last failed submit; their stale errors are hidden.
  const [edited, setEdited] = useState<{ at?: number; fields: ContactField[] }>({ fields: [] })
  const touched = edited.at === state.attempt ? edited.fields : []
  const errors = Object.fromEntries(Object.entries(state.errors ?? {}).filter(([f]) => !touched.includes(f as ContactField))) as NonNullable<typeof state.errors>
  const markEdited = (f: ContactField) =>
    setEdited((e) => (e.at === state.attempt ? (e.fields.includes(f) ? e : { at: e.at, fields: [...e.fields, f] }) : { at: state.attempt, fields: [f] }))
  const values = state.values ?? {}
  const count = Object.keys(errors).length
  const summaryRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (state.attempt) summaryRef.current?.focus()
  }, [state.attempt])

  // Wires a control to its hint and error so screen readers read both.
  const a11y = (f: ContactField, hint = false) => {
    const ids = [hint && `${f}-hint`, errors[f] && `${f}-error`].filter(Boolean).join(" ")
    return { id: f, "aria-invalid": errors[f] ? true : undefined, "aria-describedby": ids || undefined }
  }
  const error = (f: ContactField) => (
    // role unset: the summary above already announces every error once.
    <FieldError id={`${f}-error`} role={undefined}>
      {errors[f]}
    </FieldError>
  )
  const text = (f: ContactField, props: React.ComponentProps<"input"> = {}) => (
    <Field data-invalid={errors[f] ? true : undefined}>
      <FieldLabel htmlFor={f}>{copy.labels[f]}</FieldLabel>
      <Input {...a11y(f)} name={f} defaultValue={values[f]} required className="h-11" {...props} />
      {error(f)}
    </Field>
  )
  const alert =
    "mb-6 rounded-md border border-destructive/40 bg-destructive/5 p-4 text-sm text-destructive outline-none focus-visible:ring-3 focus-visible:ring-destructive/30"

  return (
    // key: remount after each failed submit so every control (Select and Checkbox included) shows the returned values.
    <form
      key={state.attempt ?? 0}
      action={formAction}
      noValidate
      aria-busy={pending}
      className={className}
      onInput={(e) => {
        const name = (e.target as HTMLInputElement).name
        if (name in copy.labels) markEdited(name as ContactField)
      }}
    >

      {count > 0 && (
        <div ref={summaryRef} role="alert" tabIndex={-1} className={alert}>
          <p className="font-semibold">{copy.summaryTemplate.replace("{n}", String(count))}</p>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            {(Object.keys(errors) as ContactField[]).map((f) => (
              <li key={f}>
                {copy.labels[f]}: {errors[f]}
              </li>
            ))}
          </ul>
        </div>
      )}

      {state.failed && count === 0 && (
        <div ref={summaryRef} role="alert" tabIndex={-1} className={alert}>
          <p className="font-semibold">{copy.failedTitle}</p>
          <p className="mt-1">{copy.failedText}</p>
        </div>
      )}

      <p className="mb-6 text-sm text-muted-foreground">{copy.intro}</p>

      <FieldGroup className="grid grid-cols-[minmax(0,1fr)] gap-5 sm:grid-cols-2 [&>*]:min-w-0">
        {text("name", { autoComplete: "name" })}
        {text("email", { type: "email", autoComplete: "email", inputMode: "email" })}
        {text("organisation", { autoComplete: "organization" })}

        <Field data-invalid={errors.country ? true : undefined}>
          <FieldLabel htmlFor="country">{copy.labels.country}</FieldLabel>
          <Select name="country" items={countries} defaultValue={values.country || null} onValueChange={() => markEdited("country")}>
            <SelectTrigger {...a11y("country")} className="h-11 w-full min-w-0 bg-white text-base data-[size=default]:h-11 md:text-sm">
              <SelectValue placeholder={copy.placeholders.country} />
            </SelectTrigger>
            <SelectContent>
              {countries.map((o) => (
                <SelectItem key={o.value} value={o.value} className="min-h-11 text-base md:min-h-9 md:text-sm">
                  {o.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {error("country")}
        </Field>

        <Field data-invalid={errors.service ? true : undefined} className="sm:col-span-2">
          <FieldLabel htmlFor="service">{copy.labels.service}</FieldLabel>
          <Select name="service" items={services} defaultValue={values.service || defaultService || null} onValueChange={() => markEdited("service")}>
            <SelectTrigger {...a11y("service")} className="h-11 w-full min-w-0 bg-white text-base data-[size=default]:h-11 md:text-sm">
              <SelectValue placeholder={copy.placeholders.service} />
            </SelectTrigger>
            <SelectContent>
              {services.map((o) => (
                <SelectItem key={o.value} value={o.value} className="min-h-11 text-base md:min-h-9 md:text-sm">
                  {o.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {error("service")}
        </Field>

        <Field data-invalid={errors.message ? true : undefined} className="sm:col-span-2">
          <FieldLabel htmlFor="message">{copy.labels.message}</FieldLabel>
          <Textarea {...a11y("message", true)} name="message" defaultValue={values.message} required minLength={10} maxLength={2000} rows={5} className="min-h-32" />
          <FieldDescription id="message-hint">{copy.messageHint}</FieldDescription>
          {error("message")}
        </Field>

        <Field orientation="horizontal" data-invalid={errors.consent ? true : undefined} className="sm:col-span-2">
          <Checkbox {...a11y("consent", true)} name="consent" defaultChecked={values.consent === "on"} onCheckedChange={() => markEdited("consent")} required className="mt-0.5" />
          <FieldContent>
            <FieldLabel htmlFor="consent" className="leading-snug font-normal text-body">
              {copy.consent}
            </FieldLabel>
            <FieldDescription id="consent-hint">
              <Link href={privacyHref} target="_blank" rel="noopener" className="font-semibold text-primary underline">
                {copy.consentLink}
              </Link>
            </FieldDescription>
            {error("consent")}
          </FieldContent>
        </Field>
      </FieldGroup>

      {/* Honeypot, hidden from people and assistive tech. */}
      <div aria-hidden className="absolute -left-[9999px] size-px overflow-hidden">
        <label htmlFor="website">Do not fill this field</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" defaultValue="" />
      </div>

      <Button type="submit" size="lg" disabled={pending} className="mt-8 w-full sm:w-auto">
        {pending ? (
          <>
            <Spinner role={undefined} aria-label={undefined} aria-hidden />
            {copy.sending}
          </>
        ) : (
          copy.submit
        )}
      </Button>
    </form>
  )
}
