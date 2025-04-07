"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Clock, Users, MapPin, ArrowRight, Zap, Info, Eye, ChevronDown } from "lucide-react"
import Image from "next/image"

const tours = [
  {
    id: 1,
    title: "Tour Panorámico",
    description: "Sobrevuela la ciudad de Allen y sus alrededores, disfrutando de vistas panorámicas impresionantes.",
    image: "/images/Tour1.jpg",
    duration: "30 minutos",
    capacity: "3 personas",
    location: "Allen, Río Negro",
    price: "$15.000",
    highlight: "Vistas urbanas",
  },
  {
    id: 2,
    title: "Valle y Río Negro",
    description: "Recorre el Valle del Río Negro, observando los viñedos, chacras y el serpenteante río desde el aire.",
    image: "/images/Tour2.jpg",
    duration: "45 minutos",
    capacity: "3 personas",
    location: "Valle Río Negro",
    price: "$20.000",
    originalPrice: "$25.000",
    highlight: "Paisajes vitivinícolas",
    isSpecial: true,
  },
  {
    id: 3,
    title: "Aventura Patagónica",
    description:
      "Vuela sobre los impresionantes paisajes patagónicos, con vistas a la cordillera y los lagos de la región.",
    image: "/images/paseosAereo.jpg",
    duration: "60 minutos",
    capacity: "2 personas",
    location: "Región Patagónica",
    price: "$30.000",
    highlight: "Cordillera y lagos",
  },
]

const destinations = [
  "Allen y alrededores",
  "Lago Pellegrini",
  "Valle del Río Negro",
  "Cipolletti",
  "General Roca",
  "Neuquén Capital",
  "Bariloche (tours especiales)",
  "Villa La Angostura",
  "El Chocón",
]

const TourCard = ({ tour }: { tour: (typeof tours)[0] }) => {
  const [isHovered, setIsHovered] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)

  // Función para manejar el clic en dispositivos móviles
  const handleClick = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <div
      className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Imagen con overlay negro al hacer hover */}
      <div className="relative h-full w-full">
        <Image src={tour.image || "/placeholder.svg"} alt={tour.title} fill className="object-cover" />
        <motion.div
          className="absolute inset-0 bg-black"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered || isExpanded ? 0.7 : 0 }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* Badge de oferta para la segunda card */}
      {tour.isSpecial && (
        <div className="absolute top-4 right-4 bg-black text-white px-3 py-1 rounded-full font-bold text-sm flex items-center z-10">
          <Zap size={16} className="mr-1" />
          ¡OFERTA ESPECIAL!
        </div>
      )}

      {/* Indicador de "Toca para ver detalles" en móviles */}
      <div className="absolute top-4 left-4 md:hidden bg-white/80 text-blue-800 px-3 py-1 rounded-full text-xs font-medium flex items-center z-10">
        <Info size={14} className="mr-1" />
        Toca para ver detalles
      </div>

      {/* Indicador de "Ver detalles" en desktop (solo visible al hover) */}
      <motion.div
        className="absolute top-4 left-4 hidden md:flex items-center bg-white/80 text-blue-800 px-3 py-1 rounded-full text-xs font-medium z-10"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : -10 }}
        transition={{ duration: 0.3 }}
      >
        <Eye size={14} className="mr-1" />
        Ver detalles
      </motion.div>

      {/* Contenido */}
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
        {/* Título siempre visible */}
        <h3 className="text-2xl font-bold mb-1">{tour.title}</h3>
        <p className="text-blue-200 font-medium">{tour.highlight}</p>

        {/* Botón para expandir en móviles */}
        <button
          onClick={handleClick}
          className="absolute bottom-4 right-4 md:hidden bg-white/20 text-white p-2 rounded-full z-20"
          aria-label="Ver detalles"
        >
          <ChevronDown className={`transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`} size={20} />
        </button>

        {/* Detalles que aparecen al hacer hover o expandir */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: isHovered || isExpanded ? 1 : 0,
            y: isHovered || isExpanded ? 0 : 20,
          }}
          transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
          className="mt-4"
        >
          <p className="text-gray-200 mb-6">{tour.description}</p>

          <div className="grid grid-cols-1 gap-3 mb-6">
            <div className="flex items-center gap-3">
              <Clock className="text-blue-300" size={18} />
              <span>{tour.duration}</span>
            </div>
            <div className="flex items-center gap-3">
              <Users className="text-blue-300" size={18} />
              <span>{tour.capacity}</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="text-blue-300" size={18} />
              <span>{tour.location}</span>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div>
              {tour.originalPrice ? (
                <>
                  <span className="text-xl font-bold">{tour.price}</span>
                  <span className="ml-2 line-through text-gray-300">{tour.originalPrice}</span>
                </>
              ) : (
                <span className="text-xl font-bold">{tour.price}</span>
              )}
            </div>
            <Button variant="outline" className="bg-transparent border-white/50 text-white hover:bg-white/10 group">
              Reservar
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default function AerialToursSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-blue-600 mb-6"
          >
            Paseos Aéreos
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-gray-600 max-w-3xl mx-auto mb-8"
          >
            Vive la experiencia de volar y disfruta de vistas espectaculares con nuestros paseos aéreos.
          </motion.p>
        </div>

        {/* Nueva sección de destinos */}
        <div className="bg-blue-50 rounded-xl p-6 md:p-8 mb-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-blue-800 text-center">
              Descubre la Patagonia desde el aire
            </h2>
            <p className="text-gray-700 mb-6 text-center">
              Ofrecemos paseos aéreos sobre los paisajes más impresionantes de la región. Desde la ciudad de Allen y sus
              alrededores, hasta el majestuoso Lago Pellegrini, los valles del Río Negro, y para los más aventureros,
              excursiones especiales a Bariloche y Villa La Angostura con sus impresionantes vistas de lagos y montañas.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
              {destinations.map((destination, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg p-3 text-center shadow-sm border border-blue-100 hover:border-blue-300 hover:shadow-md transition-all"
                >
                  <span className="text-blue-700 font-medium">{destination}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tours.map((tour, index) => (
            <motion.div
              key={tour.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="h-full"
            >
              <TourCard tour={tour} />
            </motion.div>
          ))}
        </div>

        {/* Información adicional */}
        <div className="mt-16 bg-white rounded-xl shadow-sm p-6 md:p-8 border border-gray-100">
          <h2 className="text-2xl font-bold mb-4 text-center">Información importante</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-2 text-blue-700">¿Qué incluyen nuestros paseos?</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircleIcon className="text-green-500 mt-1" size={16} />
                  <span>Briefing previo al vuelo con información de seguridad</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircleIcon className="text-green-500 mt-1" size={16} />
                  <span>Vuelo panorámico con la duración especificada</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircleIcon className="text-green-500 mt-1" size={16} />
                  <span>Certificado de vuelo como recuerdo</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircleIcon className="text-green-500 mt-1" size={16} />
                  <span>Posibilidad de tomar fotografías y videos durante el vuelo</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2 text-blue-700">Recomendaciones</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircleIcon className="text-green-500 mt-1" size={16} />
                  <span>Llegar 30 minutos antes de la hora programada</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircleIcon className="text-green-500 mt-1" size={16} />
                  <span>Usar ropa cómoda y calzado cerrado</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircleIcon className="text-green-500 mt-1" size={16} />
                  <span>Traer identificación válida</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircleIcon className="text-green-500 mt-1" size={16} />
                  <span>Los vuelos están sujetos a condiciones meteorológicas</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 text-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Reserva tu paseo aéreo
            </Button>
          </div>
        </div>
      </div>
    </section>
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

