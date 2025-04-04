"use client"

import { motion } from "framer-motion"
import { Plane, BookOpen, Users, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const services = [
  {
    id: 1,
    title: "Formación de Pilotos",
    description: "Programas de formación completos para pilotos privados y comerciales con instructores certificados.",
    icon: BookOpen,
    bgImage: "/images/formacion-pilotos.jpg",
    link: "/carreras",
  },
  {
    id: 2,
    title: "Paseos Aéreos",
    description: "Experimenta la emoción de volar con nuestros paseos panorámicos sobre la región patagónica.",
    icon: Plane,
    bgImage: "/images/paseosAereo.jpg",
    link: "/paseos",
  },
  {
    id: 3,
    title: "Eventos y Exhibiciones",
    description: "Organizamos y participamos en eventos aeronáuticos, exhibiciones y competencias.",
    icon: Award,
    bgImage: "/images/eventos.jpg",
    link: "/eventos",
  },
  {
    id: 4,
    title: "Comunidad Aeronáutica",
    description: "Forma parte de nuestra comunidad de entusiastas y profesionales de la aviación.",
    icon: Users,
    bgImage: "/images/comunidad.jpg",
    link: "/comunidad",
  },
]

export default function ServicesSection() {
  return (
    <section id="servicios" className="py-20 bg-white relative overflow-hidden">
      {/* Curved flight paths background */}
      <div className="absolute inset-0 pointer-events-none">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1200 800"
          preserveAspectRatio="none"
          className="absolute inset-0 opacity-5"
        >
          <path
            d="M0,200 Q300,100 600,300 T1200,200"
            fill="none"
            stroke="#3B82F6"
            strokeWidth="2"
            className="path-animation"
          />
          <path
            d="M0,400 Q300,300 600,500 T1200,400"
            fill="none"
            stroke="#3B82F6"
            strokeWidth="2"
            className="path-animation"
            style={{ animationDelay: "0.5s" }}
          />
          <path
            d="M0,600 Q300,500 600,700 T1200,600"
            fill="none"
            stroke="#3B82F6"
            strokeWidth="2"
            className="path-animation"
            style={{ animationDelay: "1s" }}
          />
        </svg>
      </div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Sobre Nosotros
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-600 max-w-2xl mx-auto"
          >
            Descubre todo lo que el Aeroclub Allen tiene para ofrecerte, desde formación profesional hasta experiencias
            únicas.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="relative rounded-xl overflow-hidden shadow-lg group h-[400px]"
            >
              {/* Background Image */}
              <div className="absolute inset-0 z-0">
                <div
                  className="w-full h-full bg-cover bg-center bg-no-repeat transition-transform duration-500 group-hover:scale-110"
                  style={{
                    backgroundImage: `url('${service.bgImage}')`,
                  }}
                >
<div className="absolute inset-0 bg-gradient-to-t from-gray-800/90 via-gray-800/70 to-gray-800/40 group-hover:from-gray-800/80 group-hover:via-gray-800/60 group-hover:to-gray-800/30 transition-colors duration-300"></div>                </div>
              </div>

              {/* Content */}
              <div className="relative z-10 h-full flex flex-col justify-end p-6">
                <div>
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-3 w-14 h-14 flex items-center justify-center mb-4 group-hover:bg-blue-500 transition-colors duration-300">
                    <service.icon size={24} className="text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                    <p className="text-gray-200 mb-6">{service.description}</p>
                </div>
                <Button
                    asChild
                    variant="outline"
                    className="bg-transparent border-white text-white hover:bg-white/20 transition-colors duration-300"
                >
                    <Link href={service.link}>Ver más</Link>
                </Button>
                </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

