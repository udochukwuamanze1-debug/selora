import { Wallet, FileUp, ShieldCheck, User, Gift } from "lucide-react"

const steps = [
  {
    icon: Wallet,
    title: "Connect wallet / zkLogin",
    description:
      "Use any Sui-compatible wallet or zkLogin for passwordless authentication. Your identity, your control.",
    image: "/sui-wallet-connection-interface.jpg",
  },
  {
    icon: FileUp,
    title: "Upload & encrypt records",
    description:
      "Import existing medical records or have providers upload directly. All data is encrypted client-side before storage on Walrus.",
    image: "/encrypted-medical-records-upload.jpg",
  },
  {
    icon: ShieldCheck,
    title: "Choose how data is used",
    description:
      "Set granular permissions for doctors, labs, insurers, and researchers. Revoke access anytime with one click.",
    image: "/data-permission-control-dashboard.jpg",
  },
  {
    icon: User,
    title: "Mint Selora Avatar",
    description:
      "Create your on-chain health identity NFT. This avatar represents your verified health credentials on Sui.",
    image: "/digital-health-avatar-nft.jpg",
  },
  {
    icon: Gift,
    title: "Earn rewards",
    description:
      "Get rewarded for contributing anonymized data to research, maintaining good health, or participating in studies.",
    image: "/cryptocurrency-rewards-health-data.jpg",
  },
]

export function HowItWorks() {
  return (
    <section className="relative py-24 px-4 bg-muted/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-balance">How Selora Works</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            Get started in five simple steps and take control of your health data.
          </p>
        </div>

        <div className="space-y-24">
          {steps.map((step, index) => {
            const Icon = step.icon
            const isEven = index % 2 === 0

            return (
              <div
                key={step.title}
                className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} gap-12 items-center`}
              >
                {/* Content */}
                <div className="flex-1 space-y-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <span className="font-heading text-4xl font-bold text-muted-foreground/30">0{index + 1}</span>
                      <h3 className="font-heading text-2xl md:text-3xl font-bold">{step.title}</h3>
                    </div>
                    <p className="text-lg text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>
                </div>

                {/* Image */}
                <div className="flex-1">
                  <div className="glass-card p-4 rounded-2xl">
                    <img
                      src={step.image || "/placeholder.svg"}
                      alt={step.title}
                      className="w-full h-auto rounded-xl"
                      width={600}
                      height={400}
                    />
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
