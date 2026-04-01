import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Search, Calendar, PartyPopper, Users, Trophy, MapPin } from "lucide-react";
import Layout from "@/components/Layout";
import ArtFormCard from "@/components/ArtFormCard";
import { artForms } from "@/data/mockData";
import logo from "@/assets/indisara-logo.jpeg";

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative gradient-cultural text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 mandala-bg opacity-30" />
        <div className="container mx-auto px-4 py-20 md:py-32 relative z-10 text-center">
          <img src={logo} alt="INDISARA" className="w-24 h-24 rounded-full mx-auto mb-6 shadow-lg border-4 border-highlight/30" />
          <h1 className="font-heading font-extrabold text-4xl md:text-6xl mb-4 leading-tight">
            Discover & Book<br />
            <span className="text-highlight">Authentic Indian Folk Artists</span>
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            From weddings to festivals — bring culture to life with INDISARA
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/catalog">
              <Button size="lg" className="gradient-saffron text-white font-heading font-semibold px-8 hover:opacity-90 shadow-lg">
                <Search size={18} /> Browse Artists
              </Button>
            </Link>
            <Link to="/dashboard/artist">
              <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-heading">
                Become an Artist
              </Button>
            </Link>
          </div>
        </div>
        {/* Decorative bottom wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" className="w-full text-background fill-current">
            <path d="M0,30 C360,60 720,0 1080,30 C1260,45 1380,35 1440,30 L1440,60 L0,60 Z" />
          </svg>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-background rangoli-bg">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-2">How It Works</h2>
          <p className="text-muted-foreground mb-12">Three simple steps to bring folk art to your event</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { icon: Search, title: "Browse", desc: "Explore our curated collection of authentic folk artists from across Karnataka" },
              { icon: Calendar, title: "Book", desc: "Choose your date, share event details, and get instant confirmation" },
              { icon: PartyPopper, title: "Enjoy", desc: "Sit back and experience the magic of traditional folk performances" },
            ].map((step, i) => (
              <div key={step.title} className="flex flex-col items-center p-6 group">
                <div className="w-20 h-20 rounded-full gradient-saffron flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg">
                  <step.icon size={32} className="text-white" />
                </div>
                <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-heading font-bold text-sm mb-3">
                  {i + 1}
                </div>
                <h3 className="font-heading font-semibold text-xl mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Art Forms */}
      <section className="py-16 bg-section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-2">Featured Art Forms</h2>
            <p className="text-muted-foreground">Explore the rich diversity of Karnataka's folk traditions</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {artForms.map((af) => (
              <ArtFormCard key={af.id} artForm={af} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/catalog">
              <Button variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground font-heading">
                View All Art Forms →
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-14 gradient-cultural text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { icon: Users, value: "150+", label: "Folk Artists" },
              { icon: Trophy, value: "2,500+", label: "Events Completed" },
              { icon: MapPin, value: "45+", label: "Cities Covered" },
              { icon: PartyPopper, value: "98%", label: "Client Satisfaction" },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col items-center">
                <stat.icon size={28} className="text-highlight mb-2" />
                <span className="font-heading font-extrabold text-3xl md:text-4xl">{stat.value}</span>
                <span className="text-primary-foreground/70 text-sm mt-1">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-background text-center rangoli-bg">
        <div className="container mx-auto px-4">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">Ready to Celebrate with Culture?</h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Join INDISARA today and experience the magic of India's folk art traditions at your next event.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/search">
              <Button size="lg" className="gradient-saffron text-white font-heading shadow-lg">
                Find an Artist
              </Button>
            </Link>
            <Link to="/dashboard/artist">
              <Button size="lg" variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground font-heading">
                Register as Artist
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
