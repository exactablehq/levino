"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { SectionBadge } from "../ui/SectionBadge";

const amenities = [
  {
    title: "Poolside Relaxation",
    description:
      "A refreshing swimming pool surrounded by greenery — perfect for relaxing afternoons and family fun.",
    image: "https://framerusercontent.com/images/xYIvc4idBNTWCTMCmU4nep7fKg.jpg",
  },
  {
    title: "Multi-Cuisine Restaurant",
    description:
      "Enjoy delicious vegetarian and non-vegetarian meals freshly prepared by our chefs.",
    image: "https://framerusercontent.com/images/9EU334TrB3M9FzWbaLc5xw9HQU.jpg",
  },
  {
    title: "Conference & Event Spaces",
    description:
      "Modern facilities for corporate meetings, celebrations, and private events.",
    image: "https://framerusercontent.com/images/lwHQuNr8ZYzamFCv3raR3sD6ocY.jpg",
  },
  {
    title: "Lush Green Lawns",
    description:
      "Open green spaces perfect for weddings, celebrations, and outdoor gatherings.",
    image: "https://framerusercontent.com/images/t7t26YAdkSCutrDsmxNynR6U.jpeg",
  },
];

export function AmenitiesSection() {
  return (
    <section id="projects" className="py-20 md:py-28 px-6 md:px-10 bg-[#FBFBF7]">
      <div className="max-w-[1280px] mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-16 md:mb-20">
          <SectionBadge>Amenities</SectionBadge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#281C13] mt-2">
            Thoughtfully designed{" "}
            <span className="font-script text-4xl sm:text-5xl md:text-6xl text-[#9C6644] ml-1">
              Amenities.
            </span>
          </h2>
          <p className="text-sm md:text-base text-[#6A472F] max-w-xl mx-auto mt-4 font-sans">
            From peaceful mornings by the pool to unforgettable celebrations, every detail is designed for comfort.
          </p>
        </div>

        {/* 2x2 Grid of Amenity Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {amenities.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: idx * 0.1 }}
              className="bg-white p-6 sm:p-8 rounded-[30px] border border-[#EDECE4] shadow-xs flex flex-col justify-between group hover:shadow-md transition-shadow"
            >
              {/* Image Container with 24px inner radius */}
              <div className="relative w-full h-[280px] sm:h-[340px] rounded-[24px] overflow-hidden mb-6">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(min-width: 768px) 50vw, 100vw"
                />
              </div>

              {/* Title & Description */}
              <div>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#281C13] mb-3">
                  {item.title}
                </h3>
                <p className="text-sm sm:text-base text-[#6A472F] leading-relaxed font-sans">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AmenitiesSection;