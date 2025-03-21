"use client"

import { motion } from "framer-motion"
import { Users, GraduationCap, Plane } from "lucide-react"

const stats = [
  {
    id: 1,
    value: "70+",
    label: "Años de experiencia",
    icon: GraduationCap,
    color: "bg-blue-500",
  },
  {
    id: 2,
    value: "500+",
    label: "Pilotos formados",
    icon: Users,
    color: "bg-green-500",
  },
  {
    id: 3,
    value: "10.000+",
    label: "Horas de vuelo",
    icon: Plane,
    color: "bg-amber-500",
  },
]

export default function Stats() {
  return (
    <section className="py-16 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6 flex items-center gap-4 shadow-sm"
            >
              <div className={`${stat.color} rounded-full p-3 text-white`}>
                <stat.icon size={24} />
              </div>
              <div>
                <h3 className="text-3xl font-bold">{stat.value}</h3>
                <p className="text-gray-600 dark:text-gray-400">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

