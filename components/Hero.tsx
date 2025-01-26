"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useRouter } from "next/navigation"

export default function Hero() {
  const router = useRouter()
  
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  const buttonVariants = {
    hover: { 
      scale: 1.05,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    },
    tap: { 
      scale: 0.95
    }
  }
  
  return (
    <div className="relative min-h-screen section-background overflow-hidden pt-20" id="hero">
      {/* Enhanced Grid Pattern Background with Animation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]"
        aria-hidden="true"
      />

      {/* Animated Gradient Glow Effect */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-orange-500/20 rounded-full blur-3xl"
        aria-hidden="true"
      />

      {/* Floating Particles Effect */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-orange-500/30 rounded-full"
            initial={{
              x: Math.random() * 100 + "%",
              y: Math.random() * 100 + "%",
              scale: 0,
            }}
            animate={{
              y: ["-20%", "120%"],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
          {/* Enhanced Text Content */}
        <motion.div
            initial="hidden"
            animate="visible"
            variants={textVariants}
            className="lg:col-span-6 xl:col-span-5"
          >
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-8"
              variants={textVariants}
            >
              <motion.span 
                className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-white to-orange-200"
                animate={{
                  backgroundPosition: ["0%", "100%", "0%"],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
              Your Vision is Our Mission
              </motion.span>
            </motion.h1>
            <motion.p 
              className="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl lg:max-w-none"
              variants={textVariants}
            >
            At Innocore Tech Solutions, we bring your vision to life through core innovation and cutting-edge
            technology. We specialize in delivering tailored solutions that address modern challenges.
            </motion.p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <motion.div
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <Button 
                  size="lg" 
                  className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 
                    text-white rounded-full px-8 py-6 text-lg font-semibold
                    shadow-[0_0_15px_rgba(255,107,0,0.3)] hover:shadow-[0_0_25px_rgba(255,107,0,0.5)]
                    border border-orange-400/20 backdrop-blur-sm
                    transition-all duration-300 ease-out"
                  onClick={() => {
                    const element = document.getElementById('services')
                    element?.scrollIntoView({ behavior: 'smooth' })
                  }}
                >
              Explore Our Services
            </Button>
              </motion.div>
              
              <motion.div
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                className="w-full"
              >
            <Button
              size="lg"
              variant="outline"
                  className="w-full bg-transparent hover:bg-orange-500/10 text-white rounded-full px-8 py-6 text-lg
                    font-semibold border-2 border-orange-500/50 hover:border-orange-500
                    shadow-[0_0_15px_rgba(255,107,0,0.1)] hover:shadow-[0_0_25px_rgba(255,107,0,0.2)]
                    backdrop-blur-sm transition-all duration-300 ease-out
                    group relative overflow-hidden"
                  onClick={() => router.push('/contact')}
                >
                  <span className="relative z-10">Contact Us</span>
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 
                    bg-gradient-to-r from-orange-500/10 via-orange-500/20 to-orange-500/10" 
                  />
            </Button>
              </motion.div>
          </div>
        </motion.div>

          {/* Enhanced Image Section */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-16 lg:mt-0 lg:col-span-6 xl:col-span-7"
          >
            <motion.div 
              className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-800
                hover:shadow-[0_0_30px_rgba(255,107,0,0.2)] transition-shadow duration-300"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {/* Window Controls with Hover Effect */}
        <motion.div
                className="absolute top-4 left-4 flex gap-2 z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <motion.div whileHover={{ scale: 1.2 }} className="w-3 h-3 rounded-full bg-red-500" />
                <motion.div whileHover={{ scale: 1.2 }} className="w-3 h-3 rounded-full bg-yellow-500" />
                <motion.div whileHover={{ scale: 1.2 }} className="w-3 h-3 rounded-full bg-green-500" />
              </motion.div>

              <div className="relative aspect-[16/9] w-full">
                <Image
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
                  alt="Innocore Tech Solutions"
                  fill
                  className="object-cover rounded-2xl transform transition-transform duration-700 hover:scale-105"
                  priority
                />
                {/* Enhanced Overlay Gradient */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-tr from-gray-900/80 via-gray-900/40 to-transparent"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                />
              </div>
            </motion.div>

            {/* Enhanced Reflection Effect */}
            <motion.div 
              className="absolute -bottom-12 inset-x-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
            <div className="h-40 bg-gradient-to-b from-gray-900 to-transparent" />
            </motion.div>
          </motion.div>
          </div>
      </div>
    </div>
  )
}

