"use client";

import React from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, ArrowUp } from "lucide-react";
import { LEVINO_CONTACT } from "@/data/levinoData";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="border-t border-[#352318] bg-[#281C13] px-6 pt-16 pb-10 text-[#FBFBF7] sm:px-10 lg:px-20">
      <div className="mx-auto max-w-7xl">

        {/* Main Footer */}
        <div className="grid grid-cols-1 gap-12 border-b border-white/10 pb-14 md:grid-cols-2 lg:grid-cols-12">

          {/* Brand */}
          <div className="lg:col-span-5">
            <Link href="/" className="inline-block">
              <div
                className="text-[42px] font-normal leading-none text-[#9B1C24]"
                style={{ fontFamily: "cursive" }}
              >
                Levino
              </div>

              <div
                className="mt-2 text-[18px] text-[#DDB892]"
                style={{ fontFamily: "cursive" }}
              >
                …a home away from home
              </div>
            </Link>

            <p className="mt-6 max-w-md text-sm font-light leading-7 text-[#EDECE4]/75">
              Levino Palms and Levino Meadows — two distinct destinations in
              Daman, united by a promise of refined hospitality, private
              retreats, and curated luxury amidst open green spaces.
            </p>

            <div className="mt-5 flex items-center gap-2 text-xs text-[#DDB892]">
              <span className="h-2 w-2 rounded-full bg-[#27A36B]" />
              <span>5 Minutes from Devka Beach • Daman, India</span>
            </div>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-3">
            <h4
              className="mb-5 text-[18px] font-normal text-[#DDB892]"
              style={{ fontFamily: "cursive" }}
            >
              Navigation
            </h4>

            <ul className="space-y-3 text-sm font-light text-[#EDECE4]/75">
              <li>
                <a href="#" className="transition-colors hover:text-white">
                  Home
                </a>
              </li>

              <li>
                <a
                  href="#palms"
                  className="transition-colors hover:text-white"
                >
                  Levino Palms
                </a>
              </li>

              <li>
                <a
                  href="#meadows"
                  className="transition-colors hover:text-white"
                >
                  Levino Meadows
                </a>
              </li>

              <li>
                <a
                  href="#amenities"
                  className="transition-colors hover:text-white"
                >
                  Amenities
                </a>
              </li>

              <li>
                <a
                  href="#weddings"
                  className="transition-colors hover:text-white"
                >
                  Weddings & Events
                </a>
              </li>

              <li>
                <a
                  href="#explore-daman"
                  className="transition-colors hover:text-white"
                >
                  Explore Daman
                </a>
              </li>

              <li>
                <a
                  href="#faq"
                  className="transition-colors hover:text-white"
                >
                  FAQ & Policies
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-4">
            <h4
              className="mb-5 text-[18px] font-normal text-[#DDB892]"
              style={{ fontFamily: "cursive" }}
            >
              Get in Touch
            </h4>

            <div className="space-y-4 text-sm font-light text-[#EDECE4]/75">

              {/* Address */}
              <div className="flex items-start gap-3">
                <MapPin className="mt-1 h-4 w-4 shrink-0 text-[#DDB892]" />

                <span>{LEVINO_CONTACT.address}</span>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-[#DDB892]" />

                <a
                  href={`mailto:${LEVINO_CONTACT.email}`}
                  className="transition-colors hover:text-white"
                >
                  {LEVINO_CONTACT.email}
                </a>
              </div>

              {/* Reception */}
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-[#DDB892]" />

                <a
                  href={`tel:${LEVINO_CONTACT.primaryPhoneClean}`}
                  className="font-medium text-white transition-colors hover:text-[#DDB892]"
                >
                  {LEVINO_CONTACT.primaryPhone}
                </a>

                <span className="text-xs text-[#DDB892]">
                  (Reception)
                </span>
              </div>

              {/* Events */}
              <div className="flex items-center gap-3 pl-7">
                <a
                  href="tel:+919913713747"
                  className="transition-colors hover:text-white"
                >
                  +91 99137 13747
                </a>

                <span className="text-xs text-[#DDB892]">
                  (Events)
                </span>
              </div>

              {/* Support */}
              <div className="flex items-center gap-3 pl-7">
                <a
                  href="tel:+918291998806"
                  className="transition-colors hover:text-white"
                >
                  +91 82919 98806
                </a>

                <span className="text-xs text-[#DDB892]">
                  (Support)
                </span>
              </div>

            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-4 pt-7 text-xs text-[#EDECE4]/60 sm:flex-row">

          <p>© 2025 Levino. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <span className="cursor-pointer hover:text-white">
              Terms & Conditions
            </span>

            <span className="cursor-pointer hover:text-white">
              Privacy Policy
            </span>

            <button
              onClick={scrollToTop}
              className="inline-flex cursor-pointer items-center gap-1.5 text-[#DDB892] transition-colors hover:text-white"
            >
              <span>Back to Top</span>
              <ArrowUp className="h-3.5 w-3.5" />
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
};