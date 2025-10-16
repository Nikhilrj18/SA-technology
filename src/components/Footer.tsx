import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import logo from "@/assets/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card/30 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-primary">
                <img
                  src={logo}
                  alt="Pravaah Labs Logo"
                  className="h-10 w-auto"
                />
              </div>
              <span className="text-xl font-bold">
                SA  <span className="text-primary">TECHNOLOGY</span>
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              Transforming businesses with innovative IT solutions and
              cutting-edge technology.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link to="/"
                  className="hover:text-primary transition-colors"
                >
                  Mobile Apps
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="hover:text-primary transition-colors"
                >
                  Web Development
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="hover:text-primary transition-colors"
                >
                  CRM Solutions
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="hover:text-primary transition-colors"
                >
                  Digital Marketing
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link
                  to="/terms"
                  className="hover:text-primary transition-colors"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy"
                  className="hover:text-primary transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/refund"
                  className="hover:text-primary transition-colors"
                >
                  Refund Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/delivery"
                  className="hover:text-primary transition-colors"
                >
                  Delivery Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-3">
              <Link
                to="#"
                className="w-10 h-10 rounded-lg bg-muted hover:bg-primary/20 flex items-center justify-center transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </Link>
              <Link
                to="#"
                className="w-10 h-10 rounded-lg bg-muted hover:bg-primary/20 flex items-center justify-center transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </Link>
              <Link
                to="#"
                className="w-10 h-10 rounded-lg bg-muted hover:bg-primary/20 flex items-center justify-center transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link
                to="#"
                className="w-10 h-10 rounded-lg bg-muted hover:bg-primary/20 flex items-center justify-center transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          © 2025  Sa Technology. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
