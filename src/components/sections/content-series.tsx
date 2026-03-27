"use client";

import { motion } from "framer-motion";
import {
  Terminal,
  Video,
  GraduationCap,
  Heart,
  Megaphone,
} from "lucide-react";

const series = [
  {
    icon: Terminal,
    hashtag: "#100DiasDeClaude",
    title: "100 Dias de Claude Code",
    description:
      "1 dica de IA por dia durante 100 dias. Carrosseis e Reels práticos para todos os níveis.",
    frequency: "Diário",
    owner: "Pedro",
  },
  {
    icon: Video,
    hashtag: "#IAnaVidaReal",
    title: "IA na Vida Real",
    description:
      "Episódios semanais de reflexão e opinião sobre IA. O que funciona, o que falha, o que muda.",
    frequency: "Semanal",
    owner: "Pedro",
  },
  {
    icon: GraduationCap,
    hashtag: "#IAnaFaculdade",
    title: "IA na Faculdade",
    description:
      "Como usar IA para estudar mais inteligente. Resumos, flashcards, exercícios — direto do campus.",
    frequency: "2x/semana",
    owner: "Pedro",
  },
  {
    icon: Heart,
    hashtag: "#ReprovouECriou",
    title: "Namorada Builds",
    description:
      "Reprovou 3x em Programação. Agora constrói um chatbot com IA para a pousada da família.",
    frequency: "Semanal",
    owner: "Casal",
  },
  {
    icon: Megaphone,
    hashtag: "#MarketingComIA",
    title: "Marketing com IA",
    description:
      "Como escalar marketing usando IA e Claude Code. Ads, copy, funis e automações.",
    frequency: "3x/semana",
    owner: "Kenzo",
  },
];

export function ContentSeries() {
  return (
    <section id="conteudo" className="py-24 sm:py-32 bg-void">
      <div className="mx-auto max-w-6xl px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-sm font-medium uppercase tracking-widest text-white/30">
            Conteúdo gratuito
          </p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
            5 Séries. Todos os Dias.{" "}
            <br className="hidden sm:block" />
            Tudo de Graça.
          </h2>
          <p className="mt-4 text-white/30 leading-relaxed max-w-2xl mx-auto">
            Acompanhe no Instagram e aprenda IA na prática — do técnico ao
            marketing. Pedro constrói, Kenzo vende.
          </p>
        </motion.div>

        {/* Series grid */}
        <div className="mt-16 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {series.map((s, i) => (
            <motion.div
              key={s.hashtag}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.06 }}
              className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-5 hover:bg-white/[0.04] transition-colors"
            >
              <div className="flex items-start gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/[0.05]">
                  <s.icon size={16} className="text-white/40" />
                </div>
                <div className="min-w-0">
                  <span className="text-xs font-semibold text-lime/70">
                    {s.hashtag}
                  </span>
                  <h3 className="mt-0.5 font-display text-base font-extrabold text-white">
                    {s.title}
                  </h3>
                  <p className="mt-1.5 text-sm text-white/30 leading-relaxed">
                    {s.description}
                  </p>
                  <div className="mt-2 flex items-center gap-3 text-xs text-white/20">
                    <span>{s.frequency}</span>
                    <span>·</span>
                    <span>{s.owner}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA to Instagram */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10 text-center"
        >
          <a
            href="https://instagram.com/rampacademy"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-white/30 hover:text-white/60 transition-colors"
          >
            Seguir @rampacademy
            <span className="text-xs">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
