import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import logo from "@/assets/indisara-logo.jpeg";

const Footer = () => (
  <footer className="bg-primary text-primary-foreground">
    {/* Tricolor top line */}
    <div className="h-1 gradient-tricolor-line" />
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <img src={logo} alt="INDISARA" className="h-10 w-10 rounded-full object-cover" />
            <span className="font-heading font-bold text-xl tracking-wider text-accent">INDISARA</span>
          </div>
          <p className="text-sm text-secondary-foreground/70">
            The Essence of Indian Culture.
          </p>
        </div>

        <div>
          <h4 className="font-heading font-semibold mb-3">Quick Links</h4>
          <div className="space-y-2 text-sm text-secondary-foreground/70">
            <Link to="/catalog" className="block hover:text-primary transition-colors">Art Forms</Link>
            <Link to="/search" className="block hover:text-primary transition-colors">Search Artists</Link>
            <Link to="/login" className="block hover:text-primary transition-colors">Login</Link>
          </div>
        </div>

        <div>
          <h4 className="font-heading font-semibold mb-3">Art Forms</h4>
          <div className="space-y-2 text-sm text-secondary-foreground/70">
            <p>Yakshagana</p>
            <p>Bharatanatyam</p>
            <p>Folk Dance</p>
            <p>Folk Music</p>
          </div>
        </div>

        <div>
          <h4 className="font-heading font-semibold mb-3">Contact</h4>
          <div className="space-y-2 text-sm text-secondary-foreground/70">
            <p>📧 hello@indisara.com</p>
            <p>📞 +91 98765 43210</p>
            <p>📍 India</p>
          </div>
          <div className="flex gap-3 mt-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-9 h-9 rounded-full bg-secondary-foreground/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
              <Facebook size={16} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-9 h-9 rounded-full bg-secondary-foreground/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
              <Instagram size={16} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="w-9 h-9 rounded-full bg-secondary-foreground/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
              <Twitter size={16} />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="w-9 h-9 rounded-full bg-secondary-foreground/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
              <Youtube size={16} />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-secondary-foreground/10 mt-8 pt-6 text-center text-sm text-secondary-foreground/50">
        © 2026 INDISARA. All rights reserved. Celebrating Indian Culture. 🇮🇳
      </div>
    </div>
  </footer>
);

export default Footer;
