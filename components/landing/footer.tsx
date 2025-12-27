import Link from "next/link"
import { Shield, Github, Twitter, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-muted/30">
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
                <Link href="/patient" className="hover:text-foreground transition-colors">
                  Patient Portal
                </Link>
              </li>
              <li>
                <Link href="/doctor" className="hover:text-foreground transition-colors">
                  Doctor Portal
                </Link>
              </li>
              <li>
                <Link href="/lab" className="hover:text-foreground transition-colors">
                  Lab Portal
                </Link>
              </li>
              <li>
                <Link href="/insurer" className="hover:text-foreground transition-colors">
                  Insurer Portal
                </Link>
              </li>
              <li>
                <Link href="/researcher" className="hover:text-foreground transition-colors">
                  Researcher Portal
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h4 className="font-heading font-semibold">Resources</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/docs" className="hover:text-foreground transition-colors">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="/whitepaper" className="hover:text-foreground transition-colors">
                  Whitepaper
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-foreground transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-foreground transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div className="space-y-4">
            <h4 className="font-heading font-semibold">Connect</h4>
            <div className="flex gap-2">
              <Button size="icon" variant="ghost" asChild>
                <Link href="https://github.com" target="_blank">
                  <Github className="w-5 h-5" />
                </Link>
              </Button>
              <Button size="icon" variant="ghost" asChild>
                <Link href="https://twitter.com" target="_blank">
                  <Twitter className="w-5 h-5" />
                </Link>
              </Button>
              <Button size="icon" variant="ghost" asChild>
                <Link href="mailto:hello@selora.health" target="_blank">
                  <Mail className="w-5 h-5" />
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
