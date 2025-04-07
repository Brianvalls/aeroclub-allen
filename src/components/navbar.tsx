"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { ChevronDown, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { name: "Inicio", href: "/" },
  { name: "Carreras", href: "/careers" },
  { name: "Paseos Aéreos", href: "/paseos" },
  { name: "Flota", href: "/flota" },
  { name: "Eventos", href: "/eventos" },
  {
    name: "Más",
    children: [
      { name: "Nosotros", href: "/#nosotros" },
      { name: "Contacto", href: "/#contacto" },
    ],
  },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isHomePage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    // Solo agregar el event listener si estamos en la página principal
    if (isHomePage) {
      window.addEventListener("scroll", handleScroll);
    } else {
      // En otras páginas, la navbar siempre está visible
      setScrolled(true);
    }

    return () => {
      if (isHomePage) {
        window.removeEventListener("scroll", handleScroll);
      }
    };
  }, [isHomePage]);

  // Cerrar menú móvil cuando se cambia de página
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Estilos base para la navbar
  const baseStyles = "fixed top-0 left-0 right-0 z-50 transition-all duration-300";

  // Estilos condicionales
  const navbarStyles = isHomePage
    ? scrolled
      ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-md"
      : "bg-transparent"
    : "bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-md";

  // Estilos para el texto y elementos
  const textColor = (isHomePage && !scrolled) ? "text-white" : "text-gray-700 dark:text-gray-200";
  const hoverColor = (isHomePage && !scrolled) ? "hover:text-gray-200" : "hover:text-blue-500";

  return (
    <header className={`${baseStyles} ${navbarStyles}`}>
      <nav className="w-full py-4 flex items-center justify-between">
        {/* Logo y nombre clickeables */}
        <Link href="/" className="flex items-center gap-4 md:gap-10 pl-4 md:pl-10">
          <Image
            src="/images/logo.png"
            alt="Aeroclub Allen Logo"
            width={40}
            height={40}
            className="w-8 h-8 md:w-10 md:h-10"
          />
          <span className={`text-lg md:text-xl font-bold ${textColor}`}>
            Aeroclub Allen
          </span>
        </Link>

        {/* Botón hamburguesa para móvil */}
        <button 
          className={`md:hidden mr-4 p-2 ${textColor}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Menú de navegación para desktop */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) =>
            item.children ? (
              <div key={item.name} className="relative">
                <button
                  className={`text-sm font-medium ${textColor} ${hoverColor} transition-colors flex items-center gap-1`}
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
                className={`text-sm font-medium ${textColor} ${hoverColor} transition-colors`}
              >
                {item.name}
              </Link>
            )
          )}
        </div>

        {/* Botones de acción para desktop */}
        <div className="hidden md:flex items-center gap-4 pr-10">
          <Button
            variant="ghost"
            className={`${textColor} ${hoverColor.replace('text-', 'hover:bg-')}`}
            asChild
          >
            <Link href="/iniciar-sesion">Iniciar sesión</Link>
          </Button>
          <Button
            className="bg-blue-600 text-white hover:bg-blue-700 border-blue-600"
            asChild
          >
            <Link href="/crear-cuenta">Crear cuenta</Link>
          </Button>
        </div>
      </nav>

      {/* Menú móvil */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-lg">
          <div className="flex flex-col py-4">
            {navItems.map((item) =>
              item.children ? (
                <div key={item.name} className="px-6 py-3">
                  <button
                    className="text-gray-700 dark:text-gray-200 font-medium flex items-center justify-between w-full"
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                  >
                    {item.name}
                    <ChevronDown size={16} className={dropdownOpen ? "rotate-180 transition-transform" : "transition-transform"} />
                  </button>
                  {dropdownOpen && (
                    <div className="mt-2 ml-4 border-l-2 border-gray-200 dark:border-gray-700 pl-4">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          className="block py-2 text-gray-600 dark:text-gray-300"
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
                  className="px-6 py-3 text-gray-700 dark:text-gray-200 font-medium"
                >
                  {item.name}
                </Link>
              )
            )}
            
            {/* Botones de acción para móvil */}
            <div className="flex flex-col px-6 mt-4 gap-2">
              <Button
                variant="outline"
                className="w-full justify-center"
                asChild
              >
                <Link href="/iniciar-sesion">Iniciar sesión</Link>
              </Button>
              <Button
                className="w-full justify-center bg-blue-600 text-white hover:bg-blue-700"
                asChild
              >
                <Link href="/crear-cuenta">Crear cuenta</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}