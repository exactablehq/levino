"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { DestinationsSection } from "@/components/sections/DestinationsSection";
import { AmenitiesSection } from "@/components/sections/AmenitiesSection";
import { WhyChooseSection } from "@/components/sections/WhyChooseSection";
import { FounderSection } from "@/components/sections/FounderSection";
import { ReviewsSection } from "@/components/sections/ReviewsSection";
import { ExploreDamanSection } from "@/components/sections/ExploreDamanSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { WeddingCtaSection } from "@/components/sections/WeddingCtaSection";
import { BookingModal } from "@/components/ui/Modal";
import { FloatingContact } from "@/components/ui/FloatingContact";

export default function Home() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedDestination, setSelectedDestination] = useState<string>("Any Destination");

  const handleOpenBooking = (destination?: string) => {
    setSelectedDestination(destination || "Any Destination");
    setBookingModalOpen(true);
  };

  const handleCloseBooking = () => {
    setBookingModalOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FBFBF7] text-[#281C13] overflow-x-hidden">
      {/* Sticky Luxury Header */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Main Page Sections */}
      <main className="flex-1 flex flex-col">
        {/* Stage 4: Hero Section */}
        <HeroSection onOpenBooking={() => handleOpenBooking()} />

        {/* Stage 5: Destinations (Meadows & Palms) */}
        <DestinationsSection onOpenBooking={handleOpenBooking} />

        {/* Stage 5: Amenities */}
        <AmenitiesSection />

        {/* Stage 5: Why Choose Levino */}
        <WhyChooseSection />

        {/* Stage 5: Founder's Reflection */}
        <FounderSection />

        {/* Stage 5: Guest Testimonials */}
        <ReviewsSection />

        {/* Stage 5: Explore Daman Attractions */}
        <ExploreDamanSection />

        {/* Stage 5: FAQ & Policies */}
        <FaqSection />

        {/* Stage 5: Weddings & Celebrations Banner */}
        <WeddingCtaSection onOpenBooking={handleOpenBooking} />
      </main>

      {/* Stage 5: Luxury Footer */}
      <Footer />

      {/* Interactive Reservation / Inquiry Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={handleCloseBooking}
        defaultDestination={selectedDestination}
      />

      {/* Floating Action Triggers (WhatsApp & Phone) */}
      <FloatingContact />
    </div>
  );
}
