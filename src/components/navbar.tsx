"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
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
        {/* Logo y nombre */}
        <div className="flex items-center gap-10 pl-10">
          <Image
            src="/images/logo.png"
            alt="Aeroclub Allen Logo"
            width={40}
            height={40}
            className="w-10 h-10"
          />
          <span className={`text-xl font-bold ${textColor}`}>
            Aeroclub Allen
          </span>
        </div>

        {/* Menú de navegación */}
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

        {/* Botones de acción */}
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
    </header>
  );
}