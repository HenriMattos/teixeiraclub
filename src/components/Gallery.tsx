"use client";

import React from "react";
import { motion } from "framer-motion";

const items = [
  { src: "/images/gallery-run.jpg", title: "Treinos que viram histórias" },
  { src: "/images/gallery-river.jpg", title: "Conexões que continuam depois da corrida" },
  { src: "/images/gallery-track.jpg", title: "Performance em grupo" },
  { src: "/images/gallery-city.jpg", title: "Uma comunidade em movimento" },
  { src: "/images/gallery-night.jpg", title: "Energia que não para" },
  { src: "/images/gallery-marathon.jpg", title: "Evolução coletiva" },
];

export function Gallery() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
      {items.map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: i * 0.1 }}
          className="group relative overflow-hidden border border-white/[0.04] hover:border-[#FFD900]/20 transition-all duration-500 cursor-default"
        >
          <motion.div
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.6 }}
            className="aspect-[4/5] overflow-hidden"
          >
            <img
              src={item.src}
              alt={item.title}
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              loading="lazy"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex items-end p-6">
            <p className="font-heading text-lg md:text-xl tracking-wider text-white">
              {item.title}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
