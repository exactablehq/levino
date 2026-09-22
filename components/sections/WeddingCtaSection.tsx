"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Phone, Calendar, Heart } from "lucide-react";
import { Button } from "../ui/Button";

interface WeddingCtaSectionProps {
  onOpenBooking: (destination?: string) => void;
}

export const WeddingCtaSection: React.FC<WeddingCtaSectionProps> = ({ onOpenBooking }) => {
  return (
    <section id="weddings" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative rounded-3xl overflow-hidden bg-[#281C13] text-[#FBFBF7] shadow-2xl border border-[#DDB892]/30"
      >
        {/* Background Wedding Image with Dark Gradient Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1600&auto=format&fit=crop"
            alt="Levino Daman Wedding Venue"
            fill
            sizes="100vw"
            className="object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#281C13] via-[#281C13]/90 to-transparent" />
        </div>

        {/* Banner Content */}
        <div className="relative z-10 p-8 sm:p-12 md:p-16 max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-[#DDB892]/40 text-[#DDB892] text-xs font-semibold uppercase tracking-widest">
            <Heart className="w-3.5 h-3.5 fill-current" />
            <span>Grand Celebrations</span>
          </div>

          <span className="font-script-accent text-3xl sm:text-4xl text-[#DDB892] block">
            Plan your wedding at Levino
          </span>

          <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-medium text-white leading-tight">
            Curated memories for the biggest day of your life.
          </h2>

          <p className="text-sm sm:text-base text-[#EDECE4]/85 leading-relaxed font-light">
            Whether you are hosting an intimate beachside haldi or an 800-guest royal reception,
            Levino Meadows provides sprawling lush lawns, grand banquet halls, and full resort buyout
            options.
          </p>

          {/* Quick wedding stats */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2 text-left">
            <div className="p-3 rounded-xl bg-white/5 border border-white/10">
              <p className="text-xl sm:text-2xl font-serif-luxury font-semibold text-[#DDB892]">800+</p>
              <p className="text-xs text-white/70">Central Lawn Capacity</p>
            </div>
            <div className="p-3 rounded-xl bg-white/5 border border-white/10">
              <p className="text-xl sm:text-2xl font-serif-luxury font-semibold text-[#DDB892]">250</p>
              <p className="text-xs text-white/70">Banquet Hall Guests</p>
            </div>
            <div className="col-span-2 sm:col-span-1 p-3 rounded-xl bg-white/5 border border-white/10">
              <p className="text-xl sm:text-2xl font-serif-luxury font-semibold text-[#DDB892]">48</p>
              <p className="text-xs text-white/70">Total Rooms Across Resort</p>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
            <Button
              variant="gold"
              size="lg"
              onClick={() => onOpenBooking("Levino Meadows (Wedding / Event)")}
              icon={<Calendar className="w-4 h-4" />}
              className="w-full sm:w-auto"
            >
              Let&apos;s talk
            </Button>

            <Button
              variant="outline"
              size="lg"
              href="tel:+919913713747"
              icon={<Phone className="w-4 h-4 text-[#DDB892]" />}
              iconPosition="left"
              className="w-full sm:w-auto !text-white !border-white/40 hover:!bg-white/10"
            >
              Call Wedding Team: +91 99137 13747
            </Button>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
