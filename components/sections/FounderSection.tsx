"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { SectionBadge } from "../ui/SectionBadge";

export function FounderSection() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section id="vision" className="py-20 md:py-28 px-6 md:px-10 bg-[#FBFBF7]">
      <div className="max-w-[1280px] mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-14 md:mb-16">
          <SectionBadge>A Word from Our Founder</SectionBadge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#281C13] mt-2">
            A place designed for{" "}
            <span className="font-script text-4xl sm:text-5xl md:text-6xl text-[#9C6644] ml-1">
              Memories
            </span>
          </h2>
          <p className="text-sm md:text-base text-[#6A472F] max-w-2xl mx-auto mt-4 font-sans leading-relaxed">
            At Levino, we believe that every stay should feel effortless and every celebration unforgettable. Our spaces are designed to bring people together — whether it’s families enjoying a quiet holiday, couples celebrating their wedding, or companies hosting meaningful gatherings. Levino is not just a place to stay — it’s a place where moments turn into memories.
          </p>
        </div>

        {/* Video Card Container */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto bg-white p-4 sm:p-6 md:p-8 rounded-[30px] shadow-lg border border-[#EDECE4]"
        >
          <div className="relative w-full aspect-video rounded-[24px] overflow-hidden bg-black shadow-inner">
            {!isPlaying ? (
              <div
                className="relative w-full h-full cursor-pointer group"
                onClick={() => setIsPlaying(true)}
              >
                <Image
                  src="https://i.ytimg.com/vi_webp/gn3Gh-l8T2s/maxresdefault.webp"
                  alt="A Word from Our Founder"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(min-width: 1024px) 896px, 100vw"
                />
                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-black/25 group-hover:bg-black/15 transition-colors" />

                {/* YouTube Play Icon Pill */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-12 bg-[#212121]/80 group-hover:bg-[#E30016] rounded-xl flex items-center justify-center transition-colors shadow-lg">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            ) : (
              <iframe
                src="https://www.youtube.com/embed/gn3Gh-l8T2s?autoplay=1&rel=0&modestbranding=1"
                title="Founder's Word - Levino"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full border-0"
              />
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default FounderSection;