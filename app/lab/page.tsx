"use client"

import { useCurrentAccount } from "@mysten/dapp-kit"
import { LabDashboard } from "@/components/lab/lab-dashboard"
import { WalletConnect } from "@/components/wallet-connect"
import { FlaskConical } from "lucide-react"

export default function LabPortalPage() {
  const currentAccount = useCurrentAccount()

  if (!currentAccount) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center space-y-6 max-w-md">
          <div className="w-20 h-20 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto">
            <FlaskConical className="w-10 h-10 text-accent" />
          </div>
          <h1 className="font-heading text-3xl font-bold">Lab Portal</h1>
          <p className="text-muted-foreground leading-relaxed">
            Connect your Sui wallet to upload test results and manage laboratory services.
          </p>
          <WalletConnect />
        </div>
      </div>
    )
  }

  return <LabDashboard />
}
