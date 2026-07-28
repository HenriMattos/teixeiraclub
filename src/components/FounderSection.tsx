"use client";

import React from "react";
import { motion } from "framer-motion";
import { Zap, Trophy, Medal, Flag, Mountain } from "lucide-react";
import { Button } from "./Button";
import { CHECKOUT } from "@/lib/checkout";

const credentials = [
  { value: "1º", label: "XTERRA Amazônia" },
  { value: "42K", label: "Maratona" },
  { value: "21K", label: "Meia maratona" },
];

const achievements = [
  { image: "/images/photo_2026-07-10_13-05-41 (2).jpg", icon: Medal, label: "Pódio XTERRA" },
  { image: "/images/photo_2026-07-10_13-05-48.jpg", icon: Flag, label: "Linha de chegada" },
  { image: "/images/photo_2026-07-10_13-05-46.jpg", icon: Mountain, label: "Trail Amazônia" },
];

export function FounderSection() {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        {/* Left - Image */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/[0.08]"
        >
          <img
            src="/images/photo_2026-07-10_13-05-44.jpg"
            alt="Yan Teixeira correndo"
            className="w-full h-full object-cover object-center"
            style={{ filter: "brightness(0.95) contrast(1.05) saturate(1.05)" }}
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />

          {/* Name plate */}
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <div className="flex items-center gap-2 text-[#FFD900] mb-1">
              <Trophy className="w-4 h-4" />
              <span className="text-xs font-heading tracking-[0.2em] uppercase">
                Fundador
              </span>
            </div>
            <p className="font-heading text-2xl md:text-3xl tracking-[0.05em] text-white leading-none">
              YAN TEIXEIRA
            </p>
          </div>
        </motion.div>

        {/* Right - Content */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="font-heading text-sm tracking-[0.3em] text-[#FFD900] mb-4 uppercase">
            QUEM ESTÁ POR TRÁS
          </p>
          <h3 className="font-heading text-3xl md:text-5xl tracking-[0.03em] leading-tight mb-6">
            Correr transformou minha vida.
          </h3>
          <p className="text-sm md:text-base text-white/50 leading-relaxed mb-6">
            Sou o Yan Teixeira. Corredor de rua, maratonista e apaixonado por
            trail. Descobri na corrida uma forma de evoluir todos os dias, e
            percebi que tudo fica melhor quando a jornada é compartilhada.
          </p>
          <p className="text-sm md:text-base text-white/50 leading-relaxed mb-8">
            O Teixeira Club nasceu dessa ideia. Mais que um grupo de corrida, é
            uma comunidade de pessoas que escolheram estar em movimento, dentro
            e fora do asfalto.
          </p>

          {/* Credentials */}
          <div className="grid grid-cols-3 gap-6 mb-8">
            {credentials.map((s, i) => (
              <div key={i}>
                <p className="font-heading text-2xl md:text-3xl text-[#FFD900]">
                  {s.value}
                </p>
                <p className="text-xs text-white/40 uppercase tracking-wider mt-1">
                  {s.label}
                </p>
              </div>
            ))}
          </div>

          <Button
            variant="primary"
            size="lg"
            href={CHECKOUT.trimestral}
            icon={<Zap className="w-4 h-4" />}
          >
            FAZER PARTE DO CLUBE
          </Button>
        </motion.div>
      </div>

      {/* Achievements strip */}
      <div className="grid grid-cols-3 gap-3 md:gap-5 mt-12 md:mt-16">
        {achievements.map((a, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group relative aspect-[3/4] overflow-hidden rounded-xl border border-white/[0.08]"
          >
            <img
              src={a.image}
              alt={a.label}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              style={{ filter: "brightness(0.9) contrast(1.05)" }}
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4 flex items-center gap-2">
              <a.icon className="w-4 h-4 text-[#FFD900] flex-shrink-0" />
              <span className="text-[11px] md:text-sm font-heading tracking-[0.12em] uppercase text-white leading-tight">
                {a.label}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
