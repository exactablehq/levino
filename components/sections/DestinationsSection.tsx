"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Star } from "lucide-react";
import { PROPERTIES } from "@/data/levinoData";

interface DestinationsSectionProps {
  onOpenBooking: (destination?: string) => void;
}

export const DestinationsSection: React.FC<DestinationsSectionProps> = ({
  onOpenBooking,
}) => {
  return (
    <section className="bg-[#F7F5EF] px-6 py-24 sm:px-10 lg:px-16 lg:py-32">

      {/* Heading */}
      <div className="mx-auto mb-16 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Small label */}
          <p className="mb-5 text-[11px] uppercase tracking-[0.35em] text-[#8A7867]">
            Our Destinations
          </p>

          {/* BIG heading */}
          <h2 className="max-w-4xl font-serif-luxury text-5xl font-normal leading-[1.05] tracking-[-0.02em] text-[#2F2A26] sm:text-6xl lg:text-7xl">
            The Levino Experience
          </h2>

          {/* SMALL description */}
          <p className="mt-6 max-w-2xl text-sm leading-6 tracking-wide text-[#746B64] sm:text-base">
            Two destinations, distinct in character, united by timeless
            hospitality and refined luxury.
          </p>
        </motion.div>
      </div>

      {/* Destination Cards */}
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2">
        {PROPERTIES.map((property, index) => (
          <motion.article
            key={property.id}
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{
              duration: 0.8,
              delay: index * 0.12,
            }}
            className="group"
          >
            {/* Image */}
            <div className="relative overflow-hidden">
              <img
                src={property.image}
                alt={property.name}
                className="h-[430px] w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.025] sm:h-[520px]"
              />

              {/* Rating */}
              <div className="absolute left-5 top-5 flex items-center gap-2 bg-white/90 px-4 py-2 text-xs tracking-wide text-[#2F2A26] backdrop-blur-sm">
                <Star className="h-3.5 w-3.5 fill-current" />
                <span>
                  {property.rating} ({property.reviewCount})
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="pt-8">

              {/* Elegant subtitle */}
              <p className="font-serif-luxury text-[17px] italic tracking-wide text-[#8A7867]">
                {property.badge}
              </p>

              {/* Property name */}
              <h3 className="mt-2 font-serif-luxury text-4xl font-normal leading-tight tracking-[-0.02em] text-[#2F2A26] sm:text-5xl">
                {property.name}
              </h3>

              {/* Description */}
              <p className="mt-5 max-w-lg text-[14px] leading-7 text-[#746B64] sm:text-[15px]">
                {property.description}
              </p>

              {/* Explore */}
              <button
                onClick={() => onOpenBooking(property.name)}
                className="group/button mt-7 inline-flex items-center gap-3 border-b border-[#2F2A26]/70 pb-2 text-[13px] tracking-wide text-[#2F2A26] transition-all duration-300 hover:border-[#8A7867] hover:text-[#8A7867]"
              >
                Explore{" "}
                {property.name === "Levino Meadows" ? "Meadows" : "Palms"}

                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover/button:-translate-y-1 group-hover/button:translate-x-1" />
              </button>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default DestinationsSection;