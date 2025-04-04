import type { Metadata } from "next"
import CareersSection from "@/components/careers-section"

export const metadata: Metadata = {
  title: "Carreras de Piloto | Aeroclub Allen",
  description: "Formación de pilotos privados y comerciales con los más altos estándares de calidad y seguridad",
}

export default function CareersPage() {
  return (
    <div className="pt-20">
      <CareersSection />
    </div>
  )
}

