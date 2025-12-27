"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, Database, Users, Calendar, Download, Lock } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { toast } from "sonner"

const mockDatasets = [
  {
    id: "1",
    title: "Cardiovascular Disease Outcomes",
    description: "Anonymized data from 5,000+ patients with cardiovascular conditions over 5 years",
    category: "Cardiology",
    recordCount: 5284,
    consentedPatients: 5284,
    dateRange: "2019-2024",
    privacyLevel: "Fully Anonymized",
    dataPoints: ["Demographics", "Lab Results", "Treatment Outcomes", "Medications"],
    accessType: "Request Required",
  },
  {
    id: "2",
    title: "Diabetes Management and Control",
    description: "Longitudinal study data tracking HbA1c levels, treatment protocols, and patient outcomes",
    category: "Endocrinology",
    recordCount: 3421,
    consentedPatients: 3421,
    dateRange: "2020-2024",
    privacyLevel: "Fully Anonymized",
    dataPoints: ["Blood Glucose", "HbA1c", "Medication History", "Lifestyle Factors"],
    accessType: "Request Required",
  },
  {
    id: "3",
    title: "Antibiotic Resistance Patterns",
    description: "Microbiology data showing bacterial resistance patterns across different antibiotics",
    category: "Infectious Disease",
    recordCount: 12543,
    consentedPatients: 12543,
    dateRange: "2018-2024",
    privacyLevel: "Fully Anonymized",
    dataPoints: ["Culture Results", "Antibiotic Sensitivity", "Patient Demographics"],
    accessType: "Open Access",
  },
]

export function DatasetBrowser() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedDataset, setSelectedDataset] = useState<(typeof mockDatasets)[0] | null>(null)

  const filteredDatasets = mockDatasets.filter(
    (dataset) =>
      dataset.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dataset.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dataset.description.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const handleRequestAccess = (datasetTitle: string) => {
    toast.success(`Access request submitted for: ${datasetTitle}`)
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <div>
          <h2 className="font-heading text-2xl font-bold">Available Datasets</h2>
          <p className="text-sm text-muted-foreground">
            Browse anonymized health datasets with patient consent for research
          </p>
        </div>
        <div className="relative w-full sm:w-80">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="Search datasets..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {filteredDatasets.map((dataset) => (
          <Card key={dataset.id} className="glass-card p-6 hover:shadow-lg transition-shadow">
            <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4">
              <div className="flex gap-4 flex-1">
                <div className="w-12 h-12 rounded-xl bg-chart-5/10 flex items-center justify-center flex-shrink-0">
                  <Database className="w-6 h-6 text-chart-5" />
                </div>

                <div className="space-y-3 flex-1">
                  <div className="flex items-start gap-3 flex-wrap">
                    <h3 className="font-heading text-lg font-semibold">{dataset.title}</h3>
                    <Badge variant="secondary">{dataset.category}</Badge>
                    <Badge variant={dataset.accessType === "Open Access" ? "default" : "outline"}>
                      {dataset.accessType}
                    </Badge>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed">{dataset.description}</p>

                  <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4" />
                      {dataset.recordCount.toLocaleString()} records
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {dataset.dateRange}
                    </div>
                    <div className="flex items-center gap-2">
                      <Lock className="w-4 h-4" />
                      {dataset.privacyLevel}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {dataset.dataPoints.map((point) => (
                      <Badge key={point} variant="outline" className="text-xs">
                        {point}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex gap-2">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" onClick={() => setSelectedDataset(dataset)}>
                      View Details
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl">
                    <DialogHeader>
                      <DialogTitle>{dataset.title}</DialogTitle>
                      <DialogDescription>{dataset.category}</DialogDescription>
                    </DialogHeader>

                    <div className="space-y-4 py-4">
                      <div>
                        <h4 className="font-semibold mb-2">Description</h4>
                        <p className="text-sm text-muted-foreground">{dataset.description}</p>
                      </div>

                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <p className="text-muted-foreground mb-1">Total Records</p>
                          <p className="font-medium">{dataset.recordCount.toLocaleString()}</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground mb-1">Consented Patients</p>
                          <p className="font-medium">{dataset.consentedPatients.toLocaleString()}</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground mb-1">Date Range</p>
                          <p className="font-medium">{dataset.dateRange}</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground mb-1">Privacy Level</p>
                          <p className="font-medium">{dataset.privacyLevel}</p>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2">Available Data Points</h4>
                        <div className="flex flex-wrap gap-2">
                          {dataset.dataPoints.map((point) => (
                            <Badge key={point} variant="secondary">
                              {point}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="p-4 rounded-lg bg-primary/5 border border-primary/20 text-sm">
                        <p className="font-semibold mb-2">Privacy Guarantees</p>
                        <ul className="text-muted-foreground space-y-1 list-disc list-inside">
                          <li>All personally identifiable information removed</li>
                          <li>Data aggregated to prevent re-identification</li>
                          <li>Patients explicitly consented to research use</li>
                          <li>Access logged on blockchain for transparency</li>
                        </ul>
                      </div>

                      {dataset.accessType === "Request Required" ? (
                        <Button onClick={() => handleRequestAccess(dataset.title)} className="w-full">
                          Request Access
                        </Button>
                      ) : (
                        <Button className="w-full">
                          <Download className="w-4 h-4 mr-2" />
                          Download Dataset
                        </Button>
                      )}
                    </div>
                  </DialogContent>
                </Dialog>

                {dataset.accessType === "Request Required" ? (
                  <Button onClick={() => handleRequestAccess(dataset.title)}>Request Access</Button>
                ) : (
                  <Button>
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </Button>
                )}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
