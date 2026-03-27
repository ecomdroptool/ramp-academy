"use client";

import { motion } from "framer-motion";
import { Rocket, Users, Video, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const programs = [
  {
    icon: Rocket,
    title: "Primeiro App Lucrativo",
    price: "R$37",
    description:
      "O método completo para criar seu app do zero com IA, montar a estrutura de vendas e faturar — mesmo sem saber programar.",
    features: ["9 módulos passo a passo", "21 templates prontos", "Garantia de 60 dias"],
    cta: "Começar Agora",
    href: "#",
    featured: true,
    badge: "Mais popular",
  },
  {
    icon: Users,
    title: "Comunidade Founders",
    price: "R$98/mês",
    description:
      "Networking estratégico, lives semanais, tira-dúvidas ao vivo e análise de apps. Cercado de quem está construindo junto.",
    features: ["Lives semanais", "Discord + WhatsApp", "Análise de apps ao vivo"],
    cta: "Participar",
    href: "#",
    featured: false,
    badge: null,
  },
  {
    icon: Video,
    title: "Cohort ao Vivo",
    price: "Em breve",
    description:
      "4 semanas ao vivo com Pedro construindo seu app junto com você. Turmas limitadas, resultados acelerados.",
    features: ["8 encontros ao vivo", "Turmas de 30-50 alunos", "Suporte direto"],
    cta: "Entrar na lista",
    href: "#newsletter",
    featured: false,
    badge: "Em breve",
  },
];

function ProgramCard({ program, i }: { program: (typeof programs)[0]; i: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: i * 0.08 }}
      className="relative"
    >
      {program.badge && (
        <Badge
          className={`absolute -top-3 left-6 z-10 rounded-full px-3 py-1 text-xs font-semibold border-0 ${
            program.featured
              ? "bg-lime text-void"
              : "bg-void text-white"
          }`}
        >
          {program.badge}
        </Badge>
      )}

      <div
        className={`rounded-2xl border bg-white p-8 flex flex-col h-full transition-colors ${
          program.featured
            ? "border-void/20"
            : "border-border-subtle hover:border-void/10"
        }`}
      >
        <div
          className={`flex h-10 w-10 items-center justify-center rounded-lg ${
            program.featured ? "bg-void" : "bg-subtle"
          }`}
        >
          <program.icon
            size={18}
            className={program.featured ? "text-lime" : "text-muted-text"}
          />
        </div>

        <h3 className="mt-5 font-display text-xl font-bold text-void">
          {program.title}
        </h3>
        <p className="mt-1 text-2xl font-extrabold text-void">
          {program.price}
        </p>

        <p className="mt-3 text-sm text-muted-text leading-relaxed flex-grow">
          {program.description}
        </p>

        <ul className="mt-5 space-y-2">
          {program.features.map((feature) => (
            <li
              key={feature}
              className="flex items-center gap-2 text-sm text-void/60"
            >
              <span className="h-1 w-1 rounded-full bg-void/30 flex-shrink-0" />
              {feature}
            </li>
          ))}
        </ul>

        <a
          href={program.href}
          className={`mt-6 inline-flex items-center justify-center gap-2 rounded-full px-6 h-11 text-sm font-semibold transition-colors self-start group ${
            program.featured
              ? "bg-void text-white hover:bg-void/90"
              : "bg-subtle text-void hover:bg-border-subtle"
          }`}
        >
          {program.cta}
          <ArrowRight
            size={14}
            className="transition-transform group-hover:translate-x-1"
          />
        </a>
      </div>
    </motion.div>
  );
}

export function Programs() {
  return (
    <section id="programas" className="py-24 sm:py-32 bg-offwhite">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-sm font-medium uppercase tracking-widest text-muted-text">
            Programas
          </p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-void">
            Seu Caminho Para Faturar com Apps
          </h2>
        </motion.div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {programs.map((program, i) => (
            <ProgramCard key={program.title} program={program} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
