"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Marquee } from "@/components/ui/marquee";
import { NumberTicker } from "@/components/ui/number-ticker";

const partners = [
  { name: "Base44", logo: "/logos/base44.png", height: 22 },
  { name: "Wix", logo: "/logos/wix.svg", height: 20 },
  { name: "Claude", logo: "/logos/claude.png", height: 22 },
  { name: "ChatGPT", logo: "/logos/chatgpt.png", height: 22 },
  { name: "Vercel", logo: "/logos/vercel.svg", height: 18 },
  { name: "Supabase", logo: "/logos/supabase.webp", height: 22 },
  { name: "Stripe", logo: "/logos/stripe.webp", height: 22 },
  { name: "Hotmart", logo: "/logos/hotmart.svg", height: 22 },
];

function PartnerLogo({ partner }: { partner: (typeof partners)[0] }) {
  return (
    <div className="flex items-center gap-2.5 px-8 py-2">
      <Image
        src={partner.logo}
        alt={partner.name}
        width={partner.height}
        height={partner.height}
        className="object-contain opacity-40 grayscale"
      />
      <span className="text-sm font-medium text-muted-text/50 whitespace-nowrap">
        {partner.name}
      </span>
    </div>
  );
}

const stats = [
  { value: 500, suffix: "+", label: "Alunos ativos" },
  { value: 21, suffix: "", label: "Templates prontos" },
  { value: 12, suffix: "+", label: "Países" },
];

export function SocialProof() {
  return (
    <section className="py-16 bg-offwhite">
      <div className="mx-auto max-w-6xl px-6">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <span className="inline-flex items-center gap-1.5 rounded-full bg-void px-3 py-1 text-xs font-semibold text-lime">
            <span className="h-1.5 w-1.5 rounded-full bg-lime animate-pulse" />
            #100DiasDeClaude
          </span>
        </motion.div>

        {/* Marquee logos */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-center text-xs font-medium uppercase tracking-widest text-muted-text/50 mb-6">
            Tecnologias e parceiros
          </p>
          <Marquee pauseOnHover className="[--duration:30s] [--gap:0rem]">
            {partners.map((partner) => (
              <PartnerLogo key={partner.name} partner={partner} />
            ))}
          </Marquee>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-14 grid grid-cols-3 gap-4 sm:gap-8"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="flex items-baseline justify-center gap-0.5">
                <NumberTicker
                  value={stat.value}
                  className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-void"
                />
                <span className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold text-lime-contrast">
                  {stat.suffix}
                </span>
              </div>
              <p className="mt-1 text-sm text-muted-text/60">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
