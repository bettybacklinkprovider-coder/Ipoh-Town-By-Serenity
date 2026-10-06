import React, { useState, useEffect } from 'react';
import { HOTEL_INFO } from '../data/hotelData';
import { Menu, X, Phone, CalendarCheck, Sparkles } from 'lucide-react';

interface HeaderProps {
  currentPage: 'home' | 'rooms' | 'about' | 'contact';
  onNavigate: (page: 'home' | 'rooms' | 'about' | 'contact') => void;
  onOpenBooking: (roomId?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentPage,
  onNavigate,
  onOpenBooking
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { id: 'home' | 'rooms' | 'about' | 'contact'; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'rooms', label: 'Rooms / Accommodation' },
    { id: 'about', label: 'About Us' },
    { id: 'contact', label: 'Contact Us' }
  ];

  const handleNavClick = (page: 'home' | 'rooms' | 'about' | 'contact') => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'glass-purple-nav py-3 shadow-xl' 
        : 'bg-[#120722]/90 backdrop-blur-md py-4 border-b border-[#D4AF37]/20'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Zone 1: Single Brand Wordmark */}
          <button 
            onClick={() => handleNavClick('home')}
            className="group flex items-center gap-3 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
          >
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#D4AF37] via-[#AA820A] to-[#2D124D] p-[1px] shadow-md flex items-center justify-center">
              <div className="w-full h-full rounded-full bg-[#1A0B2E] flex items-center justify-center group-hover:bg-[#230E3D] transition-colors">
                <Sparkles className="w-5 h-5 text-[#E5C158]" />
              </div>
            </div>
            <div>
              <span className="block font-serif text-lg sm:text-xl font-bold tracking-wider text-[#F8F5EE] group-hover:text-[#E5C158] transition-colors">
                IPOH TOWN
              </span>
              <span className="block text-[10px] tracking-[0.25em] text-[#D4AF37] uppercase font-medium -mt-1">
                BY SERENITY
              </span>
            </div>
          </button>

          {/* Zone 2: 4 Clean Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`relative py-1 text-sm font-medium transition-colors whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] ${
                  currentPage === item.id
                    ? 'text-[#E5C158] font-semibold'
                    : 'text-[#EBE5DA]/80 hover:text-[#F8F5EE]'
                }`}
              >
                {item.label}
                {currentPage === item.id && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#D4AF37] to-[#E5C158] rounded-full" />
                )}
              </button>
            ))}
          </nav>

          {/* Zone 3: Primary Action & Quick Contact */}
          <div className="hidden sm:flex items-center gap-4">
            <a 
              href={`tel:${HOTEL_INFO.phoneClean}`}
              className="hidden xl:flex items-center gap-2 text-xs text-[#EBE5DA]/70 hover:text-[#E5C158] transition-colors py-2 px-3 rounded-lg border border-[#D4AF37]/20 bg-[#1A0B2E]/50"
            >
              <Phone className="w-3.5 h-3.5 text-[#E5C158]" />
              <span className="font-mono">{HOTEL_INFO.phone}</span>
            </a>

            <button
              onClick={() => onOpenBooking()}
              className="relative group overflow-hidden px-5 py-2.5 rounded-lg bg-gold-gradient text-[#120722] text-xs font-bold tracking-wider uppercase transition-all duration-300 hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] active:scale-95 flex items-center gap-2 whitespace-nowrap cursor-pointer"
            >
              <CalendarCheck className="w-4 h-4" />
              <span>Book Now</span>
            </button>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => onOpenBooking()}
              className="px-3 py-1.5 rounded-md bg-gold-gradient text-[#120722] text-xs font-bold uppercase transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <span>Book</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#F8F5EE] hover:text-[#E5C158] hover:bg-[#230E3D] border border-[#D4AF37]/20 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden glass-purple-card border-t border-[#D4AF37]/30 mt-3 px-4 pt-4 pb-6 space-y-4 animate-in fade-in duration-200">
          <div className="flex flex-col space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-left px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                  currentPage === item.id
                    ? 'bg-[#2D124D] text-[#E5C158] border-l-4 border-[#D4AF37]'
                    : 'text-[#EBE5DA] hover:bg-[#1A0B2E]'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="pt-4 border-t border-[#D4AF37]/20 flex flex-col gap-3">
            <a 
              href={`tel:${HOTEL_INFO.phoneClean}`}
              className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-[#1A0B2E] border border-[#D4AF37]/30 text-xs font-medium text-[#E5C158]"
            >
              <Phone className="w-4 h-4" />
              <span>Call Us: {HOTEL_INFO.phone}</span>
            </a>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3 rounded-lg bg-gold-gradient text-[#120722] font-bold text-sm tracking-wider uppercase text-center flex items-center justify-center gap-2 shadow-lg"
            >
              <CalendarCheck className="w-4 h-4" />
              <span>Book Your Stay</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
