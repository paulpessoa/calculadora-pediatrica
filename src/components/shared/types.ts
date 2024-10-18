export interface Patient {
    name: string;
    registry: string;
    age: number;
    weight: number;
  }
  
  export interface MedicationRowProps {
    label: string;
    calculation: string;
    result: string;
  }
  
  export interface MedicationCardProps {
    title: string;
    children: React.ReactNode;
  }