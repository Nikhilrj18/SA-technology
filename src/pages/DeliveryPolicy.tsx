import { Card } from "@/components/ui/card";
import { Truck } from "lucide-react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const DeliveryPolicy = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      <section className="pt-32 pb-16 px-4 relative overflow-hidden">
        <div className="absolute top-20 right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto max-w-4xl relative z-10">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Delivery <span className="bg-gradient-primary bg-clip-text text-transparent">Policy</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Applicable to digital service delivery only
            </p>
          </div>

          <Card className="p-8 md:p-12 bg-card/50 backdrop-blur-sm border-border">
            <div className="flex items-start gap-4 mb-8">
              <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center flex-shrink-0">
                <Truck className="w-7 h-7 text-primary-foreground" />
              </div>
              <div>
                <p className="text-muted-foreground text-lg">
                  Understanding our digital service delivery process
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="font-semibold text-xl mb-3">1. Nature of Delivery</h3>
                <p className="text-muted-foreground leading-relaxed">
                  All services are delivered digitally via email, project management tools, or hosting platforms (e.g., GitHub, Google Drive, or client servers).
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-xl mb-3">2. Timeline</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Timelines are mutually agreed upon before project commencement. Delivery schedules may vary based on revisions, dependencies, or unforeseen circumstances.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-xl mb-3">3. Ownership Transfer</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Final deliverables (code, design files, or credentials) are shared upon full payment and project sign-off.
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

export default DeliveryPolicy;
