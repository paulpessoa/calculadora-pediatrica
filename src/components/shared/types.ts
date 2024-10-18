export interface Patient {
    name: string;
    registry: string;
    age: string;
    weight: string;
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