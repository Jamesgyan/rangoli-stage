import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AuthProvider } from "@/contexts/AuthContext";
import Index from "./pages/Index";
import Catalog from "./pages/Catalog";
import ArtistProfile from "./pages/ArtistProfile";
import SearchPage from "./pages/SearchPage";
import BookingPage from "./pages/BookingPage";
import LoginPage from "./pages/LoginPage";
import SelectRole from "./pages/SelectRole";
import Dashboard from "./pages/Dashboard";
import SurveyPage from "./pages/SurveyPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Index />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/artist/:id" element={<ArtistProfile />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/booking/:artistId" element={<BookingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/select-role" element={<SelectRole />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/survey" element={<SurveyPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <AuthProvider>
        <BrowserRouter>
          <AnimatedRoutes />
        </BrowserRouter>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
