"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { LevinoLogo } from "../ui/LevinoLogo";
import { CtaButton } from "../ui/CtaButton";
import { LEVINO_CONTACT } from "@/data/levinoData";

interface NavbarProps {
  onOpenBooking?: (destination?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [menuOpen]);

  const navItems = [
    { number: "01", label: "Home", href: "#hero" },
    { number: "02", label: "The Levino Experience", href: "#services" },
    { number: "03", label: "Amenities", href: "#projects" },
    { number: "04", label: "Why Levino", href: "#features" },
    { number: "05", label: "Founder's Vision", href: "#vision" },
    { number: "06", label: "Guest Reviews", href: "#testimonials" },
    { number: "07", label: "Explore Daman", href: "#blogs" },
    { number: "08", label: "FAQ", href: "#faq" },
  ];

  const handleLinkClick = (href: string) => {
    setMenuOpen(false);
    if (href === "#hero" || href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Floating Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-[#FBFBF7]/90 backdrop-blur-md py-4 shadow-xs border-b border-[#EDECE4]/80"
            : "bg-transparent py-6 md:py-8"
        }`}
      >
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 flex items-center justify-between">
          {/* Logo */}
          <Link href="#hero" onClick={() => handleLinkClick("#hero")} className="cursor-pointer">
            <LevinoLogo />
          </Link>

          {/* Right Header Actions */}
          <div className="flex items-center gap-4">
            {/* Direct Call Button (Desktop) */}
            <a
              href="tel:+919913713747"
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider text-[#281C13] bg-[#EDECE4] hover:bg-[#E6CCB2] transition-colors"
            >
              <span>+91 99137 13747</span>
            </a>

            {/* Menu Trigger Capsule */}
            <button
              onClick={() => setMenuOpen(true)}
              className="inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full bg-[#281C13] text-white hover:bg-[#352318] transition-all duration-200 cursor-pointer text-xs uppercase tracking-widest font-semibold shadow-sm"
              aria-label="Open navigation menu"
            >
              <span>MENU</span>
              <span className="flex flex-col gap-1 w-4">
                <span className="w-4 h-0.5 bg-white rounded-full"></span>
                <span className="w-2.5 h-0.5 bg-white rounded-full ml-auto"></span>
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* 2-Tier Animated Curtain Sheet Menu */}
      <AnimatePresence>
        {menuOpen && (
          <div className="fixed inset-0 z-50 flex flex-col">
            {/* Backdrop Layer 1: Terracotta */}
            <motion.div
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-100%" }}
              transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
              className="fixed inset-0 bg-[#9C6644] rounded-b-[40px] md:rounded-b-[80px] z-10 pointer-events-none"
            />

            {/* Backdrop Layer 2: Main Dark Content Sheet */}
            <motion.div
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-100%" }}
              transition={{ duration: 0.6, delay: 0.05, ease: [0.76, 0, 0.24, 1] }}
              className="fixed inset-0 bg-[#281C13] text-white rounded-b-[40px] md:rounded-b-[80px] z-20 flex flex-col overflow-y-auto px-6 md:px-16 py-8 md:py-10 max-h-[96vh] shadow-2xl"
            >
              {/* Menu Top Bar */}
              <div className="max-w-[1280px] w-full mx-auto flex items-center justify-between pb-8 border-b border-white/10 shrink-0">
                <div className="cursor-pointer" onClick={() => handleLinkClick("#hero")}>
                  <LevinoLogo />
                </div>

                <button
                  onClick={() => setMenuOpen(false)}
                  className="inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer text-xs uppercase tracking-widest font-semibold border border-white/10"
                  aria-label="Close navigation menu"
                >
                  <span>CLOSE</span>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L13 13M1 13L13 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </button>
              </div>

              {/* Menu Main Grid */}
              <div className="max-w-[1280px] w-full mx-auto py-10 md:py-14 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 flex-1 items-center">
                {/* Left: Navigation Links */}
                <div className="lg:col-span-7 flex flex-col space-y-3 md:space-y-4">
                  {navItems.map((item, idx) => (
                    <motion.a
                      key={item.label}
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleLinkClick(item.href);
                      }}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 + idx * 0.05, duration: 0.4 }}
                      className="group flex items-baseline gap-4 text-xl sm:text-2xl md:text-3xl font-serif tracking-wide text-white/80 hover:text-white transition-colors cursor-pointer"
                    >
                      <span className="text-xs font-sans text-[#DDB892] tracking-widest uppercase">
                        {item.number}
                      </span>
                      <span className="group-hover:translate-x-2 transition-transform duration-200">
                        {item.label}
                      </span>
                    </motion.a>
                  ))}
                </div>

                {/* Right: Contact Details & Quick Booking */}
                <div className="lg:col-span-5 flex flex-col justify-between space-y-8 bg-white/5 p-8 md:p-10 rounded-[30px] border border-white/10">
                  <div>
                    <span className="text-xs uppercase tracking-widest text-[#DDB892] font-semibold block mb-3">
                      Experience Daman
                    </span>
                    <h3 className="font-serif text-2xl md:text-3xl text-white mb-4">
                      Where timeless elegance meets effortless comfort
                    </h3>
                    <p className="text-sm text-white/70 leading-relaxed font-sans mb-6">
                      5 Minutes from Devka Beach. Whether planning a quiet holiday, destination wedding, or grand celebration, Levino is ready to welcome you.
                    </p>
                  </div>

                  <div className="space-y-3 text-sm text-white/80 font-sans border-t border-white/10 pt-6">
                    <div className="flex items-center justify-between">
                      <span className="text-white/50 text-xs uppercase tracking-wider">Phone</span>
                      <a href="tel:+919913713747" className="hover:text-[#DDB892] transition-colors font-medium">
                        +91 99137 13747 / +91 97241 13747
                      </a>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-white/50 text-xs uppercase tracking-wider">Email</span>
                      <a href="mailto:levinodaman@gmail.com" className="hover:text-[#DDB892] transition-colors font-medium">
                        levinodaman@gmail.com
                      </a>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-white/50 text-xs uppercase tracking-wider">Location</span>
                      <span className="font-medium text-white/90">Devka Beach Road, Daman</span>
                    </div>
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row gap-3">
                    <CtaButton
                      href="tel:+919913713747"
                      variant="terracotta"
                      className="w-full justify-center"
                    >
                      Call Reception
                    </CtaButton>
                    {onOpenBooking && (
                      <button
                        onClick={() => {
                          setMenuOpen(false);
                          onOpenBooking();
                        }}
                        className="px-6 py-3.5 rounded-full text-sm font-medium tracking-wide bg-white/10 text-white hover:bg-white/20 transition-colors border border-white/10"
                      >
                        Book Stay
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
