import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import {
  Bot,
  BriefcaseBusiness,
  Database,
  Mail,
  MessageSquare,
  Zap,
  Calculator,
  FileText,
  Receipt,
  ShoppingBag,
  Store,
  Calendar,
} from "lucide-react"

export default function ServiciosPage() {
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
            <Link href="/servicios" className="text-sm font-medium text-primary">
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
        <section className="w-full py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter md:text-4xl">Servicios de Automatización</h1>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  Soluciones personalizadas para profesionales y comerciantes en Argentina
                </p>
              </div>
            </div>

            <Tabs defaultValue="profesionales" className="mt-10">
              <div className="flex justify-center">
                <TabsList className="grid w-full max-w-md grid-cols-3">
                  <TabsTrigger value="profesionales">Profesionales</TabsTrigger>
                  <TabsTrigger value="comercios">Comercios</TabsTrigger>
                  <TabsTrigger value="ecommerce">E-commerce</TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="profesionales" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    {
                      title: "Gestión de Clientes",
                      description:
                        "Automatización de seguimiento de clientes, recordatorios y comunicaciones personalizadas",
                      icon: <BriefcaseBusiness className="h-10 w-10 text-primary" />,
                      features: [
                        "Seguimiento automático",
                        "Recordatorios de citas",
                        "Comunicaciones personalizadas",
                        "Historial de interacciones",
                      ],
                      price: "Desde $15.000 ARS",
                    },
                    {
                      title: "Automatización Contable",
                      description:
                        "Automatización de carga de facturas, categorización de gastos y reportes financieros",
                      icon: <Calculator className="h-10 w-10 text-primary" />,
                      features: [
                        "Carga automática de facturas",
                        "Categorización de gastos",
                        "Reportes periódicos",
                        "Alertas de vencimientos",
                      ],
                      price: "Desde $20.000 ARS",
                    },
                    {
                      title: "Gestión de Documentos",
                      description: "Automatización de creación, almacenamiento y búsqueda de documentos profesionales",
                      icon: <FileText className="h-10 w-10 text-primary" />,
                      features: [
                        "Plantillas automáticas",
                        "Organización inteligente",
                        "Búsqueda avanzada",
                        "Control de versiones",
                      ],
                      price: "Desde $18.000 ARS",
                    },
                  ].map((service, index) => (
                    <Card key={index} className="flex flex-col">
                      <CardHeader>
                        <div className="rounded-full w-16 h-16 flex items-center justify-center border border-primary/20 bg-primary/5 mb-4">
                          {service.icon}
                        </div>
                        <CardTitle>{service.title}</CardTitle>
                        <CardDescription>{service.description}</CardDescription>
                      </CardHeader>
                      <CardContent className="flex-1">
                        <p className="font-medium text-primary mb-4">{service.price}</p>
                        <ul className="space-y-2">
                          {service.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center gap-2">
                              <div className="rounded-full bg-primary/10 p-1">
                                <Zap className="h-3 w-3 text-primary" />
                              </div>
                              <span className="text-sm">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full">Solicitar Presupuesto</Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="comercios" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    {
                      title: "Gestión de Inventario",
                      description: "Automatización de control de stock, alertas de reposición y reportes de inventario",
                      icon: <Store className="h-10 w-10 text-primary" />,
                      features: [
                        "Control automático de stock",
                        "Alertas de reposición",
                        "Reportes periódicos",
                        "Integración con proveedores",
                      ],
                      price: "Desde $25.000 ARS",
                    },
                    {
                      title: "Facturación Automática",
                      description: "Automatización de emisión de facturas, recibos y comprobantes de pago",
                      icon: <Receipt className="h-10 w-10 text-primary" />,
                      features: [
                        "Emisión automática",
                        "Envío programado",
                        "Seguimiento de pagos",
                        "Integración con AFIP",
                      ],
                      price: "Desde $22.000 ARS",
                    },
                    {
                      title: "Fidelización de Clientes",
                      description:
                        "Automatización de programas de fidelización, descuentos y comunicaciones con clientes",
                      icon: <MessageSquare className="h-10 w-10 text-primary" />,
                      features: [
                        "Programas de puntos",
                        "Descuentos automáticos",
                        "Comunicaciones personalizadas",
                        "Análisis de comportamiento",
                      ],
                      price: "Desde $18.000 ARS",
                    },
                  ].map((service, index) => (
                    <Card key={index} className="flex flex-col">
                      <CardHeader>
                        <div className="rounded-full w-16 h-16 flex items-center justify-center border border-primary/20 bg-primary/5 mb-4">
                          {service.icon}
                        </div>
                        <CardTitle>{service.title}</CardTitle>
                        <CardDescription>{service.description}</CardDescription>
                      </CardHeader>
                      <CardContent className="flex-1">
                        <p className="font-medium text-primary mb-4">{service.price}</p>
                        <ul className="space-y-2">
                          {service.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center gap-2">
                              <div className="rounded-full bg-primary/10 p-1">
                                <Zap className="h-3 w-3 text-primary" />
                              </div>
                              <span className="text-sm">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full">Solicitar Presupuesto</Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="ecommerce" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    {
                      title: "Gestión de Pedidos",
                      description:
                        "Automatización de procesamiento de pedidos, seguimiento y notificaciones a clientes",
                      icon: <ShoppingBag className="h-10 w-10 text-primary" />,
                      features: [
                        "Procesamiento automático",
                        "Seguimiento en tiempo real",
                        "Notificaciones a clientes",
                        "Gestión de devoluciones",
                      ],
                      price: "Desde $28.000 ARS",
                    },
                    {
                      title: "Marketing Automatizado",
                      description: "Automatización de campañas de email marketing, remarketing y promociones",
                      icon: <Mail className="h-10 w-10 text-primary" />,
                      features: [
                        "Campañas automáticas",
                        "Segmentación de clientes",
                        "Análisis de resultados",
                        "Optimización continua",
                      ],
                      price: "Desde $24.000 ARS",
                    },
                    {
                      title: "Integración de Plataformas",
                      description: "Integración automática entre tu tienda online, sistemas de pago y logística",
                      icon: <Database className="h-10 w-10 text-primary" />,
                      features: [
                        "Sincronización de datos",
                        "Actualización en tiempo real",
                        "Reducción de errores",
                        "Optimización de procesos",
                      ],
                      price: "Desde $30.000 ARS",
                    },
                  ].map((service, index) => (
                    <Card key={index} className="flex flex-col">
                      <CardHeader>
                        <div className="rounded-full w-16 h-16 flex items-center justify-center border border-primary/20 bg-primary/5 mb-4">
                          {service.icon}
                        </div>
                        <CardTitle>{service.title}</CardTitle>
                        <CardDescription>{service.description}</CardDescription>
                      </CardHeader>
                      <CardContent className="flex-1">
                        <p className="font-medium text-primary mb-4">{service.price}</p>
                        <ul className="space-y-2">
                          {service.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center gap-2">
                              <div className="rounded-full bg-primary/10 p-1">
                                <Zap className="h-3 w-3 text-primary" />
                              </div>
                              <span className="text-sm">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full">Solicitar Presupuesto</Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>

            <div className="mt-16 rounded-lg border bg-muted/50 p-8">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-2/3 space-y-4">
                  <h2 className="text-2xl font-bold">¿Necesitás una solución personalizada?</h2>
                  <p className="text-muted-foreground">
                    Cada negocio es único. Puedo desarrollar soluciones de automatización a medida para tus necesidades
                    específicas. Agendá una consulta gratuita para analizar tu caso particular.
                  </p>
                  <div className="flex flex-wrap gap-3 pt-2">
                    {["Desarrollo a Medida", "Soporte Local", "Capacitación Incluida", "Mantenimiento"].map(
                      (tag, i) => (
                        <Badge key={i} variant="outline">
                          {tag}
                        </Badge>
                      ),
                    )}
                  </div>
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

        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Cómo Funciona el Proceso</h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  Un enfoque simple y efectivo para implementar soluciones de automatización en tu negocio
                </p>
              </div>
            </div>

            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3">
              {[
                {
                  title: "1. Consulta Inicial",
                  description:
                    "Analizamos tus necesidades específicas y los procesos que podrían beneficiarse de la automatización",
                  icon: <Calendar className="h-10 w-10 text-primary" />,
                },
                {
                  title: "2. Propuesta a Medida",
                  description:
                    "Diseño una solución personalizada con presupuesto detallado y tiempos de implementación",
                  icon: <FileText className="h-10 w-10 text-primary" />,
                },
                {
                  title: "3. Implementación y Capacitación",
                  description: "Implemento la solución y te capacito para que puedas aprovecharla al máximo",
                  icon: <Bot className="h-10 w-10 text-primary" />,
                },
              ].map((step, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center space-y-4 rounded-lg border bg-background p-6 shadow-sm"
                >
                  <div className="rounded-full w-16 h-16 flex items-center justify-center border border-primary/20 bg-primary/5">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-bold text-center">{step.title}</h3>
                  <p className="text-center text-muted-foreground">{step.description}</p>
                </div>
              ))}
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

