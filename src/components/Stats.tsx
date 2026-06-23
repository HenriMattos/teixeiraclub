"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

interface StatItem {
  value: number;
  suffix: string;
  prefix?: string;
  label: string;
}

interface StatsProps {
  items: StatItem[];
}

function CountUp({ value, suffix, prefix = "", duration = 2 }: { value: number; suffix: string; prefix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const end = value;
    const increment = end / (duration * 60);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, value, duration]);

  return (
    <span ref={ref} className="font-heading text-6xl md:text-8xl text-[#FFD900] leading-none block">
      {prefix}{count}{suffix}
    </span>
  );
}

export function Stats({ items }: StatsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16">
      {items.map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: i * 0.2 }}
          className="text-center"
        >
          <CountUp value={item.value} suffix={item.suffix} prefix={item.prefix} />
          <p className="text-sm text-white/40 uppercase tracking-[0.3em] mt-3 font-medium">
            {item.label}
          </p>
        </motion.div>
      ))}
    </div>
  );
}
