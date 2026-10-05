"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { SectionBadge } from "../ui/SectionBadge";

const reviews = [
  {
    id: "review-1",
    image: "https://framerusercontent.com/images/gT6rhgnj2vKLjMTLmGTGddghffU.jpg",
    avatar: "https://framerusercontent.com/images/nLpoIJfOldMKVpCuzCqOhSsDzZ0.png",
    name: "Rahul Shah",
    city: "Mumbai",
    text: "Levino Palms was the perfect weekend escape. The rooms were comfortable, the pool was great, and the staff made us feel right at home.",
    reversed: false,
  },
  {
    id: "review-2",
    image: "https://framerusercontent.com/images/t7t26YAdkSCutrDsmxNynR6U.jpeg",
    avatar: "https://framerusercontent.com/images/QohO2VX1aVuV1QZjewsfnLdk.png",
    name: "Neha & Arjun",
    city: "Surat",
    text: "We hosted our wedding at Levino Meadows and it was magical. The lawns are huge and beautifully maintained.",
    reversed: true,
  },
  {
    id: "review-3",
    image: "https://framerusercontent.com/images/WLklufoflxXTSJcVcysZn47hvk.jpg",
    avatar: "https://framerusercontent.com/images/nLpoIJfOldMKVpCuzCqOhSsDzZ0.png",
    name: "Mehul Patel",
    city: "Ahmedabad",
    text: "Just minutes from Devka Beach but far enough to feel peaceful. The food was excellent and the staff was very helpful.",
    reversed: false,
  },
];

export function ReviewsSection() {
  return (
    <section id="testimonials" className="py-20 md:py-28 px-6 md:px-10 bg-[#FBFBF7]">
      <div className="max-w-[1280px] mx-auto">
        {/* Heading */}
        <div className="text-center mb-16 md:mb-20">
          <SectionBadge>Reviews</SectionBadge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#281C13] mt-2">
            What our guests{" "}
            <span className="font-script text-4xl sm:text-5xl md:text-6xl text-[#9C6644] ml-1">
              say
            </span>
          </h2>
          <p className="text-sm md:text-base text-[#6A472F] max-w-xl mx-auto mt-4 font-sans">
            Hear what travelers and families have to say about their stay at Levino.
          </p>
        </div>

        {/* Review Cards Stack */}
        <div className="space-y-12 md:space-y-16">
          {reviews.map((rev, idx) => (
            <motion.div
              key={rev.id}
              id={rev.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className="bg-white p-6 sm:p-8 rounded-[30px] border border-[#EDECE4] shadow-xs"
            >
              <div
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${
                  rev.reversed ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Image Column */}
                <div
                  className={`relative w-full h-[280px] sm:h-[360px] rounded-[24px] overflow-hidden ${
                    rev.reversed ? "lg:col-span-6 lg:order-2" : "lg:col-span-6"
                  }`}
                >
                  <Image
                    src={rev.image}
                    alt={`${rev.name} review photo`}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700"
                    sizes="(min-width: 1024px) 50vw, 100vw"
                  />
                </div>

                {/* Content Column */}
                <div
                  className={`flex flex-col justify-between p-6 sm:p-8 bg-[#FBFBF7] rounded-[24px] border border-[#EDECE4] h-full ${
                    rev.reversed ? "lg:col-span-6 lg:order-1" : "lg:col-span-6"
                  }`}
                >
                  {/* Review Text */}
                  <p className="font-serif text-lg sm:text-xl md:text-2xl text-[#281C13] leading-relaxed mb-8 italic">
                    "{rev.text}"
                  </p>

                  {/* Client Info with Avatar */}
                  <div className="flex items-center gap-4 pt-4 border-t border-[#EDECE4]">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0 shadow-xs border border-white">
                      <Image
                        src={rev.avatar}
                        alt={rev.name}
                        fill
                        className="object-cover"
                        sizes="48px"
                      />
                    </div>
                    <div>
                      <h4 className="font-serif font-bold text-base text-[#9C6644]">
                        {rev.name}
                      </h4>
                      <span className="inline-block mt-0.5 px-2.5 py-0.5 rounded-[6px] bg-[#EDECE4] text-xs text-[#281C13] font-sans font-medium">
                        {rev.city}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ReviewsSection;