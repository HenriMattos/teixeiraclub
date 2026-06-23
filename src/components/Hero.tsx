"use client";

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { Zap, Flame, Users, ArrowRight } from "lucide-react";
import { Button } from "./Button";
import { EnergyParticles } from "./EnergyParticles";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const taglineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(logoRef.current, {
        scale: 0.8,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
      });

      gsap.from(".hero-word", {
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        delay: 0.5,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-bg.jpg"
          alt="Runners at night"
          className="w-full h-full object-cover"
          style={{ filter: "grayscale(80%) brightness(0.35) contrast(1.1)" }}
        />
      </div>

      {/* Grain overlay */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\' opacity=\'1\'/%3E%3C/svg%3E")',
        }}
      />

      {/* Background layers */}
      <div className="absolute inset-0 noise-bg" />

      {/* Radial gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_60%_40%,rgba(255,217,0,0.08)_0%,transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_70%,rgba(255,217,0,0.04)_0%,transparent_50%)]" />

      {/* Grid lines */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 2px, white 2px, white 4px)",
        }}
      />

      {/* Energy particles */}
      <EnergyParticles />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto pt-20 pb-32">
        {/* Logo */}
        <div ref={logoRef} className="mb-6 md:mb-8">
          <motion.h1
            className="font-heading text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-[0.05em] leading-none"
            animate={{
              textShadow: [
                "0 0 0px #FFD900",
                "0 0 20px rgba(255,217,0,0.3)",
                "0 0 0px #FFD900",
              ],
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="text-[#FFD900]">TEIXEIRA</span>{" "}
            <span className="text-white">CLUB</span>
          </motion.h1>
        </div>

        {/* Tagline */}
        <div ref={taglineRef} className="mb-4 md:mb-6">
          <h2 className="font-heading text-2xl sm:text-4xl md:text-5xl lg:text-6xl tracking-[0.05em] leading-tight">
            <span className="hero-word text-[#FFD900] inline-block">
              CORRA.
            </span>{" "}
            <span className="hero-word text-white inline-block">CONECTE.</span>{" "}
            <span className="hero-word text-white inline-block">EVOLUA.</span>
          </h2>
        </div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="text-xs md:text-sm text-white/40 uppercase tracking-[0.3em] mb-6 max-w-xl mx-auto"
        >
          A comunidade para quem transforma quilômetros em histórias.
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="text-sm md:text-base text-white/50 max-w-lg mx-auto mb-10 leading-relaxed"
        >
          Entre para um clube de corredores que buscam evolução, novas conexões e
          uma rotina mais ativa.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.7, duration: 0.8 }}
        >
          <Button
            variant="primary"
            size="lg"
            icon={<Zap className="w-4 h-4" />}
            className="animate-glow shadow-lg"
          >
            ENTRAR PARA O CLUBE
          </Button>
        </motion.div>

        {/* Highlights */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2, duration: 0.8 }}
          className="flex flex-wrap items-center justify-center gap-6 md:gap-10 mt-12 text-xs md:text-sm text-white/40"
        >
          <span className="flex items-center gap-2">
            <Flame className="w-4 h-4 text-[#FFD900]" />
            Comunidade exclusiva
          </span>
          <span className="flex items-center gap-2">
            <Users className="w-4 h-4 text-[#FFD900]" />
            Treinos e desafios
          </span>
          <span className="flex items-center gap-2">
            <ArrowRight className="w-4 h-4 text-[#FFD900]" />
            Networking
          </span>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none" />
    </section>
  );
}
