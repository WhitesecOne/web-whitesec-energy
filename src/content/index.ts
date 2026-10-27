import { en } from "./en.ts"
import type { Content } from "./types.ts"

export * from "./types.ts"

export function getContent(): Content {
  return en
}
