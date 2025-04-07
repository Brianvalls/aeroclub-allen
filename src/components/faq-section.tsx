"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

const faqs = [
  {
    question: "¿Qué requisitos necesito para comenzar a volar?",
    answer:
      "Para comenzar a volar necesitas tener 16 años o más, un certificado médico aeronáutico y estudios secundarios completos. Para la licencia de piloto privado, deberás completar un curso teórico y práctico que incluye un mínimo de 40 horas de vuelo.",
  },
  {
    question: "¿Cuánto cuesta aprender a volar?",
    answer:
      "El costo de aprender a volar varía según el tipo de licencia que desees obtener. La formación para piloto privado incluye gastos de instrucción teórica, horas de vuelo, material de estudio y tasas de examen. Te recomendamos contactarnos para obtener información actualizada sobre los costos específicos.",
  },
  {
    question: "¿Cuánto tiempo lleva obtener una licencia de piloto?",
    answer:
      "El tiempo para obtener una licencia de piloto privado es aproximadamente de 6 meses, mientras que para piloto comercial se requiere alrededor de 12 meses. Esto puede variar según tu disponibilidad para las clases teóricas y prácticas, así como las condiciones meteorológicas que afectan los vuelos de entrenamiento.",
  },
  {
    question: "¿Puedo realizar un vuelo de prueba antes de inscribirme?",
    answer:
      "¡Sí! Ofrecemos vuelos de bautismo que te permiten experimentar la sensación de volar y conocer nuestras aeronaves antes de comprometerte con un curso completo. Estos vuelos son una excelente manera de determinar si la aviación es para ti.",
  },
  {
    question: "¿Qué tipos de aeronaves utilizan para la instrucción?",
    answer:
      "Utilizamos principalmente el Cessna 152 para la instrucción básica, una aeronave biplaza ideal para el entrenamiento inicial. Para etapas más avanzadas y entrenamiento comercial, contamos con el Piper PA-28 Cherokee. Todas nuestras aeronaves están certificadas y mantenidas según los estándares de la ANAC.",
  },
  {
    question: "¿Ofrecen financiamiento para los cursos?",
    answer:
      "Sí, ofrecemos planes de financiamiento flexibles que te permiten distribuir el costo de tu formación en cuotas mensuales. También contamos con descuentos para estudiantes y promociones especiales en determinadas épocas del año.",
  },
  {
    question: "¿Qué incluyen los paseos aéreos?",
    answer:
      "Nuestros paseos aéreos incluyen un briefing previo al vuelo, el vuelo panorámico con la duración especificada, y un certificado de vuelo como recuerdo. Durante el paseo, podrás disfrutar de vistas espectaculares y, si las condiciones lo permiten, experimentar brevemente los controles de la aeronave bajo la supervisión del piloto.",
  },
]

const FAQItem = ({ faq, index }: { faq: { question: string; answer: string }; index: number }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="border-b border-gray-200 last:border-b-0"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full py-4 md:py-5 px-3 md:px-4 text-left focus:outline-none"
      >
        <h3 className="text-base md:text-lg font-medium text-blue-600 pr-2">{faq.question}</h3>
        <ChevronDown
          className={cn(
            "h-5 w-5 text-blue-500 transition-transform duration-300 flex-shrink-0",
            isOpen && "transform rotate-180",
          )}
        />
      </button>
      <motion.div
        initial={false}
        animate={{
          height: isOpen ? "auto" : 0,
          opacity: isOpen ? 1 : 0,
          marginBottom: isOpen ? 16 : 0,
        }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className="px-3 md:px-4 pb-4 md:pb-5 text-gray-600 text-sm md:text-base">{faq.answer}</div>
      </motion.div>
    </motion.div>
  )
}

export default function FAQSection() {
  return (
    <section id="faq" className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-blue-600 mb-8"
          >
            Preguntas Frecuentes
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-700 max-w-3xl mx-auto text-lg md:text-xl lg:text-2xl leading-relaxed"
          >
            Encuentra respuestas a las dudas más comunes sobre nuestros cursos y servicios
          </motion.p>
        </div>

        <div className="max-w-3xl mx-auto bg-gray-50 rounded-xl shadow-sm overflow-hidden">
          {faqs.map((faq, index) => (
            <FAQItem key={index} faq={faq} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

