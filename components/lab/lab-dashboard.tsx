"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { UploadResults } from "./upload-results"
import { TestOrders } from "./test-orders"
import { ResultsHistory } from "./results-history"
import { LabProfile } from "./lab-profile"
import { WalletConnect } from "@/components/wallet-connect"
import { Upload, ClipboardList, History, Building2 } from "lucide-react"

export function LabDashboard() {
  const [activeTab, setActiveTab] = useState("upload")

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div>
            <h1 className="font-heading text-2xl font-bold">Lab Portal</h1>
            <p className="text-sm text-muted-foreground">Laboratory test results and diagnostics</p>
          </div>
          <WalletConnect />
        </div>
      </header>

      {/* Main content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4">
            <TabsTrigger value="upload" className="gap-2">
              <Upload className="w-4 h-4" />
              <span className="hidden sm:inline">Upload Results</span>
            </TabsTrigger>
            <TabsTrigger value="orders" className="gap-2">
              <ClipboardList className="w-4 h-4" />
              <span className="hidden sm:inline">Test Orders</span>
            </TabsTrigger>
            <TabsTrigger value="history" className="gap-2">
              <History className="w-4 h-4" />
              <span className="hidden sm:inline">History</span>
            </TabsTrigger>
            <TabsTrigger value="profile" className="gap-2">
              <Building2 className="w-4 h-4" />
              <span className="hidden sm:inline">Lab Info</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="upload">
            <UploadResults />
          </TabsContent>

          <TabsContent value="orders">
            <TestOrders />
          </TabsContent>

          <TabsContent value="history">
            <ResultsHistory />
          </TabsContent>

          <TabsContent value="profile">
            <LabProfile />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
