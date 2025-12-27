"use client"

import { useState } from "react"
import { useCurrentAccount } from "@mysten/dapp-kit"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { HealthRecordsList } from "./health-records-list"
import { UploadRecords } from "./upload-records"
import { AccessControl } from "./access-control"
import { PatientProfile } from "./patient-profile"
import { WalletConnect } from "@/components/wallet-connect"
import { FileText, Upload, Shield, User } from "lucide-react"

export function PatientDashboard() {
  const currentAccount = useCurrentAccount()
  const [activeTab, setActiveTab] = useState("records")

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div>
            <h1 className="font-heading text-2xl font-bold">Patient Portal</h1>
            <p className="text-sm text-muted-foreground">Manage your health data</p>
          </div>
          <WalletConnect />
        </div>
      </header>

      {/* Main content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4">
            <TabsTrigger value="records" className="gap-2">
              <FileText className="w-4 h-4" />
              <span className="hidden sm:inline">My Records</span>
            </TabsTrigger>
            <TabsTrigger value="upload" className="gap-2">
              <Upload className="w-4 h-4" />
              <span className="hidden sm:inline">Upload</span>
            </TabsTrigger>
            <TabsTrigger value="access" className="gap-2">
              <Shield className="w-4 h-4" />
              <span className="hidden sm:inline">Access Control</span>
            </TabsTrigger>
            <TabsTrigger value="profile" className="gap-2">
              <User className="w-4 h-4" />
              <span className="hidden sm:inline">Profile</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="records">
            <HealthRecordsList />
          </TabsContent>

          <TabsContent value="upload">
            <UploadRecords />
          </TabsContent>

          <TabsContent value="access">
            <AccessControl />
          </TabsContent>

          <TabsContent value="profile">
            <PatientProfile />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
