"use client"

import { useCurrentAccount, useConnectWallet, useDisconnectWallet } from "@mysten/dapp-kit"
import { Button } from "@/components/ui/button"
import { Wallet } from "lucide-react"

export function WalletConnect() {
  const currentAccount = useCurrentAccount()
  const { mutate: connect } = useConnectWallet()
  const { mutate: disconnect } = useDisconnectWallet()

  if (currentAccount) {
    return (
      <div className="flex items-center gap-3">
        <div className="px-4 py-2 rounded-full bg-background/50 backdrop-blur-sm border border-border">
          <p className="text-sm font-medium">
            {currentAccount.address.slice(0, 6)}...{currentAccount.address.slice(-4)}
          </p>
        </div>
        <Button onClick={() => disconnect()} variant="outline" size="sm">
          Disconnect
        </Button>
      </div>
    )
  }

  return (
    <Button onClick={() => connect({ wallet: { name: "Sui Wallet" } })} className="gap-2">
      <Wallet className="w-4 h-4" />
      Connect Wallet
    </Button>
  )
}
