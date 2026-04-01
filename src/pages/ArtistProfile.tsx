import { useParams, Link } from "react-router-dom";
import Layout from "@/components/Layout";
import RatingStars from "@/components/RatingStars";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { artists, reviews } from "@/data/mockData";
import { MapPin, BadgeCheck, Clock, IndianRupee } from "lucide-react";

const ArtistProfile = () => {
  const { id } = useParams();
  const artist = artists.find((a) => a.id === id);
  const artistReviews = reviews.filter((r) => r.artistId === id);

  if (!artist) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="font-heading font-bold text-2xl">Artist not found</h1>
          <Link to="/catalog" className="text-accent underline mt-4 inline-block">Browse Artists</Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="bg-section rangoli-bg py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left: Photos & Video */}
            <div className="lg:col-span-2 space-y-6">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img src={artist.gallery[0]} alt={artist.name} className="w-full h-72 md:h-96 object-cover" />
              </div>
              {/* Gallery thumbnails */}
              <div className="flex gap-3 overflow-x-auto pb-2">
                {artist.gallery.map((img, i) => (
                  <img key={i} src={img} alt="" className="w-24 h-20 rounded-md object-cover border-2 border-transparent hover:border-accent transition-colors cursor-pointer" />
                ))}
              </div>
              {/* Video */}
              <div className="rounded-lg overflow-hidden shadow-lg aspect-video">
                <iframe src={artist.videoUrl} title="Performance" className="w-full h-full" allowFullScreen />
              </div>
              {/* Description */}
              <Card>
                <CardContent className="p-6">
                  <h2 className="font-heading font-bold text-xl mb-3">About</h2>
                  <p className="text-muted-foreground leading-relaxed">{artist.description}</p>
                </CardContent>
              </Card>
              {/* Reviews */}
              <Card>
                <CardContent className="p-6">
                  <h2 className="font-heading font-bold text-xl mb-4">Reviews ({artistReviews.length})</h2>
                  <div className="space-y-4">
                    {artistReviews.map((r) => (
                      <div key={r.id} className="border-b border-border pb-4 last:border-0">
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-medium text-sm">{r.clientName}</span>
                          <span className="text-xs text-muted-foreground">{r.date}</span>
                        </div>
                        <RatingStars rating={r.rating} size={14} />
                        <p className="text-sm text-muted-foreground mt-1">{r.comment}</p>
                        <Badge variant="outline" className="mt-2 text-xs">{r.eventType}</Badge>
                      </div>
                    ))}
                    {artistReviews.length === 0 && <p className="text-muted-foreground text-sm">No reviews yet.</p>}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right: Info sidebar */}
            <div className="space-y-4">
              <Card className="shadow-lg">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center gap-4">
                    <img src={artist.photo} alt={artist.name} className="w-20 h-20 rounded-full object-cover border-4 border-accent/20" />
                    <div>
                      <h1 className="font-heading font-bold text-xl flex items-center gap-2">
                        {artist.name}
                        {artist.verified && <BadgeCheck size={18} className="text-secondary" />}
                      </h1>
                      <p className="text-accent font-medium">{artist.artForm}</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-sm">
                      <MapPin size={16} className="text-muted-foreground" />
                      <span>{artist.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Clock size={16} className="text-muted-foreground" />
                      <span>{artist.experience} experience</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <RatingStars rating={artist.rating} size={16} />
                      <span className="text-sm text-muted-foreground">({artist.reviewCount} reviews)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <IndianRupee size={16} className="text-accent" />
                      <span className="font-heading font-bold text-2xl text-accent">₹{artist.price.toLocaleString()}</span>
                      <span className="text-sm text-muted-foreground">/event</span>
                    </div>
                  </div>

                  <div className="space-y-3 pt-2">
                    <Link to={`/booking/${artist.id}`}>
                      <Button className="w-full gradient-saffron text-white font-heading font-semibold shadow-lg">
                        Book Now
                      </Button>
                    </Link>
                    <Button variant="outline" className="w-full border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                      Check Availability
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4 text-center text-sm text-muted-foreground">
                  💡 Tip: Book early for wedding season (Oct-Feb) to secure your preferred artist.
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ArtistProfile;
