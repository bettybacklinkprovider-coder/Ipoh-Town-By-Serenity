import React, { useState } from 'react';
import { Room } from '../data/hotelData';
import { X, Check, Users, Bed, Maximize2, Eye, CalendarCheck, ShieldCheck } from 'lucide-react';

interface RoomDetailModalProps {
  room: Room | null;
  onClose: () => void;
  onBookRoom: (roomId: string) => void;
}

export const RoomDetailModal: React.FC<RoomDetailModalProps> = ({
  room,
  onClose,
  onBookRoom
}) => {
  if (!room) return null;

  const [activeImage, setActiveImage] = useState<string>(room.image);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl bg-[#1A0B2E] border border-[#D4AF37]/40 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#D4AF37]/20 bg-[#120722]">
          <div>
            <span className="text-[10px] uppercase font-mono tracking-widest text-[#D4AF37]">
              Accommodation Details
            </span>
            <h3 className="font-serif text-xl font-bold text-[#F8F5EE]">
              {room.name}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#EBE5DA]/70 hover:text-[#E5C158] hover:bg-[#2D124D] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1">
          
          {/* Main Gallery View */}
          <div className="space-y-3">
            <div className="relative h-64 sm:h-80 rounded-xl overflow-hidden border border-[#D4AF37]/30">
              <img
                src={activeImage}
                alt={room.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-all duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#120722]/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-[#120722]/80 border border-[#D4AF37]/40 text-xs font-semibold text-[#E5C158]">
                  {room.tagline}
                </span>
                <span className="px-3 py-1 rounded-full bg-gold-gradient text-[#120722] font-serif font-bold text-sm shadow-md">
                  RM {room.priceMYR} / night
                </span>
              </div>
            </div>

            {/* Gallery Thumbnails */}
            {room.gallery && room.gallery.length > 1 && (
              <div className="flex items-center gap-2 overflow-x-auto pb-1">
                {room.gallery.map((imgUrl, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImage(imgUrl)}
                    className={`w-16 h-12 rounded-lg overflow-hidden border shrink-0 transition-all ${
                      activeImage === imgUrl 
                        ? 'border-[#D4AF37] ring-2 ring-[#D4AF37]' 
                        : 'border-[#D4AF37]/20 opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={imgUrl} alt={`Gallery ${idx}`} referrerPolicy="no-referrer" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-xl bg-[#230E3D]/60 border border-[#D4AF37]/20 text-xs">
            <div className="flex items-center gap-2.5">
              <Maximize2 className="w-4 h-4 text-[#D4AF37]" />
              <div>
                <span className="block text-[10px] text-[#EBE5DA]/60">Room Size</span>
                <span className="font-semibold text-[#F8F5EE]">{room.sizeSqFt} sq ft</span>
              </div>
            </div>
            <div className="flex items-center gap-2.5">
              <Users className="w-4 h-4 text-[#D4AF37]" />
              <div>
                <span className="block text-[10px] text-[#EBE5DA]/60">Capacity</span>
                <span className="font-semibold text-[#F8F5EE]">Up to {room.maxGuests} Guests</span>
              </div>
            </div>
            <div className="flex items-center gap-2.5">
              <Bed className="w-4 h-4 text-[#D4AF37]" />
              <div>
                <span className="block text-[10px] text-[#EBE5DA]/60">Bed Configuration</span>
                <span className="font-semibold text-[#F8F5EE]">{room.bedType}</span>
              </div>
            </div>
            <div className="flex items-center gap-2.5">
              <Eye className="w-4 h-4 text-[#D4AF37]" />
              <div>
                <span className="block text-[10px] text-[#EBE5DA]/60">View</span>
                <span className="font-semibold text-[#F8F5EE]">{room.view}</span>
              </div>
            </div>
          </div>

          {/* Detailed Narrative */}
          <div className="space-y-2">
            <h4 className="font-serif text-sm font-bold text-[#E5C158] uppercase tracking-wider">
              About This Room
            </h4>
            <p className="text-xs text-[#EBE5DA]/80 leading-relaxed">
              {room.longDescription}
            </p>
          </div>

          {/* Key Room Features */}
          <div className="space-y-2">
            <h4 className="font-serif text-sm font-bold text-[#E5C158] uppercase tracking-wider">
              Highlights & Amenities
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {room.amenities.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-[#EBE5DA]/80">
                  <div className="w-4 h-4 rounded-full bg-[#D4AF37]/20 flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 text-[#E5C158]" />
                  </div>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Hotel Direct Booking Assurance */}
          <div className="p-3.5 rounded-xl bg-[#120722] border border-[#D4AF37]/20 flex items-center gap-3 text-xs text-[#EBE5DA]/70">
            <ShieldCheck className="w-5 h-5 text-[#E5C158] shrink-0" />
            <span>Guaranteed lowest direct rate with complimentary priority check-in and flexible policies.</span>
          </div>

        </div>

        {/* Footer CTA */}
        <div className="px-6 py-4 border-t border-[#D4AF37]/20 bg-[#120722] flex items-center justify-between">
          <div>
            <span className="text-[10px] text-[#EBE5DA]/60 block uppercase">Nightly Rate</span>
            <span className="font-serif text-xl font-bold text-[#E5C158]">RM {room.priceMYR} <span className="text-xs font-normal text-[#EBE5DA]/60">/ night</span></span>
          </div>

          <button
            onClick={() => {
              onClose();
              onBookRoom(room.id);
            }}
            className="px-6 py-3 rounded-lg bg-gold-gradient text-[#120722] font-bold text-xs uppercase tracking-wider flex items-center gap-2 cursor-pointer shadow-lg hover:opacity-90 transition-opacity"
          >
            <CalendarCheck className="w-4 h-4" />
            <span>Book This Room</span>
          </button>
        </div>

      </div>
    </div>
  );
};
