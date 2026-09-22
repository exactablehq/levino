"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Phone, Calendar, MapPin, Star } from "lucide-react";
import { LEVINO_CONTACT } from "@/data/levinoData";
import { Button } from "../ui/Button";

interface HeroSectionProps {
  onOpenBooking: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenBooking,
}) => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#F7F5EF] px-5 pb-16 pt-28 sm:px-8 lg:px-12">
      <div className="mx-auto grid min-h-[calc(100vh-7rem)] max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center lg:text-left"
        >
          {/* Small label */}
          <div className="mb-6 flex items-center justify-center gap-3 lg:justify-start">
            <span className="h-px w-10 bg-[#9C6644]" />
            <span className="text-xs font-medium uppercase tracking-[0.25em] text-[#8A6249]">
              Levino Daman
            </span>
          </div>

          {/* Main heading */}
          <h1 className="font-serif-luxury text-5xl font-medium leading-[1.08] tracking-tight text-[#281C13] sm:text-6xl lg:text-7xl">
            A place to
            <br />
            <span className="italic text-[#7A5238]">slow down.</span>
          </h1>

          {/* Description */}
          <p className="mx-auto mt-7 max-w-xl text-base leading-8 text-[#6A5A4E] sm:text-lg lg:mx-0">
            Discover a peaceful escape in Daman, where warm hospitality,
            beautiful surroundings, and thoughtful experiences come together.
          </p>

          {/* Buttons */}
          <div className="mt-9 flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
            <Button
              variant="primary"
              size="lg"
              onClick={onOpenBooking}
              icon={<Calendar className="h-4 w-4" />}
              className="w-full sm:w-auto"
            >
              Check Availability
            </Button>

            <Button
              variant="outline"
              size="lg"
              href={`tel:${LEVINO_CONTACT.primaryPhoneClean}`}
              icon={<Phone className="h-4 w-4" />}
              iconPosition="left"
              className="w-full sm:w-auto"
            >
              Call Reception
            </Button>
          </div>

          {/* Trust information */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-7 gap-y-4 border-t border-[#DED9D0] pt-6 text-sm text-[#6A5A4E] lg:justify-start">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-[#9C6644]" />
              <span>Near Devka Beach</span>
            </div>

            <div className="hidden h-4 w-px bg-[#D5CEC4] sm:block" />

            <div className="flex items-center gap-2">
              <Star className="h-4 w-4 fill-current text-[#9C6644]" />
              <span>4.6/5 Guest Rating</span>
            </div>
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.15 }}
          className="relative"
        >
          <div className="relative mx-auto aspect-[4/5] max-w-xl overflow-hidden rounded-[2rem] shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1600&auto=format&fit=crop"
              alt="Levino Daman resort"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition-transform duration-1000 hover:scale-105"
            />

            {/* Image overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#281C13]/70 via-transparent to-transparent" />

            {/* Image text */}
            <div className="absolute bottom-7 left-7 right-7 text-white sm:bottom-9 sm:left-9">
              <p className="mb-2 text-[11px] uppercase tracking-[0.25em] text-white/75">
                Daman · India
              </p>

              <h2 className="font-serif-luxury text-3xl sm:text-4xl">
                Levino Meadows & Palms
              </h2>

              <p className="mt-2 max-w-md text-sm leading-6 text-white/80">
                A peaceful retreat designed for meaningful stays and
                memorable moments.
              </p>
            </div>
          </div>

          {/* Small decorative detail */}
          <div className="absolute -bottom-5 -left-5 hidden h-24 w-24 rounded-full border border-[#B98B68]/40 sm:block" />
        </motion.div>
      </div>
    </section>
  );
};