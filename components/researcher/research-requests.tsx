"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { FileSearch, Plus, Clock, CheckCircle, XCircle } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { toast } from "sonner"

const mockRequests = [
  {
    id: "1",
    studyTitle: "Impact of Lifestyle on Type 2 Diabetes",
    datasetRequested: "Diabetes Management and Control",
    submissionDate: "2024-12-18",
    status: "approved",
    requestedBy: "Dr. Emma Wilson",
    institution: "Stanford Medical Research",
  },
  {
    id: "2",
    studyTitle: "Novel Antibiotic Efficacy Study",
    datasetRequested: "Antibiotic Resistance Patterns",
    submissionDate: "2024-12-20",
    status: "pending",
    requestedBy: "Dr. James Chen",
    institution: "Harvard Research Lab",
  },
]

export function ResearchRequests() {
  const [requests] = useState(mockRequests)
  const [isNewRequestOpen, setIsNewRequestOpen] = useState(false)
  const [newRequest, setNewRequest] = useState({
    studyTitle: "",
    dataset: "",
    purpose: "",
    duration: "12",
    ethicsApproval: "",
  })

  const handleSubmitRequest = () => {
    if (!newRequest.studyTitle || !newRequest.dataset || !newRequest.purpose) {
      toast.error("Please fill in all required fields")
      return
    }

    toast.success("Data access request submitted for review")
    setIsNewRequestOpen(false)
    setNewRequest({
      studyTitle: "",
      dataset: "",
      purpose: "",
      duration: "12",
      ethicsApproval: "",
    })
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "approved":
        return "default"
      case "denied":
        return "destructive"
      default:
        return "secondary"
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h2 className="font-heading text-2xl font-bold">Data Access Requests</h2>
          <p className="text-sm text-muted-foreground">Submit and track requests for research data access</p>
        </div>

        <Dialog open={isNewRequestOpen} onOpenChange={setIsNewRequestOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="w-4 h-4 mr-2" />
              New Request
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Request Data Access</DialogTitle>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div>
                <Label htmlFor="study-title">Study Title</Label>
                <Input
                  id="study-title"
                  placeholder="e.g., Impact of Sleep on Cardiovascular Health"
                  value={newRequest.studyTitle}
                  onChange={(e) => setNewRequest({ ...newRequest, studyTitle: e.target.value })}
                />
              </div>

              <div>
                <Label htmlFor="dataset">Dataset Requested</Label>
                <Select
                  value={newRequest.dataset}
                  onValueChange={(value) => setNewRequest({ ...newRequest, dataset: value })}
                >
                  <SelectTrigger id="dataset">
                    <SelectValue placeholder="Select dataset" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="cardiovascular">Cardiovascular Disease Outcomes</SelectItem>
                    <SelectItem value="diabetes">Diabetes Management and Control</SelectItem>
                    <SelectItem value="antibiotics">Antibiotic Resistance Patterns</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="purpose">Research Purpose</Label>
                <Textarea
                  id="purpose"
                  placeholder="Describe the purpose and methodology of your research..."
                  value={newRequest.purpose}
                  onChange={(e) => setNewRequest({ ...newRequest, purpose: e.target.value })}
                  rows={5}
                />
              </div>

              <div>
                <Label htmlFor="duration">Access Duration (months)</Label>
                <Input
                  id="duration"
                  type="number"
                  value={newRequest.duration}
                  onChange={(e) => setNewRequest({ ...newRequest, duration: e.target.value })}
                />
              </div>

              <div>
                <Label htmlFor="ethics">Ethics Approval Number</Label>
                <Input
                  id="ethics"
                  placeholder="IRB approval number"
                  value={newRequest.ethicsApproval}
                  onChange={(e) => setNewRequest({ ...newRequest, ethicsApproval: e.target.value })}
                />
              </div>

              <Button onClick={handleSubmitRequest} className="w-full">
                Submit Request
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {requests.length === 0 ? (
          <Card className="glass-card p-12 text-center">
            <FileSearch className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="font-heading text-lg font-semibold mb-2">No data requests</h3>
            <p className="text-sm text-muted-foreground mb-4">Submit your first request to access research datasets</p>
            <Button onClick={() => setIsNewRequestOpen(true)}>
              <Plus className="w-4 h-4 mr-2" />
              Create Request
            </Button>
          </Card>
        ) : (
          requests.map((request) => (
            <Card key={request.id} className="glass-card p-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-chart-5/10 flex items-center justify-center flex-shrink-0">
                  <FileSearch className="w-6 h-6 text-chart-5" />
                </div>

                <div className="space-y-2 flex-1">
                  <div className="flex items-start gap-3 flex-wrap">
                    <h3 className="font-heading text-lg font-semibold">{request.studyTitle}</h3>
                    <Badge variant={getStatusColor(request.status)}>
                      {request.status === "approved" && <CheckCircle className="w-3 h-3 mr-1" />}
                      {request.status === "pending" && <Clock className="w-3 h-3 mr-1" />}
                      {request.status === "denied" && <XCircle className="w-3 h-3 mr-1" />}
                      {request.status}
                    </Badge>
                  </div>

                  <div className="space-y-1 text-sm">
                    <p className="text-muted-foreground">
                      Dataset: <span className="font-medium">{request.datasetRequested}</span>
                    </p>
                    <p className="text-muted-foreground">
                      Requested by: {request.requestedBy} - {request.institution}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Submitted: {new Date(request.submissionDate).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          ))
        )}
      </div>
    </div>
  )
}
