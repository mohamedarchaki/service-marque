"use client";

import Link from "next/link";
import { motion } from "motion/react";
import {
  ShieldCheck,
  CheckCircle2,
  ArrowLeft,
  Award,
  Sparkles,
  FileCheck2,
} from "lucide-react";
import { HERO_DATA } from "@/data/hero";

export default function HeroSection() {
  return (
    <section
      dir="rtl"
      className="relative overflow-hidden bg-ivory pt-10 pb-20 lg:pt-10 lg:pb-28"
    >
      {/* Subtle Luxury Background Accents */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-96 w-96 rounded-full bg-copper/5 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-80 w-80 rounded-full bg-forest/5 blur-3xl" />

      <div className="container-luxury relative z-10 grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
        {/* Right Column: Editorial Copy & Actions */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-7 flex flex-col items-start"
        >
          {/* Main Heading */}
          <h1 className="heading-display text-4xl sm:text-5xl lg:text-[54px] text-forest leading-[1.28] mb-6">
            {HERO_DATA.title.beforeHighlight}{" "}
            <span className="text-copper relative inline-block">
              {HERO_DATA.title.highlight}
              <span className="absolute -bottom-1 right-0 h-[3px] w-full bg-copper/30 rounded-full" />
            </span>
            <br />
            <span className="text-walnut/90 text-3xl sm:text-4xl lg:text-[42px]">
              {HERO_DATA.title.subtitle}
            </span>
          </h1>

          {/* Description */}
          <p className="text-body text-base sm:text-[17px] text-walnut/80 max-w-2xl mb-8">
            {HERO_DATA.description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
            <Link
              href={HERO_DATA.cta.primary.href}
              className="btn btn-primary !px-7 !py-3.5 !text-sm group w-full sm:w-auto justify-center"
            >
              <span>{HERO_DATA.cta.primary.label}</span>
              <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
            </Link>

            <Link
              href={HERO_DATA.cta.secondary.href}
              className="btn btn-outline !px-6 !py-3.5 !text-sm w-full sm:w-auto justify-center"
            >
              <Sparkles className="h-4 w-4 text-copper" />
              <span>{HERO_DATA.cta.secondary.label}</span>
            </Link>
          </div>

          {/* Trust Features */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full">
            {HERO_DATA.features.map((feat, idx) => (
              <motion.div
                key={feat.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.25 + idx * 0.08 }}
                className="flex items-center gap-2.5 rounded-[var(--radius-md)] border border-border bg-white/30 px-4 py-3 shadow-[var(--shadow-soft)]"
              >
                <CheckCircle2 className="h-4 w-4 shrink-0 text-copper" />
                <span className="font-heading text-xs font-medium text-forest">
                  {feat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Left Column: Luxury Visual Showcase (Replaces Form) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-5 relative"
        >
          {/* Main Luxury Card */}
          <div className="relative rounded-[var(--radius-xl)] bg-forest p-6 sm:p-8 text-ivory shadow-[var(--shadow-card)] border border-ivory/10 overflow-hidden">
            {/* Decorative Gold/Copper Corner Glow */}
            <div className="pointer-events-none absolute -top-16 -left-16 h-48 w-48 rounded-full bg-copper/20 blur-2xl" />

            {/* Top Floating Tag */}
            <div className="flex items-center justify-between mb-6">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-ivory/10 border border-ivory/15 px-3.5 py-1.5 font-heading text-[11px] font-medium text-copper">
                <Award className="h-3.5 w-3.5" />
                {HERO_DATA.visualCard.badge}
              </span>
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse" />
            </div>

            {/* Visual Image / Certificate Frame */}
            <div className="relative mb-6 overflow-hidden rounded-[var(--radius-lg)] border border-ivory/15 bg-ivory/5 aspect-[4/3] flex flex-col items-center justify-center p-6 text-center">
              {/* Background Image (Optional - fallback to luxury emblem if no image) */}
              <img
                src={HERO_DATA.visualCard.image.src}
                alt={HERO_DATA.visualCard.image.alt}
                className="absolute inset-0 h-full w-full object-cover opacity-35 mix-blend-luminosity"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />

              {/* Overlay Emblem */}
              <div className="relative z-10 flex flex-col items-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full border border-copper/40 bg-forest/80 backdrop-blur-sm shadow-lg">
                  <FileCheck2 className="h-8 w-8 text-copper" />
                </div>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-ivory mb-1.5">
                  {HERO_DATA.visualCard.certificateTitle}
                </h3>
                <p className="font-arabic text-xs text-ivory/75 max-w-xs">
                  {HERO_DATA.visualCard.authority}
                </p>
              </div>
            </div>

            {/* Bottom Stats Bar */}
            <div className="grid grid-cols-2 gap-4 border-t border-ivory/10 pt-5">
              {HERO_DATA.visualCard.stats.map((stat, i) => (
                <div
                  key={i}
                  className="rounded-[var(--radius-md)] bg-ivory/5 border border-ivory/10 p-3.5 text-center"
                >
                  <div className="font-heading text-xl sm:text-2xl font-bold text-copper">
                    {stat.value}
                  </div>
                  <div className="font-arabic text-[11px] text-ivory/75 mt-0.5">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Floating Status Pill */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="hidden sm:flex items-center gap-2.5 absolute -bottom-5 -right-4 rounded-full bg-white/60 border border-border px-4 py-2.5 shadow-[var(--shadow-card)]"
          >
            <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
            <span className="font-heading text-xs font-semibold text-forest">
              {HERO_DATA.visualCard.status}
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}