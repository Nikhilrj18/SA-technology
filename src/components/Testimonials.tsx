import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart Inc",
    initials: "SJ",
    content: "Pravaah Labs transformed our business with their exceptional mobile app development. The team's expertise and dedication exceeded our expectations. Highly recommended!"
  },
  {
    name: "Michael Chen",
    role: "Marketing Director, GrowthHub",
    initials: "MC",
    content: "Their digital marketing campaigns transformed our online presence. We saw a 300% increase in engagement and conversions within 6 months. Outstanding results!"
  },
  {
    name: "Emily Rodriguez",
    role: "Founder, RetailPro",
    initials: "ER",
    content: "The custom CRM solution they built streamlined our entire sales process. The team was professional, responsive, and delivered on time."
  },
  {
    name: "David Park",
    role: "CTO, FinanceFlow",
    initials: "DP",
    content: "Incredible web development work! They built a complex financial platform that handles thousands of transactions daily. Top-notch quality and support."
  },
  {
    name: "Lisa Anderson",
    role: "Product Manager, InnovateCo",
    initials: "LA",
    content: "Working with Pravaah Labs has been a game-changer. Their technical expertise and creative solutions helped us launch our product ahead of schedule."
  },
  {
    name: "James Williams",
    role: "Operations Manager, LogiTech",
    initials: "JW",
    content: "The team's attention to detail and commitment to excellence is remarkable. They delivered a robust system that improved our operational efficiency by 40%."
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-xl text-muted-foreground">
            Don't just take our word for it - hear from our satisfied clients
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card border-border">
              <CardContent className="pt-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6">"{testimonial.content}"</p>
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarFallback className="bg-gradient-primary text-primary-foreground">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-secondary/50 backdrop-blur-sm border border-primary/20">
            <Star className="w-5 h-5 fill-primary text-primary" />
            <span className="font-semibold">4.9/5.0</span>
            <span className="text-muted-foreground">Average Rating from 200+ Reviews</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
