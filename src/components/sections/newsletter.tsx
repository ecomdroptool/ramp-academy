"use client";

import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function Newsletter() {
  return (
    <section id="newsletter" className="py-24 sm:py-32 bg-offwhite">
      <div className="mx-auto max-w-2xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-medium uppercase tracking-widest text-lime-contrast">
            Newsletter
          </p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-void">
            Receba 1 Ideia de SaaS{" "}
            <br className="hidden sm:block" />
            Lucrativa Por Semana
          </h2>
          <p className="mt-4 text-muted-text leading-relaxed">
            Toda segunda no seu email: ideias validadas, tutoriais práticos e
            cases reais de alunos que estão faturando.
          </p>
        </motion.div>

        {/* Form */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-10 space-y-3"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="flex flex-col sm:flex-row gap-3">
            <Input
              type="text"
              placeholder="Seu nome"
              className="h-12 rounded-xl bg-white border-border-subtle text-void placeholder:text-muted-text/50 px-4 flex-1"
            />
            <Input
              type="email"
              placeholder="Seu melhor email"
              className="h-12 rounded-xl bg-white border-border-subtle text-void placeholder:text-muted-text/50 px-4 flex-1"
            />
          </div>
          <Button
            type="submit"
            className="w-full sm:w-auto bg-lime text-void font-semibold hover:bg-lime-dark rounded-full px-8 h-12 text-base border-0 cursor-pointer group"
          >
            <Send size={16} className="mr-2" />
            Quero Receber
          </Button>
        </motion.form>

        {/* Social proof */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-6 flex items-center justify-center gap-2"
        >
          {/* Mini avatars */}
          <div className="flex -space-x-2">
            {["V", "G", "C", "A"].map((letter, i) => (
              <div
                key={letter}
                className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-offwhite bg-void text-[10px] font-bold text-white"
                style={{ zIndex: 4 - i }}
              >
                {letter}
              </div>
            ))}
          </div>
          <p className="text-sm text-muted-text">
            Junte-se a <span className="font-semibold text-void">500+</span>{" "}
            founders
          </p>
        </motion.div>
      </div>
    </section>
  );
}
