"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Star, CheckCircle, ArrowUpRight } from "lucide-react";
import { PROPERTIES, Property } from "@/data/levinoData";
import { Button } from "../ui/Button";

interface DestinationsSectionProps {
  onOpenBooking: (destination?: string) => void;
}

export const DestinationsSection: React.FC<DestinationsSectionProps> = ({
  onOpenBooking,
}) => {
  return (
    <section
      id="destinations"
      className="bg-white px-5 py-24 sm:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-[#9C6644]" />
            <span className="text-xs font-medium uppercase tracking-[0.25em] text-[#8A6249]">
              Stay with Levino
            </span>
            <span className="h-px w-10 bg-[#9C6644]" />
          </div>

          <h2 className="font-serif-luxury text-4xl font-medium leading-tight text-[#281C13] sm:text-5xl">
            Two destinations.
            <br />
            <span className="italic text-[#7A5238]">
              One memorable experience.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[#6A5A4E]">
            Discover two distinctive Levino properties in Daman, each created
            for a different kind of escape, celebration, and stay.
          </p>
        </div>

        {/* Property Cards */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          {PROPERTIES.map((property: Property, index: number) => {
            return (
              <motion.article
                key={property.id}
                id={property.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.12,
                }}
                className="group overflow-hidden rounded-[2rem] border border-[#E5E0D8] bg-[#FAF9F6] shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl scroll-mt-28"
              >

                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={property.image}
                    alt={property.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  />

                  {/* Dark image gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#211710]/75 via-transparent to-transparent" />

                  {/* Property badge */}
                  <div className="absolute left-5 top-5">
                    <span className="rounded-full bg-white/90 px-4 py-2 text-[11px] font-semibold uppercase tracking-wider text-[#4B3425] shadow-sm backdrop-blur-sm">
                      {property.badge}
                    </span>
                  </div>

                  {/* Rating */}
                  <div className="absolute right-5 top-5 flex items-center gap-1.5 rounded-full bg-[#281C13]/80 px-3 py-2 text-xs text-white backdrop-blur-md">
                    <Star className="h-3.5 w-3.5 fill-current text-[#DDB892]" />
                    <span>
                      {property.rating} · {property.reviewCount} reviews
                    </span>
                  </div>

                  {/* Image title */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <p className="mb-2 text-[10px] uppercase tracking-[0.25em] text-white/70">
                      Levino Daman
                    </p>

                    <h3 className="font-serif-luxury text-3xl font-medium text-white sm:text-4xl">
                      {property.name}
                    </h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-7 sm:p-8">
                  <p className="text-[15px] leading-7 text-[#6A5A4E]">
                    {property.description}
                  </p>

                  {/* Highlights */}
                  <div className="mt-7 border-t border-[#E5E0D8] pt-6">
                    <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#8A6249]">
                      Highlights
                    </p>

                    <ul className="grid gap-3 sm:grid-cols-2">
                      {property.highlights.map((highlight, hIdx) => (
                        <li
                          key={hIdx}
                          className="flex items-start gap-2.5 text-sm text-[#4F4036]"
                        >
                          <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-[#9C6644]" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Bottom */}
                  <div className="mt-7 flex flex-col gap-5 border-t border-[#E5E0D8] pt-6 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <p className="text-sm font-medium text-[#281C13]">
                        {property.rooms} Rooms
                      </p>
                      <p className="mt-1 text-xs text-[#7A6A5E]">
                        {property.capacity}
                      </p>
                    </div>

                    <Button
                      variant="primary"
                      size="md"
                      onClick={() => onOpenBooking(property.name)}
                      icon={<ArrowUpRight className="h-4 w-4" />}
                      className="w-full sm:w-auto"
                    >
                      Explore
                    </Button>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
