
// src/components/calculator/TabContent/Intubation.tsx
import { MedicationCard } from "../MedicationCard"
import { MedicationRow } from "../MedicationRow"

interface IntubationProps {
    weight: number;
    age: number;
}

export function Intubation({ weight, age }: IntubationProps) {
    const calculateDose = (baseAmount: number, unit: string): string => {
        const ageFactor = age < 1 ? 0.5 : 1; // Exemplo fictício, para crianças menores de 1 ano, a dose é ajustada
        const dose = (weight * baseAmount * ageFactor).toFixed(1);
        return `${dose}${unit}`;
    }

    return (
        <>
            <MedicationCard title="Midazolan">
                <MedicationRow
                    label="Volume"
                    calculation="0,04ml/Kg"
                    result={calculateDose(0.04, 'ml')}
                />
                <MedicationRow
                    label="Máximo"
                    calculation="Max 1ml"
                    result="1ml"
                />
            </MedicationCard>

            <MedicationCard title="Fentanil">
                <MedicationRow
                    label="Volume"
                    calculation="0,04ml/Kg"
                    result={calculateDose(0.04, 'ml')}
                />
                <MedicationRow
                    label="Diluição"
                    calculation="Diluir e fazer lento"
                    result="-"
                />
            </MedicationCard>

            <MedicationCard title="Ketamina">
                <MedicationRow
                    label="Volume"
                    calculation="0,04ml/Kg"
                    result={calculateDose(0.04, 'ml')}
                />
                <MedicationRow
                    label="Máximo"
                    calculation="Max 1ml"
                    result="1ml"
                />
            </MedicationCard>

            <MedicationCard title="Rocurônio">
                <MedicationRow
                    label="Volume"
                    calculation="0,1ml/kg"
                    result={calculateDose(0.1, 'ml')}
                />
            </MedicationCard>

            <MedicationCard title="Pancurônio">
                <MedicationRow
                    label="Volume"
                    calculation="0,05ml/Kg"
                    result={calculateDose(0.05, 'ml')}
                />
            </MedicationCard>

            <MedicationCard title="Naloxone">
                <MedicationRow
                    label="Volume"
                    calculation="0,25ml/Kg"
                    result={calculateDose(0.25, 'ml')}
                />
                <MedicationRow
                    label="Máximo"
                    calculation="Max 5ml"
                    result="5ml"
                />
            </MedicationCard>
        </>
    )
}