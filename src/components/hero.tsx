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
      <div className="container mx-auto px-4 z-10 text-center mb-8 md:mb-16 mt-[-50px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Title with text shadow and mixed font weights */}
<h1 className="text-5xl md:text-6xl lg:text-8xl font-bold text-white mb-4 md:mb-6 tracking-wider drop-shadow-[0_2px_4px_rgba(0,0,0,0.7)]">
  <span className="font-bold">Aero</span>
  <span className="font-bold">Club</span> <span className="font-bold text-blue-400">Allen</span>
</h1>

          {/* Subtitle with improved visibility */}
          <p className="text-lg md:text-xl lg:text-2xl text-gray-100 mb-6 md:mb-10 drop-shadow-[0_2px_3px_rgba(0,0,0,0.8)] max-w-2xl mx-auto">
            Formamos pilotos profesionales y ofrecemos experiencias únicas de vuelo
          </p>

          {/* Buttons with improved styling and responsiveness */}
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center">
            <Button size="lg" asChild className="text-base md:text-lg py-5 md:py-6 px-6 md:px-8 font-medium">
              <Link href="careers">Nuestras Carreras</Link>
            </Button>
            <Button
              size="lg"
              className="bg-blue-500 hover:bg-blue-600 text-white text-base md:text-lg py-5 md:py-6 px-6 md:px-8 font-medium"
              asChild
            >
              <Link href="paseos">Paseos Aéreos</Link>
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Stats Section with improved layout and animations */}
      <div className="container mx-auto px-4 z-10 mb-8 md:mb-12"></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 lg:gap-10 max-w-5xl mx-auto">
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
              className="bg-white/15 backdrop-blur-sm rounded-xl p-4 md:p-6 flex items-center gap-3 md:gap-5 shadow-lg border border-white/20 transform transition-all duration-300">
            <div className={`${stat.color} rounded-full p-2 md:p-3 text-white shadow-md`}>
              <stat.icon size={24} />
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white drop-shadow-md">{stat.value}</h3>
              <p className="text-gray-200 text-sm md:text-base">{stat.label}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Scroll Indicator with improved visibility */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:block">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
          className="w-8 h-12 border-2 border-white rounded-full flex justify-center shadow-lg"
        >
          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
            className="w-1.5 h-3 bg-white rounded-full mt-2"
          />
        </motion.div>
      </div>
    </section>
  )
}

