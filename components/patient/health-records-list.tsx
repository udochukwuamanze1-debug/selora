"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { FileText, Download, Eye, Search, Calendar, Building2 } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

// Mock data - will be replaced with Sui blockchain queries
const mockRecords = [
  {
    id: "1",
    title: "Annual Physical Examination",
    type: "Checkup",
    date: "2024-12-15",
    provider: "Dr. Sarah Johnson",
    facility: "Central Medical Center",
    blobId: "blob_abc123",
    status: "completed",
  },
  {
    id: "2",
    title: "Blood Test Results",
    type: "Lab Result",
    date: "2024-12-10",
    provider: "HealthLab Diagnostics",
    facility: "HealthLab Downtown",
    blobId: "blob_def456",
    status: "completed",
  },
  {
    id: "3",
    title: "X-Ray Chest",
    type: "Imaging",
    date: "2024-11-28",
    provider: "Dr. Michael Chen",
    facility: "Radiology Associates",
    blobId: "blob_ghi789",
    status: "completed",
  },
  {
    id: "4",
    title: "Prescription - Antibiotics",
    type: "Prescription",
    date: "2024-11-20",
    provider: "Dr. Sarah Johnson",
    facility: "Central Medical Center",
    blobId: "blob_jkl012",
    status: "active",
  },
]

export function HealthRecordsList() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedRecord, setSelectedRecord] = useState<(typeof mockRecords)[0] | null>(null)

  const filteredRecords = mockRecords.filter(
    (record) =>
      record.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      record.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
      record.provider.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <div>
          <h2 className="font-heading text-2xl font-bold">My Health Records</h2>
          <p className="text-sm text-muted-foreground">All your medical records stored securely on-chain</p>
        </div>
        <div className="relative w-full sm:w-80">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="Search records..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {filteredRecords.length === 0 ? (
          <Card className="glass-card p-12 text-center">
            <FileText className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="font-heading text-lg font-semibold mb-2">No records found</h3>
            <p className="text-sm text-muted-foreground">Try adjusting your search or upload new records</p>
          </Card>
        ) : (
          filteredRecords.map((record) => (
            <Card key={record.id} className="glass-card p-6 hover:shadow-lg transition-shadow">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                <div className="flex gap-4 flex-1">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <FileText className="w-6 h-6 text-primary" />
                  </div>

                  <div className="space-y-2 flex-1 min-w-0">
                    <div className="flex items-start gap-3 flex-wrap">
                      <h3 className="font-heading text-lg font-semibold">{record.title}</h3>
                      <Badge variant={record.status === "active" ? "default" : "secondary"}>{record.type}</Badge>
                    </div>

                    <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {new Date(record.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center gap-2">
                        <Building2 className="w-4 h-4" />
                        {record.facility}
                      </div>
                    </div>

                    <p className="text-sm text-muted-foreground">Provider: {record.provider}</p>
                  </div>
                </div>

                <div className="flex gap-2 lg:flex-col xl:flex-row">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" size="sm" onClick={() => setSelectedRecord(record)}>
                        <Eye className="w-4 h-4 mr-2" />
                        View
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl">
                      <DialogHeader>
                        <DialogTitle>{record.title}</DialogTitle>
                        <DialogDescription>
                          Stored on Walrus: <code className="text-xs">{record.blobId}</code>
                        </DialogDescription>
                      </DialogHeader>
                      <div className="space-y-4 py-4">
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <p className="text-muted-foreground mb-1">Type</p>
                            <p className="font-medium">{record.type}</p>
                          </div>
                          <div>
                            <p className="text-muted-foreground mb-1">Date</p>
                            <p className="font-medium">{new Date(record.date).toLocaleDateString()}</p>
                          </div>
                          <div>
                            <p className="text-muted-foreground mb-1">Provider</p>
                            <p className="font-medium">{record.provider}</p>
                          </div>
                          <div>
                            <p className="text-muted-foreground mb-1">Facility</p>
                            <p className="font-medium">{record.facility}</p>
                          </div>
                        </div>
                        <div className="p-4 rounded-lg bg-muted/50 border border-border">
                          <p className="text-sm text-muted-foreground">
                            This record is encrypted and stored on Walrus decentralized storage. Access is controlled by
                            your Sui wallet.
                          </p>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>

                  <Button variant="ghost" size="sm">
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </Button>
                </div>
              </div>
            </Card>
          ))
        )}
      </div>
    </div>
  )
}
