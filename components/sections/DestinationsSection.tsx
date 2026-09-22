"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Star, CheckCircle, ArrowRight } from "lucide-react";
import { PROPERTIES, Property } from "@/data/levinoData";
import { Badge } from "../ui/Badge";
import { Button } from "../ui/Button";

interface DestinationsSectionProps {
  onOpenBooking: (destination?: string) => void;
}

export const DestinationsSection: React.FC<DestinationsSectionProps> = ({ onOpenBooking }) => {
  return (
    <section id="destinations" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-20">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
        <span className="font-script-accent text-3xl text-[#9C6644] block">
          The Levino Experience
        </span>
        <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl text-[#281C13] font-medium leading-tight">
          Two destinations, distinct in character, united by timeless hospitality.
        </h2>
        <p className="text-sm sm:text-base text-[#6A472F] font-normal leading-relaxed pt-2">
          Whether you are seeking an idyllic beachside family retreat or orchestrating a grand
          fairytale wedding, our properties offer tailored sanctuaries for unforgettable moments.
        </p>
      </div>

      {/* Grid of Properties */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {PROPERTIES.map((property: Property, index: number) => {
          const isMeadows = property.id === "meadows";
          return (
            <motion.div
              key={property.id}
              id={property.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="luxury-card rounded-3xl overflow-hidden flex flex-col group scroll-mt-28"
            >
              {/* Property Image Showcase */}
              <div className="relative aspect-16/10 w-full overflow-hidden bg-[#EDECE4]">
                <Image
                  src={property.image}
                  alt={property.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#281C13]/60 via-transparent to-transparent" />

                {/* Top Badges */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                  <Badge variant="subtle" className="font-semibold shadow-xs">
                    {property.badge}
                  </Badge>

                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#281C13]/85 text-[#FBFBF7] backdrop-blur-md border border-white/20">
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    <span>{property.rating} ({property.reviewCount})</span>
                  </span>
                </div>

                {/* Image Bottom Title */}
                <div className="absolute bottom-4 left-6 right-6 text-white">
                  <h3 className="font-serif-luxury text-2xl sm:text-3xl font-medium">
                    {property.name}
                  </h3>
                </div>
              </div>

              {/* Property Content Details */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <p className="text-sm sm:text-base text-[#6A472F] leading-relaxed">
                    {property.description}
                  </p>

                  {/* Highlights List */}
                  <div className="space-y-2.5 pt-2 border-t border-[#EDECE4]">
                    <p className="text-xs uppercase tracking-wider font-semibold text-[#281C13]">
                      Property Highlights:
                    </p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-[#352318]">
                      {property.highlights.map((highlight, hIdx) => (
                        <li key={hIdx} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-[#9C6644] shrink-0 mt-0.5" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Footer Actions */}
                <div className="pt-4 border-t border-[#EDECE4] flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-2 text-xs text-[#7F5539]">
                    <span className="font-medium text-[#281C13]">{property.rooms} Rooms</span>
                    <span>•</span>
                    <span>{property.capacity}</span>
                  </div>

                  <Button
                    variant={isMeadows ? "primary" : "secondary"}
                    size="md"
                    onClick={() => onOpenBooking(property.name)}
                    icon={<ArrowRight className="w-4 h-4" />}
                    className="w-full sm:w-auto"
                  >
                    Explore {property.name.replace("Levino ", "")}
                  </Button>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
