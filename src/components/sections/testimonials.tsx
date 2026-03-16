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
];

function Stars() {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          size={12}
          className="fill-lime text-lime"
        />
      ))}
    </div>
  );
}

export function Testimonials() {
  return (
    <section id="resultados" className="py-24 sm:py-32 bg-offwhite">
      <div className="mx-auto max-w-6xl px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-sm font-medium uppercase tracking-widest text-lime">
            Resultados
          </p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-void">
            Resultados Reais de{" "}
            <br className="hidden sm:block" />
            Quem Já Começou
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="card-lift relative rounded-2xl border border-border-subtle bg-white p-8 flex flex-col"
            >
              {/* Quote icon */}
              <Quote
                size={32}
                className="text-lime/20 mb-2"
                strokeWidth={1.5}
              />

              {/* Quote text */}
              <p className="text-void/80 leading-relaxed text-[15px] flex-grow">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Value badge */}
              <div className="mt-6 inline-flex items-baseline gap-1 rounded-full bg-lime/10 px-4 py-2 self-start">
                <span className="text-sm font-medium text-void/60">R$</span>
                <NumberTicker
                  value={t.value}
                  className="font-display text-2xl font-black text-void"
                />
              </div>
              <p className="mt-1 text-xs text-muted-text">{t.label}</p>

              {/* Author */}
              <div className="mt-5 flex items-center gap-3 pt-5 border-t border-border-subtle">
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-full ${t.color} text-sm font-bold ${
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
          ))}
        </div>
      </div>
    </section>
  );
}
