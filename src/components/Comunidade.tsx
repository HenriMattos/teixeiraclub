"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Footprints, HeartPulse, Salad, CalendarDays, Video, Percent, Gift } from "lucide-react";

interface CardData {
  icon: React.ReactNode;
  label: string;
  desc: string;
  image: string;
  position?: string;
}

const cards: CardData[] = [
  {
    icon: <Footprints className="w-4 h-4" />,
    label: "Treinos",
    desc: "Grupo focado em treinos, corridas e evolução física. Planeje sua próxima corrida com a comunidade.",
    image: "/images/foto-fundador (1).jpg",
    position: "56% 30%",
  },
  {
    icon: <HeartPulse className="w-4 h-4" />,
    label: "Recovery",
    desc: "Recuperação, alongamento e prevenção de lesões. Aprenda a descansar tão bem quanto você treina.",
    image: "/images/foto-fundador (3).jpg",
    position: "center 22%",
  },
  {
    icon: <Salad className="w-4 h-4" />,
    label: "Nutrição",
    desc: "Conteúdos e conversas sobre alimentação e performance esportiva para otimizar seus resultados.",
    image: "/images/gallery-river.jpg",
  },
  {
    icon: <CalendarDays className="w-4 h-4" />,
    label: "Eventos",
    desc: "Eventos, encontros e experiências exclusivas do clube. Correr junto transforma tudo.",
    image: "/images/photo_2026-07-10_13-05-47.jpg",
    position: "center 28%",
  },
  {
    icon: <Video className="w-4 h-4" />,
    label: "Lives",
    desc: "Lives, conteúdos ao vivo e interações especiais com a comunidade e convidados.",
    image: "/images/gallery-city.jpg",
    position: "center 35%",
  },
  {
    icon: <Percent className="w-4 h-4" />,
    label: "Descontos",
    desc: "Benefícios, promoções e vantagens especiais para membros em produtos e serviços parceiros.",
    image: "/images/card-shoes.jpg",
  },
  {
    icon: <Gift className="w-4 h-4" />,
    label: "Sorteios",
    desc: "Sorteios e ações especiais da comunidade. Toda semana uma chance de ganhar prêmios exclusivos.",
    image: "/images/card-medal.jpg",
  },
];

function CardPoster({ card, i }: { card: CardData; i: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: i * 0.08 }}
      className="group relative overflow-hidden rounded-2xl cursor-pointer border border-white/[0.08] hover:border-[#FFD900]/40 transition-colors duration-500"
      style={{ minHeight: 240 }}
      whileHover={{ y: -4, transition: { duration: 0.3 } }}
    >
      {/* Image layer with parallax */}
      <motion.div
        className="absolute inset-0"
        style={{ y: imgY }}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.6 }}
      >
        <img
          src={card.image}
          alt={card.label}
          className="w-full h-full object-cover"
          style={{
            objectPosition: card.position ?? "center",
            filter: "grayscale(15%) brightness(0.7) contrast(1.1)",
          }}
          loading="lazy"
        />
      </motion.div>

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/35 to-black/10" />

      {/* Hover glow */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background:
            "radial-gradient(400px circle at 50% 50%, rgba(255,217,0,0.10), transparent 60%)",
        }}
      />

      {/* Yellow accent line */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-[#FFD900]/0 group-hover:bg-[#FFD900]/70 transition-all duration-500" />

      {/* Content */}
      <div className="relative z-10 p-6 md:p-7 flex flex-col justify-end h-full min-h-[240px]">
        {/* Brand tag */}
        <div className="flex items-center gap-2 mb-3">
          <span className="flex items-center justify-center w-7 h-7 rounded-full bg-[#FFD900]/12 border border-[#FFD900]/25 text-[#FFD900]">
            {card.icon}
          </span>
          <span className="text-[10px] font-heading tracking-[0.22em] text-white/50 uppercase">
            Comunidade Teixeira Club
          </span>
        </div>

        {/* Category title */}
        <h3 className="font-heading text-2xl md:text-3xl tracking-wider text-white leading-none mb-2">
          {card.label}
        </h3>

        {/* Description */}
        <p className="text-xs md:text-sm text-white/55 leading-relaxed max-w-[260px]">
          {card.desc}
        </p>
      </div>
    </motion.div>
  );
}

export function Comunidade() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 max-w-6xl mx-auto">
      {cards.map((card, i) => (
        <CardPoster key={i} card={card} i={i} />
      ))}
    </div>
  );
}
