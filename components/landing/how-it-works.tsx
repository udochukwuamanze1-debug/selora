import { Wallet, FileUp, Shield, Check } from "lucide-react"

const steps = [
  {
    icon: Wallet,
    title: "Connect Your Sui Wallet",
    description:
      "Use any Sui-compatible wallet to create your self-sovereign identity. Your wallet is your healthcare passport.",
  },
  {
    icon: FileUp,
    title: "Upload Your Records",
    description:
      "Import existing medical records or have providers upload directly. All data is encrypted and stored on Walrus.",
  },
  {
    icon: Shield,
    title: "Control Access",
    description:
      "Grant and revoke access permissions to doctors, labs, and insurers. You decide who sees your data and when.",
  },
  {
    icon: Check,
    title: "Share Securely",
    description: "Use zero-knowledge proofs to verify health conditions without revealing sensitive medical details.",
  },
]

export function HowItWorks() {
  return (
    <section className="relative py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-balance">How It Works</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            Get started with Selora in four simple steps.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div key={step.title} className="relative">
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-[60%] w-[80%] h-0.5 bg-border" />
                )}

                <div className="text-center space-y-4">
                  <div className="relative inline-flex">
                    <div className="w-24 h-24 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto">
                      <Icon className="w-12 h-12 text-primary" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-heading font-bold">
                      {index + 1}
                    </div>
                  </div>
                  <h3 className="font-heading text-xl font-bold">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
