"use client";

import React from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { FOUNDER_QUOTE } from "@/data/levinoData";

export const FounderSection: React.FC = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative bg-[#281C13] text-[#FBFBF7] rounded-3xl p-8 sm:p-12 md:p-16 shadow-xl overflow-hidden border border-[#DDB892]/30 text-center"
      >
        {/* Ambient background glow inside card */}
        <div className="absolute -top-24 -left-24 w-72 h-72 bg-[#9C6644]/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-[#DDB892]/15 rounded-full blur-3xl pointer-events-none" />

        {/* Content */}
        <div className="relative z-10 max-w-3xl mx-auto space-y-6">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/10 text-[#DDB892] mx-auto">
            <Quote className="w-6 h-6" />
          </div>

          <div className="space-y-1">
            <span className="text-xs uppercase tracking-widest text-[#DDB892] font-semibold">
              {FOUNDER_QUOTE.subtitle}
            </span>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl font-normal text-white">
              {FOUNDER_QUOTE.title}
            </h2>
          </div>

          <blockquote className="font-serif-luxury text-lg sm:text-xl md:text-2xl font-light text-[#FBFBF7]/90 leading-relaxed italic">
            &ldquo;{FOUNDER_QUOTE.quote}&rdquo;
          </blockquote>

          <div className="pt-4 border-t border-white/10 flex flex-col items-center">
            <span className="font-script-accent text-3xl text-[#DDB892]">
              …a home away from home
            </span>
            <p className="text-xs uppercase tracking-widest text-white/60 mt-1">
              {FOUNDER_QUOTE.brand}
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
