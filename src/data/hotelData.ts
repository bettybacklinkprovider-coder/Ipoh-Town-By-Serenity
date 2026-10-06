import heroHotelImg from '../assets/images/ipoh_hero_hotel_1791268426190.jpg';
import serenitySuiteImg from '../assets/images/ipoh_serenity_suite_1791268439765.jpg';
import heritageRoomImg from '../assets/images/ipoh_heritage_room_1791268457339.jpg';
import loungeCafeImg from '../assets/images/ipoh_lounge_cafe_1791268469798.jpg';
import concubineLaneImg from '../assets/images/ipoh_concubine_lane_1791268482153.jpg';
import rainShowerImg from '../assets/images/ipoh_rain_shower_1791269076528.jpg';
import digitalLockImg from '../assets/images/ipoh_digital_lock_1791269095549.jpg';
import secureParkingImg from '../assets/images/ipoh_secure_parking_1791269113674.jpg';

export interface Room {
  id: string;
  name: string;
  category: 'suite' | 'premier' | 'deluxe' | 'family';
  tagline: string;
  priceMYR: number;
  sizeSqFt: number;
  maxGuests: number;
  bedType: string;
  view: string;
  description: string;
  longDescription: string;
  image: string;
  gallery: string[];
  amenities: string[];
  features: string[];
}

export interface Amenity {
  id: string;
  title: string;
  description: string;
  iconName: string;
  image: string;
}

export interface Attraction {
  id: string;
  name: string;
  distance: string;
  category: string;
  description: string;
  image: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export const HOTEL_IMAGES = {
  hero: heroHotelImg,
  serenitySuite: serenitySuiteImg,
  heritageRoom: heritageRoomImg,
  loungeCafe: loungeCafeImg,
  concubineLane: concubineLaneImg,
};

export const HOTEL_INFO = {
  name: 'Ipoh Town By Serenity',
  tagline: 'An Oasis of Pure Luxury & Tranquility in Historic Ipoh',
  phone: '+60167038488',
  phoneClean: '60167038488',
  email: 'reservations@ipohtownbyserenity.com',
  address: '157, Jalan Sultan Iskandar, Taman Jubilee, 30000 Ipoh, Perak, Malaysia',
  street: '157, Jalan Sultan Iskandar',
  area: 'Taman Jubilee',
  city: 'Ipoh',
  state: 'Perak',
  postcode: '30000',
  country: 'Malaysia',
  currencySymbol: 'RM',
  currencyCode: 'MYR',
  checkInTime: '3:00 PM',
  checkOutTime: '12:00 PM',
  frontDeskHours: '24/7 Concierge Service',
};

// High resolution curated hotel photography with dark purple & gold aesthetic
export const ROOMS_DATA: Room[] = [
  {
    id: 'serenity-executive-suite',
    name: 'Serenity Executive Suite',
    category: 'suite',
    tagline: 'The Pinnacle of Ipoh Luxury with Private Lounge Area',
    priceMYR: 420,
    sizeSqFt: 520,
    maxGuests: 2,
    bedType: '1 Royal King Bed',
    view: 'Ipoh Town Skyline & Hills View',
    description: 'Expansive master suite featuring luxury plush king bedding, separate sitting lounge, rain shower spa bathroom, and bespoke gold accents.',
    longDescription: 'Designed for discerning travelers seeking unmatched relaxation, the Serenity Executive Suite offers a sanctuary of refinement. Enjoy custom dark-velvet furnishings, high-thread-count Egyptian cotton linens, a dedicated workspace, and a marble bath outfitted with luxury rain showers and organic bath amenities.',
    image: serenitySuiteImg,
    gallery: [
      serenitySuiteImg,
      loungeCafeImg,
      heroHotelImg,
      heritageRoomImg
    ],
    amenities: ['High-Speed Wi-Fi', 'Smart TV 55"', 'Espresso Machine', 'Mini Bar', 'Rain Shower', 'Complimentary Breakfast', 'Safe Box', 'Air Conditioning'],
    features: ['520 sq ft Master Layout', 'Separate Living & Seating Lounge', 'Private City View Window', 'Soundproof Acoustic Glass', 'Plush Robe & Bath Slippers']
  },
  {
    id: 'heritage-premier-room',
    name: 'Heritage Premier Room',
    category: 'premier',
    tagline: 'Contemporary Elegance Rooted in Ipoh Heritage',
    priceMYR: 310,
    sizeSqFt: 380,
    maxGuests: 2,
    bedType: '1 Luxury King Bed',
    view: 'Taman Jubilee Street View',
    description: 'A harmonious blend of warm boutique charm and modern luxury. Features ambient warm lighting, custom wood vanity, and plush mattress.',
    longDescription: 'Embrace the soul of Ipoh in our Heritage Premier Room. Tailored for comfort with custom art pieces reflecting Ipoh’s rich colonial and architectural lineage, this room boasts an ultra-comfortable king bed, whisper-quiet air conditioning, and a full marble bathroom.',
    image: heritageRoomImg,
    gallery: [
      heritageRoomImg,
      serenitySuiteImg,
      loungeCafeImg
    ],
    amenities: ['High-Speed Wi-Fi', 'Smart TV 50"', 'Gourmet Tea/Coffee', 'Rain Shower', 'Work Desk', 'Keyless Digital Lock', 'Air Conditioning'],
    features: ['380 sq ft Spacious Design', 'Ergonomic Work Station', 'Custom Ambient Lighting', 'Blackout Curtains']
  },
  {
    id: 'royal-family-suite',
    name: 'Royal Family Comfort Suite',
    category: 'family',
    tagline: 'Generous Space & Warmth for Loved Ones',
    priceMYR: 480,
    sizeSqFt: 620,
    maxGuests: 4,
    bedType: '2 Queen Beds',
    view: 'City & Garden Courtyard View',
    description: 'Ideal for families or groups traveling together. Features dual queen beds, double vanity bath, extra storage, and child-friendly layout.',
    longDescription: 'Created with family warmth in mind, the Royal Family Comfort Suite delivers lavish space without compromising on intimacy. Equipped with two plush queen beds, ample lounge seating, smart entertainment center, and a spacious bathroom with dual vanity sinks.',
    image: serenitySuiteImg,
    gallery: [
      serenitySuiteImg,
      heritageRoomImg,
      loungeCafeImg
    ],
    amenities: ['High-Speed Wi-Fi', 'Smart TV 55"', 'Mini Refrigerator', 'Double Vanity Bath', 'Tea/Coffee Bar', 'In-Room Safe', 'Air Conditioning'],
    features: ['620 sq ft Multi-Bed Layout', 'Dual Vanity Bathroom', 'Dining & Snack Table', 'Extra Wardrobe Space']
  },
  {
    id: 'deluxe-king-sanctum',
    name: 'Deluxe King Sanctum',
    category: 'deluxe',
    tagline: 'Peaceful Sanctuary Designed for Total Rest',
    priceMYR: 250,
    sizeSqFt: 300,
    maxGuests: 2,
    bedType: '1 Plush King Bed',
    view: 'Inner Courtyard View',
    description: 'Serene, quiet, and intimately styled room crafted for restorative sleep and seamless modern convenience.',
    longDescription: 'Escape the bustle of the city in the Deluxe King Sanctum. Tucked away in a quiet wing of the hotel, it offers an exceptionally quiet sleeping environment with premium mattress, atmospheric dimmable lighting, and sleek modern shower room.',
    image: heritageRoomImg,
    gallery: [
      heritageRoomImg,
      serenitySuiteImg
    ],
    amenities: ['High-Speed Wi-Fi', 'Smart TV 43"', 'Rain Shower', 'Coffee Maker', 'Air Conditioning', 'Daily Housekeeping'],
    features: ['300 sq ft Cozy Haven', 'Ultra-Quiet Acoustic Insulation', 'Hypoallergenic Bedding']
  },
  {
    id: 'serenity-twin-premier',
    name: 'Serenity Twin Premier',
    category: 'premier',
    tagline: 'Sophisticated Twin Room for Business & Leisure',
    priceMYR: 280,
    sizeSqFt: 340,
    maxGuests: 2,
    bedType: '2 Single Beds',
    view: 'Jalan Sultan Iskandar Street View',
    description: 'Elegantly furnished twin bed accommodation featuring separate work spaces and contemporary gold aesthetics.',
    longDescription: 'Whether traveling with a companion or on a corporate retreat, the Serenity Twin Premier provides individual comfort with two single beds, individual bedside lighting and power outlets, high-speed Wi-Fi, and a pristine ensuite shower.',
    image: loungeCafeImg,
    gallery: [
      loungeCafeImg,
      heritageRoomImg
    ],
    amenities: ['High-Speed Wi-Fi', 'Smart TV 43"', 'Dual Bedside Ports', 'Rain Shower', 'Air Conditioning', 'Work Table'],
    features: ['340 sq ft Twin Setup', 'Individual Reading Lights', 'Workstation Desk']
  }
];

export const AMENITIES_DATA: Amenity[] = [
  {
    id: 'wifi',
    title: 'High-Speed Wi-Fi',
    description: 'Complimentary fiber-optic high-speed internet accessible across all guest rooms, suites, and common lounges.',
    iconName: 'Wifi',
    image: loungeCafeImg
  },
  {
    id: 'comfort-bedding',
    title: 'Ultra-Comfort Rooms',
    description: 'Custom therapeutic mattresses, hypoallergenic pillows, and high-thread-count linens for deep, effortless rest.',
    iconName: 'BedDouble',
    image: serenitySuiteImg
  },
  {
    id: 'air-conditioning',
    title: 'Climate Control AC',
    description: 'Individual touch-panel quiet air conditioning in every room to maintain your ideal personal temperature.',
    iconName: 'Wind',
    image: heritageRoomImg
  },
  {
    id: 'parking',
    title: 'Secure On-Site Parking',
    description: 'Dedicated parking facility with 24/7 surveillance and direct elevator access to guest floors.',
    iconName: 'Car',
    image: secureParkingImg
  },
  {
    id: 'housekeeping',
    title: 'Daily Housekeeping',
    description: 'Impeccable daily room sanitization, towel replacements, and evening turndown service upon request.',
    iconName: 'Sparkles',
    image: heroHotelImg
  },
  {
    id: 'rain-shower',
    title: 'Luxury Rain Showers',
    description: 'Spa-inspired walk-in rain showers with premium organic toiletries, plush bath sheets, and fluffy robes.',
    iconName: 'Bath',
    image: rainShowerImg
  },
  {
    id: 'keyless-entry',
    title: 'Keyless & Digital Locks',
    description: 'Modern RFID keycard & contactless smartphone room access ensuring seamless security.',
    iconName: 'KeyRound',
    image: digitalLockImg
  },
  {
    id: 'lounge-cafe',
    title: 'Serenity Lounge & Cafe',
    description: 'Intimate lounge area serving authentic Ipoh artisanal coffee, light snacks, and evening refreshers.',
    iconName: 'Coffee',
    image: loungeCafeImg
  }
];

export const IPOH_ATTRACTIONS: Attraction[] = [
  {
    id: 'concubine-lane',
    name: 'Historic Concubine Lane',
    distance: '3 mins walk (400m)',
    category: 'Heritage & Shopping',
    description: 'Ipoh’s iconic heritage street filled with charming cafes, artisanal crafts, rainbow ice balls, and historic architecture.',
    image: concubineLaneImg
  },
  {
    id: 'ipoh-white-coffee',
    name: 'Famous Ipoh White Coffee Hubs',
    distance: '2 mins walk (250m)',
    category: 'Culinary Heritage',
    description: 'Surrounded by legendary coffee houses serving rich roasted Ipoh white coffee, egg tarts, and local dim sum treats.',
    image: loungeCafeImg
  },
  {
    id: 'perak-cave-temple',
    name: 'Perak Cave & Kek Lok Tong Temples',
    distance: '10 mins drive (6.2km)',
    category: 'Nature & Culture',
    description: 'Breathtaking limestone caves with serene Buddha statues, mountain vantage points, and lush ornamental gardens.',
    image: heroHotelImg
  },
  {
    id: 'ipoh-railway-station',
    name: 'Ipoh Railway Station ("Taj Mahal of Ipoh")',
    distance: '5 mins drive (1.5km)',
    category: 'Colonial Architecture',
    description: 'Stunning Moorish and Victorian architectural landmark showcasing Ipoh’s rich heritage background.',
    image: heritageRoomImg
  }
];

export const FAQS: FAQ[] = [
  {
    question: 'What are the check-in and check-out times at Ipoh Town By Serenity?',
    answer: 'Standard check-in time is from 3:00 PM onwards, and check-out is up to 12:00 PM. Early check-in or late check-out can be requested subject to availability.'
  },
  {
    question: 'Is parking available at the hotel?',
    answer: 'Yes! We provide secure guest parking facilities located directly at our address at 157, Jalan Sultan Iskandar, Taman Jubilee.'
  },
  {
    question: 'How do I reach the hotel from Ipoh Railway Station or Airport?',
    answer: 'Ipoh Town By Serenity is just a 5-minute drive from Ipoh Railway Station (ETS) and a 12-minute drive from Sultan Azlan Shah Airport (IPH).'
  },
  {
    question: 'Is breakfast included with room bookings?',
    answer: 'Breakfast inclusion depends on your selected room package. Executive Suites include daily breakfast, and guests in all rooms can order gourmet breakfast in our Serenity Lounge.'
  },
  {
    question: 'Can I make a direct booking via phone or WhatsApp?',
    answer: 'Absolutely! You can reach our reservation team directly at +60167038488 or click the WhatsApp button on our website for instant inquiries.'
  }
];
