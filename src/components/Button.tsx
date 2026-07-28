"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { motion, type HTMLMotionProps } from "framer-motion";

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  children: React.ReactNode;
  className?: string;
  icon?: React.ReactNode;
}

export function Button({
  variant = "primary",
  size = "md",
  href,
  children,
  className,
  icon,
  ...props
}: ButtonProps) {
  const base =
    "relative inline-flex items-center justify-center gap-2 font-heading uppercase tracking-wider cursor-pointer select-none transition-all duration-300 overflow-hidden rounded-md";

  const variants = {
    primary:
      "bg-[#FFD900] text-black hover:bg-white hover:shadow-[0_0_40px_rgba(255,217,0,0.4)] hover:-translate-y-0.5",
    secondary:
      "border border-[#FFD900] text-[#FFD900] hover:bg-[#FFD900]/10 hover:-translate-y-0.5",
    ghost:
      "text-white/70 hover:text-white hover:bg-white/5",
  };

  const sizes = {
    sm: "px-4 py-1.5 text-xs tracking-[0.15em]",
    md: "px-6 py-2.5 text-sm tracking-[0.15em]",
    lg: "px-8 py-3 text-base tracking-[0.15em]",
  };

  const glowEffect = variant === "primary" ? (
    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
  ) : null;

  const Component = href ? motion.a : motion.button;
  const isExternal = href?.startsWith("http");

  return (
    <Component
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className={cn("group", base, variants[variant], sizes[size], className)}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      {...(props as any)}
    >
      {glowEffect}
      {icon}
      <span className="relative z-10">{children}</span>
    </Component>
  );
}
