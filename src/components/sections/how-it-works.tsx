"use client";

import { motion } from "framer-motion";
import { Lightbulb, Cpu, ShoppingBag, TrendingUp } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Lightbulb,
    title: "Escolha a ideia",
    description:
      "Acesse nossa lista de 100+ ideias de SaaS validadas ou descubra a sua com nosso método.",
  },
  {
    number: "02",
    icon: Cpu,
    title: "Crie com IA",
    description:
      "Construa seu app completo com a Base44 em dias, sem precisar escrever código.",
  },
  {
    number: "03",
    icon: ShoppingBag,
    title: "Monte as vendas",
    description:
      "Configure página de vendas, checkout e estrutura para receber pagamentos no automático.",
  },
  {
    number: "04",
    icon: TrendingUp,
    title: "Fature",
    description:
      "Atraia seus primeiros clientes e comece a faturar ainda na primeira semana.",
  },
];

export function HowItWorks() {
  return (
    <section className="py-24 sm:py-32 bg-subtle">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-sm font-medium uppercase tracking-widest text-muted-text">
            Método
          </p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-void">
            Como Funciona
          </h2>
        </motion.div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="flex flex-col items-center text-center"
            >
              <div className="relative">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-void">
                  <step.icon size={22} className="text-lime" strokeWidth={2} />
                </div>
                <span className="absolute -top-1.5 -right-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-lime text-[10px] font-bold text-void">
                  {step.number}
                </span>
              </div>

              <h3 className="mt-5 font-display text-lg font-bold text-void">
                {step.title}
              </h3>
              <p className="mt-2 text-sm text-muted-text leading-relaxed max-w-[240px]">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
