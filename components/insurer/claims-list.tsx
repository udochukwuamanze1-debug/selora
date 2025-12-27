"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Search, User, Calendar, DollarSign, CheckCircle, XCircle, Eye, FileText, ShieldCheck } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { toast } from "sonner"

const mockClaims = [
  {
    id: "1",
    claimNumber: "CLM-2024-001234",
    patientName: "Alice Johnson",
    patientAddress: "0x1a2b...3c4d",
    submissionDate: "2024-12-20",
    claimType: "Medical Procedure",
    provider: "Central Medical Center",
    amount: 4500,
    status: "pending",
    description: "Surgical procedure - Appendectomy",
    documents: ["Surgery Report", "Itemized Bill", "Pre-authorization"],
  },
  {
    id: "2",
    claimNumber: "CLM-2024-001235",
    patientName: "Bob Martinez",
    patientAddress: "0x5e6f...7g8h",
    submissionDate: "2024-12-18",
    claimType: "Prescription",
    provider: "HealthPharm",
    amount: 250,
    status: "under_review",
    description: "Prescription medication coverage",
    documents: ["Prescription", "Receipt"],
  },
  {
    id: "3",
    claimNumber: "CLM-2024-001236",
    patientName: "Carol Davis",
    patientAddress: "0x9i0j...1k2l",
    submissionDate: "2024-12-15",
    claimType: "Lab Tests",
    provider: "HealthLab Diagnostics",
    amount: 680,
    status: "approved",
    description: "Comprehensive blood panel and imaging",
    documents: ["Lab Results", "Imaging Report", "Invoice"],
  },
]

export function ClaimsList() {
  const [claims, setClaims] = useState(mockClaims)
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedClaim, setSelectedClaim] = useState<(typeof mockClaims)[0] | null>(null)

  const filteredClaims = claims.filter(
    (claim) =>
      claim.claimNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
      claim.patientName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      claim.claimType.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const handleApproveClaim = (id: string) => {
    setClaims(claims.map((claim) => (claim.id === id ? { ...claim, status: "approved" } : claim)))
    toast.success("Claim approved successfully")
  }

  const handleDenyClaim = (id: string) => {
    setClaims(claims.map((claim) => (claim.id === id ? { ...claim, status: "denied" } : claim)))
    toast.error("Claim denied")
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "approved":
        return "default"
      case "denied":
        return "destructive"
      case "under_review":
        return "secondary"
      default:
        return "outline"
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <div>
          <h2 className="font-heading text-2xl font-bold">Insurance Claims</h2>
          <p className="text-sm text-muted-foreground">Review and process claims with zero-knowledge verification</p>
        </div>
        <div className="relative w-full sm:w-80">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="Search claims..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {filteredClaims.map((claim) => (
          <Card key={claim.id} className="glass-card p-6 hover:shadow-lg transition-shadow">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
              <div className="flex gap-4 flex-1">
                <Avatar className="w-12 h-12">
                  <AvatarFallback className="bg-chart-4/10 text-chart-4">
                    <User className="w-6 h-6" />
                  </AvatarFallback>
                </Avatar>

                <div className="space-y-2 flex-1">
                  <div className="flex items-start gap-3 flex-wrap">
                    <h3 className="font-heading text-lg font-semibold">{claim.claimNumber}</h3>
                    <Badge variant={getStatusColor(claim.status)}>{claim.status.replace("_", " ")}</Badge>
                  </div>

                  <div className="space-y-1">
                    <p className="text-sm">
                      <span className="text-muted-foreground">Patient:</span>{" "}
                      <span className="font-medium">{claim.patientName}</span>
                    </p>
                    <p className="text-sm">
                      <span className="text-muted-foreground">Type:</span>{" "}
                      <span className="font-medium">{claim.claimType}</span>
                    </p>
                    <p className="text-sm text-muted-foreground">{claim.description}</p>
                    <p className="text-sm text-muted-foreground">Provider: {claim.provider}</p>
                  </div>

                  <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {new Date(claim.submissionDate).toLocaleDateString()}
                    </div>
                    <div className="flex items-center gap-2">
                      <DollarSign className="w-4 h-4" />${claim.amount.toLocaleString()}
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex gap-2 flex-wrap">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" onClick={() => setSelectedClaim(claim)}>
                      <Eye className="w-4 h-4 mr-2" />
                      Review
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle>{claim.claimNumber}</DialogTitle>
                      <DialogDescription>{claim.patientName}</DialogDescription>
                    </DialogHeader>

                    <Tabs defaultValue="details" className="mt-4">
                      <TabsList className="grid w-full grid-cols-3">
                        <TabsTrigger value="details">Details</TabsTrigger>
                        <TabsTrigger value="documents">Documents</TabsTrigger>
                        <TabsTrigger value="verification">Verification</TabsTrigger>
                      </TabsList>

                      <TabsContent value="details" className="space-y-4 pt-4">
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <p className="text-muted-foreground mb-1">Claim Number</p>
                            <p className="font-medium">{claim.claimNumber}</p>
                          </div>
                          <div>
                            <p className="text-muted-foreground mb-1">Claim Type</p>
                            <p className="font-medium">{claim.claimType}</p>
                          </div>
                          <div>
                            <p className="text-muted-foreground mb-1">Submission Date</p>
                            <p className="font-medium">{new Date(claim.submissionDate).toLocaleDateString()}</p>
                          </div>
                          <div>
                            <p className="text-muted-foreground mb-1">Claim Amount</p>
                            <p className="font-medium">${claim.amount.toLocaleString()}</p>
                          </div>
                          <div>
                            <p className="text-muted-foreground mb-1">Healthcare Provider</p>
                            <p className="font-medium">{claim.provider}</p>
                          </div>
                          <div>
                            <p className="text-muted-foreground mb-1">Status</p>
                            <Badge variant={getStatusColor(claim.status)}>{claim.status.replace("_", " ")}</Badge>
                          </div>
                        </div>

                        <div>
                          <p className="text-muted-foreground text-sm mb-2">Description</p>
                          <p className="text-sm">{claim.description}</p>
                        </div>

                        <div>
                          <p className="text-muted-foreground text-sm mb-2">Patient Wallet</p>
                          <code className="text-xs bg-muted px-2 py-1 rounded">{claim.patientAddress}</code>
                        </div>
                      </TabsContent>

                      <TabsContent value="documents" className="space-y-3 pt-4">
                        {claim.documents.map((doc) => (
                          <Card key={doc} className="p-4">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                                  <FileText className="w-5 h-5 text-primary" />
                                </div>
                                <div>
                                  <p className="font-medium">{doc}</p>
                                  <p className="text-xs text-muted-foreground">Verified on blockchain</p>
                                </div>
                              </div>
                              <Button variant="ghost" size="sm">
                                View
                              </Button>
                            </div>
                          </Card>
                        ))}
                      </TabsContent>

                      <TabsContent value="verification" className="space-y-4 pt-4">
                        <Card className="p-4 bg-accent/5 border-accent/20">
                          <div className="flex items-start gap-3">
                            <ShieldCheck className="w-5 h-5 text-accent mt-0.5" />
                            <div className="space-y-2">
                              <h4 className="font-semibold">Zero-Knowledge Proof Verification</h4>
                              <ul className="text-sm text-muted-foreground space-y-1">
                                <li>✓ Patient identity verified on-chain</li>
                                <li>✓ Medical procedure confirmed without exposing details</li>
                                <li>✓ Provider credentials validated</li>
                                <li>✓ Policy coverage eligibility confirmed</li>
                              </ul>
                            </div>
                          </div>
                        </Card>
                        <p className="text-sm text-muted-foreground">
                          All claim data has been cryptographically verified using zero-knowledge proofs, ensuring
                          patient privacy while confirming claim legitimacy.
                        </p>
                      </TabsContent>
                    </Tabs>

                    {claim.status === "pending" || claim.status === "under_review" ? (
                      <div className="flex gap-2 pt-4">
                        <Button onClick={() => handleApproveClaim(claim.id)} className="flex-1">
                          <CheckCircle className="w-4 h-4 mr-2" />
                          Approve Claim
                        </Button>
                        <Button variant="destructive" onClick={() => handleDenyClaim(claim.id)} className="flex-1">
                          <XCircle className="w-4 h-4 mr-2" />
                          Deny Claim
                        </Button>
                      </div>
                    ) : null}
                  </DialogContent>
                </Dialog>

                {claim.status === "pending" && (
                  <>
                    <Button variant="default" size="sm" onClick={() => handleApproveClaim(claim.id)}>
                      <CheckCircle className="w-4 h-4 mr-2" />
                      Approve
                    </Button>
                    <Button variant="outline" size="sm" onClick={() => handleDenyClaim(claim.id)}>
                      <XCircle className="w-4 h-4 mr-2" />
                      Deny
                    </Button>
                  </>
                )}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
