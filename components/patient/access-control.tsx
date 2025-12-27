"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Shield, Plus, Trash2, Clock, CheckCircle } from "lucide-react"
import { toast } from "sonner"

// Mock data
const mockAccessGrants = [
  {
    id: "1",
    grantedTo: "Dr. Sarah Johnson",
    role: "Doctor",
    address: "0x742d...891a",
    grantedDate: "2024-12-01",
    expiresDate: "2025-12-01",
    permissions: ["view_records", "add_notes"],
    status: "active",
  },
  {
    id: "2",
    grantedTo: "HealthLab Diagnostics",
    role: "Lab",
    address: "0x9f3e...4d2b",
    grantedDate: "2024-11-15",
    expiresDate: "2025-11-15",
    permissions: ["view_records", "upload_results"],
    status: "active",
  },
  {
    id: "3",
    grantedTo: "MediCare Insurance",
    role: "Insurer",
    address: "0x1a5c...7e9f",
    grantedDate: "2024-10-20",
    expiresDate: "2024-12-31",
    permissions: ["view_specific_records"],
    status: "expiring_soon",
  },
]

export function AccessControl() {
  const [grants, setGrants] = useState(mockAccessGrants)
  const [isGrantDialogOpen, setIsGrantDialogOpen] = useState(false)
  const [newGrant, setNewGrant] = useState({
    address: "",
    duration: "365",
    viewRecords: true,
    addNotes: false,
    uploadResults: false,
  })

  const handleRevokeAccess = (id: string) => {
    setGrants(grants.filter((grant) => grant.id !== id))
    toast.success("Access revoked successfully")
  }

  const handleGrantAccess = () => {
    if (!newGrant.address) {
      toast.error("Please enter a Sui wallet address")
      return
    }

    toast.success("Access granted successfully")
    setIsGrantDialogOpen(false)
    setNewGrant({
      address: "",
      duration: "365",
      viewRecords: true,
      addNotes: false,
      uploadResults: false,
    })
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h2 className="font-heading text-2xl font-bold">Access Control</h2>
          <p className="text-sm text-muted-foreground">Manage who can view and interact with your health data</p>
        </div>

        <Dialog open={isGrantDialogOpen} onOpenChange={setIsGrantDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="w-4 h-4 mr-2" />
              Grant Access
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Grant Data Access</DialogTitle>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div>
                <Label htmlFor="address">Sui Wallet Address</Label>
                <Input
                  id="address"
                  placeholder="0x..."
                  value={newGrant.address}
                  onChange={(e) => setNewGrant({ ...newGrant, address: e.target.value })}
                />
              </div>

              <div>
                <Label htmlFor="duration">Access Duration (days)</Label>
                <Input
                  id="duration"
                  type="number"
                  value={newGrant.duration}
                  onChange={(e) => setNewGrant({ ...newGrant, duration: e.target.value })}
                />
              </div>

              <div className="space-y-3 pt-2">
                <Label>Permissions</Label>
                <div className="flex items-center justify-between">
                  <span className="text-sm">View Health Records</span>
                  <Switch
                    checked={newGrant.viewRecords}
                    onCheckedChange={(checked) => setNewGrant({ ...newGrant, viewRecords: checked })}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Add Clinical Notes</span>
                  <Switch
                    checked={newGrant.addNotes}
                    onCheckedChange={(checked) => setNewGrant({ ...newGrant, addNotes: checked })}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Upload Lab Results</span>
                  <Switch
                    checked={newGrant.uploadResults}
                    onCheckedChange={(checked) => setNewGrant({ ...newGrant, uploadResults: checked })}
                  />
                </div>
              </div>

              <Button onClick={handleGrantAccess} className="w-full">
                Grant Access
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Active access grants */}
      <div className="space-y-4">
        {grants.length === 0 ? (
          <Card className="glass-card p-12 text-center">
            <Shield className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="font-heading text-lg font-semibold mb-2">No active access grants</h3>
            <p className="text-sm text-muted-foreground mb-4">
              You haven't granted access to any healthcare providers yet
            </p>
            <Button onClick={() => setIsGrantDialogOpen(true)}>
              <Plus className="w-4 h-4 mr-2" />
              Grant First Access
            </Button>
          </Card>
        ) : (
          grants.map((grant) => (
            <Card key={grant.id} className="glass-card p-6">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                <div className="flex gap-4 flex-1">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-primary" />
                  </div>

                  <div className="space-y-3 flex-1">
                    <div className="flex items-start gap-3 flex-wrap">
                      <h3 className="font-heading text-lg font-semibold">{grant.grantedTo}</h3>
                      <Badge>{grant.role}</Badge>
                      {grant.status === "expiring_soon" && (
                        <Badge variant="destructive" className="gap-1">
                          <Clock className="w-3 h-3" />
                          Expiring Soon
                        </Badge>
                      )}
                      {grant.status === "active" && (
                        <Badge variant="secondary" className="gap-1">
                          <CheckCircle className="w-3 h-3" />
                          Active
                        </Badge>
                      )}
                    </div>

                    <div className="text-sm space-y-1">
                      <p className="text-muted-foreground">
                        Address: <code className="text-xs bg-muted px-1 py-0.5 rounded">{grant.address}</code>
                      </p>
                      <p className="text-muted-foreground">
                        Granted: {new Date(grant.grantedDate).toLocaleDateString()} • Expires:{" "}
                        {new Date(grant.expiresDate).toLocaleDateString()}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {grant.permissions.map((permission) => (
                        <Badge key={permission} variant="outline" className="text-xs">
                          {permission.replace("_", " ")}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                <Button variant="destructive" size="sm" onClick={() => handleRevokeAccess(grant.id)}>
                  <Trash2 className="w-4 h-4 mr-2" />
                  Revoke
                </Button>
              </div>
            </Card>
          ))
        )}
      </div>

      {/* Info */}
      <Card className="glass-card p-6 bg-primary/5 border-primary/20">
        <div className="flex gap-4">
          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
            <Shield className="w-5 h-5 text-primary" />
          </div>
          <div className="space-y-2">
            <h3 className="font-heading font-semibold">About Access Control</h3>
            <ul className="text-sm text-muted-foreground space-y-1 leading-relaxed">
              <li>• All access grants are recorded on Sui blockchain</li>
              <li>• You can revoke access at any time instantly</li>
              <li>• Set expiration dates to automatically revoke access</li>
              <li>• Grant granular permissions for different data types</li>
            </ul>
          </div>
        </div>
      </Card>
    </div>
  )
}
