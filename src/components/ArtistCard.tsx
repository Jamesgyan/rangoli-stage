import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import RatingStars from "@/components/RatingStars";
import { MapPin, BadgeCheck } from "lucide-react";
import type { Artist } from "@/data/mockData";

const ArtistCard = ({ artist }: { artist: Artist }) => (
  <Link to={`/artist/${artist.id}`}>
    <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group border-t-4 border-t-secondary">
      <div className="relative h-48 overflow-hidden">
        <img
          src={artist.photo}
          alt={artist.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {artist.verified && (
          <Badge className="absolute top-2 right-2 bg-secondary text-secondary-foreground gap-1">
            <BadgeCheck size={12} /> Verified
          </Badge>
        )}
      </div>
      <CardContent className="p-4 space-y-2">
        <h3 className="font-heading font-semibold text-lg">{artist.name}</h3>
        <p className="text-sm text-primary font-medium">{artist.artForm}</p>
        <div className="flex items-center gap-1 text-sm text-muted-foreground">
          <MapPin size={14} />
          {artist.location}
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <RatingStars rating={artist.rating} size={14} />
            <span className="text-xs text-muted-foreground">({artist.reviewCount})</span>
          </div>
          <span className="font-heading font-bold text-primary">₹{artist.price.toLocaleString()}</span>
        </div>
      </CardContent>
    </Card>
  </Link>
);

export default ArtistCard;
