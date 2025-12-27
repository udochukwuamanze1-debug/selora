import { Navbar } from "@/components/landing/navbar"
import { Footer } from "@/components/landing/footer"
import { FileText } from "lucide-react"

export default function TermsPage() {
  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-background pt-16">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <div className="space-y-12">
            <div className="flex items-center gap-4">
              <FileText className="w-12 h-12 text-primary" />
              <div>
                <h1 className="font-heading text-5xl font-bold mb-2">Terms of Service</h1>
                <p className="text-xl text-muted-foreground">Last updated: January 2025</p>
              </div>
            </div>

            <div className="space-y-8">
              <section className="glass-card p-8 rounded-2xl space-y-4">
                <h2 className="font-heading text-3xl font-bold">Acceptance of Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  By accessing and using Selora, you accept and agree to be bound by these Terms of Service. If you do
                  not agree to these terms, please do not use our platform.
                </p>
              </section>

              <section className="glass-card p-8 rounded-2xl space-y-4">
                <h2 className="font-heading text-3xl font-bold">Platform Description</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Selora is a decentralized health data platform that facilitates secure storage and sharing of medical
                  records using blockchain technology. We provide the infrastructure and smart contracts, but you
                  maintain full custody and control of your health data.
                </p>
              </section>

              <section className="glass-card p-8 rounded-2xl space-y-4">
                <h2 className="font-heading text-3xl font-bold">User Responsibilities</h2>
                <p className="text-muted-foreground leading-relaxed">You are responsible for:</p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Maintaining the security of your Sui wallet and private keys</li>
                  <li>Ensuring the accuracy of health information you upload</li>
                  <li>Managing access permissions to your data appropriately</li>
                  <li>Complying with applicable healthcare regulations in your jurisdiction</li>
                  <li>Backing up your encryption keys securely</li>
                </ul>
              </section>

              <section className="glass-card p-8 rounded-2xl space-y-4">
                <h2 className="font-heading text-3xl font-bold">Limitation of Liability</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Selora is provided "as is" without warranties. We are not liable for loss of access to your data due
                  to lost private keys, smart contract vulnerabilities, or blockchain network issues. You acknowledge
                  that blockchain transactions are irreversible.
                </p>
              </section>

              <section className="glass-card p-8 rounded-2xl space-y-4">
                <h2 className="font-heading text-3xl font-bold">Medical Disclaimer</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Selora is a data management platform and does not provide medical advice, diagnosis, or treatment.
                  Always consult with qualified healthcare professionals for medical decisions. We do not verify the
                  credentials of healthcare providers using our platform.
                </p>
              </section>

              <section className="glass-card p-8 rounded-2xl space-y-4">
                <h2 className="font-heading text-3xl font-bold">Prohibited Activities</h2>
                <p className="text-muted-foreground leading-relaxed">Users may not:</p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Upload false or misleading health information</li>
                  <li>Access other users' data without authorization</li>
                  <li>Attempt to exploit smart contract vulnerabilities</li>
                  <li>Use the platform for illegal activities</li>
                  <li>Impersonate healthcare providers or institutions</li>
                </ul>
              </section>

              <section className="glass-card p-8 rounded-2xl space-y-4">
                <h2 className="font-heading text-3xl font-bold">Modifications to Service</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We reserve the right to modify or discontinue the platform at any time. However, due to the
                  decentralized nature of blockchain, your data will remain accessible through the Sui network and
                  Walrus storage even if our interface is unavailable.
                </p>
              </section>

              <section className="glass-card p-8 rounded-2xl space-y-4">
                <h2 className="font-heading text-3xl font-bold">Contact</h2>
                <p className="text-muted-foreground leading-relaxed">
                  For questions about these terms, contact legal@selora.health
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
