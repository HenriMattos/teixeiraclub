import React from "react";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  showText?: boolean;
  markClassName?: string;
}

export function Logo({ className, showText = true, markClassName }: LogoProps) {
  return (
    <span className={cn("inline-flex items-center gap-2", className)}>
      <svg
        viewBox="0 0 100 100"
        className={cn("w-7 h-7", markClassName)}
        aria-hidden="true"
      >
        <path
          d="M58 8 L26 54 L46 54 L42 92 L74 42 L54 42 Z"
          fill="#FFD900"
          stroke="#FFD900"
          strokeWidth={2}
          strokeLinejoin="round"
        />
      </svg>
      {showText && (
        <span className="font-heading text-xl tracking-[0.15em] leading-none">
          <span className="text-[#FFD900]">TEIXEIRA</span>{" "}
          <span className="text-white">CLUB</span>
        </span>
      )}
    </span>
  );
}
