import { Lightbulb, Users, Award, CheckCircle } from "lucide-react"
import { SpotlightSection } from "@/components/ui/spotlight-section"
import { NeonText } from "@/components/NeonText"

const reasons = [
  {
    name: "Innovative Approach",
    description: "We thrive on exploring new technologies to create innovative solutions.",
    icon: Lightbulb,
  },
  {
    name: "Client-Centric Philosophy",
    description: "We prioritize understanding and meeting the unique needs of each client.",
    icon: Users,
  },
  {
    name: "Experienced Team",
    description: "Our team comprises skilled professionals with extensive expertise in various technology domains.",
    icon: Award,
  },
  {
    name: "Quality Assurance",
    description: "We adhere to the highest standards to ensure reliability and excellence in every project.",
    icon: CheckCircle,
  },
]

export default function WhyChooseUs() {
  return (
    <SpotlightSection fill="#ff9966" className="section-background py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" id="why-choose-us">
        <div className="lg:text-center">
          <NeonText>
            <h2 className="text-base text-orange-400 font-semibold tracking-wide uppercase">Why Choose Us</h2>
          </NeonText>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Proven Expertise, Measurable Results
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-300 lg:mx-auto">
            Our track record speaks for itself. Here's why leading companies trust Innocore Tech Solutions:
          </p>
        </div>
        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {reasons.map((reason) => (
              <div key={reason.name} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-orange-500 text-white">
                    <reason.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-white">{reason.name}</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-300">{reason.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </SpotlightSection>
  )
}

