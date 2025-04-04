import type { Metadata } from "next"
import AerialToursSection from "@/components/aerial-tours-section"

export const metadata: Metadata = {
  title: "Paseos Aéreos | Aeroclub Allen",
  description: "Vive la experiencia de volar y disfruta de vistas espectaculares con nuestros paseos aéreos",
}

export default function AerialToursPage() {
  return (
    <div className="pt-20">
      <AerialToursSection />
    </div>
  )
}

