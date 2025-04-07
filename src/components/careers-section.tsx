"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import {
  Clock,
  Calendar,
  BookOpen,
  Award,
  Briefcase,
  CheckCircle2,
  GraduationCap,
  FileText,
  Users,
  Plane,
  ArrowRight,
  CreditCard,
  BadgeCheck,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"

const careers = [
  {
    id: "privado",
    title: "Piloto Privado de Avión",
    subtitle: "Tu primer paso en el mundo de la aviación",
    description:
      "La licencia de Piloto Privado de Avión te permite volar aeronaves monomotores y multimotores de hasta 5.700 kg de peso máximo de despegue, en condiciones visuales, sin fines comerciales.",
    image: "/images/piloto-privado.jpg",
    duration: "6-8 meses",
    schedule: "Flexible",
    minAge: "17 años",
    medicalCert: "Clase 2",
    education: "Secundario completo",
    flightHours: "40 horas",
    theory: "Presencial y virtual",
    cost: "Consultar valores actualizados",
    subjects: [
      "Aerodinámica",
      "Meteorología",
      "Navegación",
      "Reglamento de vuelo",
      "Conocimientos generales de la aeronave",
      "Factores humanos",
      "Comunicaciones",
      "Procedimientos operacionales",
    ],
    benefits: [
      "Volar por placer y recreación",
      "Realizar viajes personales",
      "Base para licencias profesionales",
      "Experiencia única e inolvidable",
    ],
    stages: [
      {
        name: "Fase teórica",
        description: "Clases presenciales y material de estudio para adquirir los conocimientos necesarios.",
      },
      {
        name: "Fase práctica",
        description: "Instrucción en vuelo con instructores certificados en aeronaves modernas.",
      },
      {
        name: "Exámenes",
        description: "Evaluaciones teóricas y prácticas ante la Autoridad Aeronáutica (ANAC).",
      },
    ],
    testimonials: [
      {
        name: "Martín Rodríguez",
        text: "Obtener mi licencia de piloto privado fue una experiencia transformadora. Los instructores del Aeroclub Allen son excelentes profesionales.",
        role: "Piloto Privado",
      },
      {
        name: "Facundo Preiss",
        text: "Tienen muy buenos aviones.",
        role: "Piloto Privado",
      },
    ],
  },
  {
    id: "comercial",
    title: "Piloto Comercial de Avión",
    subtitle: "Tu carrera profesional en la aviación",
    description:
      "La licencia de Piloto Comercial de Avión te habilita para actuar como piloto al mando o copiloto en servicios de transporte aéreo comercial, con remuneración económica.",
    image: "/images/piloto-comercial.jpg",
    duration: "12-18 meses",
    schedule: "Lunes a viernes",
    minAge: "18 años",
    medicalCert: "Clase 1",
    education: "Secundario completo",
    flightHours: "200 horas",
    theory: "Presencial y virtual",
    cost: "Consultar valores actualizados",
    prerequisites: "Licencia de Piloto Privado de Avión",
    subjects: [
      "Aerodinámica avanzada",
      "Meteorología aplicada",
      "Navegación instrumental",
      "Performance y planificación de vuelo",
      "Sistemas de aeronaves",
      "Factores humanos avanzados",
      "Procedimientos operacionales comerciales",
      "Legislación aérea",
    ],
    benefits: [
      "Trabajar como piloto profesional",
      "Acceder a empresas de transporte aéreo",
      "Realizar trabajos aéreos especiales",
      "Base para instructor de vuelo",
    ],
    stages: [
      {
        name: "Fase teórica avanzada",
        description: "Formación teórica intensiva con profesores especializados en cada materia.",
      },
      {
        name: "Fase práctica extendida",
        description: "Instrucción en vuelo que incluye navegación, vuelo nocturno y maniobras avanzadas.",
      },
      {
        name: "Simulador",
        description: "Entrenamiento en simulador para situaciones especiales y emergencias.",
      },
      {
        name: "Exámenes ANAC",
        description: "Evaluaciones teóricas y prácticas ante la Autoridad Aeronáutica.",
      },
    ],
    testimonials: [
      {
        name: "Laura Méndez",
        text: "La formación como piloto comercial en el Aeroclub Allen me abrió las puertas a mi carrera profesional. Hoy trabajo en una aerolínea gracias a la excelente preparación que recibí.",
        role: "Piloto Comercial",
      },
      {
        name: "Rodrigo Sepulveda",
        text: "El mejor aeroclub!.",
        role: "Piloto Comercial",
      },
    ],
  },
]

const CareerInfoCard = ({
  icon: Icon,
  title,
  value,
  className,
}: {
  icon: any
  title: string
  value: string
  className?: string
}) => (
  <div className={cn("flex items-start gap-3 p-4 rounded-lg bg-white shadow-sm border border-gray-100", className)}>
    <div className="bg-blue-50 p-2 rounded-md">
      <Icon className="text-blue-600" size={20} />
    </div>
    <div>
      <h4 className="text-sm font-medium text-gray-500">{title}</h4>
      <p className="text-gray-900 font-medium">{value}</p>
    </div>
  </div>
)

const TestimonialCard = ({ testimonial }: { testimonial: any }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
    className="bg-white p-6 rounded-xl shadow-md border border-gray-100"
  >
    <div className="flex items-center mb-4">
      <div className="bg-blue-100 text-blue-600 p-2 rounded-full">
        <Users size={20} />
      </div>
      <div className="ml-3">
        <h4 className="font-semibold">{testimonial.name}</h4>
        <p className="text-sm text-gray-500">{testimonial.role}</p>
      </div>
    </div>
    <p className="text-gray-600 italic">"{testimonial.text}"</p>
  </motion.div>
)

const StageCard = ({ stage, index }: { stage: any; index: number }) => (
  <motion.div
    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true }}
    className="relative flex items-start gap-4"
  >
    <div className="flex flex-col items-center">
      <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
        {index + 1}
      </div>
      {index < 3 && <div className="w-1 h-full bg-blue-200 mt-2"></div>}
    </div>
    <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100 flex-1 mb-6">
      <h4 className="font-semibold text-lg mb-2">{stage.name}</h4>
      <p className="text-gray-600">{stage.description}</p>
    </div>
  </motion.div>
)

export default function CareersSection() {
  const [activeTab, setActiveTab] = useState("privado")

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4"
          >
            Formación Aeronáutica
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800"
          >
            Nuestras Carreras de Piloto
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-gray-600 max-w-3xl mx-auto"
          >
            Formamos pilotos con los más altos estándares de calidad y seguridad. Nuestros cursos están avalados por la
            Administración Nacional de Aviación Civil (ANAC) y cuentan con instructores de amplia experiencia.
          </motion.p>
        </div>

        {/* Por qué elegirnos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto mb-16 bg-white rounded-xl shadow-md overflow-hidden"
        >
          <div className="grid md:grid-cols-2 gap-0">
            <div className="relative h-[300px] md:h-auto">
              <Image src="/images/hero122.jpg" alt="Instalaciones del Aeroclub Allen" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-transparent flex items-center justify-center">
                <h3 className="text-3xl font-bold text-white px-6 text-center">¿Por qué elegirnos?</h3>
              </div>
            </div>
            <div className="p-8">
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <BadgeCheck className="text-blue-600 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="font-semibold">Instructores certificados</h4>
                    <p className="text-gray-600 text-sm">
                      Profesionales con miles de horas de experiencia en formación y vuelo.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <BadgeCheck className="text-blue-600 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="font-semibold">Flota moderna y mantenida</h4>
                    <p className="text-gray-600 text-sm">
                      Aeronaves en excelente estado con rigurosos controles de mantenimiento.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <BadgeCheck className="text-blue-600 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="font-semibold">Formación personalizada</h4>
                    <p className="text-gray-600 text-sm">
                      Adaptamos el ritmo de aprendizaje a tus necesidades y disponibilidad.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <BadgeCheck className="text-blue-600 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="font-semibold">Instalaciones de primer nivel</h4>
                    <p className="text-gray-600 text-sm">
                      Aulas modernas, simuladores y todas las comodidades para tu formación.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Tabs de carreras */}
        <Tabs defaultValue="privado" value={activeTab} onValueChange={setActiveTab} className="max-w-6xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 mb-12 p-1 bg-gray-100 rounded-lg">
            <TabsTrigger
              value="privado"
              className="data-[state=active]:bg-white data-[state=active]:text-blue-600 data-[state=active]:shadow-md rounded-md py-3"
            >
              <Plane className="mr-2 h-4 w-4" />
              Piloto Privado
            </TabsTrigger>
            <TabsTrigger
              value="comercial"
              className="data-[state=active]:bg-white data-[state=active]:text-blue-600 data-[state=active]:shadow-md rounded-md py-3"
            >
              <Briefcase className="mr-2 h-4 w-4" />
              Piloto Comercial
            </TabsTrigger>
          </TabsList>

          {careers.map((career) => (
            <TabsContent key={career.id} value={career.id} className="mt-6 animate-in fade-in-50 duration-300">
              {/* Header con imagen */}
              <div className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden mb-12">
  <Image
    src={career.image || "/placeholder.svg"}
    alt={career.title}
    fill
    className="object-cover"
    priority
  />
  {/* Fondo negro con opacidad */}
  <div className="absolute inset-0 bg-black/30"></div>
  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-8">
    <span className="text-blue-300 font-medium mb-2">{career.subtitle}</span>
    <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">{career.title}</h2>
    <p className="text-gray-200 max-w-3xl">{career.description}</p>
  </div>
</div>

              {/* Información principal */}
              <div className="grid md:grid-cols-3 gap-6 mb-12">
                <CareerInfoCard icon={Clock} title="Duración aproximada" value={career.duration} />
                <CareerInfoCard icon={Calendar} title="Horarios" value={career.schedule} />
                <CareerInfoCard icon={GraduationCap} title="Horas de vuelo" value={career.flightHours} />
                <CareerInfoCard icon={Users} title="Edad mínima" value={career.minAge} />
                <CareerInfoCard icon={FileText} title="Certificado médico" value={career.medicalCert} />
                <CareerInfoCard icon={BookOpen} title="Estudios requeridos" value={career.education} />
              </div>

              {/* Requisitos y beneficios */}
              <div className="grid md:grid-cols-2 gap-8 mb-16">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl shadow-sm p-6 border border-gray-100"
                >
                  <h3 className="text-xl font-bold mb-4 flex items-center">
                    <FileText className="mr-2 text-blue-600" size={24} />
                    Materias del curso
                  </h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {career.subjects.map((subject, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <CheckCircle2 className="text-green-500 flex-shrink-0" size={18} />
                        <span className="text-gray-700">{subject}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl shadow-sm p-6 border border-gray-100"
                >
                  <h3 className="text-xl font-bold mb-4 flex items-center">
                    <Award className="mr-2 text-blue-600" size={24} />
                    Beneficios y salidas profesionales
                  </h3>
                  <ul className="space-y-3">
                    {career.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <CheckCircle2 className="text-green-500 flex-shrink-0" size={18} />
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>

              {/* Etapas del curso */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="mb-16"
              >
                <h3 className="text-2xl font-bold mb-8 text-center">Etapas de tu formación</h3>
                <div className="max-w-3xl mx-auto">
                  {career.stages.map((stage, index) => (
                    <StageCard key={index} stage={stage} index={index} />
                  ))}
                </div>
              </motion.div>

              {/* Testimonios */}
              <div className="mb-16">
                <h3 className="text-2xl font-bold mb-8 text-center">Lo que dicen nuestros alumnos</h3>
                <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                  {career.testimonials.map((testimonial, index) => (
                    <TestimonialCard key={index} testimonial={testimonial} />
                  ))}
                </div>
              </div>

              {/* Información de costos */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl p-8 text-white mb-12"
              >
                <div className="flex flex-col md:flex-row items-center justify-between">
                  <div className="mb-6 md:mb-0">
                    <h3 className="text-2xl font-bold mb-2 flex items-center">
                      <CreditCard className="mr-2" size={24} />
                      Información de costos
                    </h3>
                    <p className="text-blue-100 max-w-xl">
                      Ofrecemos planes de financiamiento flexibles y adaptados a tus posibilidades. Consulta por
                      nuestras promociones especiales y descuentos para estudiantes.
                    </p>
                  </div>
                  <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50" asChild>
                    <Link href="#contacto" className="flex items-center">
                      Solicitar información
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </motion.div>

              {/* CTA final */}
              <div className="text-center">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-6" asChild>
                  <Link href="#contacto">Comienza tu carrera como piloto</Link>
                </Button>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}

