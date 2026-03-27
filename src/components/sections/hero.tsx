"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TextAnimate } from "@/components/ui/text-animate";
import { WordRotate } from "@/components/ui/word-rotate";
import { NeuralGrid } from "@/components/ui/neural-grid";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center bg-void overflow-hidden">
      {/* Animated neural grid background */}
      <NeuralGrid />

      {/* RAMP logo watermark — between grid and text */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
        className="absolute inset-0 z-[1] flex items-center justify-center pointer-events-none"
      >
        <Image
          src="/logos/ramp-logo.png"
          alt=""
          width={500}
          height={500}
          className="w-[280px] sm:w-[360px] md:w-[440px] lg:w-[500px] opacity-[0.07]"
          priority
        />
      </motion.div>

      {/* Subtle radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_-10%,rgba(205,255,80,0.06),transparent)]" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center pt-24 pb-20">
        {/* Headline */}
        <div className="mt-8">
          <TextAnimate
            as="h1"
            by="word"
            animation="blurInUp"
            delay={0.3}
            duration={0.8}
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.05]"
            once
          >
            Construa Apps Lucrativos com IA
          </TextAnimate>
        </div>

        {/* Subheadline with rotating word */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-6 text-lg sm:text-xl text-white/40 max-w-2xl mx-auto leading-relaxed font-normal"
        >
          Aprenda a{" "}
          <WordRotate
            words={["construir", "lançar", "vender", "escalar"]}
            className="text-lime font-semibold"
            interval={2200}
          />{" "}
          seu próprio SaaS com IA — mesmo sem saber programar.
        </motion.div>

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
              className="bg-lime text-void font-semibold hover:bg-lime-dark rounded-full px-8 h-12 text-base border-0 cursor-pointer group"
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
              className="text-white/40 hover:text-white hover:bg-white/5 rounded-full px-6 h-12 text-base cursor-pointer"
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
          className="mt-20 flex items-center justify-center gap-8 sm:gap-12 text-white/25 text-sm"
        >
          <span>500+ alunos</span>
          <span className="h-3 w-px bg-white/10" />
          <span>21 templates</span>
          <span className="h-3 w-px bg-white/10" />
          <span>12+ países</span>
        </motion.div>
      </div>

      {/* Bottom fade to offwhite */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-offwhite" />
    </section>
  );
}
