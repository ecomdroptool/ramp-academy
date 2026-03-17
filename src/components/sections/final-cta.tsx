"use client";

import { motion } from "framer-motion";
import { ArrowRight, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern";
import { MagneticButton } from "@/components/ui/magnetic-button";

export function FinalCTA() {
  return (
    <section className="relative py-24 sm:py-32 bg-void overflow-hidden">
      {/* Grid pattern background */}
      <AnimatedGridPattern
        width={50}
        height={50}
        className="absolute inset-0 opacity-[0.03] [mask-image:radial-gradient(500px_circle_at_center,white,transparent)]"
        strokeDasharray={2}
        numSquares={20}
        maxOpacity={0.1}
      />

      {/* Aurora blobs */}
      <motion.div
        animate={{
          x: [0, 80, -40, 0],
          y: [0, -60, 40, 0],
          scale: [1, 1.2, 0.8, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[10%] left-[20%] w-[400px] h-[400px] bg-lime/[0.04] rounded-full blur-[130px]"
      />
      <motion.div
        animate={{
          x: [0, -60, 50, 0],
          y: [0, 40, -30, 0],
        }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[10%] right-[15%] w-[350px] h-[350px] bg-lime/[0.03] rounded-full blur-[110px]"
      />

      {/* Top lime glow line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-lime/30 to-transparent" />

      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Pronto para criar seu{" "}
            <span className="text-lime">primeiro app lucrativo</span>?
          </h2>

          <p className="mt-4 text-white/40 text-lg max-w-xl mx-auto">
            Comece hoje por um valor simbólico e tenha acesso ao método completo
            + 21 templates prontos para faturar.
          </p>

          {/* CTA with magnetic effect */}
          <div className="mt-10">
            <MagneticButton strength={0.15}>
              <a href="#">
                <Button
                  size="lg"
                  className="bg-lime text-void font-semibold hover:bg-lime-dark rounded-full px-10 h-14 text-lg lime-glow border-0 cursor-pointer group"
                >
                  Começar Agora por R$37
                  <ArrowRight
                    size={18}
                    className="ml-2 transition-transform group-hover:translate-x-1"
                  />
                </Button>
              </a>
            </MagneticButton>
          </div>

          {/* Guarantee — Glass style */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] backdrop-blur-xl px-5 py-2.5"
          >
            <Shield size={16} className="text-lime flex-shrink-0" />
            <span className="text-sm text-white/60">
              60 dias de garantia ou seu dinheiro de volta{" "}
              <span className="text-lime font-semibold">+ R$200</span>
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
