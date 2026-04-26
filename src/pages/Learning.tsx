import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Video, Award, Play } from "lucide-react";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import PageTransition from "@/components/PageTransition";
import musiciansImg from "@/assets/illustration-folk-musicians.png";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const courses = [
  { title: "Foundations of Folk Dance", lessons: 18, level: "Beginner", icon: Play },
  { title: "Mastering the Dhol", lessons: 24, level: "Intermediate", icon: Play },
  { title: "Storytelling through Theatre", lessons: 12, level: "Advanced", icon: Play },
  { title: "Stage Presence & Performance", lessons: 9, level: "All Levels", icon: Play },
];

const Learning = () => {
  return (
    <Layout>
      <PageTransition>
        <section className="relative gradient-warm overflow-hidden chakra-bg">
          <div className="container mx-auto px-4 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center relative z-10">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <span className="inline-block px-4 py-1 rounded-full bg-accent/15 text-accent font-heading text-xs tracking-widest uppercase mb-4">
                Learning · Indisara Academy
              </span>
              <h1 className="font-heading font-extrabold text-4xl md:text-5xl leading-tight text-foreground mb-4">
                Learn. Improve. <span className="text-primary">Perform.</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8 max-w-xl">
                Access expert-led courses, video lessons, and resources to improve your skills and preserve Indian folk culture.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-heading rounded-full shadow-warm">
                  Start Learning
                </Button>
                <Link to="/catalog">
                  <Button size="lg" variant="outline" className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground font-heading rounded-full">
                    Explore Art Forms
                  </Button>
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center"
            >
              <img src={musiciansImg} alt="Indian folk musicians" className="max-w-md w-full" loading="lazy" />
            </motion.div>
          </div>
          <div className="h-1 gradient-tricolor-line" />
        </section>

        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="py-20 bg-card mandala-bg"
        >
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-heading font-bold text-3xl md:text-4xl mb-3">Featured Courses</h2>
              <p className="text-muted-foreground">Curated programs by master practitioners</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {courses.map((c, i) => (
                <motion.div
                  key={c.title}
                  variants={fadeUp}
                  whileHover={{ y: -6 }}
                  className="bg-background rounded-2xl p-6 border border-border shadow-sm hover:shadow-warm transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                    <c.icon size={22} />
                  </div>
                  <h3 className="font-heading font-semibold text-lg mb-2">{c.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{c.lessons} lessons · {c.level}</p>
                  <Button size="sm" variant="ghost" className="text-primary hover:text-primary px-0">View Course →</Button>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

      </PageTransition>
    </Layout>
  );
};

export default Learning;
