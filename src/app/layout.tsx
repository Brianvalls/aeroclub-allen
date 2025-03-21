import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Aeroclub Allen - Escuela de Vuelo",
  description: "Escuela de vuelo y formación de pilotos en Allen, Río Negro, Argentina",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={inter.className}>
        <>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </>
      </body>
    </html>
  )
}

