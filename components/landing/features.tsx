import { Shield, Lock, DollarSign, Heart, AlertCircle, FlaskConical } from "lucide-react"
import { Card } from "@/components/ui/card"

const features = [
  {
    icon: Shield,
    title: "Self-sovereign identity",
    description: "Control your digital identity with cryptographic proof. Your health data belongs to you, always.",
  },
  {
    icon: Lock,
    title: "Encrypted records",
    description: "End-to-end encryption ensures your medical data is always private and secure on Walrus storage.",
  },
  {
    icon: DollarSign,
    title: "Ethical data monetization",
    description: "Earn rewards by contributing anonymized data to research. You choose, you profit.",
  },
  {
    icon: Heart,
    title: "Micro-insurance",
    description: "Blockchain-powered micro-insurance products tailored to your health needs and lifestyle.",
  },
  {
    icon: AlertCircle,
    title: "Emergency access",
    description: "Grant trusted contacts emergency access to critical health information when it matters most.",
  },
  {
    icon: FlaskConical,
    title: "Research participation",
    description: "Contribute to medical research while maintaining privacy through zero-knowledge proofs.",
  },
]

export function Features() {
  return (
    <section className="relative py-24 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-balance">Why Choose Selora</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            Built with privacy-first principles and cutting-edge blockchain technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <Card key={feature.title} className="glass-card glass-card-hover p-6 space-y-4 group">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
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
