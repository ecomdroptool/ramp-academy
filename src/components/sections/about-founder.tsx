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
    <section id="sobre" className="py-24 sm:py-32 bg-void">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 md:gap-16 md:grid-cols-[1fr_1.5fr] items-center">
          {/* Avatar side */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center md:items-start"
          >
            <div className="relative">
              <div className="h-48 w-48 sm:h-56 sm:w-56 rounded-2xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center">
                <span className="font-display text-6xl font-extrabold text-white/15">
                  P
                </span>
              </div>
              <div className="absolute -bottom-2 -right-2 h-6 w-6 rounded-full bg-lime" />
            </div>

            <div className="mt-8 flex flex-wrap gap-2 justify-center md:justify-start">
              {credentials.map((c, i) => (
                <motion.div
                  key={c.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.2 + i * 0.06 }}
                >
                  <Badge
                    className="rounded-full border border-white/[0.06] bg-white/[0.03] text-white/50 text-xs px-3 py-1.5 font-normal"
                  >
                    <span className="mr-1.5">{c.emoji}</span>
                    {c.label}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Bio side */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8 sm:p-10"
          >
            <p className="text-sm font-medium uppercase tracking-widest text-lime/70">
              Quem está por trás
            </p>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
              Quem é Pedro
            </h2>

            <div className="mt-6 space-y-4 text-white/40 leading-relaxed">
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

            <div className="mt-8 border-l-2 border-lime/50 pl-6">
              <p className="text-lg text-white/60 italic leading-relaxed">
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
