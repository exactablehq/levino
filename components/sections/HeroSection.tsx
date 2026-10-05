"use client";

import React from "react";
import { motion } from "framer-motion";

interface HeroSectionProps {
  onOpenBooking?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = () => {
  return (
    <section
      id="hero"
      className="relative w-full h-screen min-h-screen sm:min-h-screen max-h-screen md:h-screen overflow-hidden bg-black text-white flex flex-col justify-end"
    >
      {/* Background Hero Video & Poster */}
      <div className="absolute inset-0 z-0">
        <video
          src="https://framerusercontent.com/assets/8tLtwARxl8CXao3mJSEPRt62nI4.mp4"
          poster="https://framerusercontent.com/images/QVE31PSHNEtlXTxBztuLbHJnT1I.png?width=2752&height=1536"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="h-full w-full object-cover object-center"
        />

        {/* Dual Cinematic Blur & Fade Overlays Matching Live Framer site */}
        <div
          className="absolute inset-0 z-10 pointer-events-none backdrop-blur-[6px] bg-black/60"
          style={{
            maskImage: "linear-gradient(90deg, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.1) 60%, rgba(0,0,0,0) 100%)",
            WebkitMaskImage: "linear-gradient(90deg, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.1) 60%, rgba(0,0,0,0) 100%)",
          }}
        />
        <div
          className="absolute inset-0 z-10 pointer-events-none backdrop-blur-[6px] bg-black/75"
          style={{
            maskImage: "linear-gradient(0deg, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.4) 40%, rgba(0,0,0,0) 80%)",
            WebkitMaskImage: "linear-gradient(0deg, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.4) 40%, rgba(0,0,0,0) 80%)",
          }}
        />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-20 w-full max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-12 pb-16 sm:pb-20 lg:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-start text-left"
        >
          {/* Main Stacked Headline */}
          <div className="max-w-[700px] mb-5 sm:mb-6">
            <h1 className="font-serif font-normal text-[34px] sm:text-[48px] lg:text-[60px] leading-[1.08] tracking-[-0.02em] text-white">
              <span className="inline-block mr-3">Where</span>
              <span className="inline-block mr-3">timeless</span>
              <span className="inline-block mr-3">elegance</span>
              <span className="inline-block mr-3">meets</span>
              <span className="inline-block mr-3">effortless</span>
              <span className="inline-block italic font-normal">comfort</span>
            </h1>
          </div>

          {/* Subtitle Paragraph */}
          <div className="max-w-[500px] mb-8 sm:mb-10">
            <p className="font-sans font-normal text-[18px] sm:text-[22px] lg:text-[24px] leading-[1.35] tracking-[-0.01em] text-[#EDECE4]">
              Levino Palms and Levino Meadows — two distinct destinations, united by a promise of refined hospitality, private retreats, and curated luxury amidst open green spaces.
            </p>
          </div>

          {/* Call Reception CTA Pill Button */}
          <div>
            <motion.a
              href="tel:+919913713747"
              whileHover="hover"
              initial="initial"
              className="inline-flex items-center p-1.5 rounded-[130px] bg-white/5 backdrop-blur-xs border border-white/10 shadow-[10px_10px_30px_rgba(0,0,0,0.12)] transition-colors group cursor-pointer"
            >
              <div className="flex items-center gap-3 px-7 sm:px-8 py-3.5 sm:py-4 rounded-[80px] bg-white text-[#1A0D1C] group-hover:bg-[#FBFBF7] transition-colors">
                <span className="font-sans text-base sm:text-lg lg:text-[20px] font-normal tracking-normal">
                  Call Reception
                </span>
                <motion.span
                  variants={{
                    initial: { x: 0, y: 0 },
                    hover: { x: 3, y: -3 },
                  }}
                  transition={{ type: "spring", stiffness: 350, damping: 25 }}
                  className="w-5 h-5 flex items-center justify-center shrink-0"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="rotate-[-40deg]"
                  >
                    <path
                      d="M5 12H19M19 12L12 5M19 12L12 19"
                      stroke="#1A0D1C"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </motion.span>
              </div>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;