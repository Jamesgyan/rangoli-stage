import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import PageTransition from "@/components/PageTransition";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Mic2 } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";

const SelectRole = () => {
  const [selected, setSelected] = useState<"client" | "artist" | null>(null);
  const { setRole } = useAuth();
  const navigate = useNavigate();

  const handleConfirm = () => {
    if (!selected) return;
    setRole(selected);
    navigate("/dashboard");
  };

  const roles = [
    { key: "client" as const, icon: Users, title: "Client", desc: "Browse and book folk artists for your events" },
    { key: "artist" as const, icon: Mic2, title: "Artist", desc: "Showcase your talent and manage bookings" },
  ];

  return (
    <Layout>
      <PageTransition>
        <section className="min-h-[calc(100vh-4rem)] gradient-tricolor chakra-bg flex items-center justify-center py-12 px-4">
          <div className="w-full max-w-2xl text-center space-y-8">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <h1 className="font-heading font-bold text-3xl mb-2">Choose Your Role</h1>
              <p className="text-muted-foreground">How would you like to use INDISARA?</p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {roles.map((r, i) => (
                <motion.div
                  key={r.key}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.15 }}
                >
                  <Card
                    onClick={() => setSelected(r.key)}
                    className={`cursor-pointer transition-all duration-300 hover:shadow-xl border-2 ${
                      selected === r.key
                        ? "border-primary shadow-lg scale-[1.03]"
                        : "border-transparent hover:border-primary/30"
                    }`}
                  >
                    <CardContent className="p-8 flex flex-col items-center gap-4">
                      <div className={`w-16 h-16 rounded-full flex items-center justify-center ${
                        selected === r.key ? "gradient-saffron" : "bg-muted"
                      }`}>
                        <r.icon className={`w-8 h-8 ${selected === r.key ? "text-white" : "text-muted-foreground"}`} />
                      </div>
                      <h2 className="font-heading font-bold text-xl">{r.title}</h2>
                      <p className="text-sm text-muted-foreground">{r.desc}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
              <Button
                onClick={handleConfirm}
                disabled={!selected}
                className="gradient-saffron text-white font-heading font-semibold px-12 h-12 rounded-full text-lg"
              >
                Continue
              </Button>
            </motion.div>
          </div>
        </section>
      </PageTransition>
    </Layout>
  );
};

export default SelectRole;
