"use client"

import { useEffect, useState } from "react"
import Header from "@/components/Header"
import Hero from "@/components/Hero"
import Services from "@/components/Services"
import Team from "@/components/Team"
import About from "@/components/About"
import Industries from "@/components/Industries"
import WhyChooseUs from "@/components/WhyChooseUs"
import Process from "@/components/Process"
import CallToAction from "@/components/CallToAction"
import Footer from "@/components/Footer"
import LoadingScreen from "@/components/LoadingScreen"
import { SpotlightPreview } from "@/components/ui/spotlight"
import { ScrollAnimation } from "@/components/ScrollAnimation"
import { SpotlightSection } from "@/components/ui/spotlight-section"

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3000)

    document.body.classList.add("dark")
    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return <LoadingScreen />
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white overflow-x-hidden">
      <SpotlightPreview className="fixed inset-0 pointer-events-none" fill="#ff6b00" />
      <Header />
      <main className="relative">
        <Hero />
        <div>
          <ScrollAnimation>
            <SpotlightSection className="bg-gray-900/50" fill="#ff6b00">
              <Services />
            </SpotlightSection>
          </ScrollAnimation>
          <ScrollAnimation>
            <SpotlightSection className="bg-gray-900/50" fill="#ff6b00">
              <Team />
            </SpotlightSection>
          </ScrollAnimation>
          <ScrollAnimation>
            <SpotlightSection className="bg-gray-900/50" fill="#ff6b00">
              <About />
            </SpotlightSection>
          </ScrollAnimation>
          <ScrollAnimation>
            <SpotlightSection className="bg-gray-900/50" fill="#ff6b00">
              <Industries />
            </SpotlightSection>
          </ScrollAnimation>
          <ScrollAnimation>
            <SpotlightSection className="bg-gray-900/50" fill="#ff6b00">
              <Process />
            </SpotlightSection>
          </ScrollAnimation>
          <ScrollAnimation>
            <SpotlightSection className="bg-gray-900/50" fill="#ff6b00">
              <WhyChooseUs />
            </SpotlightSection>
          </ScrollAnimation>
          <ScrollAnimation>
            <SpotlightSection className="bg-gray-900/50" fill="#ff6b00">
              <CallToAction />
            </SpotlightSection>
          </ScrollAnimation>
        </div>
      </main>
      <Footer />
    </div>
  )
}

