import React from "react";

export function Footer() {
  return (
    <footer className="border-t border-white/[0.06] py-10 text-center">
      <div className="container mx-auto px-6">
        <p className="font-heading text-xl tracking-[0.15em] text-[#FFD900] mb-2">
          TEIXEIRA CLUB
        </p>
        <p className="text-xs text-white/30 tracking-wider">
          &copy; {new Date().getFullYear()} Teixeira Club. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
