"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Info, Users, Ruler, Gauge, Calendar } from "lucide-react"

const aircrafts = [
  {
    id: "cessna152",
    name: "Cessna 152",
    description: "Avión biplaza ideal para instrucción básica y vuelos locales.",
    image: "/images/cessna152.jpg",
    specs: {
      seats: "2 personas",
      engine: "Lycoming O-235 (110 HP)",
      cruiseSpeed: "107 nudos (198 km/h)",
      range: "415 millas náuticas (768 km)",
      yearManufactured: "1985",
    },
    details:
      "El Cessna 152 es una aeronave de entrenamiento primario por excelencia. Su estabilidad, facilidad de manejo y economía lo convierten en la opción ideal para la formación de pilotos privados. Nuestra flota cuenta con unidades equipadas con aviónica moderna y mantenidas en excelente estado.",
  },
  {
    id: "piper",
    name: "Piper PA-28 Cherokee",
    description: "Aeronave versátil para entrenamiento avanzado y viajes.",
    image: "/images/piper.jpg",
    specs: {
      seats: "4 personas",
      engine: "Lycoming O-360 (180 HP)",
      cruiseSpeed: "124 nudos (230 km/h)",
      range: "465 millas náuticas (861 km)",
      yearManufactured: "1990",
    },
    details:
      "El Piper Cherokee es una aeronave polivalente que utilizamos tanto para la formación de pilotos comerciales como para viajes de media distancia. Su cabina espaciosa, estabilidad y rendimiento lo hacen ideal para vuelos de navegación y entrenamiento instrumental.",
  },
  {
    id: "tecnam",
    name: "Tecnam P2002 Sierra",
    description: "Avión moderno de última generación para formación y recreación.",
    image: "/images/tecnam.jpg",
    specs: {
      seats: "2 personas",
      engine: "Rotax 912 ULS (100 HP)",
      cruiseSpeed: "120 nudos (222 km/h)",
      range: "396 millas náuticas (734 km)",
      yearManufactured: "2018",
    },
    details:
      "El Tecnam P2002 Sierra representa la nueva generación de aeronaves de entrenamiento. Con su construcción en metal, aviónica digital y motor Rotax de bajo consumo, ofrece una experiencia de vuelo moderna y eficiente. Es perfecto para pilotos que buscan familiarizarse con las tecnologías actuales.",
  },
]

export default function FleetSection() {
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
            Nuestra Flota
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-600 max-w-2xl mx-auto"
          >
            Contamos con aeronaves modernas y perfectamente mantenidas para la formación de pilotos y paseos aéreos.
          </motion.p>
        </div>

        <Tabs defaultValue="cessna152" className="max-w-5xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 mb-12">
            {aircrafts.map((aircraft) => (
              <TabsTrigger key={aircraft.id} value={aircraft.id}>
                {aircraft.name}
              </TabsTrigger>
            ))}
          </TabsList>

          {aircrafts.map((aircraft) => (
            <TabsContent key={aircraft.id} value={aircraft.id} className="mt-6">
              <div className="grid md:grid-cols-2 gap-8 items-start">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden"
                >
                  <Image
                    src={aircraft.image || "/placeholder.svg?height=400&width=600&text=Aeronave"}
                    alt={aircraft.name}
                    fill
                    className="object-cover"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-3xl font-bold mb-3">{aircraft.name}</h2>
                  <p className="text-gray-600 mb-6">{aircraft.description}</p>

                  <Card className="mb-6">
                    <CardHeader>
                      <CardTitle className="text-xl">Especificaciones</CardTitle>
                      <CardDescription>Características técnicas de la aeronave</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        <li className="flex items-center gap-3">
                          <Users className="text-blue-500" size={18} />
                          <span className="text-gray-700">Capacidad: {aircraft.specs.seats}</span>
                        </li>
                        <li className="flex items-center gap-3">
                          <Info className="text-blue-500" size={18} />
                          <span className="text-gray-700">Motor: {aircraft.specs.engine}</span>
                        </li>
                        <li className="flex items-center gap-3">
                          <Gauge className="text-blue-500" size={18} />
                          <span className="text-gray-700">Velocidad crucero: {aircraft.specs.cruiseSpeed}</span>
                        </li>
                        <li className="flex items-center gap-3">
                          <Ruler className="text-blue-500" size={18} />
                          <span className="text-gray-700">Alcance: {aircraft.specs.range}</span>
                        </li>
                        <li className="flex items-center gap-3">
                          <Calendar className="text-blue-500" size={18} />
                          <span className="text-gray-700">Año: {aircraft.specs.yearManufactured}</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <div>
                    <h3 className="text-xl font-semibold mb-3">Detalles</h3>
                    <p className="text-gray-600">{aircraft.details}</p>
                  </div>
                </motion.div>
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <div className="mt-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-gray-50 p-8 rounded-xl max-w-3xl mx-auto"
          >
            <h3 className="text-2xl font-bold mb-4">Mantenimiento y Seguridad</h3>
            <p className="text-gray-600">
              Todas nuestras aeronaves cuentan con un riguroso programa de mantenimiento supervisado por técnicos
              certificados. Cumplimos con todas las normativas de la ANAC (Administración Nacional de Aviación Civil) y
              priorizamos la seguridad en cada aspecto de nuestra operación.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

