"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

const credentials = [
  { label: "Ex-BTG Pactual", emoji: "🏦" },
  { label: "Holanda", emoji: "🇳🇱" },
  { label: "Certificado Base44", emoji: "✅" },
  { label: "Engenheiro de Software", emoji: "💻" },
];

export function AboutFounder() {
  return (
    <section id="sobre" className="py-24 sm:py-32 bg-void relative overflow-hidden">
      {/* Subtle accent gradient */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[radial-gradient(circle,rgba(205,255,80,0.06),transparent_70%)]" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[radial-gradient(circle,rgba(205,255,80,0.04),transparent_70%)]" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid gap-12 md:gap-16 md:grid-cols-[1fr_1.5fr] items-center">
          {/* Avatar side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center md:items-start"
          >
            {/* Avatar placeholder */}
            <div className="relative">
              <div className="h-48 w-48 sm:h-56 sm:w-56 rounded-3xl bg-void-light border border-white/10 flex items-center justify-center">
                <span className="font-display text-6xl font-black text-white/20">
                  P
                </span>
              </div>
              {/* Lime accent dot */}
              <div className="absolute -bottom-2 -right-2 h-8 w-8 rounded-full bg-lime" />
            </div>

            {/* Credentials badges */}
            <div className="mt-8 flex flex-wrap gap-2 justify-center md:justify-start">
              {credentials.map((c) => (
                <Badge
                  key={c.label}
                  className="rounded-full border border-white/10 bg-white/5 text-white/70 text-xs px-3 py-1.5 font-normal"
                >
                  <span className="mr-1.5">{c.emoji}</span>
                  {c.label}
                </Badge>
              ))}
            </div>
          </motion.div>

          {/* Bio side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <p className="text-sm font-medium uppercase tracking-widest text-lime">
              Quem está por trás
            </p>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white">
              Quem é Pedro
            </h2>

            <div className="mt-6 space-y-4 text-white/50 leading-relaxed">
              <p>
                Engenheiro de Software formado, trabalhou no BTG Pactual e hoje mora na
                Holanda. É um dos únicos mentores oficiais certificados pela Base44 no
                Brasil — a melhor IA para construir apps do mundo, recentemente comprada
                pela Wix por US$80 milhões.
              </p>
              <p>
                Criou o método Primeiro App Lucrativo para que qualquer pessoa consiga
                criar, lançar e faturar com seu próprio app usando IA — mesmo sem nunca
                ter escrito uma linha de código.
              </p>
            </div>

            {/* Quote */}
            <div className="mt-8 border-l-2 border-lime pl-6">
              <p className="text-lg text-white/80 italic leading-relaxed">
                &ldquo;Eu ganho quando você ganha. Eu recebo comissão da plataforma
                quando você fatura. É o modelo ganha-ganha real.&rdquo;
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
