import React, { useState } from 'react';
import { ROOMS_DATA, Room } from '../data/hotelData';
import { CalendarCheck, Users, Bed, Maximize2, ShieldCheck, Sparkles, Filter, Info } from 'lucide-react';

interface RoomsPageProps {
  onOpenBooking: (roomId?: string) => void;
  onOpenRoomDetail: (room: Room) => void;
}

export const RoomsPage: React.FC<RoomsPageProps> = ({
  onOpenBooking,
  onOpenRoomDetail
}) => {
  const [filter, setFilter] = useState<'all' | 'suite' | 'premier' | 'deluxe' | 'family'>('all');

  const filteredRooms = filter === 'all' 
    ? ROOMS_DATA 
    : ROOMS_DATA.filter(r => r.category === filter);

  return (
    <div className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
      
      {/* Page Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1A0B2E] border border-[#D4AF37]/30">
          <Sparkles className="w-3.5 h-3.5 text-[#E5C158]" />
          <span className="text-[11px] font-semibold text-[#E5C158] uppercase tracking-widest">
            Ipoh Town By Serenity
          </span>
        </div>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#F8F5EE]">
          Luxury Accommodation & Suites
        </h1>
        <p className="text-xs sm:text-sm text-[#EBE5DA]/80 leading-relaxed">
          Each room is an oasis of silence, equipped with high-thread-count linens, whisper-quiet air conditioning, rain showers, and bespoke gold accents.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-xl bg-[#1A0B2E] border border-[#D4AF37]/20 max-w-xl mx-auto">
        {[
          { id: 'all', label: 'All Rooms' },
          { id: 'suite', label: 'Suites' },
          { id: 'premier', label: 'Premier' },
          { id: 'deluxe', label: 'Deluxe' },
          { id: 'family', label: 'Family' },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setFilter(tab.id as any)}
            className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
              filter === tab.id
                ? 'bg-gold-gradient text-[#120722] shadow-md'
                : 'text-[#EBE5DA]/70 hover:text-[#E5C158]'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Room Showcase Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredRooms.map((room) => (
          <div
            key={room.id}
            className="glass-purple-card rounded-2xl overflow-hidden border border-[#D4AF37]/25 flex flex-col justify-between group hover:border-[#D4AF37]/60 transition-all duration-300"
          >
            <div>
              {/* Large Image with Tag */}
              <div className="relative h-64 sm:h-72 overflow-hidden">
                <img
                  src={room.image}
                  alt={room.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A0B2E] via-transparent to-transparent opacity-80" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-[#120722]/80 border border-[#D4AF37]/40 text-xs font-semibold text-[#E5C158] backdrop-blur-md">
                    {room.tagline}
                  </span>
                </div>
                <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-gold-gradient text-[#120722] font-serif font-bold text-sm shadow-lg">
                  RM {room.priceMYR} <span className="text-[10px] font-normal text-[#120722]/80">/ night</span>
                </div>
              </div>

              {/* Room Body Specs */}
              <div className="p-6 space-y-4">
                <h3 className="font-serif text-2xl font-bold text-[#F8F5EE] group-hover:text-[#E5C158] transition-colors">
                  {room.name}
                </h3>

                <p className="text-xs text-[#EBE5DA]/80 leading-relaxed">
                  {room.description}
                </p>

                {/* Specs Chips */}
                <div className="grid grid-cols-3 gap-2 py-2 border-y border-[#D4AF37]/15 text-xs text-[#EBE5DA]/80">
                  <div className="flex items-center gap-1.5">
                    <Bed className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span className="truncate">{room.bedType}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Maximize2 className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span>{room.sizeSqFt} sq ft</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span>Up to {room.maxGuests} Guests</span>
                  </div>
                </div>

                {/* Amenities Badges */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {room.amenities.slice(0, 5).map((amenity, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-md bg-[#230E3D] border border-[#D4AF37]/20 text-[10px] text-[#E5C158]"
                    >
                      {amenity}
                    </span>
                  ))}
                  {room.amenities.length > 5 && (
                    <span className="px-2 py-1 rounded-md bg-[#230E3D] text-[10px] text-[#EBE5DA]/50">
                      +{room.amenities.length - 5} more
                    </span>
                  )}
                </div>

              </div>
            </div>

            {/* Actions */}
            <div className="p-6 pt-0 flex items-center gap-3">
              <button
                onClick={() => onOpenRoomDetail(room)}
                className="flex-1 py-3 rounded-lg border border-[#D4AF37]/30 bg-[#120722]/80 text-xs font-semibold text-[#EBE5DA] hover:text-[#E5C158] hover:border-[#D4AF37] transition-all flex items-center justify-center gap-1.5"
              >
                <Info className="w-3.5 h-3.5" />
                <span>Full Details</span>
              </button>

              <button
                onClick={() => onOpenBooking(room.id)}
                className="flex-1 py-3 rounded-lg bg-gold-gradient text-[#120722] font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-md hover:opacity-90 transition-opacity cursor-pointer"
              >
                <CalendarCheck className="w-4 h-4" />
                <span>Book Room</span>
              </button>
            </div>

          </div>
        ))}
      </div>

      {/* Direct Guarantee Banner */}
      <div className="p-8 rounded-2xl bg-[#1A0B2E] border border-[#D4AF37]/30 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <ShieldCheck className="w-10 h-10 text-[#E5C158] shrink-0" />
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-serif text-lg font-bold text-[#F8F5EE]">
              Book Direct Guarantee
            </h4>
            <p className="text-xs text-[#EBE5DA]/70">
              Guaranteed lowest rates with zero hidden booking fees, flexible reservation policies, and priority room assignment.
            </p>
          </div>
        </div>

        <button
          onClick={() => onOpenBooking()}
          className="px-6 py-3 rounded-lg bg-gold-gradient text-[#120722] font-bold text-xs uppercase tracking-wider whitespace-nowrap cursor-pointer hover:opacity-95"
        >
          Reserve Online
        </button>
      </div>

    </div>
  );
};
