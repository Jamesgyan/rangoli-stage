
# INDISARA — Indian Cultural Marketplace

## Overview
A comprehensive frontend-only cultural marketplace connecting Indian folk artists with event organizers. Built with React, Tailwind CSS, JSON mock data, and the uploaded Indisara peacock logo.

## Design System
- **Colors**: Peacock Blue (#2C3E50), Saffron (#F37021), Gold (#F5C518), Green (#2E7D32), Red (#C62828)
- **Fonts**: Poppins (headings), Roboto (body) via Google Fonts
- **Cultural touches**: Subtle mandala/rangoli SVG background patterns, warm orange→yellow gradients, diya/lotus motifs as decorative elements
- **Logo**: Uploaded peacock logo in navbar (left) and hero section

## Pages & Features

### 1. Landing Page (`/`)
- **Hero**: Full-width section with cultural gradient background, logo, heading "Discover & Book Authentic Indian Folk Artists", two CTAs (Browse Artists, Become an Artist)
- **How It Works**: 3-step visual flow (Browse → Book → Enjoy) with cultural icons
- **Featured Art Forms**: Grid of cards (Yakshagana, Dollu Kunitha, Huli Vesha, Veeragase, etc.)
- **Trust Indicators**: Stats bar (artists count, events completed, cities covered)
- **Footer**: Contact info, social links, quick navigation

### 2. Art Form Catalog (`/catalog`)
- Filterable grid layout with cards (image, name, description, starting price)
- Filters sidebar: Region (Coastal, South Karnataka, North Karnataka), Price range slider

### 3. Artist Profile (`/artist/:id`)
- Photo gallery, embedded YouTube video, description, pricing, location
- Verified badge, star ratings & reviews section
- "Check Availability" and "Book Now" buttons

### 4. Search (`/search`)
- Search bar with art form and location inputs
- Filter by price range, rating
- Results as artist cards

### 5. Booking Flow (`/booking/:artistId`)
- Multi-step form: Select artist → Choose date (calendar picker) → Event details → Review & send request
- Confirmation screen with booking summary

### 6. Dashboards
- **Client Dashboard** (`/dashboard/client`): Booking history table, favorites list, reviews given
- **Artist Dashboard** (`/dashboard/artist`): Profile management form, booking requests list, calendar availability view, earnings summary
- **Admin Dashboard** (`/dashboard/admin`): Approve artists queue, manage bookings, analytics cards (total artists, bookings, revenue)

## Data
- JSON mock data files for artists, art forms, bookings, and reviews
- Easily replaceable with real API later

## Shared Components
- Sticky navbar with logo + navigation links + auth buttons
- Cultural footer with mandala pattern
- Reusable artist cards, art form cards, rating stars, booking status badges
- Smooth hover animations and page transitions

## Routing
React Router with all routes above, plus a 404 page.
