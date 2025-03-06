import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { cn } from "@/lib/utils"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "AutomatizAR - Servicios de Automatización para Profesionales y Comerciantes",
  description:
    "Soluciones de automatización a medida para profesionales y comerciantes en Argentina. Ahorrá tiempo y dinero en tus procesos diarios.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={cn("min-h-screen bg-background font-sans antialiased", inter.className)}>{children}</body>
    </html>
  )
}



import './globals.css'