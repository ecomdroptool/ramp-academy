"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Programas", href: "#programas" },
  { label: "Resultados", href: "#resultados" },
  { label: "Sobre", href: "#sobre" },
  { label: "Newsletter", href: "#newsletter" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/90 backdrop-blur-xl border-b border-border-subtle shadow-[0_1px_3px_rgba(0,0,0,0.04)]"
            : "bg-transparent"
        }`}
      >
        <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          {/* Logo */}
          <a href="#" className="flex items-baseline gap-0.5 group">
            <span
              className={`font-display text-xl font-black tracking-tight transition-colors duration-300 ${
                scrolled ? "text-void" : "text-white"
              }`}
            >
              RAMP
            </span>
            <span
              className={`font-display text-xl font-400 tracking-tight transition-colors duration-300 ${
                scrolled ? "text-void/60" : "text-white/60"
              }`}
            >
              Academy
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors duration-300 hover:opacity-100 ${
                  scrolled
                    ? "text-muted-text hover:text-void"
                    : "text-white/70 hover:text-white"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA + Mobile menu */}
          <div className="flex items-center gap-3">
            <a href="#programas">
              <Button
                className="hidden md:inline-flex bg-lime text-void font-semibold hover:bg-lime-dark rounded-full px-5 h-9 text-sm border-0 cursor-pointer"
              >
                Começar Agora
              </Button>
            </a>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`md:hidden p-2 rounded-lg transition-colors ${
                scrolled ? "text-void" : "text-white"
              }`}
              aria-label="Menu"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-16 z-40 bg-white/95 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col items-center gap-6 pt-12">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-lg font-medium text-void hover:text-void/70 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a href="#programas" onClick={() => setMobileOpen(false)}>
                <Button className="bg-lime text-void font-semibold hover:bg-lime-dark rounded-full px-8 h-11 text-base border-0 cursor-pointer">
                  Começar Agora
                </Button>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
