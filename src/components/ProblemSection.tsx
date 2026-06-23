"use client";

import React from "react";
import { motion } from "framer-motion";

interface ProblemCardProps {
  emoji: string;
  title: string;
  description: string;
  delay: number;
}

function ProblemCard({ emoji, title, description, delay }: ProblemCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay }}
      className="group relative bg-[#0d0d0d] border border-white/[0.06] p-8 md:p-10"
    >
      <div className="text-3xl mb-4">{emoji}</div>
      <h3 className="font-heading text-xl md:text-2xl tracking-wider mb-3 text-white group-hover:text-[#FFD900] transition-colors duration-300">
        {title}
      </h3>
      <p className="text-sm text-white/50 leading-relaxed">
        {description}
      </p>
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: "radial-gradient(400px circle at 50% 50%, rgba(255,217,0,0.06), transparent 50%)",
        }}
      />
    </motion.div>
  );
}

const problems = [
  {
    emoji: "😔",
    title: "Sem comunidade você desiste",
    description: "Correr sozinho perde a graça rápido. Sem alguém para compartilhar a jornada, a motivação vai embora e os tênis ficam no armário.",
  },
  {
    emoji: "🤕",
    title: "Sem método você se machuca",
    description: "Sem orientação, o risco de lesão dispara. Treinos sem estrutura, exageros e falta de recuperação viram seu pior inimigo.",
  },
  {
    emoji: "😵",
    title: "Sem direção você se perde",
    description: "Milhares de vídeos, dicas soltas, planilhas aleatórias. Informação demais e direção de menos — você não sabe por onde começar.",
  },
  {
    emoji: "📉",
    title: "Sem acompanhamento você não evolui",
    description: "Sem métricas, sem feedback, sem ajustes. Você repete os mesmos erros e o progresso simplesmente não vem.",
  },
];

export function ProblemSection() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 max-w-5xl mx-auto">
      {problems.map((p, i) => (
        <ProblemCard key={i} {...p} delay={i * 0.1} />
      ))}
    </div>
  );
}
