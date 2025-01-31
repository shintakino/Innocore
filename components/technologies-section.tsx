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

  // Game Development
  { 
    category: "Game Development",
    name: "Unreal Engine", 
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/unrealengine/unrealengine-original.svg" 
  },
  { 
    category: "Game Development",
    name: "Unity Engine", 
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/unity/unity-original.svg" 
  },
  { 
    category: "Game Development",
    name: "Godot", 
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/godot/godot-original.svg" 
  },
  { 
    category: "Game Development",
    name: "C#", 
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-plain.svg" 
  },
  { 
    category: "Game Development",
    name: "GDScript", 
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/godot/godot-original.svg" 
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
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const categories = Array.from(new Set(technologies.map(tech => tech.category)))

  useEffect(() => {
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
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  }

  return (
    <div className="w-full py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" id="technologies">
        <div className="relative">
          <div className="text-center">
            <NeonText>
              <h2 className="text-base text-orange-400 font-semibold tracking-wide uppercase">
                Technologies
              </h2>
            </NeonText>
            <p className="mt-2 text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
              Our Tech Stack
            </p>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-300">
              Empowering innovation with cutting-edge technologies
            </p>
          </div>

          {/* Category Navigation */}
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category === selectedCategory ? null : category)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all
                  ${selectedCategory === category
                    ? "bg-orange-500 text-white shadow-lg shadow-orange-500/20"
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700"}`}
              >
                {category}
              </motion.button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            {isMounted && (
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="mt-16 space-y-16"
              >
                {(selectedCategory ? [selectedCategory] : categories).map((category) => (
                  <motion.div
                    key={category}
                    variants={itemVariants}
                    className="space-y-8"
                    layout
                  >
                    <motion.h3 
                      className="text-2xl font-bold text-white text-center"
                      layout
                    >
                      {category}
                    </motion.h3>
                    <motion.div 
                      className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8"
                      layout
                    >
                      {technologies
                        .filter(tech => tech.category === category)
                        .map((tech) => (
                          <motion.div
                            key={tech.name}
                            variants={itemVariants}
                            className="group relative"
                            whileHover={{ scale: 1.05 }}
                          >
                            <div className="relative flex flex-col items-center space-y-3">
                              <div className="relative w-20 h-20 rounded-2xl overflow-hidden 
                                bg-gradient-to-br from-gray-900 to-gray-800 p-4
                                shadow-xl shadow-black/20
                                backdrop-blur-xl border border-gray-700/50
                                transition-all duration-300 transform
                                group-hover:shadow-orange-500/20
                                group-hover:border-orange-500/50"
                              >
                                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                <img
                                  src={tech.icon}
                                  alt={`${tech.name} logo`}
                                  className="w-full h-full object-contain transition-all duration-300 group-hover:scale-110"
                                  style={{
                                    filter: "brightness(0) invert(1)",
                                    opacity: 0.9,
                                  }}
                                />
                              </div>
                              <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors duration-300">
                                {tech.name}
                              </span>
                            </div>
                          </motion.div>
                        ))}
                    </motion.div>
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