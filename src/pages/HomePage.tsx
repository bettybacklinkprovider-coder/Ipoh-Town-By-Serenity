import React, { useState } from 'react';
import { HOTEL_INFO, ROOMS_DATA, AMENITIES_DATA, IPOH_ATTRACTIONS, HOTEL_IMAGES, Room } from '../data/hotelData';
import { 
  CalendarCheck, ArrowRight, Phone, MapPin, Sparkles, Wifi, BedDouble, Wind, Car, 
  Bath, KeyRound, Coffee, Check, Star, ShieldCheck, Heart, Award
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: 'home' | 'rooms' | 'about' | 'contact') => void;
  onOpenBooking: (roomId?: string) => void;
  onOpenRoomDetail: (room: Room) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenBooking,
  onOpenRoomDetail
}) => {
  // Quick Search state in Hero
  const [quickCheckIn, setQuickCheckIn] = useState<string>(() => new Date().toISOString().split('T')[0]);
  const [quickGuests, setQuickGuests] = useState<number>(2);

  // Icon Mapper for Amenities
  const getAmenityIcon = (iconName: string) => {
    switch (iconName) {
      case 'Wifi': return <Wifi className="w-6 h-6 text-[#E5C158]" />;
      case 'BedDouble': return <BedDouble className="w-6 h-6 text-[#E5C158]" />;
      case 'Wind': return <Wind className="w-6 h-6 text-[#E5C158]" />;
      case 'Car': return <Car className="w-6 h-6 text-[#E5C158]" />;
      case 'Sparkles': return <Sparkles className="w-6 h-6 text-[#E5C158]" />;
      case 'Bath': return <Bath className="w-6 h-6 text-[#E5C158]" />;
      case 'KeyRound': return <KeyRound className="w-6 h-6 text-[#E5C158]" />;
      case 'Coffee': return <Coffee className="w-6 h-6 text-[#E5C158]" />;
      default: return <Sparkles className="w-6 h-6 text-[#E5C158]" />;
    }
  };

  return (
    <div className="space-y-0 text-[#F8F5EE] bg-[#120722]">

      {/* SECTION 1: HERO SECTION */}
      <section className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Large Luxury Hotel Visual Backdrop */}
        <div className="absolute inset-0 z-0">
          <img
            src={HOTEL_IMAGES.hero}
            alt="Ipoh Town By Serenity Luxury Facade"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover scale-105 filter brightness-75"
          />
          {/* Measured Dark Purple & Gold Gradient Overlay for Contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#120722] via-[#120722]/75 to-[#120722]/50" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#120722]/60 to-[#120722]" />
        </div>

        <div className="max-w-5xl mx-auto relative z-10 text-center space-y-8">
          
          {/* Hotel Name & Luxury Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1A0B2E]/90 border border-[#D4AF37]/40 shadow-xl backdrop-blur-md">
            <Sparkles className="w-4 h-4 text-[#E5C158]" />
            <span className="text-xs font-semibold tracking-widest text-[#E5C158] uppercase">
              Boutique Sanctuary in Perak, Malaysia
            </span>
          </div>

          <div className="space-y-3">
            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#F8F5EE] text-wrap-balance">
              Ipoh Town <span className="text-gold-gradient italic font-normal">By Serenity</span>
            </h1>
            <p className="text-base sm:text-xl text-[#EBE5DA]/90 max-w-2xl mx-auto font-light leading-relaxed">
              Where timeless Malaysian heritage meets understated modern luxury. Immerse yourself in total comfort and tranquil elegance in the heart of Ipoh.
            </p>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <button
              onClick={() => onOpenBooking()}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gold-gradient text-[#120722] font-bold text-sm tracking-wider uppercase shadow-[0_0_25px_rgba(212,175,55,0.35)] hover:shadow-[0_0_35px_rgba(212,175,55,0.5)] transition-all duration-300 flex items-center justify-center gap-3 cursor-pointer group"
            >
              <CalendarCheck className="w-5 h-5" />
              <span>Book Now</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => onNavigate('rooms')}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#1A0B2E]/80 border border-[#D4AF37]/40 text-[#E5C158] hover:bg-[#230E3D] hover:border-[#D4AF37] font-semibold text-sm tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer backdrop-blur-md"
            >
              <span>Explore Rooms</span>
            </button>
          </div>

          {/* Quick Search Bar Widget */}
          <div className="pt-8 max-w-4xl mx-auto">
            <div className="glass-purple-card p-4 sm:p-5 rounded-2xl border border-[#D4AF37]/30 shadow-2xl grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
              <div className="space-y-1">
                <label className="block text-[11px] font-semibold text-[#E5C158] uppercase tracking-wider">
                  Check-in Date
                </label>
                <input
                  type="date"
                  value={quickCheckIn}
                  onChange={(e) => setQuickCheckIn(e.target.value)}
                  className="w-full bg-[#120722]/90 border border-[#D4AF37]/20 rounded-lg px-3 py-2 text-xs text-[#F8F5EE] focus:outline-none focus:border-[#D4AF37]"
                />
              </div>

              <div className="space-y-1">
                <label className="block text-[11px] font-semibold text-[#E5C158] uppercase tracking-wider">
                  Guests
                </label>
                <select
                  value={quickGuests}
                  onChange={(e) => setQuickGuests(Number(e.target.value))}
                  className="w-full bg-[#120722]/90 border border-[#D4AF37]/20 rounded-lg px-3 py-2 text-xs text-[#F8F5EE] focus:outline-none focus:border-[#D4AF37]"
                >
                  <option value={1}>1 Guest</option>
                  <option value={2}>2 Guests</option>
                  <option value={3}>3 Guests</option>
                  <option value={4}>4 Guests (Family)</option>
                </select>
              </div>

              <div className="flex items-end">
                <button
                  onClick={() => onOpenBooking()}
                  className="w-full py-2.5 rounded-lg bg-gold-gradient text-[#120722] font-bold text-xs uppercase tracking-wider shadow-md hover:opacity-95 transition-opacity cursor-pointer flex items-center justify-center gap-2"
                >
                  <CalendarCheck className="w-4 h-4" />
                  <span>Check Rates</span>
                </button>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 2: WELCOME / ABOUT SECTION */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#D4AF37]/15">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Visual Presentation */}
          <div className="relative">
            <div className="relative h-[420px] sm:h-[480px] rounded-2xl overflow-hidden border border-[#D4AF37]/30 shadow-2xl group">
              <img
                src={HOTEL_IMAGES.loungeCafe}
                alt="Ipoh Town By Serenity Luxury Lobby Lounge"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#120722] via-transparent to-transparent opacity-80" />
            </div>

            {/* Overlaid Highlight Badge */}
            <div className="absolute -bottom-6 -right-2 sm:right-6 p-5 rounded-2xl glass-purple-card border border-[#D4AF37]/40 shadow-2xl max-w-xs space-y-1">
              <div className="flex items-center gap-1 text-[#E5C158]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#E5C158]" />
                ))}
              </div>
              <p className="text-xs font-serif font-bold text-[#F8F5EE]">
                "An unforgettable retreat in Perak"
              </p>
              <span className="block text-[10px] text-[#EBE5DA]/70">157 Jalan Sultan Iskandar, Ipoh</span>
            </div>
          </div>

          {/* Narrative Content */}
          <div className="space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-semibold tracking-widest text-[#E5C158] uppercase">
                Welcome To Pure Comfort
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#F8F5EE]">
                Serenity Defined in the Heart of Historic Ipoh
              </h2>
            </div>

            <p className="text-sm text-[#EBE5DA]/80 leading-relaxed">
              Located at 157, Jalan Sultan Iskandar in Taman Jubilee, <strong>Ipoh Town By Serenity</strong> provides an intimate haven where old-world Ipoh grandeur harmonizes with state-of-the-art modern comforts.
            </p>

            <p className="text-sm text-[#EBE5DA]/80 leading-relaxed">
              Whether you are discovering Ipoh’s world-famous culinary scene, touring colonial heritage trails, or visiting for business, our boutique hotel offers plush soundproof rooms, personalized concierge hospitality, and effortless relaxation.
            </p>

            <div className="grid grid-cols-2 gap-4 py-2">
              <div className="p-3.5 rounded-xl bg-[#1A0B2E] border border-[#D4AF37]/20 flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-[#E5C158] shrink-0" />
                <div>
                  <h4 className="font-serif text-xs font-bold text-[#F8F5EE]">Prime Location</h4>
                  <span className="text-[11px] text-[#EBE5DA]/70">Central Taman Jubilee</span>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-[#1A0B2E] border border-[#D4AF37]/20 flex items-center gap-3">
                <Award className="w-5 h-5 text-[#E5C158] shrink-0" />
                <div>
                  <h4 className="font-serif text-xs font-bold text-[#F8F5EE]">5-Star Service</h4>
                  <span className="text-[11px] text-[#EBE5DA]/70">24/7 Front Desk</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => onNavigate('about')}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#230E3D] border border-[#D4AF37]/40 text-[#E5C158] hover:bg-[#2D124D] font-semibold text-xs tracking-wider uppercase transition-all duration-300 cursor-pointer"
            >
              <span>Learn More About Us</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </section>

      {/* SECTION 3: ROOMS & ACCOMMODATION SECTION */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#D4AF37]/15">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div className="space-y-2">
            <span className="text-xs font-semibold tracking-widest text-[#E5C158] uppercase">
              Curated Accommodations
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#F8F5EE]">
              Sanctuaries of Comfort & Elegance
            </h2>
          </div>

          <button
            onClick={() => onNavigate('rooms')}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#1A0B2E] border border-[#D4AF37]/30 text-[#E5C158] hover:bg-[#230E3D] text-xs font-semibold uppercase tracking-wider transition-colors shrink-0"
          >
            <span>View All Rooms</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Room Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ROOMS_DATA.slice(0, 3).map((room) => (
            <div
              key={room.id}
              className="glass-purple-card rounded-2xl overflow-hidden border border-[#D4AF37]/20 flex flex-col justify-between group transition-all duration-300 hover:-translate-y-1"
            >
              <div>
                {/* Image Container */}
                <div className="relative h-60 overflow-hidden">
                  <img
                    src={room.image}
                    alt={room.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A0B2E] via-transparent to-transparent opacity-90" />
                  <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-[#120722]/80 border border-[#D4AF37]/40 text-xs font-serif font-bold text-[#E5C158] backdrop-blur-sm">
                    RM {room.priceMYR} <span className="text-[10px] font-normal text-[#EBE5DA]/70">/ night</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-2 text-[11px] text-[#D4AF37]">
                    <span>{room.bedType}</span>
                    <span>•</span>
                    <span>{room.sizeSqFt} sq ft</span>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-[#F8F5EE] group-hover:text-[#E5C158] transition-colors">
                    {room.name}
                  </h3>

                  <p className="text-xs text-[#EBE5DA]/70 leading-relaxed line-clamp-2">
                    {room.description}
                  </p>
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="p-6 pt-0 flex items-center gap-3">
                <button
                  onClick={() => onOpenRoomDetail(room)}
                  className="flex-1 py-2.5 rounded-lg border border-[#D4AF37]/30 bg-[#120722]/60 text-xs font-semibold text-[#EBE5DA] hover:text-[#E5C158] transition-colors"
                >
                  Details
                </button>

                <button
                  onClick={() => onOpenBooking(room.id)}
                  className="flex-1 py-2.5 rounded-lg bg-gold-gradient text-[#120722] font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-md hover:opacity-90 transition-opacity cursor-pointer"
                >
                  <CalendarCheck className="w-3.5 h-3.5" />
                  <span>Reserve</span>
                </button>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* SECTION 4: HOTEL AMENITIES SECTION */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#D4AF37]/15">
        <div className="text-center space-y-3 mb-12">
          <span className="text-xs font-semibold tracking-widest text-[#E5C158] uppercase">
            Thoughtful Hospitality
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#F8F5EE]">
            Premium Hotel Amenities
          </h2>
          <p className="text-xs sm:text-sm text-[#EBE5DA]/70 max-w-xl mx-auto">
            Every feature at Ipoh Town By Serenity is curated to guarantee comfort, convenience, and effortless peace of mind.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {AMENITIES_DATA.map((amenity) => (
            <div
              key={amenity.id}
              className="glass-purple-card rounded-2xl overflow-hidden border border-[#D4AF37]/25 hover:border-[#D4AF37]/60 transition-all duration-300 flex flex-col group hover:-translate-y-1 shadow-lg"
            >
              {/* Image Header with Gradient Overlay */}
              <div className="relative h-44 overflow-hidden">
                <img
                  src={amenity.image}
                  alt={amenity.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A0B2E] via-[#1A0B2E]/40 to-transparent" />
                
                {/* Floating Icon Badge */}
                <div className="absolute top-3 left-3 w-10 h-10 rounded-xl bg-[#120722]/85 border border-[#D4AF37]/50 flex items-center justify-center backdrop-blur-md shadow-md">
                  {getAmenityIcon(amenity.iconName)}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 pt-3 space-y-2 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-base font-bold text-[#F8F5EE] group-hover:text-[#E5C158] transition-colors">
                    {amenity.title}
                  </h3>
                  <p className="text-xs text-[#EBE5DA]/75 leading-relaxed mt-1.5">
                    {amenity.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 5: WHY CHOOSE US / IPOH EXPERIENCE SECTION */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#D4AF37]/15">
        <div className="text-center space-y-3 mb-12">
          <span className="text-xs font-semibold tracking-widest text-[#E5C158] uppercase">
            The Serenity Advantage
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#F8F5EE]">
            Why Choose Ipoh Town By Serenity
          </h2>
          <p className="text-xs sm:text-sm text-[#EBE5DA]/70 max-w-2xl mx-auto">
            Discover why leisure and corporate guests consistently rate us as their preferred stay in Ipoh, Perak.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="glass-purple-card rounded-2xl overflow-hidden border border-[#D4AF37]/25 hover:border-[#D4AF37]/60 transition-all duration-300 flex flex-col group hover:-translate-y-1 shadow-xl">
            <div className="relative h-52 sm:h-56 overflow-hidden">
              <img
                src={HOTEL_IMAGES.concubineLane}
                alt="Unrivaled Central Location in Ipoh"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A0B2E] via-[#1A0B2E]/40 to-transparent" />
              
              <div className="absolute top-4 left-4 w-10 h-10 rounded-xl bg-[#120722]/85 border border-[#D4AF37]/50 flex items-center justify-center backdrop-blur-md shadow-lg">
                <span className="font-serif font-bold text-[#E5C158] text-sm">01</span>
              </div>
              <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-[#120722]/80 border border-[#D4AF37]/30 text-[11px] text-[#E5C158] font-medium backdrop-blur-sm">
                Taman Jubilee, Ipoh
              </div>
            </div>

            <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-serif text-xl font-bold text-[#F8F5EE] group-hover:text-[#E5C158] transition-colors">
                  Unrivaled Central Location
                </h3>
                <p className="text-xs sm:text-sm text-[#EBE5DA]/75 leading-relaxed mt-2">
                  Situated on Jalan Sultan Iskandar in Taman Jubilee, you are within short walking distance to Ipoh's iconic Concubine Lane, renowned white coffee cafes, and night markets.
                </p>
              </div>
            </div>
          </div>

          <div className="glass-purple-card rounded-2xl overflow-hidden border border-[#D4AF37]/25 hover:border-[#D4AF37]/60 transition-all duration-300 flex flex-col group hover:-translate-y-1 shadow-xl">
            <div className="relative h-52 sm:h-56 overflow-hidden">
              <img
                src={HOTEL_IMAGES.serenitySuite}
                alt="Plush & Tranquil Rooms"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A0B2E] via-[#1A0B2E]/40 to-transparent" />
              
              <div className="absolute top-4 left-4 w-10 h-10 rounded-xl bg-[#120722]/85 border border-[#D4AF37]/50 flex items-center justify-center backdrop-blur-md shadow-lg">
                <span className="font-serif font-bold text-[#E5C158] text-sm">02</span>
              </div>
              <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-[#120722]/80 border border-[#D4AF37]/30 text-[11px] text-[#E5C158] font-medium backdrop-blur-sm">
                Soundproof Luxury
              </div>
            </div>

            <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-serif text-xl font-bold text-[#F8F5EE] group-hover:text-[#E5C158] transition-colors">
                  Plush & Tranquil Rooms
                </h3>
                <p className="text-xs sm:text-sm text-[#EBE5DA]/75 leading-relaxed mt-2">
                  Designed with soundproofing, custom blackout curtains, therapeutic mattresses, and individual climate control for deep, uninterrupted sleep after a day of exploration.
                </p>
              </div>
            </div>
          </div>

          <div className="glass-purple-card rounded-2xl overflow-hidden border border-[#D4AF37]/25 hover:border-[#D4AF37]/60 transition-all duration-300 flex flex-col group hover:-translate-y-1 shadow-xl">
            <div className="relative h-52 sm:h-56 overflow-hidden">
              <img
                src={HOTEL_IMAGES.loungeCafe}
                alt="Warm Malaysian Hospitality"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A0B2E] via-[#1A0B2E]/40 to-transparent" />
              
              <div className="absolute top-4 left-4 w-10 h-10 rounded-xl bg-[#120722]/85 border border-[#D4AF37]/50 flex items-center justify-center backdrop-blur-md shadow-lg">
                <span className="font-serif font-bold text-[#E5C158] text-sm">03</span>
              </div>
              <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-[#120722]/80 border border-[#D4AF37]/30 text-[11px] text-[#E5C158] font-medium backdrop-blur-sm">
                24/7 Hospitality
              </div>
            </div>

            <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-serif text-xl font-bold text-[#F8F5EE] group-hover:text-[#E5C158] transition-colors">
                  Warm Malaysian Hospitality
                </h3>
                <p className="text-xs sm:text-sm text-[#EBE5DA]/75 leading-relaxed mt-2">
                  Our 24-hour concierge team offers personal local recommendations, seamless check-in, secure parking assistance, and responsive care throughout your stay.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Ipoh Attractions Showcase */}
        <div className="mt-16 p-8 rounded-3xl bg-[#1A0B2E] border border-[#D4AF37]/30 space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h3 className="font-serif text-2xl font-bold text-[#F8F5EE]">
                Explore Ipoh Heritage & Attractions Nearby
              </h3>
              <p className="text-xs text-[#EBE5DA]/70 mt-1">
                Step outside our doors directly into the heart of Perak’s heritage capital.
              </p>
            </div>
            <button
              onClick={() => onNavigate('about')}
              className="text-xs text-[#E5C158] font-semibold hover:underline flex items-center gap-1"
            >
              <span>Explore Ipoh Guide</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {IPOH_ATTRACTIONS.map((attraction) => (
              <div key={attraction.id} className="glass-purple-card rounded-xl overflow-hidden border border-[#D4AF37]/20 flex flex-col justify-between group">
                <div className="h-36 overflow-hidden relative">
                  <img src={attraction.image} alt={attraction.name} referrerPolicy="no-referrer" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#120722] via-transparent to-transparent opacity-80" />
                  <div className="absolute top-2 left-2 px-2.5 py-0.5 rounded bg-[#120722]/85 text-[10px] text-[#E5C158] font-mono border border-[#D4AF37]/30 backdrop-blur-sm">
                    {attraction.distance}
                  </div>
                </div>
                <div className="p-4 space-y-1.5 flex-1">
                  <span className="text-[10px] text-[#D4AF37] uppercase font-semibold">{attraction.category}</span>
                  <h4 className="font-serif text-sm font-bold text-[#F8F5EE] group-hover:text-[#E5C158] transition-colors">{attraction.name}</h4>
                  <p className="text-[11px] text-[#EBE5DA]/70 leading-relaxed line-clamp-2">{attraction.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: CONTACT / BOOKING CTA SECTION */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#D4AF37]/15">
        <div className="relative rounded-3xl overflow-hidden glass-purple-card border-2 border-[#D4AF37]/40 p-8 sm:p-12 text-center space-y-8 shadow-2xl">
          {/* Subtle Ambient Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="space-y-3 relative z-10">
            <span className="text-xs font-semibold tracking-widest text-[#E5C158] uppercase">
              Your Ipoh Stay Awaits
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#F8F5EE]">
              Experience Serenity Today
            </h2>
            <p className="text-xs sm:text-sm text-[#EBE5DA]/80 max-w-xl mx-auto leading-relaxed">
              Reserve your stay directly with us for guaranteed lowest rates, instant confirmation, and priority concierge service.
            </p>
          </div>

          {/* Contact Bar Highlights */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-xs text-[#EBE5DA] relative z-10 py-2">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-[#E5C158]" />
              <span className="font-mono">{HOTEL_INFO.phone}</span>
            </div>
            <span className="hidden sm:inline text-[#D4AF37]">•</span>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#E5C158]" />
              <span>{HOTEL_INFO.address}</span>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
            <button
              onClick={() => onOpenBooking()}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gold-gradient text-[#120722] font-bold text-xs sm:text-sm uppercase tracking-wider shadow-xl hover:shadow-[0_0_25px_rgba(212,175,55,0.4)] transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              <CalendarCheck className="w-4 h-4" />
              <span>Book Your Stay</span>
            </button>

            <button
              onClick={() => onNavigate('contact')}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#230E3D] border border-[#D4AF37]/40 text-[#E5C158] font-bold text-xs sm:text-sm uppercase tracking-wider hover:bg-[#2D124D] transition-colors cursor-pointer"
            >
              <span>Contact Us</span>
            </button>
          </div>

        </div>
      </section>

    </div>
  );
};
