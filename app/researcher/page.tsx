"use client"

import { useCurrentAccount } from "@mysten/dapp-kit"
import { ResearcherDashboard } from "@/components/researcher/researcher-dashboard"
import { WalletConnect } from "@/components/wallet-connect"
import { GraduationCap } from "lucide-react"

export default function ResearcherPortalPage() {
  const currentAccount = useCurrentAccount()

  if (!currentAccount) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center space-y-6 max-w-md">
          <div className="w-20 h-20 rounded-2xl bg-chart-5/10 flex items-center justify-center mx-auto">
            <GraduationCap className="w-10 h-10 text-chart-5" />
          </div>
          <h1 className="font-heading text-3xl font-bold">Researcher Portal</h1>
          <p className="text-muted-foreground leading-relaxed">
            Connect your Sui wallet to access anonymized health data for research studies with patient consent.
          </p>
          <WalletConnect />
        </div>
      </div>
    )
  }

  return <ResearcherDashboard />
}
