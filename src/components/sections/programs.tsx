"use client";

import { useRef } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { Rocket, Users, Video, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { MagneticButton } from "@/components/ui/magnetic-button";

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
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const { left, top } = ref.current!.getBoundingClientRect();
    mouseX.set(e.clientX - left);
    mouseY.set(e.clientY - top);
  }

  const spotlight = useMotionTemplate`
    radial-gradient(400px circle at ${mouseX}px ${mouseY}px, rgba(205,255,80,0.05), transparent 80%)
  `;

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: i * 0.1 }}
      className={`card-lift relative rounded-2xl border bg-white p-8 flex flex-col overflow-hidden ${
        program.featured
          ? "border-lime/30 ring-1 ring-lime/20"
          : "border-border-subtle"
      }`}
    >
      {/* Mouse spotlight */}
      <motion.div
        className="pointer-events-none absolute inset-0 rounded-2xl"
        style={{ background: spotlight }}
      />

      {/* Badge */}
      {program.badge && (
        <Badge
          className={`absolute -top-3 left-6 rounded-full px-3 py-1 text-xs font-semibold border-0 ${
            program.featured
              ? "bg-lime text-void"
              : "bg-void text-white"
          }`}
        >
          {program.badge}
        </Badge>
      )}

      {/* Icon */}
      <div
        className={`relative flex h-12 w-12 items-center justify-center rounded-xl ${
          program.featured ? "bg-lime/10" : "bg-subtle"
        }`}
      >
        <program.icon
          size={22}
          className={program.featured ? "text-void" : "text-muted-text"}
        />
      </div>

      {/* Title + Price */}
      <h3 className="mt-5 font-display text-xl font-bold text-void relative">
        {program.title}
      </h3>
      <p className="mt-1 font-display text-2xl font-black text-void relative">
        {program.price}
      </p>

      {/* Description */}
      <p className="mt-3 text-sm text-muted-text leading-relaxed flex-grow relative">
        {program.description}
      </p>

      {/* Features */}
      <ul className="mt-5 space-y-2 relative">
        {program.features.map((feature) => (
          <li
            key={feature}
            className="flex items-center gap-2 text-sm text-void/70"
          >
            <span className="h-1 w-1 rounded-full bg-lime flex-shrink-0" />
            {feature}
          </li>
        ))}
      </ul>

      {/* CTA */}
      <MagneticButton strength={0.15} className="mt-6 relative self-start">
        <a
          href={program.href}
          className={`inline-flex items-center justify-center gap-2 rounded-full px-6 h-11 text-sm font-semibold transition-all group ${
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
      </MagneticButton>
    </motion.div>
  );
}

export function Programs() {
  return (
    <section id="programas" className="py-24 sm:py-32 bg-offwhite">
      <div className="mx-auto max-w-6xl px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-sm font-medium uppercase tracking-widest text-lime-contrast">
            Programas
          </p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-void">
            Seu Caminho Para{" "}
            <span className="relative">
              Faturar com Apps
              <svg
                className="absolute -bottom-1 left-0 w-full"
                viewBox="0 0 300 8"
                fill="none"
              >
                <motion.path
                  d="M2 6C50 2 100 2 150 4C200 6 250 3 298 5"
                  stroke="#CDFF50"
                  strokeWidth="3"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                />
              </svg>
            </span>
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {programs.map((program, i) => (
            <ProgramCard key={program.title} program={program} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
