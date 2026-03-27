"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { NumberTicker } from "@/components/ui/number-ticker";

const testimonials = [
  {
    name: "Vinícius",
    role: "App de Gestão Financeira",
    quote:
      "Nunca imaginei que conseguiria faturar tanto com um app criado por mim. O método é direto, sem enrolação.",
    value: 80000,
    label: "faturados",
    avatar: "V",
    color: "bg-lime",
  },
  {
    name: "Gerônimo",
    role: "App de Delivery",
    quote:
      "Já saí do zero e comecei a ver resultado. O suporte faz toda a diferença, você nunca fica perdido.",
    value: 5000,
    label: "faturados",
    avatar: "G",
    color: "bg-void",
  },
  {
    name: "Cris",
    role: "App de Agendamento",
    quote:
      "Criei meu primeiro app e já comecei a vender na mesma semana. Parece irreal, mas funciona.",
    value: 16000,
    label: "faturados",
    avatar: "C",
    color: "bg-void",
  },
  {
    name: "Namorada do Pedro",
    role: "Chatbot IA para Pousada",
    quote:
      "Reprovei 3 vezes em Programação na faculdade. Agora construí um chatbot com IA para a pousada da minha família — sem escrever uma linha de código.",
    value: 0,
    label: "de reprovada a criadora",
    avatar: "N",
    color: "bg-lime",
  },
];

function Stars() {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star key={i} size={11} className="fill-void/20 text-void/20" />
      ))}
    </div>
  );
}

function TestimonialCard({
  t,
  i,
}: {
  t: (typeof testimonials)[0];
  i: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: i * 0.08 }}
      className="rounded-2xl border border-border-subtle bg-white p-7 flex flex-col"
    >
      <Quote size={24} className="text-void/10 mb-2" strokeWidth={1.5} />

      <p className="text-void/70 leading-relaxed text-[15px] flex-grow">
        &ldquo;{t.quote}&rdquo;
      </p>

      {/* Value badge */}
      {t.value > 0 ? (
        <>
          <div className="mt-5 inline-flex items-baseline gap-1 rounded-full bg-void/5 px-3 py-1.5 self-start">
            <span className="text-xs font-medium text-void/40">R$</span>
            <NumberTicker
              value={t.value}
              className="font-display text-xl font-extrabold text-void"
            />
          </div>
          <p className="mt-1 text-xs text-muted-text">{t.label}</p>
        </>
      ) : (
        <div className="mt-5 inline-flex items-center rounded-full bg-void/5 px-3 py-1.5 self-start">
          <span className="font-display text-sm font-extrabold text-void">{t.label}</span>
        </div>
      )}

      {/* Author */}
      <div className="mt-4 flex items-center gap-3 pt-4 border-t border-border-subtle">
        <div
          className={`flex h-9 w-9 items-center justify-center rounded-full ${t.color} text-xs font-bold ${
            t.color === "bg-lime" ? "text-void" : "text-white"
          }`}
        >
          {t.avatar}
        </div>
        <div>
          <p className="text-sm font-semibold text-void">{t.name}</p>
          <p className="text-xs text-muted-text">{t.role}</p>
        </div>
        <div className="ml-auto">
          <Stars />
        </div>
      </div>
    </motion.div>
  );
}

export function Testimonials() {
  return (
    <section id="resultados" className="py-24 sm:py-32 bg-offwhite">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-sm font-medium uppercase tracking-widest text-muted-text">
            Resultados
          </p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-void">
            Resultados Reais de{" "}
            <br className="hidden sm:block" />
            Quem Já Começou
          </h2>
        </motion.div>

        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.name} t={t} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
