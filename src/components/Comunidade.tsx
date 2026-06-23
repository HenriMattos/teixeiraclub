"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Activity, Apple, CalendarDays, Video, Tag, Gift } from "lucide-react";

interface CardData {
  icon: React.ReactNode;
  label: string;
  title: string;
  desc: string;
  image: string;
}

const cards: CardData[] = [
  {
    icon: <Activity className="w-4 h-4" />,
    label: "TREINOS",
    title: "Teixeira Club ⚡",
    desc: "Grupo focado em treinos, corridas e evolução física. Planeje sua próxima corrida com a comunidade.",
    image: "/images/gallery-track.jpg",
  },
  {
    icon: <Apple className="w-4 h-4" />,
    label: "NUTRIÇÃO",
    title: "Teixeira Club ⚡",
    desc: "Conteúdos e conversas sobre alimentação e performance esportiva para otimizar seus resultados.",
    image: "/images/gallery-river.jpg",
  },
  {
    icon: <CalendarDays className="w-4 h-4" />,
    label: "EVENTOS",
    title: "Teixeira Club ⚡",
    desc: "Eventos, encontros e experiências exclusivas do clube. Correr junto transforma tudo.",
    image: "/images/gallery-marathon.jpg",
  },
  {
    icon: <Video className="w-4 h-4" />,
    label: "LIVES",
    title: "Teixeira Club ⚡",
    desc: "Lives, conteúdos ao vivo e interações especiais com a comunidade e convidados.",
    image: "/images/gallery-city.jpg",
  },
  {
    icon: <Tag className="w-4 h-4" />,
    label: "DESCONTOS",
    title: "Teixeira Club ⚡",
    desc: "Benefícios, promoções e vantagens especiais para membros em produtos e serviços parceiros.",
    image: "/images/card-shoes.jpg",
  },
  {
    icon: <Gift className="w-4 h-4" />,
    label: "SORTEIOS",
    title: "Teixeira Club ⚡",
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
      className="group relative overflow-hidden rounded-2xl cursor-pointer border border-white/[0.04]"
      style={{ minHeight: 220 }}
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
            filter: "grayscale(40%) brightness(0.5) contrast(1.2)",
          }}
          loading="lazy"
        />
      </motion.div>

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent" />

      {/* Hover glow */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background:
            "radial-gradient(400px circle at 50% 50%, rgba(255,217,0,0.08), transparent 60%)",
        }}
      />

      {/* Yellow accent line */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-[#FFD900]/0 group-hover:bg-[#FFD900]/60 transition-all duration-500" />

      {/* Content */}
      <div className="relative z-10 p-6 md:p-7 flex flex-col justify-end h-full min-h-[220px]">
        {/* Icon + Label */}
        <div className="flex items-center gap-2 mb-2">
          <span className="text-[#FFD900]">{card.icon}</span>
          <span className="text-[10px] md:text-xs font-heading tracking-[0.2em] text-[#FFD900]/80 uppercase">
            {card.label}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-heading text-lg md:text-xl tracking-wider text-white leading-tight mb-1.5">
          {card.title}
        </h3>

        {/* Description */}
        <p className="text-xs md:text-sm text-white/50 leading-relaxed max-w-[240px]">
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
