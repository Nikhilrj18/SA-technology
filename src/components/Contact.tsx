import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Mail, Phone, Clock } from "lucide-react";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  phone: z.string().trim().min(10, "Phone number must be at least 10 digits").max(20),
  message: z.string().trim().min(1, "Message is required").max(1000)
});

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const validatedData = contactSchema.parse(formData);
      
      // Here you would send the data to your backend
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call
      
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you within 24-48 business hours.",
      });
      
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast({
          title: "Validation Error",
          description: error.errors[0].message,
          variant: "destructive",
        });
      } else {
        toast({
          title: "Error",
          description: "Failed to send message. Please try again.",
          variant: "destructive",
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-24 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Let's Build Something Amazing</h2>
          <p className="text-xl text-muted-foreground">
            Get in touch and let's discuss your project
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card className="lg:col-span-2 bg-card border-border">
            <CardHeader>
              <CardTitle className="text-2xl">Send us a Message</CardTitle>
              <CardDescription>
                Fill out the form below and we'll get back to you soon
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    maxLength={100}
                  />
                </div>
                <div>
                  <Input
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    maxLength={255}
                  />
                </div>
                <div>
                  <Input
                    name="phone"
                    type="tel"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    maxLength={20}
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder="Tell us about your project"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    maxLength={1000}
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-primary hover:shadow-glow"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>
          
          <div className="space-y-6">
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle>Pravaah Labs Pvt. Ltd.</CardTitle>
                <CardDescription>
                  Ready to take your business to the next level? Our team is here to help you succeed.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex gap-3">
                  <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold mb-1">Registered Address</div>
                    <p className="text-sm text-muted-foreground">
                      Datta Nagar, Kopargaon, Ahmednagar, Maharashtra India 423601
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold mb-1">Corporate Office</div>
                    <p className="text-sm text-muted-foreground">
                      C/501, 5th Floor, Suyog Pearl Cooperative Society, Shinde Vasti, Hadapsar, Pune Maharashtra, India 411013
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <Mail className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold mb-1">Support Email</div>
                    <a href="mailto:info@pravaahlabs.com" className="text-sm text-primary hover:underline">
                      info@pravaahlabs.com
                    </a>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <Phone className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold mb-1">Contact Number</div>
                    <a href="tel:+919615153615" className="text-sm text-primary hover:underline">
                      +91 914 6060 969
                    </a>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold mb-1">Office Hours</div>
                    <p className="text-sm text-muted-foreground">
                      Monday to Friday<br />
                      10:00 AM – 6:00 PM (IST)
                    </p>
                  </div>
                </div>
                
                <div className="pt-4 border-t border-border">
                  <div className="font-semibold mb-1">Response Time</div>
                  <p className="text-sm text-muted-foreground">
                    Within 24–48 business hours
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
