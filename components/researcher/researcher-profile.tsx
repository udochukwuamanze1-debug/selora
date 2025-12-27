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
import { GraduationCap, Edit, Save, Award } from "lucide-react"
import { toast } from "sonner"

export function ResearcherProfile() {
  const currentAccount = useCurrentAccount()
  const [isEditing, setIsEditing] = useState(false)
  const [profile, setProfile] = useState({
    name: "Dr. Emma Wilson",
    title: "Principal Investigator",
    institution: "Stanford Medical Research",
    department: "Department of Endocrinology",
    email: "e.wilson@stanford.edu",
    orcid: "0000-0002-1234-5678",
    researchAreas: "Type 2 Diabetes, Metabolic Disorders, Lifestyle Medicine",
    bio: "Research scientist specializing in metabolic health and diabetes management with 15+ years of experience in clinical research.",
  })

  const handleSave = () => {
    toast.success("Researcher profile updated successfully")
    setIsEditing(false)
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="font-heading text-2xl font-bold">Researcher Profile</h2>
          <p className="text-sm text-muted-foreground">Manage your research credentials and information</p>
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
              <AvatarFallback className="text-2xl bg-chart-5/10 text-chart-5">
                <GraduationCap className="w-12 h-12" />
              </AvatarFallback>
            </Avatar>
            <div>
              <h3 className="font-heading text-xl font-bold">{profile.name}</h3>
              <p className="text-sm text-muted-foreground mt-1">{profile.title}</p>
            </div>
            <Badge variant="secondary" className="gap-1">
              <Award className="w-3 h-3" />
              Verified Researcher
            </Badge>
            <div className="w-full pt-4 border-t border-border space-y-2">
              <div className="text-sm">
                <p className="text-muted-foreground">Wallet Address</p>
                <code className="text-xs">
                  {currentAccount?.address.slice(0, 8)}...{currentAccount?.address.slice(-6)}
                </code>
              </div>
              <div className="text-sm">
                <p className="text-muted-foreground">ORCID iD</p>
                <p className="font-medium text-xs">{profile.orcid}</p>
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
                <Label htmlFor="title">Academic Title</Label>
                <Input
                  id="title"
                  value={profile.title}
                  onChange={(e) => setProfile({ ...profile, title: e.target.value })}
                  disabled={!isEditing}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="institution">Institution</Label>
                <Input
                  id="institution"
                  value={profile.institution}
                  onChange={(e) => setProfile({ ...profile, institution: e.target.value })}
                  disabled={!isEditing}
                />
              </div>
              <div>
                <Label htmlFor="department">Department</Label>
                <Input
                  id="department"
                  value={profile.department}
                  onChange={(e) => setProfile({ ...profile, department: e.target.value })}
                  disabled={!isEditing}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
              <div>
                <Label htmlFor="orcid">ORCID iD</Label>
                <Input
                  id="orcid"
                  value={profile.orcid}
                  onChange={(e) => setProfile({ ...profile, orcid: e.target.value })}
                  disabled={!isEditing}
                />
              </div>
            </div>

            <div>
              <Label htmlFor="research-areas">Research Areas</Label>
              <Textarea
                id="research-areas"
                value={profile.researchAreas}
                onChange={(e) => setProfile({ ...profile, researchAreas: e.target.value })}
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
