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
    <section className="relative min-h-screen w-full overflow-hidden bg-black text-white">

      {/* HERO VIDEO */}
      <div className="absolute inset-0">
        <video
          src="/levino-hero.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="h-full w-full object-cover"
        />

        {/* Main cinematic overlay */}
        <div className="absolute inset-0 bg-black/25" />

        {/* Slight bottom gradient for readability */}
        <div className="absolute inset-x-0 bottom-0 h-[55%] bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        {/* Very subtle overall vignette */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/15 via-transparent to-black/10" />
      </div>

      {/* HERO CONTENT */}
      <div className="relative z-10 flex min-h-screen flex-col justify-end">

        <div className="w-full px-6 pb-14 sm:px-10 sm:pb-16 md:px-14 lg:px-20 lg:pb-20">

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="max-w-[650px]"
          >

            {/* LEVINO HANDWRITTEN / DISPLAY TITLE */}
            <h1
              className="relative -translate-y-10 text-[clamp(2.8rem,6vw,5.5rem)] font-normal leading-[0.88] tracking-[-0.045em]"
              style={{
                fontFamily: "cursive",
                color: "#9B1C24",
              }}
            >
              Levino
            </h1>

            {/* TAGLINE */}
            <p className="mt-3 max-w-[650px] text-[21px] font-semibold leading-[1.4] tracking-[0.01em] text-white sm:text-[24px]">
              Where timeless elegance meets effortless comfort.
            </p>
            {/* DESCRIPTION */}
            <p className="mt-4 max-w-[520px] text-[13px] font-light leading-6 text-white/75 sm:text-sm">
              Levino Palms and Levino Meadows — two distinct destinations,
              united by a promise of refined hospitality, private retreats,
              and curated luxury amidst open green spaces.
            </p>

            {/* CALL RECEPTION */}
            <div className="mt-7">
              <a
                href={`tel:${LEVINO_CONTACT.primaryPhoneClean}`}
                className="group inline-flex items-center gap-3 border-b border-white/70 pb-2 text-[13px] font-medium tracking-[0.04em] transition-all duration-300 hover:border-white hover:text-white/80"
              >
                <Phone
                  className="h-[15px] w-[15px] transition-transform duration-300 group-hover:scale-105"
                  strokeWidth={1.5}
                />

                <span>Call Reception</span>
              </a>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};