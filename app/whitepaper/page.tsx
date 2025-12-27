import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/landing/navbar"
import { Footer } from "@/components/landing/footer"
import { ArrowLeft, FileText } from "lucide-react"

export default function WhitepaperPage() {
  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-background pt-16">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <Button variant="ghost" asChild className="mb-8">
            <Link href="/">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
          </Button>

          <div className="space-y-12">
            <div className="flex items-center gap-4">
              <FileText className="w-12 h-12 text-primary" />
              <div>
                <h1 className="font-heading text-5xl font-bold mb-2">Whitepaper</h1>
                <p className="text-xl text-muted-foreground">Selora: A Decentralized Health Data Platform</p>
              </div>
            </div>

            <div className="space-y-8">
              <section className="glass-card p-8 rounded-2xl space-y-4">
                <h2 className="font-heading text-3xl font-bold">Abstract</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Selora is a decentralized health data platform built on the Sui blockchain that empowers individuals
                  with complete ownership and control over their medical records. By leveraging zero-knowledge proofs,
                  decentralized storage via Walrus, and smart contracts, Selora creates a trustless ecosystem where
                  patients, healthcare providers, insurers, and researchers can securely interact while preserving
                  privacy and data sovereignty.
                </p>
              </section>

              <section className="glass-card p-8 rounded-2xl space-y-4">
                <h2 className="font-heading text-3xl font-bold">Problem Statement</h2>
                <p className="text-muted-foreground leading-relaxed">
                  The current healthcare data infrastructure is fragmented, centralized, and vulnerable to breaches.
                  Patients lack control over their own health information, while providers struggle with
                  interoperability. Data silos prevent efficient care coordination, and privacy concerns limit valuable
                  medical research.
                </p>
              </section>

              <section className="glass-card p-8 rounded-2xl space-y-4">
                <h2 className="font-heading text-3xl font-bold">Solution Architecture</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Selora addresses these challenges through a multi-layered architecture built on Sui blockchain and
                  Walrus decentralized storage. Our solution provides:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Self-sovereign identity using Sui blockchain addresses</li>
                  <li>End-to-end encrypted health records stored on Walrus</li>
                  <li>Smart contract-based access control with granular permissions</li>
                  <li>Zero-knowledge proof verification for privacy-preserving claims</li>
                  <li>Token incentives for data contribution and research participation</li>
                </ul>
              </section>

              <section className="glass-card p-8 rounded-2xl space-y-4">
                <h2 className="font-heading text-3xl font-bold">Technical Implementation</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Built using Sui Move smart contracts for on-chain logic and Walrus for decentralized file storage. The
                  platform integrates zkSNARKs for privacy-preserving verification and implements a novel
                  permission-based access system that allows patients to maintain full control while enabling seamless
                  data sharing with authorized parties.
                </p>
              </section>

              <section className="glass-card p-8 rounded-2xl space-y-4">
                <h2 className="font-heading text-3xl font-bold">Tokenomics & Incentives</h2>
                <p className="text-muted-foreground leading-relaxed">
                  The Selora ecosystem includes a native token for rewarding users who contribute anonymized data to
                  research, maintain healthy behaviors, and participate in clinical studies. This creates a sustainable
                  economy where data subjects are fairly compensated for their contributions.
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}
