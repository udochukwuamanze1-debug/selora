"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { User, Calendar, CheckCircle } from "lucide-react"
import { toast } from "sonner"

const mockOrders = [
  {
    id: "1",
    patientName: "Alice Johnson",
    patientAddress: "0x1a2b...3c4d",
    orderDate: "2024-12-23",
    testType: "Complete Blood Count (CBC)",
    orderedBy: "Dr. Sarah Johnson",
    priority: "normal",
    status: "pending",
  },
  {
    id: "2",
    patientName: "David Brown",
    patientAddress: "0x7h8i...9j0k",
    orderDate: "2024-12-22",
    testType: "Lipid Panel",
    orderedBy: "Dr. Michael Chen",
    priority: "high",
    status: "pending",
  },
  {
    id: "3",
    patientName: "Emma Wilson",
    patientAddress: "0x3d4e...5f6g",
    orderDate: "2024-12-21",
    testType: "Thyroid Function Tests",
    orderedBy: "Dr. Sarah Johnson",
    priority: "normal",
    status: "in_progress",
  },
]

export function TestOrders() {
  const [orders, setOrders] = useState(mockOrders)

  const handleMarkComplete = (id: string) => {
    setOrders(orders.map((order) => (order.id === id ? { ...order, status: "completed" } : order)))
    toast.success("Test marked as completed. Please upload results.")
  }

  const handleStartProcessing = (id: string) => {
    setOrders(orders.map((order) => (order.id === id ? { ...order, status: "in_progress" } : order)))
    toast.success("Test marked as in progress")
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-heading text-2xl font-bold">Test Orders</h2>
        <p className="text-sm text-muted-foreground">Manage incoming test requests from healthcare providers</p>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {orders.filter((o) => o.status !== "completed").length === 0 ? (
          <Card className="glass-card p-12 text-center">
            <CheckCircle className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="font-heading text-lg font-semibold mb-2">All tests completed</h3>
            <p className="text-sm text-muted-foreground">No pending test orders at the moment</p>
          </Card>
        ) : (
          orders
            .filter((o) => o.status !== "completed")
            .map((order) => (
              <Card key={order.id} className="glass-card p-6 hover:shadow-lg transition-shadow">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  <div className="flex gap-4 flex-1">
                    <Avatar className="w-12 h-12">
                      <AvatarFallback className="bg-accent/10 text-accent">
                        <User className="w-6 h-6" />
                      </AvatarFallback>
                    </Avatar>

                    <div className="space-y-2 flex-1">
                      <div className="flex items-start gap-3 flex-wrap">
                        <h3 className="font-heading text-lg font-semibold">{order.patientName}</h3>
                        <Badge variant={order.priority === "high" ? "destructive" : "secondary"}>
                          {order.priority} priority
                        </Badge>
                        <Badge
                          variant={
                            order.status === "pending"
                              ? "outline"
                              : order.status === "in_progress"
                                ? "default"
                                : "secondary"
                          }
                        >
                          {order.status.replace("_", " ")}
                        </Badge>
                      </div>

                      <div className="space-y-1">
                        <p className="text-sm">
                          <span className="text-muted-foreground">Test Type:</span>{" "}
                          <span className="font-medium">{order.testType}</span>
                        </p>
                        <p className="text-sm text-muted-foreground">Ordered by: {order.orderedBy}</p>
                        <p className="text-xs text-muted-foreground">
                          Patient Address:{" "}
                          <code className="bg-muted px-1 py-0.5 rounded text-xs">{order.patientAddress}</code>
                        </p>
                      </div>

                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        Ordered: {new Date(order.orderDate).toLocaleDateString()}
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    {order.status === "pending" && (
                      <Button onClick={() => handleStartProcessing(order.id)}>Start Processing</Button>
                    )}
                    {order.status === "in_progress" && (
                      <Button onClick={() => handleMarkComplete(order.id)}>
                        <CheckCircle className="w-4 h-4 mr-2" />
                        Mark Complete
                      </Button>
                    )}
                  </div>
                </div>
              </Card>
            ))
        )}
      </div>
    </div>
  )
}
