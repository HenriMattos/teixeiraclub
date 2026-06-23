"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "Preciso ser corredor profissional?",
    answer: "Não. O clube é para todos os níveis, desde quem nunca correu até quem já tem experiência.",
  },
  {
    question: "Preciso correr todos os dias?",
    answer: "Não. O objetivo é evolução e comunidade. Cada um participa no seu ritmo e frequência.",
  },
  {
    question: "Como entro no clube?",
    answer: "Escolha um plano, finalize a assinatura e você receberá acesso imediato ao grupo exclusivo.",
  },
  {
    question: "Tem reembolso?",
    answer: "Sim. Você tem 7 dias para testar. Se não fizer sentido, devolvemos seu dinheiro.",
  },
  {
    question: "Como funcionam os desafios?",
    answer: "Lançamos desafios periódicos com metas coletivas e individuais para manter todos motivados e evoluindo.",
  },
];

function FAQItemComponent({ item, isOpen, onClick }: { item: FAQItem; isOpen: boolean; onClick: () => void }) {
  return (
    <div className="border-b border-white/[0.06] last:border-b-0">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between py-6 text-left gap-4 group"
      >
        <span className="font-medium text-base group-hover:text-[#FFD900] transition-colors">
          {item.question}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-[#FFD900] flex-shrink-0"
        >
          <Plus className="w-5 h-5" />
        </motion.span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-sm text-white/50 leading-relaxed">
              {item.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="max-w-2xl mx-auto">
      {faqData.map((item, i) => (
        <FAQItemComponent
          key={i}
          item={item}
          isOpen={openIndex === i}
          onClick={() => setOpenIndex(openIndex === i ? null : i)}
        />
      ))}
    </div>
  );
}
