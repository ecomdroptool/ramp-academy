"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { GlassCard } from "@/components/ui/glass-card";

const credentials = [
  { label: "Ex-BTG Pactual", emoji: "🏦" },
  { label: "Holanda", emoji: "🇳🇱" },
  { label: "Certificado Base44", emoji: "✅" },
  { label: "Engenheiro de Software", emoji: "💻" },
];

export function AboutFounder() {
  return (
    <section id="sobre" className="py-24 sm:py-32 bg-void relative overflow-hidden">
      {/* Aurora background blobs */}
      <motion.div
        animate={{
          x: [0, 60, -40, 0],
          y: [0, -40, 30, 0],
          scale: [1, 1.3, 0.9, 1],
        }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-lime/[0.05] rounded-full blur-[150px]"
      />
      <motion.div
        animate={{
          x: [0, -50, 40, 0],
          y: [0, 30, -20, 0],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-lime/[0.03] rounded-full blur-[120px]"
      />

      {/* Noise texture */}
      <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E\")" }} />

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
              <div className="h-48 w-48 sm:h-56 sm:w-56 rounded-3xl bg-white/[0.03] backdrop-blur-sm border border-white/10 flex items-center justify-center">
                <span className="font-display text-6xl font-black text-white/20">
                  P
                </span>
              </div>
              {/* Lime accent dot with glow */}
              <div className="absolute -bottom-2 -right-2 h-8 w-8 rounded-full bg-lime lime-glow-sm" />
            </div>

            {/* Credentials badges */}
            <div className="mt-8 flex flex-wrap gap-2 justify-center md:justify-start">
              {credentials.map((c, i) => (
                <motion.div
                  key={c.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
                >
                  <Badge
                    className="rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-white/70 text-xs px-3 py-1.5 font-normal hover:bg-white/10 transition-colors"
                  >
                    <span className="mr-1.5">{c.emoji}</span>
                    {c.label}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Bio side — Glass Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <GlassCard className="p-8 sm:p-10">
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
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
