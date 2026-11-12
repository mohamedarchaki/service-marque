"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ShieldCheck, CheckCircle2, ArrowLeft, Award, Search } from "lucide-react";
import { HOME_DATA } from "@/data/home";

export default function HeroSection() {
  const { hero } = HOME_DATA;

  return (
    <section
      dir="rtl"
      className="relative overflow-hidden bg-ivory pt-4 pb-8 lg:pt-3 lg:pb-14"
    >
      <div className="pointer-events-none absolute -top-24 -left-24 h-96 w-96 rounded-full bg-copper/5 blur-3xl" />

      <div className="container-luxury relative z-10 grid items-center gap-12 lg:grid-cols-12 lg:gap-12">
        {/* Right Column */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-6 flex flex-col items-start"
        >
          <div className="badge badge-accent border border-copper/20 mb-6 px-4 py-2">
            <ShieldCheck className="h-4 w-4 text-copper" />
            <span className="font-heading text-xs font-medium text-forest">
              {hero.badge}
            </span>
          </div>

          <h1 className="heading-display text-4xl sm:text-5xl lg:text-[56px] text-forest leading-[1.22] mb-5">
            {hero.title.beforeHighlight}{" "}
            <span className="text-copper">{hero.title.highlight}</span>
            <span className="block text-walnut/85 text-2xl sm:text-3xl lg:text-[34px] mt-2">
              {hero.title.subtitle}
            </span>
          </h1>

          <p className="text-body text-base sm:text-[17px] text-walnut/80 max-w-xl mb-8">
            {hero.description}
          </p>

          <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
            <Link
              href={hero.cta.primary.href}
              className="btn btn-primary !px-8 !py-4 !text-sm group w-full sm:w-auto justify-center"
            >
              <span>{hero.cta.primary.label}</span>
              <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
            </Link>

            
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-border pt-6 w-full">
            {hero.features.map((feat) => (
              <div key={feat.id} className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-copper shrink-0" />
                <span className="font-heading text-xs font-medium text-forest">
                  {feat.label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Left Column: Luxury Editorial Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-6 relative"
        >
          <div className="relative rounded-[var(--radius-xl)] overflow-hidden border border-border shadow-[var(--shadow-card)] bg-forest aspect-[4/3.3]">
            <img
              src={hero.visual.image}
              alt={hero.visual.certificateTitle}
              className="h-full w-full object-cover opacity-65 mix-blend-luminosity scale-105 transition-transform duration-700 hover:scale-100"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest via-forest/55 to-transparent" />

            {/* Top Floating Badge */}
            <div className="absolute top-6 right-6 inline-flex items-center gap-2 rounded-full bg-forest/85 backdrop-blur-md border border-ivory/15 px-4 py-2 text-ivory">
              <Award className="h-4 w-4 text-copper" />
              <span className="font-heading text-xs font-medium">
                {hero.visual.badge}
              </span>
            </div>

            {/* Bottom Overlay Content */}
            <div className="absolute bottom-0 inset-x-0 p-6 sm:p-8 text-ivory">
              <p className="font-heading text-xs text-copper mb-1">
                {hero.visual.authority}
              </p>
              <h3 className="font-display text-2xl sm:text-3xl font-bold mb-5">
                {hero.visual.certificateTitle}
              </h3>

              <div className="grid grid-cols-2 gap-4 border-t border-ivory/15 pt-4">
                {hero.visual.stats.map((stat, i) => (
                  <div key={i}>
                    <div className="font-heading text-2xl font-bold text-copper">
                      {stat.value}
                    </div>
                    <div className="font-arabic text-xs text-ivory/75">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Floating Status Pill */}
          <div className="hidden sm:flex items-center gap-2.5 absolute -bottom-5 -right-5 rounded-full bg-white border border-border px-5 py-3 shadow-[var(--shadow-card)]">
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-heading text-xs font-semibold text-forest">
              {hero.visual.status}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}