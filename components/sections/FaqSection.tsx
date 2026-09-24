"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

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
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      id="faq"
      className="overflow-hidden bg-[#F3EBDD] px-6 py-24 text-[#302820] sm:px-10 lg:px-16 lg:py-32"
    >
      <div className="mx-auto max-w-6xl">

        {/* TOP INTRO */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="grid gap-12 lg:grid-cols-[1.25fr_0.75fr] lg:items-end"
        >
          <div>
            <p className="mb-6 text-[10px] uppercase tracking-[0.42em] text-[#92785F]">
              FAQ
            </p>

            <h2 className="font-serif-luxury text-[3.2rem] font-normal leading-[0.98] tracking-[-0.035em] sm:text-5xl lg:text-[5rem]">
              Your doubts
              <br />
              <span className="italic text-[#806A55]">&amp;</span> questions
              <br />
              answered.
            </h2>
          </div>

          {/* RECOGNITION IMAGE */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="group relative"
          >
            <div className="relative mx-auto max-w-[260px] overflow-hidden">
              <img
                src="/faq.jpeg"
                alt="Royal Recognition - WeddingWire"
                className="h-[230px] w-full object-cover grayscale-[15%] transition-transform duration-[1200ms] group-hover:scale-[1.03] sm:h-[260px]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

              <div className="absolute bottom-5 left-5">
                <p className="text-[8px] uppercase tracking-[0.35em] text-white/80">
                  Royal Recognition
                </p>

                <p className="mt-1 font-serif-luxury text-lg italic text-white">
                  WeddingWire
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* FAQ ACCORDION */}
        <div className="mt-20 border-t border-[#D5CDC3] lg:mt-24">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.06,
                }}
                className="border-b border-[#D5CDC3]"
              >
                <button
                  type="button"
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                  className="group flex w-full items-center justify-between gap-8 py-7 text-left sm:py-8"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-6 sm:gap-10">

                    <span className="text-[9px] tracking-[0.25em] text-[#A18870]">
                      0{index + 1}
                    </span>

                    <span className="font-serif-luxury text-xl font-normal leading-tight text-[#302A25] transition-colors duration-300 group-hover:text-[#806A55] sm:text-2xl">
                      {faq.question}
                    </span>
                  </div>

                  <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#B9A895] transition-all duration-500 ${isOpen
                      ? "rotate-45 bg-[#806A55] text-[#F7F5EF]"
                      : "text-[#806A55] group-hover:bg-[#E9E1D7]"
                      }`}
                  >
                    <Plus
                      className="h-4 w-4"
                      strokeWidth={1.2}
                    />
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{
                        height: 0,
                        opacity: 0,
                      }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                      }}
                      transition={{
                        height: {
                          duration: 0.45,
                          ease: [0.22, 1, 0.36, 1],
                        },
                        opacity: {
                          duration: 0.25,
                        },
                      }}
                      className="overflow-hidden"
                    >
                      <div className="pb-8 pl-12 pr-8 sm:pl-[74px] sm:pr-16">
                        <p className="max-w-2xl text-[13px] leading-7 tracking-wide text-[#746B64]">
                          {faq.answer}
                        </p>
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