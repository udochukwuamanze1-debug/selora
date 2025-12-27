import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { User, Stethoscope, FlaskConical, Building2, GraduationCap, ArrowRight } from "lucide-react"

const portals = [
  {
    id: "patient",
    title: "Patient Portal",
    description: "Access your complete health records, share data securely, and control who sees your information.",
    icon: User,
    color: "primary",
    href: "/patient",
  },
  {
    id: "doctor",
    title: "Doctor Portal",
    description: "Request patient data access, manage consultations, and securely store clinical notes.",
    icon: Stethoscope,
    color: "secondary",
    href: "/doctor",
  },
  {
    id: "lab",
    title: "Lab Portal",
    description: "Upload test results directly to patient records with cryptographic verification.",
    icon: FlaskConical,
    color: "accent",
    href: "/lab",
  },
  {
    id: "insurer",
    title: "Insurer Portal",
    description: "Process claims efficiently with zero-knowledge proof verification of medical data.",
    icon: Building2,
    color: "chart-4",
    href: "/insurer",
  },
  {
    id: "researcher",
    title: "Researcher Portal",
    description: "Access anonymized health data for studies with patient consent and privacy preservation.",
    icon: GraduationCap,
    color: "chart-5",
    href: "/researcher",
  },
]

export function PortalSelection() {
  return (
    <section id="portals" className="relative py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-balance">Choose Your Portal</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            Selora serves the entire healthcare ecosystem. Select your role to access your personalized dashboard.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portals.map((portal) => {
            const Icon = portal.icon
            return (
              <Card
                key={portal.id}
                className="glass-card p-8 hover:shadow-xl transition-all duration-300 hover:scale-[1.02] group"
              >
                <div className="space-y-6">
                  <div
                    className={`w-16 h-16 rounded-2xl bg-${portal.color}/10 flex items-center justify-center group-hover:scale-110 transition-transform`}
                  >
                    <Icon className={`w-8 h-8 text-${portal.color}`} />
                  </div>

                  <div className="space-y-3">
                    <h3 className="font-heading text-2xl font-bold">{portal.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{portal.description}</p>
                  </div>

                  <Button
                    variant="ghost"
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                    asChild
                  >
                    <Link href={portal.href}>
                      Enter Portal
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
