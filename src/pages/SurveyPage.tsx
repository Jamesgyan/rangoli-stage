import { useState } from "react";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import PageTransition from "@/components/PageTransition";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Star, CheckCircle } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const SurveyPage = () => {
  const [submitted, setSubmitted] = useState(false);
  const [overallRating, setOverallRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    howFound: "",
    bookingExperience: "",
    artistQuality: "",
    recommend: "",
    suggestions: "",
  });

  const update = (key: string, val: string) => setFormData((prev) => ({ ...prev, [key]: val }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !overallRating) {
      toast({ title: "Please fill required fields", variant: "destructive" });
      return;
    }
    setSubmitted(true);
    toast({ title: "Thank you for your feedback! 🙏" });
  };

  if (submitted) {
    return (
      <Layout>
        <PageTransition>
          <section className="min-h-screen bg-section chakra-bg flex items-center justify-center">
            <Card className="max-w-md w-full mx-4 text-center shadow-lg border-t-4 border-t-secondary">
              <CardContent className="p-8 space-y-4">
                <CheckCircle size={64} className="mx-auto text-secondary" />
                <h2 className="font-heading font-bold text-2xl">Feedback Received!</h2>
                <p className="text-muted-foreground">Your feedback helps us improve INDISARA for everyone.</p>
              </CardContent>
            </Card>
          </section>
        </PageTransition>
      </Layout>
    );
  }

  return (
    <Layout>
      <PageTransition>
        <section className="bg-section mandala-bg min-h-screen py-10">
          <div className="container mx-auto px-4 max-w-2xl">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <h1 className="font-heading font-bold text-3xl mb-2 text-center">Share Your Feedback</h1>
              <p className="text-muted-foreground text-center mb-8">Help us improve INDISARA — your experience matters! 🇮🇳</p>

              <Card className="shadow-lg border-t-4 border-t-primary">
                <CardHeader>
                  <CardTitle className="font-heading">Survey Form</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <Label>Name *</Label>
                        <Input placeholder="Your name" value={formData.name} onChange={(e) => update("name", e.target.value)} />
                      </div>
                      <div>
                        <Label>Email</Label>
                        <Input type="email" placeholder="your@email.com" value={formData.email} onChange={(e) => update("email", e.target.value)} />
                      </div>
                    </div>

                    <div>
                      <Label className="mb-2 block">Overall Experience *</Label>
                      <div className="flex gap-1">
                        {[1, 2, 3, 4, 5].map((i) => (
                          <button
                            type="button"
                            key={i}
                            onMouseEnter={() => setHoverRating(i)}
                            onMouseLeave={() => setHoverRating(0)}
                            onClick={() => setOverallRating(i)}
                            className="transition-transform hover:scale-125"
                          >
                            <Star size={32} className={i <= (hoverRating || overallRating) ? "fill-highlight text-highlight" : "text-muted-foreground/30"} />
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <Label className="mb-2 block">How did you find INDISARA?</Label>
                      <RadioGroup value={formData.howFound} onValueChange={(v) => update("howFound", v)} className="space-y-2">
                        {["Social Media", "Friend / Family", "Google Search", "Event / Festival", "Other"].map((opt) => (
                          <div key={opt} className="flex items-center gap-2">
                            <RadioGroupItem value={opt} id={opt} />
                            <Label htmlFor={opt} className="cursor-pointer">{opt}</Label>
                          </div>
                        ))}
                      </RadioGroup>
                    </div>

                    <div>
                      <Label className="mb-2 block">Booking Experience</Label>
                      <RadioGroup value={formData.bookingExperience} onValueChange={(v) => update("bookingExperience", v)} className="flex gap-4 flex-wrap">
                        {["Excellent", "Good", "Average", "Poor"].map((opt) => (
                          <div key={opt} className="flex items-center gap-1">
                            <RadioGroupItem value={opt} id={`be-${opt}`} />
                            <Label htmlFor={`be-${opt}`} className="cursor-pointer text-sm">{opt}</Label>
                          </div>
                        ))}
                      </RadioGroup>
                    </div>

                    <div>
                      <Label className="mb-2 block">Would you recommend INDISARA?</Label>
                      <RadioGroup value={formData.recommend} onValueChange={(v) => update("recommend", v)} className="flex gap-4">
                        {["Definitely", "Maybe", "No"].map((opt) => (
                          <div key={opt} className="flex items-center gap-1">
                            <RadioGroupItem value={opt} id={`rec-${opt}`} />
                            <Label htmlFor={`rec-${opt}`} className="cursor-pointer text-sm">{opt}</Label>
                          </div>
                        ))}
                      </RadioGroup>
                    </div>

                    <div>
                      <Label>Suggestions for Improvement</Label>
                      <Textarea placeholder="Share your ideas..." value={formData.suggestions} onChange={(e) => update("suggestions", e.target.value)} rows={3} />
                    </div>

                    <Button type="submit" className="w-full gradient-saffron text-white font-heading rounded-full shadow-lg">
                      Submit Feedback
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>
      </PageTransition>
    </Layout>
  );
};

export default SurveyPage;
