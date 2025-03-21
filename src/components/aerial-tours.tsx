"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock, Users, MapPin } from "lucide-react"
import Image from "next/image"

const tours = [
  {
    id: 1,
    title: "Tour Panorámico",
    description: "Sobrevuela la ciudad de Allen y sus alrededores, disfrutando de vistas panorámicas impresionantes.",
    image: "/images/Tour2.jpg",
    duration: "30 minutos",
    capacity: "3 personas",
    location: "Allen, Río Negro",
    price: "$15.000",
  },
  {
    id: 2,
    title: "Valle y Río Negro",
    description: "Recorre el Valle del Río Negro, observando los viñedos, chacras y el serpenteante río desde el aire.",
    image: "/images/Tour1.jpg",
    duration: "45 minutos",
    capacity: "3 personas",
    location: "Valle Río Negro",
    price: "$20.000",
  },
  {
    id: 3,
    title: "Aventura Patagónica",
    description:
      "Vuela sobre los impresionantes paisajes patagónicos, con vistas a la cordillera y los lagos de la región.",
    image: "/images/Tour3.jpg",
    duration: "60 minutos",
    capacity: "2 personas",
    location: "Región Patagónica",
    price: "$30.000",
  },
]

export default function AerialTours() {
  return (
    <section id="paseos" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Paseos Aéreos
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-600 max-w-2xl mx-auto"
          >
            Vive la experiencia de volar y disfruta de vistas espectaculares con nuestros paseos aéreos.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tours.map((tour, index) => (
            <motion.div
              key={tour.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden h-full flex flex-col">
                <div className="relative h-48">
                  <Image src={tour.image || "/placeholder.svg"} alt={tour.title} fill className="object-cover" />
                </div>
                <CardHeader>
                  <CardTitle>{tour.title}</CardTitle>
                  <CardDescription>{tour.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="grid grid-cols-1 gap-2">
                    <div className="flex items-center gap-2">
                      <Clock className="text-blue-500" size={16} />
                      <span className="text-sm text-gray-600 dark:text-gray-300">{tour.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="text-blue-500" size={16} />
                      <span className="text-sm text-gray-600 dark:text-gray-300">{tour.capacity}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="text-blue-500" size={16} />
                      <span className="text-sm text-gray-600 dark:text-gray-300">{tour.location}</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between items-center">
                  <span className="text-lg font-bold">{tour.price}</span>
                  <Button>Reservar</Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

