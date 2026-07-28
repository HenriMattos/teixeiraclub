# Teixeira Club

Landing page da **Teixeira Club** — comunidade de corrida com planos por assinatura (mensal, trimestral e anual), vendidos via Kiwify e entregues por comunidade no WhatsApp.

Corra. Conecte. Evolua.

## Stack

- [Next.js 16](https://nextjs.org/) (App Router)
- [React 19](https://react.dev/)
- [Tailwind CSS 4](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/) e [GSAP](https://gsap.com/) para animações
- [lucide-react](https://lucide.dev/) para ícones

## Rodando localmente

```bash
npm install
npm run dev
```

Acesse http://localhost:3000

## Build de produção

```bash
npm run build
npm run start
```

## Configuração

Os links de checkout da Kiwify ficam centralizados em [`src/lib/checkout.ts`](src/lib/checkout.ts):

```ts
export const CHECKOUT = {
  mensal: "https://pay.kiwify.com.br/...",
  trimestral: "https://pay.kiwify.com.br/...",
  anual: "https://pay.kiwify.com.br/...",
};
```

Redes sociais e informações de contato ficam em [`src/components/Footer.tsx`](src/components/Footer.tsx).

## Deploy (Vercel)

1. Importe este repositório em [vercel.com/new](https://vercel.com/new).
2. A Vercel detecta o Next.js automaticamente — nenhuma configuração extra é necessária.
3. Clique em **Deploy**.

Nenhuma variável de ambiente é necessária.

## Estrutura

```
src/
  app/            # rotas, layout, estilos globais, favicon (icon.svg)
  components/     # seções e componentes de UI (Hero, Navbar, Comunidade, ...)
  lib/            # utilitários e configuração (checkout.ts)
public/images/    # imagens do site
```
