"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Phone, Menu, X, Calendar, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { LEVINO_CONTACT } from "@/data/levinoData";
import { Button } from "../ui/Button";

interface NavbarProps {
  onOpenBooking: (destination?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#" },
    { label: "Levino Palms", href: "#palms" },
    { label: "Levino Meadows", href: "#meadows" },
    { label: "Amenities", href: "#amenities" },
    { label: "Weddings & Events", href: "#weddings" },
    { label: "Explore Daman", href: "#explore-daman" },
    { label: "FAQ", href: "#faq" },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    if (href === "#" || href === "") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    if (href.startsWith("#")) {
      const targetId = href.slice(1);
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-[#FBFBF7]/92 backdrop-blur-md shadow-xs border-b border-[#EDECE4] py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" className="group flex flex-col cursor-pointer select-none">
            <span className="font-serif-luxury text-2xl md:text-3xl font-bold tracking-[0.18em] text-[#281C13] transition-colors group-hover:text-[#6A472F]">
              LEVINO
            </span>
            <span className="font-script-accent text-sm md:text-base text-[#9C6644] -mt-1 tracking-normal">
              …a home away from home
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="text-xs font-medium uppercase tracking-[0.12em] text-[#281C13]/80 hover:text-[#281C13] transition-colors relative py-1 group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#9C6644] transition-all duration-200 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Desktop Header Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={`tel:${LEVINO_CONTACT.primaryPhoneClean}`}
              className="inline-flex items-center gap-2 text-xs font-medium tracking-wider uppercase text-[#6A472F] hover:text-[#281C13] transition-colors px-3 py-2 rounded-full hover:bg-[#EDECE4]/50"
            >
              <Phone className="w-3.5 h-3.5 text-[#9C6644]" />
              <span>{LEVINO_CONTACT.primaryPhone}</span>
            </a>

            <Button
              variant="primary"
              size="sm"
              onClick={() => onOpenBooking()}
              icon={<Calendar className="w-3.5 h-3.5" />}
            >
              Book Stay
            </Button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex lg:hidden items-center gap-2">
            <Button
              variant="primary"
              size="sm"
              onClick={() => onOpenBooking()}
              className="!px-3.5 !py-1.5 !text-[11px]"
            >
              Book
            </Button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#281C13] hover:bg-[#EDECE4] rounded-lg transition-colors cursor-pointer"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-50 lg:hidden">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-[#281C13]/50 backdrop-blur-xs"
            />

            {/* Slide-out Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed top-0 right-0 bottom-0 w-4/5 max-w-sm bg-[#FBFBF7] shadow-2xl p-6 flex flex-col justify-between overflow-y-auto border-l border-[#EDECE4]"
            >
              <div>
                {/* Top bar inside drawer */}
                <div className="flex items-center justify-between pb-6 border-b border-[#EDECE4]">
                  <div>
                    <span className="font-serif-luxury text-2xl font-bold tracking-[0.16em] text-[#281C13]">
                      LEVINO
                    </span>
                    <span className="font-script-accent text-sm text-[#9C6644] block">
                      …a home away from home
                    </span>
                  </div>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 text-[#281C13] hover:bg-[#EDECE4] rounded-full"
                    aria-label="Close menu"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Mobile Navigation Links */}
                <nav className="py-6 flex flex-col gap-1">
                  {navLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(link.href);
                      }}
                      className="flex items-center justify-between py-3 px-2 text-sm uppercase tracking-wider font-medium text-[#281C13] hover:bg-[#EDECE4]/60 rounded-lg transition-colors"
                    >
                      <span>{link.label}</span>
                      <ChevronRight className="w-4 h-4 text-[#9C6644]" />
                    </a>
                  ))}
                </nav>
              </div>

              {/* Bottom Quick Actions inside drawer */}
              <div className="pt-6 border-t border-[#EDECE4] space-y-3">
                <Button
                  variant="primary"
                  size="md"
                  className="w-full"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenBooking();
                  }}
                  icon={<Calendar className="w-4 h-4" />}
                >
                  Book Your Stay
                </Button>

                <a
                  href={`tel:${LEVINO_CONTACT.primaryPhoneClean}`}
                  className="flex items-center justify-center gap-2 w-full py-3 text-xs font-semibold uppercase tracking-wider text-[#281C13] bg-[#EDECE4] rounded-full hover:bg-[#E6CCB2] transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#9C6644]" />
                  <span>Call: {LEVINO_CONTACT.primaryPhone}</span>
                </a>

                <p className="text-[11px] text-center text-[#7F5539] pt-2">
                  5 Minutes from Devka Beach, Daman
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
