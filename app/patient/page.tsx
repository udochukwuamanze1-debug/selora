"use client"

import { useCurrentAccount } from "@mysten/dapp-kit"
import { PatientDashboard } from "@/components/patient/patient-dashboard"
import { WalletConnect } from "@/components/wallet-connect"
import { Shield } from "lucide-react"

export default function PatientPortalPage() {
  const currentAccount = useCurrentAccount()

  if (!currentAccount) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center space-y-6 max-w-md">
          <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto">
            <Shield className="w-10 h-10 text-primary" />
          </div>
          <h1 className="font-heading text-3xl font-bold">Patient Portal</h1>
          <p className="text-muted-foreground leading-relaxed">
            Connect your Sui wallet to access your health records and manage your medical data.
          </p>
          <WalletConnect />
        </div>
      </div>
    )
  }

  return <PatientDashboard />
}
