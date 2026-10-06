import React from 'react';
import { HOTEL_INFO } from '../data/hotelData';
import { Phone, MapPin, Mail, Sparkles, MessageCircle, ArrowUpRight, ShieldCheck, Clock } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: 'home' | 'rooms' | 'about' | 'contact') => void;
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenBooking }) => {
  return (
    <footer className="bg-[#0D041A] text-[#EBE5DA] border-t border-[#D4AF37]/30 pt-16 pb-8 relative overflow-hidden">
      {/* Background ambient gold glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-[#D4AF37]/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-[#D4AF37]/20">
          
          {/* Col 1: Brand & Identity */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gold-gradient p-[1px] flex items-center justify-center">
                <div className="w-full h-full rounded-full bg-[#1A0B2E] flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-[#E5C158]" />
                </div>
              </div>
              <div>
                <span className="block font-serif text-xl font-bold tracking-wider text-[#F8F5EE]">
                  IPOH TOWN
                </span>
                <span className="block text-[10px] tracking-[0.25em] text-[#D4AF37] uppercase font-medium -mt-1">
                  BY SERENITY
                </span>
              </div>
            </div>

            <p className="text-xs text-[#EBE5DA]/70 leading-relaxed">
              Experience the finest blend of modern luxury and serene Malaysian hospitality in the heart of historic Ipoh, Perak. Your refined sanctuary awaits.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a 
                href={`https://wa.me/${HOTEL_INFO.phoneClean}`}
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#25D366]/20 border border-[#25D366]/40 text-[#25D366] text-xs font-semibold hover:bg-[#25D366]/30 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Us</span>
              </a>

              <a
                href={`tel:${HOTEL_INFO.phoneClean}`}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#2D124D] border border-[#D4AF37]/30 text-[#E5C158] text-xs font-semibold hover:bg-[#3D1968] transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Direct Call</span>
              </a>
            </div>
          </div>

          {/* Col 2: Quick Navigation */}
          <div className="space-y-4">
            <h4 className="font-serif text-sm font-semibold tracking-wider text-[#E5C158] uppercase">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button 
                  onClick={() => { onNavigate('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="text-[#EBE5DA]/80 hover:text-[#E5C158] transition-colors flex items-center gap-1.5"
                >
                  <span>Home</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { onNavigate('rooms'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="text-[#EBE5DA]/80 hover:text-[#E5C158] transition-colors flex items-center gap-1.5"
                >
                  <span>Rooms & Accommodation</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { onNavigate('about'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="text-[#EBE5DA]/80 hover:text-[#E5C158] transition-colors flex items-center gap-1.5"
                >
                  <span>About Us</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { onNavigate('contact'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="text-[#EBE5DA]/80 hover:text-[#E5C158] transition-colors flex items-center gap-1.5"
                >
                  <span>Contact & Map</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={onOpenBooking}
                  className="text-[#E5C158] hover:underline font-medium flex items-center gap-1.5"
                >
                  <span>Online Room Reservation</span>
                  <ArrowUpRight className="w-3 h-3" />
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact & Location */}
          <div className="space-y-4">
            <h4 className="font-serif text-sm font-semibold tracking-wider text-[#E5C158] uppercase">
              Hotel Information
            </h4>
            <ul className="space-y-3 text-xs text-[#EBE5DA]/80">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <span>{HOTEL_INFO.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <a href={`tel:${HOTEL_INFO.phoneClean}`} className="hover:text-[#E5C158] font-mono">
                  {HOTEL_INFO.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <a href={`mailto:${HOTEL_INFO.email}`} className="hover:text-[#E5C158]">
                  {HOTEL_INFO.email}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>Check-in: 3:00 PM | Check-out: 12:00 PM</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Trust & Guarantee */}
          <div className="space-y-4">
            <h4 className="font-serif text-sm font-semibold tracking-wider text-[#E5C158] uppercase">
              Direct Booking Benefits
            </h4>
            <div className="p-4 rounded-xl bg-[#1A0B2E] border border-[#D4AF37]/20 space-y-3 text-xs">
              <div className="flex items-center gap-2 text-[#E5C158] font-medium">
                <ShieldCheck className="w-4 h-4" />
                <span>Best Rate Guarantee</span>
              </div>
              <p className="text-[#EBE5DA]/70 leading-relaxed text-[11px]">
                Book directly through our website or phone to enjoy exclusive seasonal rates, complimentary flexible cancellation, and priority room upgrades.
              </p>
              <button
                onClick={onOpenBooking}
                className="w-full py-2 rounded bg-gold-gradient text-[#120722] font-bold text-[11px] uppercase tracking-wider text-center cursor-pointer hover:opacity-90 transition-opacity"
              >
                Reserve Now
              </button>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#EBE5DA]/50 gap-4">
          <p>© {new Date().getFullYear()} {HOTEL_INFO.name}. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>157, Jalan Sultan Iskandar, Ipoh, Perak</span>
            <span>•</span>
            <span>Currency: Malaysian Ringgit (MYR)</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
