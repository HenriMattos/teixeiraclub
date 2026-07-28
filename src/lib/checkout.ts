// ============================================================
//  LINKS DE CHECKOUT DA KIWIFY
//  Troque aqui caso os links mudem no futuro.
// ============================================================

export const CHECKOUT = {
  mensal: "https://pay.kiwify.com.br/rrka1Zv",
  trimestral: "https://pay.kiwify.com.br/dYGo4Ux",
  anual: "https://pay.kiwify.com.br/a9LRU80",
} as const;

// true quando o link ja e um checkout real (abre em nova aba).
export function isExternal(href: string): boolean {
  return href.startsWith("http");
}
