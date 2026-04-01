import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import BookingStatusBadge from "@/components/BookingStatusBadge";
import { artists, bookings } from "@/data/mockData";
import { Users, CalendarDays, IndianRupee, ShieldCheck } from "lucide-react";

const AdminDashboard = () => (
  <Layout>
    <section className="bg-section rangoli-bg min-h-screen py-10">
      <div className="container mx-auto px-4">
        <h1 className="font-heading font-bold text-3xl mb-6">Admin Dashboard</h1>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { label: "Total Artists", value: String(artists.length), icon: Users, color: "text-accent" },
            { label: "Total Bookings", value: String(bookings.length), icon: CalendarDays, color: "text-secondary" },
            { label: "Revenue", value: `₹${bookings.reduce((s, b) => s + b.amount, 0).toLocaleString()}`, icon: IndianRupee, color: "text-highlight" },
            { label: "Verified Artists", value: String(artists.filter(a => a.verified).length), icon: ShieldCheck, color: "text-secondary" },
          ].map((s) => (
            <Card key={s.label}>
              <CardContent className="p-4 flex items-center gap-3">
                <s.icon size={24} className={s.color} />
                <div>
                  <p className="text-2xl font-heading font-bold">{s.value}</p>
                  <p className="text-xs text-muted-foreground">{s.label}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Tabs defaultValue="artists">
          <TabsList className="mb-6">
            <TabsTrigger value="artists">Manage Artists</TabsTrigger>
            <TabsTrigger value="bookings">Manage Bookings</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="artists">
            <Card>
              <CardHeader><CardTitle>Artists</CardTitle></CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Art Form</TableHead>
                      <TableHead>Location</TableHead>
                      <TableHead>Rating</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {artists.map((a) => (
                      <TableRow key={a.id}>
                        <TableCell className="font-medium">{a.name}</TableCell>
                        <TableCell>{a.artForm}</TableCell>
                        <TableCell>{a.location}</TableCell>
                        <TableCell>{a.rating} ★</TableCell>
                        <TableCell>
                          <Badge variant={a.verified ? "default" : "outline"} className={a.verified ? "bg-secondary text-secondary-foreground" : ""}>
                            {a.verified ? "Verified" : "Pending"}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          {!a.verified && (
                            <Button size="sm" className="bg-secondary text-secondary-foreground">Approve</Button>
                          )}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="bookings">
            <Card>
              <CardHeader><CardTitle>All Bookings</CardTitle></CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Client</TableHead>
                      <TableHead>Artist</TableHead>
                      <TableHead>Art Form</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Amount</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {bookings.map((b) => (
                      <TableRow key={b.id}>
                        <TableCell>{b.clientName}</TableCell>
                        <TableCell>{b.artistName}</TableCell>
                        <TableCell>{b.artForm}</TableCell>
                        <TableCell>{b.eventDate}</TableCell>
                        <TableCell>₹{b.amount.toLocaleString()}</TableCell>
                        <TableCell><BookingStatusBadge status={b.status} /></TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader><CardTitle>Bookings by Status</CardTitle></CardHeader>
                <CardContent className="space-y-3">
                  {["pending", "confirmed", "completed", "cancelled"].map((status) => {
                    const count = bookings.filter(b => b.status === status).length;
                    const pct = Math.round((count / bookings.length) * 100);
                    return (
                      <div key={status} className="flex items-center gap-3">
                        <BookingStatusBadge status={status as any} />
                        <div className="flex-1 h-2 rounded-full bg-muted overflow-hidden">
                          <div className="h-full gradient-saffron rounded-full" style={{ width: `${pct}%` }} />
                        </div>
                        <span className="text-sm font-medium">{count}</span>
                      </div>
                    );
                  })}
                </CardContent>
              </Card>
              <Card>
                <CardHeader><CardTitle>Top Art Forms</CardTitle></CardHeader>
                <CardContent className="space-y-3">
                  {["Yakshagana", "Bharatanatyam", "Huli Vesha", "Dollu Kunitha", "Veeragase"].map((form) => {
                    const count = bookings.filter(b => b.artForm === form).length;
                    return (
                      <div key={form} className="flex items-center justify-between">
                        <span className="text-sm font-medium">{form}</span>
                        <Badge variant="outline">{count} bookings</Badge>
                      </div>
                    );
                  })}
                </CardContent>
              </Card>
              <Card>
                <CardHeader><CardTitle>Revenue by Month</CardTitle></CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      { month: "January", amount: 27000 },
                      { month: "February", amount: 51000 },
                      { month: "March", amount: 80000 },
                    ].map((m) => (
                      <div key={m.month} className="flex items-center gap-3">
                        <span className="text-sm w-20">{m.month}</span>
                        <div className="flex-1 h-4 rounded-full bg-muted overflow-hidden">
                          <div className="h-full gradient-saffron rounded-full" style={{ width: `${(m.amount / 80000) * 100}%` }} />
                        </div>
                        <span className="text-sm font-heading font-bold">₹{m.amount.toLocaleString()}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader><CardTitle>Platform Highlights</CardTitle></CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between"><span className="text-sm">Avg. booking value</span><span className="font-heading font-bold">₹{Math.round(bookings.reduce((s, b) => s + b.amount, 0) / bookings.length).toLocaleString()}</span></div>
                  <div className="flex justify-between"><span className="text-sm">Most popular region</span><span className="font-heading font-bold">Coastal</span></div>
                  <div className="flex justify-between"><span className="text-sm">Avg. artist rating</span><span className="font-heading font-bold">{(artists.reduce((s, a) => s + a.rating, 0) / artists.length).toFixed(1)} ★</span></div>
                  <div className="flex justify-between"><span className="text-sm">Repeat booking rate</span><span className="font-heading font-bold">34%</span></div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  </Layout>
);

export default AdminDashboard;
