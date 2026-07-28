"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
  delay?: number;
}

export function FeatureCard({ icon, title, description, className, delay = 0 }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -6, transition: { duration: 0.3 } }}
      className={cn(
        "relative card-glass rounded-2xl p-7 md:p-8 group cursor-default overflow-hidden",
        "border border-white/[0.08] hover:border-[#FFD900]/40 transition-all duration-500",
        className
      )}
    >
      {/* Icon badge */}
      <div className="relative z-10 w-14 h-14 mb-5 rounded-xl bg-[#FFD900]/10 border border-[#FFD900]/20 flex items-center justify-center group-hover:bg-[#FFD900]/15 group-hover:scale-105 transition-all duration-300">
        {icon}
      </div>

      <h3 className="relative z-10 font-heading text-xl md:text-2xl tracking-wider mb-2.5 text-white group-hover:text-[#FFD900] transition-colors duration-300">
        {title}
      </h3>
      <p className="relative z-10 text-sm text-white/50 leading-relaxed">
        {description}
      </p>

      {/* Hover glow */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background:
            "radial-gradient(360px circle at 50% 0%, rgba(255,217,0,0.08), transparent 60%)",
        }}
      />
    </motion.div>
  );
}
