import type { ServiceKey } from "@/content/types"

export type Photo = {
  src: string
  width: number
  height: number
  /** Where the photo comes from and under what licence. Shown on the Photo Credits page. */
  title: string
  rightsHolder: string
  source: string
  licence: string
  licenceUrl: string
}

const CC_BY_SA_4 = { licence: "CC BY-SA 4.0", licenceUrl: "https://creativecommons.org/licenses/by-sa/4.0/" }
const PD = { licence: "Public domain", licenceUrl: "https://creativecommons.org/publicdomain/mark/1.0/" }

export const photos = {
  hero: {
    src: "/photos/hero.webp", width: 2000, height: 1125,
    title: "Solar array at sunrise", rightsHolder: "Pexels contributor", source: "https://www.pexels.com/photo/9893729/",
    licence: "Pexels License", licenceUrl: "https://www.pexels.com/license/",
  },
  studies: {
    src: "/photos/studies.webp", width: 1600, height: 1067,
    title: "Aerial view of an oil refinery next to the Gulf of Mexico", rightsHolder: "Carol M. Highsmith, Library of Congress",
    source: "https://commons.wikimedia.org/wiki/File:Aerial_view_of_oil_refinery_next_to_the_Gulf_of_Mexico_near_Houston,_Texas_LCCN2011630532.tif",
    ...PD,
  },
  records: {
    src: "/photos/records.webp", width: 1600, height: 1067,
    title: "Racks, Amravati Data Center", rightsHolder: "PiDatacenters", source: "https://commons.wikimedia.org/wiki/File:Racks_Amravati_Data_Center.jpg",
    ...CC_BY_SA_4,
  },
  ot: {
    src: "/photos/ot.webp", width: 1600, height: 1067,
    title: "Altbach Power Plant Control Room", rightsHolder: "Zonk43", source: "https://commons.wikimedia.org/wiki/File:Altbach_Power_Plant_Control_Room.JPG",
    ...PD,
  },
  efficiency: {
    src: "/photos/efficiency.webp", width: 1600, height: 1067,
    title: "Transmission towers at dusk", rightsHolder: "Pexels contributor", source: "https://www.pexels.com/photo/3334038/",
    licence: "Pexels License", licenceUrl: "https://www.pexels.com/license/",
  },
  decarbonisation: {
    src: "/photos/decarbonisation.webp", width: 1600, height: 1067,
    title: "Albany wind farm, November 2024", rightsHolder: "BrettMontgomery", source: "https://commons.wikimedia.org/wiki/File:Albany_wind_farm_November_2024.jpg",
    ...CC_BY_SA_4,
  },
  owner: {
    src: "/photos/owner.webp", width: 1600, height: 1067,
    title: "Desert Sunlight Battery Energy Storage System", rightsHolder: "Bureau of Land Management California",
    source: "https://commons.wikimedia.org/wiki/File:Desert_Sunlight_Battery_Energy_Storage_System_(52945816430).jpg", ...PD,
  },
  renewable: {
    src: "/photos/renewable.webp", width: 1600, height: 1067,
    title: "Hatil rooftop solar panels", rightsHolder: "HokuroN", source: "https://commons.wikimedia.org/wiki/File:Hatil_rooftop_solar_panels.jpg",
    ...CC_BY_SA_4,
  },
  indonesia: {
    src: "/photos/indonesia.webp", width: 1800, height: 900,
    title: "Jakarta skyline at night, Jalan Jenderal Sudirman", rightsHolder: "Robin Widjaja",
    source: "https://commons.wikimedia.org/wiki/File:Jakarta_skyline_at_night_--_Business_District_area_at_Jalan_Jenderal_Sudirman,_Central_Jakarta,_as_seen_from_Kuningan_District,_South_Jakarta,_Indonesia.jpg",
    ...CC_BY_SA_4,
  },
  australia: {
    src: "/photos/australia.webp", width: 1800, height: 900,
    title: "Matagarup Bridge, July 2018", rightsHolder: "Samuel Wiki", source: "https://commons.wikimedia.org/wiki/File:Matagarup_Bridge,_July_2018_02.jpg",
    licence: "CC0 1.0", licenceUrl: "https://creativecommons.org/publicdomain/zero/1.0/",
  },
  offshore: {
    src: "/photos/offshore.webp", width: 1600, height: 1067,
    title: "CSIRO ScienceImage 1905, oil and gas drilling platform", rightsHolder: "CSIRO",
    source: "https://commons.wikimedia.org/wiki/File:CSIRO_ScienceImage_1905_Oil_and_Gas_Drilling_Platform.jpg",
    licence: "CC BY 3.0", licenceUrl: "https://creativecommons.org/licenses/by/3.0/",
  },
} satisfies Record<string, Photo>

export const servicePhoto: Record<ServiceKey, Photo> = {
  studies: photos.studies,
  records: photos.records,
  ot: photos.ot,
  efficiency: photos.efficiency,
  decarbonisation: photos.decarbonisation,
  owner: photos.owner,
  renewable: photos.renewable,
}
