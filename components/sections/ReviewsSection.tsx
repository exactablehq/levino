"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star, MapPin } from "lucide-react";
import { TESTIMONIALS, Testimonial } from "@/data/levinoData";

export const ReviewsSection: React.FC = () => {
  return (
    <section id="reviews" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-20">
      <div className="space-y-16">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="font-script-accent text-3xl text-[#9C6644] block">
            What our guests say
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl text-[#281C13] font-medium">
            Reviews.
          </h2>
          <p className="text-sm sm:text-base text-[#6A472F] font-normal">
            Real stories from guests who made Levino their home away from home.
          </p>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((review: Testimonial, index: number) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className="luxury-card rounded-3xl p-8 flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                {/* 5-Star Row */}
                <div className="flex items-center gap-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-sm sm:text-base text-[#352318] leading-relaxed italic">
                  &ldquo;{review.text}&rdquo;
                </p>
              </div>

              {/* Review Author & Origin */}
              <div className="pt-4 border-t border-[#EDECE4] flex items-center justify-between">
                <div>
                  <h3 className="font-serif-luxury text-base font-semibold text-[#281C13]">
                    {review.name}
                  </h3>
                  {review.occasion && (
                    <p className="text-xs text-[#9C6644] font-medium">
                      {review.occasion}
                    </p>
                  )}
                </div>

                <div className="flex items-center gap-1 text-xs text-[#7F5539] bg-[#EDECE4]/60 px-3 py-1 rounded-full">
                  <MapPin className="w-3 h-3 text-[#9C6644]" />
                  <span>{review.city}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
