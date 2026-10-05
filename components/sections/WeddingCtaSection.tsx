"use client";

import React from "react";
import { motion } from "framer-motion";
import { CtaButton } from "../ui/CtaButton";

interface WeddingCtaSectionProps {
  onOpenBooking?: (destination?: string) => void;
}

export const WeddingCtaSection: React.FC<WeddingCtaSectionProps> = ({ onOpenBooking }) => {
  return (
    <section id="banner" className="py-16 md:py-24 px-6 md:px-10 bg-[#FBFBF7]">
      <div className="max-w-[1280px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8 }}
          className="bg-[#9C6644] text-white p-10 sm:p-14 md:p-20 rounded-[30px] shadow-lg flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="max-w-2xl text-center md:text-left">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-white leading-tight">
              Plan your wedding at{" "}
              <span className="font-script text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white ml-1 block sm:inline">
                Levino
              </span>
            </h2>
            <p className="text-sm sm:text-base text-white/80 font-sans mt-4 max-w-xl">
              From sprawling lawns for 800 guests to curated banquet spaces and luxury accommodations, create unforgettable celebrations with us.
            </p>
          </div>

          <div className="shrink-0">
            {onOpenBooking ? (
              <button
                onClick={() => onOpenBooking("Levino Meadows (Wedding / Celebration)")}
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-base font-medium tracking-wide bg-white text-[#281C13] hover:bg-[#FBFBF7] transition-colors shadow-md cursor-pointer"
              >
                <span>Let's talk</span>
                <span className="w-6 h-6 rounded-full bg-[#281C13]/10 text-[#281C13] flex items-center justify-center text-xs">
                  ↗
                </span>
              </button>
            ) : (
              <CtaButton
                href="tel:+919913713747"
                variant="light"
              >
                Let's talk
              </CtaButton>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WeddingCtaSection;
