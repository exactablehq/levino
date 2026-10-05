"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export type CtaVariant = "terracotta" | "dark" | "light" | "transparent";

interface CtaButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: CtaVariant;
  className?: string;
  external?: boolean;
  type?: "button" | "submit" | "reset";
  target?: string;
  rel?: string;
}

export const CtaButton: React.FC<CtaButtonProps> = ({
  children,
  href,
  onClick,
  variant = "terracotta",
  className = "",
  external = false,
  type = "button",
  target,
  rel,
}) => {
  const variantClasses = {
    terracotta: "bg-[#9C6644] text-white hover:bg-[#7F5539] border border-[#9C6644]",
    dark: "bg-[#281C13] text-white hover:bg-[#352318] border border-[#281C13]",
    light: "bg-white text-[#281C13] hover:bg-[#FBFBF7] border border-[#EDECE4] shadow-xs",
    transparent: "bg-transparent text-white border border-white/60 hover:bg-white hover:text-[#281C13]",
  }[variant];

  const arrowBg = {
    terracotta: "bg-white/20 text-white",
    dark: "bg-white/20 text-white",
    light: "bg-[#281C13]/10 text-[#281C13]",
    transparent: "bg-white/20 text-white",
  }[variant];

  const content = (
    <motion.span
      whileHover="hover"
      initial="initial"
      className={`inline-flex items-center gap-3 px-6 py-3.5 rounded-full text-sm font-medium tracking-wide transition-colors cursor-pointer select-none ${variantClasses} ${className}`}
    >
      <span>{children}</span>
      <motion.span
        variants={{
          initial: { x: 0, y: 0, rotate: 0 },
          hover: { x: 2, y: -2, rotate: 45 },
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 text-xs ${arrowBg}`}
      >
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.5 9.5L9.5 2.5M9.5 2.5H4.5M9.5 2.5V7.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </motion.span>
    </motion.span>
  );

  if (href) {
    const isExt = external || href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:");
    if (isExt) {
      return (
        <a
          href={href}
          target={target || (external || href.startsWith("http") ? "_blank" : undefined)}
          rel={rel || (external || href.startsWith("http") ? "noopener noreferrer" : undefined)}
          className="inline-block"
        >
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className="inline-block">
        {content}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className="inline-block bg-transparent border-0 p-0">
      {content}
    </button>
  );
};
