"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const amenities = [
  {
    title: "Poolside Relaxation",
    description:
      "A refreshing swimming pool surrounded by greenery — perfect for relaxing afternoons and family fun.",
    image: "/poolside-relaxation.jpg",
  },
  {
    title: "Multi-Cuisine Restaurant",
    description:
      "Enjoy delicious vegetarian and non-vegetarian meals freshly prepared by our chefs.",
    image: "/multicuisine-restaurant.avif",
  },
  {
    title: "Conference & Event Spaces",
    description:
      "Modern facilities for corporate meetings, celebrations, and private events.",
    image: "/conference-events.webp",
  },
  {
    title: "Lush Green Lawns",
    description:
      "Open green spaces perfect for weddings, celebrations, and outdoor gatherings.",
    image: "/lush green lawns.avif",
  },
];

export function AmenitiesSection() {
  return (
    <section
      id="amenities"
      className="bg-[#F7F5EF] px-6 py-28 sm:px-10 lg:px-16 lg:py-36"
    >
      <div className="mx-auto max-w-6xl">

        {/* Elegant Heading */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mb-20"
        >
          <p className="mb-6 text-[10px] font-medium uppercase tracking-[0.45em] text-[#9A7955]">
            The Art of Staying
          </p>

          <h2 className="max-w-4xl font-serif-luxury text-[3.2rem] font-normal leading-[1.02] tracking-[-0.035em] text-[#29241F] sm:text-6xl lg:text-[5.5rem]">
            Thoughtfully designed
            <br />
            <span className="italic text-[#74675F]">
              for every moment.
            </span>
          </h2>

          <div className="mt-8 h-px w-20 bg-[#B9A58D]" />

          <p className="mt-7 max-w-xl text-[14px] leading-7 tracking-wide text-[#746B64]">
            From peaceful mornings by the pool to unforgettable celebrations,
            every detail at Levino is designed to make your stay feel
            effortless.
          </p>
        </motion.div>

        {/* Amenities */}
        <div className="grid gap-x-10 gap-y-20 md:grid-cols-2">
          {amenities.map((amenity, index) => (
            <motion.article
              key={amenity.title}
              initial={{ opacity: 0, y: 45 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.9,
                delay: index * 0.12,
              }}
              className="group"
            >
              {/* Image */}
              <div className="relative overflow-hidden bg-[#DED8CF]">
                <img
                  src={amenity.image}
                  alt={amenity.title}
                  className="h-[370px] w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.04] sm:h-[450px]"
                />

                {/* Soft image overlay */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-60 transition-opacity duration-700 group-hover:opacity-30" />

                {/* Number */}
                <div className="absolute left-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/50 bg-white/80 text-[10px] tracking-[0.15em] text-[#3A3028] backdrop-blur-md">
                  0{index + 1}
                </div>

                {/* Hover circle */}
                <div className="absolute bottom-5 right-5 flex h-12 w-12 translate-y-3 items-center justify-center rounded-full bg-white/90 opacity-0 shadow-lg backdrop-blur-md transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <ArrowUpRight className="h-4 w-4 text-[#40362F]" />
                </div>
              </div>

              {/* Text */}
              <div className="relative border-b border-[#D5CDC3] pb-8 pt-7">
                <div className="flex items-start justify-between gap-8">

                  <div>
                    <p className="mb-3 font-serif-luxury text-[13px] italic tracking-[0.08em] text-[#9A7955]">
                      Levino
                    </p>

                    <h3 className="font-serif-luxury text-[2rem] font-normal leading-[1.1] tracking-[-0.02em] text-[#29241F] sm:text-[2.4rem]">
                      {amenity.title}
                    </h3>

                    <p className="mt-4 max-w-md text-[13px] leading-7 tracking-wide text-[#746B64]">
                      {amenity.description}
                    </p>
                  </div>

                  <span className="mt-1 text-[11px] tracking-[0.2em] text-[#9A7955]">
                    0{index + 1}
                  </span>

                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Closing Statement */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="mt-24 border-t border-[#D5CDC3] pt-10"
        >
          <p className="font-serif-luxury text-3xl leading-tight tracking-[-0.02em] text-[#3A3028] sm:text-4xl">
            A stay designed around
            <span className="italic text-[#8A7867]"> you.</span>
          </p>
        </motion.div>

      </div>
    </section>
  );
}