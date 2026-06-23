"use client";

import React from "react";
import { motion } from "framer-motion";
import { Zap } from "lucide-react";
import { Button } from "./Button";

const stats = [
  { value: "847+", label: "membros ativos" },
  { value: "1000+", label: "km juntos" },
  { value: "1 ano", label: "de zero ao movimento" },
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
          className="relative aspect-[4/5] overflow-hidden border border-white/[0.06]"
        >
          <img
            src="/images/foto-fundador (3).jpg"
            alt="Fundador do Teixeira Club"
            className="w-full h-full object-cover"
            style={{ filter: "grayscale(60%) brightness(0.7) contrast(1.1)" }}
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
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
            O Teixeira Club nasceu da ideia de que correr é melhor quando
            compartilhado. Mais que um grupo de corrida — é uma comunidade
            de pessoas que escolheram evoluir juntas, dentro e fora do asfalto.
          </p>
          <p className="text-sm md:text-base text-white/50 leading-relaxed mb-8">
            Treinos, desafios, conexões e uma energia que transforma
            quilômetros em histórias. Essa é a proposta do clube.
          </p>

          {/* Mini stats */}
          <div className="grid grid-cols-3 gap-6 mb-8">
            {stats.map((s, i) => (
              <div key={i}>
                <p className="font-heading text-2xl md:text-3xl text-[#FFD900]">{s.value}</p>
                <p className="text-xs text-white/40 uppercase tracking-wider mt-1">{s.label}</p>
              </div>
            ))}
          </div>

          <Button
            variant="primary"
            size="lg"
            icon={<Zap className="w-4 h-4" />}
          >
            FAZER PARTE DO CLUBE
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
