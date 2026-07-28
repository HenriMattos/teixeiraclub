"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { isExternal } from "@/lib/checkout";

interface PricingCardProps {
  icon: React.ReactNode;
  name: string;
  price: string;
  period: string;
  features: string[];
  badge?: string;
  featured?: boolean;
  buttonText: string;
  buttonHref?: string;
  delay?: number;
}

export function PricingCard({
  icon,
  name,
  price,
  period,
  features,
  badge,
  featured,
  buttonText,
  buttonHref = "#planos",
  delay = 0,
}: PricingCardProps) {
  const external = isExternal(buttonHref);
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay }}
      className={cn(
        "relative bg-[#0d0d0d] border rounded-2xl p-8 md:p-10 flex flex-col transition-all duration-500",
        featured
          ? "border-[#FFD900] scale-[1.02] md:scale-105 bg-gradient-to-b from-[#FFD900]/8 to-[#0d0d0d] border-glow z-10"
          : "border-white/[0.08] hover:border-white/25"
      )}
    >
      {badge && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#FFD900] text-black font-heading text-xs tracking-[0.15em] px-5 py-1 z-20 whitespace-nowrap">
          {badge}
        </div>
      )}

      <motion.div
        className="w-12 h-12 mb-4 rounded-xl bg-[#FFD900]/10 border border-[#FFD900]/20 flex items-center justify-center"
        whileHover={{ scale: 1.1 }}
      >
        {icon}
      </motion.div>

      <h3 className="font-heading text-xl tracking-wider mb-1">{name}</h3>

      <div className="mb-1">
        <span className="font-heading text-4xl md:text-5xl text-[#FFD900]">
          {price}
        </span>
      </div>
      <p className="text-xs md:text-sm text-white/30 mb-6">{period}</p>

      <ul className="space-y-3 mb-8 flex-1">
        {features.map((f, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-white/50">
            <span className="text-[#FFD900] mt-0.5 flex-shrink-0">✓</span>
            {f}
          </li>
        ))}
      </ul>

      <motion.a
        href={buttonHref}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={cn(
          "block w-full text-center font-heading tracking-[0.15em] uppercase py-3 text-sm rounded-lg transition-all duration-300",
          featured
            ? "bg-[#FFD900] text-black hover:bg-white"
            : "border border-[#FFD900] text-[#FFD900] hover:bg-[#FFD900]/10"
        )}
      >
        {buttonText}
      </motion.a>
    </motion.div>
  );
}
