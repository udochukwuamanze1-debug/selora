"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Send, User, Clock, CheckCircle, XCircle } from "lucide-react"
import { toast } from "sonner"

const mockRequests = [
  {
    id: "1",
    patientName: "Emma Wilson",
    patientAddress: "0x3d4e...5f6g",
    requestDate: "2024-12-22",
    reason: "Follow-up consultation for chronic back pain",
    status: "pending",
    urgency: "normal",
  },
  {
    id: "2",
    patientName: "David Brown",
    patientAddress: "0x7h8i...9j0k",
    requestDate: "2024-12-21",
    reason: "Annual physical examination",
    status: "pending",
    urgency: "low",
  },
]

export function AccessRequests() {
  const [requests, setRequests] = useState(mockRequests)
  const [isNewRequestOpen, setIsNewRequestOpen] = useState(false)
  const [newRequest, setNewRequest] = useState({
    patientAddress: "",
    reason: "",
    duration: "90",
  })

  const handleApprove = (id: string) => {
    setRequests(requests.filter((req) => req.id !== id))
    toast.success("Access request approved")
  }

  const handleDeny = (id: string) => {
    setRequests(requests.filter((req) => req.id !== id))
    toast.error("Access request denied")
  }

  const handleSendRequest = () => {
    if (!newRequest.patientAddress || !newRequest.reason) {
      toast.error("Please fill in all required fields")
      return
    }

    toast.success("Access request sent to patient")
    setIsNewRequestOpen(false)
    setNewRequest({ patientAddress: "", reason: "", duration: "90" })
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h2 className="font-heading text-2xl font-bold">Access Requests</h2>
          <p className="text-sm text-muted-foreground">Manage patient data access requests</p>
        </div>

        <Dialog open={isNewRequestOpen} onOpenChange={setIsNewRequestOpen}>
          <DialogTrigger asChild>
            <Button>
              <Send className="w-4 h-4 mr-2" />
              Request Access
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Request Patient Data Access</DialogTitle>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div>
                <Label htmlFor="patient-address">Patient Sui Wallet Address</Label>
                <Input
                  id="patient-address"
                  placeholder="0x..."
                  value={newRequest.patientAddress}
                  onChange={(e) => setNewRequest({ ...newRequest, patientAddress: e.target.value })}
                />
              </div>

              <div>
                <Label htmlFor="reason">Reason for Access</Label>
                <Textarea
                  id="reason"
                  placeholder="Describe why you need access to this patient's records..."
                  value={newRequest.reason}
                  onChange={(e) => setNewRequest({ ...newRequest, reason: e.target.value })}
                  rows={4}
                />
              </div>

              <div>
                <Label htmlFor="duration">Requested Duration (days)</Label>
                <Input
                  id="duration"
                  type="number"
                  value={newRequest.duration}
                  onChange={(e) => setNewRequest({ ...newRequest, duration: e.target.value })}
                />
              </div>

              <Button onClick={handleSendRequest} className="w-full">
                Send Request
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Pending requests from patients */}
      <div className="space-y-4">
        <h3 className="font-heading text-lg font-semibold">Pending Requests from Patients</h3>

        {requests.length === 0 ? (
          <Card className="glass-card p-12 text-center">
            <Clock className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="font-heading text-lg font-semibold mb-2">No pending requests</h3>
            <p className="text-sm text-muted-foreground">
              You'll see patient access requests here when they grant you permission
            </p>
          </Card>
        ) : (
          requests.map((request) => (
            <Card key={request.id} className="glass-card p-6">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                <div className="flex gap-4 flex-1">
                  <Avatar className="w-12 h-12">
                    <AvatarFallback className="bg-secondary/10 text-secondary">
                      <User className="w-6 h-6" />
                    </AvatarFallback>
                  </Avatar>

                  <div className="space-y-2 flex-1">
                    <div className="flex items-start gap-3 flex-wrap">
                      <h3 className="font-heading text-lg font-semibold">{request.patientName}</h3>
                      <Badge
                        variant={
                          request.urgency === "high"
                            ? "destructive"
                            : request.urgency === "normal"
                              ? "default"
                              : "secondary"
                        }
                      >
                        {request.urgency} priority
                      </Badge>
                    </div>

                    <p className="text-sm text-muted-foreground">
                      Address: <code className="text-xs bg-muted px-1 py-0.5 rounded">{request.patientAddress}</code>
                    </p>

                    <p className="text-sm">{request.reason}</p>

                    <p className="text-xs text-muted-foreground flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      Requested {new Date(request.requestDate).toLocaleDateString()}
                    </p>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button variant="default" onClick={() => handleApprove(request.id)}>
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Approve
                  </Button>
                  <Button variant="outline" onClick={() => handleDeny(request.id)}>
                    <XCircle className="w-4 h-4 mr-2" />
                    Deny
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
