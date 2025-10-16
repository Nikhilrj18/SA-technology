import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Link } from "lucide-react";

const projects = [
  {
    category: "Mobile Application",
    title: "FinTech Mobile App",
    description: "A comprehensive banking app with real-time transactions, budget tracking, and secure payment processing.",
    tags: ["React Native", "Node.js", "MongoDB"],
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80"
  },
  {
    category: "Web Application",
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with inventory management, payment integration, and analytics dashboard.",
    tags: ["React", "Next.js", "Stripe"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
  },
  {
    category: "CRM Solution",
    title: "Enterprise CRM System",
    description: "Custom CRM with advanced reporting, customer pipeline management, and team collaboration features.",
    tags: ["TypeScript", "PostgreSQL", "AWS"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Recent Projects</h2>
          <p className="text-xl text-muted-foreground">
            Transforming ideas into reality with innovative solutions
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="bg-card border-border overflow-hidden group hover:border-primary/50 transition-all duration-300">
              <div className="aspect-video overflow-hidden bg-secondary">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <Badge variant="secondary" className="w-fit mb-2">
                  {project.category}
                </Badge>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <CardDescription>
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="outline">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <Button  variant="outline" className="w-full group">
                  View Project
                  <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
