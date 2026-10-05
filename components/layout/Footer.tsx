"use client";

import React from "react";
import Link from "next/link";
import { LevinoLogo } from "../ui/LevinoLogo";
import { CtaButton } from "../ui/CtaButton";
import { LEVINO_CONTACT } from "@/data/levinoData";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const navLinks = [
    { label: "Home", href: "#hero" },
    { label: "The Levino Experience", href: "#services" },
    { label: "Amenities", href: "#projects" },
    { label: "Why Levino", href: "#features" },
    { label: "Founder's Vision", href: "#vision" },
    { label: "Guest Reviews", href: "#testimonials" },
    { label: "Explore Daman", href: "#blogs" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <footer className="bg-[#281C13] text-white pt-20 pb-12 px-6 md:px-10 border-t border-white/10">
      <div className="max-w-[1280px] mx-auto">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pb-16 border-b border-white/10">
          {/* Brand Column */}
          <div className="lg:col-span-5 space-y-6">
            <LevinoLogo size="large" />

            <p className="text-sm sm:text-base text-white/70 font-sans leading-relaxed max-w-md">
              Levino Palms and Levino Meadows — two distinct destinations in Daman, united by a promise of refined hospitality, private retreats, and curated luxury amidst open green spaces.
            </p>

            <div className="pt-2">
              <CtaButton
                href="tel:+919913713747"
                variant="terracotta"
              >
                Get in touch
              </CtaButton>
            </div>
          </div>

          {/* Navigation Column */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-serif text-lg text-[#DDB892] tracking-wide">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm text-white/70 font-sans">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="font-serif text-lg text-[#DDB892] tracking-wide">
              Contact Us
            </h4>

            <div className="space-y-3.5 text-sm text-white/70 font-sans">
              <div>
                <span className="text-xs uppercase tracking-wider text-white/40 block">Phone</span>
                <a href="tel:+919913713747" className="hover:text-white transition-colors font-medium">
                  +91 99137 13747 / +91 97241 13747
                </a>
              </div>

              <div>
                <span className="text-xs uppercase tracking-wider text-white/40 block">Email</span>
                <a href="mailto:levinodaman@gmail.com" className="hover:text-white transition-colors">
                  levinodaman@gmail.com
                </a>
              </div>

              <div>
                <span className="text-xs uppercase tracking-wider text-white/40 block">Location</span>
                <span>Devka Beach Road, Daman, India</span>
              </div>

              <div className="pt-2">
                <a
                  href="https://www.instagram.com/levinodaman/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-xs text-white transition-colors border border-white/10"
                >
                  <span>Follow @levinodaman on Instagram</span>
                  <span>↗</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50 font-sans">
          <p>© {new Date().getFullYear()} Levino. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <span className="hover:text-white cursor-pointer transition-colors">
              Terms &amp; Conditions
            </span>
            <span className="hover:text-white cursor-pointer transition-colors">
              Privacy Policy
            </span>
            <button
              onClick={scrollToTop}
              className="text-[#DDB892] hover:text-white cursor-pointer transition-colors flex items-center gap-1"
            >
              <span>Back to Top</span>
              <span>↑</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;