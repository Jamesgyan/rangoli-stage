import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/indisara-logo.jpeg";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Art Forms", to: "/catalog" },
  { label: "Search", to: "/search" },
  { label: "Client Dashboard", to: "/dashboard/client" },
  { label: "Artist Dashboard", to: "/dashboard/artist" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="sticky top-0 z-50 bg-card/95 backdrop-blur-md border-b shadow-sm">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="INDISARA" className="h-10 w-10 rounded-full object-cover" />
          <span className="font-heading font-bold text-xl text-primary">INDISARA</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`text-sm font-medium transition-colors hover:text-accent ${
                location.pathname === l.to ? "text-accent" : "text-foreground/70"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link to="/dashboard/admin">
            <Button size="sm" variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
              Admin
            </Button>
          </Link>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden p-2" onClick={() => setOpen(!open)}>
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t bg-card px-4 pb-4 animate-fade-in">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className={`block py-2 text-sm font-medium ${
                location.pathname === l.to ? "text-accent" : "text-foreground/70"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link to="/dashboard/admin" onClick={() => setOpen(false)}>
            <Button size="sm" variant="outline" className="mt-2 border-accent text-accent">
              Admin
            </Button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
