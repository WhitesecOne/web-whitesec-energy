import { Plus_Jakarta_Sans } from "next/font/google"

// One sans serif across the site. Plus Jakarta Sans is drawn close to the heavy, rounded geometry of the Whitesec
// wordmark, so headings (800) and text (400 to 600) read as the same family as the logo.
export const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-jakarta", display: "swap" })
