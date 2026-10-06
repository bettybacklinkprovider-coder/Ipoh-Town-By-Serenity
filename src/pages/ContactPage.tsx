import React, { useState } from 'react';
import { HOTEL_INFO, FAQS } from '../data/hotelData';
import { 
  Phone, MapPin, Mail, MessageCircle, Clock, CheckCircle2, Send, ChevronDown, ChevronUp,
  Navigation, CalendarCheck, Sparkles
} from 'lucide-react';

interface ContactPageProps {
  onOpenBooking: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onOpenBooking }) => {
  // Contact Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Room Booking Inquiry',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // FAQ Accordion State
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 700);
  };

  return (
    <div className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
      
      {/* Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1A0B2E] border border-[#D4AF37]/30">
          <Sparkles className="w-3.5 h-3.5 text-[#E5C158]" />
          <span className="text-[11px] font-semibold text-[#E5C158] uppercase tracking-widest">
            Ipoh Town By Serenity
          </span>
        </div>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#F8F5EE]">
          Get in Touch With Us
        </h1>
        <p className="text-xs sm:text-sm text-[#EBE5DA]/80 leading-relaxed font-light">
          Whether you need assistance with room reservations, special requests, or travel directions, our concierge team is at your service 24 hours a day.
        </p>
      </div>

      {/* Main Grid: Contact Info + Form */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        
        {/* Left Col: Contact Info Cards */}
        <div className="space-y-6">
          <div className="glass-purple-card p-6 rounded-2xl border border-[#D4AF37]/30 space-y-6">
            <h3 className="font-serif text-xl font-bold text-[#F8F5EE] border-b border-[#D4AF37]/20 pb-3">
              Hotel Contact Details
            </h3>

            <div className="space-y-4 text-xs">
              
              {/* Address */}
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-gold-subtle border border-[#D4AF37]/30 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-[#E5C158]" />
                </div>
                <div>
                  <span className="block text-[10px] text-[#EBE5DA]/60 uppercase tracking-wider">Hotel Address</span>
                  <p className="font-medium text-[#F8F5EE] mt-0.5">{HOTEL_INFO.address}</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-gold-subtle border border-[#D4AF37]/30 flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4 text-[#E5C158]" />
                </div>
                <div>
                  <span className="block text-[10px] text-[#EBE5DA]/60 uppercase tracking-wider">Reservation Phone</span>
                  <a href={`tel:${HOTEL_INFO.phoneClean}`} className="font-mono text-sm font-bold text-[#E5C158] hover:underline mt-0.5 block">
                    {HOTEL_INFO.phone}
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-gold-subtle border border-[#D4AF37]/30 flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4 text-[#E5C158]" />
                </div>
                <div>
                  <span className="block text-[10px] text-[#EBE5DA]/60 uppercase tracking-wider">Email Inquiry</span>
                  <a href={`mailto:${HOTEL_INFO.email}`} className="font-medium text-[#F8F5EE] hover:text-[#E5C158] mt-0.5 block">
                    {HOTEL_INFO.email}
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-gold-subtle border border-[#D4AF37]/30 flex items-center justify-center shrink-0">
                  <Clock className="w-4 h-4 text-[#E5C158]" />
                </div>
                <div>
                  <span className="block text-[10px] text-[#EBE5DA]/60 uppercase tracking-wider">Front Desk Hours</span>
                  <p className="font-medium text-[#F8F5EE] mt-0.5">{HOTEL_INFO.frontDeskHours}</p>
                  <p className="text-[10px] text-[#EBE5DA]/60 mt-1">Check-in: {HOTEL_INFO.checkInTime} | Check-out: {HOTEL_INFO.checkOutTime}</p>
                </div>
              </div>

            </div>

            {/* Direct Instant Action Buttons */}
            <div className="pt-2 space-y-2 border-t border-[#D4AF37]/20">
              <a
                href={`https://wa.me/${HOTEL_INFO.phoneClean}?text=Hello%20Ipoh%20Town%20By%20Serenity!%20I%20would%20like%20to%20inquire%20about%20room%20availability.`}
                target="_blank"
                rel="noreferrer"
                className="w-full py-2.5 rounded-lg bg-[#25D366]/20 border border-[#25D366]/40 text-[#25D366] font-bold text-xs flex items-center justify-center gap-2 hover:bg-[#25D366]/30 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat via WhatsApp (+60167038488)</span>
              </a>

              <button
                onClick={onOpenBooking}
                className="w-full py-2.5 rounded-lg bg-gold-gradient text-[#120722] font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md"
              >
                <CalendarCheck className="w-4 h-4" />
                <span>Instant Room Reservation</span>
              </button>
            </div>

          </div>
        </div>

        {/* Right Col: Interactive Contact Form */}
        <div className="lg:col-span-2">
          <div className="glass-purple-card p-6 sm:p-8 rounded-2xl border border-[#D4AF37]/30 space-y-6">
            <div className="border-b border-[#D4AF37]/20 pb-4">
              <h3 className="font-serif text-2xl font-bold text-[#F8F5EE]">
                Send Us a Direct Message
              </h3>
              <p className="text-xs text-[#EBE5DA]/70 mt-1">
                Fill out the form below and our front desk manager will respond within 2 hours.
              </p>
            </div>

            {submitted ? (
              <div className="p-8 rounded-xl bg-[#230E3D] border border-[#D4AF37]/40 text-center space-y-4 animate-in fade-in">
                <div className="w-12 h-12 mx-auto rounded-full bg-gold-gradient p-0.5 flex items-center justify-center">
                  <div className="w-full h-full rounded-full bg-[#1A0B2E] flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6 text-[#E5C158]" />
                  </div>
                </div>
                <h4 className="font-serif text-xl font-bold text-[#F8F5EE]">Message Delivered Successfully</h4>
                <p className="text-xs text-[#EBE5DA]/80 max-w-md mx-auto">
                  Thank you, {formData.name}. We have received your message regarding "{formData.subject}" and will contact you shortly at {formData.email}.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', email: '', phone: '', subject: 'Room Booking Inquiry', message: '' });
                  }}
                  className="px-6 py-2.5 rounded-lg bg-[#120722] border border-[#D4AF37]/30 text-xs font-semibold text-[#E5C158]"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#E5C158] mb-1">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Lee Wei Ming"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#120722] border border-[#D4AF37]/30 rounded-lg px-3.5 py-2.5 text-xs text-[#F8F5EE] focus:outline-none focus:border-[#D4AF37]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#E5C158] mb-1">Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="name@domain.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#120722] border border-[#D4AF37]/30 rounded-lg px-3.5 py-2.5 text-xs text-[#F8F5EE] focus:outline-none focus:border-[#D4AF37]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#E5C158] mb-1">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+60 16-703 8488"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-[#120722] border border-[#D4AF37]/30 rounded-lg px-3.5 py-2.5 text-xs text-[#F8F5EE] focus:outline-none focus:border-[#D4AF37]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#E5C158] mb-1">Inquiry Subject</label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full bg-[#120722] border border-[#D4AF37]/30 rounded-lg px-3.5 py-2.5 text-xs text-[#F8F5EE] focus:outline-none focus:border-[#D4AF37]"
                    >
                      <option value="Room Booking Inquiry">Room Booking Inquiry</option>
                      <option value="Group / Corporate Reservation">Group / Corporate Reservation</option>
                      <option value="Airport Transfer Request">Airport Transfer Request</option>
                      <option value="General Feedback">General Feedback</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#E5C158] mb-1">Your Message / Special Requirements *</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell us about your upcoming trip dates, room preferences, or special requests..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-[#120722] border border-[#D4AF37]/30 rounded-lg px-3.5 py-2.5 text-xs text-[#F8F5EE] focus:outline-none focus:border-[#D4AF37]"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 rounded-xl bg-gold-gradient text-[#120722] font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-lg hover:opacity-95 disabled:opacity-50"
                >
                  {loading ? (
                    <span>Sending Inquiry...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Submit Inquiry</span>
                    </>
                  )}
                </button>

              </form>
            )}

          </div>
        </div>

      </div>

      {/* Location Map & Directions Section */}
      <div className="space-y-6">
        <div className="space-y-2 text-center">
          <span className="text-xs font-semibold text-[#E5C158] uppercase tracking-wider">
            Location & Access
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl font-bold text-[#F8F5EE]">
            Map & Directions
          </h2>
          <p className="text-xs text-[#EBE5DA]/70 max-w-xl mx-auto">
            157, Jalan Sultan Iskandar, Taman Jubilee, 30000 Ipoh, Perak, Malaysia
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          
          {/* Map Preview Container */}
          <div className="lg:col-span-2 relative min-h-[320px] rounded-2xl overflow-hidden border border-[#D4AF37]/30 shadow-2xl bg-[#1A0B2E]">
            <iframe
              title="Ipoh Town By Serenity Google Map Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.818167389421!2d101.0805128!3d4.5938814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31caecf880ef8a17%3A0xa59f77b78a9c3365!2s157%2C%20Jalan%20Sultan%20Iskandar%2C%20Taman%20Jubilee%2C%2030000%20Ipoh%2C%20Perak%2C%20Malaysia!5e0!3m2!1sen!2smy!4v1700000000000!5m2!1sen!2smy"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '320px' }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* How to Reach Us */}
          <div className="p-6 rounded-2xl bg-[#1A0B2E] border border-[#D4AF37]/30 space-y-4 text-xs flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-[#E5C158] font-bold text-sm">
                <Navigation className="w-4 h-4" />
                <span>How to Arrive</span>
              </div>

              <div className="space-y-2 text-[#EBE5DA]/80">
                <div className="p-3 rounded-lg bg-[#120722] border border-[#D4AF37]/15">
                  <span className="font-semibold text-[#E5C158] block">From Ipoh Railway Station (ETS)</span>
                  <p className="text-[11px] mt-0.5">5 minutes drive (1.5 km) via Jalan Dato' Maharalela / Jalan Sultan Iskandar.</p>
                </div>

                <div className="p-3 rounded-lg bg-[#120722] border border-[#D4AF37]/15">
                  <span className="font-semibold text-[#E5C158] block">From Sultan Azlan Shah Airport (IPH)</span>
                  <p className="text-[11px] mt-0.5">12 minutes drive (5.8 km) via Jalan Raja Dr. Nazrin Shah.</p>
                </div>

                <div className="p-3 rounded-lg bg-[#120722] border border-[#D4AF37]/15">
                  <span className="font-semibold text-[#E5C158] block">North-South Expressway Exit</span>
                  <p className="text-[11px] mt-0.5">10 minutes drive from Ipoh Selatan Interchange.</p>
                </div>
              </div>
            </div>

            <a
              href="https://maps.google.com/?q=157+Jalan+Sultan+Iskandar+Taman+Jubilee+30000+Ipoh+Perak+Malaysia"
              target="_blank"
              rel="noreferrer"
              className="w-full py-2.5 rounded-lg border border-[#D4AF37]/40 bg-[#230E3D] text-[#E5C158] font-bold text-xs text-center hover:bg-[#2D124D] transition-colors block"
            >
              Open in Google Maps
            </a>
          </div>

        </div>
      </div>

      {/* FAQ Section */}
      <div className="space-y-6">
        <div className="text-center space-y-2">
          <span className="text-xs font-semibold text-[#E5C158] uppercase tracking-wider">
            Clear Answers
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#F8F5EE]">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={idx}
                className="rounded-xl bg-[#1A0B2E] border border-[#D4AF37]/20 overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="w-full p-4 text-left font-serif text-sm font-bold text-[#F8F5EE] flex items-center justify-between gap-4 hover:text-[#E5C158] transition-colors"
                >
                  <span>{faq.question}</span>
                  {isOpen ? <ChevronUp className="w-4 h-4 text-[#E5C158]" /> : <ChevronDown className="w-4 h-4 text-[#D4AF37]" />}
                </button>

                {isOpen && (
                  <div className="px-4 pb-4 text-xs text-[#EBE5DA]/80 leading-relaxed border-t border-[#D4AF37]/10 pt-3">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
};
