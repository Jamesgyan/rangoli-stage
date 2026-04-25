import { Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import PageTransition from "@/components/PageTransition";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import { Search, Calendar, User, LogOut } from "lucide-react";

const Dashboard = () => {
  const { user, logout } = useAuth();

  if (!user) return <Navigate to="/login" replace />;

  const actions = [
    { icon: Search, label: "Browse Artists", to: "/catalog", color: "border-t-primary" },
    { icon: Calendar, label: "My Bookings", to: "#", color: "border-t-secondary" },
    { icon: User, label: "My Profile", to: "#", color: "border-t-accent" },
  ];

  return (
    <Layout>
      <PageTransition>
        <section className="min-h-[calc(100vh-4rem)] bg-section chakra-bg py-12 px-4">
          <div className="container mx-auto max-w-4xl space-y-8">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex items-center justify-between">
              <div>
                <h1 className="font-heading font-bold text-3xl">
                  Welcome, <span className="text-primary">{user.name}</span>
                </h1>
                <p className="text-muted-foreground">My Dashboard</p>
              </div>
              <Button variant="outline" size="sm" className="gap-2 text-destructive" onClick={logout}>
                <LogOut size={16} /> Logout
              </Button>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {actions.map((a, i) => (
                <motion.div key={a.label} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}>
                  <Link to={a.to}>
                    <Card className={`hover:shadow-lg transition-all cursor-pointer border-t-4 ${a.color}`}>
                      <CardContent className="p-6 flex flex-col items-center gap-3 text-center">
                        <a.icon className="w-10 h-10 text-primary" />
                        <span className="font-heading font-semibold">{a.label}</span>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </PageTransition>
    </Layout>
  );
};

export default Dashboard;
