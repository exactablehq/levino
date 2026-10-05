"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { CtaButton } from "../ui/CtaButton";
import { SectionBadge } from "../ui/SectionBadge";

interface DestinationsSectionProps {
  onOpenBooking?: (destination?: string) => void;
}

export const DestinationsSection: React.FC<DestinationsSectionProps> = ({
  onOpenBooking,
}) => {
  const destinations = [
    {
      id: "meadows",
      name: "Levino Meadows",
      subtitle: "Elevated Indulgence",
      description:
        "A sanctuary of grandeur and refinement. Designed for lavish stays, destination weddings, and distinguished celebrations.",
      image: "https://framerusercontent.com/images/92LbUTqFBmt5LRD9Cdel5mRhVw.jpeg",
      rating: "⭐️ 4.6/5 (493)",
      bgColor: "bg-[#E6CCB2]",
      buttonText: "Explore Meadows",
      videoUrl: "https://youtu.be/R3QNfc2khbE",
    },
    {
      id: "palms",
      name: "Levino Palms",
      subtitle: "Understated Luxury",
      description:
        "A homely retreat where open green spaces blend with comfort. Perfectly suited for relaxing family getaways and intimate gatherings.",
      image: "https://framerusercontent.com/images/35NPGozrnsIxP4UuRCpZjn5sg.jpg",
      rating: "⭐️ 4.5/5 (578)",
      bgColor: "bg-white",
      buttonText: "Explore Palms",
      videoUrl: "https://youtu.be/CmA0vMOKOVw",
    },
  ];

  return (
    <section id="services" className="py-20 md:py-28 px-6 md:px-10 bg-[#FBFBF7]">
      <div className="max-w-[1280px] mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-16 md:mb-20">
          <SectionBadge>Our Destinations</SectionBadge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#281C13] mt-2">
            The Levino{" "}
            <span className="font-script text-4xl sm:text-5xl md:text-6xl text-[#9C6644] ml-1">
              Experience
            </span>
          </h2>
          <p className="text-sm md:text-base text-[#6A472F] max-w-xl mx-auto mt-4 font-sans">
            Two distinct retreats crafted with timeless elegance, nestled near Devka Beach, Daman.
          </p>
        </div>

        {/* 2-Column Destination Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10">
          {destinations.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, delay: idx * 0.15 }}
              className={`p-6 sm:p-8 rounded-[30px] shadow-sm border border-[#EDECE4] flex flex-col justify-between ${item.bgColor}`}
            >
              <div>
                {/* Image Container with 24px inner radius and Rating Badge */}
                <div className="relative w-full h-[320px] sm:h-[400px] rounded-[24px] overflow-hidden mb-8 shadow-xs">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                    sizes="(min-width: 1024px) 50vw, 100vw"
                  />
                  {/* Rating Badge */}
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-semibold text-[#281C13] shadow-xs">
                    {item.rating}
                  </div>
                </div>

                {/* Subtitle & Title */}
                <p className="font-serif italic text-base sm:text-lg text-[#7F5539] mb-1">
                  {item.subtitle}
                </p>
                <h3 className="font-serif text-3xl sm:text-4xl text-[#281C13] mb-4">
                  {item.name}
                </h3>

                {/* Description */}
                <p className="text-sm sm:text-base text-[#6A472F] leading-relaxed mb-8 font-sans">
                  {item.description}
                </p>
              </div>

              {/* Card Actions */}
              <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-[#281C13]/10">
                <CtaButton
                  href={item.videoUrl}
                  external
                  variant="dark"
                >
                  {item.buttonText}
                </CtaButton>

                {onOpenBooking && (
                  <button
                    onClick={() => onOpenBooking(item.name)}
                    className="px-5 py-3 rounded-full text-xs uppercase tracking-wider font-semibold text-[#281C13] bg-black/5 hover:bg-black/10 transition-colors cursor-pointer"
                  >
                    Reserve Now
                  </button>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DestinationsSection;