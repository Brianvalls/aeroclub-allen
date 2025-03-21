"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

const slides = [
  {
    id: 1,
    image: "/images/Carousel1.jpg",
    title: "Nuestra Historia",
    description:
      "Fundado en 1950, el Aeroclub Allen ha sido pionero en la formación de pilotos en la región, contribuyendo al desarrollo de la aviación civil en Argentina.",
  },
  {
    id: 2,
    image: "/images/Carousel2.jpg",
    title: "Nuestras Instalaciones",
    description:
      "Contamos con modernas instalaciones, hangar propio, aulas equipadas con tecnología de punta y una flota de aeronaves en excelente estado.",
  },
  {
    id: 3,
    image: "/images/Carousel3.jpg",
    title: "Nuestro Equipo",
    description:
      "Nuestro staff está compuesto por instructores con amplia experiencia en vuelo y enseñanza, comprometidos con la excelencia y la seguridad.",
  },
]

export default function AboutUs() {
  const [current, setCurrent] = useState(0)
  const [isAutoplay, setIsAutoplay] = useState(true)
  const autoplayRef = useRef<NodeJS.Timeout | null>(null)

  const nextSlide = () => {
    setCurrent(current === slides.length - 1 ? 0 : current + 1)
  }

  const prevSlide = () => {
    setCurrent(current === 0 ? slides.length - 1 : current - 1)
  }

  const goToSlide = (index: number) => {
    setCurrent(index)
  }

  useEffect(() => {
    if (isAutoplay) {
      autoplayRef.current = setInterval(() => {
        nextSlide()
      }, 5000)
    }

    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current)
      }
    }
  }, [current, isAutoplay])

  const handleMouseEnter = () => {
    setIsAutoplay(false)
  }

  const handleMouseLeave = () => {
    setIsAutoplay(true)
  }

  return (
    <section id="nosotros" className="py-20 bg-white">
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
            Más de 70 años formando pilotos y promoviendo la aviación civil en la Patagonia Argentina.
          </motion.p>
        </div>

        <div
          className="relative max-w-5xl mx-auto h-[500px] rounded-xl overflow-hidden"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0"
            >
              <Image
                src={slides[current].image || "/placeholder.svg"}
                alt={slides[current].title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-8">
                <h3 className="text-2xl font-bold text-white mb-2">{slides[current].title}</h3>
                <p className="text-gray-200 max-w-2xl">{slides[current].description}</p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <button
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-2 backdrop-blur-sm transition-colors"
            onClick={prevSlide}
          >
            <ChevronLeft className="text-white" size={24} />
          </button>
          <button
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-2 backdrop-blur-sm transition-colors"
            onClick={nextSlide}
          >
            <ChevronRight className="text-white" size={24} />
          </button>

          {/* Dots */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${current === index ? "bg-white" : "bg-white/50"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

