"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Users, GraduationCap, Plane } from "lucide-react"

const stats = [
  {
    id: 1,
    value: "70+",
    label: "Años de experiencia",
    icon: GraduationCap,
    color: "bg-blue-600",
  },
  {
    id: 2,
    value: "500+",
    label: "Pilotos formados",
    icon: Users,
    color: "bg-green-600",
  },
  {
    id: 3,
    value: "10.000+",
    label: "Horas de vuelo",
    icon: Plane,
    color: "bg-amber-600",
  },
]

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background Image with enhanced overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/hero123.jpg')",
            backgroundPosition: "center",
          }}
        >
          {/* Darker overlay for better text contrast */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70"></div>
        </div>
      </div>

      {/* Content with improved text shadow and spacing */}
      <div className="container mx-auto px-4 z-10 text-center mb-16 mt-[-50px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Title with text shadow and mixed font weights */}
          <h1 className="text-4xl md:text-8xl font-bold text-white mb-6 tracking-wider drop-shadow-[0_2px_4px_rgba(0,0,0,0.7)]">
            <span className="font-normal">Aero</span>
            <span className="font-bold">Club</span> <span className="font-bold text-blue-400">Allen</span>
          </h1>

          {/* Subtitle with improved visibility */}
          <p className="text-xl md:text-2xl text-gray-100 mb-10 drop-shadow-[0_2px_3px_rgba(0,0,0,0.8)] max-w-2xl mx-auto">
            Formamos pilotos profesionales y ofrecemos experiencias únicas de vuelo
          </p>

          {/* Buttons with improved styling and responsiveness */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" asChild className="text-base md:text-lg py-6 px-8 font-medium">
              <Link href="#carreras">Nuestras Carreras</Link>
            </Button>
            <Button
              size="lg"
              className="bg-blue-500 hover:bg-blue-600 text-white text-base md:text-lg py-6 px-8 font-medium"
              asChild
            >
              <Link href="#paseos">Paseos Aéreos</Link>
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Stats Section with improved layout and animations */}
      <div className="container mx-auto px-4 z-10 mb-12">
        <div className="grid md:grid-cols-3 gap-6 md:gap-10 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.2 + 0.8,
                ease: "easeOut",
              }}
              whileHover={{
                y: -5,
                transition: { duration: 0.2 },
              }}
              className="bg-white/15 backdrop-blur-sm rounded-xl p-6 flex items-center gap-5 shadow-lg border border-white/20 transform transition-all duration-300"
            >
              <div className={`${stat.color} rounded-full p-3 text-white shadow-md`}>
                <stat.icon size={28} />
              </div>
              <div>
                <h3 className="text-3xl md:text-4xl font-bold text-white drop-shadow-md">{stat.value}</h3>
                <p className="text-gray-200 text-sm md:text-base">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

    </section>
  )
}

