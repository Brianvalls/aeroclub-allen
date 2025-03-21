"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Clock, Calendar } from "lucide-react"
import Image from "next/image"

const careers = [
  {
    id: "privado",
    title: "Piloto Privado",
    description: "Aprende a volar aeronaves ligeras para uso recreativo y personal.",
    image: "/images/PPA.jpg",
    duration: "6 meses",
    schedule: "Flexible",
    requirements: ["Ser mayor de 16 años", "Certificado médico aeronáutico", "Estudios secundarios completos"],
    features: [
      "40 horas de vuelo",
      "Clases teóricas y prácticas",
      "Instructores certificados",
      "Material de estudio incluido",
    ],
  },
  {
    id: "comercial",
    title: "Piloto Comercial",
    description: "Formación profesional para pilotar aeronaves comerciales y trabajar en la industria aeronáutica.",
    image: "/images/piloto-comercial.jpg",
    duration: "12 meses",
    schedule: "Lunes a viernes",
    requirements: [
      "Ser mayor de 18 años",
      "Certificado médico aeronáutico",
      "Licencia de Piloto Privado",
      "Estudios secundarios completos",
    ],
    features: [
      "200 horas de vuelo",
      "Simulador de vuelo",
      "Prácticas en diferentes aeronaves",
      "Preparación para exámenes ANAC",
    ],
  },
]

export default function Careers() {
  const [activeTab, setActiveTab] = useState("privado")

  return (
    <section id="carreras" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Nuestras Carreras
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-600 max-w-2xl mx-auto"
          >
            Formamos pilotos con los más altos estándares de calidad y seguridad. Nuestros cursos están avalados por la
            Administración Nacional de Aviación Civil (ANAC).
          </motion.p>
        </div>

        <Tabs defaultValue="privado" value={activeTab} onValueChange={setActiveTab} className="max-w-5xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 mb-12">
            <TabsTrigger value="privado">Piloto Privado</TabsTrigger>
            <TabsTrigger value="comercial">Piloto Comercial</TabsTrigger>
          </TabsList>

          {careers.map((career) => (
            <TabsContent key={career.id} value={career.id} className="mt-6">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden"
                >
                  <Image src={career.image || "/placeholder.svg"} alt={career.title} fill className="object-cover" />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h3 className="text-2xl font-bold mb-4">{career.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">{career.description}</p>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center gap-2">
                      <Clock className="text-blue-500" size={20} />
                      <span className="text-gray-600 dark:text-gray-300">Duración: {career.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="text-blue-500" size={20} />
                      <span className="text-gray-600 dark:text-gray-300">Horario: {career.schedule}</span>
                    </div>
                  </div>

                  <h4 className="font-semibold mb-2">Requisitos:</h4>
                  <ul className="list-disc list-inside mb-6 text-gray-600 dark:text-gray-300">
                    {career.requirements.map((req, index) => (
                      <li key={index}>{req}</li>
                    ))}
                  </ul>

                  <h4 className="font-semibold mb-2">Características:</h4>
                  <ul className="list-disc list-inside mb-6 text-gray-600 dark:text-gray-300">
                    {career.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>

                  <Button size="lg" className="mt-4">
                    Solicitar información
                  </Button>
                </motion.div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}

