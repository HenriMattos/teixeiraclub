"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  label?: string;
  title?: string;
  subtitle?: string;
  dark?: boolean;
}

export function Section({ children, className, id, label, title, subtitle, dark }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative py-20 md:py-32 px-6 overflow-hidden",
        dark && "bg-[#050505]",
        className
      )}
    >
      <div className="max-w-6xl mx-auto relative z-10">
        {(label || title || subtitle) && (
          <div className="text-center mb-16 md:mb-20">
            {label && (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="font-heading text-sm tracking-[0.3em] text-[#FFD900] mb-4 uppercase"
              >
                {label}
              </motion.p>
            )}
            {title && (
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-heading text-3xl md:text-5xl lg:text-6xl tracking-[0.03em] leading-tight mb-4"
              >
                {title}
              </motion.h2>
            )}
            {subtitle && (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-sm md:text-base text-white/40 max-w-xl mx-auto leading-relaxed"
              >
                {subtitle}
              </motion.p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
