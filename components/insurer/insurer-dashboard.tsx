"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ClaimsList } from "./claims-list"
import { VerifyData } from "./verify-data"
import { PolicyHolders } from "./policy-holders"
import { InsurerProfile } from "./insurer-profile"
import { WalletConnect } from "@/components/wallet-connect"
import { FileText, ShieldCheck, Users, Building2 } from "lucide-react"

export function InsurerDashboard() {
  const [activeTab, setActiveTab] = useState("claims")

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div>
            <h1 className="font-heading text-2xl font-bold">Insurer Portal</h1>
            <p className="text-sm text-muted-foreground">Claims processing and data verification</p>
          </div>
          <WalletConnect />
        </div>
      </header>

      {/* Main content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4">
            <TabsTrigger value="claims" className="gap-2">
              <FileText className="w-4 h-4" />
              <span className="hidden sm:inline">Claims</span>
            </TabsTrigger>
            <TabsTrigger value="verify" className="gap-2">
              <ShieldCheck className="w-4 h-4" />
              <span className="hidden sm:inline">Verify Data</span>
            </TabsTrigger>
            <TabsTrigger value="holders" className="gap-2">
              <Users className="w-4 h-4" />
              <span className="hidden sm:inline">Policy Holders</span>
            </TabsTrigger>
            <TabsTrigger value="profile" className="gap-2">
              <Building2 className="w-4 h-4" />
              <span className="hidden sm:inline">Company Info</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="claims">
            <ClaimsList />
          </TabsContent>

          <TabsContent value="verify">
            <VerifyData />
          </TabsContent>

          <TabsContent value="holders">
            <PolicyHolders />
          </TabsContent>

          <TabsContent value="profile">
            <InsurerProfile />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
