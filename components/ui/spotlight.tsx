"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"

export const SpotlightPreview = ({
  children,
  className = "",
  fill = "#fff",
}: {
  children?: React.ReactNode
  className?: string
  fill?: string
}) => {
  const divRef = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (divRef.current) {
        const rect = divRef.current.getBoundingClientRect()
        setMousePosition({
          x: event.clientX - rect.left,
          y: event.clientY - rect.top,
        })
      }
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <div ref={divRef} className={className}>
      <svg className="w-full h-full">
        <defs>
          <radialGradient id="gradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
            <stop offset="0%" stopColor={fill} stopOpacity="0.3" />
            <stop offset="100%" stopColor={fill} stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect
          x="0"
          y="0"
          width="100%"
          height="100%"
          fill="url(#gradient)"
          style={{
            transformOrigin: `${mousePosition.x}px ${mousePosition.y}px`,
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
          }}
        />
      </svg>
      {children}
    </div>
  )
}

