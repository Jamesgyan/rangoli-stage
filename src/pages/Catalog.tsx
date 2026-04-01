import { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import Layout from "@/components/Layout";
import ArtistCard from "@/components/ArtistCard";
import ArtFormCard from "@/components/ArtFormCard";
import { artists, artForms } from "@/data/mockData";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";

const regions = ["Coastal", "South Karnataka", "North Karnataka"];

const Catalog = () => {
  const [searchParams] = useSearchParams();
  const selectedArtForm = searchParams.get("artForm");
  const [selectedRegions, setSelectedRegions] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState([0, 30000]);

  const toggleRegion = (r: string) =>
    setSelectedRegions((prev) => (prev.includes(r) ? prev.filter((x) => x !== r) : [...prev, r]));

  const filteredArtists = useMemo(() => {
    return artists.filter((a) => {
      if (selectedArtForm && a.artForm.toLowerCase().replace(/\s/g, "-") !== selectedArtForm) return false;
      if (selectedRegions.length && !selectedRegions.includes(a.region)) return false;
      if (a.price < priceRange[0] || a.price > priceRange[1]) return false;
      return true;
    });
  }, [selectedArtForm, selectedRegions, priceRange]);

  return (
    <Layout>
      <section className="bg-section py-10 mandala-bg">
        <div className="container mx-auto px-4">
          <h1 className="font-heading font-bold text-3xl md:text-4xl mb-2">Art Form Catalog</h1>
          <p className="text-muted-foreground mb-8">Explore and book traditional folk art performances</p>

          {/* Art Forms Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
            {artForms.map((af) => (
              <ArtFormCard key={af.id} artForm={af} />
            ))}
          </div>

          <div className="flex flex-col md:flex-row gap-8">
            {/* Filters */}
            <div className="w-full md:w-64 space-y-6 bg-card rounded-lg p-6 shadow-sm h-fit">
              <div>
                <Label className="font-heading font-semibold text-base mb-3 block">Region</Label>
                {regions.map((r) => (
                  <label key={r} className="flex items-center gap-2 py-1 cursor-pointer">
                    <Checkbox checked={selectedRegions.includes(r)} onCheckedChange={() => toggleRegion(r)} />
                    <span className="text-sm">{r}</span>
                  </label>
                ))}
              </div>
              <div>
                <Label className="font-heading font-semibold text-base mb-3 block">
                  Price Range: ₹{priceRange[0].toLocaleString()} - ₹{priceRange[1].toLocaleString()}
                </Label>
                <Slider min={0} max={30000} step={1000} value={priceRange} onValueChange={setPriceRange} className="mt-2" />
              </div>
            </div>

            {/* Artists Grid */}
            <div className="flex-1">
              <p className="text-sm text-muted-foreground mb-4">{filteredArtists.length} artists found</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredArtists.map((a) => (
                  <ArtistCard key={a.id} artist={a} />
                ))}
              </div>
              {filteredArtists.length === 0 && (
                <p className="text-center text-muted-foreground py-12">No artists match your filters.</p>
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Catalog;
