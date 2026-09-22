"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Phone, Calendar, Star, MapPin, Sparkles, ArrowDown } from "lucide-react";
import { LEVINO_CONTACT } from "@/data/levinoData";
import { Button } from "../ui/Button";

interface HeroSectionProps {
  onOpenBooking: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenBooking }) => {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-radial-to-b from-[#FBFBF7] via-[#F5F4EE] to-[#FBFBF7]">
      {/* Ambient background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#DDB892]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        {/* Left Column: Editorial Headline & Copy */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-7 text-center lg:text-left space-y-6"
        >
          {/* Tagline Script Accent */}
          <div className="inline-flex items-center gap-2">
            <span className="font-script-accent text-3xl sm:text-4xl text-[#9C6644] font-normal tracking-wide">
              …a home away from home
            </span>
          </div>

          {/* Main H1 Headline */}
          <h1 className="font-serif-luxury text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-[#281C13] leading-[1.12]">
            Where timeless <span className="italic font-normal text-[#6A472F]">elegance</span> meets effortless{" "}
            <span className="italic font-normal text-[#6A472F]">comfort</span>.
          </h1>

          {/* Subtitle / Intro Narrative */}
          <p className="text-base sm:text-lg text-[#6A472F] max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
            Levino Palms and Levino Meadows — two distinct destinations in Daman, united by a promise
            of refined hospitality, peaceful retreats, and curated luxury amidst open green spaces.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
            <Button
              variant="primary"
              size="lg"
              onClick={onOpenBooking}
              icon={<Calendar className="w-4 h-4" />}
              className="w-full sm:w-auto shadow-md"
            >
              Check Availability
            </Button>

            <Button
              variant="outline"
              size="lg"
              href={`tel:${LEVINO_CONTACT.primaryPhoneClean}`}
              icon={<Phone className="w-4 h-4 text-[#9C6644]" />}
              iconPosition="left"
              className="w-full sm:w-auto"
            >
              Call Reception
            </Button>
          </div>

          {/* Key Feature Highlights Pills */}
          <div className="pt-6 border-t border-[#EDECE4] grid grid-cols-2 sm:grid-cols-3 gap-3 text-left">
            <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/70 border border-[#EDECE4]">
              <div className="w-8 h-8 rounded-full bg-[#DDB892]/20 text-[#6A472F] flex items-center justify-center shrink-0">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-wider text-[#7F5539] font-medium">Location</p>
                <p className="text-xs font-semibold text-[#281C13]">5 Min to Devka Beach</p>
              </div>
            </div>

            <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/70 border border-[#EDECE4]">
              <div className="w-8 h-8 rounded-full bg-[#DDB892]/20 text-[#6A472F] flex items-center justify-center shrink-0">
                <Star className="w-4 h-4 fill-amber-400 text-amber-500" />
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-wider text-[#7F5539] font-medium">Ratings</p>
                <p className="text-xs font-semibold text-[#281C13]">4.6/5 (1,000+ Reviews)</p>
              </div>
            </div>

            <div className="col-span-2 sm:col-span-1 flex items-center gap-2 p-2.5 rounded-xl bg-white/70 border border-[#EDECE4]">
              <div className="w-8 h-8 rounded-full bg-[#DDB892]/20 text-[#6A472F] flex items-center justify-center shrink-0">
                <Sparkles className="w-4 h-4 text-[#9C6644]" />
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-wider text-[#7F5539] font-medium">Weddings & Events</p>
                <p className="text-xs font-semibold text-[#281C13]">Up to 800 Guests</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Hero Visual Feature Showcase */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
          className="lg:col-span-5 relative"
        >
          <div className="relative mx-auto max-w-md lg:max-w-none">
            {/* Elegant luxury framing */}
            <div className="relative aspect-4/5 rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <Image
                src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1200&auto=format&fit=crop"
                alt="Levino Daman luxury resort exterior"
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#281C13]/70 via-transparent to-transparent" />

              {/* Floating Caption on Hero Image */}
              <div className="absolute bottom-6 left-6 right-6 text-[#FBFBF7]">
                <span className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-[11px] uppercase tracking-widest font-medium border border-white/30 inline-block mb-2">
                  Daman, India
                </span>
                <h2 className="font-serif-luxury text-2xl font-normal text-white">
                  Levino Meadows & Palms
                </h2>
                <p className="text-xs text-white/80 font-light mt-1">
                  Experience homelike warmth paired with boutique grandeur.
                </p>
              </div>
            </div>

            {/* Floating Top Right Tag */}
            <div className="absolute -top-4 -right-4 hidden sm:flex items-center gap-2 bg-[#281C13] text-[#FBFBF7] px-4 py-2.5 rounded-2xl shadow-xl border border-[#DDB892]/40">
              <span className="text-lg">🌿</span>
              <div className="text-left">
                <p className="text-[10px] uppercase tracking-wider text-[#DDB892]">Serenity</p>
                <p className="text-xs font-medium">Lush Lawns & Pools</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Down Scroll Anchor */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-1 text-[#7F5539]/60 hover:text-[#281C13] transition-colors cursor-pointer">
        <span className="text-[10px] uppercase tracking-widest font-medium">Explore</span>
        <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
      </div>
    </section>
  );
};
