"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowLeft, ArrowUpLeft, Sparkles } from "lucide-react";
import { MARQUES_DATA } from "@/data/marques";
import PageBanner from "@/components/PageBanner";

export default function MarquesPage() {
  const { hero, items, cta } = MARQUES_DATA;

  return (
    <main dir="rtl" className="bg-ivory selection:bg-forest selection:text-ivory">
      <PageBanner
        badge={hero.badge}
        title={hero.title}
        subtitle={hero.subtitle}
        currentPage="العلامات المسجلة"
      />

      {/* Full-Logo Gallery Grid */}
      <section className="section-padding">
        <div className="container-luxury max-w-6xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {items.map((item, idx) => (
              <motion.a
                key={item.id}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.45, delay: idx * 0.06 }}
                className="group relative overflow-hidden rounded-[var(--radius-xl)] bg-white border border-border shadow-[var(--shadow-soft)] hover:border-copper/60 hover:shadow-[var(--shadow-card)] transition-all duration-300 flex flex-col"
              >
                {/* Large Logo Showcase */}
                <div className="relative aspect-[4/3.5] w-full bg-ivory/60 flex items-center justify-center p-10 overflow-hidden">
                  {item.logoUrl ? (
                    <img
                      src={item.logoUrl}
                      alt={item.name}
                      className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <span className="font-display text-5xl font-bold tracking-widest text-forest/80 group-hover:text-copper transition-colors">
                      {item.logoType}
                    </span>
                  )}

                  <span className="absolute top-4 left-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/95 border border-border text-forest shadow-sm transition-all duration-300 group-hover:bg-forest group-hover:text-ivory group-hover:border-forest">
                    <ArrowUpLeft className="h-4 w-4" />
                  </span>
                </div>

                {/* Brand Name */}
                <div className="border-t border-border/70 bg-white px-6 py-4 text-center">
                  <h2 className="font-heading text-base font-bold tracking-wide text-forest group-hover:text-copper transition-colors">
                    {item.name}
                  </h2>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="pb-24">
        <div className="container-luxury">
          <div className="relative overflow-hidden rounded-[var(--radius-xl)] bg-forest p-10 sm:p-14 text-center text-ivory shadow-[var(--shadow-card)] border border-ivory/10">
            <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-64 w-96 rounded-full bg-copper/25 blur-3xl" />

            <div className="relative z-10 max-w-2xl mx-auto">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-copper/40 bg-copper/15 px-4 py-1.5 font-heading text-xs text-copper mb-5">
                <Sparkles className="h-3.5 w-3.5" />
                <span>حماية رسمية 100%</span>
              </span>

              <h2 className="heading-display text-3xl sm:text-4xl font-bold text-ivory mb-4">
                {cta.title}
              </h2>

              <p className="font-arabic text-sm sm:text-base text-ivory/80 mb-8 max-w-md mx-auto leading-relaxed">
                {cta.subtitle}
              </p>

              <Link
                href={cta.btnHref}
                className="btn btn-secondary !px-8 !py-4 !text-sm group"
              >
                <span>{cta.btnLabel}</span>
                <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}