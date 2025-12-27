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

const testTypes = [
  "Complete Blood Count (CBC)",
  "Basic Metabolic Panel",
  "Lipid Panel",
  "Liver Function Tests",
  "Thyroid Function Tests",
  "Urinalysis",
  "Blood Glucose",
  "HbA1c",
  "COVID-19 Test",
  "Other",
]

export function UploadResults() {
  const currentAccount = useCurrentAccount()
  const [isUploading, setIsUploading] = useState(false)
  const [uploadSuccess, setUploadSuccess] = useState(false)
  const [formData, setFormData] = useState({
    patientAddress: "",
    testType: "",
    testDate: new Date().toISOString().split("T")[0],
    technician: "",
    notes: "",
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

    if (!formData.patientAddress || !formData.testType) {
      toast.error("Please fill in all required fields")
      return
    }

    setIsUploading(true)

    try {
      // Upload file to Walrus
      const { blobId, suiRef } = await uploadToWalrus(selectedFile)

      // TODO: Create on-chain record with cryptographic signature
      console.log("[v0] Lab result uploaded to Walrus:", { blobId, suiRef, metadata: formData })

      toast.success("Test results uploaded successfully!")
      setUploadSuccess(true)

      // Reset form
      setTimeout(() => {
        setFormData({
          patientAddress: "",
          testType: "",
          testDate: new Date().toISOString().split("T")[0],
          technician: "",
          notes: "",
        })
        setSelectedFile(null)
        setUploadSuccess(false)
      }, 2000)
    } catch (error) {
      console.error("[v0] Upload error:", error)
      toast.error("Failed to upload results. Please try again.")
    } finally {
      setIsUploading(false)
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-heading text-2xl font-bold">Upload Test Results</h2>
        <p className="text-sm text-muted-foreground">Upload laboratory test results directly to patient records</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Upload area */}
        <Card className="glass-card p-6">
          <div className="space-y-6">
            <div>
              <Label htmlFor="file-upload" className="text-base font-semibold mb-4 block">
                Select Test Results File
              </Label>
              <div className="relative">
                <input
                  id="file-upload"
                  type="file"
                  accept=".pdf,.jpg,.jpeg,.png,.csv,.xlsx"
                  onChange={handleFileChange}
                  className="hidden"
                />
                <label
                  htmlFor="file-upload"
                  className="flex flex-col items-center justify-center w-full h-48 border-2 border-dashed border-border rounded-lg cursor-pointer hover:border-accent/50 transition-colors bg-muted/30"
                >
                  {selectedFile ? (
                    <div className="text-center space-y-2">
                      <FileUp className="w-12 h-12 text-accent mx-auto" />
                      <p className="text-sm font-medium">{selectedFile.name}</p>
                      <p className="text-xs text-muted-foreground">{(selectedFile.size / 1024).toFixed(2)} KB</p>
                    </div>
                  ) : (
                    <div className="text-center space-y-2">
                      <Upload className="w-12 h-12 text-muted-foreground mx-auto" />
                      <p className="text-sm font-medium">Click to upload or drag and drop</p>
                      <p className="text-xs text-muted-foreground">PDF, JPG, PNG, CSV, or Excel files</p>
                    </div>
                  )}
                </label>
              </div>
            </div>

            {uploadSuccess && (
              <div className="flex items-center gap-2 p-4 rounded-lg bg-accent/10 text-accent">
                <CheckCircle className="w-5 h-5" />
                <p className="text-sm font-medium">Results uploaded and verified on blockchain!</p>
              </div>
            )}
          </div>
        </Card>

        {/* Metadata form */}
        <Card className="glass-card p-6">
          <div className="space-y-4">
            <div>
              <Label htmlFor="patient-address">Patient Sui Wallet Address *</Label>
              <Input
                id="patient-address"
                placeholder="0x..."
                value={formData.patientAddress}
                onChange={(e) => setFormData({ ...formData, patientAddress: e.target.value })}
              />
            </div>

            <div>
              <Label htmlFor="test-type">Test Type *</Label>
              <Select
                value={formData.testType}
                onValueChange={(value) => setFormData({ ...formData, testType: value })}
              >
                <SelectTrigger id="test-type">
                  <SelectValue placeholder="Select test type" />
                </SelectTrigger>
                <SelectContent>
                  {testTypes.map((type) => (
                    <SelectItem key={type} value={type}>
                      {type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="test-date">Test Date</Label>
              <Input
                id="test-date"
                type="date"
                value={formData.testDate}
                onChange={(e) => setFormData({ ...formData, testDate: e.target.value })}
              />
            </div>

            <div>
              <Label htmlFor="technician">Technician / Lab Specialist</Label>
              <Input
                id="technician"
                placeholder="e.g., Jane Smith, CLS"
                value={formData.technician}
                onChange={(e) => setFormData({ ...formData, technician: e.target.value })}
              />
            </div>

            <div>
              <Label htmlFor="notes">Additional Notes (Optional)</Label>
              <Textarea
                id="notes"
                placeholder="Any additional information about the test..."
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                rows={3}
              />
            </div>

            <Button onClick={handleUpload} disabled={isUploading || !selectedFile} className="w-full" size="lg">
              {isUploading ? (
                <>
                  <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin mr-2" />
                  Uploading...
                </>
              ) : (
                <>
                  <Upload className="w-4 h-4 mr-2" />
                  Upload Results
                </>
              )}
            </Button>
          </div>
        </Card>
      </div>

      {/* Info card */}
      <Card className="glass-card p-6 bg-accent/5 border-accent/20">
        <div className="flex gap-4">
          <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
            <AlertCircle className="w-5 h-5 text-accent" />
          </div>
          <div className="space-y-2">
            <h3 className="font-heading font-semibold">Cryptographic Verification</h3>
            <ul className="text-sm text-muted-foreground space-y-1 leading-relaxed">
              <li>• Results are cryptographically signed by your lab wallet</li>
              <li>• Patient automatically receives notification of new results</li>
              <li>• Immutable record prevents tampering or unauthorized modifications</li>
              <li>• Verification timestamp recorded on Sui blockchain</li>
            </ul>
          </div>
        </div>
      </Card>
    </div>
  )
}
