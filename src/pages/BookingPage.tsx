import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { z } from "zod";
import Layout from "@/components/Layout";
import PageTransition from "@/components/PageTransition";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CheckCircle2, Mail } from "lucide-react";
import { artists } from "@/data/mockData";
import { useAuth } from "@/contexts/AuthContext";
import { toast } from "@/hooks/use-toast";

const CATEGORIES = ["Singer", "Dancer", "Instrumentalist", "Folk Group", "DJ", "Anchor"];
const GENRES = ["Classical", "Folk", "Bollywood", "Sufi", "Devotional", "Fusion", "Other"];
const EVENTS = [
  "House Party",
  "Wedding",
  "Corporate Event",
  "Festival",
  "Temple Event",
  "Birthday",
  "Other",
];
const LOCATION_TYPES = ["Indoor", "Outdoor", "Banquet Hall", "Open Ground", "Auditorium"];
const BUDGETS = [
  "Under ₹10,000",
  "₹10,000 – ₹25,000",
  "₹25,000 – ₹50,000",
  "₹50,000 – ₹1,00,000",
  "Above ₹1,00,000",
];

const bookingSchema = z.object({
  category: z.string().min(1, "Select a category"),
  name: z.string().trim().min(2, "Enter your name").max(100),
  mobile: z
    .string()
    .trim()
    .regex(/^[0-9+\-\s]{7,15}$/i, "Enter a valid mobile number"),
  email: z.string().trim().email("Enter a valid email").max(255),
  genre: z.string().min(1, "Select a genre"),
  event: z.string().min(1, "Select an event"),
  eventDate: z.string().min(1, "Select event date"),
  locationType: z.string().min(1, "Select location type"),
  location: z.string().trim().min(2, "Enter location").max(200),
  budget: z.string().min(1, "Select a budget"),
});

type BookingForm = z.infer<typeof bookingSchema>;

const BookingPage = () => {
  const { artistId } = useParams();
  const navigate = useNavigate();
  const { user, isAuthenticated } = useAuth();
  const artist = artists.find((a) => a.id === artistId);

  const [form, setForm] = useState<BookingForm>({
    category: artist?.artForm?.toLowerCase().includes("danc") ? "Dancer" : "Singer",
    name: user?.name ?? "",
    mobile: "",
    email: user?.email ?? "",
    genre: "Classical",
    event: "House Party",
    eventDate: "",
    locationType: "",
    location: "",
    budget: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof BookingForm, string>>>({});
  const [submitted, setSubmitted] = useState(false);

  // Auth gate
  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login", {
        replace: true,
        state: { redirectTo: `/booking/${artistId}` },
      });
    }
  }, [isAuthenticated, navigate, artistId]);

  if (!artist) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="font-heading font-bold text-2xl">Artist not found</h1>
          <Link to="/catalog" className="text-primary underline mt-4 inline-block">
            Browse Artists
          </Link>
        </div>
      </Layout>
    );
  }

  const update = <K extends keyof BookingForm>(key: K, value: BookingForm[K]) => {
    setForm((f) => ({ ...f, [key]: value }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = bookingSchema.safeParse(form);
    if (!parsed.success) {
      const fieldErrors: Partial<Record<keyof BookingForm, string>> = {};
      parsed.error.issues.forEach((issue) => {
        const k = issue.path[0] as keyof BookingForm;
        if (!fieldErrors[k]) fieldErrors[k] = issue.message;
      });
      setErrors(fieldErrors);
      toast({
        title: "Please complete the form",
        description: "Some fields need your attention.",
        variant: "destructive",
      });
      return;
    }

    // Persist booking (visual-only — replace with backend when Cloud is enabled)
    const booking = {
      id: crypto.randomUUID(),
      artistId: artist.id,
      artistName: artist.name,
      userId: user?.id,
      ...parsed.data,
      createdAt: new Date().toISOString(),
      status: "pending",
    };
    const all = JSON.parse(localStorage.getItem("indisara_bookings") || "[]");
    all.push(booking);
    localStorage.setItem("indisara_bookings", JSON.stringify(all));

    toast({
      title: "Booking submitted ✓",
      description: `A confirmation copy has been sent to ${parsed.data.email}.`,
    });
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <Layout>
        <PageTransition>
          <section className="bg-section chakra-bg min-h-[80vh] flex items-center justify-center py-16">
            <Card className="max-w-lg w-full mx-4 text-center shadow-warm border-t-4 border-t-accent">
              <CardContent className="p-8 space-y-4">
                <CheckCircle2 size={64} className="mx-auto text-accent" />
                <h2 className="font-heading font-bold text-2xl">Booking Request Sent!</h2>
                <p className="text-muted-foreground">
                  Your request to book <strong>{artist.name}</strong> has been received. Our team
                  will contact you shortly.
                </p>
                <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground bg-muted rounded-lg p-3">
                  <Mail size={16} />
                  A confirmation copy was sent to <strong>{form.email}</strong>
                </div>
                <div className="flex gap-3 justify-center pt-2">
                  <Link to="/">
                    <Button variant="outline" className="rounded-full">
                      Back to Home
                    </Button>
                  </Link>
                  <Link to="/dashboard">
                    <Button className="bg-primary text-primary-foreground rounded-full">
                      View Dashboard
                    </Button>
                  </Link>
                </div>
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
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="mb-6 flex items-center gap-4">
              <img
                src={artist.photo}
                alt={artist.name}
                className="w-14 h-14 rounded-full object-cover border-2 border-primary/30"
              />
              <div>
                <h1 className="font-heading font-bold text-2xl md:text-3xl">
                  Book <span className="text-primary">{artist.name}</span>
                </h1>
                <p className="text-sm text-muted-foreground">
                  Fill in the details below and our team will confirm shortly.
                </p>
              </div>
            </div>

            <Card className="shadow-warm border-t-4 border-t-primary rounded-2xl">
              <CardContent className="p-6 md:p-8">
                <form
                  onSubmit={handleSubmit}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
                >
                  {/* Category */}
                  <div className="space-y-1.5">
                    <Label htmlFor="category">Select Category</Label>
                    <Select value={form.category} onValueChange={(v) => update("category", v)}>
                      <SelectTrigger id="category" className="bg-muted/60 rounded-xl">
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        {CATEGORIES.map((c) => (
                          <SelectItem key={c} value={c}>
                            {c.toUpperCase()}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {errors.category && <p className="text-xs text-destructive">{errors.category}</p>}
                  </div>

                  {/* Name */}
                  <div className="space-y-1.5">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      placeholder="Enter Name Here"
                      value={form.name}
                      onChange={(e) => update("name", e.target.value)}
                      className="bg-muted/60 rounded-xl"
                      maxLength={100}
                    />
                    {errors.name && <p className="text-xs text-destructive">{errors.name}</p>}
                  </div>

                  {/* Mobile */}
                  <div className="space-y-1.5">
                    <Label htmlFor="mobile">Mobile Number</Label>
                    <Input
                      id="mobile"
                      placeholder="Enter Mobile Number"
                      value={form.mobile}
                      onChange={(e) => update("mobile", e.target.value)}
                      className="bg-muted/60 rounded-xl"
                      maxLength={15}
                      inputMode="tel"
                    />
                    {errors.mobile && <p className="text-xs text-destructive">{errors.mobile}</p>}
                  </div>

                  {/* Email */}
                  <div className="space-y-1.5">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter Email Here"
                      value={form.email}
                      onChange={(e) => update("email", e.target.value)}
                      className="bg-muted/60 rounded-xl"
                      maxLength={255}
                    />
                    {errors.email && <p className="text-xs text-destructive">{errors.email}</p>}
                  </div>

                  {/* Genre */}
                  <div className="space-y-1.5">
                    <Label htmlFor="genre">Genre</Label>
                    <Select value={form.genre} onValueChange={(v) => update("genre", v)}>
                      <SelectTrigger id="genre" className="bg-muted/60 rounded-xl">
                        <SelectValue placeholder="Select genre" />
                      </SelectTrigger>
                      <SelectContent>
                        {GENRES.map((g) => (
                          <SelectItem key={g} value={g}>
                            {g}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {errors.genre && <p className="text-xs text-destructive">{errors.genre}</p>}
                  </div>

                  {/* Event */}
                  <div className="space-y-1.5">
                    <Label htmlFor="event">Event</Label>
                    <Select value={form.event} onValueChange={(v) => update("event", v)}>
                      <SelectTrigger id="event" className="bg-muted/60 rounded-xl">
                        <SelectValue placeholder="Select event" />
                      </SelectTrigger>
                      <SelectContent>
                        {EVENTS.map((e) => (
                          <SelectItem key={e} value={e}>
                            {e}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {errors.event && <p className="text-xs text-destructive">{errors.event}</p>}
                  </div>

                  {/* Event Date */}
                  <div className="space-y-1.5">
                    <Label htmlFor="eventDate">Event Date</Label>
                    <Input
                      id="eventDate"
                      type="date"
                      value={form.eventDate}
                      onChange={(e) => update("eventDate", e.target.value)}
                      className="bg-muted/60 rounded-xl"
                      min={new Date().toISOString().split("T")[0]}
                    />
                    {errors.eventDate && (
                      <p className="text-xs text-destructive">{errors.eventDate}</p>
                    )}
                  </div>

                  {/* Location Type */}
                  <div className="space-y-1.5">
                    <Label htmlFor="locationType">Location Type</Label>
                    <Select
                      value={form.locationType}
                      onValueChange={(v) => update("locationType", v)}
                    >
                      <SelectTrigger id="locationType" className="bg-muted/60 rounded-xl">
                        <SelectValue placeholder="Select Location Type" />
                      </SelectTrigger>
                      <SelectContent>
                        {LOCATION_TYPES.map((l) => (
                          <SelectItem key={l} value={l}>
                            {l}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {errors.locationType && (
                      <p className="text-xs text-destructive">{errors.locationType}</p>
                    )}
                  </div>

                  {/* Location */}
                  <div className="space-y-1.5">
                    <Label htmlFor="location">Location</Label>
                    <Input
                      id="location"
                      placeholder="Enter Location Here"
                      value={form.location}
                      onChange={(e) => update("location", e.target.value)}
                      className="bg-muted/60 rounded-xl"
                      maxLength={200}
                    />
                    {errors.location && (
                      <p className="text-xs text-destructive">{errors.location}</p>
                    )}
                  </div>

                  {/* Budget */}
                  <div className="space-y-1.5">
                    <Label htmlFor="budget">Budget</Label>
                    <Select value={form.budget} onValueChange={(v) => update("budget", v)}>
                      <SelectTrigger id="budget" className="bg-muted/60 rounded-xl">
                        <SelectValue placeholder="Select Budget" />
                      </SelectTrigger>
                      <SelectContent>
                        {BUDGETS.map((b) => (
                          <SelectItem key={b} value={b}>
                            {b}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {errors.budget && <p className="text-xs text-destructive">{errors.budget}</p>}
                  </div>

                  {/* Submit */}
                  <div className="md:col-span-2 lg:col-span-3 flex justify-center pt-4">
                    <Button
                      type="submit"
                      size="lg"
                      className="gradient-saffron text-primary-foreground font-heading font-semibold rounded-full px-16 shadow-warm hover:opacity-90 transition-all"
                    >
                      Submit Booking
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>
      </PageTransition>
    </Layout>
  );
};

export default BookingPage;
