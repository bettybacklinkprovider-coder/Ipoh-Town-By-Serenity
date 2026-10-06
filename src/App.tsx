import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { RoomsPage } from './pages/RoomsPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { BookingModal } from './components/BookingModal';
import { RoomDetailModal } from './components/RoomDetailModal';
import { Room } from './data/hotelData';

type PageRoute = 'home' | 'rooms' | 'about' | 'contact';

export default function App() {
  // Navigation Route State
  const [currentPage, setCurrentPage] = useState<PageRoute>(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash === 'rooms' || hash === 'about' || hash === 'contact') {
      return hash as PageRoute;
    }
    return 'home';
  });

  // Modal States
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedBookingRoomId, setSelectedBookingRoomId] = useState<string | undefined>(undefined);
  const [detailModalRoom, setDetailModalRoom] = useState<Room | null>(null);

  // Sync route with URL hash for proper multi-page navigation feel
  const handleNavigate = (page: PageRoute) => {
    setCurrentPage(page);
    window.location.hash = page === 'home' ? '' : page;
  };

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash === 'rooms' || hash === 'about' || hash === 'contact') {
        setCurrentPage(hash as PageRoute);
      } else {
        setCurrentPage('home');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleOpenBooking = (roomId?: string) => {
    setSelectedBookingRoomId(roomId);
    setBookingModalOpen(true);
  };

  const handleOpenRoomDetail = (room: Room) => {
    setDetailModalRoom(room);
  };

  return (
    <div className="min-h-screen bg-[#120722] text-[#F8F5EE] flex flex-col font-sans selection:bg-[#D4AF37] selection:text-[#120722]">
      
      {/* Universal Header */}
      <Header
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenBooking={handleOpenBooking}
      />

      {/* Page Content Rendering */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onOpenBooking={handleOpenBooking}
            onOpenRoomDetail={handleOpenRoomDetail}
          />
        )}

        {currentPage === 'rooms' && (
          <RoomsPage
            onOpenBooking={handleOpenBooking}
            onOpenRoomDetail={handleOpenRoomDetail}
          />
        )}

        {currentPage === 'about' && (
          <AboutPage
            onNavigate={handleNavigate}
            onOpenBooking={handleOpenBooking}
          />
        )}

        {currentPage === 'contact' && (
          <ContactPage
            onOpenBooking={handleOpenBooking}
          />
        )}
      </main>

      {/* Universal Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenBooking={handleOpenBooking}
      />

      {/* Interactive Booking Engine Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        preSelectedRoomId={selectedBookingRoomId}
      />

      {/* Interactive Room Specification Modal */}
      <RoomDetailModal
        room={detailModalRoom}
        onClose={() => setDetailModalRoom(null)}
        onBookRoom={(roomId) => handleOpenBooking(roomId)}
      />

    </div>
  );
}
