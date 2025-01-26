"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin } from "lucide-react"
import { SpotlightSection } from "@/components/ui/spotlight-section"
import { NeonText } from "@/components/NeonText"
import { SpotlightPreview } from "@/components/ui/spotlight"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { motion } from "framer-motion"

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setTimeout(() => setIsSubmitting(false), 1000)
  }

  return (
    <motion.div 
      className="flex flex-col min-h-screen bg-gray-900 text-white overflow-x-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <SpotlightPreview className="fixed inset-0 pointer-events-none" fill="#ff6b00" />
      <Header />
      <main className="flex-grow">
        <SpotlightSection fill="#ff6b00" className="section-background relative z-10">
          <div className="relative py-16 sm:py-24 lg:py-32">
            {/* Grid Pattern Background */}
            <div
              className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]"
              aria-hidden="true"
            />

            <motion.div
              className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="mx-auto max-w-4xl">
                <NeonText>
                  <motion.h1
                    className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-8 sm:mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    Contact Us
                  </motion.h1>
                </NeonText>

                <motion.div
                  className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  {/* Contact Form */}
                  <div className="bg-gray-900/70 p-6 sm:p-8 rounded-2xl border border-gray-800 backdrop-blur-sm">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2">First Name</label>
                          <Input className="bg-gray-800/50 border-gray-700" />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2">Last Name</label>
                          <Input className="bg-gray-800/50 border-gray-700" />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                        <Input type="email" className="bg-gray-800/50 border-gray-700" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                        <Textarea className="bg-gray-800/50 border-gray-700 min-h-[120px]" />
                      </div>
                      <Button
                        type="submit"
                        className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 
                          hover:to-orange-700 text-white rounded-full py-6 font-medium
                          shadow-[0_0_15px_rgba(255,107,0,0.3)] hover:shadow-[0_0_25px_rgba(255,107,0,0.5)]
                          border border-orange-400/20 backdrop-blur-sm
                          transition-all duration-300 ease-out"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Sending..." : "Send Message"}
                      </Button>
                    </form>
                  </div>

                  {/* Contact Information & Map */}
                  <div className="space-y-6">
                    <div className="bg-gray-900/70 p-4 sm:p-6 lg:p-8 rounded-2xl border border-gray-800 backdrop-blur-sm">
                      <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-white mb-6">Contact Information</h3>
                      <div className="space-y-6">
                        <div className="flex items-start">
                          <MapPin className="w-5 h-5 text-orange-500 mt-1 flex-shrink-0" />
                          <div className="ml-4">
                            <p className="text-white">Address</p>
                            <p className="text-gray-400 text-sm sm:text-base">Davao City, Davao Philippines, 80000</p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <Phone className="w-5 h-5 text-orange-500 mt-1 flex-shrink-0" />
                          <div className="ml-4">
                            <p className="text-white">Phone</p>
                            <p className="text-gray-400 text-sm sm:text-base">0976 562 4995 / 09615528107</p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <Mail className="w-5 h-5 text-orange-500 mt-1 flex-shrink-0" />
                          <div className="ml-4">
                            <p className="text-white">Email</p>
                            <p className="text-gray-400 text-sm sm:text-base">innocoretechsolutions@gmail.com</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Google Map */}
                    <div className="bg-gray-900/70 p-2 rounded-2xl border border-gray-800 backdrop-blur-sm h-[250px] sm:h-[300px] lg:h-[250px]">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d254936.27901755414!2d125.4625966!3d7.190708399999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f96d9f519e327f%3A0x7c4be9896a644c11!2sDavao%20City%2C%20Davao%20del%20Sur!5e0!3m2!1sen!2sph!4v1708925433044!5m2!1sen!2sph"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="rounded-xl"
                      />
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </SpotlightSection>
      </main>
      <Footer />
    </motion.div>
  )
}

