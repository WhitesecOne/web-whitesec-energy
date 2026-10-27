/** Facts that are the same in every language. Translated copy lives in src/content. */
export const site = {
  name: "Whitesec Energy",
  domain: "whitesec.energy",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://whitesec.energy",
  related: {
    id: { name: "Whitesec ID", url: "https://whitesec.id" },
    au: { name: "Whitesec AU", url: "https://www.whitesec.au" },
    one: { name: "Whitesec One", url: "https://whitesec.one" },
  },
  /** The legal entity that signs the contract in each country. */
  entities: {
    id: {
      name: "PT Topi Putih Siberindo",
      brand: "Whitesec ID",
      email: "support@whitesec.id",
      phone: "+62 878-7666-6016",
      phoneHref: "tel:+628787666016",
      whatsapp: "https://wa.me/628787666016",
      offices: [
        {
          label: "Centennial Tower, Level 29",
          lines: ["RT.2/RW.2, Karet Semanggi, Kec. Setiabudi", "Jakarta Selatan, DKI Jakarta 12950"],
        },
        {
          label: "Whitesec ID Hub",
          lines: ["Jl. H. Baneng No. 4, RT 006/RW 03, Ceger", "Jakarta Timur 13820"],
        },
      ],
    },
    au: {
      name: "Whitesec AU",
      brand: "Whitesec AU",
      email: "support@whitesec.au",
      phone: "+61 413 211 278",
      phoneHref: "tel:+61413211278",
      whatsapp: "https://wa.me/61413211278",
      offices: [
        {
          label: "Perth",
          lines: ["Level 3, IBM Building, 1060 Hay Street", "West Perth WA 6005, Australia"],
        },
      ],
    },
  },
  linkedin: "https://www.linkedin.com/company/whitesec-au",
} as const

export type Country = "id" | "au"
