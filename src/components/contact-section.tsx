import { ContactForm } from "@/components/contact-form"
import { getContent, type ServiceKey } from "@/content"
import { route } from "@/lib/routes"

/** The contact form, optionally with a service already chosen. */
export function ContactFormFor({ defaultService, className }: { defaultService?: ServiceKey; className?: string }) {
  const c = getContent()
  const f = c.contact.form
  return (
    <ContactForm
      className={className}
      privacyHref={route("privacy")}
      defaultService={defaultService}
      countries={[
        { value: "id", label: f.countryOptions.id },
        { value: "au", label: f.countryOptions.au },
      ]}
      services={[...c.services.map((s) => ({ value: s.key, label: s.name })), { value: "other", label: f.serviceOther }]}
      copy={{
        intro: f.intro,
        labels: { name: f.labels.name, organisation: f.labels.organisation, email: f.labels.email, country: f.labels.country, service: f.labels.service, message: f.labels.message, consent: f.labels.consent },
        placeholders: f.placeholders,
        messageHint: f.hints.message,
        consent: f.consent,
        consentLink: f.consentLink,
        submit: f.submit,
        sending: f.sending,
        summaryTemplate: f.summary(999999).replace("999999", "{n}"),
        failedTitle: f.failedTitle,
        failedText: f.failedText,
      }}
    />
  )
}
