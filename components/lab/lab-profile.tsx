"use client"

import { useState } from "react"
import { useCurrentAccount } from "@mysten/dapp-kit"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { FlaskConical, Edit, Save, Award } from "lucide-react"
import { toast } from "sonner"

export function LabProfile() {
  const currentAccount = useCurrentAccount()
  const [isEditing, setIsEditing] = useState(false)
  const [profile, setProfile] = useState({
    labName: "HealthLab Diagnostics",
    licenseNumber: "LAB-98765-2019",
    address: "123 Medical Plaza, Suite 400",
    phone: "(555) 123-4567",
    email: "info@healthlab.com",
    accreditation: "CAP Accredited, CLIA Certified",
    specialties: "Clinical Chemistry, Hematology, Microbiology, Molecular Diagnostics",
    operatingHours: "Monday-Friday: 7:00 AM - 6:00 PM, Saturday: 8:00 AM - 2:00 PM",
  })

  const handleSave = () => {
    toast.success("Lab profile updated successfully")
    setIsEditing(false)
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="font-heading text-2xl font-bold">Laboratory Information</h2>
          <p className="text-sm text-muted-foreground">Manage your laboratory details and credentials</p>
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
              <AvatarFallback className="text-2xl bg-accent/10 text-accent">
                <FlaskConical className="w-12 h-12" />
              </AvatarFallback>
            </Avatar>
            <div>
              <h3 className="font-heading text-xl font-bold">{profile.labName}</h3>
              <p className="text-sm text-muted-foreground mt-1">Diagnostic Laboratory</p>
            </div>
            <Badge variant="secondary" className="gap-1">
              <Award className="w-3 h-3" />
              Certified Lab
            </Badge>
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
                <Label htmlFor="lab-name">Laboratory Name</Label>
                <Input
                  id="lab-name"
                  value={profile.labName}
                  onChange={(e) => setProfile({ ...profile, labName: e.target.value })}
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
                <Label htmlFor="email">Email Address</Label>
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
              <Label htmlFor="accreditation">Accreditation & Certifications</Label>
              <Input
                id="accreditation"
                value={profile.accreditation}
                onChange={(e) => setProfile({ ...profile, accreditation: e.target.value })}
                disabled={!isEditing}
              />
            </div>

            <div>
              <Label htmlFor="specialties">Laboratory Specialties</Label>
              <Textarea
                id="specialties"
                value={profile.specialties}
                onChange={(e) => setProfile({ ...profile, specialties: e.target.value })}
                disabled={!isEditing}
                rows={2}
              />
            </div>

            <div>
              <Label htmlFor="hours">Operating Hours</Label>
              <Textarea
                id="hours"
                value={profile.operatingHours}
                onChange={(e) => setProfile({ ...profile, operatingHours: e.target.value })}
                disabled={!isEditing}
                rows={2}
              />
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}
