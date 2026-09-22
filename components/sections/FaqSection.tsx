"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Award } from "lucide-react";
import { FAQS, FaqItem, LEVINO_CONTACT } from "@/data/levinoData";
import { Badge } from "../ui/Badge";

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>("location");

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto scroll-mt-20">
      <div className="space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-3">
          <div className="flex items-center justify-center gap-2">
            <Badge variant="gold" icon={<Award className="w-3.5 h-3.5 text-[#9C6644]" />}>
              Royal Recognition • WeddingWire
            </Badge>
          </div>
          <span className="font-script-accent text-3xl text-[#9C6644] block">
            FAQ
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl text-[#281C13] font-medium">
            Your doubts & questions answered.
          </h2>
          <p className="text-sm sm:text-base text-[#6A472F] font-normal max-w-xl mx-auto">
            Find immediate answers about our rooms, venue capacities, locations, and booking
            guidelines.
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-4">
          {FAQS.map((faq: FaqItem) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-white rounded-2xl border border-[#EDECE4] overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left cursor-pointer hover:bg-[#FBFBF7] transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif-luxury text-base sm:text-lg font-medium text-[#281C13] pr-4">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="shrink-0 text-[#9C6644]"
                  >
                    <ChevronDown className="w-5 h-5" />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-[#6A472F] leading-relaxed border-t border-[#EDECE4]/50">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Still Have Questions Box */}
        <div className="text-center p-6 bg-[#F5F4EE] rounded-2xl border border-[#EDECE4] space-y-2">
          <p className="text-sm font-medium text-[#281C13]">
            Still have queries or need custom arrangements?
          </p>
          <p className="text-xs text-[#7F5539]">
            Speak directly with our concierge:{" "}
            <a
              href={`tel:${LEVINO_CONTACT.primaryPhoneClean}`}
              className="font-semibold text-[#9C6644] underline hover:text-[#281C13]"
            >
              {LEVINO_CONTACT.primaryPhone}
            </a>{" "}
            or write to{" "}
            <a
              href={`mailto:${LEVINO_CONTACT.email}`}
              className="font-semibold text-[#9C6644] underline hover:text-[#281C13]"
            >
              {LEVINO_CONTACT.email}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};
