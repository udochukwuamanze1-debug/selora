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
import { Stethoscope, Edit, Save, Award } from "lucide-react"
import { toast } from "sonner"

export function DoctorProfile() {
  const currentAccount = useCurrentAccount()
  const [isEditing, setIsEditing] = useState(false)
  const [profile, setProfile] = useState({
    name: "Dr. Sarah Johnson",
    specialty: "Internal Medicine",
    licenseNumber: "MD-12345-2020",
    institution: "Central Medical Center",
    yearsOfExperience: "12",
    education: "MD - Harvard Medical School, 2012",
    certifications: "Board Certified in Internal Medicine, ACLS Certified",
    bio: "Experienced internal medicine physician specializing in preventive care and chronic disease management.",
  })

  const handleSave = () => {
    toast.success("Profile updated successfully")
    setIsEditing(false)
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="font-heading text-2xl font-bold">Doctor Profile</h2>
          <p className="text-sm text-muted-foreground">Manage your professional information</p>
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
              <AvatarFallback className="text-2xl bg-secondary/10 text-secondary">
                <Stethoscope className="w-12 h-12" />
              </AvatarFallback>
            </Avatar>
            <div>
              <h3 className="font-heading text-xl font-bold">{profile.name}</h3>
              <p className="text-sm text-muted-foreground mt-1">{profile.specialty}</p>
            </div>
            <Badge variant="secondary" className="gap-1">
              <Award className="w-3 h-3" />
              {profile.yearsOfExperience} years experience
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
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  value={profile.name}
                  onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                  disabled={!isEditing}
                />
              </div>
              <div>
                <Label htmlFor="specialty">Specialty</Label>
                <Input
                  id="specialty"
                  value={profile.specialty}
                  onChange={(e) => setProfile({ ...profile, specialty: e.target.value })}
                  disabled={!isEditing}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="license">License Number</Label>
                <Input
                  id="license"
                  value={profile.licenseNumber}
                  onChange={(e) => setProfile({ ...profile, licenseNumber: e.target.value })}
                  disabled={!isEditing}
                />
              </div>
              <div>
                <Label htmlFor="institution">Medical Institution</Label>
                <Input
                  id="institution"
                  value={profile.institution}
                  onChange={(e) => setProfile({ ...profile, institution: e.target.value })}
                  disabled={!isEditing}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="experience">Years of Experience</Label>
                <Input
                  id="experience"
                  type="number"
                  value={profile.yearsOfExperience}
                  onChange={(e) => setProfile({ ...profile, yearsOfExperience: e.target.value })}
                  disabled={!isEditing}
                />
              </div>
              <div>
                <Label htmlFor="education">Education</Label>
                <Input
                  id="education"
                  value={profile.education}
                  onChange={(e) => setProfile({ ...profile, education: e.target.value })}
                  disabled={!isEditing}
                />
              </div>
            </div>

            <div>
              <Label htmlFor="certifications">Certifications</Label>
              <Textarea
                id="certifications"
                value={profile.certifications}
                onChange={(e) => setProfile({ ...profile, certifications: e.target.value })}
                disabled={!isEditing}
                rows={2}
              />
            </div>

            <div>
              <Label htmlFor="bio">Professional Bio</Label>
              <Textarea
                id="bio"
                value={profile.bio}
                onChange={(e) => setProfile({ ...profile, bio: e.target.value })}
                disabled={!isEditing}
                rows={3}
              />
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}
