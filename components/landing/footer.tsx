// Footer with navigation links, social links, and branding
// Links have subtle hover animations

import Link from "next/link"
import { Shield, Twitter, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Shield className="w-6 h-6 text-primary" />
              <span className="font-heading text-xl font-bold">Selora</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Decentralized health platform built on Sui blockchain. Your data, your control.
            </p>
          </div>

          {/* Platform */}
          <div className="space-y-4">
            <h4 className="font-heading font-semibold">Platform</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link
                  href="/patient"
                  className="hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  Patient Portal
                </Link>
              </li>
              <li>
                <Link
                  href="/doctor"
                  className="hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  Doctor Portal
                </Link>
              </li>
              <li>
                <Link
                  href="/lab"
                  className="hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  Lab Portal
                </Link>
              </li>
              <li>
                <Link
                  href="/insurer"
                  className="hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  Insurer Portal
                </Link>
              </li>
              <li>
                <Link
                  href="/researcher"
                  className="hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  Researcher Portal
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-heading font-semibold">Resources</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link
                  href="/documentation"
                  className="hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  Documentation
                </Link>
              </li>
              <li>
                <Link
                  href="/whitepaper"
                  className="hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  Whitepaper
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-heading font-semibold">Connect</h4>
            <div className="flex gap-2">
              <Button size="icon" variant="ghost" asChild className="hover:scale-110 transition-transform duration-300">
                <Link href="https://x.com/selora" target="_blank" rel="noopener noreferrer">
                  <Twitter className="w-5 h-5" />
                  <span className="sr-only">X (Twitter)</span>
                </Link>
              </Button>
              <Button size="icon" variant="ghost" asChild className="hover:scale-110 transition-transform duration-300">
                <Link href="https://discord.gg/selora" target="_blank" rel="noopener noreferrer">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z" />
                  </svg>
                  <span className="sr-only">Discord</span>
                </Link>
              </Button>
              <Button size="icon" variant="ghost" asChild className="hover:scale-110 transition-transform duration-300">
                <Link href="mailto:hello@selora.health">
                  <Mail className="w-5 h-5" />
                  <span className="sr-only">Email</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; 2025 Selora. Built with privacy, powered by Sui.</p>
        </div>
      </div>
    </footer>
  )
}
