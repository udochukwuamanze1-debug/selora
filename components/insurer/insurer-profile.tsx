"use client"

import { useState } from "react"
import { useCurrentAccount } from "@mysten/dapp-kit"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Building2, Edit, Save } from "lucide-react"
import { toast } from "sonner"

export function InsurerProfile() {
  const currentAccount = useCurrentAccount()
  const [isEditing, setIsEditing] = useState(false)
  const [profile, setProfile] = useState({
    companyName: "MediCare Insurance",
    licenseNumber: "INS-54321-2018",
    address: "456 Insurance Plaza, Suite 800",
    phone: "(555) 987-6543",
    email: "claims@medicare-ins.com",
    policyTypes: "Health Insurance, Dental Insurance, Vision Insurance",
    coverageArea: "National coverage across all 50 states",
    claimsEmail: "claims@medicare-ins.com",
  })

  const handleSave = () => {
    toast.success("Company profile updated successfully")
    setIsEditing(false)
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="font-heading text-2xl font-bold">Company Information</h2>
          <p className="text-sm text-muted-foreground">Manage your insurance company details</p>
        </div>
        <Button onClick={() => (isEditing ? handleSave() : setIsEditing(true))}>
          {isEditing ? (
            <>
              <Save className="w-4 h-4 mr-2" />
              Save Changes
            </>
          ) : (
            <>
              <Edit className="w-4 h-4 mr-2" />
              Edit Profile
            </>
          )}
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile card */}
        <Card className="glass-card p-6 lg:col-span-1">
          <div className="flex flex-col items-center text-center space-y-4">
            <Avatar className="w-24 h-24">
              <AvatarFallback className="text-2xl bg-chart-4/10 text-chart-4">
                <Building2 className="w-12 h-12" />
              </AvatarFallback>
            </Avatar>
            <div>
              <h3 className="font-heading text-xl font-bold">{profile.companyName}</h3>
              <p className="text-sm text-muted-foreground mt-1">Insurance Provider</p>
            </div>
            <div className="w-full pt-4 border-t border-border space-y-2">
              <div className="text-sm">
                <p className="text-muted-foreground">Wallet Address</p>
                <code className="text-xs">
                  {currentAccount?.address.slice(0, 8)}...{currentAccount?.address.slice(-6)}
                </code>
              </div>
              <div className="text-sm">
                <p className="text-muted-foreground">License Number</p>
                <p className="font-medium">{profile.licenseNumber}</p>
              </div>
            </div>
          </div>
        </Card>

        {/* Profile details */}
        <Card className="glass-card p-6 lg:col-span-2">
          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="company-name">Company Name</Label>
                <Input
                  id="company-name"
                  value={profile.companyName}
                  onChange={(e) => setProfile({ ...profile, companyName: e.target.value })}
                  disabled={!isEditing}
                />
              </div>
              <div>
                <Label htmlFor="license">License Number</Label>
                <Input
                  id="license"
                  value={profile.licenseNumber}
                  onChange={(e) => setProfile({ ...profile, licenseNumber: e.target.value })}
                  disabled={!isEditing}
                />
              </div>
            </div>

            <div>
              <Label htmlFor="address">Physical Address</Label>
              <Input
                id="address"
                value={profile.address}
                onChange={(e) => setProfile({ ...profile, address: e.target.value })}
                disabled={!isEditing}
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  value={profile.phone}
                  onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
                  disabled={!isEditing}
                />
              </div>
              <div>
                <Label htmlFor="email">General Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={profile.email}
                  onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                  disabled={!isEditing}
                />
              </div>
            </div>

            <div>
              <Label htmlFor="policy-types">Policy Types Offered</Label>
              <Textarea
                id="policy-types"
                value={profile.policyTypes}
                onChange={(e) => setProfile({ ...profile, policyTypes: e.target.value })}
                disabled={!isEditing}
                rows={2}
              />
            </div>

            <div>
              <Label htmlFor="coverage">Coverage Area</Label>
              <Input
                id="coverage"
                value={profile.coverageArea}
                onChange={(e) => setProfile({ ...profile, coverageArea: e.target.value })}
                disabled={!isEditing}
              />
            </div>

            <div>
              <Label htmlFor="claims-email">Claims Processing Email</Label>
              <Input
                id="claims-email"
                type="email"
                value={profile.claimsEmail}
                onChange={(e) => setProfile({ ...profile, claimsEmail: e.target.value })}
                disabled={!isEditing}
              />
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}
