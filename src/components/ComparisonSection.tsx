"use client";

import React from "react";
import { motion } from "framer-motion";
import { X, Check } from "lucide-react";

interface ComparisonRow {
  feature: string;
  without: string;
  with_: string;
}

const rows: ComparisonRow[] = [
  {
    feature: "Motivação",
    without: "Correr sozinho e perder o ritmo",
    with_: "Comunidade ativa que te mantém consistente",
  },
  {
    feature: "Método",
    without: "Treinos sem estrutura e risco de lesão",
    with_: "Desafios e metas organizadas para evoluir",
  },
  {
    feature: "Conexões",
    without: "Grupos de WhatsApp sem foco",
    with_: "Comunidade exclusiva de corredores",
  },
  {
    feature: "Evolução",
    without: "Sem métricas nem acompanhamento",
    with_: "Resultados reais com suporte do grupo",
  },
];

export function ComparisonSection() {
  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="grid grid-cols-3 gap-4 mb-4 text-xs font-heading tracking-[0.2em] uppercase">
        <div />
        <div className="text-center text-white/30">Sozinho</div>
        <div className="text-center text-[#FFD900]">Teixeira Club</div>
      </div>

      {/* Rows */}
      {rows.map((row, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4, delay: i * 0.1 }}
          className="grid grid-cols-3 gap-4 py-5 border-t border-white/[0.06] items-center"
        >
          <div>
            <span className="text-sm md:text-base text-white font-medium">{row.feature}</span>
          </div>

          <div className="flex items-center justify-center gap-2 text-xs md:text-sm text-white/30">
            <X className="w-4 h-4 text-red-500/60 flex-shrink-0" />
            <span className="text-center">{row.without}</span>
          </div>

          <div className="flex items-center justify-center gap-2 text-xs md:text-sm text-white/70">
            <Check className="w-4 h-4 text-[#FFD900] flex-shrink-0" />
            <span className="text-center">{row.with_}</span>
          </div>
        </motion.div>
      ))}

      {/* CTA hint */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="text-center mt-8"
      >
        <p className="text-xs text-white/30 font-heading tracking-[0.2em] uppercase">
          A diferença está em fazer parte
        </p>
      </motion.div>
    </div>
  );
}
