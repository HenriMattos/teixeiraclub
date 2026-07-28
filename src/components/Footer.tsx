import React from "react";
import { Logo } from "./Logo";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.9-4.45 9.9-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm0 1.67c2.2 0 4.27.86 5.83 2.42a8.2 8.2 0 0 1 2.42 5.83c0 4.54-3.7 8.24-8.25 8.24a8.2 8.2 0 0 1-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.25-8.24Zm-2.9 4.4c-.14 0-.36.05-.55.26-.19.2-.72.7-.72 1.71s.74 1.98.84 2.12c.1.14 1.44 2.2 3.5 3.08.49.21.87.34 1.17.44.49.16.94.13 1.29.08.39-.06 1.21-.5 1.38-.98.17-.48.17-.89.12-.98-.05-.08-.19-.13-.4-.24-.21-.1-1.21-.6-1.4-.67-.19-.07-.32-.1-.46.11-.14.2-.53.66-.65.8-.12.14-.24.15-.44.05-.21-.1-.88-.32-1.67-1.03-.62-.55-1.03-1.23-1.15-1.44-.12-.2-.01-.31.09-.42.09-.09.21-.24.31-.36.1-.12.14-.2.21-.34.07-.14.03-.26-.02-.36-.05-.1-.45-1.12-.63-1.53-.16-.4-.33-.34-.45-.35l-.38-.01Z" />
    </svg>
  );
}

const socials = [
  { icon: InstagramIcon, label: "Instagram", href: "https://instagram.com/teixeiraclb" },
  { icon: WhatsAppIcon, label: "WhatsApp", href: "https://wa.me/5592995007048" },
];

const navLinks = [
  { href: "#solucao", label: "Solução" },
  { href: "#comunidade", label: "Comunidade" },
  { href: "#planos", label: "Planos" },
  { href: "#faq", label: "FAQ" },
];

export function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-[#050505]">
      <div className="max-w-6xl mx-auto px-6 py-14">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">
          {/* Brand */}
          <div className="max-w-xs">
            <Logo />
            <p className="text-sm text-white/40 leading-relaxed mt-4">
              A comunidade para quem transforma quilômetros em histórias.
            </p>
          </div>

          {/* Nav */}
          <div>
            <p className="font-heading text-sm tracking-[0.2em] text-white/60 uppercase mb-4">
              Navegar
            </p>
            <ul className="space-y-2.5">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-white/40 hover:text-[#FFD900] transition-colors duration-200"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <p className="font-heading text-sm tracking-[0.2em] text-white/60 uppercase mb-4">
              Redes
            </p>
            <div className="flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-[#FFD900] hover:border-[#FFD900]/40 transition-all duration-200"
                >
                  <s.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/[0.06] mt-12 pt-6 text-center">
          <p className="text-xs text-white/30 tracking-wider">
            &copy; {new Date().getFullYear()} Teixeira Club. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
