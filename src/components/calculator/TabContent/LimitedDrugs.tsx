import { MedicationCard } from "../MedicationCard"
import { MedicationRow } from "../MedicationRow"

interface LimitedDrugsProps {
  weight: string;
}

export function LimitedDrugs({ weight }: LimitedDrugsProps) {
  const calculateDose = (baseAmount: number, unit: string) => {
    const dose = (parseFloat(weight) * baseAmount).toFixed(1)
    return `${dose}${unit}`
  }

  return (
    <>
      <MedicationCard title="Bicarbonato">
        <MedicationRow 
          label="Diluído 1:1" 
          calculation="2ml/Kg" 
          result={calculateDose(2, 'ml')} 
        />
        <MedicationRow 
          label="Puro" 
          calculation="1ml/Kg" 
          result={calculateDose(1, 'ml')} 
        />
      </MedicationCard>

      <MedicationCard title="Glicose (dil 1:1)">
        <MedicationRow 
          label="Volume" 
          calculation="2ml/Kg" 
          result={calculateDose(2, 'ml')} 
        />
      </MedicationCard>

      <MedicationCard title="Atropina">
        <MedicationRow 
          label="Volume (dil 1:0)" 
          calculation="0,1ml/Kg" 
          result={calculateDose(0.1, 'ml')} 
        />
        <MedicationRow 
          label="Mín/Máx" 
          calculation="Min 0,1 e Max 0,5mg" 
          result="0,1 - 0,5mg" 
        />
      </MedicationCard>

      <MedicationCard title="Cálcio">
        <MedicationRow 
          label="Volume (dil 1:1)" 
          calculation="1ml/Kg" 
          result={calculateDose(1, 'ml')} 
        />
      </MedicationCard>
    </>
  )
}