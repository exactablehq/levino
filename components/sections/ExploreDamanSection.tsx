"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Navigation } from "lucide-react";
import { ATTRACTIONS, Attraction } from "@/data/levinoData";

export const ExploreDamanSection: React.FC = () => {
  return (
    <section id="explore-daman" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#F5F4EE] scroll-mt-20">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="font-script-accent text-3xl text-[#9C6644] block">
            Explore Daman
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl text-[#281C13] font-medium">
            Discover the charm of Daman.
          </h2>
          <p className="text-sm sm:text-base text-[#6A472F] font-normal">
            From peaceful sandy shores to centuries-old Portuguese heritage and vibrant coastal
            cuisine, all situated minutes from your room.
          </p>
        </div>

        {/* Attractions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ATTRACTIONS.map((attraction: Attraction, index: number) => (
            <motion.div
              key={attraction.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className="bg-white rounded-2xl overflow-hidden border border-[#EDECE4] shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col group"
            >
              {/* Attraction Photo */}
              <div className="relative aspect-4/3 w-full overflow-hidden bg-[#EDECE4]">
                <Image
                  src={attraction.image}
                  alt={attraction.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <div className="absolute top-3 left-3 px-3 py-1 bg-white/90 backdrop-blur-md rounded-full text-xs font-semibold text-[#281C13] flex items-center gap-1.5 shadow-xs">
                  <Navigation className="w-3 h-3 text-[#9C6644]" />
                  <span>{attraction.distance}</span>
                </div>
              </div>

              {/* Attraction Text */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-3">
                <div className="space-y-1.5">
                  <h3 className="font-serif-luxury text-lg font-semibold text-[#281C13] group-hover:text-[#6A472F] transition-colors">
                    {attraction.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#6A472F] leading-relaxed pt-1">
                    {attraction.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
