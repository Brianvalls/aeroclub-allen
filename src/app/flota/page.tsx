import type { Metadata } from "next"
import FleetSection from "@/components/fleet-section"

export const metadata: Metadata = {
  title: "Flota de Aviones | Aeroclub Allen",
  description: "Conoce nuestra flota de aeronaves para formación de pilotos y paseos aéreos",
}

export default function FleetPage() {
  return (
    <div className="pt-20">
      <FleetSection />
    </div>
  )
}

