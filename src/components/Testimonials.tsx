"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

interface Testimonial {
  stars: number;
  text: string;
  name: string;
  avatar?: string;
}

const testimonials: Testimonial[] = [
  {
    stars: 5,
    text: '"Entrei para correr e encontrei uma comunidade que me faz querer estar presente todos os dias."',
    name: "Rafael M.",
  },
  {
    stars: 5,
    text: '"O melhor da corrida é ter pessoas evoluindo junto. O Teixeira Club mudou minha rotina."',
    name: "Juliana S.",
  },
  {
    stars: 5,
    text: '"Nunca imaginei que um clube de corrida pudesse trazer tantas conexões e oportunidades."',
    name: "Pedro H.",
  },
  {
    stars: 5,
    text: '"Encontrei muito mais que um grupo de corrida. Encontrei uma comunidade que me impulsiona."',
    name: "Camila R.",
  },
];

export function Testimonials() {
  const extended = [...testimonials, ...testimonials];

  return (
    <div className="overflow-hidden relative">
      {/* Gradient masks */}
      <div className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none bg-gradient-to-r from-black to-transparent" />
      <div className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none bg-gradient-to-l from-black to-transparent" />

      <motion.div
        className="flex gap-6"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 40, ease: "linear", repeat: Infinity }}
      >
        {extended.map((t, i) => (
          <div
            key={i}
            className="flex-shrink-0 w-[320px] md:w-[380px] bg-[#0d0d0d] border border-white/[0.06] rounded-sm p-8 hover:border-[#FFD900]/30 transition-all duration-300"
          >
            <div className="flex gap-1 mb-4">
              {Array.from({ length: t.stars }).map((_, s) => (
                <Star key={s} className="w-4 h-4 fill-[#FFD900] text-[#FFD900]" />
              ))}
            </div>
            <p className="text-white/80 italic text-base leading-relaxed mb-6">
              {t.text}
            </p>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#FFD900]/20 flex items-center justify-center text-[#FFD900] font-heading text-sm">
                {t.name.charAt(0)}
              </div>
              <span className="text-sm text-white/40 font-medium uppercase tracking-wider">
                {t.name}
              </span>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
