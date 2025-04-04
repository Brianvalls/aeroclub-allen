"use client"

import type React from "react"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
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
    image: "/images/hero12.jpg",
    gallery: ["/images/hero12.jpg", "/images/hero12.jpg", "/images/hero12.jpg"],
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
    image: "/images/hero2.jpg",
    gallery: ["/images/hero2.jpg", "/images/hero2.jpg", "/images/hero2.jpg"],
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
  <div className="flex items-center gap-3">
    <div className="bg-blue-50 p-2 rounded-md">
      <Icon className="text-blue-600" size={18} />
    </div>
    <div>
      <span className="text-sm text-gray-500">{label}</span>
      <p className="text-gray-800 font-medium">{value}</p>
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
        <div className="bg-blue-100 p-2 rounded-full">
          <Icon className="text-blue-600" size={20} />
        </div>
        <CardTitle className="text-lg">{title}</CardTitle>
      </div>
      <CardDescription>{description}</CardDescription>
    </CardHeader>
    <CardContent>
      <div className="space-y-3">
        {aircraft.map((a) => (
          <div key={a.id} className="flex items-center justify-between">
            <span className="font-medium">{a.name}</span>
            <div className="flex items-center gap-2">
              <div className="h-2 bg-blue-100 rounded-full w-24 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${(Number.parseInt(a.specs[property]) / 200) * 100}%` }}
                  transition={{ duration: 1, delay: 0.2 }}
                  className="h-full bg-blue-600 rounded-full"
                />
              </div>
              <span className="text-gray-700 font-medium">
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
    <div className="space-y-3">
      <div className="relative h-[200px] rounded-lg overflow-hidden">
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

      <div className="flex gap-2">
        {images.map((img, idx) => (
          <button
            key={idx}
            onClick={() => setActiveIndex(idx)}
            className={cn(
              "w-16 h-12 rounded-md overflow-hidden border-2 transition-all",
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

export default function FleetSection() {
  const [activeTab, setActiveTab] = useState("cessna152")
  const activeAircraft = aircrafts.find((a) => a.id === activeTab) || aircrafts[0]

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

        {/* Selector de aeronaves */}
        <Tabs defaultValue="cessna152" value={activeTab} onValueChange={setActiveTab} className="max-w-6xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 mb-12 p-1 bg-gray-100 rounded-lg">
            {aircrafts.map((aircraft) => (
              <TabsTrigger
                key={aircraft.id}
                value={aircraft.id}
                className="data-[state=active]:bg-white data-[state=active]:text-blue-600 data-[state=active]:shadow-md rounded-md py-3"
              >
                <Plane className="mr-2 h-4 w-4" />
                {aircraft.name}
              </TabsTrigger>
            ))}
          </TabsList>

          {/* Contenido principal */}
          <div className="mb-16">
            {/* Header con imagen */}
            <div className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden mb-12">
              <Image
                src={activeAircraft.image || "/placeholder.svg?height=400&width=800&text=Aeronave"}
                alt={activeAircraft.name}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-8">
                <span className="text-blue-300 font-medium mb-2">{activeAircraft.tagline}</span>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">{activeAircraft.name}</h2>
                <p className="text-gray-200 max-w-3xl">{activeAircraft.description}</p>
              </div>
            </div>

            {/* Información principal y galería */}
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="md:col-span-2">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 h-full"
                >
                  <h3 className="text-xl font-bold mb-4">Especificaciones técnicas</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <SpecItem icon={Users} label="Capacidad" value={activeAircraft.specs.seats} />
                    <SpecItem icon={Gauge} label="Velocidad crucero" value={activeAircraft.specs.cruiseSpeed} />
                    <SpecItem icon={Compass} label="Alcance" value={activeAircraft.specs.range} />
                    <SpecItem icon={Fuel} label="Capacidad combustible" value={activeAircraft.specs.fuelCapacity} />
                    <SpecItem icon={Ruler} label="Envergadura" value={activeAircraft.specs.wingspan} />
                    <SpecItem icon={Calendar} label="Año fabricación" value={activeAircraft.specs.yearManufactured} />
                    <SpecItem icon={Info} label="Motor" value={activeAircraft.specs.engine} />
                    <SpecItem icon={Sparkles} label="Aviónica" value={activeAircraft.specs.avionics} />
                  </div>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-xl shadow-sm p-6 border border-gray-100"
              >
                <h3 className="text-xl font-bold mb-4">Galería</h3>
                <ImageGallery images={activeAircraft.gallery} name={activeAircraft.name} />
              </motion.div>
            </div>

            {/* Usos y características */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-sm p-6 border border-gray-100"
              >
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Plane className="mr-2 text-blue-600" size={24} />
                  Usos principales
                </h3>
                <ul className="space-y-3">
                  {activeAircraft.uses.map((use, index) => (
                    <FeatureItem key={index}>{use}</FeatureItem>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-sm p-6 border border-gray-100"
              >
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <CheckCircle2 className="mr-2 text-blue-600" size={24} />
                  Características destacadas
                </h3>
                <ul className="space-y-3">
                  {activeAircraft.features.map((feature, index) => (
                    <FeatureItem key={index}>{feature}</FeatureItem>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Detalles y estado */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 mb-12"
            >
              <h3 className="text-xl font-bold mb-4">Detalles adicionales</h3>
              <p className="text-gray-700 mb-6">{activeAircraft.details}</p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Wrench className="text-blue-600" size={20} />
                    <h4 className="font-semibold">Estado de mantenimiento</h4>
                  </div>
                  <p className="text-gray-700">{activeAircraft.maintenanceStatus}</p>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="text-blue-600" size={20} />
                    <h4 className="font-semibold">Disponibilidad</h4>
                  </div>
                  <p className="text-gray-700">{activeAircraft.availability}</p>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <BarChart3 className="text-blue-600" size={20} />
                    <h4 className="font-semibold">Tarifa por hora</h4>
                  </div>
                  <p className="text-gray-700">{activeAircraft.hourlyRate}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </Tabs>

        {/* Comparativa de aeronaves */}
        <div className="max-w-6xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-2xl font-bold mb-8 text-center"
          >
            Comparativa de nuestra flota
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-6">
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
          className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl p-8 text-white max-w-5xl mx-auto mb-16"
        >
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="bg-white/20 p-4 rounded-full">
              <Shield className="h-12 w-12" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-2">Seguridad y mantenimiento</h3>
              <p className="text-blue-100 mb-4">
                Todas nuestras aeronaves cuentan con un riguroso programa de mantenimiento supervisado por técnicos
                certificados. Cumplimos con todas las normativas de la ANAC (Administración Nacional de Aviación Civil)
                y priorizamos la seguridad en cada aspecto de nuestra operación.
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="text-blue-200" size={18} />
                  <span>Inspecciones periódicas certificadas</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="text-blue-200" size={18} />
                  <span>Mantenimiento preventivo constante</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="text-blue-200" size={18} />
                  <span>Repuestos originales garantizados</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="text-blue-200" size={18} />
                  <span>Técnicos con licencia ANAC</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <div className="text-center max-w-3xl mx-auto">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-2xl font-bold mb-4"
          >
            ¿Listo para volar en nuestras aeronaves?
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-gray-600 mb-8"
          >
            Ya sea que quieras comenzar tu formación como piloto o disfrutar de un paseo aéreo, tenemos la aeronave
            perfecta para ti.
          </motion.p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700" asChild>
              <Link href="/carreras" className="flex items-center">
                Comenzar formación
                <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>

            <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50" asChild>
              <Link href="/paseos" className="flex items-center">
                Reservar paseo aéreo
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

