import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Search, Calendar, PartyPopper, Users, Trophy, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import PageTransition from "@/components/PageTransition";
import ArtFormCard from "@/components/ArtFormCard";
import AutoScrollTestimonials from "@/components/AutoScrollTestimonials";
import { artForms } from "@/data/mockData";
import logo from "@/assets/indisara-logo.jpeg";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const Index = () => {
  return (
    <Layout>
      <PageTransition>
      <section className="relative gradient-tricolor overflow-hidden chakra-bg">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="container mx-auto px-4 py-20 md:py-32 relative z-10 text-center"
        >
          <img src={logo} alt="INDISARA" className="w-24 h-24 rounded-full mx-auto mb-6 shadow-lg border-4 border-primary/20" />
          <h1 className="font-heading font-extrabold text-4xl md:text-6xl mb-4 leading-tight text-foreground">
            Discover & Book<br />
            <span className="text-primary">Authentic Indian Folk Artists</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            From weddings to festivals — bring culture to life with INDISARA
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/catalog">
              <Button size="lg" className="gradient-saffron text-white font-heading font-semibold px-8 hover:opacity-90 shadow-lg rounded-full">
                <Search size={18} /> Browse Artists
              </Button>
            </Link>
            <Link to="/login">
              <Button size="lg" variant="outline" className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground font-heading rounded-full">
                Become an Artist
              </Button>
            </Link>
          </div>
        </motion.div>
        {/* Tricolor divider */}
        <div className="h-1 gradient-tricolor-line" />
      </section>

      {/* How It Works */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="py-16 bg-card mandala-bg"
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-2 text-foreground">How It Works</h2>
          <p className="text-muted-foreground mb-12">Three simple steps to bring folk art to your event</p>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            {[
              { icon: Search, title: "Browse", desc: "Explore our curated collection of authentic folk artists from across Karnataka", color: "bg-primary" },
              { icon: Calendar, title: "Book", desc: "Choose your date, share event details, and get instant confirmation", color: "bg-accent" },
              { icon: PartyPopper, title: "Enjoy", desc: "Sit back and experience the magic of traditional folk performances", color: "bg-secondary" },
            ].map((step, i) => (
              <motion.div key={step.title} variants={fadeUp} className="flex flex-col items-center p-6 group">
                <div className={`w-20 h-20 rounded-full ${step.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                  <step.icon size={32} className="text-white" />
                </div>
                <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-heading font-bold text-sm mb-3">
                  {i + 1}
                </div>
                <h3 className="font-heading font-semibold text-xl mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Tricolor line divider */}
      <div className="h-1 gradient-tricolor-line" />

      {/* Featured Art Forms */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="py-16 bg-section rangoli-bg"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-2">Featured Art Forms</h2>
            <p className="text-muted-foreground">Explore the rich diversity of Karnataka's folk traditions</p>
          </div>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {artForms.map((af) => (
              <motion.div key={af.id} variants={fadeUp}>
                <ArtFormCard artForm={af} />
              </motion.div>
            ))}
          </motion.div>
          <div className="text-center mt-10">
            <Link to="/catalog">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-heading rounded-full">
                View All Art Forms →
              </Button>
            </Link>
          </div>
        </div>
      </motion.section>

      {/* Trust Indicators — Deep Green */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="py-14 bg-secondary text-secondary-foreground"
      >
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          >
            {[
              { icon: Users, value: "150+", label: "Folk Artists" },
              { icon: Trophy, value: "2,500+", label: "Events Completed" },
              { icon: MapPin, value: "45+", label: "Cities Covered" },
              { icon: PartyPopper, value: "98%", label: "Client Satisfaction" },
            ].map((stat) => (
              <motion.div key={stat.label} variants={fadeUp} className="flex flex-col items-center">
                <stat.icon size={28} className="text-highlight mb-2" />
                <span className="font-heading font-extrabold text-3xl md:text-4xl">{stat.value}</span>
                <span className="text-secondary-foreground/70 text-sm mt-1">{stat.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Testimonials — Auto scroll */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="py-16 bg-card mandala-bg"
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-2">What Our Clients Say</h2>
          <p className="text-muted-foreground mb-8">Real reviews from real celebrations</p>
          <AutoScrollTestimonials />
        </div>
      </motion.section>

      <div className="h-1 gradient-tricolor-line" />

      {/* CTA */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="py-16 bg-card text-center chakra-bg"
      >
        <div className="container mx-auto px-4">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">Ready to Celebrate with Culture?</h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Join INDISARA today and experience the magic of India's folk art traditions at your next event.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/search">
              <Button size="lg" className="gradient-saffron text-white font-heading shadow-lg rounded-full">
                Find an Artist
              </Button>
            </Link>
            <Link to="/survey">
              <Button size="lg" variant="outline" className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground font-heading rounded-full">
                Share Feedback
              </Button>
            </Link>
          </div>
        </div>
      </motion.section>
      </PageTransition>
    </Layout>
  );
};

export default Index;
