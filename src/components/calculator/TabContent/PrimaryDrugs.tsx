import { MedicationCard } from "../MedicationCard";
import { MedicationRow } from "../MedicationRow";

interface PrimaryDrugsProps {
  weight: number; // Peso em kg
  age: number;    // Idade em anos
}



export function PrimaryDrugs({ weight, age }: PrimaryDrugsProps) {

  const calculateDose = (baseAmount: number, unit: string): string => {
    const ageFactor = age < 1 ? 0.5 : 1; // Exemplo fictício, para crianças menores de 1 ano, a dose é ajustada
    const dose = (weight * baseAmount * ageFactor).toFixed(1);
    return `${dose}${unit}`;
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
        <MedicationRow
          label="2º Dose (dil 1:9)"
          calculation="0,1ml/Kg"
          result={calculateDose(0.1, 'ml')}
        />
        <MedicationRow
          label="Adrenalina contínua"
          calculation="1mg/Kg/min"
          result={calculateDose(2, 'ml/h')}
        />
        <MedicationRow
          label="Adrenalina pura"
          calculation="0,1mg/Kg"
          result={calculateDose(0.1, 'ml')}
        />

      </MedicationCard>

      <MedicationCard title="Bicarbonato">
        <MedicationRow
          label="Diluição 1:1"
          calculation="2ml/Kg"
          result={calculateDose(2, 'ml')}
        />
        <MedicationRow
          label="Puro"
          calculation="1ml/Kg"
          result={calculateDose(1, 'ml')}
        />
      </MedicationCard>

      <MedicationCard title="Atropina">
        <MedicationRow
          label="Diluição 1:0"
          calculation="0,1ml/Kg"
          result={calculateDose(0.1, 'ml')}
        />
      </MedicationCard>
    </>
  );
}