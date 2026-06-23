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
        "card-glass rounded-sm p-8 md:p-10 group cursor-default",
        "border border-white/[0.06] hover:border-[#FFD900]/30 transition-all duration-500",
        className
      )}
    >
      <motion.div
        className="text-3xl mb-5"
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        {icon}
      </motion.div>
      <h3 className="font-heading text-xl md:text-2xl tracking-wider mb-3 text-white group-hover:text-[#FFD900] transition-colors duration-300">
        {title}
      </h3>
      <p className="text-sm text-white/50 leading-relaxed">
        {description}
      </p>

      {/* Hover glow */}
      <div className="absolute inset-0 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: "radial-gradient(400px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(255,217,0,0.06), transparent 50%)",
        }}
      />
    </motion.div>
  );
}
