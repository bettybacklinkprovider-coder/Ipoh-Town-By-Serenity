import React, { useState } from 'react';
import { ROOMS_DATA, HOTEL_INFO, Room } from '../data/hotelData';
import { X, Calendar, Users, CheckCircle2, ChevronRight, Phone, MessageCircle, ArrowLeft, Printer, ShieldCheck } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preSelectedRoomId?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  preSelectedRoomId
}) => {
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);

  // Form State
  const [checkIn, setCheckIn] = useState<string>(() => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  });
  const [checkOut, setCheckOut] = useState<string>(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 2);
    return tomorrow.toISOString().split('T')[0];
  });
  const [guests, setGuests] = useState<number>(2);
  const [selectedRoomId, setSelectedRoomId] = useState<string>(
    preSelectedRoomId || ROOMS_DATA[0].id
  );

  // Guest Details
  const [fullName, setFullName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [specialRequests, setSpecialRequests] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  // Reservation Result
  const [reservationCode, setReservationCode] = useState<string>('');

  if (!isOpen) return null;

  const selectedRoom: Room = ROOMS_DATA.find(r => r.id === selectedRoomId) || ROOMS_DATA[0];

  // Calculate Nights
  const startDate = new Date(checkIn);
  const endDate = new Date(checkOut);
  const nights = Math.max(1, Math.ceil((endDate.getTime() - startDate.getTime()) / (1000 * 3600 * 24)));

  const subtotal = selectedRoom.priceMYR * nights;
  const sstTax = Math.round(subtotal * 0.06);
  const tourismTax = 10 * nights; // Standard MYR Tourism tax per room per night
  const totalPriceMYR = subtotal + sstTax + tourismTax;

  const handleStep3Submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !email || !phone) return;

    setIsSubmitting(true);
    setTimeout(() => {
      const randomCode = 'ITBS-' + Math.floor(100000 + Math.random() * 900000);
      setReservationCode(randomCode);
      setIsSubmitting(false);
      setStep(4);
    }, 800);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-[#1A0B2E] border border-[#D4AF37]/40 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#D4AF37]/20 bg-[#120722]">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-[#D4AF37] animate-pulse" />
            <h3 className="font-serif text-lg font-bold text-[#F8F5EE]">
              {step === 4 ? 'Reservation Confirmed' : 'Room Reservation Engine'}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#EBE5DA]/70 hover:text-[#E5C158] hover:bg-[#2D124D] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Step Indicator */}
        {step < 4 && (
          <div className="px-6 py-3 bg-[#120722]/60 border-b border-[#D4AF37]/10 flex items-center justify-between text-xs">
            <div className={`flex items-center gap-1.5 ${step >= 1 ? 'text-[#E5C158] font-semibold' : 'text-[#EBE5DA]/40'}`}>
              <span className="w-5 h-5 rounded-full bg-[#D4AF37]/20 flex items-center justify-center text-[10px]">1</span>
              <span>Dates & Guests</span>
            </div>
            <ChevronRight className="w-3.5 h-3.5 text-[#D4AF37]/40" />
            <div className={`flex items-center gap-1.5 ${step >= 2 ? 'text-[#E5C158] font-semibold' : 'text-[#EBE5DA]/40'}`}>
              <span className="w-5 h-5 rounded-full bg-[#D4AF37]/20 flex items-center justify-center text-[10px]">2</span>
              <span>Room Choice</span>
            </div>
            <ChevronRight className="w-3.5 h-3.5 text-[#D4AF37]/40" />
            <div className={`flex items-center gap-1.5 ${step >= 3 ? 'text-[#E5C158] font-semibold' : 'text-[#EBE5DA]/40'}`}>
              <span className="w-5 h-5 rounded-full bg-[#D4AF37]/20 flex items-center justify-center text-[10px]">3</span>
              <span>Guest Details</span>
            </div>
          </div>
        )}

        {/* Body Content */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1">

          {/* STEP 1: Dates & Guests */}
          {step === 1 && (
            <div className="space-y-6">
              <div className="text-center space-y-1">
                <h4 className="font-serif text-xl font-bold text-[#F8F5EE]">Select Your Stay Dates</h4>
                <p className="text-xs text-[#EBE5DA]/70">Choose check-in and check-out dates at Ipoh Town By Serenity</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="block text-xs font-semibold text-[#E5C158]">Check-in Date</label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#D4AF37]" />
                    <input
                      type="date"
                      value={checkIn}
                      min={new Date().toISOString().split('T')[0]}
                      onChange={(e) => setCheckIn(e.target.value)}
                      className="w-full bg-[#230E3D] border border-[#D4AF37]/30 rounded-lg pl-10 pr-3 py-2.5 text-xs text-[#F8F5EE] focus:outline-none focus:border-[#D4AF37]"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-semibold text-[#E5C158]">Check-out Date</label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#D4AF37]" />
                    <input
                      type="date"
                      value={checkOut}
                      min={checkIn}
                      onChange={(e) => setCheckOut(e.target.value)}
                      className="w-full bg-[#230E3D] border border-[#D4AF37]/30 rounded-lg pl-10 pr-3 py-2.5 text-xs text-[#F8F5EE] focus:outline-none focus:border-[#D4AF37]"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="block text-xs font-semibold text-[#E5C158]">Number of Guests</label>
                <div className="relative">
                  <Users className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#D4AF37]" />
                  <select
                    value={guests}
                    onChange={(e) => setGuests(Number(e.target.value))}
                    className="w-full bg-[#230E3D] border border-[#D4AF37]/30 rounded-lg pl-10 pr-3 py-2.5 text-xs text-[#F8F5EE] focus:outline-none focus:border-[#D4AF37]"
                  >
                    <option value={1}>1 Guest (Single Occupancy)</option>
                    <option value={2}>2 Guests (Double Occupancy)</option>
                    <option value={3}>3 Guests (Family / Triple)</option>
                    <option value={4}>4 Guests (Family Suite)</option>
                  </select>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#230E3D]/50 border border-[#D4AF37]/20 flex items-center justify-between text-xs">
                <div>
                  <span className="text-[#EBE5DA]/70">Duration of Stay:</span>
                  <span className="ml-2 font-bold text-[#E5C158]">{nights} Night{nights > 1 ? 's' : ''}</span>
                </div>
                <div className="text-right">
                  <span className="text-[#EBE5DA]/70">Location:</span>
                  <span className="ml-2 text-[#F8F5EE] font-medium">Ipoh, Perak</span>
                </div>
              </div>

              <button
                onClick={() => setStep(2)}
                className="w-full py-3 rounded-lg bg-gold-gradient text-[#120722] font-bold text-sm uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-lg hover:opacity-95"
              >
                <span>Select Accommodation</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          )}

          {/* STEP 2: Choose Room */}
          {step === 2 && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-serif text-lg font-bold text-[#F8F5EE]">Select Accommodation</h4>
                  <p className="text-xs text-[#EBE5DA]/70">All rates quoted in Malaysian Ringgit (MYR)</p>
                </div>
                <button
                  onClick={() => setStep(1)}
                  className="text-xs text-[#E5C158] hover:underline flex items-center gap-1"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Change Dates</span>
                </button>
              </div>

              <div className="space-y-3 max-h-[340px] overflow-y-auto pr-1">
                {ROOMS_DATA.map((room) => {
                  const isSelected = room.id === selectedRoomId;
                  return (
                    <div
                      key={room.id}
                      onClick={() => setSelectedRoomId(room.id)}
                      className={`p-3.5 rounded-xl border transition-all cursor-pointer flex gap-4 ${
                        isSelected 
                          ? 'bg-[#230E3D] border-[#D4AF37] ring-1 ring-[#D4AF37]' 
                          : 'bg-[#120722] border-[#D4AF37]/20 hover:border-[#D4AF37]/50'
                      }`}
                    >
                      <img
                        src={room.image}
                        alt={room.name}
                        className="w-24 h-24 object-cover rounded-lg shrink-0"
                      />
                      <div className="flex-1 flex flex-col justify-between min-w-0">
                        <div>
                          <div className="flex items-center justify-between gap-2">
                            <h5 className="font-serif text-sm font-bold text-[#F8F5EE] truncate">{room.name}</h5>
                            <span className="font-serif text-sm font-bold text-[#E5C158] whitespace-nowrap">
                              RM {room.priceMYR} <span className="text-[10px] font-normal text-[#EBE5DA]/60">/ night</span>
                            </span>
                          </div>
                          <p className="text-[11px] text-[#EBE5DA]/70 line-clamp-1 mt-0.5">{room.tagline}</p>
                        </div>

                        <div className="flex items-center gap-3 text-[10px] text-[#EBE5DA]/60 mt-2">
                          <span>{room.bedType}</span>
                          <span>•</span>
                          <span>{room.sizeSqFt} sq ft</span>
                          <span>•</span>
                          <span>Max {room.maxGuests} Guests</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Price Summary Box */}
              <div className="p-4 rounded-xl bg-[#230E3D] border border-[#D4AF37]/30 space-y-2 text-xs">
                <div className="flex justify-between text-[#EBE5DA]/70">
                  <span>Room Charge ({selectedRoom.name} x {nights} night{nights > 1 ? 's' : ''})</span>
                  <span className="font-mono">RM {subtotal}</span>
                </div>
                <div className="flex justify-between text-[#EBE5DA]/70">
                  <span>Malaysian SST Tax (6%)</span>
                  <span className="font-mono">RM {sstTax}</span>
                </div>
                <div className="flex justify-between text-[#EBE5DA]/70">
                  <span>Tourism Tax (RM 10/night)</span>
                  <span className="font-mono">RM {tourismTax}</span>
                </div>
                <div className="pt-2 border-t border-[#D4AF37]/20 flex justify-between font-bold text-sm text-[#E5C158]">
                  <span>Total Payable:</span>
                  <span className="font-mono text-base">RM {totalPriceMYR}</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => setStep(1)}
                  className="px-4 py-3 rounded-lg border border-[#D4AF37]/30 text-xs font-semibold text-[#EBE5DA]"
                >
                  Back
                </button>
                <button
                  onClick={() => setStep(3)}
                  className="flex-1 py-3 rounded-lg bg-gold-gradient text-[#120722] font-bold text-sm uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-lg"
                >
                  <span>Continue to Guest Details</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: Guest Details */}
          {step === 3 && (
            <form onSubmit={handleStep3Submit} className="space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="font-serif text-lg font-bold text-[#F8F5EE]">Guest Information</h4>
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="text-xs text-[#E5C158] hover:underline"
                >
                  Change Room
                </button>
              </div>

              <div className="space-y-3">
                <div>
                  <label className="block text-xs font-medium text-[#E5C158] mb-1">Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Tan Ah Hock"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full bg-[#230E3D] border border-[#D4AF37]/30 rounded-lg px-3 py-2.5 text-xs text-[#F8F5EE] focus:outline-none focus:border-[#D4AF37]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-medium text-[#E5C158] mb-1">Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="name@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-[#230E3D] border border-[#D4AF37]/30 rounded-lg px-3 py-2.5 text-xs text-[#F8F5EE] focus:outline-none focus:border-[#D4AF37]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#E5C158] mb-1">Mobile / Phone (+60) *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+60 12-345 6789"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-[#230E3D] border border-[#D4AF37]/30 rounded-lg px-3 py-2.5 text-xs text-[#F8F5EE] focus:outline-none focus:border-[#D4AF37]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#E5C158] mb-1">Special Requests (Optional)</label>
                  <textarea
                    rows={2}
                    placeholder="e.g. High floor preference, late arrival, extra towels"
                    value={specialRequests}
                    onChange={(e) => setSpecialRequests(e.target.value)}
                    className="w-full bg-[#230E3D] border border-[#D4AF37]/30 rounded-lg px-3 py-2.5 text-xs text-[#F8F5EE] focus:outline-none focus:border-[#D4AF37]"
                  />
                </div>
              </div>

              {/* Reservation Breakdown */}
              <div className="p-3.5 rounded-xl bg-[#120722] border border-[#D4AF37]/20 space-y-1.5 text-xs">
                <div className="flex justify-between">
                  <span className="text-[#EBE5DA]/70">Selected Room:</span>
                  <span className="font-semibold text-[#F8F5EE]">{selectedRoom.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#EBE5DA]/70">Dates:</span>
                  <span className="text-[#E5C158]">{checkIn} to {checkOut} ({nights} nights)</span>
                </div>
                <div className="flex justify-between font-bold text-sm text-[#E5C158] pt-1 border-t border-[#D4AF37]/10">
                  <span>Grand Total:</span>
                  <span>RM {totalPriceMYR}</span>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="px-4 py-3 rounded-lg border border-[#D4AF37]/30 text-xs font-semibold text-[#EBE5DA]"
                >
                  Back
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 py-3 rounded-lg bg-gold-gradient text-[#120722] font-bold text-sm uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-lg hover:opacity-95 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Processing Reservation...</span>
                  ) : (
                    <>
                      <CheckCircle2 className="w-4 h-4" />
                      <span>Confirm & Lock Booking</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          )}

          {/* STEP 4: Confirmation Screen */}
          {step === 4 && (
            <div className="space-y-6 text-center">
              <div className="w-16 h-16 mx-auto rounded-full bg-gold-gradient p-0.5 flex items-center justify-center shadow-2xl">
                <div className="w-full h-full rounded-full bg-[#1A0B2E] flex items-center justify-center">
                  <CheckCircle2 className="w-10 h-10 text-[#E5C158]" />
                </div>
              </div>

              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-[#D4AF37]">Reservation Confirmed</span>
                <h4 className="font-serif text-2xl font-bold text-[#F8F5EE] mt-1">
                  Thank You, {fullName}!
                </h4>
                <p className="text-xs text-[#EBE5DA]/70 mt-1">
                  Your luxury stay at Ipoh Town By Serenity is reserved.
                </p>
              </div>

              {/* Unique Reservation Pass */}
              <div className="p-5 rounded-xl bg-[#230E3D] border border-[#D4AF37]/40 text-left space-y-3 relative overflow-hidden">
                <div className="flex items-center justify-between pb-3 border-b border-[#D4AF37]/20">
                  <div>
                    <span className="text-[10px] text-[#EBE5DA]/60 uppercase tracking-wider">Booking Reference</span>
                    <p className="font-mono text-lg font-bold text-[#E5C158]">{reservationCode}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] uppercase text-[#EBE5DA]/60">Status</span>
                    <p className="text-xs font-semibold text-emerald-400">Guaranteed</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div>
                    <span className="text-[#EBE5DA]/60">Accommodation</span>
                    <p className="font-medium text-[#F8F5EE]">{selectedRoom.name}</p>
                  </div>
                  <div>
                    <span className="text-[#EBE5DA]/60">Guests</span>
                    <p className="font-medium text-[#F8F5EE]">{guests} Person(s)</p>
                  </div>
                  <div>
                    <span className="text-[#EBE5DA]/60">Check-in</span>
                    <p className="font-medium text-[#E5C158]">{checkIn} (from 3 PM)</p>
                  </div>
                  <div>
                    <span className="text-[#EBE5DA]/60">Check-out</span>
                    <p className="font-medium text-[#E5C158]">{checkOut} (until 12 PM)</p>
                  </div>
                </div>

                <div className="pt-3 border-t border-[#D4AF37]/20 flex justify-between items-center text-xs">
                  <span className="text-[#EBE5DA]/70">Total Rate (Inc. Taxes):</span>
                  <span className="font-mono text-lg font-bold text-[#E5C158]">RM {totalPriceMYR}</span>
                </div>
              </div>

              {/* Location & Quick Contact Buttons */}
              <div className="p-4 rounded-xl bg-[#120722] border border-[#D4AF37]/20 text-xs text-[#EBE5DA]/80 space-y-2 text-left">
                <div className="flex items-center gap-2 text-[#E5C158] font-semibold">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Hotel Address & Desk Contact</span>
                </div>
                <p>{HOTEL_INFO.address}</p>
                <p>Phone: <span className="font-mono">{HOTEL_INFO.phone}</span></p>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                <a
                  href={`https://wa.me/${HOTEL_INFO.phoneClean}?text=Hello!%20I%20have%20just%20booked%20reservation%20${reservationCode}%20(${selectedRoom.name})%20under%20the%20name%20${encodeURIComponent(fullName)}.`}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2.5 rounded-lg bg-[#25D366] text-slate-900 font-bold text-xs flex items-center gap-2 hover:opacity-90 transition-opacity"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Send via WhatsApp</span>
                </a>

                <button
                  onClick={handlePrint}
                  className="px-4 py-2.5 rounded-lg border border-[#D4AF37]/30 bg-[#2D124D] text-[#E5C158] font-bold text-xs flex items-center gap-2 hover:bg-[#3D1968] transition-colors"
                >
                  <Printer className="w-4 h-4" />
                  <span>Print Slip</span>
                </button>

                <button
                  onClick={onClose}
                  className="px-5 py-2.5 rounded-lg bg-gold-gradient text-[#120722] font-bold text-xs uppercase"
                >
                  Done
                </button>
              </div>

            </div>
          )}

        </div>

      </div>
    </div>
  );
};
