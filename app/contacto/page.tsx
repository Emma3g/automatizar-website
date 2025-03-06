import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Zap, Mail, Phone, MapPin, Clock, CheckCircle } from "lucide-react"

export default function ContactoPage() {
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
            <Link href="/casos" className="text-sm font-medium transition-colors hover:text-primary">
              Casos de Éxito
            </Link>
            <Link href="/contacto" className="text-sm font-medium text-primary">
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
                <h1 className="text-3xl font-bold tracking-tighter md:text-4xl">Contacto</h1>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  Estoy para ayudarte a automatizar tus procesos. Contactame para una consulta gratuita.
                </p>
              </div>
            </div>

            <div className="mx-auto max-w-6xl mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Enviame un mensaje</CardTitle>
                  <CardDescription>Completá el formulario y te responderé a la brevedad.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="nombre">Nombre</Label>
                      <Input id="nombre" placeholder="Tu nombre" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="apellido">Apellido</Label>
                      <Input id="apellido" placeholder="Tu apellido" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="tu@email.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="telefono">Teléfono</Label>
                    <Input id="telefono" placeholder="+54 9 11 1234-5678" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="tipo">Tipo de Negocio</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Seleccionar" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="profesional">Profesional Independiente</SelectItem>
                        <SelectItem value="comercio">Comercio Minorista</SelectItem>
                        <SelectItem value="ecommerce">E-commerce</SelectItem>
                        <SelectItem value="servicios">Empresa de Servicios</SelectItem>
                        <SelectItem value="otro">Otro</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="mensaje">Mensaje</Label>
                    <Textarea
                      id="mensaje"
                      placeholder="Contame sobre tu negocio y qué procesos te gustaría automatizar"
                      rows={4}
                    />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Enviar Mensaje</Button>
                </CardFooter>
              </Card>

              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Información de Contacto</CardTitle>
                    <CardDescription>Podés contactarme directamente por estos medios</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Mail className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <h3 className="font-medium">Email</h3>
                        <p className="text-sm text-muted-foreground">contacto@automatizar.com.ar</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Phone className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <h3 className="font-medium">Teléfono</h3>
                        <p className="text-sm text-muted-foreground">+54 9 11 2345-6789</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <h3 className="font-medium">Ubicación</h3>
                        <p className="text-sm text-muted-foreground">Buenos Aires, Argentina</p>
                        <p className="text-sm text-muted-foreground">Servicios remotos para todo el país</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Clock className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <h3 className="font-medium">Horario de Atención</h3>
                        <p className="text-sm text-muted-foreground">Lunes a Viernes: 9:00 - 18:00</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>¿Por qué elegirme?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {[
                        "Experiencia en automatización para pequeños negocios",
                        "Soluciones personalizadas a precios accesibles",
                        "Soporte local y en español",
                        "Capacitación incluida en todos los servicios",
                        "Enfoque en resultados medibles para tu negocio",
                      ].map((item, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="mt-16 rounded-lg border bg-muted/50 p-8">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-2/3 space-y-4">
                  <h2 className="text-2xl font-bold">Consulta Gratuita</h2>
                  <p className="text-muted-foreground">
                    Ofrezco una consulta inicial sin costo para analizar tus necesidades y proponerte soluciones a
                    medida. Sin compromiso y con total confidencialidad.
                  </p>
                </div>
                <div className="md:w-1/3 flex justify-center">
                  <Button size="lg" className="w-full md:w-auto">
                    Agendar Ahora
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

