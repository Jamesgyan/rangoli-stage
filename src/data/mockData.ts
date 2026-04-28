export interface ArtForm {
  id: string;
  name: string;
  description: string;
  image: string;
  region: string;
  startingPrice: number;
}

export interface Artist {
  id: string;
  name: string;
  artForm: string;
  verified: boolean;
  photo: string;
  gallery: string[];
  videoUrl: string;
  description: string;
  price: number;
  location: string;
  region: string;
  rating: number;
  reviewCount: number;
  experience: string;
}

export interface Review {
  id: string;
  artistId: string;
  clientName: string;
  rating: number;
  comment: string;
  date: string;
  eventType: string;
}

export interface Booking {
  id: string;
  artistId: string;
  artistName: string;
  artForm: string;
  clientName: string;
  eventDate: string;
  eventType: string;
  location: string;
  status: "pending" | "confirmed" | "completed" | "cancelled";
  amount: number;
  createdAt: string;
}

export const artForms: ArtForm[] = [
  {
    id: "yakshagana",
    name: "Yakshagana",
    description: "A traditional theatre form combining dance, music, dialogue, costume, make-up, and stage techniques with a unique style.",
    image: "https://images.unsplash.com/photo-1545959570-a94084071b5d?w=600&h=400&fit=crop",
    region: "Coastal",
    startingPrice: 15000,
  },
  {
    id: "dollu-kunitha",
    name: "Dollu Kunitha",
    description: "A drum dance performed by men in the Kuruba community, known for its rhythmic energy and formations.",
    image: "https://images.unsplash.com/photo-1504699583012-8bbd2f617834?w=600&h=400&fit=crop",
    region: "South Karnataka",
    startingPrice: 10000,
  },
  {
    id: "huli-vesha",
    name: "Huli Vesha",
    description: "Tiger dance — performers paint themselves as tigers and dance to drumbeats during Navratri celebrations.",
    image: "https://images.unsplash.com/photo-1533669955142-6a73332af4db?w=600&h=400&fit=crop",
    region: "Coastal",
    startingPrice: 12000,
  },
  {
    id: "veeragase",
    name: "Veeragase",
    description: "A vigorous dance form depicting the story of Veerabhadra, performed with intense energy and devotion.",
    image: "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?w=600&h=400&fit=crop",
    region: "North Karnataka",
    startingPrice: 8000,
  },
  {
    id: "bharatanatyam",
    name: "Bharatanatyam",
    description: "One of the oldest classical dance forms originating from Tamil Nadu, known for grace and sculptural poses.",
    image: "https://images.unsplash.com/photo-1547153760-18fc86c39d55?w=600&h=400&fit=crop",
    region: "South Karnataka",
    startingPrice: 20000,
  },
  {
    id: "kamsale",
    name: "Kamsale",
    description: "A folk dance using cymbals (kamsale) dedicated to Lord Mahadeshwara, performed by the Male Mahadeshwara devotees.",
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=600&h=400&fit=crop",
    region: "South Karnataka",
    startingPrice: 7000,
  },
];

export const artists: Artist[] = [
  {
    id: "1",
    name: "Rajesh Kumar Shetty",
    artForm: "Yakshagana",
    verified: true,
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1545959570-a94084071b5d?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1504699583012-8bbd2f617834?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1533669955142-6a73332af4db?w=600&h=400&fit=crop",
    ],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    description: "With over 20 years of Yakshagana experience, Rajesh brings mythological tales to life with stunning costumes and powerful performances. He has performed across 500+ events across India and beyond.",
    price: 18000,
    location: "Udupi",
    region: "Coastal",
    rating: 4.8,
    reviewCount: 124,
    experience: "20+ years",
  },
  {
    id: "2",
    name: "Priya Devi",
    artForm: "Bharatanatyam",
    verified: true,
    photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1547153760-18fc86c39d55?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?w=600&h=400&fit=crop",
    ],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    description: "Priya is a Bharatanatyam prodigy trained under legendary gurus. Her performances blend classical tradition with contemporary themes, captivating audiences at weddings, corporate events, and festivals.",
    price: 25000,
    location: "Mysuru",
    region: "South Karnataka",
    rating: 4.9,
    reviewCount: 89,
    experience: "15+ years",
  },
  {
    id: "3",
    name: "Ganesh Poojary",
    artForm: "Huli Vesha",
    verified: true,
    photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1533669955142-6a73332af4db?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=600&h=400&fit=crop",
    ],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    description: "Ganesh leads a troupe of 12 Huli Vesha performers, creating mesmerizing tiger dance spectacles for Navratri celebrations and cultural festivals across the coastal region.",
    price: 15000,
    location: "Mangalore",
    region: "Coastal",
    rating: 4.7,
    reviewCount: 67,
    experience: "12+ years",
  },
  {
    id: "4",
    name: "Suresh Gowda",
    artForm: "Dollu Kunitha",
    verified: false,
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1504699583012-8bbd2f617834?w=600&h=400&fit=crop",
    ],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    description: "Suresh commands a team of 8 energetic Dollu Kunitha performers. Their drumming formations and synchronized movements create unforgettable experiences at weddings and festivals.",
    price: 12000,
    location: "Bengaluru",
    region: "South Karnataka",
    rating: 4.5,
    reviewCount: 45,
    experience: "10+ years",
  },
  {
    id: "5",
    name: "Basavaraj Patil",
    artForm: "Veeragase",
    verified: true,
    photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&h=300&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?w=600&h=400&fit=crop",
    ],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    description: "Basavaraj is a renowned Veeragase performer from northern India. His powerful depiction of Veerabhadra's story has won multiple state-level awards and acclaim.",
    price: 10000,
    location: "Dharwad",
    region: "North Karnataka",
    rating: 4.6,
    reviewCount: 56,
    experience: "18+ years",
  },
  {
    id: "6",
    name: "Lakshmi Naik",
    artForm: "Kamsale",
    verified: true,
    photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=600&h=400&fit=crop",
    ],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    description: "Lakshmi brings the devotional art of Kamsale to modern stages. Her troupe performs with spiritual energy and rhythmic precision that leaves audiences spellbound.",
    price: 8000,
    location: "Chamarajanagar",
    region: "South Karnataka",
    rating: 4.4,
    reviewCount: 32,
    experience: "8+ years",
  },
];

export const reviews: Review[] = [
  { id: "r1", artistId: "1", clientName: "Anita Sharma", rating: 5, comment: "Absolutely mesmerizing performance at our wedding! The Yakshagana was the highlight of the evening.", date: "2026-03-15", eventType: "Wedding" },
  { id: "r2", artistId: "1", clientName: "Vikram Rao", rating: 5, comment: "Rajesh and his troupe were professional and captivating. Highly recommend!", date: "2026-02-20", eventType: "Corporate Event" },
  { id: "r3", artistId: "1", clientName: "Meera Kulkarni", rating: 4, comment: "Great performance. Coordination and costumes were top-notch.", date: "2026-01-10", eventType: "Festival" },
  { id: "r4", artistId: "2", clientName: "Deepak Hegde", rating: 5, comment: "Priya's Bharatanatyam was divine. Every mudra told a story.", date: "2026-03-01", eventType: "Wedding" },
  { id: "r5", artistId: "2", clientName: "Sanjay Nair", rating: 5, comment: "Best classical dance performance we've ever seen.", date: "2026-02-15", eventType: "Cultural Festival" },
  { id: "r6", artistId: "3", clientName: "Rohan Patel", rating: 5, comment: "The Huli Vesha was spectacular! Kids and adults loved it.", date: "2026-03-10", eventType: "Festival" },
  { id: "r7", artistId: "4", clientName: "Kavita Rao", rating: 4, comment: "Energetic Dollu Kunitha performance that got everyone cheering.", date: "2026-01-20", eventType: "Wedding" },
  { id: "r8", artistId: "5", clientName: "Arun Kumar", rating: 5, comment: "Basavaraj's Veeragase was powerful and moving.", date: "2026-02-28", eventType: "Temple Festival" },
];

export const bookings: Booking[] = [
  { id: "b1", artistId: "1", artistName: "Rajesh Kumar Shetty", artForm: "Yakshagana", clientName: "Anita Sharma", eventDate: "2026-04-20", eventType: "Wedding", location: "Udupi", status: "confirmed", amount: 18000, createdAt: "2026-03-25" },
  { id: "b2", artistId: "2", artistName: "Priya Devi", artForm: "Bharatanatyam", clientName: "Deepak Hegde", eventDate: "2026-05-05", eventType: "Corporate Event", location: "Bengaluru", status: "pending", amount: 25000, createdAt: "2026-03-28" },
  { id: "b3", artistId: "3", artistName: "Ganesh Poojary", artForm: "Huli Vesha", clientName: "Rohan Patel", eventDate: "2026-03-15", eventType: "Festival", location: "Mangalore", status: "completed", amount: 15000, createdAt: "2026-02-20" },
  { id: "b4", artistId: "5", artistName: "Basavaraj Patil", artForm: "Veeragase", clientName: "Arun Kumar", eventDate: "2026-04-30", eventType: "Temple Festival", location: "Dharwad", status: "confirmed", amount: 10000, createdAt: "2026-03-30" },
  { id: "b5", artistId: "4", artistName: "Suresh Gowda", artForm: "Dollu Kunitha", clientName: "Kavita Rao", eventDate: "2026-02-14", eventType: "Wedding", location: "Bengaluru", status: "cancelled", amount: 12000, createdAt: "2026-01-15" },
];
