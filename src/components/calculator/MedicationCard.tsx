import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MedicationCardProps } from "../shared/types"

export function MedicationCard({ title, children }: MedicationCardProps) {
  return (
    <Card className="mb-4">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-blue-600">{title}</CardTitle>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  )
}