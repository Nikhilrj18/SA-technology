import { Card } from "@/components/ui/card";
import { Scale } from "lucide-react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const TermsConditions = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      <section className="pt-32 pb-16 px-4 relative overflow-hidden">
        <div className="absolute top-20 right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto max-w-4xl relative z-10">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Terms & <span className="bg-gradient-primary bg-clip-text text-transparent">Conditions</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Please read these terms carefully before using our services
            </p>
          </div>

          <Card className="p-8 md:p-12 bg-card/50 backdrop-blur-sm border-border">
            <div className="flex items-start gap-4 mb-8">
              <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center flex-shrink-0">
                <Scale className="w-7 h-7 text-primary-foreground" />
              </div>
              <div>
                <p className="text-muted-foreground text-lg">
                  Welcome to  Sa Technology. By using our website or availing our services, you agree to the following terms:
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="font-semibold text-xl mb-3">1. Service Use</h3>
                <p className="text-muted-foreground leading-relaxed">
                  All services provided by Sa Technology are subject to mutually signed agreements, project scopes, and payment schedules.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-xl mb-3">2. Intellectual Property</h3>
                <p className="text-muted-foreground leading-relaxed">
                  All materials, designs, and source code developed remain the property of Sa Technology until full payment is received. Post-completion, ownership may be transferred as per the project agreement.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-xl mb-3">3. Accuracy & Liability</h3>
                <p className="text-muted-foreground leading-relaxed">
                  While we take utmost care,  Sa Technology shall not be held liable for any indirect, incidental, or consequential damages arising from the use or inability to use our services or website.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-xl mb-3">4. External Links</h3>
                <p className="text-muted-foreground leading-relaxed">
                  This website may contain external links for convenience.  Sa Technology does not endorse or assume responsibility for third-party content or services.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-xl mb-3">5. Jurisdiction</h3>
                <p className="text-muted-foreground leading-relaxed">
                  All disputes are subject to the Jaipur, Rajasthan, India.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-xl mb-3">6. Amendments</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Sa Technology reserves the right to modify these Terms at any time. Continued use constitutes acceptance of those changes.
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

export default TermsConditions;
