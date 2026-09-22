import React from "react";

export type BadgeVariant = "default" | "gold" | "dark" | "outline" | "subtle";

export interface BadgeProps {
  variant?: BadgeVariant;
  icon?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

const variantStyles: Record<BadgeVariant, string> = {
  default: "bg-[#EDECE4] text-[#281C13] border border-[#E6CCB2]/50",
  gold: "bg-[#DDB892]/20 text-[#6A472F] border border-[#DDB892]/60 font-medium",
  dark: "bg-[#281C13] text-[#FBFBF7] border border-[#352318]",
  outline: "bg-transparent text-[#6A472F] border border-[#6A472F]/40",
  subtle: "bg-white/80 backdrop-blur-sm text-[#281C13] border border-[#EDECE4] shadow-xs",
};

export const Badge: React.FC<BadgeProps> = ({
  variant = "default",
  icon,
  children,
  className = "",
}) => {
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs tracking-wide uppercase font-medium ${variantStyles[variant]} ${className}`}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
    </span>
  );
};
