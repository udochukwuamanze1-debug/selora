"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { FlaskConical, Users, Calendar, TrendingUp } from "lucide-react"

const mockStudies = [
  {
    id: "1",
    title: "Impact of Lifestyle on Type 2 Diabetes",
    status: "active",
    startDate: "2024-01-15",
    endDate: "2025-01-15",
    participants: 3421,
    dataPoints: 45230,
    progress: 65,
    lastUpdate: "2024-12-20",
  },
  {
    id: "2",
    title: "Sleep Patterns and Cardiovascular Health",
    status: "active",
    startDate: "2024-06-01",
    endDate: "2025-06-01",
    participants: 1250,
    dataPoints: 18750,
    progress: 35,
    lastUpdate: "2024-12-19",
  },
]

export function ActiveStudies() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-heading text-2xl font-bold">Active Research Studies</h2>
        <p className="text-sm text-muted-foreground">Monitor ongoing studies and access anonymized datasets</p>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {mockStudies.map((study) => (
          <Card key={study.id} className="glass-card p-6">
            <div className="space-y-4">
              <div className="flex items-start justify-between gap-4">
                <div className="flex gap-4 flex-1">
                  <div className="w-12 h-12 rounded-xl bg-chart-5/10 flex items-center justify-center flex-shrink-0">
                    <FlaskConical className="w-6 h-6 text-chart-5" />
                  </div>

                  <div className="space-y-2 flex-1">
                    <div className="flex items-start gap-3 flex-wrap">
                      <h3 className="font-heading text-lg font-semibold">{study.title}</h3>
                      <Badge variant="default">{study.status}</Badge>
                    </div>

                    <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {new Date(study.startDate).toLocaleDateString()} -{" "}
                        {new Date(study.endDate).toLocaleDateString()}
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4" />
                        {study.participants.toLocaleString()} participants
                      </div>
                      <div className="flex items-center gap-2">
                        <TrendingUp className="w-4 h-4" />
                        {study.dataPoints.toLocaleString()} data points
                      </div>
                    </div>
                  </div>
                </div>

                <Button variant="outline">View Data</Button>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Study Progress</span>
                  <span className="font-medium">{study.progress}%</span>
                </div>
                <Progress value={study.progress} className="h-2" />
                <p className="text-xs text-muted-foreground">
                  Last updated: {new Date(study.lastUpdate).toLocaleDateString()}
                </p>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {mockStudies.length === 0 && (
        <Card className="glass-card p-12 text-center">
          <FlaskConical className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
          <h3 className="font-heading text-lg font-semibold mb-2">No active studies</h3>
          <p className="text-sm text-muted-foreground">Request access to datasets to begin your research</p>
        </Card>
      )}
    </div>
  )
}
