import { useState } from "react";
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Calendar } from "@/components/ui/calendar";
import BookingStatusBadge from "@/components/BookingStatusBadge";
import { bookings } from "@/data/mockData";
import { User, CalendarDays, IndianRupee, Bell } from "lucide-react";

const artistBookings = bookings.filter((b) => b.artistId === "1");

const ArtistDashboard = () => {
  const [availableDates, setAvailableDates] = useState<Date[]>([]);

  return (
    <Layout>
      <section className="bg-section rangoli-bg min-h-screen py-10">
        <div className="container mx-auto px-4">
          <h1 className="font-heading font-bold text-3xl mb-6">Artist Dashboard</h1>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {[
              { label: "Total Bookings", value: "24", icon: CalendarDays, color: "text-accent" },
              { label: "Pending Requests", value: "3", icon: Bell, color: "text-highlight" },
              { label: "Completed Events", value: "18", icon: User, color: "text-secondary" },
              { label: "Total Earnings", value: "₹4,32,000", icon: IndianRupee, color: "text-accent" },
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

          <Tabs defaultValue="profile">
            <TabsList className="mb-6">
              <TabsTrigger value="profile">Profile</TabsTrigger>
              <TabsTrigger value="bookings">Booking Requests</TabsTrigger>
              <TabsTrigger value="calendar">Calendar</TabsTrigger>
              <TabsTrigger value="earnings">Earnings</TabsTrigger>
            </TabsList>

            <TabsContent value="profile">
              <Card>
                <CardHeader><CardTitle>Manage Profile</CardTitle></CardHeader>
                <CardContent className="space-y-4 max-w-lg">
                  <div><Label>Full Name</Label><Input defaultValue="Rajesh Kumar Shetty" /></div>
                  <div><Label>Art Form</Label><Input defaultValue="Yakshagana" /></div>
                  <div><Label>Location</Label><Input defaultValue="Udupi, Karnataka" /></div>
                  <div><Label>Price per Event (₹)</Label><Input type="number" defaultValue="18000" /></div>
                  <div><Label>Bio</Label><Textarea defaultValue="With over 20 years of Yakshagana experience..." /></div>
                  <div><Label>YouTube Video URL</Label><Input defaultValue="https://youtube.com/..." /></div>
                  <Button className="gradient-saffron text-white font-heading">Save Changes</Button>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="bookings">
              <Card>
                <CardHeader><CardTitle>Booking Requests</CardTitle></CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Client</TableHead>
                        <TableHead>Event</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead>Location</TableHead>
                        <TableHead>Amount</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {artistBookings.map((b) => (
                        <TableRow key={b.id}>
                          <TableCell>{b.clientName}</TableCell>
                          <TableCell>{b.eventType}</TableCell>
                          <TableCell>{b.eventDate}</TableCell>
                          <TableCell>{b.location}</TableCell>
                          <TableCell>₹{b.amount.toLocaleString()}</TableCell>
                          <TableCell><BookingStatusBadge status={b.status} /></TableCell>
                          <TableCell>
                            {b.status === "pending" && (
                              <div className="flex gap-2">
                                <Button size="sm" className="bg-secondary text-secondary-foreground">Accept</Button>
                                <Button size="sm" variant="outline" className="text-destructive border-destructive">Decline</Button>
                              </div>
                            )}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="calendar">
              <Card>
                <CardHeader><CardTitle>Availability Calendar</CardTitle></CardHeader>
                <CardContent className="flex flex-col items-center">
                  <p className="text-sm text-muted-foreground mb-4">Click dates to mark yourself available</p>
                  <Calendar
                    mode="multiple"
                    selected={availableDates}
                    onSelect={(dates) => setAvailableDates(dates || [])}
                    className="p-3 pointer-events-auto"
                  />
                  <p className="text-sm text-muted-foreground mt-4">{availableDates.length} dates marked as available</p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="earnings">
              <Card>
                <CardHeader><CardTitle>Earnings Summary</CardTitle></CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div className="bg-section rounded-lg p-4 text-center">
                      <p className="text-sm text-muted-foreground">This Month</p>
                      <p className="text-2xl font-heading font-bold text-accent">₹54,000</p>
                    </div>
                    <div className="bg-section rounded-lg p-4 text-center">
                      <p className="text-sm text-muted-foreground">Last Month</p>
                      <p className="text-2xl font-heading font-bold">₹36,000</p>
                    </div>
                    <div className="bg-section rounded-lg p-4 text-center">
                      <p className="text-sm text-muted-foreground">Total Earnings</p>
                      <p className="text-2xl font-heading font-bold text-secondary">₹4,32,000</p>
                    </div>
                  </div>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Event</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead>Amount</TableHead>
                        <TableHead>Status</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {bookings.filter(b => b.status === "completed").map((b) => (
                        <TableRow key={b.id}>
                          <TableCell>{b.eventType}</TableCell>
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
          </Tabs>
        </div>
      </section>
    </Layout>
  );
};

export default ArtistDashboard;
