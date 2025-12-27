import { Shield, Lock, Globe, Zap, FileCheck, Users } from "lucide-react"
import { Card } from "@/components/ui/card"

const features = [
  {
    icon: Shield,
    title: "Data Sovereignty",
    description:
      "You own your health data. No centralized authority can access or control your records without your explicit permission.",
  },
  {
    icon: Lock,
    title: "Zero-Knowledge Privacy",
    description:
      "Share proof of medical conditions without revealing sensitive details using advanced cryptographic protocols.",
  },
  {
    icon: Globe,
    title: "Decentralized Storage",
    description:
      "Health records stored on Walrus, Sui's decentralized storage network, ensuring data permanence and availability.",
  },
  {
    icon: Zap,
    title: "Instant Access",
    description: "Access your complete medical history instantly from anywhere in the world with your Sui wallet.",
  },
  {
    icon: FileCheck,
    title: "Immutable Records",
    description:
      "All medical records are cryptographically signed and stored on-chain, preventing tampering or unauthorized modifications.",
  },
  {
    icon: Users,
    title: "Interoperable System",
    description: "Seamlessly share data across providers, labs, and insurers with granular permission controls.",
  },
]

export function Features() {
  return (
    <section className="relative py-24 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-balance">Why Choose Selora</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            Built on cutting-edge blockchain technology to revolutionize healthcare data management.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <Card key={feature.title} className="glass-card p-6 space-y-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-bold">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
