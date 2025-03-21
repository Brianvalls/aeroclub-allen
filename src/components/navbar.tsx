"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"

const navItems = [
  { name: "Inicio", href: "/" },
  { name: "Carreras", href: "/#carreras" },
  { name: "Nosotros", href: "/#nosotros" },
  { name: "Paseos Aéreos", href: "/#paseos" },
  {
    name: "Más",
    children: [
      { name: "Flota", href: "/flota" },
      { name: "Eventos", href: "/eventos" },
    ],
  },
  { name: "Contacto", href: "/#contacto" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/images/logo.svg" alt="Aeroclub Allen Logo" width={40} height={40} className="w-10 h-10" />
          <span className={`text-xl font-bold ${scrolled ? "text-blue-600" : "text-white"}`}>Aeroclub Allen</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) =>
            item.children ? (
              <div key={item.name} className="relative">
                <button
                  className={`text-sm font-medium hover:text-blue-500 transition-colors flex items-center gap-1 ${
                    scrolled ? "text-gray-700 dark:text-gray-200" : "text-white"
                  }`}
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                >
                  {item.name}
                  <ChevronDown size={16} />
                </button>
                {dropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 w-40 bg-white dark:bg-gray-800 rounded-md shadow-lg overflow-hidden z-20">
                    {item.children.map((child) => (
                      <Link
                        key={child.name}
                        href={child.href}
                        className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                        onClick={() => setDropdownOpen(false)}
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium hover:text-blue-500 transition-colors ${
                  scrolled ? "text-gray-700 dark:text-gray-200" : "text-white"
                }`}
              >
                {item.name}
              </Link>
            ),
          )}
          <Button>Inscribirse</Button>
        </div>

        {/* Mobile Navigation Toggle */}
        <button
          className="md:hidden text-gray-700 dark:text-gray-200"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-gray-900 shadow-lg"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
              {navItems.map((item) =>
                item.children ? (
                  <div key={item.name} className="flex flex-col gap-2">
                    <button
                      className="text-gray-700 dark:text-gray-200 py-2 hover:text-blue-500 transition-colors flex items-center justify-between"
                      onClick={() => setDropdownOpen(!dropdownOpen)}
                    >
                      {item.name}
                      <ChevronDown
                        size={16}
                        className={dropdownOpen ? "rotate-180 transition-transform" : "transition-transform"}
                      />
                    </button>
                    {dropdownOpen && (
                      <div className="pl-4 flex flex-col gap-2 border-l-2 border-gray-200 dark:border-gray-700">
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            className="text-gray-700 dark:text-gray-200 py-2 hover:text-blue-500 transition-colors"
                            onClick={() => {
                              setDropdownOpen(false)
                              setIsOpen(false)
                            }}
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-gray-700 dark:text-gray-200 py-2 hover:text-blue-500 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ),
              )}
              <Button className="w-full">Inscribirse</Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

