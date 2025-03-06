import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Bot, BriefcaseBusiness, Clock, Code, Zap, CheckCircle, ShoppingBag, Store } from "lucide-react"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Zap className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">AutomatizAR</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
              Inicio
            </Link>
            <Link href="/servicios" className="text-sm font-medium transition-colors hover:text-primary">
              Servicios
            </Link>
            <Link href="/casos" className="text-sm font-medium transition-colors hover:text-primary">
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
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <Badge
                    variant="outline"
                    className="inline-flex items-center rounded-full border border-primary/20 px-2.5 py-0.5 text-xs font-semibold text-primary transition-colors"
                  >
                    <Zap className="mr-1 h-3 w-3" />
                    Automatización Simple
                  </Badge>
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Automatizá tus tareas diarias
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Soluciones de automatización a medida para profesionales y comerciantes en Argentina. Ahorrá tiempo
                    y dinero en tus procesos diarios.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" className="gap-1">
                    Solicitar Presupuesto
                    <BriefcaseBusiness className="h-4 w-4" />
                  </Button>
                  <Button size="lg" variant="outline">
                    Ver Servicios
                  </Button>
                </div>
              </div>
              <div className="mx-auto w-full max-w-[500px] lg:max-w-none">
                <div className="aspect-video overflow-hidden rounded-xl bg-muted/50 object-cover">
                  <img
                    src="/placeholder.svg?height=500&width=800"
                    alt="Diagrama de flujo de automatización"
                    width={800}
                    height={500}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Servicios de Automatización</h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  Soluciones personalizadas para optimizar tus procesos y ahorrar tiempo
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Automatización de Datos",
                  description: "Automatizá la carga y procesamiento de datos para eliminar tareas repetitivas",
                  icon: <Code className="h-10 w-10 text-primary" />,
                },
                {
                  title: "Comunicación Automática",
                  description: "Configuración de respuestas automáticas, notificaciones y seguimientos",
                  icon: <Bot className="h-10 w-10 text-primary" />,
                },
                {
                  title: "Optimización de Procesos",
                  description: "Mejorá tus flujos de trabajo con soluciones de automatización a medida",
                  icon: <Clock className="h-10 w-10 text-primary" />,
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm transition-all hover:shadow-md"
                >
                  <div className="rounded-full border border-primary/20 p-4 bg-primary/5">{item.icon}</div>
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <p className="text-center text-muted-foreground">{item.description}</p>
                  <Button variant="outline" className="mt-auto">
                    Ver Detalles
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Para Quién Trabajamos</h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  Soluciones adaptadas a las necesidades de diferentes profesionales y comercios
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Profesionales Independientes",
                  description:
                    "Contadores, abogados, arquitectos y otros profesionales que necesitan optimizar su tiempo",
                  icon: <BriefcaseBusiness className="h-10 w-10 text-primary" />,
                },
                {
                  title: "Comercios Minoristas",
                  description:
                    "Tiendas, locales y negocios que buscan automatizar inventario, ventas y atención al cliente",
                  icon: <Store className="h-10 w-10 text-primary" />,
                },
                {
                  title: "E-commerce",
                  description: "Tiendas online que necesitan automatizar pedidos, stock y comunicaciones con clientes",
                  icon: <ShoppingBag className="h-10 w-10 text-primary" />,
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center space-y-4 rounded-lg border bg-background p-6 shadow-sm"
                >
                  <div className="rounded-full border border-primary/20 p-4 bg-primary/5">{item.icon}</div>
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <p className="text-center text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">¿Por Qué Automatizar?</h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    La automatización te permite enfocarte en lo que realmente importa para tu negocio
                  </p>
                </div>
                <ul className="grid gap-4">
                  {[
                    "Ahorrá hasta un 70% del tiempo en tareas repetitivas",
                    "Reducí errores humanos en procesos críticos",
                    "Mejorá la experiencia de tus clientes con respuestas más rápidas",
                    "Optimizá recursos y reducí costos operativos",
                    "Escalá tu negocio sin aumentar proporcionalmente el personal",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <div className="rounded-full bg-primary/10 p-1">
                        <CheckCircle className="h-4 w-4 text-primary" />
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div>
                  <Button size="lg">Consultá Ahora</Button>
                </div>
              </div>
              <div className="mx-auto w-full max-w-[500px] lg:max-w-none">
                <div className="aspect-square overflow-hidden rounded-xl bg-muted/50 object-cover">
                  <img
                    src="/placeholder.svg?height=600&width=600"
                    alt="Ilustración de automatización de negocios"
                    width={600}
                    height={600}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Casos de Éxito</h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  Conocé cómo hemos ayudado a otros profesionales y comerciantes en Argentina
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Estudio Contable",
                  description:
                    "Automatizamos la carga de facturas y el seguimiento de vencimientos, ahorrando 20 horas semanales al equipo",
                  location: "Buenos Aires",
                },
                {
                  title: "Tienda de Ropa",
                  description:
                    "Implementamos un sistema automático de inventario y notificaciones de stock que redujo errores en un 90%",
                  location: "Córdoba",
                },
                {
                  title: "Consultorio Médico",
                  description:
                    "Creamos un sistema de turnos y recordatorios automáticos que redujo las ausencias en un 60%",
                  location: "Rosario",
                },
              ].map((item, index) => (
                <div key={index} className="flex flex-col space-y-4 rounded-xl border bg-background p-6 shadow-sm">
                  <div>
                    <h3 className="font-bold text-xl">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.location}</p>
                  </div>
                  <p className="text-muted-foreground flex-1">{item.description}</p>
                  <div className="flex justify-end">
                    <Button variant="outline">Ver Caso Completo</Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="rounded-lg border bg-muted/50 p-8">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-2/3 space-y-4">
                  <h2 className="text-2xl font-bold">¿Listo para automatizar tu negocio?</h2>
                  <p className="text-muted-foreground">
                    Ofrezco una consulta inicial gratuita para analizar tus necesidades y proponerte soluciones a
                    medida. Trabajemos juntos para hacer crecer tu negocio con la tecnología adecuada.
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

