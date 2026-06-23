"use client";

import React from "react";
import { motion } from "framer-motion";
import { Zap } from "lucide-react";
import { Button } from "./Button";

export function MobileBar() {
  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ delay: 1.5, duration: 0.5, ease: "easeOut" }}
      className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-xl border-t border-white/[0.08] px-5 py-3 flex items-center justify-between gap-3"
    >
      <Zap className="w-4 h-4 text-[#FFD900] flex-shrink-0" />
      <div className="flex-1 min-w-0">
        <p className="text-xs text-white/50 leading-tight">Entrar no Teixeira Club</p>
        <p className="text-sm font-heading tracking-wider">R$29,90/mês</p>
      </div>
      <Button variant="primary" size="sm" className="flex-shrink-0 text-xs px-5 py-2">
        ASSINAR
      </Button>
    </motion.div>
  );
}
