import { Star } from "lucide-react";

const RatingStars = ({ rating, size = 16 }: { rating: number; size?: number }) => (
  <div className="flex items-center gap-0.5">
    {[1, 2, 3, 4, 5].map((i) => (
      <Star
        key={i}
        size={size}
        className={i <= Math.round(rating) ? "fill-highlight text-highlight" : "text-muted-foreground/30"}
      />
    ))}
  </div>
);

export default RatingStars;
