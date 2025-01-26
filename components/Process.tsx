import { Search, PenTool, Code, TestTube, Rocket, HeadphonesIcon } from "lucide-react"
import { SpotlightSection } from "@/components/ui/spotlight-section"
import { NeonText } from "@/components/NeonText"

const steps = [
  { name: "Discovery", description: "Understanding your requirements and goals.", icon: Search },
  { name: "Planning", description: "Designing a roadmap for efficient and scalable solutions.", icon: PenTool },
  { name: "Development", description: "Turning concepts into reality with agile practices.", icon: Code },
  { name: "Testing", description: "Ensuring quality, security, and performance at every stage.", icon: TestTube },
  { name: "Delivery", description: "Launching the solution with seamless integration.", icon: Rocket },
  { name: "Support", description: "Providing ongoing support and maintenance.", icon: HeadphonesIcon },
]

export default function Process() {
  return (
    <SpotlightSection fill="#ff751a" className="section-background py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" id="process">
        <div className="lg:text-center">
          <NeonText>
            <h2 className="text-base text-orange-400 font-semibold tracking-wide uppercase">Our Process</h2>
          </NeonText>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            From Concept to Reality
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-300 lg:mx-auto">
            Our streamlined development process ensures efficient delivery of high-quality solutions.
          </p>
        </div>
        <div className="mt-10">
          <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {steps.map((step, index) => (
              <div key={step.name} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-full bg-orange-500 text-white">
                    <step.icon className="h-6 w-6" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-white">{step.name}</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-300">{step.description}</dd>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SpotlightSection>
  )
}

