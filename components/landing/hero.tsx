// Hero section with cinematic dark background and glassmorphic card
// Main headline and call-to-action for wallet connection

import { Shield } from "lucide-react"
import { WalletConnect } from "@/components/wallet-connect"

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 py-20 overflow-hidden">
      <div className="absolute inset-0 cinematic-bg animate-gradient" />

      {/* Floating orbs for visual interest */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse delay-700" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8 glass-card p-12 rounded-3xl border-0">
        {/* Logo/Brand badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card">
          <Shield className="w-5 h-5 text-primary" />
          <span className="font-heading text-sm font-semibold">Powered by Sui Blockchain</span>
        </div>

        {/* Main heading */}
        <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-balance leading-tight">
          Your health. Your data. <span className="text-primary">Your terms.</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
          Selora is a decentralized health platform built on Sui — private, secure, and human-centered.
        </p>

        <div className="pt-4">
          <WalletConnect />
        </div>
      </div>
    </section>
  )
}
