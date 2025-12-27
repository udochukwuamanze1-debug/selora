import { Hero } from "@/components/landing/hero"
import { PortalSelection } from "@/components/landing/portal-selection"
import { Features } from "@/components/landing/features"
import { HowItWorks } from "@/components/landing/how-it-works"
import { Footer } from "@/components/landing/footer"

export default function LandingPage() {
  return (
    <main className="min-h-screen">
      <Hero />
      <PortalSelection />
      <Features />
      <HowItWorks />
      <Footer />
    </main>
  )
}
