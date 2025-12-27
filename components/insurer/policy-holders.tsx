"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Search, User, Calendar, Shield } from "lucide-react"

const mockPolicyHolders = [
  {
    id: "1",
    name: "Alice Johnson",
    address: "0x1a2b...3c4d",
    policyNumber: "POL-2024-001",
    policyType: "Premium Health",
    startDate: "2023-01-15",
    status: "active",
    claimsThisYear: 3,
    totalClaimed: 8750,
  },
  {
    id: "2",
    name: "Bob Martinez",
    address: "0x5e6f...7g8h",
    policyNumber: "POL-2024-002",
    policyType: "Standard Health",
    startDate: "2022-06-20",
    status: "active",
    claimsThisYear: 1,
    totalClaimed: 1200,
  },
  {
    id: "3",
    name: "Carol Davis",
    address: "0x9i0j...1k2l",
    policyNumber: "POL-2024-003",
    policyType: "Basic Health",
    startDate: "2024-03-10",
    status: "active",
    claimsThisYear: 0,
    totalClaimed: 0,
  },
]

export function PolicyHolders() {
  const [searchQuery, setSearchQuery] = useState("")

  const filteredHolders = mockPolicyHolders.filter(
    (holder) =>
      holder.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      holder.policyNumber.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <div>
          <h2 className="font-heading text-2xl font-bold">Policy Holders</h2>
          <p className="text-sm text-muted-foreground">Manage insured individuals and their policies</p>
        </div>
        <div className="relative w-full sm:w-80">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="Search policy holders..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {filteredHolders.map((holder) => (
          <Card key={holder.id} className="glass-card p-6">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
              <div className="flex gap-4 flex-1">
                <Avatar className="w-12 h-12">
                  <AvatarFallback className="bg-chart-4/10 text-chart-4">
                    <User className="w-6 h-6" />
                  </AvatarFallback>
                </Avatar>

                <div className="space-y-2 flex-1">
                  <div className="flex items-start gap-3 flex-wrap">
                    <h3 className="font-heading text-lg font-semibold">{holder.name}</h3>
                    <Badge variant="default">{holder.status}</Badge>
                    <Badge variant="secondary">{holder.policyType}</Badge>
                  </div>

                  <div className="space-y-1 text-sm">
                    <p className="text-muted-foreground">
                      Policy Number: <span className="font-medium">{holder.policyNumber}</span>
                    </p>
                    <p className="text-muted-foreground">
                      Wallet: <code className="text-xs bg-muted px-1 py-0.5 rounded">{holder.address}</code>
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      Since {new Date(holder.startDate).toLocaleDateString()}
                    </div>
                    <div className="flex items-center gap-2">
                      <Shield className="w-4 h-4" />
                      {holder.claimsThisYear} claims this year
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-2 lg:items-end">
                <div className="text-right">
                  <p className="text-2xl font-bold">${holder.totalClaimed.toLocaleString()}</p>
                  <p className="text-xs text-muted-foreground">Total claimed</p>
                </div>
                <Button variant="outline" size="sm">
                  View Details
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
