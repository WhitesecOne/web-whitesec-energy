/** Real clients and certification partners, taken as they appear on whitesec.id and whitesec.au. */
export type Logo = { name: string; src: string; width: number; height: number }

export const energyClients: Logo[] = [
  { name: "Kilang Pertamina Internasional", src: "/brand/clients/kilang-pertamina-internasional.png", width: 384, height: 128 },
  { name: "Harbour Energy", src: "/brand/clients/harbour-energy.png", width: 384, height: 128 },
  { name: "Prime Natuna EP", src: "/brand/clients/prime-natuna-ep.png", width: 384, height: 128 },
  { name: "Pupuk Iskandar Muda", src: "/brand/clients/pupuk-iskandar-muda.png", width: 384, height: 128 },
  { name: "PT Lestari Banten Energi", src: "/brand/clients/lestari-banten-energi.png", width: 384, height: 128 },
  { name: "HKI Infrastruktur", src: "/brand/clients/hki-infrastruktur.png", width: 384, height: 128 },
  { name: "BDx Data Centers", src: "/brand/clients/bdx-data-centers.png", width: 384, height: 128 },
]

/** The CIVD-registered partners through which oil and gas work for KKKS is carried out, as stated on whitesec.id. */
export const civdPartners: Logo[] = [
  { name: "Manpro", src: "/brand/clients/manpro.png", width: 384, height: 128 },
  { name: "SCU (Elnusa)", src: "/brand/clients/scu.png", width: 384, height: 128 },
]

export const assurancePartners: Logo[] = [
  { name: "BSI Group", src: "/brand/partners/cert-bsi.png", width: 194, height: 160 },
  { name: "PECB", src: "/brand/partners/pecb-partner.png", width: 256, height: 256 },
  { name: "TÜV SÜD", src: "/brand/partners/cert-tuv-sud.png", width: 160, height: 160 },
  { name: "SGS", src: "/brand/partners/cert-sgs.png", width: 234, height: 160 },
  { name: "Kiwa Compass Assurance Services", src: "/brand/partners/kiwa-compass-logo.png", width: 842, height: 169 },
  { name: "RSM Australia", src: "/brand/partners/rsm-australia-logo.png", width: 332, height: 140 },
]
