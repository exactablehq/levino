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
  image: string;
  avatar: string;
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
    {
      label: "Reception & Reservations",
      number: "+91 99137 13747",
      clean: "+919913713747",
    },
    {
      label: "Weddings & Celebrations",
      number: "+91 97241 13747",
      clean: "+919724113747",
    },
  ],
  primaryPhone: "+91 99137 13747",
  primaryPhoneClean: "+919913713747",
  whatsappNumber: "919913713747",
  email: "levinodaman@gmail.com",
  address: "Devka Beach Road, Daman, India",
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
      "A sanctuary of grandeur and refinement. Designed for lavish stays, destination weddings, and distinguished celebrations.",
    rooms: 26,
    capacity: "Up to 800 Guests",
    highlights: [
      "26 Luxury Air-Conditioned Rooms",
      "Grand Central Lawn (800+ Capacity)",
      "Elegant Banquet Hall (250 Capacity)",
      "Multi-Cuisine Banquet Catering",
      "Dedicated Wedding & Event Concierge",
    ],
    image: "https://framerusercontent.com/images/92LbUTqFBmt5LRD9Cdel5mRhVw.jpeg",
    features: [
      "Weddings & Receptions",
      "Banquet Hall",
      "Lush Lawns",
      "VIP Suites",
    ],
  },
  {
    id: "palms",
    name: "Levino Palms",
    badge: "Understated Luxury",
    rating: "4.5/5",
    reviewCount: 578,
    description:
      "A homely retreat where open green spaces blend with comfort. Perfectly suited for relaxing family getaways and intimate gatherings.",
    rooms: 22,
    capacity: "Families & Leisure",
    highlights: [
      "22 Comfortable Deluxe Rooms",
      "Sparkling Outdoor Swimming Pool",
      "Just 5 Minutes from Devka Beach",
      "Multi-Cuisine In-House Restaurant",
      "Tranquil Palm-Fringed Gardens",
    ],
    image: "https://framerusercontent.com/images/35NPGozrnsIxP4UuRCpZjn5sg.jpg",
    features: [
      "Swimming Pool",
      "5 Min to Beach",
      "Family Stays",
      "Restaurant",
    ],
  },
];

export const AMENITIES: Amenity[] = [
  {
    id: "pool",
    title: "Poolside Relaxation",
    subtitle: "Sunlit Oasis",
    description:
      "A refreshing swimming pool surrounded by greenery — perfect for relaxing afternoons and family fun.",
    iconName: "Waves",
    image: "https://framerusercontent.com/images/xYIvc4idBNTWCTMCmU4nep7fKg.jpg",
  },
  {
    id: "restaurant",
    title: "Multi-Cuisine Restaurant",
    subtitle: "Artisanal Flavors",
    description:
      "Enjoy delicious vegetarian and non-vegetarian meals freshly prepared by our chefs.",
    iconName: "Utensils",
    image: "https://framerusercontent.com/images/9EU334TrB3M9FzWbaLc5xw9HQU.jpg",
  },
  {
    id: "conference",
    title: "Conference & Event Spaces",
    subtitle: "Corporate & Celebrations",
    description:
      "Modern facilities for corporate meetings, celebrations, and private events.",
    iconName: "Briefcase",
    image: "https://framerusercontent.com/images/lwHQuNr8ZYzamFCv3raR3sD6ocY.jpg",
  },
  {
    id: "lawns",
    title: "Lush Green Lawns",
    subtitle: "Grand Open Spaces",
    description:
      "Open green spaces perfect for weddings, celebrations, and outdoor gatherings.",
    iconName: "Sparkles",
    image: "https://framerusercontent.com/images/t7t26YAdkSCutrDsmxNynR6U.jpeg",
  },
];

export const WHY_CHOOSE_ITEMS = [
  {
    title: "Prime Location",
    description:
      "Just a short walk from Devka Beach, offering easy access to the coast while keeping you surrounded by peace and privacy.",
    icon: "📍",
  },
  {
    title: "Ideal for Celebrations",
    description:
      "Spacious lawns and elegant event spaces create the perfect setting for weddings, celebrations, and memorable gatherings.",
    icon: "🎉",
  },
  {
    title: "Comfortable Stays",
    description:
      "Thoughtfully designed rooms across Levino Palms and Levino Meadows, created for restful stays and everyday comfort.",
    icon: "🛌",
  },
  {
    title: "Natural Surroundings",
    description:
      "Lush greenery, open skies, palm trees, and peaceful outdoor spaces bring a relaxed coastal feeling to every stay.",
    icon: "🌴",
  },
  {
    title: "Personalized Hospitality",
    description:
      "Warm and attentive service designed to make every guest feel comfortable, welcomed, and truly at home.",
    icon: "✨",
  },
];

export const FOUNDER_QUOTE = {
  title: "A place designed for Memories",
  subtitle: "A Word from Our Founder",
  quote:
    "At Levino, we believe that every stay should feel effortless and every celebration unforgettable. Our spaces are designed to bring people together — whether it’s families enjoying a quiet holiday, couples celebrating their wedding, or companies hosting meaningful gatherings. Levino is not just a place to stay — it’s a place where moments turn into memories.",
  author: "The Levino Team",
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
    image: "https://framerusercontent.com/images/gT6rhgnj2vKLjMTLmGTGddghffU.jpg",
    avatar: "https://framerusercontent.com/images/nLpoIJfOldMKVpCuzCqOhSsDzZ0.png",
  },
  {
    id: "2",
    name: "Neha & Arjun",
    city: "Surat",
    rating: 5,
    occasion: "Destination Wedding",
    text: "We hosted our wedding at Levino Meadows and it was magical. The lawns are huge and beautifully maintained.",
    image: "https://framerusercontent.com/images/t7t26YAdkSCutrDsmxNynR6U.jpeg",
    avatar: "https://framerusercontent.com/images/QohO2VX1aVuV1QZjewsfnLdk.png",
  },
  {
    id: "3",
    name: "Mehul Patel",
    city: "Ahmedabad",
    rating: 5,
    occasion: "Leisure Vacation",
    text: "Just minutes from Devka Beach but far enough to feel peaceful. The food was excellent and the staff was very helpful.",
    image: "https://framerusercontent.com/images/WLklufoflxXTSJcVcysZn47hvk.jpg",
    avatar: "https://framerusercontent.com/images/nLpoIJfOldMKVpCuzCqOhSsDzZ0.png",
  },
];

export const ATTRACTIONS: Attraction[] = [
  {
    id: "devka",
    title: "Devka Beach",
    distance: "5 Min Walk",
    description:
      "Just a short 5-minute walk from Levino, Devka Beach is one of Daman’s most popular coastal spots. Enjoy peaceful morning walks, stunning sunsets, and the refreshing sea breeze that makes Daman a perfect weekend getaway.",
    image: "https://framerusercontent.com/images/iLcDSoLzDcAwKeDrT7bNfGVAM.jpg",
  },
  {
    id: "moti-daman",
    title: "Moti Daman Fort",
    distance: "12 Min Drive",
    description:
      "Explore the historic Portuguese fort that stands as one of Daman’s most iconic landmarks. With ancient churches, scenic streets, and centuries-old architecture, Moti Daman offers a unique cultural experience.",
    image: "https://framerusercontent.com/images/2iiM4sUs2emW9vuuzzq1O5EC0k.png",
  },
  {
    id: "jampore",
    title: "Jampore Beach",
    distance: "20 Min Drive",
    description:
      "Located just a short drive away, Jampore Beach is perfect for relaxing by the sea, horse riding along the shore, and enjoying Daman’s peaceful coastal atmosphere.",
    image: "https://framerusercontent.com/images/2jGo1SRDVf6HK957w4k4qXJr4lM.png",
  },
  {
    id: "markets",
    title: "Local Food & Markets",
    distance: "10 Min Drive",
    description:
      "From fresh seafood to street-side delicacies and local markets, Daman offers plenty of culinary and cultural experiences for visitors to explore.",
    image: "https://framerusercontent.com/images/ABm33CvoEgl12YUX7U4hpd1giq8.png",
  },
];

export const FAQS: FaqItem[] = [
  {
    id: "location",
    question: "Where is Levino located?",
    answer:
      "Levino is located in Daman, just a 5-minute walk from Devka Beach, making it easily accessible while offering a peaceful environment.",
  },
  {
    id: "rooms",
    question: "What accommodation options are available?",
    answer:
      "Levino Palms offers 22 comfortable rooms, while Levino Meadows provides 26 rooms, ideal for guests attending events or celebrations.",
  },
  {
    id: "weddings",
    question: "Can Levino host weddings and large events?",
    answer:
      "Yes. Levino Meadows features a central lawn accommodating up to 800 guests and a banquet hall for 250 guests, making it perfect for weddings and corporate events.",
  },
  {
    id: "restaurant",
    question: "Does the hotel have a restaurant?",
    answer:
      "Yes, Levino offers a restaurant serving both vegetarian and non-vegetarian meals.",
  },
  {
    id: "conference",
    question: "Are there facilities for corporate events?",
    answer:
      "Yes. We offer conference and event spaces suitable for corporate meetings, workshops, and gatherings.",
  },
];