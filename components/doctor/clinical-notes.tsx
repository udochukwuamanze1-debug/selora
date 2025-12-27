"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { FileText, Plus, Calendar, User } from "lucide-react"
import { toast } from "sonner"

const mockNotes = [
  {
    id: "1",
    patientName: "Alice Johnson",
    patientAddress: "0x1a2b...3c4d",
    date: "2024-12-20",
    type: "Follow-up",
    note: "Patient reports significant improvement in blood pressure control. Continue current medication regimen. Schedule follow-up in 3 months.",
  },
  {
    id: "2",
    patientName: "Bob Martinez",
    patientAddress: "0x5e6f...7g8h",
    date: "2024-12-18",
    type: "Consultation",
    note: "Patient presents with mild respiratory symptoms. Lung sounds clear. Prescribed inhaler and recommended rest. Follow-up if symptoms worsen.",
  },
]

export function ClinicalNotes() {
  const [notes] = useState(mockNotes)
  const [isNewNoteOpen, setIsNewNoteOpen] = useState(false)
  const [newNote, setNewNote] = useState({
    patientAddress: "",
    type: "",
    note: "",
  })

  const handleSaveNote = () => {
    if (!newNote.patientAddress || !newNote.type || !newNote.note) {
      toast.error("Please fill in all fields")
      return
    }

    toast.success("Clinical note saved to blockchain")
    setIsNewNoteOpen(false)
    setNewNote({ patientAddress: "", type: "", note: "" })
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h2 className="font-heading text-2xl font-bold">Clinical Notes</h2>
          <p className="text-sm text-muted-foreground">Add and view consultation notes for your patients</p>
        </div>

        <Dialog open={isNewNoteOpen} onOpenChange={setIsNewNoteOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="w-4 h-4 mr-2" />
              New Note
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Add Clinical Note</DialogTitle>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div>
                <Label htmlFor="patient-select">Patient</Label>
                <Select
                  value={newNote.patientAddress}
                  onValueChange={(value) => setNewNote({ ...newNote, patientAddress: value })}
                >
                  <SelectTrigger id="patient-select">
                    <SelectValue placeholder="Select patient" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="0x1a2b...3c4d">Alice Johnson</SelectItem>
                    <SelectItem value="0x5e6f...7g8h">Bob Martinez</SelectItem>
                    <SelectItem value="0x9i0j...1k2l">Carol Davis</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="note-type">Note Type</Label>
                <Select value={newNote.type} onValueChange={(value) => setNewNote({ ...newNote, type: value })}>
                  <SelectTrigger id="note-type">
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Consultation">Consultation</SelectItem>
                    <SelectItem value="Follow-up">Follow-up</SelectItem>
                    <SelectItem value="Emergency">Emergency</SelectItem>
                    <SelectItem value="Surgery">Surgery</SelectItem>
                    <SelectItem value="Diagnosis">Diagnosis</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="note-content">Clinical Note</Label>
                <Textarea
                  id="note-content"
                  placeholder="Enter detailed clinical notes..."
                  value={newNote.note}
                  onChange={(e) => setNewNote({ ...newNote, note: e.target.value })}
                  rows={8}
                  className="font-mono text-sm"
                />
              </div>

              <div className="p-4 rounded-lg bg-secondary/10 border border-secondary/20 text-sm text-muted-foreground">
                Note: This clinical note will be encrypted and stored on Walrus, with metadata recorded on Sui
                blockchain.
              </div>

              <Button onClick={handleSaveNote} className="w-full">
                Save Note
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {notes.length === 0 ? (
          <Card className="glass-card p-12 text-center">
            <FileText className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="font-heading text-lg font-semibold mb-2">No clinical notes</h3>
            <p className="text-sm text-muted-foreground mb-4">Start adding consultation notes for your patients</p>
            <Button onClick={() => setIsNewNoteOpen(true)}>
              <Plus className="w-4 h-4 mr-2" />
              Add First Note
            </Button>
          </Card>
        ) : (
          notes.map((note) => (
            <Card key={note.id} className="glass-card p-6">
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3 flex-1">
                    <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center">
                      <FileText className="w-5 h-5 text-secondary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 flex-wrap mb-1">
                        <h3 className="font-heading font-semibold">{note.patientName}</h3>
                        <Badge variant="secondary">{note.type}</Badge>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {new Date(note.date).toLocaleDateString()}
                        </span>
                        <span className="flex items-center gap-1">
                          <User className="w-3 h-3" />
                          {note.patientAddress}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-lg bg-muted/30 border border-border">
                  <p className="text-sm leading-relaxed whitespace-pre-wrap">{note.note}</p>
                </div>
              </div>
            </Card>
          ))
        )}
      </div>
    </div>
  )
}
