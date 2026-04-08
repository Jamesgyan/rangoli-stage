import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star } from "lucide-react";
import { reviews } from "@/data/mockData";

const AutoScrollTestimonials = () => {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval>>();

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % reviews.length);
    }, 4000);
    return () => clearInterval(timerRef.current);
  }, []);

  const review = reviews[current];

  return (
    <div className="relative h-48 flex items-center justify-center overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={review.id}
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -60 }}
          transition={{ duration: 0.5 }}
          className="absolute w-full max-w-lg mx-auto text-center px-4"
        >
          <div className="flex justify-center gap-1 mb-3">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star
                key={i}
                size={18}
                className={i <= review.rating ? "fill-highlight text-highlight" : "text-muted-foreground/30"}
              />
            ))}
          </div>
          <p className="text-foreground italic mb-3">"{review.comment}"</p>
          <p className="font-heading font-semibold text-sm text-primary">{review.clientName}</p>
          <p className="text-xs text-muted-foreground">{review.eventType}</p>
        </motion.div>
      </AnimatePresence>

      {/* Dots */}
      <div className="absolute bottom-0 flex gap-2">
        {reviews.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2 h-2 rounded-full transition-all ${
              i === current ? "bg-primary w-6" : "bg-muted-foreground/30"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default AutoScrollTestimonials;
