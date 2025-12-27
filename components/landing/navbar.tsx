"use client"

// Navigation bar with logo, links, and wallet connection
// Fixed at top of page with glassmorphic effect
// Logo text uses primary color and is easy to replace with an image

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Shield, Menu, X } from "lucide-react"
import { WalletConnect } from "@/components/wallet-connect"
import { ThemeToggle } from "@/components/theme-toggle"
import { useState } from "react"

export function Navbar() {
  const [open, setOpen] = useState(false)

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

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <Link
            href="/documentation"
            className="nav-link text-sm font-medium text-foreground/70 hover:text-primary transition-all duration-300 relative group"
          >
            <span className="relative z-10">Documentation</span>
            <span className="absolute inset-0 bg-primary/10 rounded-md scale-0 group-hover:scale-100 transition-transform duration-300" />
          </Link>
          <Link
            href="/whitepaper"
            className="nav-link text-sm font-medium text-foreground/70 hover:text-primary transition-all duration-300 relative group"
          >
            <span className="relative z-10">Whitepaper</span>
            <span className="absolute inset-0 bg-primary/10 rounded-md scale-0 group-hover:scale-100 transition-transform duration-300" />
          </Link>
          <Link
            href="/privacy"
            className="nav-link text-sm font-medium text-foreground/70 hover:text-primary transition-all duration-300 relative group"
          >
            <span className="relative z-10">Privacy</span>
            <span className="absolute inset-0 bg-primary/10 rounded-md scale-0 group-hover:scale-100 transition-transform duration-300" />
          </Link>
          <Link
            href="/terms"
            className="nav-link text-sm font-medium text-foreground/70 hover:text-primary transition-all duration-300 relative group"
          >
            <span className="relative z-10">Terms</span>
            <span className="absolute inset-0 bg-primary/10 rounded-md scale-0 group-hover:scale-100 transition-transform duration-300" />
          </Link>
          <ThemeToggle />
          <WalletConnect />
        </div>

        {/* Mobile Navigation */}
        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle />
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-64">
              <div className="flex flex-col gap-4 mt-8">
                <WalletConnect />

                <div className="flex flex-col gap-2 pt-4 border-t">
                  <Link href="/documentation" className="text-sm hover:text-primary transition-colors">
                    Documentation
                  </Link>
                  <Link href="/whitepaper" className="text-sm hover:text-primary transition-colors">
                    Whitepaper
                  </Link>
                  <Link href="/privacy" className="text-sm hover:text-primary transition-colors">
                    Privacy Policy
                  </Link>
                  <Link href="/terms" className="text-sm hover:text-primary transition-colors">
                    Terms of Service
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}
