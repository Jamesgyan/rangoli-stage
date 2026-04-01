import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import BookingStatusBadge from "@/components/BookingStatusBadge";
import RatingStars from "@/components/RatingStars";
import { bookings, artists } from "@/data/mockData";
import { Heart, Star, CalendarDays } from "lucide-react";

const favorites = artists.slice(0, 3);

const ClientDashboard = () => (
  <Layout>
    <section className="bg-section rangoli-bg min-h-screen py-10">
      <div className="container mx-auto px-4">
        <h1 className="font-heading font-bold text-3xl mb-6">Client Dashboard</h1>

        <Tabs defaultValue="bookings">
          <TabsList className="mb-6">
            <TabsTrigger value="bookings"><CalendarDays size={16} className="mr-1" /> Bookings</TabsTrigger>
            <TabsTrigger value="favorites"><Heart size={16} className="mr-1" /> Favorites</TabsTrigger>
            <TabsTrigger value="reviews"><Star size={16} className="mr-1" /> Reviews</TabsTrigger>
          </TabsList>

          <TabsContent value="bookings">
            <Card>
              <CardHeader><CardTitle>Booking History</CardTitle></CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Artist</TableHead>
                      <TableHead>Art Form</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Location</TableHead>
                      <TableHead>Amount</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {bookings.map((b) => (
                      <TableRow key={b.id}>
                        <TableCell className="font-medium">{b.artistName}</TableCell>
                        <TableCell>{b.artForm}</TableCell>
                        <TableCell>{b.eventDate}</TableCell>
                        <TableCell>{b.location}</TableCell>
                        <TableCell>₹{b.amount.toLocaleString()}</TableCell>
                        <TableCell><BookingStatusBadge status={b.status} /></TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="favorites">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {favorites.map((a) => (
                <Card key={a.id} className="p-4 flex items-center gap-4">
                  <img src={a.photo} alt={a.name} className="w-16 h-16 rounded-full object-cover" />
                  <div>
                    <p className="font-heading font-semibold">{a.name}</p>
                    <p className="text-sm text-accent">{a.artForm}</p>
                    <RatingStars rating={a.rating} size={14} />
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="reviews">
            <Card>
              <CardContent className="p-6 space-y-4">
                {[
                  { artist: "Rajesh Kumar Shetty", rating: 5, comment: "Amazing Yakshagana performance at our wedding!", date: "2026-03-15" },
                  { artist: "Priya Devi", rating: 5, comment: "Bharatanatyam was divine. Highly recommended!", date: "2026-02-20" },
                ].map((r, i) => (
                  <div key={i} className="border-b border-border pb-4 last:border-0">
                    <p className="font-medium">{r.artist}</p>
                    <RatingStars rating={r.rating} size={14} />
                    <p className="text-sm text-muted-foreground mt-1">{r.comment}</p>
                    <p className="text-xs text-muted-foreground mt-1">{r.date}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  </Layout>
);

export default ClientDashboard;
