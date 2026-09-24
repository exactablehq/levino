"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star, ArrowUpRight } from "lucide-react";

const reviews = [
  {
    image: "/review.jpeg",
    name: "Rahul Shah",
    city: "Mumbai",
    text: "Levino Palms was the perfect weekend escape. The rooms were comfortable, the pool was great, and the staff made us feel right at home.",
  },
  {
    image: "/review-1.avif",
    name: "Neha & Arjun",
    city: "Surat",
    text: "We hosted our wedding at Levino Meadows and it was magical. The lawns are huge and beautifully maintained.",
  },
  {
    image: "/review-2.jpeg",
    name: "Mehul Patel",
    city: "Ahmedabad",
    text: "Just minutes from Devka Beach but far enough to feel peaceful. The food was excellent and the staff was very helpful.",
  },
];

export function ReviewsSection() {
  return (
    <section
      id="reviews"
      className="overflow-hidden bg-[#F5F1EA] px-6 py-24 text-[#302820] sm:px-10 lg:px-16 lg:py-32"
    >
      <div className="mx-auto max-w-6xl">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="mb-16"
        >
          <p className="mb-5 text-[10px] uppercase tracking-[0.4em] text-[#92785F]">
            Reviews
          </p>

          <h2 className="max-w-3xl font-serif-luxury text-4xl font-normal leading-[1.05] tracking-[-0.025em] sm:text-5xl lg:text-6xl">
            What our
            <br />
            <span className="italic text-[#806A55]">
              guests say
            </span>
          </h2>
        </motion.div>

        {/* REVIEWS */}
        <div className="space-y-16">

          {reviews.map((review, index) => (
            <motion.article
              key={review.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.9,
                delay: index * 0.1,
              }}
              className="group"
            >
              <div className="grid overflow-hidden border-t border-[#D5C9BB] pt-8 md:grid-cols-[0.8fr_1.2fr] md:gap-14 lg:gap-20">

                {/* IMAGE */}
                <div className="relative overflow-hidden">
                  <div className="relative h-[360px] overflow-hidden sm:h-[430px] md:h-[390px]">

                    <img
                      src={review.image}
                      alt={`${review.name} review`}
                      className="h-full w-full object-cover transition-transform duration-[1600ms] ease-out group-hover:scale-[1.04]"
                    />

                    {/* Soft overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />

                    {/* Image number */}
                    <div className="absolute left-5 top-5 flex h-9 w-9 items-center justify-center rounded-full border border-white/50 bg-white/15 text-[10px] tracking-[0.15em] text-white backdrop-blur-md">
                      0{index + 1}
                    </div>

                    {/* Hover icon */}
                    <div className="absolute bottom-5 right-5 flex h-11 w-11 translate-y-2 items-center justify-center rounded-full bg-white/90 text-[#40362F] opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                      <ArrowUpRight className="h-4 w-4" />
                    </div>
                  </div>
                </div>

                {/* REVIEW CONTENT */}
                <div className="flex flex-col justify-between py-8 md:py-4">

                  {/* Stars */}
                  <div>
                    <div className="mb-8 flex gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className="h-3 w-3 fill-[#92785F] text-[#92785F]"
                          strokeWidth={1}
                        />
                      ))}
                    </div>

                    {/* Quote */}
                    <p className="max-w-2xl font-serif-luxury text-2xl leading-[1.45] tracking-[-0.015em] text-[#40362E] sm:text-3xl lg:text-[2.15rem]">
                      “{review.text}”
                    </p>
                  </div>

                  {/* Guest */}
                  <div className="mt-12">

                    <div className="mb-5 h-px w-16 bg-[#A89078]" />

                    <h3 className="font-serif-luxury text-xl text-[#302820]">
                      {review.name}
                    </h3>

                    <p className="mt-1 text-[10px] uppercase tracking-[0.3em] text-[#92785F]">
                      {review.city}
                    </p>
                  </div>
                </div>

              </div>
            </motion.article>
          ))}

        </div>

        {/* BOTTOM DETAIL */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mt-20 border-t border-[#D5C9BB] pt-8"
        >
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

            <p className="font-serif-luxury text-xl italic text-[#806A55]">
              Moments that stay with you.
            </p>

            <div className="flex items-center gap-3">
              <span className="text-[9px] uppercase tracking-[0.3em] text-[#92785F]">
                Levino Daman
              </span>

              <span className="h-px w-12 bg-[#A89078]" />
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}