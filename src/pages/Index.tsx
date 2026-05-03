import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Search, Calendar, PartyPopper, GraduationCap, Video, Award, Sparkles, Eye, Target, Compass, BookOpen, ShoppingBag, PartyPopper as PartyIcon, Plane, Users } from "lucide-react";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import PageTransition from "@/components/PageTransition";
import ArtFormCard from "@/components/ArtFormCard";
import { artForms } from "@/data/mockData";
import { useAuth } from "@/contexts/AuthContext";
import heroIllustration from "@/assets/hero-illustration.png";
import dholImg from "@/assets/illustration-dhol-player.png";
import dancerImg from "@/assets/illustration-classical-dancer.png";
import musiciansImg from "@/assets/illustration-folk-musicians.png";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const Index = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  const handleBookCTA = () => {
    if (isAuthenticated) navigate("/catalog");
    else navigate("/login");
  };
  return (
    <Layout>
      <PageTransition>
        {/* HERO */}
        <section className="relative gradient-warm overflow-hidden chakra-bg">
          <div className="container mx-auto px-4 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center relative z-10">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-left"
            >
              <h1 className="font-heading font-extrabold text-4xl md:text-6xl leading-[1.05] text-foreground mb-5">
                The Essence of <span className="text-gradient-warm">Indian Culture</span>
              </h1>
              <p className="text-base md:text-lg text-muted-foreground mb-8 max-w-xl leading-relaxed">
                Book authentic folk artists for weddings, corporate events, and cultural festivals — all in one platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  size="lg"
                  onClick={handleBookCTA}
                  className="bg-primary text-primary-foreground hover:bg-primary/90 font-heading font-semibold px-8 rounded-full shadow-warm"
                >
                  <Search size={18} /> Book an Artist
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="flex justify-center md:justify-end"
            >
              <img
                src={heroIllustration}
                alt="Indian folk artists performing — dancer, dhol player and musician"
                className="w-full max-w-xl drop-shadow-2xl"
                width={1280}
                height={1024}
              />
            </motion.div>
          </div>
          <div className="h-1 gradient-tricolor-line" />
        </section>

        {/* HOW IT WORKS */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="py-20 bg-card mandala-bg"
        >
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-3 text-foreground">How It Works</h2>
            <p className="text-muted-foreground mb-14 max-w-xl mx-auto">Three simple steps to bring folk art to your event</p>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
            >
              {[
                { icon: Search, title: "Browse", desc: "Explore our curated collection of authentic folk artists from across India.", color: "bg-secondary" },
                { icon: Calendar, title: "Book", desc: "Choose your date, share event details, and get instant confirmation.", color: "bg-highlight" },
                { icon: PartyPopper, title: "Enjoy", desc: "Celebrate with unforgettable performances at your event.", color: "bg-primary" },
              ].map((step, i) => (
                <motion.div
                  key={step.title}
                  variants={fadeUp}
                  whileHover={{ y: -6 }}
                  className="bg-background rounded-2xl p-8 border border-border shadow-sm hover:shadow-warm transition-all flex flex-col items-center"
                >
                  <div className={`w-16 h-16 rounded-2xl ${step.color} flex items-center justify-center mb-4 shadow-md`}>
                    <step.icon size={28} className="text-primary-foreground" />
                  </div>
                  <div className="w-7 h-7 rounded-full bg-primary/10 text-primary flex items-center justify-center font-heading font-bold text-xs mb-3">
                    {i + 1}
                  </div>
                  <h3 className="font-heading font-semibold text-xl mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        <div className="h-1 gradient-tricolor-line" />

        {/* CATEGORIES / FEATURED ART FORMS */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="py-20 bg-section rangoli-bg"
        >
          <div className="container mx-auto px-4">
            <div className="text-center mb-14">
              <h2 className="font-heading font-bold text-3xl md:text-4xl mb-3">Explore Art Forms</h2>
              <p className="text-muted-foreground">A vibrant tapestry of India's folk traditions</p>
            </div>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {artForms.map((af) => (
                <motion.div key={af.id} variants={fadeUp} whileHover={{ y: -6 }}>
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

        {/* TRUST stats removed per request — no fake data */}

        {/* WHY CHOOSE US */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="py-20 bg-card mandala-bg"
        >
          <div className="container mx-auto px-4">
            <div className="text-center mb-14">
              <h2 className="font-heading font-bold text-3xl md:text-4xl mb-3">Why Choose Indisara</h2>
              <p className="text-muted-foreground max-w-xl mx-auto">A trusted bridge between organisers and India's finest folk talent</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { img: dancerImg, title: "Verified Artists", desc: "Every artist is personally verified for authenticity, skill, and reliability." },
                { img: dholImg, title: "Transparent Pricing", desc: "Clear, upfront rates with no hidden fees — book with full confidence." },
                { img: musiciansImg, title: "End-to-End Support", desc: "Dedicated assistance from booking to backstage on the day of your event." },
              ].map((f) => (
                <motion.div
                  key={f.title}
                  variants={fadeUp}
                  whileHover={{ y: -6 }}
                  className="bg-background rounded-2xl p-6 border border-border shadow-sm hover:shadow-warm transition-all text-center"
                >
                  <div className="h-44 flex items-center justify-center mb-4">
                    <img src={f.img} alt={f.title} className="max-h-44 object-contain" loading="lazy" />
                  </div>
                  <h3 className="font-heading font-semibold text-xl mb-2">{f.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        <div className="h-1 gradient-tricolor-line" />

        {/* LEARNING FOR ARTISTS */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="py-20 bg-section chakra-bg"
        >
          <div className="container mx-auto px-4">
            <div className="text-center mb-14">
              <span className="inline-block px-4 py-1 rounded-full bg-accent/15 text-accent font-heading text-xs tracking-widest uppercase mb-4">
                Indisara Academy
              </span>
              <h2 className="font-heading font-bold text-3xl md:text-4xl mb-2">Learning for Artists</h2>
              <p className="text-primary font-heading font-semibold text-lg mb-3">Learn. Improve. Perform.</p>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Access expert-led courses, video lessons, and resources to improve skills and preserve Indian folk culture.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-10">
              {[
                { icon: GraduationCap, title: "Skill Enhancement", desc: "Structured curriculums designed by master practitioners to refine your craft." },
                { icon: Video, title: "Video Lessons", desc: "On-demand HD lessons covering technique, history, and stage performance." },
                { icon: Award, title: "Certificates & Recognition", desc: "Earn verified certificates that elevate your profile with event organisers." },
              ].map((f) => (
                <motion.div
                  key={f.title}
                  variants={fadeUp}
                  whileHover={{ y: -6 }}
                  className="bg-card rounded-2xl p-7 border border-border shadow-sm hover:shadow-warm transition-all"
                >
                  <div className="w-14 h-14 rounded-2xl gradient-saffron flex items-center justify-center mb-4 shadow-warm">
                    <f.icon size={26} className="text-primary-foreground" />
                  </div>
                  <h3 className="font-heading font-semibold text-xl mb-2">{f.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
                </motion.div>
              ))}
            </div>

            <div className="text-center">
              <Link to="/learning">
                <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-heading rounded-full px-8 shadow-warm">
                  Explore Learning →
                </Button>
              </Link>
            </div>
          </div>
        </motion.section>

        {/* VISION & MISSION */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="py-20 bg-section mandala-bg"
        >
          <div className="container mx-auto px-4">
            <div className="text-center mb-14">
              <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary font-heading text-xs tracking-widest uppercase mb-4">
                Our Purpose
              </span>
              <h2 className="font-heading font-bold text-3xl md:text-4xl mb-3">Vision &amp; Mission</h2>
              <p className="text-muted-foreground max-w-xl mx-auto">What drives Indisara every day</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              <motion.div
                variants={fadeUp}
                whileHover={{ y: -6 }}
                className="bg-card rounded-2xl p-8 border border-border shadow-sm hover:shadow-warm transition-all"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-5">
                  <Eye size={26} />
                </div>
                <h3 className="font-heading font-bold text-2xl mb-3 flex items-center gap-2">
                  <span aria-hidden>🌿</span> Vision
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  To become India's most trusted cultural platform — where every living art form finds its audience,
                  every artist finds dignity, and every Indian rediscovers the richness of their heritage.
                </p>
              </motion.div>
              <motion.div
                variants={fadeUp}
                whileHover={{ y: -6 }}
                className="bg-card rounded-2xl p-8 border border-border shadow-sm hover:shadow-warm transition-all"
              >
                <div className="w-14 h-14 rounded-2xl bg-accent/15 text-accent flex items-center justify-center mb-5">
                  <Target size={26} />
                </div>
                <h3 className="font-heading font-bold text-2xl mb-3 flex items-center gap-2">
                  <span aria-hidden>🎯</span> Mission
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  To connect authentic Indian cultural artists with the people and organisations who seek them — through
                  a curated, artist-first platform that celebrates folk and classical arts, creates meaningful
                  experiences, and ensures that India's living culture is preserved, celebrated, and fairly rewarded.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.section>

        <div className="h-1 gradient-tricolor-line" />

        {/* CATEGORIES & SERVICES */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="py-20 bg-card chakra-bg"
        >
          <div className="container mx-auto px-4">
            <div className="text-center mb-14">
              <span className="inline-block px-4 py-1 rounded-full bg-accent/15 text-accent font-heading text-xs tracking-widest uppercase mb-4">
                The Indisara Ecosystem
              </span>
              <h2 className="font-heading font-bold text-3xl md:text-4xl mb-3">Categories &amp; Services</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Six interconnected pillars working together to celebrate, share and sustain India's living culture.
              </p>
            </div>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {[
                {
                  icon: Compass,
                  title: "Discovery",
                  services: "AR/VR tours, folk stories, live streams, personalized recommendations",
                  link: "Feeds Learning & Tourism via teasers",
                },
                {
                  icon: BookOpen,
                  title: "Learning",
                  services: "Online & offline classes, DIY kits, certifications in dances and crafts",
                  link: "Connects to Marketplace (supplies) & Events (apply skills)",
                },
                {
                  icon: ShoppingBag,
                  title: "Marketplace",
                  services: "Art & crafts sales, custom orders, curated subscription boxes",
                  link: "Promotes Events; supplied by trusted partners",
                },
                {
                  icon: PartyIcon,
                  title: "Events",
                  services: "Artist bookings for weddings & festivals, virtual workshops",
                  link: "Alumni discounts from Learning; pre-trips to Tourism",
                },
                {
                  icon: Plane,
                  title: "Tourism",
                  services: "Spiritual & cultural packages, homestays, village immersions",
                  link: "Souvenirs from Marketplace; stories from Community",
                },
                {
                  icon: Users,
                  title: "Community",
                  services: "Forums, challenges, artisan profiles, UGC contests",
                  link: "Reviews build trust; data refines recommendations",
                },
              ].map((cat) => (
                <motion.div
                  key={cat.title}
                  variants={fadeUp}
                  whileHover={{ y: -6 }}
                  className="bg-background rounded-2xl p-7 border border-border shadow-sm hover:shadow-warm transition-all"
                >
                  <div className="w-14 h-14 rounded-2xl gradient-saffron flex items-center justify-center mb-4 shadow-warm">
                    <cat.icon size={26} className="text-primary-foreground" />
                  </div>
                  <h3 className="font-heading font-bold text-xl mb-2">{cat.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">{cat.services}</p>
                  <p className="text-xs text-primary font-heading uppercase tracking-wider">{cat.link}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        <div className="h-1 gradient-tricolor-line" />

        {/* ENJOY / CTA */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="py-20 bg-card text-center chakra-bg"
        >
          <div className="container mx-auto px-4">
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4 max-w-3xl mx-auto leading-tight">
              Experience the Vibrance of <span className="text-gradient-warm">Indian Folk Performances</span>
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              From intimate gatherings to grand celebrations — bring living tradition to your stage.
            </p>
            <Button
              size="lg"
              onClick={handleBookCTA}
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-heading rounded-full px-10 shadow-warm"
            >
              Book Now
            </Button>
          </div>
        </motion.section>
      </PageTransition>
    </Layout>
  );
};

export default Index;
