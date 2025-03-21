import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer id="contacto" className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Image src="/images/logo.svg" alt="Aeroclub Allen Logo" width={40} height={40} className="w-10 h-10" />
              <span className="text-xl font-bold">Aeroclub Allen</span>
            </div>
            <p className="text-gray-400 mb-4">
              Formando pilotos profesionales desde 1950. Escuela de vuelo certificada por ANAC.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="#carreras" className="text-gray-400 hover:text-white transition-colors">
                  Carreras
                </Link>
              </li>
              <li>
                <Link href="#nosotros" className="text-gray-400 hover:text-white transition-colors">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link href="#paseos" className="text-gray-400 hover:text-white transition-colors">
                  Paseos Aéreos
                </Link>
              </li>
              <li>
                <Link href="#contacto" className="text-gray-400 hover:text-white transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="text-gray-400 mt-1" size={18} />
                <span className="text-gray-400">Ruta 22 Km 1190, Allen, Río Negro, Argentina</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-gray-400" size={18} />
                <span className="text-gray-400">+54 299 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-gray-400" size={18} />
                <span className="text-gray-400">info@aerocluballen.ar</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Horarios</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">
                <span className="font-medium">Lunes a Viernes:</span> 8:00 - 18:00
              </li>
              <li className="text-gray-400">
                <span className="font-medium">Sábados:</span> 9:00 - 15:00
              </li>
              <li className="text-gray-400">
                <span className="font-medium">Domingos:</span> Cerrado
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-6 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Aeroclub Allen. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

