import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import type { ArtForm } from "@/data/mockData";

const ArtFormCard = ({ artForm }: { artForm: ArtForm }) => (
  <Link to={`/catalog?artForm=${artForm.id}`}>
    <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
      <div className="relative h-44 overflow-hidden">
        <img
          src={artForm.image}
          alt={artForm.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
        <div className="absolute bottom-3 left-3 right-3">
          <h3 className="font-heading font-bold text-lg text-white">{artForm.name}</h3>
          <p className="text-white/80 text-xs">From ₹{artForm.startingPrice.toLocaleString()}</p>
        </div>
      </div>
      <CardContent className="p-3">
        <p className="text-sm text-muted-foreground line-clamp-2">{artForm.description}</p>
      </CardContent>
    </Card>
  </Link>
);

export default ArtFormCard;
