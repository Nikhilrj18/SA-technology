import { Card } from "@/components/ui/card";
import { Shield } from "lucide-react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      <section className="pt-32 pb-16 px-4 relative overflow-hidden">
        <div className="absolute top-20 right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto max-w-4xl relative z-10">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Privacy <span className="bg-gradient-primary bg-clip-text text-transparent">Policy</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Your privacy and data security are our top priority
            </p>
          </div>

          <Card className="p-8 md:p-12 bg-card/50 backdrop-blur-sm border-border">
            <div className="flex items-start gap-4 mb-8">
              <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center flex-shrink-0">
                <Shield className="w-7 h-7 text-primary-foreground" />
              </div>
              <div>
                <p className="text-muted-foreground text-lg">
                  At Pravaah Labs, your privacy and data security are of top priority.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="font-semibold text-xl mb-3">1. Information We Collect</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 leading-relaxed">
                  <li>Personal details (name, email, phone number)</li>
                  <li>Business and project details shared during consultation</li>
                  <li>Website usage data (cookies, analytics, IP address)</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-xl mb-3">2. How We Collect It</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 leading-relaxed">
                  <li>Through website forms and client inquiries</li>
                  <li>Automatically via analytics tools like Google Analytics</li>
                  <li>From direct client communication (email, calls, meetings)</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-xl mb-3">3. How We Use It</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 leading-relaxed">
                  <li>To respond to project inquiries and provide quotations</li>
                  <li>To improve our website and customer experience</li>
                  <li>To share relevant updates, newsletters, or promotional offers (with consent)</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-xl mb-3">4. Data Security</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We implement industry-standard security measures to prevent unauthorized access, alteration, or misuse of your data.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-xl mb-3">5. Data Sharing</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We do not sell or share personal information with third parties except where required by law or with client consent.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-xl mb-3">6. Your Rights</h3>
                <p className="text-muted-foreground leading-relaxed">
                  You can request access, correction, or deletion of your data by contacting{" "}
                  <a href="mailto:privacy@pravaahlabs.com" className="text-primary hover:underline font-medium">
                    privacy@pravaahlabs.com
                  </a>
                  .
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

export default PrivacyPolicy;
