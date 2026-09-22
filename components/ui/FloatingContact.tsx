"use client";

import React from "react";
import { Phone, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { LEVINO_CONTACT } from "@/data/levinoData";

export const FloatingContact: React.FC = () => {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-auto">
      {/* WhatsApp Button */}
      <motion.a
        href={`https://wa.me/${LEVINO_CONTACT.whatsappNumber}?text=${encodeURIComponent(
          "Hello Levino Daman, I would like to inquire about room availability and reservations."
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
        className="flex items-center gap-2.5 px-4 py-2.5 bg-[#25D366] text-white rounded-full shadow-lg hover:shadow-xl transition-shadow cursor-pointer group"
        aria-label="Chat with Levino on WhatsApp"
      >
        <MessageCircle className="w-5 h-5 fill-current" />
        <span className="text-xs font-semibold tracking-wide hidden sm:inline-block">
          WhatsApp Us
        </span>
      </motion.a>

      {/* Call Reception Button */}
      <motion.a
        href={`tel:${LEVINO_CONTACT.primaryPhoneClean}`}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
        className="flex items-center gap-2.5 px-4 py-2.5 bg-[#281C13] text-[#FBFBF7] border border-[#DDB892]/40 rounded-full shadow-lg hover:shadow-xl transition-shadow cursor-pointer group"
        aria-label="Call Levino Reception"
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#DDB892] opacity-75" />
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#DDB892]" />
        </span>
        <Phone className="w-4 h-4 text-[#DDB892]" />
        <span className="text-xs font-semibold tracking-wide hidden sm:inline-block">
          Call Reception
        </span>
      </motion.a>
    </div>
  );
};
