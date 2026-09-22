"use client";

import React from "react";
import Link from "next/link";

export type ButtonVariant = "primary" | "secondary" | "outline" | "gold" | "ghost";
export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  external?: boolean;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  className?: string;
  children: React.ReactNode;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-[#281C13] text-[#FBFBF7] hover:bg-[#352318] border border-[#281C13] shadow-sm",
  secondary:
    "bg-[#9C6644] text-white hover:bg-[#7F5539] border border-[#9C6644] shadow-sm",
  outline:
    "bg-transparent text-[#281C13] hover:bg-[#281C13] hover:text-[#FBFBF7] border border-[#281C13]/80",
  gold:
    "bg-[#DDB892] text-[#281C13] hover:bg-[#C49B74] border border-[#DDB892] font-semibold shadow-sm",
  ghost:
    "bg-transparent text-[#281C13] hover:bg-[#EDECE4] border border-transparent",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-xs uppercase tracking-wider rounded-full",
  md: "px-6 py-3 text-sm font-medium tracking-wide rounded-full",
  lg: "px-8 py-4 text-base font-medium tracking-wide rounded-full",
};

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  href,
  external = false,
  icon,
  iconPosition = "right",
  className = "",
  children,
  onClick,
  disabled,
  type = "button",
  ...rest
}) => {
  const baseClasses =
    "inline-flex items-center justify-center gap-2.5 transition-all duration-200 cursor-pointer select-none text-center";
  const combinedClasses = `${baseClasses} ${variantStyles[variant]} ${sizeStyles[size]} ${
    disabled ? "opacity-50 cursor-not-allowed pointer-events-none" : ""
  } ${className}`;

  const content = (
    <>
      {icon && iconPosition === "left" && <span className="inline-flex shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === "right" && <span className="inline-flex shrink-0">{icon}</span>}
    </>
  );

  if (href) {
    if (external || href.startsWith("tel:") || href.startsWith("mailto:") || href.startsWith("http")) {
      return (
        <a
          href={href}
          className={combinedClasses}
          target={external ? "_blank" : undefined}
          rel={external ? "noopener noreferrer" : undefined}
        >
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedClasses}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={combinedClasses}
      onClick={onClick}
      disabled={disabled}
      {...rest}
    >
      {content}
    </button>
  );
};
