"use client"

import { motion } from "motion/react"

import type { Step } from "@/content"
import { cn } from "@/lib/utils"

/**
 * How an engagement runs, as one line from kickoff to handover. Circles are stages; a diamond is a decision
 * gate, where the client signs off before the next stage. Vertical on a phone, horizontal from md up.
 */
const draw = { transition: { duration: 1.1, ease: [0.16, 1, 0.3, 1] as const } }

export function EngagementDiagram({ steps, gateLabel, className }: { steps: Step[]; gateLabel: string; className?: string }) {
  return (
    // The list is what scrolls into view; the two lines follow it, because a one-pixel line is too thin to observe on its own.
    <motion.ol
      className={cn("relative grid gap-8 md:auto-cols-fr md:grid-flow-col md:gap-6", className)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
    >
      {/* The line draws itself once, on arrival: downward on a phone, rightward from md up. */}
      <motion.span
        aria-hidden
        className="absolute top-3 bottom-3 left-[0.6875rem] w-px origin-top bg-ink md:hidden"
        variants={{ hidden: { scaleY: 0 }, show: { scaleY: 1, ...draw } }}
      />
      <motion.span
        aria-hidden
        className="absolute inset-x-0 top-[0.6875rem] hidden h-px origin-left bg-ink md:block"
        variants={{ hidden: { scaleX: 0 }, show: { scaleX: 1, ...draw } }}
      />
      {steps.map((s, i) => (
        <li key={s.title} className="relative pl-9 md:pt-10 md:pl-0">
          <span aria-hidden className={cn("absolute top-0 left-0 grid size-[1.375rem] place-items-center bg-white", !s.gate && "rounded-full border border-ink")}>
            {s.gate ? <span className="block size-3.5 rotate-45 bg-brand" /> : <span className="text-[0.6875rem] font-bold text-ink tabular-nums">{i + 1}</span>}
          </span>
          <h3 className="text-base leading-snug font-bold text-ink">{s.title}</h3>
          {s.gate && s.title !== gateLabel && <p className="mt-0.5 text-sm font-semibold text-brand-deep">{gateLabel}</p>}
          <p className="mt-1.5 max-w-[34ch] text-[0.9375rem] leading-relaxed text-body">{s.text}</p>
        </li>
      ))}
    </motion.ol>
  )
}
