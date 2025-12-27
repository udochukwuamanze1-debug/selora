"use client"

import { useCurrentAccount } from "@mysten/dapp-kit"
import { DoctorDashboard } from "@/components/doctor/doctor-dashboard"
import { WalletConnect } from "@/components/wallet-connect"
import { Stethoscope } from "lucide-react"

export default function DoctorPortalPage() {
  const currentAccount = useCurrentAccount()

  if (!currentAccount) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center space-y-6 max-w-md">
          <div className="w-20 h-20 rounded-2xl bg-secondary/10 flex items-center justify-center mx-auto">
            <Stethoscope className="w-10 h-10 text-secondary" />
          </div>
          <h1 className="font-heading text-3xl font-bold">Doctor Portal</h1>
          <p className="text-muted-foreground leading-relaxed">
            Connect your Sui wallet to access patient records and manage consultations.
          </p>
          <WalletConnect />
        </div>
      </div>
    )
  }

  return <DoctorDashboard />
}
