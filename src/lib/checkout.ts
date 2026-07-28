// ============================================================
//  LINKS DE CHECKOUT DA KIWIFY
//  Troque aqui caso os links mudem no futuro.
// ============================================================

export const CHECKOUT = {
  mensal: "https://pay.kiwify.com.br/dru33v9",
  trimestral: "https://pay.kiwify.com.br/K23Syyl",
  anual: "https://pay.kiwify.com.br/jFyYa72",
} as const;

// true quando o link ja e um checkout real (abre em nova aba).
export function isExternal(href: string): boolean {
  return href.startsWith("http");
}
