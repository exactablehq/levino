"use client";

import React from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, ArrowUp } from "lucide-react";
import { LEVINO_CONTACT } from "@/data/levinoData";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#281C13] text-[#FBFBF7] border-t border-[#352318] pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          {/* Brand Column */}
          <div className="lg:col-span-5 space-y-4">
            <Link href="/" className="inline-block group">
              <span className="font-serif-luxury text-3xl font-bold tracking-[0.2em] text-[#FBFBF7] group-hover:text-[#DDB892] transition-colors">
                LEVINO
              </span>
              <span className="font-script-accent text-lg text-[#DDB892] block -mt-1">
                …a home away from home
              </span>
            </Link>

            <p className="text-sm text-[#EDECE4]/80 leading-relaxed max-w-md font-light">
              Levino Palms and Levino Meadows — two distinct destinations in Daman, united by a
              promise of refined hospitality, private retreats, and curated luxury amidst open green
              spaces.
            </p>

            <div className="pt-2 text-xs text-[#DDB892] flex items-center gap-2">
              <span className="inline-block w-2 h-2 rounded-full bg-[#27A36B]" />
              <span>5 Minutes from Devka Beach • Daman, India</span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.18em] font-semibold text-[#DDB892]">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm text-[#EDECE4]/80 font-light">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#palms" className="hover:text-white transition-colors">
                  Levino Palms
                </a>
              </li>
              <li>
                <a href="#meadows" className="hover:text-white transition-colors">
                  Levino Meadows
                </a>
              </li>
              <li>
                <a href="#amenities" className="hover:text-white transition-colors">
                  Amenities
                </a>
              </li>
              <li>
                <a href="#weddings" className="hover:text-white transition-colors">
                  Weddings & Events
                </a>
              </li>
              <li>
                <a href="#explore-daman" className="hover:text-white transition-colors">
                  Explore Daman
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  FAQ & Policies
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Inquiries */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.18em] font-semibold text-[#DDB892]">
              Get in Touch
            </h4>
            <div className="space-y-3 text-sm text-[#EDECE4]/80 font-light">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#DDB892] shrink-0 mt-1" />
                <span>{LEVINO_CONTACT.address}</span>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#DDB892] shrink-0" />
                <a
                  href={`mailto:${LEVINO_CONTACT.email}`}
                  className="hover:text-white transition-colors"
                >
                  {LEVINO_CONTACT.email}
                </a>
              </div>

              <div className="space-y-1 pt-1">
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-[#DDB892] shrink-0" />
                  <a
                    href={`tel:${LEVINO_CONTACT.primaryPhoneClean}`}
                    className="hover:text-white font-medium text-white transition-colors"
                  >
                    {LEVINO_CONTACT.primaryPhone}
                  </a>
                  <span className="text-xs text-[#DDB892]">(Reception)</span>
                </div>

                <div className="flex items-center gap-3 pl-7">
                  <a
                    href="tel:+919913713747"
                    className="hover:text-white transition-colors"
                  >
                    +91 99137 13747
                  </a>
                  <span className="text-xs text-[#DDB892]">(Events)</span>
                </div>

                <div className="flex items-center gap-3 pl-7">
                  <a
                    href="tel:+918291998806"
                    className="hover:text-white transition-colors"
                  >
                    +91 82919 98806
                  </a>
                  <span className="text-xs text-[#DDB892]">(Support)</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#EDECE4]/60">
          <p>© 2025 Levino. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <span className="hover:text-white cursor-pointer">Terms & Conditions</span>
            <span className="hover:text-white cursor-pointer">Privacy Policy</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-[#DDB892] hover:text-white transition-colors cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
