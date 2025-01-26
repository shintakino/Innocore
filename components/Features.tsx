import { CheckCircle, Zap, BarChart } from "lucide-react"

const features = [
  {
    name: "Task Management",
    description: "Easily create, assign, and track tasks across your team.",
    icon: CheckCircle,
  },
  {
    name: "Real-time Collaboration",
    description: "Work together seamlessly with instant updates and communication.",
    icon: Zap,
  },
  {
    name: "Analytics Dashboard",
    description: "Gain insights into your team's performance with detailed analytics.",
    icon: BarChart,
  },
]

export default function Features() {
  return (
    <div className="py-12 bg-gray-800" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-orange-400 font-semibold tracking-wide uppercase">Features</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Everything you need to streamline your workflow
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-300 lg:mx-auto">
            StreamLine offers a comprehensive set of tools to help your team work more efficiently and effectively.
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-orange-500 text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-white">{feature.name}</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-300">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}

