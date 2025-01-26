"use client"

import { useRef, useState, useEffect } from "react"
import { motion, animate } from "framer-motion"

interface SpotlightSectionProps {
  children: React.ReactNode
  className?: string
  fill?: string
}

export function SpotlightSection({ children, className = "", fill = "#ff6b00" }: SpotlightSectionProps) {
  const divRef = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  const animationRef = useRef<number>()

  // Update dimensions on mount and resize
  useEffect(() => {
    const updateDimensions = () => {
      if (divRef.current) {
        setDimensions({
          width: divRef.current.offsetWidth,
          height: divRef.current.offsetHeight
        })
      }
    }

    updateDimensions()
    window.addEventListener('resize', updateDimensions)
    return () => window.removeEventListener('resize', updateDimensions)
  }, [])

  // Automatic spotlight movement
  useEffect(() => {
    let startTime = Date.now()
    
    const animate = () => {
      if (!isHovered && divRef.current) {
        const elapsed = Date.now() - startTime
        const angle = (elapsed * 0.001) % (2 * Math.PI) // Complete circle every 6.28 seconds
        
        // Create a figure-8 pattern
        const scale = 0.4 // Adjust this to control movement range
        const x = dimensions.width * 0.5 + Math.sin(angle) * dimensions.width * scale
        const y = dimensions.height * 0.5 + Math.sin(angle * 2) * dimensions.height * scale * 0.5

        setMousePosition({ x, y })
      }
      animationRef.current = requestAnimationFrame(animate)
    }

    animate()
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [dimensions, isHovered])

  // Manual hover handling
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!divRef.current) return
      const rect = divRef.current.getBoundingClientRect()
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      })
    }

    const element = divRef.current
    if (element) {
      element.addEventListener("mousemove", handleMouseMove)
      element.addEventListener("mouseenter", () => setIsHovered(true))
      element.addEventListener("mouseleave", () => setIsHovered(false))
    }

    return () => {
      if (element) {
        element.removeEventListener("mousemove", handleMouseMove)
        element.removeEventListener("mouseenter", () => setIsHovered(true))
        element.removeEventListener("mouseleave", () => setIsHovered(false))
      }
    }
  }, [])

  return (
    <motion.div
      ref={divRef}
      className={`relative overflow-hidden ${className}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {/* Primary spotlight - increased brightness */}
      <motion.div
        className="pointer-events-none absolute -inset-px transition duration-300"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, ${fill}25, transparent 40%)`,
          opacity: isHovered ? 1 : 0.8,  // Increased base opacity
        }}
      />
      {/* Secondary spotlight - increased intensity */}
      <motion.div
        className="pointer-events-none absolute -inset-px transition duration-300"
        style={{
          background: `radial-gradient(300px circle at ${mousePosition.x}px ${mousePosition.y}px, ${fill}20, transparent 40%)`,
          opacity: isHovered ? 1 : 0.7,  // Increased base opacity
        }}
      />
      {/* Ambient glow - enhanced brightness */}
      <motion.div
        className="pointer-events-none absolute -inset-px transition duration-300"
            style={{
          background: `radial-gradient(1200px circle at ${mousePosition.x}px ${mousePosition.y}px, ${fill}10, transparent 60%)`,
          opacity: 0.5,  // Increased ambient glow
        }}
      />
      {children}
    </motion.div>
  )
}

