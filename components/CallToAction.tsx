import { SpotlightSection } from "@/components/ui/spotlight-section"
import { NeonText } from "@/components/NeonText"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

export default function CallToAction() {
  const router = useRouter()
  return (
    <SpotlightSection fill="#ff6b00" className="section-background">
      <div className="relative py-24 sm:py-32">
        {/* Grid Pattern Background */}
        <div
          className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]"
          aria-hidden="true"
        />

        {/* Gradient Glow Effect */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-orange-500/20 rounded-full blur-3xl"
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <NeonText>
              <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                Ready to Experience Elite Performance?
              </h2>
            </NeonText>
            <div className="mt-10 flex items-center justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-full px-8 py-6 text-lg font-semibold shadow-lg shadow-orange-500/25 transition-all hover:shadow-orange-500/50"
                onClick={() => router.push("/contact")}
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </SpotlightSection>
  )
}

