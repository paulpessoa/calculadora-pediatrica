import { MedicationRowProps } from "../shared/types"

export function MedicationRow({ label, calculation, result }: MedicationRowProps) {
  return (
    <div className="grid grid-cols-3 gap-2 mb-2 items-center">
      <span className="font-medium">{label}</span>
      <span className="text-gray-600">{calculation}</span>
      <span className="font-bold text-blue-700">{result}</span>
    </div>
  )
}