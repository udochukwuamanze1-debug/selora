"use client"

// Navigation bar with logo and wallet connection
// Fixed at top of page with glassmorphic effect
// Logo text uses primary color and is easy to replace with an image

import Link from "next/link"
import { Shield } from "lucide-react"
import { WalletConnect } from "@/components/wallet-connect"
import { ThemeToggle } from "@/components/theme-toggle"

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-border/50">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo - Easy to replace: swap Shield icon with <Image src="/logo.png" alt="Selora" width={32} height={32} /> */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 flex items-center justify-center">
            <Shield className="w-6 h-6 text-primary transition-transform group-hover:scale-110" />
          </div>
          <span className="font-heading text-xl font-bold text-primary">Selora</span>
        </Link>

        {/* Right side - wallet connect and theme toggle */}
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <WalletConnect />
        </div>
      </div>
    </nav>
  )
}
