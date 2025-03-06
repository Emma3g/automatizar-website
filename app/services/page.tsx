import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Bot, BriefcaseBusiness, Clock, Code, Database, FileSpreadsheet, Mail, MessageSquare, Zap } from "lucide-react"

export default function ServicesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Zap className="h-6 w-6 text-primary" />
            <Link href="/" className="text-xl font-bold">
              AutomateNow
            </Link>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
              Home
            </Link>
            <Link href="/jobs" className="text-sm font-medium transition-colors hover:text-primary">
              Browse Jobs
            </Link>
            <Link href="/services" className="text-sm font-medium text-primary">
              Services
            </Link>
            <Link href="/about" className="text-sm font-medium transition-colors hover:text-primary">
              About
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm" className="hidden md:flex">
              Sign In
            </Button>
            <Button size="sm">Get Started</Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter md:text-4xl">Automation Services</h1>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  Discover the wide range of automation services available to streamline your business operations
                </p>
              </div>
            </div>

            <Tabs defaultValue="business" className="mt-10">
              <div className="flex justify-center">
                <TabsList className="grid w-full max-w-md grid-cols-3">
                  <TabsTrigger value="business">Business</TabsTrigger>
                  <TabsTrigger value="data">Data</TabsTrigger>
                  <TabsTrigger value="communication">Communication</TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="business" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    {
                      title: "Workflow Automation",
                      description: "Streamline your business processes by automating repetitive tasks and workflows",
                      icon: <Clock className="h-10 w-10 text-primary" />,
                      features: [
                        "Process mapping",
                        "Task automation",
                        "Workflow optimization",
                        "Integration with existing systems",
                      ],
                    },
                    {
                      title: "CRM Automation",
                      description:
                        "Automate customer relationship management tasks to improve sales and customer service",
                      icon: <BriefcaseBusiness className="h-10 w-10 text-primary" />,
                      features: [
                        "Lead tracking",
                        "Sales pipeline automation",
                        "Customer follow-ups",
                        "Reporting and analytics",
                      ],
                    },
                    {
                      title: "E-commerce Automation",
                      description: "Automate order processing, inventory management, and customer communications",
                      icon: <Database className="h-10 w-10 text-primary" />,
                      features: [
                        "Order processing",
                        "Inventory updates",
                        "Shipping notifications",
                        "Customer communications",
                      ],
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
                        <Button className="w-full">Learn More</Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="data" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    {
                      title: "Data Entry Automation",
                      description: "Eliminate manual data entry with intelligent automation solutions",
                      icon: <FileSpreadsheet className="h-10 w-10 text-primary" />,
                      features: [
                        "Form data extraction",
                        "Document processing",
                        "Data validation",
                        "Database integration",
                      ],
                    },
                    {
                      title: "Reporting Automation",
                      description: "Automate the creation and distribution of business reports and analytics",
                      icon: <Code className="h-10 w-10 text-primary" />,
                      features: [
                        "Scheduled reports",
                        "Data visualization",
                        "Multi-platform delivery",
                        "Custom formatting",
                      ],
                    },
                    {
                      title: "Data Processing",
                      description: "Transform, clean, and process data automatically for better business insights",
                      icon: <Database className="h-10 w-10 text-primary" />,
                      features: ["Data cleaning", "Format conversion", "Data enrichment", "Scheduled processing"],
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
                        <Button className="w-full">Learn More</Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="communication" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    {
                      title: "Email Automation",
                      description: "Set up automated email responses, notifications, and marketing campaigns",
                      icon: <Mail className="h-10 w-10 text-primary" />,
                      features: [
                        "Email sequences",
                        "Triggered responses",
                        "Newsletter automation",
                        "Performance tracking",
                      ],
                    },
                    {
                      title: "Chat & Support Automation",
                      description: "Implement chatbots and automated support systems to improve customer service",
                      icon: <MessageSquare className="h-10 w-10 text-primary" />,
                      features: ["Chatbot setup", "FAQ automation", "Ticket routing", "24/7 support coverage"],
                    },
                    {
                      title: "Social Media Automation",
                      description: "Automate content scheduling, posting, and engagement across social platforms",
                      icon: <Bot className="h-10 w-10 text-primary" />,
                      features: [
                        "Content scheduling",
                        "Cross-platform posting",
                        "Engagement automation",
                        "Analytics reporting",
                      ],
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
                        <Button className="w-full">Learn More</Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>

            <div className="mt-16 rounded-lg border bg-muted/50 p-8">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-2/3 space-y-4">
                  <h2 className="text-2xl font-bold">Need a Custom Automation Solution?</h2>
                  <p className="text-muted-foreground">
                    Our network of automation experts can build custom solutions tailored to your specific business
                    needs. From simple task automation to complex integrated systems, we've got you covered.
                  </p>
                  <div className="flex flex-wrap gap-3 pt-2">
                    {["Custom Development", "Integration Services", "Training & Support", "Maintenance"].map(
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
                    Request a Consultation
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
            <span className="text-lg font-bold">AutomateNow</span>
          </div>
          <p className="text-center text-sm text-muted-foreground md:text-left">
            © {new Date().getFullYear()} AutomateNow. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
              Terms
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
              Privacy
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

