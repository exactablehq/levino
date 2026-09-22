"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin, PartyPopper, BedDouble, Trees, HeartHandshake } from "lucide-react";
import { WHY_CHOOSE_ITEMS } from "@/data/levinoData";

const iconMap: Record<string, React.ReactNode> = {
  MapPin: <MapPin className="w-6 h-6 text-[#9C6644]" />,
  PartyPopper: <PartyPopper className="w-6 h-6 text-[#9C6644]" />,
  BedDouble: <BedDouble className="w-6 h-6 text-[#9C6644]" />,
  TreePine: <Trees className="w-6 h-6 text-[#9C6644]" />,
  HeartHandshake: <HeartHandshake className="w-6 h-6 text-[#9C6644]" />,
};

export const WhyChooseSection: React.FC = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="space-y-16">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="font-script-accent text-3xl text-[#9C6644] block">
            Why choose Levino?
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl text-[#281C13] font-medium">
            Where hospitality meets tranquility.
          </h2>
          <p className="text-sm sm:text-base text-[#6A472F] font-normal">
            Every aspect of Levino is designed around serenity, warmth, and seamless experiences.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_CHOOSE_ITEMS.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-8 rounded-3xl bg-white border border-[#EDECE4] shadow-xs hover:border-[#DDB892] transition-colors space-y-4"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#EDECE4]/60 flex items-center justify-center">
                {iconMap[item.icon] || <Trees className="w-6 h-6 text-[#9C6644]" />}
              </div>
              <h3 className="font-serif-luxury text-xl font-semibold text-[#281C13]">
                {item.title}
              </h3>
              <p className="text-sm text-[#6A472F] leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
