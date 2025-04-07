"use client"

import type React from "react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Info,
  Users,
  Ruler,
  Gauge,
  Calendar,
  Fuel,
  Compass,
  Clock,
  Shield,
  CheckCircle2,
  ArrowRight,
  ChevronRight,
  Plane,
  BarChart3,
  Wrench,
  Sparkles,
} from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"

const aircrafts = [
  {
    id: "cessna152",
    name: "Cessna 152",
    tagline: "La aeronave de entrenamiento por excelencia",
    description:
      "Avión biplaza ideal para instrucción básica y vuelos locales. Reconocido mundialmente por su estabilidad, facilidad de manejo y fiabilidad.",
    image: "/images/Hero1.jpg",
    gallery: ["/images/Hero1.jpg", "/images/Hero1.jpg", "/images/Hero1.jpg"],
    specs: {
      seats: "2 personas",
      engine: "Lycoming O-235 (110 HP)",
      cruiseSpeed: "107 nudos (198 km/h)",
      range: "415 millas náuticas (768 km)",
      fuelCapacity: "98 litros",
      maxTakeoffWeight: "757 kg",
      wingspan: "10.2 metros",
      length: "7.3 metros",
      yearManufactured: "1985",
      avionics: "Analógica con actualizaciones modernas",
    },
    details:
      "El Cessna 152 es una aeronave de entrenamiento primario por excelencia. Su estabilidad, facilidad de manejo y economía lo convierten en la opción ideal para la formación de pilotos privados. Nuestra flota cuenta con unidades equipadas con aviónica moderna y mantenidas en excelente estado.",
    uses: [
      "Instrucción básica de vuelo",
      "Entrenamiento para licencia de Piloto Privado",
      "Vuelos locales y de corta distancia",
      "Prácticas de maniobras básicas",
      "Vuelos de familiarización",
    ],
    features: [
      "Excelente estabilidad para estudiantes principiantes",
      "Bajo consumo de combustible",
      "Fácil mantenimiento",
      "Controles simples e intuitivos",
      "Gran visibilidad desde cabina",
    ],
    maintenanceStatus: "Excelente",
    availability: "Alta",
    hourlyRate: "Consultar tarifas actualizadas",
  },
  {
    id: "piper",
    name: "Piper PA-28 Cherokee",
    tagline: "Versatilidad y rendimiento para pilotos avanzados",
    description:
      "Aeronave versátil para entrenamiento avanzado y viajes. Su configuración de cuatro plazas y mayor autonomía la hacen ideal para navegación y vuelos de travesía.",
    image: "/images/piper.jpg",
    gallery: ["/images/piper.jpg", "/images/piper.jpg", "/images/piper.jpg"],
    specs: {
      seats: "4 personas",
      engine: "Lycoming O-360 (180 HP)",
      cruiseSpeed: "124 nudos (230 km/h)",
      range: "465 millas náuticas (861 km)",
      fuelCapacity: "189 litros",
      maxTakeoffWeight: "1,089 kg",
      wingspan: "10.8 metros",
      length: "7.3 metros",
      yearManufactured: "1990",
      avionics: "Garmin G5 con GPS integrado",
    },
    details:
      "El Piper Cherokee es una aeronave polivalente que utilizamos tanto para la formación de pilotos comerciales como para viajes de media distancia. Su cabina espaciosa, estabilidad y rendimiento lo hacen ideal para vuelos de navegación y entrenamiento instrumental.",
    uses: [
      "Entrenamiento avanzado para Piloto Comercial",
      "Vuelos de travesía y navegación",
      "Prácticas de vuelo instrumental",
      "Viajes con pasajeros",
      "Vuelos nocturnos",
    ],
    features: [
      "Cabina espaciosa para 4 ocupantes",
      "Aviónica moderna con GPS",
      "Mayor autonomía para vuelos largos",
      "Excelente estabilidad en crucero",
      "Capacidad para equipaje",
    ],
    maintenanceStatus: "Excelente",
    availability: "Media",
    hourlyRate: "Consultar tarifas actualizadas",
  },
  {
    id: "tecnam",
    name: "Tecnam P2002 Sierra",
    tagline: "Tecnología italiana de última generación",
    description:
      "Avión moderno de última generación para formación y recreación. Combina la eficiencia del motor Rotax con una aviónica digital de vanguardia.",
    image: "/images/p2002.jpg",
    gallery: ["/images/p2002.jpg", "/images/p2002.jpg", "/images/p2002.jpg"],
    specs: {
      seats: "2 personas",
      engine: "Rotax 912 ULS (100 HP)",
      cruiseSpeed: "120 nudos (222 km/h)",
      range: "396 millas náuticas (734 km)",
      fuelCapacity: "110 litros",
      maxTakeoffWeight: "600 kg",
      wingspan: "8.6 metros",
      length: "6.6 metros",
      yearManufactured: "2018",
      avionics: "Glass cockpit Garmin G3X Touch",
    },
    details:
      "El Tecnam P2002 Sierra representa la nueva generación de aeronaves de entrenamiento. Con su construcción en metal, aviónica digital y motor Rotax de bajo consumo, ofrece una experiencia de vuelo moderna y eficiente. Es perfecto para pilotos que buscan familiarizarse con las tecnologías actuales.",
    uses: [
      "Instrucción moderna con aviónica digital",
      "Entrenamiento para Piloto Privado",
      "Vuelos recreativos",
      "Familiarización con glass cockpit",
      "Vuelos económicos de media distancia",
    ],
    features: [
      "Cabina tipo glass cockpit con pantallas táctiles",
      "Bajo consumo de combustible con motor Rotax",
      "Diseño aerodinámico moderno",
      "Construcción en metal de alta calidad",
      "Menor nivel de ruido en cabina",
    ],
    maintenanceStatus: "Excelente",
    availability: "Alta",
    hourlyRate: "Consultar tarifas actualizadas",
  },
]

// Componente para mostrar una especificación con icono
const SpecItem = ({ icon: Icon, label, value }: { icon: any; label: string; value: string }) => (
  <div className="flex items-start gap-2 sm:gap-3">
    <div className="bg-blue-50 p-1.5 sm:p-2 rounded-md">
      <Icon className="text-blue-600" size={16} />
    </div>
    <div className="min-w-0">
      <span className="text-xs sm:text-sm text-gray-500 block">{label}</span>
      <p className="text-sm sm:text-base text-gray-800 font-medium truncate">{value}</p>
    </div>
  </div>
)

// Componente para mostrar características con checkmarks
const FeatureItem = ({ children }: { children: React.ReactNode }) => (
  <li className="flex items-start gap-2">
    <CheckCircle2 className="text-green-500 mt-1 flex-shrink-0" size={16} />
    <span className="text-gray-700">{children}</span>
  </li>
)

// Componente para mostrar una tarjeta de comparación
const ComparisonCard = ({
  title,
  icon: Icon,
  aircraft,
  property,
  unit = "",
  description,
}: {
  title: string
  icon: any
  aircraft: any[]
  property: string
  unit?: string
  description: string
}) => (
  <Card className="overflow-hidden">
    <CardHeader className="pb-2">
      <div className="flex items-center gap-2">
        <div className="bg-blue-100 p-1.5 sm:p-2 rounded-full">
          <Icon className="text-blue-600" size={18} />
        </div>
        <CardTitle className="text-base sm:text-lg">{title}</CardTitle>
      </div>
      <CardDescription className="text-xs sm:text-sm">{description}</CardDescription>
    </CardHeader>
    <CardContent>
      <div className="space-y-3">
        {aircraft.map((a) => (
          <div key={a.id} className="flex items-center justify-between">
            <span className="font-medium text-sm truncate mr-2">{a.name.split(" ")[0]}</span>
            <div className="flex items-center gap-2 flex-shrink-0">
              <div className="h-2 bg-blue-100 rounded-full w-16 sm:w-24 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${(Number.parseInt(a.specs[property]) / 200) * 100}%` }}
                  transition={{ duration: 1, delay: 0.2 }}
                  className="h-full bg-blue-600 rounded-full"
                />
              </div>
              <span className="text-gray-700 font-medium text-xs sm:text-sm whitespace-nowrap">
                {a.specs[property]} {unit}
              </span>
            </div>
          </div>
        ))}
      </div>
    </CardContent>
  </Card>
)

// Componente para la galería de imágenes
const ImageGallery = ({ images, name }: { images: string[]; name: string }) => {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <div className="space-y-4 sm:space-y-3">
      <div className="relative h-[120px] sm:h-[200px] rounded-lg overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0"
          >
            <Image
              src={images[activeIndex] || "/placeholder.svg?height=200&width=400&text=Imagen"}
              alt={`${name} - imagen ${activeIndex + 1}`}
              fill
              className="object-cover"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex gap-1 sm:gap-2 justify-center mt-2">
        {images.map((img, idx) => (
          <button
            key={idx}
            onClick={() => setActiveIndex(idx)}
            className={cn(
              "w-10 sm:w-16 h-8 sm:h-12 rounded-md overflow-hidden border-2 transition-all",
              activeIndex === idx ? "border-blue-500 scale-105" : "border-transparent opacity-70",
            )}
          >
            <div className="relative w-full h-full">
              <Image
                src={img || "/placeholder.svg?height=60&width=80"}
                alt={`${name} - miniatura ${idx + 1}`}
                fill
                className="object-cover"
              />
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}

// Componente para mostrar un avión completo
const AircraftSection = ({ aircraft, index }: { aircraft: (typeof aircrafts)[0]; index: number }) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      viewport={{ once: true, margin: "-100px" }}
      id={aircraft.id}
      className={`mb-20 ${index > 0 ? "pt-16 border-t border-gray-200" : ""}`}
    >
      {/* Header con imagen */}
      <div className="relative h-[250px] md:h-[400px] rounded-xl overflow-hidden mb-8 md:mb-12">
        <Image
          src={aircraft.image || "/placeholder.svg?height=400&width=800&text=Aeronave"}
          alt={aircraft.name}
          fill
          className="object-cover"
          priority={index === 0}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6 md:p-8">
          <span className="text-blue-300 font-medium mb-2">{aircraft.tagline}</span>
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-3">{aircraft.name}</h2>
          <p className="text-gray-200 max-w-3xl text-sm md:text-base">{aircraft.description}</p>
        </div>
      </div>

      {/* Información principal y galería */}
      <div className="grid md:grid-cols-3 gap-4 sm:gap-8 mb-8 sm:mb-12">
        <div className="md:col-span-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-sm p-4 sm:p-6 border border-gray-100 h-full"
          >
            <h3 className="text-lg sm:text-xl font-bold mb-4">Especificaciones técnicas</h3>
            <div className="grid grid-cols-1 xs:grid-cols-2 gap-4 sm:gap-6">
              <SpecItem icon={Users} label="Capacidad" value={aircraft.specs.seats} />
              <SpecItem icon={Gauge} label="Velocidad crucero" value={aircraft.specs.cruiseSpeed} />
              <SpecItem icon={Compass} label="Alcance" value={aircraft.specs.range} />
              <SpecItem icon={Fuel} label="Capacidad combustible" value={aircraft.specs.fuelCapacity} />
              <SpecItem icon={Ruler} label="Envergadura" value={aircraft.specs.wingspan} />
              <SpecItem icon={Calendar} label="Año fabricación" value={aircraft.specs.yearManufactured} />
              <SpecItem icon={Info} label="Motor" value={aircraft.specs.engine} />
              <SpecItem icon={Sparkles} label="Aviónica" value={aircraft.specs.avionics} />
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="bg-white rounded-xl shadow-sm p-4 sm:p-6 border border-gray-100"
        >
          <h3 className="text-lg sm:text-xl font-bold mb-4">Galería</h3>
          <ImageGallery images={aircraft.gallery} name={aircraft.name} />
        </motion.div>
      </div>

      {/* Usos y características */}
      <div className="grid md:grid-cols-2 gap-4 sm:gap-8 mb-8 sm:mb-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-white rounded-xl shadow-sm p-4 sm:p-6 border border-gray-100"
        >
          <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 flex items-center">
            <Plane className="mr-2 text-blue-600" size={20} />
            Usos principales
          </h3>
          <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base">
            {aircraft.uses.map((use, index) => (
              <FeatureItem key={index}>{use}</FeatureItem>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-white rounded-xl shadow-sm p-4 sm:p-6 border border-gray-100"
        >
          <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 flex items-center">
            <CheckCircle2 className="mr-2 text-blue-600" size={20} />
            Características destacadas
          </h3>
          <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base">
            {aircraft.features.map((feature, index) => (
              <FeatureItem key={index}>{feature}</FeatureItem>
            ))}
          </ul>
        </motion.div>
      </div>

      {/* Detalles y estado */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        viewport={{ once: true }}
        className="bg-white rounded-xl shadow-sm p-6 border border-gray-100"
      >
        <h3 className="text-xl font-bold mb-4">Detalles adicionales</h3>
        <p className="text-gray-700 mb-6">{aircraft.details}</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-blue-50 p-4 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <Wrench className="text-blue-600" size={20} />
              <h4 className="font-semibold">Estado de mantenimiento</h4>
            </div>
            <p className="text-gray-700">{aircraft.maintenanceStatus}</p>
          </div>

          <div className="bg-blue-50 p-4 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <Clock className="text-blue-600" size={20} />
              <h4 className="font-semibold">Disponibilidad</h4>
            </div>
            <p className="text-gray-700">{aircraft.availability}</p>
          </div>

          <div className="bg-blue-50 p-4 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <BarChart3 className="text-blue-600" size={20} />
              <h4 className="font-semibold">Tarifa por hora</h4>
            </div>
            <p className="text-gray-700">{aircraft.hourlyRate}</p>
          </div>
        </div>
      </motion.div>
    </motion.section>
  )
}

export default function FleetSection() {
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
            Aeronaves Certificadas
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800"
          >
            Nuestra Flota
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-gray-600 max-w-3xl mx-auto"
          >
            Contamos con aeronaves modernas y perfectamente mantenidas para la formación de pilotos y paseos aéreos.
            Cada avión es sometido a rigurosos controles de seguridad y mantenimiento preventivo.
          </motion.p>
        </div>

        {/* Índice visual de aeronaves */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {aircrafts.map((aircraft) => (
            <a
              key={aircraft.id}
              href={`#${aircraft.id}`}
              className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <Plane className="text-blue-600" size={16} />
              <span className="font-medium">{aircraft.name.split(" ")[0]}</span>
            </a>
          ))}
        </motion.div>

        {/* Secciones de aeronaves */}
        <div className="max-w-6xl mx-auto">
          {aircrafts.map((aircraft, index) => (
            <AircraftSection key={aircraft.id} aircraft={aircraft} index={index} />
          ))}
        </div>

        {/* Comparativa de aeronaves */}
        <div className="max-w-6xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 text-center"
          >
            Comparativa de nuestra flota
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <ComparisonCard
              title="Velocidad de crucero"
              icon={Gauge}
              aircraft={aircrafts}
              property="cruiseSpeed"
              description="Velocidad sostenida en vuelo nivelado"
            />

            <ComparisonCard
              title="Alcance"
              icon={Compass}
              aircraft={aircrafts}
              property="range"
              description="Distancia máxima que puede recorrer"
            />

            <ComparisonCard
              title="Capacidad de combustible"
              icon={Fuel}
              aircraft={aircrafts}
              property="fuelCapacity"
              unit="litros"
              description="Cantidad máxima de combustible"
            />

            <ComparisonCard
              title="Capacidad de pasajeros"
              icon={Users}
              aircraft={aircrafts}
              property="seats"
              description="Número de ocupantes incluyendo piloto"
            />
          </div>
        </div>

        {/* Seguridad y mantenimiento */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl p-4 sm:p-8 text-white max-w-5xl mx-auto mb-12 sm:mb-16"
        >
          <div className="flex flex-col md:flex-row items-center gap-4 sm:gap-6">
            <div className="bg-white/20 p-3 sm:p-4 rounded-full flex-shrink-0">
              <Shield className="h-8 w-8 sm:h-12 sm:w-12" />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-xl sm:text-2xl font-bold mb-2">Seguridad y mantenimiento</h3>
              <p className="text-blue-100 mb-4 text-sm sm:text-base">
                Todas nuestras aeronaves cuentan con un riguroso programa de mantenimiento supervisado por técnicos
                certificados. Cumplimos con todas las normativas de la ANAC (Administración Nacional de Aviación Civil)
                y priorizamos la seguridad en cada aspecto de nuestra operación.
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-3 mb-2 sm:mb-4 text-sm sm:text-base">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="text-blue-200 flex-shrink-0" size={16} />
                  <span>Inspecciones periódicas certificadas</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="text-blue-200 flex-shrink-0" size={16} />
                  <span>Mantenimiento preventivo constante</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="text-blue-200 flex-shrink-0" size={16} />
                  <span>Repuestos originales garantizados</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="text-blue-200 flex-shrink-0" size={16} />
                  <span>Técnicos con licencia ANAC</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <div className="text-center max-w-3xl mx-auto pt-8 sm:pt-4">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-xl sm:text-2xl font-bold mb-4"
          >
            ¿Listo para volar en nuestras aeronaves?
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-gray-600 mb-6 sm:mb-8 px-2"
          >
            Ya sea que quieras comenzar tu formación como piloto o disfrutar de un paseo aéreo, tenemos la aeronave
            perfecta para ti.
          </motion.p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center px-4 sm:px-0">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 w-full sm:w-auto" asChild>
              <Link href="/carreras" className="flex items-center justify-center">
                <span>Comenzar formación</span>
                <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-blue-600 text-blue-600 hover:bg-blue-50 w-full sm:w-auto"
              asChild
            >
              <Link href="/paseos" className="flex items-center justify-center">
                <span>Reservar paseo aéreo</span>
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

