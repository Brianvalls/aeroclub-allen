"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import {
  Calendar,
  MapPin,
  Clock,
  Users,
  ChevronDown,
  ChevronUp,
  CalendarIcon,
  MapPinned,
  Ticket,
  Utensils,
  Music,
  Camera,
  Share2,
  BookmarkPlus,
  Star,
  Info,
  AlertCircle,
} from "lucide-react"

// Eventos destacados y todos los eventos
const featuredEvent = {
  id: "allen-vuela-2023",
  title: "Allen Vuela - Festival Aéreo 2023",
  subtitle: "El evento aeronáutico más importante de la región",
  date: "14 y 15 de Octubre, 2023",
  time: "10:00 - 18:00",
  location: "Aeródromo de Allen, Río Negro",
  coordinates: "-38.9839, -67.8333",
  image: "/images/events.png",
  gallery: ["/images/eventos.jpg", "/images/evento1.jpg", "/images/heroGod.jpg"],
  description:
    "El festival aéreo 'Allen Vuela' regresa con su edición 2023, un evento imperdible para los amantes de la aviación y el público en general. Durante dos días, podrás disfrutar de exhibiciones acrobáticas, demostraciones de aeronaves históricas y modernas, y actividades para toda la familia.",
  details: [
    "Exhibiciones acrobáticas con pilotos nacionales e internacionales",
    "Demostración de aeronaves de la Fuerza Aérea Argentina",
    "Exposición estática de aviones históricos y modernos",
    "Bautismos de vuelo a precios promocionales",
    "Simuladores de vuelo para experimentar la sensación de pilotear",
    "Charlas y conferencias sobre aviación",
    "Actividades especiales para niños",
  ],
  schedule: [
    {
      day: "Sábado 14 de Octubre",
      activities: [
        { time: "10:00", activity: "Apertura de puertas" },
        { time: "11:00", activity: "Exhibición de paracaidismo" },
        { time: "12:30", activity: "Demostración de aviones históricos" },
        { time: "14:00", activity: "Show acrobático principal" },
        { time: "16:00", activity: "Demostración de helicópteros" },
        { time: "17:30", activity: "Cierre del primer día" },
      ],
    },
    {
      day: "Domingo 15 de Octubre",
      activities: [
        { time: "10:00", activity: "Apertura de puertas" },
        { time: "11:30", activity: "Exhibición de la Fuerza Aérea" },
        { time: "13:00", activity: "Competencia de precisión de aterrizaje" },
        { time: "15:00", activity: "Gran show acrobático internacional" },
        { time: "17:00", activity: "Ceremonia de clausura y premiación" },
      ],
    },
  ],
  amenities: [
    { icon: Utensils, name: "Food trucks y patio gastronómico" },
    { icon: Music, name: "Música en vivo" },
    { icon: Ticket, name: "Entradas anticipadas con descuento" },
  ],
  ticketInfo: {
    general: "$2.000",
    children: "Gratis (menores de 12 años)",
    special: "$1.500 (jubilados y estudiantes)",
    where: "Disponibles online y en boletería del aeródromo",
  },
  organizers: ["Aeroclub Allen", "Municipalidad de Allen", "Secretaría de Turismo de Río Negro"],
  sponsors: ["YPF", "Aerolíneas Argentinas", "Banco Patagonia"],
  contactInfo: {
    phone: "+54 299 154-789456",
    email: "allenvuela@aerocluballen.ar",
    website: "www.allenvuela.com.ar",
  },
  featured: true,
  status: "upcoming",
  capacity: "Aforo limitado a 5.000 personas por día",
  hashtag: "#AllenVuela2023",
}

// Combinamos todos los eventos en un solo array
const allEvents = [
  {
    id: 2,
    title: "Jornada de Puertas Abiertas",
    date: "5 de Noviembre, 2023",
    time: "14:00 - 19:00",
    location: "Instalaciones del Aeroclub",
    image: "/images/Hero.jpg",
    description:
      "Visita nuestras instalaciones, conoce nuestras aeronaves y habla con instructores y pilotos sobre cómo iniciarte en el mundo de la aviación.",
    details:
      "Durante la jornada podrás visitar nuestros hangares, ver de cerca las aeronaves, conocer las aulas donde se imparten las clases teóricas y conversar con nuestros instructores sobre los cursos disponibles. También habrá charlas informativas sobre cómo obtener la licencia de piloto privado y comercial. Evento gratuito con inscripción previa.",
    capacity: "Entrada libre hasta completar aforo",
    status: "upcoming",
  },
  {
    id: 3,
    title: "Charla: Meteorología para Pilotos",
    date: "20 de Noviembre, 2023",
    time: "18:30 - 20:30",
    location: "Auditorio del Aeroclub",
    image: "/images/meteo.jpg",
    description:
      "Seminario especializado sobre interpretación de reportes meteorológicos, pronósticos y toma de decisiones para pilotos.",
    details:
      "Impartido por el meteorólogo Juan Martínez, especialista en meteorología aeronáutica con más de 20 años de experiencia. La charla abordará temas como la interpretación de METAR, TAF, cartas de tiempo significativo y estrategias para la toma de decisiones basadas en condiciones meteorológicas. Se entregará certificado de asistencia. Costo: $5.000 (descuento del 50% para socios y alumnos).",
    capacity: "Máximo 40 participantes",
    status: "upcoming",
  },
  {
    id: 4,
    title: "Competencia de Aterrizaje de Precisión",
    date: "12 de Agosto, 2023",
    time: "09:00 - 17:00",
    location: "Aeródromo de Allen",
    image: "/images/hero111.jpg",
    description:
      "Competencia amistosa entre pilotos de la región para demostrar sus habilidades de aterrizaje de precisión.",
    details:
      "Los pilotos participantes compitieron en diferentes categorías según su experiencia y tipo de aeronave. La competencia incluyó pruebas de aterrizaje en punto fijo, aterrizaje corto y aterrizaje con obstáculos simulados. El evento contó con la participación de pilotos de toda la región patagónica.",
    capacity: "Evento finalizado",
    status: "past",
  },
  
]

// Componente de cuenta regresiva
const CountdownTimer = ({ targetDate }: { targetDate: string }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date()
    let timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    }

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      }
    }

    return timeLeft
  }

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearTimeout(timer)
  })

  const timeUnits = [
    { value: timeLeft.days, label: "Días" },
    { value: timeLeft.hours, label: "Horas" },
    { value: timeLeft.minutes, label: "Minutos" },
    { value: timeLeft.seconds, label: "Segundos" },
  ]

  return (
    <div className="flex flex-wrap justify-center gap-4 my-6">
      {timeUnits.map((unit, index) => (
        <div key={index} className="flex flex-col items-center">
          <div className="bg-blue-600 text-white text-xl md:text-2xl font-bold rounded-lg w-14 h-14 md:w-16 md:h-16 flex items-center justify-center">
            {unit.value}
          </div>
          <span className="text-xs md:text-sm mt-1 text-gray-600">{unit.label}</span>
        </div>
      ))}
    </div>
  )
}

// Componente para mostrar un evento destacado
const FeaturedEventCard = ({ event }: { event: typeof featuredEvent }) => {
  const [activeTab, setActiveTab] = useState("info")
  const [showGallery, setShowGallery] = useState(false)
  const [activeImageIndex, setActiveImageIndex] = useState(0)

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      {/* Imagen principal con overlay */}
      <div className="relative h-[250px] md:h-[400px]">
        <Image
          src={event.image || "/placeholder.svg?height=400&width=800&text=Evento"}
          alt={event.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-4 md:p-8">
          <Badge className="mb-2 bg-blue-600 hover:bg-blue-700 w-fit">Evento Destacado</Badge>
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-2">{event.title}</h2>
          <p className="text-gray-200 text-sm md:text-lg">{event.subtitle}</p>
        </div>
      </div>

      {/* Tabs de navegación */}
      <Tabs defaultValue="info" value={activeTab} onValueChange={setActiveTab} className="p-4 md:p-6">
        <TabsList className="grid w-full grid-cols-4 mb-6">
          <TabsTrigger value="info" className="text-xs md:text-sm">
            <Info className="mr-1 md:mr-2 h-3 w-3 md:h-4 md:w-4" />
            <span className="hidden sm:inline">Información</span>
            <span className="sm:hidden">Info</span>
          </TabsTrigger>
          <TabsTrigger value="schedule" className="text-xs md:text-sm">
            <Calendar className="mr-1 md:mr-2 h-3 w-3 md:h-4 md:w-4" />
            <span className="hidden sm:inline">Programa</span>
            <span className="sm:hidden">Prog.</span>
          </TabsTrigger>
          <TabsTrigger value="tickets" className="text-xs md:text-sm">
            <Ticket className="mr-1 md:mr-2 h-3 w-3 md:h-4 md:w-4" />
            <span className="hidden sm:inline">Entradas</span>
            <span className="sm:hidden">Ent.</span>
          </TabsTrigger>
          <TabsTrigger value="gallery" className="text-xs md:text-sm">
            <Camera className="mr-1 md:mr-2 h-3 w-3 md:h-4 md:w-4" />
            <span className="hidden sm:inline">Galería</span>
            <span className="sm:hidden">Gal.</span>
          </TabsTrigger>
        </TabsList>

        {/* Contenido de las tabs */}
        <TabsContent value="info" className="animate-in fade-in-50 duration-300">
          <div className="space-y-6">
            {/* Cuenta regresiva */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-center text-base md:text-lg font-semibold mb-2">Comienza en</h3>
              <CountdownTimer targetDate="2025-10-14T10:00:00" />
            </div>

            {/* Información básica */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <CalendarIcon className="text-blue-600 mt-1" size={20} />
                <div>
                  <h4 className="font-medium text-gray-700">Fecha</h4>
                  <p>{event.date}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="text-blue-600 mt-1" size={20} />
                <div>
                  <h4 className="font-medium text-gray-700">Horario</h4>
                  <p>{event.time}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPinned className="text-blue-600 mt-1" size={20} />
                <div>
                  <h4 className="font-medium text-gray-700">Ubicación</h4>
                  <p>{event.location}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Users className="text-blue-600 mt-1" size={20} />
                <div>
                  <h4 className="font-medium text-gray-700">Capacidad</h4>
                  <p>{event.capacity}</p>
                </div>
              </div>
            </div>

            {/* Descripción */}
            <div>
              <h3 className="text-xl font-semibold mb-3">Acerca del evento</h3>
              <p className="text-gray-700 mb-4">{event.description}</p>

              <h4 className="font-semibold mb-2">Lo que podrás disfrutar:</h4>
              <ul className="space-y-2">
                {event.details.map((detail, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <Star className="text-blue-600 mt-1 flex-shrink-0" size={16} />
                    <span className="text-gray-700">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Amenidades */}
            <div>
              <h3 className="text-xl font-semibold mb-3">Servicios disponibles</h3>
              <div className="flex flex-wrap gap-4">
                {event.amenities.map((amenity, index) => (
                  <div key={index} className="flex items-center gap-2 bg-gray-50 px-3 py-2 rounded-lg">
                    <amenity.icon className="text-blue-600" size={18} />
                    <span className="text-gray-700">{amenity.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Organizadores y patrocinadores */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">Organizadores</h3>
                <ul className="space-y-1">
                  {event.organizers.map((org, index) => (
                    <li key={index} className="text-gray-700">
                      {org}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Patrocinadores</h3>
                <ul className="space-y-1">
                  {event.sponsors.map((sponsor, index) => (
                    <li key={index} className="text-gray-700">
                      {sponsor}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Acciones */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="flex-1 bg-blue-600 hover:bg-blue-700">Comprar entradas</Button>
              <Button variant="outline" className="flex-1 flex items-center justify-center gap-2">
                <Share2 size={16} />
                <span className="hidden sm:inline">Compartir evento</span>
                <span className="sm:hidden">Compartir</span>
              </Button>
              <Button variant="outline" className="flex-1 flex items-center justify-center gap-2">
                <BookmarkPlus size={16} />
                <span className="hidden sm:inline">Guardar</span>
                <span className="sm:hidden">Guardar</span>
              </Button>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="schedule" className="animate-in fade-in-50 duration-300">
          <div className="space-y-6">
            <h3 className="text-xl font-semibold mb-4">Programa del evento</h3>

            {event.schedule.map((day, dayIndex) => (
              <div key={dayIndex} className="mb-6">
                <h4 className="text-lg font-medium mb-3 bg-gray-50 p-2 rounded">{day.day}</h4>
                <div className="space-y-3">
                  {day.activities.map((act, actIndex) => (
                    <div key={actIndex} className="flex items-start gap-3 border-l-2 border-blue-600 pl-4 pb-3">
                      <div className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm font-medium w-16 text-center">
                        {act.time}
                      </div>
                      <div className="flex-1">
                        <p className="text-gray-800">{act.activity}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            <div className="bg-blue-50 p-4 rounded-lg">
              <div className="flex items-start gap-2">
                <AlertCircle className="text-blue-600 mt-1" size={20} />
                <div>
                  <h4 className="font-semibold">Nota importante</h4>
                  <p className="text-sm text-gray-700">
                    El programa puede estar sujeto a cambios debido a condiciones meteorológicas o circunstancias
                    imprevistas. Se recomienda llegar con anticipación.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="tickets" className="animate-in fade-in-50 duration-300">
          <div className="space-y-6">
            <h3 className="text-xl font-semibold mb-4">Información de entradas</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Entrada General</CardTitle>
                  <CardDescription>Acceso a todas las actividades</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold text-blue-600">{event.ticketInfo.general}</p>
                  <p className="text-sm text-gray-500 mt-1">por persona / por día</p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Comprar ahora</Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Entrada Especial</CardTitle>
                  <CardDescription>Jubilados y estudiantes con credencial</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold text-blue-600">{event.ticketInfo.special}</p>
                  <p className="text-sm text-gray-500 mt-1">por persona / por día</p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Comprar ahora</Button>
                </CardFooter>
              </Card>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Información adicional</h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircleIcon className="text-green-600 mt-1" size={16} />
                  <span>Niños menores de 12 años: {event.ticketInfo.children}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircleIcon className="text-green-600 mt-1" size={16} />
                  <span>Disponibilidad: {event.ticketInfo.where}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircleIcon className="text-green-600 mt-1" size={16} />
                  <span>Se recomienda compra anticipada para evitar filas</span>
                </li>
              </ul>
            </div>

            <div className="flex justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Comprar entradas para el festival
              </Button>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="gallery" className="animate-in fade-in-50 duration-300">
          <div className="space-y-6">
            <h3 className="text-xl font-semibold mb-4">Galería de imágenes</h3>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {event.gallery.map((img, index) => (
                <div
                  key={index}
                  className="relative h-40 rounded-lg overflow-hidden cursor-pointer transition-transform hover:scale-105"
                  onClick={() => {
                    setActiveImageIndex(index)
                    setShowGallery(true)
                  }}
                >
                  <Image
                    src={img || "/placeholder.svg?height=200&width=300&text=Imagen"}
                    alt={`${event.title} - imagen ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>

            <div className="text-center">
              <p className="text-gray-600 text-sm">Haz clic en cualquier imagen para ampliarla</p>
            </div>

            {/* Modal de galería */}
            {showGallery && (
              <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
                <div className="relative w-full max-w-4xl">
                  <button
                    className="absolute top-4 right-4 bg-white/20 rounded-full p-2 text-white z-10"
                    onClick={() => setShowGallery(false)}
                  >
                    <X size={24} />
                  </button>

                  <div className="relative h-[70vh] rounded-lg overflow-hidden">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activeImageIndex}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="absolute inset-0"
                      >
                        <Image
                          src={event.gallery[activeImageIndex] || "/placeholder.svg"}
                          alt={`${event.title} - imagen ampliada`}
                          fill
                          className="object-contain"
                        />
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  <div className="absolute left-4 top-1/2 -translate-y-1/2">
                    <button
                      className="bg-white/20 rounded-full p-3 text-white"
                      onClick={() => setActiveImageIndex((prev) => (prev === 0 ? event.gallery.length - 1 : prev - 1))}
                    >
                      <ChevronLeft size={24} />
                    </button>
                  </div>

                  <div className="absolute right-4 top-1/2 -translate-y-1/2">
                    <button
                      className="bg-white/20 rounded-full p-3 text-white"
                      onClick={() => setActiveImageIndex((prev) => (prev === event.gallery.length - 1 ? 0 : prev + 1))}
                    >
                      <ChevronRight size={24} />
                    </button>
                  </div>

                  <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                    {event.gallery.map((_, idx) => (
                      <button
                        key={idx}
                        className={`w-3 h-3 rounded-full ${idx === activeImageIndex ? "bg-white" : "bg-white/50"}`}
                        onClick={() => setActiveImageIndex(idx)}
                      />
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

// Componente para mostrar un evento normal
const EventCard = ({
  event,
  expanded,
  toggleExpand,
}: {
  event: (typeof allEvents)[0]
  expanded: boolean
  toggleExpand: () => void
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <Card className="overflow-hidden hover:shadow-md transition-all duration-300">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="relative h-[200px] md:h-full">
            <Image
              src={event.image || "/placeholder.svg?height=300&width=400&text=Evento"}
              alt={event.title}
              fill
              className="object-cover"
            />
            {event.status === "past" && (
              <div className="absolute top-0 right-0 bg-gray-900/80 text-white px-3 py-1 text-sm">Finalizado</div>
            )}
            {event.status === "upcoming" && (
              <div className="absolute top-0 right-0 bg-green-600/90 text-white px-3 py-1 text-sm">Próximamente</div>
            )}
          </div>
          <div className="md:col-span-2 p-6">
            <CardTitle className="text-xl md:text-2xl mb-3">{event.title}</CardTitle>
            <CardDescription className="text-base mb-4">{event.description}</CardDescription>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
              {event.date && (
                <div className="flex items-center gap-2">
                  <Calendar className="text-blue-500" size={18} />
                  <span className="text-gray-700">{event.date}</span>
                </div>
              )}
              {event.time && (
                <div className="flex items-center gap-2">
                  <Clock className="text-blue-500" size={18} />
                  <span className="text-gray-700">{event.time}</span>
                </div>
              )}
              {event.location && (
                <div className="flex items-center gap-2">
                  <MapPin className="text-blue-500" size={18} />
                  <span className="text-gray-700">{event.location}</span>
                </div>
              )}
              {event.capacity && (
                <div className="flex items-center gap-2">
                  <Users className="text-blue-500" size={18} />
                  <span className="text-gray-700">{event.capacity}</span>
                </div>
              )}
            </div>

            <div className="flex justify-between items-center">
              {event.status === "upcoming" ? (
                <Button>Inscribirse</Button>
              ) : (
                <Button variant="outline">Ver galería de fotos</Button>
              )}

              {event.details && (
                <button
                  onClick={toggleExpand}
                  className="flex items-center gap-1 text-blue-600 hover:text-blue-800 transition-colors"
                >
                  {expanded ? (
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
              )}
            </div>

            {expanded && event.details && (
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
  )
}

// Componente para el ícono de CheckCircle
const CheckCircleIcon = ({ className, size }: { className?: string; size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size || 24}
    height={size || 24}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
)

// Componente para el ícono de X (cerrar)
const X = ({ size }: { size: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
)

// Componente para el ícono de ChevronLeft
const ChevronLeft = ({ size }: { size: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="15 18 9 12 15 6" />
  </svg>
)

// Componente para el ícono de ChevronRight
const ChevronRight = ({ size }: { size: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="9 18 15 12 9 6" />
  </svg>
)

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
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4"
          >
            Calendario de Actividades
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800"
          >
            Eventos y Exhibiciones
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-gray-600 max-w-3xl mx-auto"
          >
            Descubre las actividades, exhibiciones y eventos organizados por el Aeroclub Allen. Desde festivales aéreos
            hasta jornadas de puertas abiertas, siempre hay algo emocionante en nuestro calendario.
          </motion.p>
        </div>

        {/* Evento destacado */}
        <div className="mb-16">
          <FeaturedEventCard event={featuredEvent} />
        </div>

        {/* Todos los eventos */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Calendario de Eventos</h2>
          <div className="space-y-8">
            {allEvents.map((event) => (
              <EventCard
                key={event.id}
                event={event}
                expanded={expandedEvent === event.id}
                toggleExpand={() => toggleEventDetails(event.id)}
              />
            ))}
          </div>
        </div>

        {/* Suscripción a eventos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl p-6 md:p-8 text-white max-w-5xl mx-auto"
        >
          <div className="text-center mb-6">
            <h3 className="text-xl md:text-2xl font-bold mb-2">No te pierdas ningún evento</h3>
            <p className="text-blue-100 max-w-2xl mx-auto">
              Suscríbete a nuestro boletín para recibir información actualizada sobre próximos eventos, exhibiciones y
              actividades especiales del Aeroclub Allen.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <input
              type="email"
              placeholder="Tu correo electrónico"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <Button className="bg-white text-blue-600 hover:bg-blue-50">Suscribirse</Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

