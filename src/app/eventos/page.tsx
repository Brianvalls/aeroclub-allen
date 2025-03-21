import type { Metadata } from "next"
import EventsSection from "@/components/events-section"

export const metadata: Metadata = {
  title: "Eventos | Aeroclub Allen",
  description: "Calendario de eventos, exhibiciones y actividades del Aeroclub Allenn",
}

export default function EventsPage() {
  return (
    <div className="pt-20">
      <EventsSection />
    </div>
  )
}

