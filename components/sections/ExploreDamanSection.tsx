"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const destinations = [
  {
    title: "Devka Beach",
    description:
      "Just a short 5-minute walk from Levino, Devka Beach is one of Daman’s most popular coastal spots. Enjoy peaceful morning walks, stunning sunsets, and the refreshing sea breeze that makes Daman a perfect weekend getaway.",
    image: "/devka beach.webp",
  },
  {
    title: "Moti Daman Fort",
    description:
      "Explore the historic Portuguese fort that stands as one of Daman’s most iconic landmarks. With ancient churches, scenic streets, and centuries-old architecture, Moti Daman offers a unique cultural experience.",
    image: "/moti-daman.webp",
  },
  {
    title: "Jampore Beach",
    description:
      "Located just a short drive away, Jampore Beach is perfect for relaxing by the sea, horse riding along the shore, and enjoying Daman’s peaceful coastal atmosphere.",
    image: "/jampore-beach.webp",
  },
  {
    title: "Local Food & Markets",
    description:
      "From fresh seafood to street-side delicacies and local markets, Daman offers plenty of culinary and cultural experiences for visitors to explore.",
    image: "/local market.jpeg",
  },
];

export function ExploreDamanSection() {
  return (
    <section
      id="explore"
      className="overflow-hidden bg-[#F7F5EF] px-6 py-24 text-[#2E2924] sm:px-10 lg:px-16 lg:py-32"
    >
      <div className="mx-auto max-w-6xl">

        {/* SECTION INTRO */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="mb-20 max-w-3xl"
        >
          <p className="mb-6 text-[10px] uppercase tracking-[0.42em] text-[#8D7864]">
            Explore
          </p>

          <h2 className="font-serif-luxury text-5xl font-normal leading-[0.95] tracking-[-0.035em] sm:text-6xl lg:text-[5.2rem]">
            Daman
          </h2>

          <p className="mt-7 max-w-2xl text-[13px] leading-7 tracking-wide text-[#756B63] sm:text-sm">
            Discover the charm of Daman — from peaceful beaches to historic
            forts and vibrant local culture, all just minutes away from Levino.
          </p>
        </motion.div>

        {/* DESTINATIONS */}
        <div className="space-y-20 lg:space-y-28">

          {destinations.map((destination, index) => (
            <motion.article
              key={destination.title}
              initial={{ opacity: 0, y: 45 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.9,
                delay: index * 0.08,
              }}
              className="group"
            >
              <div
                className={`grid items-center gap-8 lg:grid-cols-[1.35fr_0.65fr] lg:gap-16 ${index % 2 !== 0
                    ? "lg:grid-cols-[0.65fr_1.35fr]"
                    : ""
                  }`}
              >

                {/* IMAGE */}
                <div
                  className={`relative overflow-hidden ${index % 2 !== 0 ? "lg:order-2" : ""
                    }`}
                >
                  <div className="relative h-[360px] overflow-hidden sm:h-[460px] lg:h-[500px]">

                    <img
                      src={destination.image}
                      alt={destination.title}
                      className="h-full w-full object-cover transition-transform duration-[1600ms] ease-out group-hover:scale-[1.035]"
                    />

                    {/* subtle overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent" />

                    {/* number */}
                    <div className="absolute left-6 top-6 flex h-10 w-10 items-center justify-center rounded-full border border-white/50 bg-white/15 text-[10px] tracking-[0.15em] text-white backdrop-blur-md">
                      0{index + 1}
                    </div>

                    {/* hover button */}
                    <div className="absolute bottom-6 right-6 flex h-12 w-12 translate-y-3 items-center justify-center rounded-full bg-white/90 text-[#40362F] opacity-0 shadow-lg transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                      <ArrowUpRight className="h-4 w-4" />
                    </div>
                  </div>
                </div>

                {/* TEXT */}
                <div
                  className={`${index % 2 !== 0 ? "lg:order-1" : ""
                    }`}
                >
                  <div className="flex items-center gap-4">
                    <span className="text-[9px] uppercase tracking-[0.35em] text-[#9A806A]">
                      0{index + 1}
                    </span>

                    <span className="h-px w-10 bg-[#B9A895]" />
                  </div>

                  <h3 className="mt-7 font-serif-luxury text-4xl font-normal leading-[1.05] tracking-[-0.025em] text-[#302A25] sm:text-5xl">
                    {destination.title}
                  </h3>

                  <p className="mt-6 max-w-md text-[13px] leading-7 tracking-wide text-[#756B63]">
                    {destination.description}
                  </p>

                  <div className="mt-8">
                    <span className="inline-flex items-center gap-3 border-b border-[#8D7864]/60 pb-2 text-[10px] uppercase tracking-[0.25em] text-[#6F5E4E] transition-all duration-300 group-hover:border-[#6F5E4E]">
                      Discover
                      <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
                    </span>
                  </div>
                </div>

              </div>
            </motion.article>
          ))}

        </div>

      </div>
    </section>
  );
}

export default ExploreDamanSection;