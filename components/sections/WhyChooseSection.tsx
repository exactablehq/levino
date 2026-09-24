"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  PartyPopper,
  BedDouble,
  TreePine,
  HeartHandshake,
  ArrowUpRight,
} from "lucide-react";

const reasons = [
  {
    number: "01",
    title: "Prime Location",
    description:
      "Just a short walk from Devka Beach, offering easy access to the coast while keeping you surrounded by peace and privacy.",
    icon: MapPin,
  },
  {
    number: "02",
    title: "Ideal for Celebrations",
    description:
      "Spacious lawns and elegant event spaces create the perfect setting for weddings, celebrations, and memorable gatherings.",
    icon: PartyPopper,
  },
  {
    number: "03",
    title: "Comfortable Stays",
    description:
      "Thoughtfully designed rooms across Levino Palms and Levino Meadows, created for restful stays and everyday comfort.",
    icon: BedDouble,
  },
  {
    number: "04",
    title: "Natural Surroundings",
    description:
      "Lush greenery, open skies, palm trees, and peaceful outdoor spaces bring a relaxed coastal feeling to every stay.",
    icon: TreePine,
  },
  {
    number: "05",
    title: "Personalized Hospitality",
    description:
      "Warm and attentive service designed to make every guest feel comfortable, welcomed, and truly at home.",
    icon: HeartHandshake,
  },
];

export function WhyChooseSection() {
  return (
    <section
      id="why-choose"
      className="overflow-hidden bg-[#D8C9B8] px-6 py-24 text-[#302820] sm:px-10 lg:px-16 lg:py-32"
    >
      <div className="mx-auto max-w-6xl">

        {/* Small heading area */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="mb-16 max-w-2xl"
        >
          <p className="mb-5 text-[10px] uppercase tracking-[0.4em] text-[#8A6F55]">
            Why Levino
          </p>

          <h2 className="font-serif-luxury text-4xl font-normal leading-[1.1] tracking-[-0.02em] text-[#302820] sm:text-5xl">
            More than a stay,
            <br />
            <span className="italic text-[#756454]">
              a place to remember.
            </span>
          </h2>

          <div className="mt-7 h-px w-16 bg-[#9D846C]" />

          <p className="mt-6 max-w-lg text-[13px] leading-7 tracking-wide text-[#66594D]">
            Thoughtful spaces, beautiful surroundings, and warm hospitality
            come together to create the Levino experience.
          </p>
        </motion.div>

        {/* Image + text */}
        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="group relative overflow-hidden"
          >
            <div className="relative h-[430px] overflow-hidden sm:h-[520px]">

              <img
                src="/why levino.avif"
                alt="Why choose Levino"
                className="h-full w-full object-cover transition-transform duration-[1600ms] ease-out group-hover:scale-[1.035]"
              />

              {/* Soft overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

              {/* Fine inner border */}
              <div className="pointer-events-none absolute inset-5 border border-white/35 transition-all duration-700 group-hover:inset-7" />

              {/* Image caption */}
              <div className="absolute bottom-7 left-7">
                <p className="text-[9px] uppercase tracking-[0.4em] text-white/70">
                  The Levino Experience
                </p>

                <p className="mt-2 font-serif-luxury text-2xl italic text-white">
                  Stay. Celebrate. Remember.
                </p>
              </div>

              {/* Hover button */}
              <div className="absolute right-7 top-7 flex h-11 w-11 items-center justify-center rounded-full border border-white/40 bg-white/10 text-white opacity-0 backdrop-blur-md transition-all duration-500 group-hover:opacity-100">
                <ArrowUpRight className="h-4 w-4" />
              </div>
            </div>
          </motion.div>

          {/* Intro copy */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="lg:pl-5"
          >
            <p className="font-serif-luxury text-2xl leading-tight text-[#302820] sm:text-3xl">
              Thoughtful spaces.
              <br />
              <span className="italic text-[#806A55]">
                Genuine hospitality.
              </span>
            </p>

            <p className="mt-6 max-w-md text-[13px] leading-7 text-[#66594D]">
              Whether you are visiting for a peaceful getaway, celebrating a
              special occasion, or gathering with family and friends, Levino
              is designed around the moments that matter.
            </p>

            <div className="mt-8 h-px w-full bg-[#B9A995]" />

            <p className="mt-5 text-[9px] uppercase tracking-[0.35em] text-[#8A6F55]">
              What makes us different
            </p>
          </motion.div>
        </div>

        {/* Reasons */}
        <div className="mt-20 border-t border-[#B9A995]">

          {reasons.map((reason, index) => {
            const Icon = reason.icon;

            return (
              <motion.div
                key={reason.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.07,
                }}
                className="group relative grid gap-5 border-b border-[#B9A995] py-8 transition-all duration-500 md:grid-cols-[65px_1fr_1.4fr_50px] md:items-center md:gap-8"
              >
                {/* Hover background */}
                <div className="pointer-events-none absolute inset-x-0 inset-y-1 bg-white/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                {/* Number */}
                <span className="relative z-10 text-[10px] tracking-[0.25em] text-[#8A6F55]">
                  {reason.number}
                </span>

                {/* Title */}
                <h3 className="relative z-10 font-serif-luxury text-2xl font-normal leading-tight tracking-[-0.015em] text-[#302820] transition-transform duration-500 group-hover:translate-x-1 sm:text-3xl">
                  {reason.title}
                </h3>

                {/* Description */}
                <p className="relative z-10 max-w-xl text-[12px] leading-6 tracking-wide text-[#66594D]">
                  {reason.description}
                </p>

                {/* Icon */}
                <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border border-[#9D846C] text-[#806A55] transition-all duration-500 group-hover:bg-[#806A55] group-hover:text-[#F7F1E9] group-hover:rotate-6">
                  <Icon
                    className="h-4 w-4"
                    strokeWidth={1.3}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom statement */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mt-20 border-t border-[#B9A995] pt-8"
        >
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">

            <p className="font-serif-luxury text-2xl leading-tight text-[#302820] sm:text-3xl">
              Everything you need,
              <br />
              <span className="italic text-[#806A55]">
                nothing you don't.
              </span>
            </p>

            <div className="flex items-center gap-3">
              <span className="h-px w-12 bg-[#9D846C]" />
              <span className="font-serif-luxury text-sm italic text-[#806A55]">
                Levino Daman
              </span>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}