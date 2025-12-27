import { Card } from "@/components/ui/card"
import { Zap, Lock, Boxes } from "lucide-react"

const features = [
  {
    icon: Zap,
    title: "Fast",
    description: "Sub-second finality with Sui's parallel execution engine for instant transactions.",
  },
  {
    icon: Lock,
    title: "Secure",
    description: "Battle-tested Move language ensures secure smart contracts and asset ownership.",
  },
  {
    icon: Boxes,
    title: "Composable",
    description: "Build on top of Selora's open protocol and integrate with the broader Sui ecosystem.",
  },
]

export function BuiltOnSui() {
  return (
    <section className="relative py-24 px-4 bg-muted/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-6 mb-16">
          <div className="inline-flex items-center gap-3 px-6 py-3 glass-card rounded-full">
            <svg width="32" height="32" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M81.3 195.1C66.9 189.7 57.6 183 47.6 172.9C26.7 152 14.9 124.2 14.9 95.6C14.9 65.4 25.7 38.7 46.7 18.6C49.9 15.5 50.6 15 53.3 14.7C57.1 14.3 60.5 16.5 61.7 20.1C62.5 22.4 62.5 23 61 26.3C53.8 42.6 50.3 58.2 50.3 74.5C50.3 90.8 53.8 106.4 61 122.7C70.9 145.5 88.6 163.2 111.4 173.1C127.7 180.3 143.3 183.8 159.6 183.8C175.9 183.8 191.5 180.3 207.8 173.1C211.1 171.6 211.7 171.6 214 172.4C217.6 173.6 219.8 177 219.4 180.8C219.1 183.5 218.6 184.2 215.5 187.4C195.4 208.4 168.7 219.2 138.5 219.2C114.7 219.2 95.7 213.5 81.3 195.1Z"
                fill="currentColor"
                className="text-primary"
              />
              <path
                d="M107.8 180.4C99.4 178.2 88.9 172.9 82.7 166.7C66.3 150.3 63.1 124.8 75.2 104.8C81.5 94.3 93.2 86.5 106.3 83.8C111.8 82.7 120.8 82.7 126.3 83.8C144.1 87.3 158.9 102.1 162.4 119.9C163.5 125.4 163.5 134.4 162.4 139.9C159.4 152.7 150.8 164.4 139 170.7C131.5 174.8 116.6 177.9 107.8 180.4Z"
                fill="currentColor"
                className="text-primary"
              />
              <path
                d="M151.4 104.8C137 99.4 127.7 92.7 117.7 82.6C96.8 61.7 85 33.9 85 5.3C85 1.5 85.3 0.5 86.9 0.1C89.5 -0.5 92.3 1.1 93.3 4.1C94.1 6.4 94.1 7 93.6 10.3C90.1 34.5 95.9 58.2 110.3 77.8C118.5 88.8 130.6 98.6 142.8 103.8C146.1 105.3 146.7 105.3 149 104.5C152.6 103.3 154.8 99.9 154.4 96.1C154.1 93.4 153.6 92.7 150.5 89.5C130.4 68.5 120.9 41.8 123.9 13.5C124.2 10.2 124.5 9.6 125.9 8.2C128 6.1 131.2 5.8 133.8 7.4C135.1 8.2 136.3 9.8 136.9 11.6C137.4 13 137.4 14.6 137.1 20.3C136.4 33.4 138.3 45.2 143.1 57.8C148.5 71.8 156.9 84 167.8 94.9C169.8 96.9 171 98.7 171.6 100.6C172.8 104.2 170.6 107.6 166.8 108.8C164.1 109.6 163.5 109.6 160.2 108.1C157.1 106.7 155.9 106.1 151.4 104.8Z"
                fill="currentColor"
                className="text-primary"
              />
            </svg>
            <span className="font-heading text-2xl font-bold">Built on Sui</span>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            Powered by Sui blockchain and Walrus storage for unmatched performance and security.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <Card key={feature.title} className="glass-card glass-card-hover p-8 text-center space-y-4 group">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-heading text-2xl font-bold">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
