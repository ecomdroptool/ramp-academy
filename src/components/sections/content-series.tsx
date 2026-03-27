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
    color: "bg-lime/10 text-lime-contrast",
    iconColor: "text-lime-contrast",
  },
  {
    icon: Video,
    hashtag: "#IAnaVidaReal",
    title: "IA na Vida Real",
    description:
      "Episódios semanais de reflexão e opinião sobre IA. O que funciona, o que falha, o que muda.",
    frequency: "Semanal",
    owner: "Pedro",
    color: "bg-blue-50 text-blue-700",
    iconColor: "text-blue-600",
  },
  {
    icon: GraduationCap,
    hashtag: "#IAnaFaculdade",
    title: "IA na Faculdade",
    description:
      "Como usar IA para estudar mais inteligente. Resumos, flashcards, exercícios — direto do campus.",
    frequency: "2x/semana",
    owner: "Pedro",
    color: "bg-purple-50 text-purple-700",
    iconColor: "text-purple-600",
  },
  {
    icon: Heart,
    hashtag: "#ReprovouECriou",
    title: "Namorada Builds",
    description:
      "Reprovou 3x em Programação. Agora constrói um chatbot com IA para a pousada da família.",
    frequency: "Semanal",
    owner: "Casal",
    color: "bg-pink-50 text-pink-700",
    iconColor: "text-pink-600",
  },
  {
    icon: Megaphone,
    hashtag: "#MarketingComIA",
    title: "Marketing com IA",
    description:
      "Como escalar marketing usando IA e Claude Code. Ads, copy, funis e automações.",
    frequency: "3x/semana",
    owner: "Kenzo",
    color: "bg-amber-50 text-amber-700",
    iconColor: "text-amber-600",
  },
];

export function ContentSeries() {
  return (
    <section id="conteudo" className="py-24 sm:py-32 bg-void overflow-hidden">
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
            Conteúdo gratuito
          </p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
            5 Séries. Todos os Dias.{" "}
            <br className="hidden sm:block" />
            Tudo de Graça.
          </h2>
          <p className="mt-4 text-white/40 leading-relaxed max-w-2xl mx-auto">
            Acompanhe no Instagram e aprenda IA na prática — do técnico ao
            marketing. Pedro constrói, Kenzo vende. Juntos ensinam o ciclo
            completo.
          </p>
        </motion.div>

        {/* Series grid */}
        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {series.map((s, i) => (
            <motion.div
              key={s.hashtag}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group relative rounded-2xl border border-white/[0.06] bg-white/[0.03] p-6 hover:bg-white/[0.06] transition-colors"
            >
              <div className="flex items-start gap-4">
                <div
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${s.color}`}
                >
                  <s.icon size={20} />
                </div>
                <div className="min-w-0">
                  <span className="text-xs font-semibold text-lime">
                    {s.hashtag}
                  </span>
                  <h3 className="mt-0.5 font-display text-lg font-extrabold text-white">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm text-white/40 leading-relaxed">
                    {s.description}
                  </p>
                  <div className="mt-3 flex items-center gap-3 text-xs text-white/30">
                    <span className="inline-flex items-center gap-1 rounded-full bg-white/5 px-2 py-0.5">
                      {s.frequency}
                    </span>
                    <span>{s.owner}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA to Instagram */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <a
            href="https://instagram.com/rampacademy"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-6 py-3 text-sm font-medium text-white/60 hover:text-white hover:bg-white/10 transition-colors"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-4 w-4 fill-current"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
            Seguir @rampacademy
          </a>
        </motion.div>
      </div>
    </section>
  );
}
