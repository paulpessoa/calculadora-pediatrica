import { MedicationCard } from "../MedicationCard"
import { MedicationRow } from "../MedicationRow"

interface PrimaryDrugsProps {
  weight: string;
}

export function PrimaryDrugs({ weight }: PrimaryDrugsProps) {
  const calculateDose = (baseAmount: number, unit: string) => {
    const dose = (parseFloat(weight) * baseAmount).toFixed(1)
    return `${dose}${unit}`
  }

  return (
    <>
      <MedicationCard title="Soro Fisiológico">
        <MedicationRow 
          label="Volume" 
          calculation="20ml/Kg" 
          result={calculateDose(20, 'ml')} 
        />
      </MedicationCard>

      <MedicationCard title="Adrenalina">
        <MedicationRow 
          label="1º Dose (dil 1:9)" 
          calculation="0,1ml/Kg" 
          result={calculateDose(0.1, 'ml')} 
        />
        {/* Adicionar outras linhas de medicação */}
      </MedicationCard>
    </>
  )
}