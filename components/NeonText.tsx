"use client"

import type React from "react"
import { motion } from "framer-motion"

interface NeonTextProps {
  children: React.ReactNode
  className?: string
}

export function NeonText({ children, className = "" }: NeonTextProps) {
  return (
    <motion.span
      className={`inline-block ${className}`}
      animate={{
        textShadow: [
          "0 0 5px #ff6b00, 0 0 10px #ff6b00, 0 0 15px #ff6b00, 0 0 20px #ff6b00",
          "0 0 10px #ff8533, 0 0 20px #ff8533, 0 0 30px #ff8533, 0 0 40px #ff8533",
          "0 0 5px #ff9966, 0 0 10px #ff9966, 0 0 15px #ff9966, 0 0 20px #ff9966",
          "0 0 10px #ffad33, 0 0 20px #ffad33, 0 0 30px #ffad33, 0 0 40px #ffad33",
          "0 0 5px #ff6b00, 0 0 10px #ff6b00, 0 0 15px #ff6b00, 0 0 20px #ff6b00",
        ],
      }}
      transition={{
        duration: 5,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "reverse",
      }}
    >
      {children}
    </motion.span>
  )
}

