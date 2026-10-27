import { z } from "zod"

import { getContent, serviceKeys } from "../content/index.ts"

export const countryValues = ["id", "au"] as const
export const serviceValues = [...serviceKeys, "other"] as const

export type ContactField = "name" | "organisation" | "email" | "country" | "service" | "message" | "consent"
export const contactFields: ContactField[] = ["name", "organisation", "email", "country", "service", "message", "consent"]

export type ContactData = {
  name: string
  organisation: string
  email: string
  country: (typeof countryValues)[number]
  service: (typeof serviceValues)[number]
  message: string
  consent: "on"
}

export type ContactState = {
  errors?: Partial<Record<ContactField, string>>
  values?: Partial<Record<ContactField, string>>
  /** Bumped on every failed submit so the form remounts with the returned values. */
  attempt?: number
  /** Set when the data was valid but could not be delivered; the visitor's values are kept. */
  failed?: boolean
}

/** Every message below reaches the screen as written. */
export function contactSchema() {
  const e = getContent().contact.form.errors
  const limit = getContent().contact.form.limits
  const l = getContent().contact.form.labels
  const text = (message: string, label: string, max: number) => z.string().trim().min(1, message).max(max, limit(label, max))
  return z.object({
    name: text(e.name, l.name, 120),
    organisation: text(e.organisation, l.organisation, 160),
    email: z.string().trim().min(1, e.email).max(200, limit(l.email, 200)).pipe(z.email(e.emailInvalid)),
    country: z.enum(countryValues, e.country),
    service: z.enum(serviceValues, e.service),
    message: z.string().trim().min(10, e.messageMin).max(2000, e.messageMax),
    consent: z.literal("on", e.consent),
  })
}

export function parseContact(formData: FormData): { data: ContactData } | Required<Pick<ContactState, "errors" | "values">> {
  const values = Object.fromEntries(contactFields.map((f) => [f, String(formData.get(f) ?? "")])) as Record<ContactField, string>
  const result = contactSchema().safeParse(values)
  if (result.success) return { data: result.data as ContactData }
  const errors: Partial<Record<ContactField, string>> = {}
  for (const issue of result.error.issues) {
    const f = issue.path[0] as ContactField
    errors[f] ??= issue.message
  }
  return { errors, values }
}
