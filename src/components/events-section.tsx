"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, MapPin, Clock, Users, ChevronDown, ChevronUp } from "lucide-react"

// Eventos futuros y pasados
const upcomingEvents = [
  {
    id: 1,
    title: "Festival Aéreo Anual",
    date: "15 de Octubre, 2023",
    time: "10:00 - 18:00",
    location: "Aeródromo de Allen",
    image: "/images/festival-aereo.jpg",
    description:
      "Nuestro festival aéreo anual con exhibiciones acrobáticas, demostraciones de aeronaves históricas y modernas, y actividades para toda la familia.",
    details:
      "El evento contará con la participación de pilotos acrobáticos nacionales e internacionales, exhibición estática de aeronaves, food trucks, actividades para niños y la posibilidad de realizar bautismos de vuelo a precios promocionales. La entrada general tiene un costo de $2.000 y es gratuita para menores de 12 años.",
    capacity: "Aforo limitado a 500 personas",
  },
  {
    id: 2,
    title: "Jornada de Puertas Abiertas",
    date: "5 de Noviembre, 2023",
    time: "14:00 - 19:00",
    location: "Instalaciones del Aeroclub",
    image: "/images/puertas-abiertas.jpg",
    description:
      "Visita nuestras instalaciones, conoce nuestras aeronaves y habla con instructores y pilotos sobre cómo iniciarte en el mundo de la aviación.",
    details:
      "Durante la jornada podrás visitar nuestros hangares, ver de cerca las aeronaves, conocer las aulas donde se imparten las clases teóricas y conversar con nuestros instructores sobre los cursos disponibles. También habrá charlas informativas sobre cómo obtener la licencia de piloto privado y comercial. Evento gratuito con inscripción previa.",
    capacity: "Entrada libre hasta completar aforo",
  },
  {
    id: 3,
    title: "Charla: Meteorología para Pilotos",
    date: "20 de Noviembre, 2023",
    time: "18:30 - 20:30",
    location: "Auditorio del Aeroclub",
    image: "/images/charla-meteorologia.jpg",
    description:
      "Seminario especializado sobre interpretación de reportes meteorológicos, pronósticos y toma de decisiones para pilotos.",
    details:
      "Impartido por el meteorólogo Juan Martínez, especialista en meteorología aeronáutica con más de 20 años de experiencia. La charla abordará temas como la interpretación de METAR, TAF, cartas de tiempo significativo y estrategias para la toma de decisiones basadas en condiciones meteorológicas. Se entregará certificado de asistencia. Costo: $5.000 (descuento del 50% para socios y alumnos).",
    capacity: "Máximo 40 participantes",
  },
]

const pastEvents = [
  {
    id: 4,
    title: "Competencia de Aterrizaje de Precisión",
    date: "12 de Agosto, 2023",
    location: "Aeródromo de Allen",
    image: "/images/competencia-aterrizaje.jpg",
    description:
      "Competencia amistosa entre pilotos de la región para demostrar sus habilidades de aterrizaje de precisión.",
  },
  {
    id: 5,
    title: "Curso Intensivo de Navegación VFR",
    date: "15-17 de Julio, 2023",
    location: "Aulas del Aeroclub",
    image: "/images/curso-navegacion.jpg",
    description:
      "Curso teórico-práctico de navegación visual para pilotos que desean mejorar sus habilidades de planificación de vuelo.",
  },
  {
    id: 6,
    title: "Encuentro de Aviación Deportiva",
    date: "10 de Junio, 2023",
    location: "Aeródromo de Allen",
    image: "/images/encuentro-aviacion.jpg",
    description:
      "Reunión de entusiastas de la aviación deportiva con exhibiciones de ultraligeros, autogiros y aeronaves experimentales.",
  },
]

export default function EventsSection() {
  const [expandedEvent, setExpandedEvent] = useState<number | null>(null)

  const toggleEventDetails = (eventId: number) => {
    if (expandedEvent === eventId) {
      setExpandedEvent(null)
    } else {
      setExpandedEvent(eventId)
    }
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Eventos
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-600 max-w-2xl mx-auto"
          >
            Descubre las actividades, exhibiciones y eventos organizados por el Aeroclub Allen.
          </motion.p>
        </div>

        {/* Próximos eventos */}
        <div className="mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-8 text-center"
          >
            Próximos Eventos
          </motion.h2>

          <div className="space-y-8">
            {upcomingEvents.map((event) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden">
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="relative h-[200px] md:h-full">
                      <Image
                        src={event.image || "/placeholder.svg?height=300&width=400&text=Evento"}
                        alt={event.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="md:col-span-2 p-6">
                      <CardTitle className="text-2xl mb-3">{event.title}</CardTitle>
                      <CardDescription className="text-base mb-4">{event.description}</CardDescription>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
                        <div className="flex items-center gap-2">
                          <Calendar className="text-blue-500" size={18} />
                          <span className="text-gray-700">{event.date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="text-blue-500" size={18} />
                          <span className="text-gray-700">{event.time}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="text-blue-500" size={18} />
                          <span className="text-gray-700">{event.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="text-blue-500" size={18} />
                          <span className="text-gray-700">{event.capacity}</span>
                        </div>
                      </div>

                      <div className="flex justify-between items-center">
                        <Button>Inscribirse</Button>
                        <button
                          onClick={() => toggleEventDetails(event.id)}
                          className="flex items-center gap-1 text-blue-600 hover:text-blue-800 transition-colors"
                        >
                          {expandedEvent === event.id ? (
                            <>
                              <span>Menos detalles</span>
                              <ChevronUp size={16} />
                            </>
                          ) : (
                            <>
                              <span>Más detalles</span>
                              <ChevronDown size={16} />
                            </>
                          )}
                        </button>
                      </div>

                      {expandedEvent === event.id && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="mt-4 pt-4 border-t border-gray-200"
                        >
                          <p className="text-gray-700">{event.details}</p>
                        </motion.div>
                      )}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Eventos pasados */}
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-8 text-center"
          >
            Eventos Pasados
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pastEvents.map((event) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Card className="h-full flex flex-col">
                  <div className="relative h-48">
                    <Image
                      src={event.image || "/placeholder.svg?height=200&width=300&text=Evento"}
                      alt={event.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-0 right-0 bg-gray-900/80 text-white px-3 py-1 text-sm">Finalizado</div>
                  </div>
                  <CardHeader>
                    <CardTitle>{event.title}</CardTitle>
                    <CardDescription>{event.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Calendar className="text-blue-500" size={16} />
                        <span className="text-gray-600">{event.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="text-blue-500" size={16} />
                        <span className="text-gray-600">{event.location}</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      Ver galería de fotos
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

