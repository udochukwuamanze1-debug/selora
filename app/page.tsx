"use client"

import { Hero } from "@/components/landing/hero"
import { Features } from "@/components/landing/features"
import { HowItWorks } from "@/components/landing/how-it-works"
import { BuiltOnSui } from "@/components/landing/built-on-sui"
import { Footer } from "@/components/landing/footer"
import { Navbar } from "@/components/landing/navbar"
import { PortalSelection } from "@/components/landing/portal-selection"
import { useCurrentAccount } from "@mysten/dapp-kit"

export default function LandingPage() {
  const account = useCurrentAccount()

  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      {account && <PortalSelection />}
      <Features />
      <div className="neon-divider" />
      <HowItWorks />
      <div className="neon-divider" />
      <BuiltOnSui />
      <Footer />
    </main>
  )
}
