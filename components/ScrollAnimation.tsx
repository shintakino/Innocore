"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface ScrollAnimationProps {
  children: ReactNode
}

export function ScrollAnimation({ children }: ScrollAnimationProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  )
}

