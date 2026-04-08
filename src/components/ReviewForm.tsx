import { useState } from "react";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "@/hooks/use-toast";

const ReviewForm = ({ artistId, artistName }: { artistId: string; artistName: string }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [eventType, setEventType] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!rating || !name || !comment) {
      toast({ title: "Please fill all fields", description: "Rating, name and comment are required.", variant: "destructive" });
      return;
    }
    toast({ title: "Review Submitted! 🎉", description: `Thank you for reviewing ${artistName}.` });
    setRating(0);
    setName("");
    setComment("");
    setEventType("");
  };

  return (
    <Card className="border-t-4 border-t-primary">
      <CardContent className="p-6">
        <h2 className="font-heading font-bold text-xl mb-4">Write a Review</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label className="mb-2 block">Your Rating</Label>
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <button
                  type="button"
                  key={i}
                  onMouseEnter={() => setHover(i)}
                  onMouseLeave={() => setHover(0)}
                  onClick={() => setRating(i)}
                  className="transition-transform hover:scale-125"
                >
                  <Star
                    size={28}
                    className={
                      i <= (hover || rating)
                        ? "fill-highlight text-highlight"
                        : "text-muted-foreground/30"
                    }
                  />
                </button>
              ))}
            </div>
          </div>
          <div>
            <Label>Your Name</Label>
            <Input placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div>
            <Label>Event Type</Label>
            <Input placeholder="e.g. Wedding, Festival" value={eventType} onChange={(e) => setEventType(e.target.value)} />
          </div>
          <div>
            <Label>Your Review</Label>
            <Textarea placeholder="Share your experience..." value={comment} onChange={(e) => setComment(e.target.value)} rows={3} />
          </div>
          <Button type="submit" className="gradient-saffron text-white font-heading rounded-full w-full">
            Submit Review
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default ReviewForm;
