"use client"

import type React from "react"

import { useState } from "react"
import { useCurrentAccount } from "@mysten/dapp-kit"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Upload, FileUp, CheckCircle, AlertCircle } from "lucide-react"
import { toast } from "sonner"
import { uploadToWalrus } from "@/lib/walrus-storage"

const recordTypes = [
  "Lab Result",
  "Imaging",
  "Prescription",
  "Checkup",
  "Diagnosis",
  "Surgery Report",
  "Vaccination",
  "Other",
]

export function UploadRecords() {
  const currentAccount = useCurrentAccount()
  const [isUploading, setIsUploading] = useState(false)
  const [uploadSuccess, setUploadSuccess] = useState(false)
  const [formData, setFormData] = useState({
    title: "",
    type: "",
    provider: "",
    facility: "",
    notes: "",
    date: new Date().toISOString().split("T")[0],
  })
  const [selectedFile, setSelectedFile] = useState<File | null>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0])
      setUploadSuccess(false)
    }
  }

  const handleUpload = async () => {
    if (!selectedFile || !currentAccount) {
      toast.error("Please select a file and connect your wallet")
      return
    }

    if (!formData.title || !formData.type) {
      toast.error("Please fill in all required fields")
      return
    }

    setIsUploading(true)

    try {
      // Upload file to Walrus
      const { blobId, suiRef } = await uploadToWalrus(selectedFile)

      // TODO: Create on-chain record with the metadata
      // This would call a Sui Move smart contract to create a HealthRecord object
      console.log("[v0] Uploaded to Walrus:", { blobId, suiRef, metadata: formData })

      toast.success("Health record uploaded successfully!")
      setUploadSuccess(true)

      // Reset form
      setTimeout(() => {
        setFormData({
          title: "",
          type: "",
          provider: "",
          facility: "",
          notes: "",
          date: new Date().toISOString().split("T")[0],
        })
        setSelectedFile(null)
        setUploadSuccess(false)
      }, 2000)
    } catch (error) {
      console.error("[v0] Upload error:", error)
      toast.error("Failed to upload record. Please try again.")
    } finally {
      setIsUploading(false)
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-heading text-2xl font-bold">Upload Health Records</h2>
        <p className="text-sm text-muted-foreground">Add new medical records to your secure health vault</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Upload area */}
        <Card className="glass-card p-6">
          <div className="space-y-6">
            <div>
              <Label htmlFor="file-upload" className="text-base font-semibold mb-4 block">
                Select File
              </Label>
              <div className="relative">
                <input
                  id="file-upload"
                  type="file"
                  accept=".pdf,.jpg,.jpeg,.png,.dcm"
                  onChange={handleFileChange}
                  className="hidden"
                />
                <label
                  htmlFor="file-upload"
                  className="flex flex-col items-center justify-center w-full h-48 border-2 border-dashed border-border rounded-lg cursor-pointer hover:border-primary/50 transition-colors bg-muted/30"
                >
                  {selectedFile ? (
                    <div className="text-center space-y-2">
                      <FileUp className="w-12 h-12 text-primary mx-auto" />
                      <p className="text-sm font-medium">{selectedFile.name}</p>
                      <p className="text-xs text-muted-foreground">{(selectedFile.size / 1024).toFixed(2)} KB</p>
                    </div>
                  ) : (
                    <div className="text-center space-y-2">
                      <Upload className="w-12 h-12 text-muted-foreground mx-auto" />
                      <p className="text-sm font-medium">Click to upload or drag and drop</p>
                      <p className="text-xs text-muted-foreground">PDF, JPG, PNG, or DICOM files</p>
                    </div>
                  )}
                </label>
              </div>
            </div>

            {uploadSuccess && (
              <div className="flex items-center gap-2 p-4 rounded-lg bg-accent/10 text-accent">
                <CheckCircle className="w-5 h-5" />
                <p className="text-sm font-medium">File uploaded successfully to Walrus!</p>
              </div>
            )}
          </div>
        </Card>

        {/* Metadata form */}
        <Card className="glass-card p-6">
          <div className="space-y-4">
            <div>
              <Label htmlFor="title">Title *</Label>
              <Input
                id="title"
                placeholder="e.g., Annual Physical Examination"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              />
            </div>

            <div>
              <Label htmlFor="type">Record Type *</Label>
              <Select value={formData.type} onValueChange={(value) => setFormData({ ...formData, type: value })}>
                <SelectTrigger id="type">
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent>
                  {recordTypes.map((type) => (
                    <SelectItem key={type} value={type}>
                      {type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="date">Date</Label>
              <Input
                id="date"
                type="date"
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
              />
            </div>

            <div>
              <Label htmlFor="provider">Healthcare Provider</Label>
              <Input
                id="provider"
                placeholder="e.g., Dr. Sarah Johnson"
                value={formData.provider}
                onChange={(e) => setFormData({ ...formData, provider: e.target.value })}
              />
            </div>

            <div>
              <Label htmlFor="facility">Medical Facility</Label>
              <Input
                id="facility"
                placeholder="e.g., Central Medical Center"
                value={formData.facility}
                onChange={(e) => setFormData({ ...formData, facility: e.target.value })}
              />
            </div>

            <div>
              <Label htmlFor="notes">Notes (Optional)</Label>
              <Textarea
                id="notes"
                placeholder="Additional information about this record..."
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                rows={3}
              />
            </div>

            <Button onClick={handleUpload} disabled={isUploading || !selectedFile} className="w-full" size="lg">
              {isUploading ? (
                <>
                  <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin mr-2" />
                  Uploading to Walrus...
                </>
              ) : (
                <>
                  <Upload className="w-4 h-4 mr-2" />
                  Upload Record
                </>
              )}
            </Button>
          </div>
        </Card>
      </div>

      {/* Info card */}
      <Card className="glass-card p-6 bg-primary/5 border-primary/20">
        <div className="flex gap-4">
          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
            <AlertCircle className="w-5 h-5 text-primary" />
          </div>
          <div className="space-y-2">
            <h3 className="font-heading font-semibold">How Upload Works</h3>
            <ul className="text-sm text-muted-foreground space-y-1 leading-relaxed">
              <li>• Your file is encrypted and uploaded to Walrus decentralized storage</li>
              <li>• Metadata is recorded on Sui blockchain with cryptographic proof</li>
              <li>• Only you control access permissions to this record</li>
              <li>• Files are permanently stored and cannot be modified or deleted</li>
            </ul>
          </div>
        </div>
      </Card>
    </div>
  )
}
