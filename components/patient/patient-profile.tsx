"use client"

import { useState } from "react"
import { useCurrentAccount } from "@mysten/dapp-kit"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { User, Edit, Save } from "lucide-react"
import { toast } from "sonner"

export function PatientProfile() {
  const currentAccount = useCurrentAccount()
  const [isEditing, setIsEditing] = useState(false)
  const [profile, setProfile] = useState({
    name: "John Doe",
    dateOfBirth: "1990-05-15",
    bloodType: "A+",
    allergies: "Penicillin, Peanuts",
    medications: "None",
    emergencyContact: "Jane Doe - (555) 123-4567",
    medicalHistory: "Hypertension (2015), Appendectomy (2018)",
  })

  const handleSave = () => {
    // TODO: Save to Sui blockchain
    toast.success("Profile updated successfully")
    setIsEditing(false)
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="font-heading text-2xl font-bold">Patient Profile</h2>
          <p className="text-sm text-muted-foreground">Manage your personal health information</p>
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
              <AvatarFallback className="text-2xl bg-primary/10 text-primary">
                <User className="w-12 h-12" />
              </AvatarFallback>
            </Avatar>
            <div>
              <h3 className="font-heading text-xl font-bold">{profile.name}</h3>
              <p className="text-sm text-muted-foreground mt-1">Patient</p>
            </div>
            <div className="w-full pt-4 border-t border-border space-y-2">
              <div className="text-sm">
                <p className="text-muted-foreground">Wallet Address</p>
                <code className="text-xs">
                  {currentAccount?.address.slice(0, 8)}...{currentAccount?.address.slice(-6)}
                </code>
              </div>
              <div className="text-sm">
                <p className="text-muted-foreground">Member Since</p>
                <p className="font-medium">December 2024</p>
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
                <Label htmlFor="dob">Date of Birth</Label>
                <Input
                  id="dob"
                  type="date"
                  value={profile.dateOfBirth}
                  onChange={(e) => setProfile({ ...profile, dateOfBirth: e.target.value })}
                  disabled={!isEditing}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="bloodType">Blood Type</Label>
                <Input
                  id="bloodType"
                  value={profile.bloodType}
                  onChange={(e) => setProfile({ ...profile, bloodType: e.target.value })}
                  disabled={!isEditing}
                />
              </div>
              <div>
                <Label htmlFor="emergencyContact">Emergency Contact</Label>
                <Input
                  id="emergencyContact"
                  value={profile.emergencyContact}
                  onChange={(e) => setProfile({ ...profile, emergencyContact: e.target.value })}
                  disabled={!isEditing}
                />
              </div>
            </div>

            <div>
              <Label htmlFor="allergies">Known Allergies</Label>
              <Textarea
                id="allergies"
                value={profile.allergies}
                onChange={(e) => setProfile({ ...profile, allergies: e.target.value })}
                disabled={!isEditing}
                rows={2}
              />
            </div>

            <div>
              <Label htmlFor="medications">Current Medications</Label>
              <Textarea
                id="medications"
                value={profile.medications}
                onChange={(e) => setProfile({ ...profile, medications: e.target.value })}
                disabled={!isEditing}
                rows={2}
              />
            </div>

            <div>
              <Label htmlFor="medicalHistory">Medical History</Label>
              <Textarea
                id="medicalHistory"
                value={profile.medicalHistory}
                onChange={(e) => setProfile({ ...profile, medicalHistory: e.target.value })}
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
