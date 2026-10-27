export type ServiceKey = "studies" | "records" | "ot" | "efficiency" | "decarbonisation" | "owner" | "renewable"
export const serviceKeys: ServiceKey[] = ["studies", "records", "ot", "efficiency", "decarbonisation", "owner", "renewable"]

/** One stop on the engagement line. A gate is where the client signs off before the next stage. */
export type Step = { title: string; text: string; gate?: boolean }

export type Faq = { q: string; a: string }

export type Service = {
  key: ServiceKey
  slug: string
  name: string
  /** Search-result title when it must differ from the heading. */
  metaTitle?: string
  /** One line on the services index and the home list. */
  card: string
  metaDescription: string
  intro: string
  included: string[]
  whoFor: string
  receives: string[]
  /** The rule or buyer in each country, from the plan's "Delivery by country" table. */
  rules: { id: string; au: string }
  steps: Step[]
  faq: Faq[]
  photoAlt: string
}

export type CountryCopy = {
  /** Title and description for search results, distinct from the page heading. */
  metaTitle: string
  /** Path-independent facts shown on the country page and the home block. */
  title: string
  lead: string
  entityLine: string
  /** The main regulations, named, for the short list on the home page. */
  highlights: string[]
  rulesTitle: string
  /** One row per service: what the local rule or buyer is. */
  rules: { service: ServiceKey; text: string }[]
  officeTitle: string
  projectsTitle: string
  projectsText: string
  photoAlt: string
  cta: string
}

export type Case = {
  sector: string
  title: string
  duration: string
  related: string
  challenge: string
  approach: string[]
  outcome: string[]
}

export type LegalSection = { id: string; title: string; paragraphs: string[]; list?: string[] }

export type Content = {
  ogLocale: string
  brandTitle: string
  tagline: string
  description: string
  nav: {
    services: string
    indonesia: string
    australia: string
    how: string
    experience: string
    about: string
    contact: string
    menu: string
    close: string
    skip: string
    primaryNav: string
    allServices: string
  }
  common: {
    talk: string
    seeServices: string
    readMore: string
    home: string
    breadcrumb: string
    photoNote: string
    sendEnquiry: string
    contactDirect: string
    email: string
    phone: string
    whatsapp: string
    address: string
    entity: string
    country: { id: string; au: string }
    pageUpdated: string
  }
  footer: {
    statement: string
    links: string
    legal: string
    privacy: string
    terms: string
    credits: string
    cookieSettings: string
    otherSites: string
    copyright: string
  }
  home: {
    heroTitle: string
    heroLead: string
    heroPhotoAlt: string
    heroPhotoCaption: string
    entityStrip: { id: string; au: string }
    servicesTitle: string
    servicesLead: string
    countriesTitle: string
    countriesLead: string
    howTitle: string
    howLead: string
    howLink: string
    experienceTitle: string
    experienceLead: string
    experienceLink: string
    backedTitle: string
    backedText: string
    partnersLabel: string
    contactTitle: string
    contactText: string
    metaTitle: string
  }
  services: Service[]
  servicePage: {
    whatIncluded: string
    whoFor: string
    receives: string
    rulesTitle: string
    rulesIndonesia: string
    rulesAustralia: string
    howRuns: string
    howRunsLead: string
    gateLabel: string
    faq: string
    formTitle: string
    formLead: string
    related: string
    indexTitle: string
    indexLead: string
    indexMeta: string
    indexMetaTitle: string
  }
  countries: { id: CountryCopy; au: CountryCopy }
  how: {
    metaTitle: string
    metaDescription: string
    title: string
    lead: string
    studyTitle: string
    studyLead: string
    steps: Step[]
    gateExplain: string
    buildTitle: string
    buildLead: string
    buildPoints: { title: string; text: string }[]
    photoAlt: string
  }
  experience: {
    metaTitle: string
    metaDescription: string
    title: string
    lead: string
    noteTitle: string
    noteText: string
    casesTitle: string
    casesLead: string
    challenge: string
    approach: string
    outcome: string
    duration: string
    related: string
    clientsTitle: string
    clientsLead: string
    cases: Case[]
  }
  about: {
    metaTitle: string
    metaDescription: string
    title: string
    lead: string
    practiceTitle: string
    practiceText: string[]
    teamTitle: string
    teamLead: string
    team: { name: string; role: string; bio: string }[]
    credentialsTitle: string
    credentials: string[]
    partnersTitle: string
    partnersText: string
    epcTitle: string
    epcText: string
    familyTitle: string
    familyText: string
  }
  contact: {
    metaTitle: string
    metaDescription: string
    title: string
    lead: string
    officesTitle: string
    directTitle: string
    routeNote: string
    form: {
      intro: string
      required: string
      labels: {
        name: string
        organisation: string
        email: string
        country: string
        service: string
        message: string
        consent: string
      }
      placeholders: { country: string; service: string }
      hints: { message: string }
      consent: string
      consentLink: string
      submit: string
      sending: string
      summary: (n: number) => string
      failedTitle: string
      failedText: string
      errors: {
        name: string
        organisation: string
        email: string
        emailInvalid: string
        country: string
        service: string
        messageMin: string
        messageMax: string
        consent: string
      }
      limits: (name: string, max: number) => string
      countryOptions: { id: string; au: string }
      serviceOther: string
    }
    thanks: {
      metaTitle: string
      metaDescription: string
      title: string
      lead: string
      stepsTitle: string
      steps: { title: string; text: string }[]
      primary: string
      secondary: string
    }
  }
  legal: {
    effective: string
    effectiveLabel: string
    operatorLabel: string
    toc: string
    privacy: { metaTitle: string; metaDescription: string; title: string; lead: string; sections: LegalSection[] }
    terms: { metaTitle: string; metaDescription: string; title: string; lead: string; sections: LegalSection[] }
  }
  credits: {
    metaTitle: string
    metaDescription: string
    title: string
    lead: string
    colPhoto: string
    colSource: string
    colLicence: string
    note: string
  }
  cookie: {
    label: string
    title: string
    text: string
    link: string
    reject: string
    accept: string
  }
  notFound: {
    metaTitle: string
    title: string
    lead: string
    suggestions: { label: string; desc: string }[]
  }
  error: { title: string; lead: string; reference: string; retry: string; home: string }
  sticky: { label: string }
}
