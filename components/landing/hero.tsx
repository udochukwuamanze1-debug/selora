import Link from "next/link"
import { Button } from "@/components/ui/button"
import { WalletConnect } from "@/components/wallet-connect"
import { Shield, Database, Lock } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 py-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5" />

      {/* Floating orbs for visual interest */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-700" />

      <div className="relative z-10 max-w-6xl mx-auto text-center space-y-8">
        {/* Logo/Brand */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card">
          <Shield className="w-5 h-5 text-primary" />
          <span className="font-heading text-sm font-semibold">Powered by Sui Blockchain</span>
        </div>

        {/* Main heading */}
        <h1 className="font-heading text-6xl md:text-7xl lg:text-8xl font-bold text-balance leading-tight">
          Own Your <span className="text-primary">Health Data</span>
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
          Selora is the first decentralized health platform built on Sui, giving you complete control over your medical
          records with zero-knowledge privacy.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Button size="lg" className="text-lg px-8 py-6" asChild>
            <Link href="#portals">Choose Your Portal</Link>
          </Button>
          <WalletConnect />
        </div>

        {/* Trust indicators */}
        <div className="flex flex-wrap items-center justify-center gap-8 pt-12 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Database className="w-4 h-4 text-primary" />
            <span>Walrus Storage</span>
          </div>
          <div className="flex items-center gap-2">
            <Lock className="w-4 h-4 text-secondary" />
            <span>Zero-Knowledge Proofs</span>
          </div>
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-accent" />
            <span>Self-Sovereign Identity</span>
          </div>
        </div>
      </div>
    </section>
  )
}
