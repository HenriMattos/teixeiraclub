import React from "react";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { FeatureCard } from "@/components/FeatureCard";
import { ProblemSection } from "@/components/ProblemSection";
import { ComparisonSection } from "@/components/ComparisonSection";
import { FounderSection } from "@/components/FounderSection";
import { Stats } from "@/components/Stats";
import { Timeline } from "@/components/Timeline";
import { Comunidade } from "@/components/Comunidade";
import { Testimonials } from "@/components/Testimonials";
import { PricingCard } from "@/components/PricingCard";
import { FAQ } from "@/components/FAQ";
import { MobileBar } from "@/components/MobileBar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/Button";
import { Zap, Flame, Users, Trophy, Medal, Crown, ArrowRight, ShieldCheck, Smartphone, CreditCard } from "lucide-react";

export default function Home() {
  return (
    <>
      {/* ===== HERO ===== */}
      <Hero />

      {/* ===== O PROBLEMA ===== */}
      <Section
        id="problema"
        label="O PROBLEMA"
        title="Correr sozinho é difícil."
        subtitle="A maioria dos corredores enfrenta os mesmos obstáculos. O Teixeira Club resolve os quatro de uma vez."
        dark
      >
        <ProblemSection />
      </Section>

      {/* ===== A SOLUÇÃO ===== */}
      <Section
        id="solucao"
        label="A SOLUÇÃO"
        title="Um clube para quem quer mais."
        subtitle="Evoluir, criar conexões e viver o esporte de uma nova forma."
        dark
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          <FeatureCard
            icon={<Zap className="w-8 h-8 text-[#FFD900]" />}
            title="Comunidade"
            description="Um ambiente com pessoas que compartilham da mesma mentalidade e energia."
            delay={0}
          />
          <FeatureCard
            icon={<Flame className="w-8 h-8 text-[#FFD900]" />}
            title="Treinos"
            description="Momentos para correr, se desafiar e evoluir em grupo."
            delay={0.1}
          />
          <FeatureCard
            icon={<Trophy className="w-8 h-8 text-[#FFD900]" />}
            title="Desafios"
            description="Metas e competições saudáveis para manter sua consistência em alta."
            delay={0.2}
          />
          <FeatureCard
            icon={<ArrowRight className="w-8 h-8 text-[#FFD900]" />}
            title="Networking"
            description="Conexões que vão muito além do asfalto e da pista de corrida."
            delay={0.3}
          />
        </div>
      </Section>

      {/* ===== COMPARATIVO ===== */}
      <Section
        id="comparativo"
        label="COMPARATIVO"
        title="Por que o Teixeira Club é diferente?"
        subtitle="Sozinho você tem obstáculos. Aqui você tem estrutura, comunidade e resultado."
      >
        <ComparisonSection />
      </Section>

      {/* ===== O MOVIMENTO ===== */}
      <Section
        id="movimento"
        label="O MOVIMENTO"
        title="Números que contam nossa história."
        subtitle="Mais de 847 corredores já fazem parte — e o número cresce a cada semana."
      >
        <Stats
          items={[
            { value: 847, suffix: "+", label: "membros ativos" },
            { value: 1000, suffix: "+", label: "km juntos" },
            { value: 365, suffix: "", label: "dias evoluindo" },
          ]}
        />
      </Section>

      {/* ===== COMO FUNCIONA ===== */}
      <Section
        id="como-funciona"
        label="COMO FUNCIONA"
        title="Simples, direto, eficiente."
        dark
      >
        <Timeline
          steps={[
            {
              number: "01",
              title: "Escolha seu plano",
              description: "Selecione a opção que mais combina com seu objetivo e momento de evolução.",
            },
            {
              number: "02",
              title: "Entre na comunidade exclusiva",
              description: "Acesso imediato ao grupo exclusivo no WhatsApp com toda a comunidade.",
            },
            {
              number: "03",
              title: "Participe dos desafios",
              description: "Metas coletivas e individuais para manter todos no ritmo e motivados.",
            },
            {
              number: "04",
              title: "Evolua junto",
              description: "Cresça com pessoas que têm os mesmos objetivos e a mesma energia.",
            },
          ]}
        />
      </Section>

      {/* ===== COMUNIDADE ===== */}
      <Section
        id="comunidade"
        label="DENTRO DO TEIXEIRA CLUB"
        title="Uma comunidade completa para quem quer evoluir dentro e fora da corrida."
        subtitle="Treinos, conexões, experiências e benefícios para quem escolheu estar em movimento."
        dark
      >
        <Comunidade />
      </Section>

      {/* ===== QUEM ESTÁ POR TRÁS ===== */}
      <Section
        id="fundador"
        label="QUEM ESTÁ POR TRÁS"
        title=""
        dark
      >
        <FounderSection />
      </Section>

      {/* ===== DEPOIMENTOS ===== */}
      <Section
        id="depoimentos"
        label="DEPOIMENTOS"
        title="Quem faz parte sente a diferença."
        dark
      >
        <Testimonials />
      </Section>

      {/* ===== PLANOS ===== */}
      <Section
        id="planos"
        label="PLANOS"
        title="Escolha seu nível de evolução."
        subtitle="Selecione o plano ideal e comece agora."
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-4xl mx-auto">
          <PricingCard
            icon={<Zap className="w-6 h-6 text-[#FFD900]" />}
            name="Mensal"
            price="R$29,90"
            period="/mês"
            features={[
              "Comunidade Teixeira Club",
              "Grupo exclusivo",
              "Participação nos desafios",
              "Conteúdos exclusivos",
            ]}
            buttonText="COMEÇAR"
            delay={0}
          />
          <PricingCard
            icon={<Crown className="w-6 h-6 text-[#FFD900]" />}
            name="Trimestral"
            price="R$79,90"
            period="/trimestre"
            features={[
              "Tudo do plano mensal",
              "Melhor custo-benefício",
              "Acesso antecipado a eventos",
            ]}
            badge="MAIS ESCOLHIDO"
            featured
            buttonText="ENTRAR NO CLUBE"
            delay={0.15}
          />
          <PricingCard
            icon={<Medal className="w-6 h-6 text-[#FFD900]" />}
            name="Anual"
            price="R$190,90"
            period="/ano"
            features={[
              "Tudo incluso",
              "Maior economia do clube",
              "Vivência completa da comunidade",
            ]}
            badge="MELHOR ECONOMIA"
            buttonText="ASSINAR AGORA"
            delay={0.3}
          />
        </div>
      </Section>

      {/* ===== GARANTIAS ===== */}
      <div className="relative py-16 md:py-20 px-6 overflow-hidden bg-[#050505]">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-[#FFD900]/10 border border-[#FFD900]/20 flex items-center justify-center">
                <ShieldCheck className="w-6 h-6 text-[#FFD900]" />
              </div>
              <h4 className="font-heading text-lg tracking-wider mb-2">Garantia de 7 dias</h4>
              <p className="text-sm text-white/40 leading-relaxed">
                Teste por 7 dias. Se não fizer sentido, devolvemos 100% — sem perguntas.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-[#FFD900]/10 border border-[#FFD900]/20 flex items-center justify-center">
                <Smartphone className="w-6 h-6 text-[#FFD900]" />
              </div>
              <h4 className="font-heading text-lg tracking-wider mb-2">Acesso imediato</h4>
              <p className="text-sm text-white/40 leading-relaxed">
                Pagamento confirmado, acesso liberado na hora para toda a comunidade.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-[#FFD900]/10 border border-[#FFD900]/20 flex items-center justify-center">
                <CreditCard className="w-6 h-6 text-[#FFD900]" />
              </div>
              <h4 className="font-heading text-lg tracking-wider mb-2">Pagamento seguro</h4>
              <p className="text-sm text-white/40 leading-relaxed">
                Dados protegidos com criptografia de ponta a ponta em todas as transações.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ===== FAQ ===== */}
      <Section
        id="faq"
        label="FAQ"
        title="Perguntas frequentes"
        dark
      >
        <FAQ />
      </Section>

      {/* ===== CTA FINAL ===== */}
      <section className="relative min-h-[80vh] flex items-center justify-center text-center px-6 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,217,0,0.08)_0%,transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_70%,rgba(255,217,0,0.04)_0%,transparent_50%)]" />

        <div className="relative z-10 max-w-2xl">
          <p className="font-heading text-sm tracking-[0.3em] text-[#FFD900]/60 mb-6 uppercase">
            +847 MEMBROS ATIVOS
          </p>
          <h2 className="font-heading text-4xl md:text-6xl lg:text-7xl tracking-[0.04em] text-[#FFD900] mb-4">
            TEIXEIRA CLUB
          </h2>
          <p className="font-heading text-2xl md:text-4xl tracking-[0.04em] mb-4">
            Faça parte do movimento.
          </p>
          <p className="text-white/40 text-sm md:text-base mb-6 max-w-sm mx-auto">
            Treinos, comunidade, desafios e conexões — tudo em um só lugar.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 mb-10 text-xs text-white/30 font-heading tracking-[0.2em] uppercase">
            <span className="flex items-center gap-2">
              <ShieldCheck className="w-3.5 h-3.5 text-[#FFD900]" />
              Garantia de 7 dias
            </span>
            <span className="flex items-center gap-2">
              <Smartphone className="w-3.5 h-3.5 text-[#FFD900]" />
              Acesso imediato
            </span>
            <span className="flex items-center gap-2">
              <CreditCard className="w-3.5 h-3.5 text-[#FFD900]" />
              Pagamento seguro
            </span>
          </div>

          <Button
            variant="primary"
            size="lg"
            icon={<Zap className="w-4 h-4" />}
            className="animate-glow"
          >
            ENTRAR PARA O CLUBE
          </Button>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none" />
      </section>

      {/* ===== FOOTER ===== */}
      <Footer />

      {/* ===== MOBILE BAR ===== */}
      <MobileBar />
    </>
  );
}
