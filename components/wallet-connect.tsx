"use client"

// Simple wallet connection component using Sui dApp Kit
// Shows connected address or Connect button to open wallet picker modal

import { ConnectModal, useCurrentAccount } from "@mysten/dapp-kit"
import { Button } from "@/components/ui/button"
import { Wallet } from "lucide-react"
import { useState } from "react"

export function WalletConnect() {
  const currentAccount = useCurrentAccount()
  const [open, setOpen] = useState(false)

  if (currentAccount) {
    return (
      <div className="flex items-center gap-3">
        <div className="px-4 py-2 rounded-full bg-background/50 backdrop-blur-sm border border-border">
          <p className="text-sm font-medium">
            {currentAccount.address.slice(0, 6)}...{currentAccount.address.slice(-4)}
          </p>
        </div>
      </div>
    )
  }

  return (
    <>
      <Button onClick={() => setOpen(true)} className="gap-2">
        <Wallet className="w-4 h-4" />
        Connect Wallet
      </Button>
      <ConnectModal trigger={null} open={open} onOpenChange={(isOpen) => setOpen(isOpen)} />
    </>
  )
}
