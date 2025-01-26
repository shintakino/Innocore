import { SpotlightSection } from "@/components/ui/spotlight-section"
import { NeonText } from "@/components/NeonText"

export default function About() {
  return (
    <SpotlightSection fill="#ff8533" className="section-background py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" id="about">
        <div className="lg:text-center">
          <NeonText>
            <h2 className="text-base text-orange-400 font-semibold tracking-wide uppercase">About Us</h2>
          </NeonText>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Driving Innovation in Technology
          </p>
        </div>
        <div className="mt-10">
          <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            <div id="mission">
              <h3 className="text-2xl font-bold text-white">Our Mission</h3>
              <p className="mt-2 text-base text-gray-300">
                At Innocore Tech Solutions, our mission is to bring your vision to life through core innovation and
                cutting-edge technology. We are committed to building reliable and scalable technology solutions,
                empowering businesses through AI-driven insights, responsive software, and immersive experiences, and
                ensuring innovation is at the heart of everything we do, while delivering measurable results.
              </p>
            </div>
            <div id="vision">
              <h3 className="text-2xl font-bold text-white">Our Vision</h3>
              <p className="mt-2 text-base text-gray-300">
                We envision being a global leader in technology and innovation, inspiring businesses to thrive in a
                connected, digital-first world. We see a future where technology simplifies life, solves complex
                challenges, and drives sustainable growth. Our goal is to become the go-to partner for businesses
                seeking core technological solutions across software, AI, and embedded systems, pioneering innovations
                that transform industries and shape the future of technology.
              </p>
            </div>
          </div>
        </div>
      </div>
    </SpotlightSection>
  )
}

