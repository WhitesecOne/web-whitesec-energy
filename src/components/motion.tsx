"use client"

import { MotionConfig, motion } from "motion/react"
import { Children } from "react"

import { cn } from "@/lib/utils"

export function MotionProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>
}

const ease = [0.16, 1, 0.3, 1] as const

/** One quiet entrance for content that arrives on scroll: a short rise. The content is visible without JavaScript. */
export function Reveal({ children, className, delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  return (
    <motion.div
      className={cn("min-w-0", className)}
      initial={{ y: 20 }}
      whileInView={{ y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, ease, delay }}
    >
      {children}
    </motion.div>
  )
}

/** The page's one authored moment: the hero text settles in sequence and the photograph eases out of a slight zoom. Nothing starts hidden, so the first paint is complete without JavaScript. */
export function HeroText({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={className}>
      {Children.toArray(children).map((child, i) => (
        <motion.div key={i} initial={{ y: 18 }} animate={{ y: 0 }} transition={{ duration: 0.7, ease, delay: 0.05 + i * 0.08 }}>
          {child}
        </motion.div>
      ))}
    </div>
  )
}

export function HeroPhoto({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={cn("overflow-hidden", className)}>
      <motion.div className="size-full" initial={{ scale: 1.06 }} animate={{ scale: 1 }} transition={{ duration: 1.4, ease }}>
        {children}
      </motion.div>
    </div>
  )
}
