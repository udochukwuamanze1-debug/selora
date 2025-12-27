import { Navbar } from "@/components/landing/navbar"
import { Footer } from "@/components/landing/footer"
import { Shield } from "lucide-react"

export default function PrivacyPage() {
  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-background pt-16">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <div className="space-y-12">
            <div className="flex items-center gap-4">
              <Shield className="w-12 h-12 text-primary" />
              <div>
                <h1 className="font-heading text-5xl font-bold mb-2">Privacy Policy</h1>
                <p className="text-xl text-muted-foreground">Last updated: January 2025</p>
              </div>
            </div>

            <div className="space-y-8">
              <section className="glass-card p-8 rounded-2xl space-y-4">
                <h2 className="font-heading text-3xl font-bold">Data Ownership</h2>
                <p className="text-muted-foreground leading-relaxed">
                  At Selora, you retain complete ownership of all your health data. We do not have access to your
                  encrypted medical records, and we cannot share, sell, or monetize your information without your
                  explicit consent. Your data lives on decentralized storage and is controlled entirely by your
                  cryptographic keys.
                </p>
              </section>

              <section className="glass-card p-8 rounded-2xl space-y-4">
                <h2 className="font-heading text-3xl font-bold">Information We Collect</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Selora is a non-custodial platform. We only collect minimal metadata necessary for platform operation,
                  such as your blockchain address and transaction history on the Sui network. All health data is
                  encrypted client-side before being stored on Walrus.
                </p>
              </section>

              <section className="glass-card p-8 rounded-2xl space-y-4">
                <h2 className="font-heading text-3xl font-bold">Data Encryption</h2>
                <p className="text-muted-foreground leading-relaxed">
                  All health records are encrypted using industry-standard AES-256 encryption before leaving your
                  device. Only you hold the decryption keys, stored securely in your Sui wallet. Healthcare providers
                  only receive temporary access tokens when you grant permission.
                </p>
              </section>

              <section className="glass-card p-8 rounded-2xl space-y-4">
                <h2 className="font-heading text-3xl font-bold">Third-Party Access</h2>
                <p className="text-muted-foreground leading-relaxed">
                  You control all third-party access through our smart contract permission system. Doctors, labs,
                  insurers, and researchers can only view your data after you've explicitly granted them access. You can
                  revoke permissions at any time, and all access is logged immutably on the blockchain.
                </p>
              </section>

              <section className="glass-card p-8 rounded-2xl space-y-4">
                <h2 className="font-heading text-3xl font-bold">Research Participation</h2>
                <p className="text-muted-foreground leading-relaxed">
                  When contributing data to research studies, your information is anonymized using zero-knowledge
                  proofs. Researchers receive statistical insights and cryptographic proofs without accessing your raw
                  medical data. Participation is always opt-in and compensated fairly.
                </p>
              </section>

              <section className="glass-card p-8 rounded-2xl space-y-4">
                <h2 className="font-heading text-3xl font-bold">Contact Us</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have questions about our privacy practices, please contact us at privacy@selora.health
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
