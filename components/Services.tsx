import { Code, Server, Smartphone, Globe, ShieldCheck, Cpu, BotIcon as Robot, Gamepad } from "lucide-react"
import { SpotlightSection } from "@/components/ui/spotlight-section"
import { NeonText } from "@/components/NeonText"

const services = [
  {
    name: "Web Development",
    description: "Full-stack front-end and back-end solutions for visually stunning and highly functional websites.",
    icon: Globe,
  },
  {
    name: "Desktop & Mobile Applications",
    description: "Versatile software for seamless, high-performance experiences across platforms.",
    icon: Smartphone,
  },
  {
    name: "AI Development",
    description: "Artificial Intelligence, Machine Learning, and Deep Learning for advanced automation and insights.",
    icon: Robot,
  },
  {
    name: "Game Development",
    description: "Immersive experiences with cutting-edge tools for PC, mobile, and VR/AR platforms.",
    icon: Gamepad,
  },
  {
    name: "Embedded Systems",
    description: "Hardware, firmware, and system-level solutions for connected devices and IoT.",
    icon: Cpu,
  },
  {
    name: "Software Development",
    description: "Customized software solutions tailored to meet unique business requirements.",
    icon: Code,
  },
]

export default function Services() {
  return (
    <SpotlightSection fill="#ff6b00" className="section-background py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="services">
        <div className="lg:text-center">
          <NeonText>
            <h2 className="text-base text-orange-400 font-semibold tracking-wide uppercase">Services</h2>
          </NeonText>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Comprehensive Tech Solutions
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-300 lg:mx-auto">
            From web development to embedded systems, we offer a wide range of services to meet your technology needs.
          </p>
        </div>

        <div className="mt-10">
          <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {services.map((service) => (
              <div key={service.name} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-orange-500 text-white">
                    <service.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-white">{service.name}</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-300">{service.description}</dd>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SpotlightSection>
  )
}

