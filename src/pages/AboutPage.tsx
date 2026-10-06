import React from 'react';
import { HOTEL_INFO, IPOH_ATTRACTIONS, HOTEL_IMAGES } from '../data/hotelData';
import { Sparkles, MapPin, Heart, ShieldCheck, Award, ArrowRight, Compass, Clock, Phone } from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: 'home' | 'rooms' | 'about' | 'contact') => void;
  onOpenBooking: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, onOpenBooking }) => {
  return (
    <div className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
      
      {/* Hero Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1A0B2E] border border-[#D4AF37]/30">
          <Sparkles className="w-3.5 h-3.5 text-[#E5C158]" />
          <span className="text-[11px] font-semibold text-[#E5C158] uppercase tracking-widest">
            Our Hospitality Story
          </span>
        </div>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#F8F5EE]">
          Welcome to Ipoh Town By Serenity
        </h1>
        <p className="text-xs sm:text-sm text-[#EBE5DA]/80 leading-relaxed font-light">
          An intimate luxury sanctuary created for travelers who seek peace, comfort, and authentic access to Perak’s vibrant cultural heritage.
        </p>
      </div>

      {/* Main Narrative Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        <div className="relative">
          <div className="relative h-[400px] sm:h-[460px] rounded-2xl overflow-hidden border border-[#D4AF37]/30 shadow-2xl">
            <img
              src={HOTEL_IMAGES.serenitySuite}
              alt="Ipoh Town By Serenity Hotel Interior"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#120722] via-transparent to-transparent opacity-80" />
          </div>

          <div className="absolute -bottom-6 -left-2 sm:left-6 p-5 rounded-2xl glass-purple-card border border-[#D4AF37]/40 shadow-2xl max-w-xs space-y-1">
            <span className="text-[10px] uppercase font-mono text-[#E5C158]">Heritage & Comfort</span>
            <h4 className="font-serif text-sm font-bold text-[#F8F5EE]">Located in Historic Taman Jubilee</h4>
            <p className="text-[11px] text-[#EBE5DA]/70">157, Jalan Sultan Iskandar, Ipoh</p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-semibold text-[#E5C158] uppercase tracking-wider">
              Our Vision & Philosophy
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl font-bold text-[#F8F5EE]">
              Where Quiet Luxury Meets Warm Malaysian Heart
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-[#EBE5DA]/80 leading-relaxed">
            Founded with a vision to redefine boutique hospitality in Perak, <strong>Ipoh Town By Serenity</strong> offers a peaceful sanctuary amidst the vibrant energy of Ipoh. We believe true hospitality is found in the details—from the plush feel of Egyptian cotton sheets to the quiet solitude of soundproofed rooms.
          </p>

          <p className="text-xs sm:text-sm text-[#EBE5DA]/80 leading-relaxed">
            Our prime address at 157, Jalan Sultan Iskandar places our guests within steps of Ipoh Old Town’s world-famous heritage alleys, famous coffee shops, and limestone hills, while preserving an oasis of calm to return to at the end of every day.
          </p>

          <div className="grid grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-[#1A0B2E] border border-[#D4AF37]/20 space-y-1">
              <Heart className="w-5 h-5 text-[#E5C158]" />
              <h4 className="font-serif text-sm font-bold text-[#F8F5EE]">Personalized Care</h4>
              <p className="text-[11px] text-[#EBE5DA]/60">Dedicated round-the-clock host team</p>
            </div>

            <div className="p-4 rounded-xl bg-[#1A0B2E] border border-[#D4AF37]/20 space-y-1">
              <Compass className="w-5 h-5 text-[#E5C158]" />
              <h4 className="font-serif text-sm font-bold text-[#F8F5EE]">Heritage Access</h4>
              <p className="text-[11px] text-[#EBE5DA]/60">Walkable to Concubine Lane</p>
            </div>
          </div>
        </div>

      </div>

      {/* Why Stay With Us Cards */}
      <div className="space-y-8">
        <div className="text-center space-y-2">
          <span className="text-xs font-semibold text-[#E5C158] uppercase tracking-wider">
            Guest Experience
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#F8F5EE]">
            Why Travelers Choose Us
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="glass-purple-card p-6 rounded-2xl border border-[#D4AF37]/20 space-y-3">
            <ShieldCheck className="w-8 h-8 text-[#E5C158]" />
            <h3 className="font-serif text-lg font-bold text-[#F8F5EE]">Pristine Cleanliness & Safety</h3>
            <p className="text-xs text-[#EBE5DA]/70 leading-relaxed">
              We adhere to strict hygiene protocols, contactless keyless entry options, and continuous air purification across all guest rooms and public spaces.
            </p>
          </div>

          <div className="glass-purple-card p-6 rounded-2xl border border-[#D4AF37]/20 space-y-3">
            <Award className="w-8 h-8 text-[#E5C158]" />
            <h3 className="font-serif text-lg font-bold text-[#F8F5EE]">Tailored Guest Services</h3>
            <p className="text-xs text-[#EBE5DA]/70 leading-relaxed">
              From arranging private airport transfers to curate custom food tour itineraries across Ipoh, our staff takes pride in exceeding your expectations.
            </p>
          </div>

          <div className="glass-purple-card p-6 rounded-2xl border border-[#D4AF37]/20 space-y-3">
            <MapPin className="w-8 h-8 text-[#E5C158]" />
            <h3 className="font-serif text-lg font-bold text-[#F8F5EE]">Perfect Urban Location</h3>
            <p className="text-xs text-[#EBE5DA]/70 leading-relaxed">
              Tucked away in quiet Taman Jubilee while keeping you just minutes away from Ipoh Railway Station, night markets, and limestone cave sanctuaries.
            </p>
          </div>
        </div>
      </div>

      {/* Explore Ipoh Local Guide */}
      <div className="p-8 sm:p-12 rounded-3xl bg-[#1A0B2E] border border-[#D4AF37]/30 space-y-8">
        <div className="text-center space-y-2">
          <span className="text-xs font-semibold text-[#E5C158] uppercase tracking-wider">
            Local Heritage Guide
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl font-bold text-[#F8F5EE]">
            Explore Ipoh, Perak
          </h2>
          <p className="text-xs text-[#EBE5DA]/70 max-w-lg mx-auto">
            Discover top landmarks and world-famous food spots near Ipoh Town By Serenity.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {IPOH_ATTRACTIONS.map((attraction) => (
            <div key={attraction.id} className="glass-purple-card rounded-xl overflow-hidden border border-[#D4AF37]/20 flex flex-col justify-between">
              <div className="h-40 overflow-hidden relative">
                <img src={attraction.image} alt={attraction.name} referrerPolicy="no-referrer" className="w-full h-full object-cover" />
                <div className="absolute top-2 left-2 px-2.5 py-0.5 rounded bg-[#120722]/80 text-[10px] text-[#E5C158] font-mono border border-[#D4AF37]/30">
                  {attraction.distance}
                </div>
              </div>
              <div className="p-4 space-y-1.5">
                <span className="text-[10px] text-[#D4AF37] uppercase font-semibold">{attraction.category}</span>
                <h4 className="font-serif text-sm font-bold text-[#F8F5EE]">{attraction.name}</h4>
                <p className="text-[11px] text-[#EBE5DA]/70 leading-relaxed">{attraction.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="text-center space-y-6 pt-4">
        <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#F8F5EE]">
          Ready to Experience Serenity in Ipoh?
        </h3>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onOpenBooking}
            className="px-8 py-3.5 rounded-xl bg-gold-gradient text-[#120722] font-bold text-xs uppercase tracking-wider shadow-lg hover:opacity-90"
          >
            Book Your Stay Now
          </button>
          <button
            onClick={() => onNavigate('contact')}
            className="px-8 py-3.5 rounded-xl bg-[#230E3D] border border-[#D4AF37]/40 text-[#E5C158] font-bold text-xs uppercase hover:bg-[#2D124D]"
          >
            Get In Touch
          </button>
        </div>
      </div>

    </div>
  );
};
