import React from "react";

interface SectionBadgeProps {
  children: React.ReactNode;
  className?: string;
}

export const SectionBadge: React.FC<SectionBadgeProps> = ({
  children,
  className = "",
}) => {
  return (
    <div className={`inline-flex items-center justify-center mb-4 ${className}`}>
      <span className="bg-[#DDB892] text-white px-5 py-1.5 rounded-full text-xs md:text-sm font-medium tracking-wide select-none shadow-2xs">
        {children}
      </span>
    </div>
  );
};
