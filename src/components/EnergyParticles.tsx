"use client";

import React, { useEffect, useState } from "react";

interface ParticleStyle {
  width: string;
  height: string;
  left: string;
  top: string;
  opacity: number;
  animation: string;
  filter: string;
}

function generateParticle(): ParticleStyle {
  return {
    width: `${2 + Math.random() * 4}px`,
    height: `${2 + Math.random() * 4}px`,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    opacity: Math.random() * 0.3,
    animation: `float ${4 + Math.random() * 6}s ease-in-out ${Math.random() * 4}s infinite`,
    filter: `blur(${Math.random() * 2}px)`,
  };
}

export function EnergyParticles() {
  const [particles, setParticles] = useState<ParticleStyle[]>([]);

  useEffect(() => {
    setParticles(Array.from({ length: 20 }, generateParticle));
  }, []);

  if (particles.length === 0) return null;

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {particles.map((style, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-[#FFD900]"
          style={style}
        />
      ))}
    </div>
  );
}
