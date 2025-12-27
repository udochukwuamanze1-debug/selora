// Documentation page with comprehensive guides and technical information
// Includes navbar for consistent navigation across all pages

import { Navbar } from "@/components/landing/navbar"
import { Footer } from "@/components/landing/footer"
import { Book } from "lucide-react"

export default function DocumentationPage() {
  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-background pt-16">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <div className="space-y-12">
            <div className="flex items-center gap-4">
              <Book className="w-12 h-12 text-primary" />
              <div>
                <h1 className="font-heading text-5xl font-bold mb-2">Documentation</h1>
                <p className="text-xl text-muted-foreground">Complete guide to using Selora</p>
              </div>
            </div>

            <div className="space-y-8">
              <section className="glass-card p-8 rounded-2xl space-y-4">
                <h2 className="font-heading text-3xl font-bold">Getting Started</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Selora is a decentralized health platform built on Sui blockchain. To get started, you'll need a Sui
                  wallet to securely manage your health data. This guide will walk you through setting up your wallet
                  and connecting to the platform.
                </p>
                <ol className="list-decimal list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Install a Sui-compatible wallet (Sui Wallet, Suiet, or Ethos)</li>
                  <li>Create or import your wallet account</li>
                  <li>Click "Connect Wallet" on the Selora homepage</li>
                  <li>Select your portal type (Patient, Doctor, Lab, Insurer, or Researcher)</li>
                  <li>Start managing your health data securely</li>
                </ol>
              </section>

              <section className="glass-card p-8 rounded-2xl space-y-4">
                <h2 className="font-heading text-3xl font-bold">Patient Portal</h2>
                <p className="text-muted-foreground leading-relaxed">
                  The Patient Portal gives you complete control over your health records. Upload medical documents, lab
                  results, imaging, and prescriptions. All files are encrypted before being stored on Walrus
                  decentralized storage.
                </p>
                <h3 className="font-heading text-xl font-semibold mt-4">Managing Access</h3>
                <p className="text-muted-foreground leading-relaxed">
                  You can grant temporary or permanent access to healthcare providers using smart contracts. Access
                  permissions can be revoked at any time, and all access attempts are logged on the blockchain for
                  transparency.
                </p>
              </section>

              <section className="glass-card p-8 rounded-2xl space-y-4">
                <h2 className="font-heading text-3xl font-bold">Healthcare Providers</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Doctors and labs can request access to patient records for treatment purposes. Once granted, providers
                  can view encrypted records and add clinical notes. All interactions are auditable and
                  cryptographically signed.
                </p>
              </section>

              <section className="glass-card p-8 rounded-2xl space-y-4">
                <h2 className="font-heading text-3xl font-bold">Data Encryption</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Selora uses industry-standard AES-256 encryption. Your private keys never leave your device, and all
                  encryption happens client-side. Walrus provides decentralized, immutable storage for encrypted data.
                </p>
              </section>

              <section className="glass-card p-8 rounded-2xl space-y-4">
                <h2 className="font-heading text-3xl font-bold">Research Participation</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Contribute anonymized data to medical research studies while maintaining privacy through
                  zero-knowledge proofs. Researchers can verify health conditions without accessing raw medical data,
                  and you earn tokens for participation.
                </p>
              </section>

              <section className="glass-card p-8 rounded-2xl space-y-4">
                <h2 className="font-heading text-3xl font-bold">Smart Contract Architecture</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Selora's smart contracts are built with Sui Move and handle access control, permission management, and
                  audit logging. All contract code is open-source and audited for security.
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
