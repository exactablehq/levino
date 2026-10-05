"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { SectionBadge } from "../ui/SectionBadge";

export function ExploreDamanSection() {
  const secondarySpots = [
    {
      title: "Moti Daman Fort",
      image: "https://framerusercontent.com/images/2iiM4sUs2emW9vuuzzq1O5EC0k.png",
      description:
        "Explore the historic Portuguese fort that stands as one of Daman’s most iconic landmarks. With ancient churches, scenic streets, and centuries-old architecture, Moti Daman offers a unique cultural experience.",
    },
    {
      title: "Jampore Beach",
      image: "https://framerusercontent.com/images/2jGo1SRDVf6HK957w4k4qXJr4lM.png",
      description:
        "Located just a short drive away, Jampore Beach is perfect for relaxing by the sea, horse riding along the shore, and enjoying Daman’s peaceful coastal atmosphere.",
    },
    {
      title: "Local Food & Markets",
      image: "https://framerusercontent.com/images/ABm33CvoEgl12YUX7U4hpd1giq8.png",
      description:
        "From fresh seafood to street-side delicacies and local markets, Daman offers plenty of culinary and cultural experiences for visitors to explore.",
    },
  ];

  return (
    <section id="blogs" className="py-20 md:py-28 px-6 md:px-10 bg-[#FBFBF7]">
      <div className="max-w-[1280px] mx-auto">
        {/* Heading */}
        <div className="text-center mb-16 md:mb-20">
          <SectionBadge>Things to Do</SectionBadge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#281C13] mt-2">
            Explore{" "}
            <span className="font-script text-4xl sm:text-5xl md:text-6xl text-[#9C6644] ml-1">
              Daman
            </span>
          </h2>
          <p className="text-sm md:text-base text-[#6A472F] max-w-xl mx-auto mt-4 font-sans">
            Discover coastal charm, heritage fortresses, and local treasures just minutes from your stay.
          </p>
        </div>

        {/* 1 Wide Top Feature Card: Devka Beach */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8 }}
          className="bg-white p-6 sm:p-8 rounded-[30px] border border-[#EDECE4] shadow-xs mb-8 md:mb-10"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="relative w-full h-[300px] sm:h-[400px] lg:col-span-7 rounded-[24px] overflow-hidden">
              <Image
                src="https://framerusercontent.com/images/iLcDSoLzDcAwKeDrT7bNfGVAM.jpg"
                alt="Devka Beach"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
                sizes="(min-width: 1024px) 60vw, 100vw"
              />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-semibold text-[#281C13]">
                5 Min from Levino
              </div>
            </div>

            <div className="lg:col-span-5 p-2 sm:p-4">
              <p className="font-serif italic text-base text-[#7F5539] mb-2">Coastal Attraction</p>
              <h3 className="font-serif text-3xl sm:text-4xl text-[#281C13] mb-4">Devka Beach</h3>
              <p className="text-sm sm:text-base text-[#6A472F] leading-relaxed font-sans mb-6">
                Just a short 5-minute walk from Levino, Devka Beach is one of Daman’s most popular coastal spots. Enjoy peaceful morning walks, stunning sunsets, and the refreshing sea breeze that makes Daman a perfect weekend getaway.
              </p>
            </div>
          </div>
        </motion.div>

        {/* 3 Vertical Secondary Spot Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {secondarySpots.map((spot, idx) => (
            <motion.div
              key={spot.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: idx * 0.1 }}
              className="bg-white p-6 rounded-[30px] border border-[#EDECE4] shadow-xs flex flex-col justify-between group hover:shadow-md transition-shadow"
            >
              <div>
                <div className="relative w-full h-[220px] rounded-[24px] overflow-hidden mb-6">
                  <Image
                    src={spot.image}
                    alt={spot.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(min-width: 768px) 33vw, 100vw"
                  />
                </div>

                <h3 className="font-serif text-2xl text-[#281C13] mb-3">
                  {spot.title}
                </h3>
                <p className="text-sm text-[#6A472F] leading-relaxed font-sans">
                  {spot.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ExploreDamanSection;