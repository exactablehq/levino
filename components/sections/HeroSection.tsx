"use client";

import React from "react";
import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { LEVINO_CONTACT } from "@/data/levinoData";

interface HeroSectionProps {
  onOpenBooking: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenBooking,
}) => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black text-white">

      {/* HERO VIDEO */}
      <div className="absolute inset-0">
        <video
          src="/levino-hero.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover"
        />

        {/* subtle overlay */}
        <div className="absolute inset-0 bg-black/20" />

        {/* bottom fade */}
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/60 to-transparent" />
      </div>

      {/* HERO CONTENT */}
      <div className="relative z-10 flex min-h-screen items-end">

        <div className="w-full px-6 pb-16 sm:px-10 sm:pb-20 lg:px-16 lg:pb-24">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-2xl"
          >

            {/* Small heading */}
            <h1 className="font-serif-luxury text-4xl font-medium leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
              Where timeless
              <br />
              elegance meets
              <br />
              effortless comfort.
            </h1>

            {/* Description */}
            <p className="mt-5 max-w-lg text-sm leading-6 text-white/80 sm:text-base">
              Levino Palms and Levino Meadows — two distinct destinations,
              united by a promise of refined hospitality, private retreats,
              and curated luxury amidst open green spaces.
            </p>

            {/* Call Reception */}
            <div className="mt-7">
              <a
                href={`tel:${LEVINO_CONTACT.primaryPhoneClean}`}
                className="inline-flex items-center gap-3 border-b border-white/70 pb-2 text-sm font-medium transition-opacity hover:opacity-70"
              >
                <Phone className="h-4 w-4" />
                Call Reception
              </a>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};