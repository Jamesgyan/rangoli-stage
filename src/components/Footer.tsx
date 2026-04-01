import { Link } from "react-router-dom";
import logo from "@/assets/indisara-logo.jpeg";

const Footer = () => (
  <footer className="bg-primary text-primary-foreground mandala-bg">
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <img src={logo} alt="INDISARA" className="h-10 w-10 rounded-full object-cover" />
            <span className="font-heading font-bold text-xl">INDISARA</span>
          </div>
          <p className="text-sm text-primary-foreground/70">
            Connecting authentic Indian folk artists with event organizers. Bringing culture to life.
          </p>
        </div>

        <div>
          <h4 className="font-heading font-semibold mb-3">Quick Links</h4>
          <div className="space-y-2 text-sm text-primary-foreground/70">
            <Link to="/catalog" className="block hover:text-highlight transition-colors">Art Forms</Link>
            <Link to="/search" className="block hover:text-highlight transition-colors">Search Artists</Link>
            <Link to="/dashboard/client" className="block hover:text-highlight transition-colors">Client Dashboard</Link>
            <Link to="/dashboard/artist" className="block hover:text-highlight transition-colors">Artist Dashboard</Link>
          </div>
        </div>

        <div>
          <h4 className="font-heading font-semibold mb-3">Art Forms</h4>
          <div className="space-y-2 text-sm text-primary-foreground/70">
            <p>Yakshagana</p>
            <p>Dollu Kunitha</p>
            <p>Bharatanatyam</p>
            <p>Huli Vesha</p>
          </div>
        </div>

        <div>
          <h4 className="font-heading font-semibold mb-3">Contact</h4>
          <div className="space-y-2 text-sm text-primary-foreground/70">
            <p>📧 hello@indisara.com</p>
            <p>📞 +91 98765 43210</p>
            <p>📍 Bengaluru, Karnataka</p>
          </div>
          <div className="flex gap-3 mt-4">
            <span className="w-8 h-8 rounded-full bg-primary-foreground/10 flex items-center justify-center text-xs hover:bg-highlight hover:text-highlight-foreground transition-colors cursor-pointer">fb</span>
            <span className="w-8 h-8 rounded-full bg-primary-foreground/10 flex items-center justify-center text-xs hover:bg-highlight hover:text-highlight-foreground transition-colors cursor-pointer">ig</span>
            <span className="w-8 h-8 rounded-full bg-primary-foreground/10 flex items-center justify-center text-xs hover:bg-highlight hover:text-highlight-foreground transition-colors cursor-pointer">tw</span>
            <span className="w-8 h-8 rounded-full bg-primary-foreground/10 flex items-center justify-center text-xs hover:bg-highlight hover:text-highlight-foreground transition-colors cursor-pointer">yt</span>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10 mt-8 pt-6 text-center text-sm text-primary-foreground/50">
        © 2026 INDISARA. All rights reserved. Celebrating Indian Culture.
      </div>
    </div>
  </footer>
);

export default Footer;
