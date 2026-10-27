// Run with: node src/lib/contact-schema.check.ts
// Checks the contact form rules: a valid enquiry passes, and each rule fails with its own message.
import assert from "node:assert/strict"

import { parseContact } from "./contact-schema.ts"

const base = {
  name: "Rina Wulandari",
  organisation: "Example Energy Ltd",
  email: "rina@example-energy.com",
  country: "id",
  service: "studies",
  message: "We are weighing a new records centre at our field site.",
  consent: "on",
}
const form = (o: Record<string, string>) => {
  const f = new FormData()
  for (const [k, v] of Object.entries(o)) f.set(k, v)
  return f
}

assert.ok("data" in parseContact(form(base)), "a valid enquiry passes")

const bad = parseContact(form({ ...base, name: "", email: "not-an-email", country: "xx", message: "short", consent: "" }))
assert.ok("errors" in bad)
assert.equal(bad.errors.name, "Enter your name.")
assert.match(bad.errors.email ?? "", /email/i)
assert.equal(bad.errors.country, "Choose your country.")
assert.match(bad.errors.message ?? "", /at least 10/)
assert.ok(bad.errors.consent, "consent is required")

const svc = parseContact(form({ ...base, service: "nope" }))
assert.ok("errors" in svc)
assert.equal(svc.errors.service, "Choose the service you are interested in.")

assert.ok("data" in parseContact(form({ ...base, service: "other" })), "the 'not sure' option is accepted")
assert.ok("errors" in parseContact(form({ ...base, message: "x".repeat(2001) })), "a message over 2,000 characters fails")
console.log("contact-schema.check: ok")
