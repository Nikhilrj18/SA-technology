import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Smartphone, Globe, Database, TrendingUp } from "lucide-react";

const services = [
  {
    icon: Smartphone,
    title: "Mobile Applications",
    description: "Native and cross-platform mobile apps that deliver exceptional user experiences on iOS and Android.",
    tags: ["iOS & Android", "React Native", "Flutter", "Progressive Web Apps"]
  },
  {
    icon: Globe,
    title: "Web Applications",
    description: "Scalable, responsive web applications built with modern frameworks and best practices.",
    tags: ["React & Next.js", "Custom CMS", "E-commerce", "Real-time Features"]
  },
  {
    icon: Database,
    title: "CRM Solutions",
    description: "Customized CRM systems and updates to streamline your business operations and boost productivity.",
    tags: ["Custom Workflows", "Integration", "Data Migration", "Training & Support"]
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing",
    description: "Comprehensive digital marketing strategies to boost your brand, engage customers, and drive growth.",
    tags: ["Social Media Marketing", "Content Marketing", "Email Campaigns", "PPC Advertising"]
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h2>
          <p className="text-xl text-muted-foreground">
            Comprehensive IT solutions tailored to your business needs
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {service.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
