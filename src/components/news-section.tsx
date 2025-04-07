"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, ChevronRight, ArrowRight, Share2, BookmarkPlus } from "lucide-react"
import Link from "next/link"

// Datos de las noticias
const news = [
  {
    id: 1,
    title: "¡Elevamos la categoría de nuestro CIAC!",
    date: "15 de Abril, 2024",
    excerpt:
      "Luego de mucho trabajo logramos elevar la categoría de nuestro Centro de Instrucción de Aeronáutica Civil...",
    content: `Terminando el día de ayer recibimos una gran noticia la cual queremos compartir. Luego de mucho trabajo logramos elevar la categoría de nuestro CIAC (centro de instrucción de aeronáutica civil), lo cual nos habilita a brindar capacitación y solicitar exámenes para rendir las licencias de:
    
    ✈️ Piloto Comercial de Avión
    ✈️ Piloto Privado de Avión
    ✈️ Habilitación al vuelo Por Instrumentos
    ✈️ Habilitación al vuelo nocturno
    ✈️ Instructor de Vuelo de Avión
    
    Te esperamos en el club para comenzar con tu formación profesional! 🧑‍✈️👩‍✈️✈️`,
    image: "/images/news.png",
    featured: true,
  },
  // Aquí se pueden agregar más noticias en el futuro
]

export default function NewsSection() {
  const [expandedNews, setExpandedNews] = useState<number | null>(null)

  const toggleNewsContent = (newsId: number) => {
    if (expandedNews === newsId) {
      setExpandedNews(null)
    } else {
      setExpandedNews(newsId)
    }
  }

  // Variantes de animación reutilizables
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="noticias" className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Encabezado de sección */}
        <div className="text-center mb-10 md:mb-16">
          <motion.span
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5 }}
            variants={fadeInUp}
            viewport={{ once: true }}
            className="inline-block px-4 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4"
          >
            Últimas Novedades
          </motion.span>

          <motion.h2
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5, delay: 0.1 }}
            variants={fadeInUp}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800"
          >
            Noticias del Aeroclub
          </motion.h2>

          <motion.p
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5, delay: 0.2 }}
            variants={fadeInUp}
            viewport={{ once: true }}
            className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto"
          >
            Mantente al día con las últimas novedades y logros de nuestro aeroclub
          </motion.p>
        </div>

        {/* Noticias destacadas */}
        <div className="mb-10 md:mb-16">
          {news
            .filter((item) => item.featured)
            .map((featuredNews) => (
              <motion.div
                key={featuredNews.id}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.5 }}
                variants={fadeInUp}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex flex-col md:flex-row">
                  <div className="relative w-full md:w-1/2 h-64 sm:h-72 md:h-auto min-h-[250px]">
                    <Image
                      src={featuredNews.image || "/placeholder.svg"}
                      alt={featuredNews.title}
                      fill
                      className="object-cover md:object-contain p-2 sm:p-4"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div className="w-full md:w-1/2 p-5 sm:p-6 md:p-8 flex flex-col justify-between">
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-3 sm:mb-4">
                        <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                          Destacado
                        </span>
                        <div className="flex items-center text-gray-500 text-xs sm:text-sm">
                          <Calendar className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                          {featuredNews.date}
                        </div>
                      </div>
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4">{featuredNews.title}</h3>
                      <div className="text-gray-600 text-sm sm:text-base mb-4 sm:mb-6 whitespace-pre-line">
                        {expandedNews === featuredNews.id ? featuredNews.content : `${featuredNews.excerpt}`}
                      </div>
                    </div>
                    <div className="flex flex-col xs:flex-row gap-3 mt-2 sm:mt-4">
                      <Button
                        onClick={() => toggleNewsContent(featuredNews.id)}
                        variant="outline"
                        className="flex-1 flex items-center justify-center"
                      >
                        {expandedNews === featuredNews.id ? "Leer menos" : "Leer más"}
                        <ChevronRight
                          className={`ml-1 h-3 w-3 sm:h-4 sm:w-4 transition-transform ${
                            expandedNews === featuredNews.id ? "rotate-90" : ""
                          }`}
                        />
                      </Button>
                      <div className="flex gap-2 justify-center xs:justify-start">
                        <Button variant="outline" size="icon" className="rounded-full h-9 w-9">
                          <Share2 className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="icon" className="rounded-full h-9 w-9">
                          <BookmarkPlus className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
        </div>

        {/* Más noticias (para cuando haya más) */}
        {news.length > 1 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12">
            {news
              .filter((item) => !item.featured)
              .map((newsItem) => (
                <motion.div
                  key={newsItem.id}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ duration: 0.5 }}
                  variants={fadeInUp}
                  viewport={{ once: true }}
                  className="h-full"
                >
                  <Card className="h-full flex flex-col hover:shadow-md transition-shadow duration-300">
                    <div className="relative w-full h-40 sm:h-48">
                      <Image
                        src={newsItem.image || "/placeholder.svg"}
                        alt={newsItem.title}
                        fill
                        className="object-cover rounded-t-lg"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>
                    <CardHeader className="pb-2">
                      <div className="flex items-center text-gray-500 text-xs mb-2">
                        <Calendar className="w-3 h-3 mr-1" />
                        {newsItem.date}
                      </div>
                      <CardTitle className="text-lg sm:text-xl">{newsItem.title}</CardTitle>
                      <CardDescription className="text-xs sm:text-sm line-clamp-2">{newsItem.excerpt}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      {expandedNews === newsItem.id && (
                        <div className="text-gray-600 text-sm sm:text-base whitespace-pre-line">{newsItem.content}</div>
                      )}
                    </CardContent>
                    <CardFooter className="pt-0">
                      <Button 
                        onClick={() => toggleNewsContent(newsItem.id)} 
                        variant="outline" 
                        className="w-full text-sm"
                        size="sm"
                      >
                        {expandedNews === newsItem.id ? "Leer menos" : "Leer más"}
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
          </div>
        )}

        {/* CTA para ver todas las noticias (para cuando haya más) */}
        {news.length > 3 && (
          <motion.div 
            className="text-center"
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5 }}
            variants={fadeInUp}
            viewport={{ once: true }}
          >
            <Button className="bg-blue-600 hover:bg-blue-700 transition-colors duration-300" asChild>
              <Link href="/noticias" className="flex items-center">
                Ver todas las noticias
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  )
}