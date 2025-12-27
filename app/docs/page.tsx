import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Book, Code, Rocket } from "lucide-react"

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <Button variant="ghost" asChild className="mb-8">
          <Link href="/">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
        </Button>

        <div className="space-y-12">
          <div>
            <h1 className="font-heading text-5xl font-bold mb-4">Documentation</h1>
            <p className="text-xl text-muted-foreground">Learn how to use Selora's decentralized health platform</p>
          </div>

          <div className="space-y-8">
            <section className="glass-card p-8 rounded-2xl space-y-4">
              <div className="flex items-center gap-3">
                <Book className="w-8 h-8 text-primary" />
                <h2 className="font-heading text-3xl font-bold">Getting Started</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Welcome to Selora! This guide will help you set up your account and start managing your health data
                securely on the blockchain.
              </p>
              <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                <li>Install a Sui-compatible wallet (Sui Wallet, Suiet, or Ethos)</li>
                <li>Connect your wallet to Selora</li>
                <li>Complete your profile setup</li>
                <li>Upload your first health record</li>
                <li>Set access permissions for healthcare providers</li>
              </ol>
            </section>

            <section className="glass-card p-8 rounded-2xl space-y-4">
              <div className="flex items-center gap-3">
                <Code className="w-8 h-8 text-primary" />
                <h2 className="font-heading text-3xl font-bold">For Developers</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Build on top of Selora's open protocol and integrate with our smart contracts.
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Smart Contract Documentation</li>
                <li>API Reference</li>
                <li>SDK Integration Guide</li>
                <li>Example Applications</li>
              </ul>
            </section>

            <section className="glass-card p-8 rounded-2xl space-y-4">
              <div className="flex items-center gap-3">
                <Rocket className="w-8 h-8 text-primary" />
                <h2 className="font-heading text-3xl font-bold">Advanced Features</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Explore advanced capabilities including zero-knowledge proofs, data monetization, and research
                participation.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
