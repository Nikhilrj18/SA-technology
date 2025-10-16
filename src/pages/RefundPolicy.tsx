import { Card } from "@/components/ui/card";
import { DollarSign } from "lucide-react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const RefundPolicy = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      <section className="pt-32 pb-16 px-4 relative overflow-hidden">
        <div className="absolute top-20 right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto max-w-4xl relative z-10">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Refund & <span className="bg-gradient-primary bg-clip-text text-transparent">Cancellation Policy</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Our commitment to quality services and client satisfaction
            </p>
          </div>

          <Card className="p-8 md:p-12 bg-card/50 backdrop-blur-sm border-border">
            <div className="flex items-start gap-4 mb-8">
              <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center flex-shrink-0">
                <DollarSign className="w-7 h-7 text-primary-foreground" />
              </div>
              <div>
                <p className="text-muted-foreground text-lg">
                  Our focus is on delivering quality services and client satisfaction. However, in case of cancellation or refund requests:
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="font-semibold text-xl mb-3">1. Project Cancellation</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 leading-relaxed">
                  <li>Either party may cancel a project with prior written notice as per the signed agreement.</li>
                  <li>In-progress or completed milestones will be billed proportionately.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-xl mb-3">2. Refund Policy</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 leading-relaxed">
                  <li>Advance payments or retainers are non-refundable once work has begun.</li>
                  <li>Refunds (if applicable) are processed within 7–10 business days after internal approval.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-xl mb-3">3. Digital Services</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Since services like software development, design, or digital marketing are custom-built, no full refunds are issued once deliverables are shared.
                </p>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground">
                Last updated: January 2025
              </p>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default RefundPolicy;
