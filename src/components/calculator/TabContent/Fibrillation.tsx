import { MedicationCard } from "../MedicationCard"
import { MedicationRow } from "../MedicationRow"

interface FibrillationProps {
  weight: string;
}

export function Fibrillation({ weight }: FibrillationProps) {
  const calculateDose = (baseAmount: number, unit: string) => {
    const dose = (parseFloat(weight) * baseAmount).toFixed(1)
    return `${dose}${unit}`
  }

  return (
    <>
      <MedicationCard title="Desfibrilador">
        <MedicationRow 
          label="Primeira carga" 
          calculation="2J/Kg" 
          result={calculateDose(2, 'J')} 
        />
        <MedicationRow 
          label="Segunda carga" 
          calculation="4J/Kg" 
          result={calculateDose(4, 'J')} 
        />
      </MedicationCard>

      <MedicationCard title="Amiodarona">
        <MedicationRow 
          label="Volume" 
          calculation="0,7ml/Kg" 
          result={calculateDose(0.7, 'ml')} 
        />
        <MedicationRow 
          label="Solução" 
          calculation="3ml (150mg) + 17ml AD" 
          result="20ml total" 
        />
      </MedicationCard>

      <MedicationCard title="Lidocaína">
        <MedicationRow 
          label="Volume (1% dil 1:0)" 
          calculation="0,1ml/Kg" 
          result={calculateDose(0.1, 'ml')} 
        />
      </MedicationCard>
    </>
  )
}
