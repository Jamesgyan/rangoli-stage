import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { format } from "date-fns";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CalendarIcon, CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { artists } from "@/data/mockData";

const steps = ["Select Artist", "Choose Date", "Event Details", "Review & Confirm"];

const BookingPage = () => {
  const { artistId } = useParams();
  const artist = artists.find((a) => a.id === artistId);
  const [step, setStep] = useState(artist ? 1 : 0);
  const [date, setDate] = useState<Date>();
  const [eventType, setEventType] = useState("");
  const [eventLocation, setEventLocation] = useState("");
  const [notes, setNotes] = useState("");
  const [submitted, setSubmitted] = useState(false);

  if (!artist) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="font-heading font-bold text-2xl">Artist not found</h1>
          <Link to="/catalog" className="text-primary underline mt-4 inline-block">Browse Artists</Link>
        </div>
      </Layout>
    );
  }

  if (submitted) {
    return (
      <Layout>
        <section className="bg-section chakra-bg min-h-screen flex items-center justify-center">
          <Card className="max-w-md w-full mx-4 text-center shadow-lg border-t-4 border-t-secondary">
            <CardContent className="p-8 space-y-4">
              <CheckCircle size={64} className="mx-auto text-secondary" />
              <h2 className="font-heading font-bold text-2xl">Booking Request Sent!</h2>
              <p className="text-muted-foreground">Your booking request for <strong>{artist.name}</strong> has been sent. You'll receive a confirmation soon.</p>
              <div className="bg-section rounded-lg p-4 text-sm space-y-1">
                <p><strong>Artist:</strong> {artist.name} — {artist.artForm}</p>
                <p><strong>Date:</strong> {date ? format(date, "PPP") : "N/A"}</p>
                <p><strong>Event:</strong> {eventType}</p>
                <p><strong>Location:</strong> {eventLocation}</p>
                <p><strong>Amount:</strong> ₹{artist.price.toLocaleString()}</p>
              </div>
              <Link to="/">
                <Button className="gradient-saffron text-white font-heading mt-4 rounded-full">Back to Home</Button>
              </Link>
            </CardContent>
          </Card>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="bg-section mandala-bg min-h-screen py-10">
        <div className="container mx-auto px-4 max-w-2xl">
          <h1 className="font-heading font-bold text-3xl mb-6">Book {artist.name}</h1>

          {/* Progress */}
          <div className="flex items-center mb-8">
            {steps.map((s, i) => (
              <div key={s} className="flex items-center flex-1">
                <div className={cn(
                  "w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-colors",
                  i <= step ? "gradient-saffron text-white" : "bg-muted text-muted-foreground"
                )}>
                  {i + 1}
                </div>
                <span className="hidden md:inline text-xs ml-2 text-muted-foreground">{s}</span>
                {i < steps.length - 1 && <div className={cn("flex-1 h-0.5 mx-2", i < step ? "bg-primary" : "bg-muted")} />}
              </div>
            ))}
          </div>

          <Card className="shadow-lg border-t-4 border-t-primary">
            <CardHeader>
              <CardTitle className="font-heading">{steps[step]}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {step === 0 && (
                <div className="flex items-center gap-4 p-4 bg-section rounded-lg">
                  <img src={artist.photo} alt={artist.name} className="w-16 h-16 rounded-full object-cover" />
                  <div>
                    <p className="font-heading font-semibold">{artist.name}</p>
                    <p className="text-sm text-primary">{artist.artForm}</p>
                    <p className="text-sm text-muted-foreground">₹{artist.price.toLocaleString()}/event</p>
                  </div>
                </div>
              )}

              {step === 1 && (
                <div>
                  <Label className="mb-2 block">Select Event Date</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant="outline" className={cn("w-full justify-start", !date && "text-muted-foreground")}>
                        <CalendarIcon className="mr-2" size={16} />
                        {date ? format(date, "PPP") : "Pick a date"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar mode="single" selected={date} onSelect={setDate} disabled={(d) => d < new Date()} initialFocus className="p-3 pointer-events-auto" />
                    </PopoverContent>
                  </Popover>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-4">
                  <div>
                    <Label>Event Type</Label>
                    <Select value={eventType} onValueChange={setEventType}>
                      <SelectTrigger><SelectValue placeholder="Select event type" /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Wedding">Wedding</SelectItem>
                        <SelectItem value="Corporate Event">Corporate Event</SelectItem>
                        <SelectItem value="Festival">Festival</SelectItem>
                        <SelectItem value="Temple Event">Temple Event</SelectItem>
                        <SelectItem value="Private Party">Private Party</SelectItem>
                        <SelectItem value="Other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label>Event Location</Label>
                    <Input placeholder="Enter venue / city" value={eventLocation} onChange={(e) => setEventLocation(e.target.value)} />
                  </div>
                  <div>
                    <Label>Special Notes</Label>
                    <Textarea placeholder="Any special requirements..." value={notes} onChange={(e) => setNotes(e.target.value)} />
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-3 bg-section rounded-lg p-4">
                  <h3 className="font-heading font-semibold">Booking Summary</h3>
                  <p><strong>Artist:</strong> {artist.name} — {artist.artForm}</p>
                  <p><strong>Date:</strong> {date ? format(date, "PPP") : "Not selected"}</p>
                  <p><strong>Event Type:</strong> {eventType || "Not specified"}</p>
                  <p><strong>Location:</strong> {eventLocation || "Not specified"}</p>
                  <p><strong>Notes:</strong> {notes || "None"}</p>
                  <p className="text-lg font-heading font-bold text-primary">Total: ₹{artist.price.toLocaleString()}</p>
                </div>
              )}

              <div className="flex justify-between pt-4">
                <Button variant="outline" disabled={step === 0} onClick={() => setStep(step - 1)} className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground rounded-full">Back</Button>
                {step < 3 ? (
                  <Button className="gradient-saffron text-white font-heading rounded-full" onClick={() => setStep(step + 1)}>Next</Button>
                ) : (
                  <Button className="gradient-saffron text-white font-heading rounded-full" onClick={() => setSubmitted(true)}>Confirm Booking</Button>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
};

export default BookingPage;
