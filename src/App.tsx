import { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Header } from './components/layout/Header'
import { PrimaryDrugs } from './components/calculator/TabContent/PrimaryDrugs'
import { LimitedDrugs } from './components/calculator/TabContent/LimitedDrugs'
import { Fibrillation } from './components/calculator/TabContent/Fibrillation'
import { Intubation } from './components/calculator/TabContent/Intubation'
import { Patient } from './components/shared/types'

export default function App() {
  const [patient, setPatient] = useState<Patient>({
    name: '',
    registry: '',
    age: 0,
    weight: 10,
  })

  const handlePatientChange = (field: keyof Patient, value: string) => {
    setPatient(prev => ({ ...prev, [field]: value }))
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <Header patient={patient} onPatientChange={handlePatientChange} />

      <Tabs defaultValue="primary">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="primary">Primárias</TabsTrigger>
          <TabsTrigger value="limited">Uso Limitado</TabsTrigger>
          <TabsTrigger value="vf">Fibrilação</TabsTrigger>
          <TabsTrigger value="intubation">Intubação</TabsTrigger>
        </TabsList>

        <ScrollArea className="h-[600px]">
          <TabsContent value="primary">
            <PrimaryDrugs weight={patient.weight}  age={patient.age}/>
          </TabsContent>

          <TabsContent value="limited">
            <LimitedDrugs weight={patient.weight} />
          </TabsContent>

          <TabsContent value="vf">
            <Fibrillation weight={patient.weight} />
          </TabsContent>

          <TabsContent value="intubation">
            <Intubation weight={patient.weight} />
          </TabsContent>
        </ScrollArea>
      </Tabs>
    </div>
  )
}