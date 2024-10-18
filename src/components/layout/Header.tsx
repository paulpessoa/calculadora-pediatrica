import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Patient } from "../shared/types"

interface HeaderProps {
  patient: Patient;
  onPatientChange: (field: keyof Patient, value: string) => void;
}

export function Header({ patient, onPatientChange }: HeaderProps) {
  return (
    <Card className="mb-6 text-center">
      <CardHeader>
        <CardTitle>Calculadora Pediátrica</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          <div>
            <Label htmlFor="name">Nome</Label>
            <Input 
              id="name" 
              placeholder="Escreva aqui..."
              value={patient.name} 
              onChange={(e) => onPatientChange('name', e.target.value)} 
            />
          </div>
          <div>
            <Label htmlFor="registry">Registro</Label>
            <Input 
              id="registry"
              placeholder="Ex. 123546"
              value={patient.registry} 
              onChange={(e) => onPatientChange('registry', e.target.value)} 
            />
          </div>
          <div>
            <Label htmlFor="age">Idade</Label>
            <Input 
              id="age" 
              value={patient.age} 
              onChange={(e) => onPatientChange('age', e.target.value)} 
            />
          </div>
          <div>
            <Label htmlFor="weight">Peso (kg)</Label>
            <Input 
              id="weight" 
              value={patient.weight} 
              onChange={(e) => onPatientChange('weight', e.target.value)}
              type="number"
            />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}