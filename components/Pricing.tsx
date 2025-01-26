import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"

const plans = [
  {
    name: "Starter",
    price: 29,
    features: ["5 team members", "Basic task management", "Limited analytics"],
  },
  {
    name: "Pro",
    price: 79,
    features: ["Unlimited team members", "Advanced task management", "Full analytics dashboard", "Priority support"],
  },
  {
    name: "Enterprise",
    price: "Custom",
    features: ["All Pro features", "Custom integrations", "Dedicated account manager", "24/7 phone support"],
  },
]

export default function Pricing() {
  return (
    <div className="bg-gray-800 py-12 sm:py-16 lg:py-20" id="pricing">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Simple, transparent pricing</h2>
          <p className="mx-auto mt-3 max-w-2xl text-xl text-gray-300 sm:mt-4">
            Choose the plan that's right for your team
          </p>
        </div>
        <div className="mt-12 space-y-4 sm:mt-16 sm:grid sm:grid-cols-2 sm:gap-6 sm:space-y-0 lg:mx-auto lg:max-w-4xl xl:mx-0 xl:max-w-none xl:grid-cols-3">
          {plans.map((plan) => (
            <div key={plan.name} className="divide-y divide-gray-700 rounded-lg border border-gray-700 shadow-sm">
              <div className="p-6">
                <h3 className="text-lg font-medium leading-6 text-white">{plan.name}</h3>
                <p className="mt-4 text-sm text-gray-300">
                  <span className="text-4xl font-bold tracking-tight text-white">${plan.price}</span>
                  {typeof plan.price === "number" && (
                    <span className="text-base font-medium text-gray-400">/month</span>
                  )}
                </p>
                <Button className="mt-8 block w-full rounded-md py-2 text-sm font-semibold text-white bg-orange-600 shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600">
                  {plan.name === "Enterprise" ? "Contact sales" : "Get started"}
                </Button>
              </div>
              <div className="px-6 pt-6 pb-8">
                <h4 className="text-sm font-medium text-white">What's included</h4>
                <ul className="mt-6 space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex space-x-3">
                      <Check className="h-5 w-5 flex-shrink-0 text-orange-500" aria-hidden="true" />
                      <span className="text-sm text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

