"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"
import Image from "next/image"
import { SpotlightSection } from "./ui/spotlight-section"

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0)
  const [isLoading, setIsLoading] = useState(true)
  const [dimensions, setDimensions] = useState({ width: 1920, height: 1080 }) // Default values
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    // Set isMounted to true when component mounts
    setIsMounted(true)
    
    // Update dimensions only after component is mounted
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight
    })

    // Optional: Add resize listener
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => {
      if (progress < 100) {
        setProgress((prev) => Math.min(prev + Math.random() * 10, 100))
      } else {
        setIsLoading(false)
      }
    }, 200)

    return () => clearTimeout(timer)
  }, [progress])

  // Generate particles only after component is mounted
  const particles = isMounted ? Array.from({ length: 50 }).map((_, index) => ({
    x: Math.random() * dimensions.width,
    y: Math.random() * dimensions.height,
    delay: Math.random() * 0.5
  })) : []

  const logoVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  const circleVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        duration: 1.5,
        ease: "easeInOut"
      }
    }
  }

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-50"
        >
          <SpotlightSection
            fill="#ff6b00"
            className="section-background w-full h-full flex items-center justify-center"
          >
            {/* Add animated background patterns */}
            <motion.div
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.1 }}
              transition={{ duration: 1 }}
            >
              {Array.from({ length: 50 }).map((_, index) => (
                <motion.div
                  key={index}
                  className="absolute w-1 h-1 bg-orange-500 rounded-full"
                  initial={{
                    x: Math.random() * dimensions.width,
                    y: Math.random() * dimensions.height,
                    scale: 0
                  }}
                  animate={{
                    y: [0, -100],
                    scale: [0, 1, 0],
                    opacity: [0, 1, 0]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: Math.random() * 2
                  }}
                />
              ))}
            </motion.div>

            <div className="relative w-full max-w-2xl mx-auto px-4">
              <motion.div
                variants={logoVariants}
                initial="hidden"
                animate="visible"
                className="text-center mb-12"
              >
                {/* Enhanced Logo Animation */}
                <div className="relative w-32 h-32 mx-auto mb-8">
                  <motion.div
                    className="absolute inset-0"
                    animate={{
                      rotate: 360,
                      scale: [1, 1.1, 1]
                    }}
                    transition={{
                      rotate: {
                        duration: 8,
                        repeat: Infinity,
                        ease: "linear"
                      },
                      scale: {
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }
                    }}
                  >
                    {/* Enhanced SVG Animation */}
                    <motion.svg
                      viewBox="0 0 100 100"
                      className="w-full h-full"
                    >
                      <motion.circle
                        cx="50"
                        cy="50"
                        r="45"
                        stroke="#FF6B00"
                        strokeWidth="2"
                        fill="none"
                        variants={circleVariants}
                        initial="hidden"
                        animate="visible"
                      />
                      <motion.path
                        d="M50 25L25 50L50 75L75 50L50 25"
                        stroke="#FF6B00"
                        strokeWidth="2"
                        fill="none"
                        variants={circleVariants}
                      />
                    </motion.svg>
                  </motion.div>
                </div>

                {/* Enhanced Text Animations */}
                <motion.h1
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-4xl font-bold text-white mb-4"
                >
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-orange-200">
                    Innocore Tech
                  </span>
                </motion.h1>
                <motion.p
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-gray-300 text-lg"
                >
                  Innovating the future, one line of code at a time
                </motion.p>
              </motion.div>

              {/* Enhanced Progress Bar */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="w-full max-w-md mx-auto"
              >
                <div className="relative h-2 bg-gray-700 rounded-full overflow-hidden">
                  <motion.div
                    className="absolute left-0 top-0 bottom-0 bg-gradient-to-r from-orange-500 to-orange-600"
                    initial={{ width: "0%" }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="mt-4 text-center text-orange-400 font-medium"
                >
                  {Math.round(progress)}%
                </motion.div>
              </motion.div>

              {/* Decorative Elements */}
              <div className="absolute inset-0 pointer-events-none">
                {/* Animated Particles */}
                {isMounted && particles.map((particle, index) => (
                  <motion.div
                    key={index}
                    className="absolute w-1 h-1 bg-orange-500 rounded-full"
                    initial={{
                      x: particle.x,
                      y: particle.y,
                      opacity: 0,
                    }}
                    animate={{
                      opacity: [0, 1, 0],
                      scale: [0, 1.5, 0],
                      y: particle.y - 100,
                    }}
                    transition={{
                      duration: 2,
                      delay: particle.delay,
                      repeat: Infinity,
                      ease: "easeOut"
                    }}
                  />
                ))}
              </div>
            </div>
          </SpotlightSection>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

