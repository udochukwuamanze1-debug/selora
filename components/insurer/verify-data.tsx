"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ShieldCheck, CheckCircle, XCircle, Loader2 } from "lucide-react"
import { toast } from "sonner"

export function VerifyData() {
  const [isVerifying, setIsVerifying] = useState(false)
  const [verificationResult, setVerificationResult] = useState<"success" | "failure" | null>(null)
  const [formData, setFormData] = useState({
    patientAddress: "",
    conditionType: "",
    dateRange: "",
  })

  const handleVerify = async () => {
    if (!formData.patientAddress || !formData.conditionType) {
      toast.error("Please fill in all required fields")
      return
    }

    setIsVerifying(true)
    setVerificationResult(null)

    // Simulate ZK proof verification
    setTimeout(() => {
      const isValid = Math.random() > 0.3 // 70% success rate for demo
      setVerificationResult(isValid ? "success" : "failure")
      setIsVerifying(false)

      if (isValid) {
        toast.success("Medical condition verified without exposing patient data")
      } else {
        toast.error("Verification failed - condition could not be confirmed")
      }
    }, 2000)
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-heading text-2xl font-bold">Verify Medical Data</h2>
        <p className="text-sm text-muted-foreground">
          Use zero-knowledge proofs to verify medical conditions without accessing sensitive data
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Verification form */}
        <Card className="glass-card p-6">
          <div className="space-y-4">
            <div className="flex items-center gap-3 pb-4 border-b border-border">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                <ShieldCheck className="w-5 h-5 text-accent" />
              </div>
              <div>
                <h3 className="font-heading font-semibold">Zero-Knowledge Verification</h3>
                <p className="text-xs text-muted-foreground">Verify without revealing sensitive information</p>
              </div>
            </div>

            <div>
              <Label htmlFor="patient-address">Patient Wallet Address</Label>
              <Input
                id="patient-address"
                placeholder="0x..."
                value={formData.patientAddress}
                onChange={(e) => setFormData({ ...formData, patientAddress: e.target.value })}
              />
            </div>

            <div>
              <Label htmlFor="condition">Medical Condition to Verify</Label>
              <Input
                id="condition"
                placeholder="e.g., Diabetes, Hypertension"
                value={formData.conditionType}
                onChange={(e) => setFormData({ ...formData, conditionType: e.target.value })}
              />
            </div>

            <div>
              <Label htmlFor="date-range">Date Range (Optional)</Label>
              <Input
                id="date-range"
                placeholder="e.g., Last 6 months"
                value={formData.dateRange}
                onChange={(e) => setFormData({ ...formData, dateRange: e.target.value })}
              />
            </div>

            <Button onClick={handleVerify} disabled={isVerifying} className="w-full" size="lg">
              {isVerifying ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Verifying with ZK Proofs...
                </>
              ) : (
                <>
                  <ShieldCheck className="w-4 h-4 mr-2" />
                  Verify Condition
                </>
              )}
            </Button>
          </div>
        </Card>

        {/* Results display */}
        <Card className="glass-card p-6">
          <div className="space-y-4">
            <h3 className="font-heading font-semibold">Verification Result</h3>

            {!verificationResult && !isVerifying && (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <ShieldCheck className="w-16 h-16 text-muted-foreground/30 mb-4" />
                <p className="text-sm text-muted-foreground">No verification performed yet</p>
              </div>
            )}

            {isVerifying && (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <Loader2 className="w-16 h-16 text-primary animate-spin mb-4" />
                <p className="text-sm text-muted-foreground">Executing zero-knowledge proof verification...</p>
              </div>
            )}

            {verificationResult === "success" && (
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 rounded-lg bg-accent/10 border border-accent/20">
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-accent">Verification Successful</p>
                    <p className="text-sm text-muted-foreground">Medical condition confirmed via ZK proof</p>
                  </div>
                </div>

                <div className="space-y-2 text-sm">
                  <div className="flex justify-between py-2 border-b border-border">
                    <span className="text-muted-foreground">Patient Address</span>
                    <code className="text-xs">{formData.patientAddress}</code>
                  </div>
                  <div className="flex justify-between py-2 border-b border-border">
                    <span className="text-muted-foreground">Verified Condition</span>
                    <span className="font-medium">{formData.conditionType}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-border">
                    <span className="text-muted-foreground">Privacy Level</span>
                    <span className="font-medium">Zero-Knowledge</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="text-muted-foreground">Verification Time</span>
                    <span className="font-medium">{new Date().toLocaleTimeString()}</span>
                  </div>
                </div>

                <div className="p-4 rounded-lg bg-muted/30 border border-border text-xs text-muted-foreground">
                  This verification was performed using zero-knowledge cryptography. The patient's medical records
                  remain private, and you have only confirmed the existence of the specified condition.
                </div>
              </div>
            )}

            {verificationResult === "failure" && (
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 rounded-lg bg-destructive/10 border border-destructive/20">
                  <XCircle className="w-6 h-6 text-destructive flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-destructive">Verification Failed</p>
                    <p className="text-sm text-muted-foreground">Could not confirm medical condition</p>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground">
                  The zero-knowledge proof could not verify the specified medical condition. This may be due to:
                </p>
                <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                  <li>Condition does not exist in patient records</li>
                  <li>Patient has not granted access permission</li>
                  <li>Verification parameters are incorrect</li>
                  <li>Records fall outside specified date range</li>
                </ul>
              </div>
            )}
          </div>
        </Card>
      </div>

      {/* Info card */}
      <Card className="glass-card p-6 bg-primary/5 border-primary/20">
        <div className="flex gap-4">
          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
            <ShieldCheck className="w-5 h-5 text-primary" />
          </div>
          <div className="space-y-2">
            <h3 className="font-heading font-semibold">How Zero-Knowledge Verification Works</h3>
            <ul className="text-sm text-muted-foreground space-y-1 leading-relaxed">
              <li>• Patient data never leaves their control or storage</li>
              <li>• Cryptographic proofs confirm conditions exist without revealing details</li>
              <li>• No sensitive medical information is exposed during verification</li>
              <li>• All verifications are recorded on blockchain for audit trail</li>
            </ul>
          </div>
        </div>
      </Card>
    </div>
  )
}
