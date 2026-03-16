"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TextAnimate } from "@/components/ui/text-animate";
import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern";

export function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center bg-void overflow-hidden">
      {/* Animated grid background */}
      <AnimatedGridPattern
        width={60}
        height={60}
        className="absolute inset-0 opacity-[0.04] [mask-image:radial-gradient(600px_circle_at_center,white,transparent)]"
        strokeDasharray={2}
        numSquares={30}
        maxOpacity={0.15}
      />

      {/* Radial gradient glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(205,255,80,0.08),transparent)]" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center pt-24 pb-20">
        {/* Pill badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-white/70 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-lime animate-pulse" />
            Certificado oficial Base44 / Wix
          </span>
        </motion.div>

        {/* Headline */}
        <div className="mt-8">
          <TextAnimate
            as="h1"
            by="word"
            animation="blurInUp"
            delay={0.3}
            duration={0.8}
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.05]"
            once
          >
            Construa Apps Lucrativos com IA
          </TextAnimate>
        </div>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-6 text-lg sm:text-xl text-white/50 max-w-2xl mx-auto leading-relaxed font-normal"
        >
          O ecossistema completo para você criar, lançar e faturar com seu
          próprio SaaS — mesmo sem saber programar.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a href="#programas">
            <Button
              size="lg"
              className="bg-lime text-void font-semibold hover:bg-lime-dark rounded-full px-8 h-12 text-base lime-glow-sm border-0 cursor-pointer group"
            >
              Quero Começar
              <ArrowRight
                size={16}
                className="ml-1 transition-transform group-hover:translate-x-1"
              />
            </Button>
          </a>
          <a href="#resultados">
            <Button
              variant="ghost"
              size="lg"
              className="text-white/60 hover:text-white hover:bg-white/5 rounded-full px-6 h-12 text-base cursor-pointer"
            >
              <Play size={14} className="mr-2" />
              Ver resultados
            </Button>
          </a>
        </motion.div>

        {/* Micro stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-16 flex items-center justify-center gap-8 sm:gap-12 text-white/30 text-sm"
        >
          <div className="flex items-center gap-2">
            <span className="h-1 w-1 rounded-full bg-lime/60" />
            <span>500+ alunos</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="h-1 w-1 rounded-full bg-lime/60" />
            <span>21 templates</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="h-1 w-1 rounded-full bg-lime/60" />
            <span>12+ países</span>
          </div>
        </motion.div>
      </div>

      {/* Bottom fade to white */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-offwhite" />
    </section>
  );
}
