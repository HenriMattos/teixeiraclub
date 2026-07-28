import type { Metadata } from "next";
import { ThankYou } from "@/components/ThankYou";

export const metadata: Metadata = {
  title: "Bem-vindo ao Teixeira Club",
  description: "Seu acesso está liberado. Entre na comunidade exclusiva no WhatsApp.",
  robots: { index: false, follow: false },
};

export default function ObrigadoPage() {
  return <ThankYou />;
}
