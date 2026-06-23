"use client";

import React from "react";
import { motion } from "framer-motion";

interface TimelineStep {
  number: string;
  title: string;
  description: string;
}

interface TimelineProps {
  steps: TimelineStep[];
}

export function Timeline({ steps }: TimelineProps) {
  return (
    <div className="relative max-w-3xl mx-auto">
      {/* Vertical line */}
      <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-white/[0.06] -translate-x-1/2" />

      <div className="space-y-16 md:space-y-24">
        {steps.map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: i * 0.15 }}
            className="relative flex flex-col md:flex-row items-start gap-6 md:gap-12"
          >
            {/* Number circle */}
            <div className="relative z-10 flex-shrink-0 w-14 h-14 md:w-16 md:h-16 rounded-full bg-black border border-[#FFD900]/20 flex items-center justify-center group hover:border-[#FFD900] transition-all duration-500 hover:shadow-[0_0_30px_rgba(255,217,0,0.15)]">
              <span className="font-heading text-xl md:text-2xl text-[#FFD900]/40 group-hover:text-[#FFD900] transition-colors duration-500">
                {step.number}
              </span>
            </div>

            {/* Content */}
            <div className="flex-1 pt-1">
              <h3 className="font-heading text-lg md:text-xl tracking-wider mb-1.5 text-white">
                {step.title}
              </h3>
              <p className="text-sm text-white/50 leading-relaxed">
                {step.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
