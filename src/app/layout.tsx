import type { Metadata } from "next";
import { Inter, Geist_Mono, Bebas_Neue } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Teixeira Club | Corra. Conecte. Evolua.",
  description:
    "A comunidade para quem transforma quilômetros em histórias. Entre para um clube de corredores que buscam evolução, novas conexões e uma rotina mais ativa.",
  openGraph: {
    title: "Teixeira Club | Corra. Conecte. Evolua.",
    description:
      "A comunidade para quem transforma quilômetros em histórias.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${geistMono.variable} ${bebasNeue.variable} dark h-full antialiased`}
      suppressHydrationWarning
    >
      <body
        className="min-h-full flex flex-col bg-black text-white"
        style={{ fontFamily: "var(--font-inter), ui-sans-serif, system-ui, sans-serif" }}
      >
        {children}
      </body>
    </html>
  );
}
