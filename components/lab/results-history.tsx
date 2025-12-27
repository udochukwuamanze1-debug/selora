"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, Calendar, User, FileText } from "lucide-react"

const mockHistory = [
  {
    id: "1",
    patientName: "Bob Martinez",
    patientAddress: "0x5e6f...7g8h",
    testType: "Complete Blood Count (CBC)",
    uploadDate: "2024-12-20",
    technician: "Jane Smith, CLS",
    blobId: "blob_abc123",
  },
  {
    id: "2",
    patientName: "Carol Davis",
    patientAddress: "0x9i0j...1k2l",
    testType: "Basic Metabolic Panel",
    uploadDate: "2024-12-18",
    technician: "John Doe, MT",
    blobId: "blob_def456",
  },
  {
    id: "3",
    patientName: "Alice Johnson",
    patientAddress: "0x1a2b...3c4d",
    testType: "HbA1c",
    uploadDate: "2024-12-15",
    technician: "Jane Smith, CLS",
    blobId: "blob_ghi789",
  },
]

export function ResultsHistory() {
  const [searchQuery, setSearchQuery] = useState("")

  const filteredHistory = mockHistory.filter(
    (item) =>
      item.patientName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.testType.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <div>
          <h2 className="font-heading text-2xl font-bold">Results History</h2>
          <p className="text-sm text-muted-foreground">View all previously uploaded test results</p>
        </div>
        <div className="relative w-full sm:w-80">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="Search history..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {filteredHistory.map((item) => (
          <Card key={item.id} className="glass-card p-6">
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                <FileText className="w-6 h-6 text-accent" />
              </div>

              <div className="space-y-2 flex-1">
                <div className="flex items-start gap-3 flex-wrap">
                  <h3 className="font-heading text-lg font-semibold">{item.testType}</h3>
                  <Badge variant="secondary">Completed</Badge>
                </div>

                <div className="space-y-1 text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <User className="w-4 h-4" />
                    <span>
                      Patient: {item.patientName} ({item.patientAddress})
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>Uploaded: {new Date(item.uploadDate).toLocaleDateString()}</span>
                  </div>
                  <p className="text-muted-foreground">Technician: {item.technician}</p>
                  <p className="text-xs text-muted-foreground">
                    Walrus Blob ID: <code className="bg-muted px-1 py-0.5 rounded">{item.blobId}</code>
                  </p>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
