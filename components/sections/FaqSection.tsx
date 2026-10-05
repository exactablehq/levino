"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { SectionBadge } from "../ui/SectionBadge";

const faqs = [
  {
    question: "Where is Levino located?",
    answer:
      "Levino is located in Daman, just a 5-minute walk from Devka Beach, making it easily accessible while offering a peaceful environment.",
  },
  {
    question: "What accommodation options are available?",
    answer:
      "Levino Palms offers 22 comfortable rooms, while Levino Meadows provides 26 rooms, ideal for guests attending events or celebrations.",
  },
  {
    question: "Can Levino host weddings and large events?",
    answer:
      "Yes. Levino Meadows features a central lawn accommodating up to 800 guests and a banquet hall for 250 guests, making it perfect for weddings and corporate events.",
  },
  {
    question: "Does the hotel have a restaurant?",
    answer:
      "Yes, Levino offers a restaurant serving both vegetarian and non-vegetarian meals.",
  },
  {
    question: "Are there facilities for corporate events?",
    answer:
      "Yes. We offer conference and event spaces suitable for corporate meetings, workshops, and gatherings.",
  },
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 md:py-28 px-6 md:px-10 bg-[#FBFBF7]">
      <div className="max-w-[1280px] mx-auto">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-14 md:mb-16">
          <div className="lg:col-span-8">
            <SectionBadge>FAQ</SectionBadge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#281C13] mt-2 leading-tight">
              Your doubts &amp; questions{" "}
              <span className="font-script text-4xl sm:text-5xl md:text-6xl text-[#9C6644] ml-1">
                answered.
              </span>
            </h2>
          </div>

          {/* Royal Recognition WeddingWire Card */}
          <div className="lg:col-span-4 flex justify-start lg:justify-end">
            <div className="relative w-full max-w-[280px] h-[160px] rounded-[24px] overflow-hidden border border-[#EDECE4] shadow-xs group">
              <Image
                src="https://framerusercontent.com/images/YQGMpjyep3xUPAxdjgDks2yX6M.jpg"
                alt="Royal Recognition WeddingWire"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="280px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <span className="text-[10px] uppercase tracking-widest text-[#DDB892] font-semibold block">
                  Royal Recognition
                </span>
                <span className="font-serif text-lg font-bold">WeddingWire</span>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4 max-w-4xl mx-auto">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-white rounded-[20px] border border-[#EDECE4] overflow-hidden shadow-2xs"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between p-6 sm:p-7 text-left cursor-pointer select-none group"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-4 sm:gap-6 pr-4">
                    <span className="text-xs font-serif font-bold text-[#9C6644]">
                      0{index + 1}
                    </span>
                    <span className="font-serif text-lg sm:text-xl text-[#281C13] group-hover:text-[#9C6644] transition-colors">
                      {faq.question}
                    </span>
                  </div>

                  <span
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 border border-[#EDECE4] transition-transform duration-300 ${
                      isOpen ? "rotate-45 bg-[#281C13] text-white border-transparent" : "bg-[#FBFBF7] text-[#281C13]"
                    }`}
                  >
                    +
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-7 sm:px-7 pt-0 text-sm sm:text-base text-[#6A472F] font-sans leading-relaxed border-t border-[#EDECE4]/50 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default FaqSection;