"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PatientsList } from "./patients-list"
import { AccessRequests } from "./access-requests"
import { ClinicalNotes } from "./clinical-notes"
import { DoctorProfile } from "./doctor-profile"
import { WalletConnect } from "@/components/wallet-connect"
import { Users, FileSearch, FileText, User } from "lucide-react"

export function DoctorDashboard() {
  const [activeTab, setActiveTab] = useState("patients")

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div>
            <h1 className="font-heading text-2xl font-bold">Doctor Portal</h1>
            <p className="text-sm text-muted-foreground">Patient care and medical records management</p>
          </div>
          <WalletConnect />
        </div>
      </header>

      {/* Main content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4">
            <TabsTrigger value="patients" className="gap-2">
              <Users className="w-4 h-4" />
              <span className="hidden sm:inline">My Patients</span>
            </TabsTrigger>
            <TabsTrigger value="requests" className="gap-2">
              <FileSearch className="w-4 h-4" />
              <span className="hidden sm:inline">Access Requests</span>
            </TabsTrigger>
            <TabsTrigger value="notes" className="gap-2">
              <FileText className="w-4 h-4" />
              <span className="hidden sm:inline">Clinical Notes</span>
            </TabsTrigger>
            <TabsTrigger value="profile" className="gap-2">
              <User className="w-4 h-4" />
              <span className="hidden sm:inline">Profile</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="patients">
            <PatientsList />
          </TabsContent>

          <TabsContent value="requests">
            <AccessRequests />
          </TabsContent>

          <TabsContent value="notes">
            <ClinicalNotes />
          </TabsContent>

          <TabsContent value="profile">
            <DoctorProfile />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
