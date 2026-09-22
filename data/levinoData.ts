export interface Property {
  id: string;
  name: string;
  badge: string;
  rating: string;
  reviewCount: number;
  description: string;
  rooms: number;
  capacity: string;
  highlights: string[];
  image: string;
  features: string[];
}

export interface Amenity {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  city: string;
  text: string;
  rating: number;
  occasion?: string;
}

export interface Attraction {
  id: string;
  title: string;
  distance: string;
  description: string;
  image: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const LEVINO_CONTACT = {
  name: "Levino Daman",
  tagline: "…a home away from home",
  phones: [
    { label: "Front Desk & Reservations", number: "+91 95122 12280", clean: "+919512212280" },
    { label: "Events & Weddings", number: "+91 99137 13747", clean: "+919913713747" },
    { label: "Guest Support", number: "+91 82919 98806", clean: "+918291998806" },
  ],
  primaryPhone: "+91 95122 12280",
  primaryPhoneClean: "+919512212280",
  whatsappNumber: "919512212280",
  email: "levino396210@gmail.com",
  address: "Near Devka Beach, Bhimpore, Daman - 396210, DNH and DD, India",
  googleMapsUrl: "https://maps.google.com/?q=Levino+Daman+Devka+Beach",
  checkInTime: "12:00 PM",
  checkOutTime: "10:00 AM",
};

export const PROPERTIES: Property[] = [
  {
    id: "meadows",
    name: "Levino Meadows",
    badge: "Elevated Indulgence",
    rating: "4.6/5",
    reviewCount: 493,
    description:
      "A sanctuary of grandeur and refinement. At Levino Meadows, every detail — from expansive manicured lawns to curated celebrations — is designed to embody timeless luxury.",
    rooms: 26,
    capacity: "Up to 800 Guests",
    highlights: [
      "26 Luxury Air-Conditioned Rooms",
      "Grand Central Lawn (800+ Capacity)",
      "Elegant Banquet Hall (250 Capacity)",
      "Multi-Cuisine Banquet Catering",
      "Dedicated Wedding & Event Concierge",
    ],
    image:
      "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=1200&auto=format&fit=crop",
    features: ["Weddings & Receptions", "Banquet Hall", "Lush Lawns", "VIP Suites"],
  },
  {
    id: "palms",
    name: "Levino Palms",
    badge: "Understated Luxury",
    rating: "4.5/5",
    reviewCount: 578,
    description:
      "A homely retreat where open green spaces blend with thoughtful hospitality. Levino Palms is crafted for travelers who value serene beachside relaxation without compromise.",
    rooms: 22,
    capacity: "Families & Leisure",
    highlights: [
      "22 Comfortable Deluxe Rooms",
      "Sparkling Outdoor Swimming Pool",
      "Just 5 Minutes from Devka Beach",
      "Multi-Cuisine In-House Restaurant",
      "Tranquil Palm-Fringed Gardens",
    ],
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200&auto=format&fit=crop",
    features: ["Swimming Pool", "5 Min to Beach", "Family Stays", "Restaurant"],
  },
];

export const AMENITIES: Amenity[] = [
  {
    id: "pool",
    title: "Poolside Relaxation",
    subtitle: "Sunlit Oasis",
    description:
      "A refreshing swimming pool surrounded by greenery — perfect for relaxing afternoons and family fun under the gentle coastal sun.",
    iconName: "Waves",
    image:
      "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "restaurant",
    title: "Multi-Cuisine Restaurant",
    subtitle: "Artisanal Flavors",
    description:
      "Enjoy delicious vegetarian and non-vegetarian meals freshly prepared by our passionate chefs using local coastal flavors and global favorites.",
    iconName: "Utensils",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "conference",
    title: "Conference & Event Spaces",
    subtitle: "Corporate & Celebrations",
    description:
      "Modern climate-controlled facilities equipped with AV systems, designed for corporate off-sites, seminars, conferences, and private banquets.",
    iconName: "Briefcase",
    image:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "lawns",
    title: "Lush Green Lawns",
    subtitle: "Grand Open Spaces",
    description:
      "Expansive, manicured open-air green spaces accommodating up to 800 guests, ideal for dream weddings, pheras, sangeet nights, and corporate galas.",
    iconName: "Sparkles",
    image:
      "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=800&auto=format&fit=crop",
  },
];

export const WHY_CHOOSE_ITEMS = [
  {
    title: "Prime Location",
    description:
      "Situated just a 5-minute stroll from Devka Beach, giving you effortless coastal access while enjoying tranquil privacy.",
    icon: "MapPin",
  },
  {
    title: "Ideal for Celebrations",
    description:
      "Sprawling central lawns hosting up to 800 guests and modern banquets make Levino Daman’s top choice for destination weddings.",
    icon: "PartyPopper",
  },
  {
    title: "Comfortable Stays",
    description:
      "48 well-appointed, spotless rooms across Palms and Meadows designed with warm tones and homelike comfort.",
    icon: "BedDouble",
  },
  {
    title: "Natural Surroundings",
    description:
      "Immerse yourself in lush greenery, tall coconut palms, manicured flora, and open coastal skies.",
    icon: "TreePine",
  },
  {
    title: "Personalized Hospitality",
    description:
      "Our team takes pride in attentive, heartfelt service that ensures every family or guest feels truly at home.",
    icon: "HeartHandshake",
  },
];

export const FOUNDER_QUOTE = {
  title: "A place for Memories",
  subtitle: "A Word from Our Founder",
  quote:
    "At Levino, we believe that every stay should feel effortless and every celebration unforgettable. Our spaces are designed to bring people together — whether it’s families enjoying a quiet holiday, couples celebrating their wedding, or companies hosting meaningful gatherings. Levino is not just a place to stay — it’s a place where moments turn into memories.",
  author: "The Levino Team & Founder",
  brand: "Levino Daman",
};

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "Rahul Shah",
    city: "Mumbai",
    rating: 5,
    occasion: "Weekend Family Getaway",
    text: "Levino Palms was the perfect weekend escape. The rooms were comfortable, the pool was great, and the staff made us feel right at home.",
  },
  {
    id: "2",
    name: "Neha & Arjun",
    city: "Surat",
    rating: 5,
    occasion: "Destination Wedding",
    text: "We hosted our wedding at Levino Meadows and it was magical. The lawns are huge and beautifully maintained, and the catering was exceptional.",
  },
  {
    id: "3",
    name: "Mehul Patel",
    city: "Ahmedabad",
    rating: 5,
    occasion: "Leisure Vacation",
    text: "Just minutes from Devka Beach but far enough to feel peaceful. The food was excellent and the staff was very helpful throughout our stay.",
  },
];

export const ATTRACTIONS: Attraction[] = [
  {
    id: "devka",
    title: "Devka Beach",
    distance: "5 Min Walk (400m)",
    description:
      "Just a short 5-minute walk from Levino, Devka Beach is one of Daman’s most popular coastal spots. Enjoy peaceful morning walks, stunning sunsets, and the refreshing sea breeze that makes Daman a perfect weekend getaway.",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "moti-daman",
    title: "Moti Daman Fort",
    distance: "12 Min Drive (4.8 km)",
    description:
      "Explore the historic Portuguese fort that stands as one of Daman’s most iconic landmarks. With ancient churches, scenic ramparts, and centuries-old architecture, Moti Daman offers a unique cultural experience.",
    image:
      "https://images.unsplash.com/photo-1582650625119-3a31f841839d?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "jampore",
    title: "Jampore Beach",
    distance: "20 Min Drive (9.2 km)",
    description:
      "Located just a short drive away, Jampore Beach is perfect for relaxing by the sea, horse riding along the shore, water sports, and enjoying Daman’s peaceful coastal atmosphere.",
    image:
      "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "markets",
    title: "Local Food & Markets",
    distance: "10 Min Drive",
    description:
      "From fresh coastal seafood to street-side delicacies and vibrant local handicraft markets, Daman offers plenty of rich culinary and cultural experiences for visitors to explore.",
    image:
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=800&auto=format&fit=crop",
  },
];

export const FAQS: FaqItem[] = [
  {
    id: "location",
    question: "Where is Levino located?",
    answer:
      "Levino is located in Daman, just a 5-minute walk from Devka Beach, making it easily accessible while offering a tranquil and peaceful environment.",
  },
  {
    id: "rooms",
    question: "How many rooms do Levino Palms and Levino Meadows have?",
    answer:
      "Levino Palms offers 22 comfortable rooms, while Levino Meadows provides 26 rooms, making it ideal for individual guests, family vacations, or guests attending events and celebrations.",
  },
  {
    id: "weddings",
    question: "Can we host weddings and large events at Levino?",
    answer:
      "Yes! Levino Meadows features a sprawling central lawn accommodating up to 800 guests and an indoor banquet hall for 250 guests, making it perfect for weddings, receptions, sangeets, and corporate events.",
  },
  {
    id: "restaurant",
    question: "Is there an on-site restaurant?",
    answer:
      "Yes, Levino offers a multi-cuisine restaurant serving delicious freshly prepared vegetarian and non-vegetarian meals, along with regional coastal delicacies.",
  },
  {
    id: "conference",
    question: "Are conference and meeting facilities available?",
    answer:
      "Yes. We offer air-conditioned conference and event spaces suitable for corporate meetings, workshops, team off-sites, and private gatherings.",
  },
];
