"use client"

import { useCurrentAccount } from "@mysten/dapp-kit"
import { InsurerDashboard } from "@/components/insurer/insurer-dashboard"
import { WalletConnect } from "@/components/wallet-connect"
import { Building2 } from "lucide-react"

export default function InsurerPortalPage() {
  const currentAccount = useCurrentAccount()

  if (!currentAccount) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center space-y-6 max-w-md">
          <div className="w-20 h-20 rounded-2xl bg-chart-4/10 flex items-center justify-center mx-auto">
            <Building2 className="w-10 h-10 text-chart-4" />
          </div>
          <h1 className="font-heading text-3xl font-bold">Insurer Portal</h1>
          <p className="text-muted-foreground leading-relaxed">
            Connect your Sui wallet to process claims and verify medical data with zero-knowledge proofs.
          </p>
          <WalletConnect />
        </div>
      </div>
    )
  }

  return <InsurerDashboard />
}
