"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TextAnimate } from "@/components/ui/text-animate";
import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern";
import { WordRotate } from "@/components/ui/word-rotate";
import { MagneticButton } from "@/components/ui/magnetic-button";

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

      {/* Aurora gradient blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 100, -50, 0],
            y: [0, -80, 50, 0],
            scale: [1, 1.2, 0.9, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-20%] left-[10%] h-[500px] w-[500px] rounded-full bg-lime/[0.04] blur-[120px]"
        />
        <motion.div
          animate={{
            x: [0, -80, 60, 0],
            y: [0, 60, -40, 0],
            scale: [1, 0.8, 1.1, 1],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[20%] right-[5%] h-[400px] w-[400px] rounded-full bg-lime/[0.03] blur-[100px]"
        />
        <motion.div
          animate={{
            x: [0, 50, -80, 0],
            y: [0, -50, 30, 0],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[10%] left-[30%] h-[300px] w-[300px] rounded-full bg-white/[0.02] blur-[80px]"
        />
      </div>

      {/* Radial gradient glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(205,255,80,0.1),transparent)]" />

      {/* Noise texture overlay */}
      <div className="absolute inset-0 opacity-[0.015]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E\")" }} />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center pt-24 pb-20">
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

        {/* Subheadline with rotating word */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-6 text-lg sm:text-xl text-white/50 max-w-2xl mx-auto leading-relaxed font-normal"
        >
          O ecossistema completo para você{" "}
          <WordRotate
            words={["criar", "lançar", "escalar", "faturar"]}
            className="text-lime font-semibold"
            interval={2200}
          />{" "}
          seu próprio SaaS — mesmo sem saber programar.
        </motion.div>

        {/* CTAs with magnetic effect */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <MagneticButton strength={0.2}>
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
          </MagneticButton>
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
            <span className="h-1.5 w-1.5 rounded-full bg-lime/60 animate-pulse" />
            <span>500+ alunos</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-lime/60 animate-pulse" />
            <span>21 templates</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-lime/60 animate-pulse" />
            <span>12+ países</span>
          </div>
        </motion.div>
      </div>

      {/* Bottom fade to offwhite */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-offwhite" />
    </section>
  );
}
