import { useState, useMemo } from "react";
import Layout from "@/components/Layout";
import ArtistCard from "@/components/ArtistCard";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { Search as SearchIcon, MapPin } from "lucide-react";
import { artists } from "@/data/mockData";

const SearchPage = () => {
  const [query, setQuery] = useState("");
  const [location, setLocation] = useState("");
  const [priceRange, setPriceRange] = useState([0, 30000]);
  const [minRating, setMinRating] = useState(0);

  const results = useMemo(() => {
    return artists.filter((a) => {
      const q = query.toLowerCase();
      if (q && !a.name.toLowerCase().includes(q) && !a.artForm.toLowerCase().includes(q)) return false;
      if (location && !a.location.toLowerCase().includes(location.toLowerCase())) return false;
      if (a.price < priceRange[0] || a.price > priceRange[1]) return false;
      if (a.rating < minRating) return false;
      return true;
    });
  }, [query, location, priceRange, minRating]);

  return (
    <Layout>
      <section className="bg-section chakra-bg min-h-screen py-10">
        <div className="container mx-auto px-4">
          <h1 className="font-heading font-bold text-3xl md:text-4xl mb-6">Search Artists</h1>
          <div className="h-1 gradient-tricolor-line rounded-full mb-8" />

          {/* Search Inputs */}
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <SearchIcon size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <Input placeholder="Search by art form or artist name..." value={query} onChange={(e) => setQuery(e.target.value)} className="pl-10" />
            </div>
            <div className="relative flex-1">
              <MapPin size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <Input placeholder="Location..." value={location} onChange={(e) => setLocation(e.target.value)} className="pl-10" />
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-8">
            {/* Filters */}
            <div className="w-full md:w-64 space-y-6 bg-card rounded-lg p-6 shadow-sm h-fit border-t-4 border-t-accent">
              <div>
                <Label className="font-heading font-semibold text-base mb-3 block">
                  Price: ₹{priceRange[0].toLocaleString()} - ₹{priceRange[1].toLocaleString()}
                </Label>
                <Slider min={0} max={30000} step={1000} value={priceRange} onValueChange={setPriceRange} />
              </div>
              <div>
                <Label className="font-heading font-semibold text-base mb-3 block">
                  Min Rating: {minRating} ★
                </Label>
                <Slider min={0} max={5} step={0.5} value={[minRating]} onValueChange={([v]) => setMinRating(v)} />
              </div>
            </div>

            {/* Results */}
            <div className="flex-1">
              <p className="text-sm text-muted-foreground mb-4">{results.length} artists found</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {results.map((a) => (
                  <ArtistCard key={a.id} artist={a} />
                ))}
              </div>
              {results.length === 0 && (
                <p className="text-center text-muted-foreground py-12">No artists found. Try adjusting your search.</p>
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default SearchPage;
