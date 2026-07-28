"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Logo } from "./Logo";
import { Button } from "./Button";

const links = [
  { href: "#solucao", label: "Solução" },
  { href: "#comunidade", label: "Comunidade" },
  { href: "#planos", label: "Planos" },
  { href: "#faq", label: "FAQ" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-black/80 backdrop-blur-xl border-b border-white/[0.08] py-3"
          : "bg-transparent py-5"
      )}
    >
      <nav className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <a href="#top" aria-label="Teixeira Club">
          <Logo />
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-white/60 hover:text-white font-medium tracking-wide transition-colors duration-200"
            >
              {l.label}
            </a>
          ))}
        </div>

        <Button variant="primary" size="sm" href="#planos" className="hidden sm:inline-flex">
          Assinar
        </Button>
      </nav>
    </motion.header>
  );
}
