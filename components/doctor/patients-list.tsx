"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Search, User, Calendar, FileText, Eye } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const mockPatients = [
  {
    id: "1",
    name: "Alice Johnson",
    age: 34,
    bloodType: "O+",
    lastVisit: "2024-12-20",
    nextAppointment: "2025-01-10",
    status: "active",
    address: "0x1a2b...3c4d",
    conditions: ["Hypertension", "Type 2 Diabetes"],
    allergies: ["Penicillin"],
    records: [
      { id: "r1", title: "Annual Checkup", date: "2024-12-20", type: "Consultation" },
      { id: "r2", title: "Blood Test Results", date: "2024-12-15", type: "Lab Result" },
    ],
  },
  {
    id: "2",
    name: "Bob Martinez",
    age: 45,
    bloodType: "A+",
    lastVisit: "2024-12-18",
    nextAppointment: "2025-01-15",
    status: "active",
    address: "0x5e6f...7g8h",
    conditions: ["Asthma"],
    allergies: ["None"],
    records: [
      { id: "r3", title: "Follow-up Visit", date: "2024-12-18", type: "Consultation" },
      { id: "r4", title: "Chest X-Ray", date: "2024-12-10", type: "Imaging" },
    ],
  },
  {
    id: "3",
    name: "Carol Davis",
    age: 28,
    bloodType: "B-",
    lastVisit: "2024-12-10",
    nextAppointment: null,
    status: "inactive",
    address: "0x9i0j...1k2l",
    conditions: ["None"],
    allergies: ["Shellfish"],
    records: [{ id: "r5", title: "Routine Physical", date: "2024-12-10", type: "Checkup" }],
  },
]

export function PatientsList() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedPatient, setSelectedPatient] = useState<(typeof mockPatients)[0] | null>(null)

  const filteredPatients = mockPatients.filter(
    (patient) =>
      patient.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      patient.conditions.some((c) => c.toLowerCase().includes(searchQuery.toLowerCase())),
  )

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <div>
          <h2 className="font-heading text-2xl font-bold">My Patients</h2>
          <p className="text-sm text-muted-foreground">Patients who have granted you access to their records</p>
        </div>
        <div className="relative w-full sm:w-80">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="Search patients..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {filteredPatients.map((patient) => (
          <Card key={patient.id} className="glass-card p-6 hover:shadow-lg transition-shadow">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
              <div className="flex gap-4 flex-1">
                <Avatar className="w-12 h-12">
                  <AvatarFallback className="bg-secondary/10 text-secondary">
                    <User className="w-6 h-6" />
                  </AvatarFallback>
                </Avatar>

                <div className="space-y-2 flex-1">
                  <div className="flex items-start gap-3 flex-wrap">
                    <h3 className="font-heading text-lg font-semibold">{patient.name}</h3>
                    <Badge variant={patient.status === "active" ? "default" : "secondary"}>
                      {patient.status === "active" ? "Active Patient" : "Inactive"}
                    </Badge>
                  </div>

                  <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
                    <span>Age: {patient.age}</span>
                    <span>Blood Type: {patient.bloodType}</span>
                    <span>Records: {patient.records.length}</span>
                  </div>

                  <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      Last Visit: {new Date(patient.lastVisit).toLocaleDateString()}
                    </div>
                    {patient.nextAppointment && (
                      <div className="flex items-center gap-2 text-primary">
                        <Calendar className="w-4 h-4" />
                        Next: {new Date(patient.nextAppointment).toLocaleDateString()}
                      </div>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {patient.conditions.map((condition) => (
                      <Badge key={condition} variant="outline" className="text-xs">
                        {condition}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>

              <Dialog>
                <DialogTrigger asChild>
                  <Button onClick={() => setSelectedPatient(patient)}>
                    <Eye className="w-4 h-4 mr-2" />
                    View Details
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle>{patient.name}</DialogTitle>
                    <DialogDescription>
                      Patient ID: <code className="text-xs">{patient.address}</code>
                    </DialogDescription>
                  </DialogHeader>

                  <Tabs defaultValue="overview" className="mt-4">
                    <TabsList className="grid w-full grid-cols-3">
                      <TabsTrigger value="overview">Overview</TabsTrigger>
                      <TabsTrigger value="records">Records</TabsTrigger>
                      <TabsTrigger value="history">History</TabsTrigger>
                    </TabsList>

                    <TabsContent value="overview" className="space-y-4 pt-4">
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <p className="text-muted-foreground mb-1">Age</p>
                          <p className="font-medium">{patient.age} years</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground mb-1">Blood Type</p>
                          <p className="font-medium">{patient.bloodType}</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground mb-1">Last Visit</p>
                          <p className="font-medium">{new Date(patient.lastVisit).toLocaleDateString()}</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground mb-1">Next Appointment</p>
                          <p className="font-medium">
                            {patient.nextAppointment ? new Date(patient.nextAppointment).toLocaleDateString() : "None"}
                          </p>
                        </div>
                      </div>

                      <div>
                        <p className="text-muted-foreground text-sm mb-2">Medical Conditions</p>
                        <div className="flex flex-wrap gap-2">
                          {patient.conditions.map((condition) => (
                            <Badge key={condition}>{condition}</Badge>
                          ))}
                        </div>
                      </div>

                      <div>
                        <p className="text-muted-foreground text-sm mb-2">Known Allergies</p>
                        <div className="flex flex-wrap gap-2">
                          {patient.allergies.map((allergy) => (
                            <Badge key={allergy} variant="destructive">
                              {allergy}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </TabsContent>

                    <TabsContent value="records" className="space-y-3 pt-4">
                      {patient.records.map((record) => (
                        <Card key={record.id} className="p-4">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <FileText className="w-5 h-5 text-primary" />
                              <div>
                                <p className="font-medium">{record.title}</p>
                                <p className="text-sm text-muted-foreground">
                                  {record.type} • {new Date(record.date).toLocaleDateString()}
                                </p>
                              </div>
                            </div>
                            <Button variant="ghost" size="sm">
                              View
                            </Button>
                          </div>
                        </Card>
                      ))}
                    </TabsContent>

                    <TabsContent value="history" className="pt-4">
                      <div className="text-center text-muted-foreground py-8">
                        <FileText className="w-12 h-12 mx-auto mb-2 opacity-50" />
                        <p>Patient history timeline coming soon</p>
                      </div>
                    </TabsContent>
                  </Tabs>
                </DialogContent>
              </Dialog>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
