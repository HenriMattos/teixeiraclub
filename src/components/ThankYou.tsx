"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, ShieldCheck } from "lucide-react";
import { Logo } from "./Logo";
import { WHATSAPP_COMMUNITY } from "@/lib/checkout";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.9-4.45 9.9-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm0 1.67c2.2 0 4.27.86 5.83 2.42a8.2 8.2 0 0 1 2.42 5.83c0 4.54-3.7 8.24-8.25 8.24a8.2 8.2 0 0 1-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.25-8.24Zm-2.9 4.4c-.14 0-.36.05-.55.26-.19.2-.72.7-.72 1.71s.74 1.98.84 2.12c.1.14 1.44 2.2 3.5 3.08.49.21.87.34 1.17.44.49.16.94.13 1.29.08.39-.06 1.21-.5 1.38-.98.17-.48.17-.89.12-.98-.05-.08-.19-.13-.4-.24-.21-.1-1.21-.6-1.4-.67-.19-.07-.32-.1-.46.11-.14.2-.53.66-.65.8-.12.14-.24.15-.44.05-.21-.1-.88-.32-1.67-1.03-.62-.55-1.03-1.23-1.15-1.44-.12-.2-.01-.31.09-.42.09-.09.21-.24.31-.36.1-.12.14-.2.21-.34.07-.14.03-.26-.02-.36-.05-.1-.45-1.12-.63-1.53-.16-.4-.33-.34-.45-.35l-.38-.01Z" />
    </svg>
  );
}

const steps = [
  { n: "01", title: "Entre no grupo", desc: "Toque no botão acima para acessar a comunidade no WhatsApp." },
  { n: "02", title: "Se apresente", desc: "Diga seu nome e de onde é. A galera vai te receber bem." },
  { n: "03", title: "Bora correr", desc: "Fique de olho nos treinos, desafios e conteúdos do clube." },
];

export function ThankYou() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center px-6 py-16 overflow-hidden text-center">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,217,0,0.10)_0%,transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_80%,rgba(255,217,0,0.05)_0%,transparent_50%)]" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 w-full max-w-lg"
      >
        <div className="flex justify-center mb-10">
          <Logo />
        </div>

        {/* Check */}
        <motion.div
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200, damping: 15 }}
          className="w-20 h-20 mx-auto mb-6 rounded-full bg-[#FFD900]/10 border border-[#FFD900]/25 flex items-center justify-center"
        >
          <CheckCircle2 className="w-10 h-10 text-[#FFD900]" />
        </motion.div>

        <p className="font-heading text-sm tracking-[0.3em] text-[#FFD900]/70 mb-3 uppercase">
          Pagamento confirmado
        </p>
        <h1 className="font-heading text-4xl md:text-5xl tracking-[0.03em] leading-tight mb-4">
          Bem-vindo ao <span className="text-[#FFD900]">Teixeira Club</span>
        </h1>
        <p className="text-white/50 text-sm md:text-base leading-relaxed max-w-md mx-auto mb-9">
          Seu acesso está liberado. Falta só um passo: entrar na comunidade
          exclusiva no WhatsApp. É lá que tudo acontece.
        </p>

        {/* WhatsApp CTA */}
        <motion.a
          href={WHATSAPP_COMMUNITY}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.02, y: -2 }}
          whileTap={{ scale: 0.98 }}
          className="inline-flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-4 rounded-xl bg-[#25D366] text-black font-heading text-base md:text-lg tracking-[0.1em] uppercase shadow-[0_0_40px_rgba(37,211,102,0.35)] hover:bg-[#22c35e] transition-colors duration-300"
        >
          <WhatsAppIcon className="w-6 h-6" />
          Entrar na comunidade
        </motion.a>

        <p className="flex items-center justify-center gap-2 text-xs text-white/30 mt-5">
          <ShieldCheck className="w-3.5 h-3.5 text-[#FFD900]/60" />
          Guarde este link. Ele é o seu acesso ao grupo.
        </p>

        {/* Steps */}
        <div className="mt-14 grid gap-4 text-left">
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 + i * 0.12, duration: 0.5 }}
              className="flex items-start gap-4 bg-white/[0.03] border border-white/[0.08] rounded-xl p-4"
            >
              <span className="font-heading text-2xl text-[#FFD900]/80 leading-none w-9 flex-shrink-0">
                {s.n}
              </span>
              <div>
                <p className="font-heading text-lg tracking-wider text-white leading-tight">
                  {s.title}
                </p>
                <p className="text-sm text-white/45 leading-relaxed mt-0.5">
                  {s.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <a
          href="/"
          className="inline-block mt-10 text-xs text-white/40 hover:text-[#FFD900] tracking-wider uppercase transition-colors duration-200"
        >
          Voltar para o site
        </a>
      </motion.div>
    </main>
  );
}
