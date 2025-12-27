"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DatasetBrowser } from "./dataset-browser"
import { ResearchRequests } from "./research-requests"
import { ActiveStudies } from "./active-studies"
import { ResearcherProfile } from "./researcher-profile"
import { WalletConnect } from "@/components/wallet-connect"
import { Database, FileSearch, FlaskConical, GraduationCap } from "lucide-react"

export function ResearcherDashboard() {
  const [activeTab, setActiveTab] = useState("datasets")

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div>
            <h1 className="font-heading text-2xl font-bold">Researcher Portal</h1>
            <p className="text-sm text-muted-foreground">Privacy-preserving medical research platform</p>
          </div>
          <WalletConnect />
        </div>
      </header>

      {/* Main content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4">
            <TabsTrigger value="datasets" className="gap-2">
              <Database className="w-4 h-4" />
              <span className="hidden sm:inline">Datasets</span>
            </TabsTrigger>
            <TabsTrigger value="requests" className="gap-2">
              <FileSearch className="w-4 h-4" />
              <span className="hidden sm:inline">Data Requests</span>
            </TabsTrigger>
            <TabsTrigger value="studies" className="gap-2">
              <FlaskConical className="w-4 h-4" />
              <span className="hidden sm:inline">Active Studies</span>
            </TabsTrigger>
            <TabsTrigger value="profile" className="gap-2">
              <GraduationCap className="w-4 h-4" />
              <span className="hidden sm:inline">Profile</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="datasets">
            <DatasetBrowser />
          </TabsContent>

          <TabsContent value="requests">
            <ResearchRequests />
          </TabsContent>

          <TabsContent value="studies">
            <ActiveStudies />
          </TabsContent>

          <TabsContent value="profile">
            <ResearcherProfile />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
