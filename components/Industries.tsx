import { ShoppingCart, GraduationCap, DollarSign, Factory, Truck } from "lucide-react"
import { SpotlightSection } from "@/components/ui/spotlight-section"
import { NeonText } from "@/components/NeonText"

const industries = [
  { name: "E-commerce", icon: ShoppingCart },
  { name: "Education", icon: GraduationCap },
  { name: "Finance", icon: DollarSign },
  { name: "Manufacturing", icon: Factory },
  { name: "Logistics", icon: Truck },
]

export default function Industries() {
  return (
    <SpotlightSection fill="#ff4d00" className="section-background py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" id="industries">
        <div className="lg:text-center">
          <NeonText>
            <h2 className="text-base text-orange-400 font-semibold tracking-wide uppercase">Industries Served</h2>
          </NeonText>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Tailored Solutions for Every Sector
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-300 lg:mx-auto">
            We bring our expertise to a wide range of industries, providing customized tech solutions to meet
            sector-specific challenges.
          </p>
        </div>
        <div className="mt-10">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
            {industries.map((industry) => (
              <div key={industry.name} className="col-span-1 flex justify-center md:col-span-1 lg:col-span-1">
                <div className="flex flex-col items-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-md bg-orange-500 text-white">
                    <industry.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <div className="mt-3 text-center">
                    <h3 className="text-lg font-medium text-white">{industry.name}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SpotlightSection>
  )
}

