import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import logo from "@/assets/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
            <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center shadow-glow">
               <img src={logo} alt="Pravaah Labs Logo" className="h-10 w-auto" />
            </div>
            <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Pravaah Labs
            </span>
          </Link>
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-foreground hover:text-primary transition-colors">Home</Link>
            <Link to="/" className="text-foreground hover:text-primary transition-colors">Services</Link>
            <Link to="/" className="text-foreground hover:text-primary transition-colors">About</Link>
            <Link to="/" className="text-foreground hover:text-primary transition-colors">Contact</Link>
          </div>

          {/* CTA */}
          <div className="flex items-center gap-4">
            <Button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="hidden sm:inline-flex bg-gradient-primary hover:shadow-glow-primary transition-all"
            >
              Get Started
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
