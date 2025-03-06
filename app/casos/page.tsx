import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Zap, Quote, ArrowRight, BriefcaseBusiness, Store, Calendar, FileText } from "lucide-react"

export default function CasosPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Zap className="h-6 w-6 text-primary" />
            <Link href="/" className="text-xl font-bold">
              AutomatizAR
            </Link>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
              Inicio
            </Link>
            <Link href="/servicios" className="text-sm font-medium transition-colors hover:text-primary">
              Servicios
            </Link>
            <Link href="/casos" className="text-sm font-medium text-primary">
              Casos de Éxito
            </Link>
            <Link href="/contacto" className="text-sm font-medium transition-colors hover:text-primary">
              Contacto
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button size="sm">Consultar</Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter md:text-4xl">Casos de Éxito</h1>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  Conocé cómo he ayudado a profesionales y comerciantes en Argentina a optimizar sus procesos
                </p>
              </div>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
              {[
                {
                  title: "Estudio Contable en Buenos Aires",
                  category: "Profesional",
                  description:
                    "Un estudio contable con más de 50 clientes necesitaba automatizar la carga de facturas y el seguimiento de vencimientos impositivos.",
                  challenge:
                    "El equipo dedicaba más de 25 horas semanales a la carga manual de facturas y al seguimiento de vencimientos, lo que generaba errores y retrasos.",
                  solution:
                    "Implementé un sistema de automatización que extrae datos de facturas electrónicas y genera alertas de vencimientos impositivos personalizadas para cada cliente.",
                  results: [
                    "Reducción del 80% en el tiempo dedicado a la carga de facturas",
                    "Eliminación casi total de errores en la carga de datos",
                    "Alertas automáticas de vencimientos con 15 días de anticipación",
                    "Mejora en la satisfacción de los clientes por la precisión en los recordatorios",
                  ],
                  testimonial:
                    "La automatización nos permitió dedicar más tiempo a asesorar a nuestros clientes en lugar de cargar datos. La precisión mejoró notablemente y ahora podemos manejar más clientes con el mismo equipo.",
                  client: "Martín Rodríguez, Contador Público",
                  icon: <BriefcaseBusiness className="h-10 w-10 text-primary" />,
                },
                {
                  title: "Tienda de Ropa en Córdoba",
                  category: "Comercio",
                  description:
                    "Una tienda de ropa con presencia física y online necesitaba sincronizar su inventario y automatizar notificaciones a clientes.",
                  challenge:
                    "La falta de sincronización entre el inventario físico y online generaba problemas de stock y cancelaciones de pedidos, afectando la reputación del negocio.",
                  solution:
                    "Desarrollé un sistema que sincroniza automáticamente el inventario entre la tienda física y online, y envía notificaciones automáticas sobre el estado de los pedidos.",
                  results: [
                    "Reducción del 90% en errores de stock",
                    "Disminución del 70% en cancelaciones por falta de stock",
                    "Aumento del 25% en la satisfacción del cliente",
                    "Ahorro de 15 horas semanales en gestión de inventario",
                  ],
                  testimonial:
                    "Antes teníamos problemas constantes con clientes enojados por cancelaciones. Ahora nuestro inventario está siempre actualizado y los clientes reciben información en tiempo real sobre sus pedidos.",
                  client: "Laura Méndez, Dueña de Tienda",
                  icon: <Store className="h-10 w-10 text-primary" />,
                },
                {
                  title: "Consultorio Médico en Rosario",
                  category: "Profesional",
                  description:
                    "Un consultorio médico con alta demanda necesitaba automatizar la gestión de turnos y recordatorios a pacientes.",
                  challenge:
                    "El consultorio tenía un alto índice de ausencias (40%) y el personal dedicaba muchas horas a llamar a los pacientes para confirmar turnos.",
                  solution:
                    "Implementé un sistema de gestión de turnos con confirmaciones y recordatorios automáticos por WhatsApp y email, además de un sistema de lista de espera para cancelaciones.",
                  results: [
                    "Reducción del 60% en ausencias a turnos",
                    "Optimización del 30% en la agenda del médico",
                    "Ahorro de 10 horas semanales en gestión de turnos",
                    "Implementación exitosa de lista de espera automática",
                  ],
                  testimonial:
                    "La automatización transformó completamente nuestra gestión de turnos. Ahora tenemos menos ausencias, aprovechamos mejor el tiempo del médico y los pacientes están más satisfechos con el servicio.",
                  client: "Dr. Carlos Fernández, Médico Clínico",
                  icon: <Calendar className="h-10 w-10 text-primary" />,
                },
                {
                  title: "Estudio Jurídico en Mendoza",
                  category: "Profesional",
                  description:
                    "Un estudio jurídico con múltiples abogados necesitaba automatizar la gestión de documentos y el seguimiento de casos.",
                  challenge:
                    "El estudio tenía dificultades para mantener actualizada la documentación de cada caso y coordinar los vencimientos de plazos legales entre los diferentes abogados.",
                  solution:
                    "Desarrollé un sistema de gestión documental automatizado con alertas de vencimientos y asignación automática de tareas según la especialidad y carga de trabajo de cada abogado.",
                  results: [
                    "Reducción del 100% en vencimientos de plazos legales",
                    "Mejora del 40% en la colaboración entre abogados",
                    "Acceso instantáneo a documentación actualizada de cada caso",
                    "Distribución equitativa de la carga de trabajo",
                  ],
                  testimonial:
                    "El sistema nos permitió crecer como estudio sin perder el control sobre los casos. Las alertas automáticas nos dan tranquilidad y la asignación inteligente de tareas ha mejorado notablemente nuestra eficiencia.",
                  client: "Dra. Gabriela Sánchez, Abogada",
                  icon: <FileText className="h-10 w-10 text-primary" />,
                },
              ].map((caso, index) => (
                <Card key={index} className="overflow-hidden">
                  <CardHeader className="pb-0">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="outline">{caso.category}</Badge>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="rounded-full w-12 h-12 flex items-center justify-center border border-primary/20 bg-primary/5">
                        {caso.icon}
                      </div>
                      <div>
                        <CardTitle>{caso.title}</CardTitle>
                        <CardDescription className="mt-2">{caso.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-semibold text-sm text-muted-foreground">EL DESAFÍO</h3>
                        <p className="mt-1">{caso.challenge}</p>
                      </div>
                      <div>
                        <h3 className="font-semibold text-sm text-muted-foreground">LA SOLUCIÓN</h3>
                        <p className="mt-1">{caso.solution}</p>
                      </div>
                      <div>
                        <h3 className="font-semibold text-sm text-muted-foreground">RESULTADOS</h3>
                        <ul className="mt-2 space-y-1">
                          {caso.results.map((result, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <div className="rounded-full bg-primary/10 p-1 mt-0.5">
                                <Zap className="h-3 w-3 text-primary" />
                              </div>
                              <span className="text-sm">{result}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="bg-muted/50 p-4 rounded-lg">
                        <div className="flex gap-2 mb-2">
                          <Quote className="h-5 w-5 text-primary" />
                        </div>
                        <p className="text-sm italic">{caso.testimonial}</p>
                        <p className="text-sm font-medium mt-2">— {caso.client}</p>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      Ver Detalles Completos
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="rounded-lg border bg-background p-8">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-2/3 space-y-4">
                  <h2 className="text-2xl font-bold">¿Querés ser el próximo caso de éxito?</h2>
                  <p className="text-muted-foreground">
                    Cada negocio tiene desafíos únicos. Trabajemos juntos para encontrar la solución de automatización
                    que mejor se adapte a tus necesidades y te ayude a crecer.
                  </p>
                </div>
                <div className="md:w-1/3 flex justify-center">
                  <Button size="lg" className="w-full md:w-auto">
                    Agendar Consulta Gratuita
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t bg-background py-6 md:py-12">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center gap-2">
            <Zap className="h-5 w-5 text-primary" />
            <span className="text-lg font-bold">AutomatizAR</span>
          </div>
          <p className="text-center text-sm text-muted-foreground md:text-left">
            © {new Date().getFullYear()} AutomatizAR. Todos los derechos reservados.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
              Términos
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
              Privacidad
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
              Contacto
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

