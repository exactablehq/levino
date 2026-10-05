"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { SectionBadge } from "../ui/SectionBadge";

const features = [
  { icon: "📍", label: "Prime Location" },
  { icon: "🎉", label: "Ideal for Celebrations" },
  { icon: "🛌", label: "Comfortable Stays" },
  { icon: "🌴", label: "Natural Surroundings" },
  { icon: "✨", label: "Personalized Hospitality" },
];

const galleryImages = [
  "https://framerusercontent.com/images/7TZQFwcxx32uU2MMo8YvmT5Lb8.jpg",
  "https://framerusercontent.com/images/xYIvc4idBNTWCTMCmU4nep7fKg.jpg",
  "https://framerusercontent.com/images/9EU334TrB3M9FzWbaLc5xw9HQU.jpg",
  "https://framerusercontent.com/images/WLklufoflxXTSJcVcysZn47hvk.jpg",
  "https://framerusercontent.com/images/gT6rhgnj2vKLjMTLmGTGddghffU.jpg",
  "https://framerusercontent.com/images/YQGMpjyep3xUPAxdjgDks2yX6M.jpg",
  "https://framerusercontent.com/images/35NPGozrnsIxP4UuRCpZjn5sg.jpg",
  "https://framerusercontent.com/images/mmdhqft6QxjMHK6SGGShVkN14.jpg",
  "https://framerusercontent.com/images/lwHQuNr8ZYzamFCv3raR3sD6ocY.jpg",
  "https://framerusercontent.com/images/4nDBFupHPz9sjT3x8hJFoiYCqM8.jpg",
];

export function WhyChooseSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -400 : 400;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section id="features" className="py-20 md:py-28 bg-[#FBFBF7] overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        {/* Heading */}
        <div className="text-center mb-12">
          <SectionBadge>Why Levino?</SectionBadge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#281C13] mt-2">
            Why choose{" "}
            <span className="font-script text-4xl sm:text-5xl md:text-6xl text-[#9C6644] ml-1">
              Levino
            </span>
          </h2>
          <p className="text-sm md:text-base text-[#6A472F] max-w-xl mx-auto mt-3 font-sans">
            Where hospitality meets tranquility.
          </p>
        </div>

        {/* 5 Feature Capsule Pills */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-14 max-w-4xl mx-auto">
          {features.map((feat) => (
            <div
              key={feat.label}
              className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white border border-[#EDECE4] text-xs sm:text-sm font-medium text-[#281C13] shadow-2xs hover:border-[#DDB892] transition-colors"
            >
              <span className="text-base">{feat.icon}</span>
              <span>{feat.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 10-Item Photo Carousel Slider */}
      <div className="relative w-full max-w-[1440px] mx-auto px-4 sm:px-6">
        {/* Navigation arrow buttons */}
        <div className="flex justify-end gap-2 mb-4 px-6">
          <button
            onClick={() => scroll("left")}
            className="w-10 h-10 rounded-full bg-white border border-[#EDECE4] text-[#281C13] hover:bg-[#FBFBF7] flex items-center justify-center cursor-pointer shadow-xs"
            aria-label="Previous image"
          >
            ←
          </button>
          <button
            onClick={() => scroll("right")}
            className="w-10 h-10 rounded-full bg-white border border-[#EDECE4] text-[#281C13] hover:bg-[#FBFBF7] flex items-center justify-center cursor-pointer shadow-xs"
            aria-label="Next image"
          >
            →
          </button>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-6 scrollbar-none snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {galleryImages.map((src, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="relative shrink-0 w-[280px] sm:w-[360px] md:w-[420px] h-[260px] sm:h-[320px] rounded-[30px] overflow-hidden shadow-xs border border-[#EDECE4] snap-start"
            >
              <Image
                src={src}
                alt={`Levino Gallery image ${idx + 1}`}
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
                sizes="(min-width: 768px) 420px, 280px"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseSection;