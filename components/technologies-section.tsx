"use client"

import React, { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { SpotlightSection } from "@/components/ui/spotlight-section"
import { NeonText } from "@/components/NeonText"

interface Technology {
  name: string
  icon: string
  category: string
}

const technologies: Technology[] = [
  // Frontend Technologies
  { 
    category: "Frontend",
    name: "HTML", 
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-plain.svg" 
  },
  { 
    category: "Frontend",
    name: "CSS", 
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-plain.svg" 
  },
  { 
    category: "Frontend", 
    name: "JavaScript", 
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg" 
  },
  { 
    category: "Frontend",
    name: "React.js", 
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" 
  },
  { 
    category: "Frontend",
    name: "Vue.js", 
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" 
  },
  { 
    category: "Frontend",
    name: "Tailwind CSS", 
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" 
  },

  // Backend Technologies
  { 
    category: "Backend",
    name: "Python", 
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" 
  },
  { 
    category: "Backend",
    name: "Django", 
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" 
  },
  { 
    category: "Backend",
    name: "Flask", 
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" 
  },
  { 
    category: "Backend",
    name: "FastAPI", 
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" 
  },
  { 
    category: "Backend",
    name: "Node.js", 
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg" 
  },
  { 
    category: "Backend",
    name: "PHP", 
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-plain.svg" 
  },
  { 
    category: "Backend",
    name: "Laravel", 
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg" 
  },

  // Database & Cloud
  { 
    category: "Database & Cloud",
    name: "MongoDB", 
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" 
  },
  { 
    category: "Database & Cloud",
    name: "PostgreSQL", 
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" 
  },
  { 
    category: "Database & Cloud",
    name: "MySQL", 
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" 
  },
  { 
    category: "Database & Cloud",
    name: "Firebase", 
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" 
  },
  { 
    category: "Database & Cloud",
    name: "AWS", 
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg" 
  },
  { 
    category: "Database & Cloud",
    name: "Oracle Cloud", 
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg" 
  },

  // Mobile & Desktop
  { 
    category: "Mobile & Desktop",
    name: "Flutter", 
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" 
  },
  { 
    category: "Mobile & Desktop",
    name: "Java", 
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" 
  },
  { 
    category: "Mobile & Desktop",
    name: "Kotlin", 
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg" 
  },
  { 
    category: "Mobile & Desktop",
    name: "C#", 
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-plain.svg" 
  },
  { 
    category: "Mobile & Desktop",
    name: "Processing", 
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/processing/processing-original.svg" 
  },

  // Embedded Systems
  { 
    category: "Embedded Systems",
    name: "C", 
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/embeddedc/embeddedc-original.svg" 
  },
  { 
    category: "Embedded Systems",
    name: "C++", 
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-plain.svg" 
  },
  { 
    category: "Embedded Systems",
    name: "Assembly", 
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/wasm/wasm-original.svg" 
  },
  { 
    category: "Embedded Systems",
    name: "MicroPython", 
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" 
  },
  { 
    category: "Embedded Systems",
    name: "Arduino", 
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg" 
  },
  { 
    category: "Embedded Systems",
    name: "ESP32", 
    icon: "/icons/esp32.svg" // You'll need to add this custom icon
  },

  // Design Tools
  { 
    category: "Design Tools",
    name: "KiCad", 
    icon: "/icons/kicad.svg" 
  },
  { 
    category: "Design Tools",
    name: "Eagle", 
    icon: "/icons/eagle.svg" // You'll need to add this custom icon
  },
  { 
    category: "Design Tools",
    name: "Fusion 360", 
    icon: "/icons/fusion.svg" // You'll need to add this custom icon
  },
  { 
    category: "Design Tools",
    name: "SketchUp", 
    icon: "/icons/sketchup.svg" // You'll need to add this custom icon
  },
]

export default function TechnologiesSection() {
  const [isMounted, setIsMounted] = useState(false)
  const categories = Array.from(new Set(technologies.map(tech => tech.category)))

  useEffect(() => {
    // Delay mounting to ensure client-side rendering
    const timer = setTimeout(() => {
      setIsMounted(true)
    }, 100)
    return () => clearTimeout(timer)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <div className="w-full py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" id="technologies">
        <div className="relative">
          <div className="lg:text-center">
            <NeonText>
              <h2 className="text-base text-orange-400 font-semibold tracking-wide uppercase">Technologies</h2>
            </NeonText>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
              Our Tech Stack
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-300 lg:mx-auto">
              We leverage cutting-edge technologies to deliver powerful and scalable solutions
            </p>
          </div>

          <AnimatePresence mode="wait">
            {isMounted && (
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="mt-16 space-y-16"
              >
                {categories.map((category) => (
                  <motion.div
                    key={category}
                    variants={itemVariants}
                    className="space-y-8"
                  >
                    <h3 className="text-2xl font-bold text-white">{category}</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
                      {technologies
                        .filter(tech => tech.category === category)
                        .map((tech) => (
                          <motion.div
                            key={tech.name}
                            variants={itemVariants}
                            className="group relative"
                          >
                            <div className="relative flex flex-col items-center space-y-3">
                              <div
                                className="relative w-16 h-16 rounded-xl overflow-hidden bg-gray-900/80 p-3 
                                backdrop-blur-sm border border-gray-800/50
                                transition-all duration-300 transform group-hover:scale-110 
                                group-hover:shadow-lg group-hover:shadow-orange-500/10
                                group-hover:border-orange-500/50"
                              >
                                <img
                                  src={tech.icon}
                                  alt={`${tech.name} logo`}
                                  className="w-full h-full object-contain transition-all duration-300"
                                  style={{
                                    filter: "brightness(0) invert(1)",
                                    opacity: 0.8,
                                  }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/0 to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                              </div>
                              <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors duration-300">
                                {tech.name}
                              </span>
                            </div>
                          </motion.div>
                        ))}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}

