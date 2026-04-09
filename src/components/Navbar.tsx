import { Link, useLocation } from "react-router-dom";
import { Menu, X, LogOut } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import logo from "@/assets/indisara-logo.jpeg";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Art Forms", to: "/catalog" },
  { label: "Search", to: "/search" },
  { label: "Survey", to: "/survey" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const { user, isAuthenticated, logout } = useAuth();

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b shadow-sm">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="INDISARA" className="h-10 w-10 rounded-full object-cover" />
          <span className="font-heading font-bold text-xl tracking-wider text-primary">INDISARA</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`relative text-sm font-medium transition-colors hover:text-secondary pb-1 ${
                location.pathname === l.to
                  ? "text-primary after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary after:rounded-full"
                  : "text-foreground/70"
              }`}
            >
              {l.label}
            </Link>
          ))}

          {isAuthenticated ? (
            <div className="flex items-center gap-3">
              <Link to="/dashboard">
                <Button size="sm" variant="outline" className="rounded-full px-4 capitalize">
                  {user?.role ? `${user.role} Dashboard` : "Dashboard"}
                </Button>
              </Link>
              <Button size="sm" variant="ghost" onClick={logout} className="text-destructive gap-1">
                <LogOut size={14} /> Logout
              </Button>
            </div>
          ) : (
            <Link to="/login">
              <Button size="sm" className="gradient-saffron text-white font-heading rounded-full px-6 hover:opacity-90 shadow-md">
                Login
              </Button>
            </Link>
          )}
        </div>

        <button className="md:hidden p-2" onClick={() => setOpen(!open)}>
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t bg-white px-4 pb-4 animate-fade-in">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className={`block py-2 text-sm font-medium ${
                location.pathname === l.to ? "text-primary" : "text-foreground/70"
              }`}
            >
              {l.label}
            </Link>
          ))}
          {isAuthenticated ? (
            <>
              <Link to="/dashboard" onClick={() => setOpen(false)}>
                <Button size="sm" variant="outline" className="mt-2 rounded-full px-4 capitalize">
                  {user?.role ? `${user.role} Dashboard` : "Dashboard"}
                </Button>
              </Link>
              <Button size="sm" variant="ghost" onClick={() => { logout(); setOpen(false); }} className="mt-2 text-destructive gap-1">
                <LogOut size={14} /> Logout
              </Button>
            </>
          ) : (
            <Link to="/login" onClick={() => setOpen(false)}>
              <Button size="sm" className="mt-2 gradient-saffron text-white font-heading rounded-full px-6">
                Login
              </Button>
            </Link>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
