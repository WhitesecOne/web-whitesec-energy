"use server"

import { redirect } from "next/navigation"

import { parseContact, type ContactData, type ContactState } from "@/lib/contact-schema"
import { route } from "@/lib/routes"
import { site } from "@/lib/site"

export async function sendEnquiry(prev: ContactState, formData: FormData): Promise<ContactState> {
  // Honeypot: people never see this field, bots fill it. Pretend it worked, without a conversion token.
  if (String(formData.get("website") ?? "") !== "") redirect(route("thanks"))

  const result = parseContact(formData)
  if ("errors" in result) return { ...result, attempt: (prev.attempt ?? 0) + 1 }

  // ponytail: no rate limit; add one (per IP) if the form starts attracting spam past the honeypot.
  if (!(await deliver(result.data))) {
    const values = Object.fromEntries([...formData.entries()].map(([k, v]) => [k, String(v)]))
    return { values, failed: true, attempt: (prev.attempt ?? 0) + 1 }
  }

  redirect(`${route("thanks")}?t=${crypto.randomUUID()}`)
}

/** The entity that signs the contract in the visitor's country receives the enquiry. */
function recipient(d: ContactData): string {
  if (process.env.CONTACT_TO) return process.env.CONTACT_TO
  const override = d.country === "id" ? process.env.CONTACT_TO_ID : process.env.CONTACT_TO_AU
  return override ?? site.entities[d.country].email
}

/** Emails the enquiry through Resend. Without RESEND_API_KEY it only logs, so local runs and previews still work. */
async function deliver(d: ContactData): Promise<boolean> {
  const entity = site.entities[d.country]
  const lines = [
    `Country: ${d.country === "id" ? "Indonesia" : "Australia"} (${entity.name})`,
    `Name: ${d.name}`,
    `Organisation: ${d.organisation}`,
    `Email: ${d.email}`,
    `Service: ${d.service}`,
    "",
    d.message,
  ]
  const key = process.env.RESEND_API_KEY
  if (!key) {
    console.warn("[contact] RESEND_API_KEY is not set; the enquiry is only logged on the server.\n" + lines.join("\n"))
    return true
  }
  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: process.env.CONTACT_FROM ?? "Whitesec Energy <onboarding@resend.dev>",
        to: [recipient(d)],
        reply_to: d.email,
        subject: `Enquiry from whitesec.energy: ${d.organisation} (${d.name})`,
        text: lines.join("\n"),
      }),
      signal: AbortSignal.timeout(10_000),
    })
    if (!res.ok) console.error(`[contact] Resend rejected the message: ${res.status} ${await res.text()}`)
    return res.ok
  } catch (e) {
    console.error("[contact] Could not reach Resend:", e)
    return false
  }
}
