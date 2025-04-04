"use client"
import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const aviationItems = [
  {
    id: 1,
    title: "Nuestra Flota",
    description: "Aviones modernos y bien mantenidos para tu entrenamiento y vuelos recreativos.",
    image: "/images/hero2.jpg",
    link: "/flota",
  },
  {
    id: 2,
    title: "Instalaciones",
    description: "Hangares, aulas y simuladores equipados con la última tecnología para tu formación.",
    image: "/images/hero2.jpg",
    link: "/#nosotros",
  },
  {
    id: 3,
    title: "Instructores",
    description: "Profesionales con miles de horas de experiencia en formación de pilotos.",
    image: "/images/hero2.jpg",
    link: "/#carreras",
  },
  {
    id: 4,
    title: "Vistas Aéreas",
    description: "Disfruta de los paisajes más impresionantes de la Patagonia desde el aire.",
    image: "/images/hero2.jpg",
    link: "/#paseos",
  },
]

const AviationCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState<number>(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null)

  // Configuración de auto-play
  const startAutoPlay = () => {
    if (autoPlayRef.current) clearInterval(autoPlayRef.current)
    autoPlayRef.current = setInterval(() => {
      handleNext()
    }, 5000)
  }

  useEffect(() => {
    if (isAutoPlaying) {
      startAutoPlay()
    }
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current)
    }
  }, [isAutoPlaying, currentIndex])

  // Manejo de navegación
  const handleNext = () => {
    setDirection(1)
    setCurrentIndex((prev) => (prev + 1) % aviationItems.length)
    resetAutoPlay()
  }

  const handlePrev = () => {
    setDirection(-1)
    setCurrentIndex((prev) => (prev - 1 + aviationItems.length) % aviationItems.length)
    resetAutoPlay()
  }

  const handleDotClick = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1)
    setCurrentIndex(index)
    resetAutoPlay()
  }

  const resetAutoPlay = () => {
    setIsAutoPlaying(false)
    if (autoPlayRef.current) clearInterval(autoPlayRef.current)
    setTimeout(() => {
      setIsAutoPlaying(true)
    }, 8000)
  }

  // Variantes de animación
  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0.5,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.5 }
      }
    },
    exit: (direction: number) => ({
      x: direction < 0 ? "100%" : "-100%",
      opacity: 0,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.3 }
      }
    }),
  }

  const contentVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.3,
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <section id="nosotros" className="w-full py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold mb-3"
          >
            Vive la Experiencia de Volar
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative inline-block"
          >
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Descubre lo que hace único a nuestro aeroclub a través de imágenes inolvidables
            </p>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-blue-500 rounded-full"></div>
          </motion.div>
        </div>

        {/* Contenedor principal del carrusel */}
        <div className="relative max-w-5xl mx-auto">
          {/* Flecha izquierda externa */}
          <motion.button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-12 bg-white/80 hover:bg-white backdrop-blur-sm rounded-full p-3 text-gray-800 z-10 shadow-lg"
            aria-label="Anterior"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronLeft size={28} />
          </motion.button>

          {/* Carrusel */}
          <div className="relative h-[400px] md:h-[500px] rounded-xl overflow-hidden shadow-xl">
            <AnimatePresence initial={false} custom={direction} mode="popLayout">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="absolute inset-0 w-full h-full"
              >
                <Image
                  src={aviationItems[currentIndex].image || "/placeholder.svg"}
                  alt={aviationItems[currentIndex].title}
                  fill
                  className="object-cover"
                  priority={true}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                <motion.div
                  className="absolute bottom-0 left-0 p-8 md:p-12 w-full"
                  variants={contentVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-3">
                    {aviationItems[currentIndex].title}
                  </h3>
                  <p className="text-lg md:text-xl text-gray-200 mb-6 max-w-2xl">
                    {aviationItems[currentIndex].description}
                  </p>
                  <Button
                    variant="outline"
                    className="bg-transparent border-white text-white hover:bg-white/20 transition-colors duration-300"
                  >
                    Explorar
                  </Button>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Flecha derecha externa */}
          <motion.button
            onClick={handleNext}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-12 bg-white/80 hover:bg-white backdrop-blur-sm rounded-full p-3 text-gray-800 z-10 shadow-lg"
            aria-label="Siguiente"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronRight size={28} />
          </motion.button>

          {/* Indicadores circulares */}
          <div className="flex justify-center mt-8">
            <div className="flex space-x-3 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
              {aviationItems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={cn(
                    "w-3 h-3 rounded-full transition-all duration-300 relative",
                    currentIndex === index ? "bg-blue-600" : "bg-gray-300 hover:bg-gray-400"
                  )}
                  aria-label={`Ir a la diapositiva ${index + 1}`}
                >
                  {currentIndex === index && (
                    <motion.span
                      className="absolute inset-0 bg-blue-600 rounded-full"
                      layoutId="activeDot"
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AviationCarousel