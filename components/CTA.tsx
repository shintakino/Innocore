import { Button } from "@/components/ui/button"

export default function CTA() {
  return (
    <div className="bg-orange-700">
      <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
          <span className="block">Boost your productivity.</span>
          <span className="block">Start using StreamLine today.</span>
        </h2>
        <p className="mt-4 text-lg leading-6 text-orange-200">
          Streamline your workflow, improve collaboration, and achieve your goals faster with our powerful platform.
        </p>
        <Button className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-orange-700 bg-white hover:bg-orange-50 sm:w-auto">
          Sign up for free
        </Button>
      </div>
    </div>
  )
}

