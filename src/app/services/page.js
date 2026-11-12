"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import {
  Check,
  X,
  ArrowLeft,
  ShieldCheck,
  Layers,
  Search,
  FileSignature,
  Scale,
  Sparkles,
} from "lucide-react";
import { SERVICES_PAGE_DATA } from "@/data/services";
import PageBanner from "@/components/PageBanner";

const PILLAR_ICONS = [Search, Layers, FileSignature, Scale];

export default function ServicesPage() {
  const { hero, comparison, pillars, niceCategories, cta } = SERVICES_PAGE_DATA;
  const [sectorQuery, setSectorQuery] = useState("");

  const filteredSectors = niceCategories.items.filter(
    (cat) =>
      cat.sector.includes(sectorQuery.trim()) ||
      cat.code.includes(sectorQuery.trim())
  );

  return (
    <main dir="rtl" className="bg-ivory selection:bg-forest selection:text-ivory">
      {/* 01. Hero Banner */}
      <PageBanner
        badge={hero.badge}
        title={hero.title}
        subtitle={hero.subtitle}
        currentPage="خدمات الإنابة"
        bgImage="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1600&q=85"
      />

      {/* 02. Editorial Split Section: 4 Core Service Pillars */}
      <section className="section-padding relative">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Sticky Editorial Intro (Right Column) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-5 lg:sticky lg:top-28"
            >
              <span className="section-label mb-4">منهجية العمل القانوني</span>
              <h2 className="heading-display text-3xl sm:text-4xl lg:text-[40px] text-forest leading-[1.3] mb-5">
                حماية متكاملة تُدار بدقة المحامين المتخصصين
              </h2>
              <p className="text-body text-sm sm:text-base text-walnut/80 mb-8">
                كل ملف يُعالج كأصل استراتيجي لمقاولتك. نجمع بين الخبرة القانونية
                في مساطر المكتب المغربي للملكية الصناعية والتجارية (OMPIC) والسرعة
                الرقمية.
              </p>

              {/* Editorial Luxury Image Frame */}
              <div className="relative rounded-[var(--radius-lg)] overflow-hidden border border-border shadow-[var(--shadow-card)] aspect-[16/10] bg-forest">
                <img
                  src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=900&q=85"
                  alt="التمثيل القانوني المعتمد"
                  className="h-full w-full object-cover opacity-80 mix-blend-luminosity"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest/90 via-forest/30 to-transparent" />
                <div className="absolute bottom-4 right-5 left-5 flex items-center justify-between text-ivory">
                  <span className="font-heading text-xs text-copper font-semibold">
                    توكيل رسمي معتمد
                  </span>
                  <span className="font-arabic text-xs text-ivory/80">
                    الرباط • الدار البيضاء
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Pillars List (Left Column) */}
            <div className="lg:col-span-7 space-y-6">
              {pillars.map((item, idx) => {
                const Icon = PILLAR_ICONS[idx % PILLAR_ICONS.length];
                return (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{
                      duration: 0.55,
                      delay: idx * 0.08,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="group relative overflow-hidden rounded-[var(--radius-lg)] bg-white border border-border p-7 sm:p-9 shadow-[var(--shadow-soft)] transition-all duration-500 hover:border-copper/60 hover:shadow-[var(--shadow-card)]"
                  >
                    {/* Giant Watermark Number */}
                    <span className="pointer-events-none select-none absolute -bottom-6 -left-3 font-display text-[110px] font-bold leading-none text-forest/[0.035] transition-transform duration-500 group-hover:scale-110 group-hover:text-copper/[0.08]">
                      {item.number}
                    </span>

                    <div className="relative z-10 flex flex-col sm:flex-row sm:items-start gap-5">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[var(--radius-md)] bg-ivory border border-border text-copper transition-colors duration-300 group-hover:bg-forest group-hover:text-ivory group-hover:border-forest">
                        <Icon className="h-5 w-5" />
                      </div>

                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <span className="font-heading text-[11px] font-bold tracking-widest text-copper">
                            المرحلة {item.number}
                          </span>
                          <span className="h-[1px] w-8 bg-border" />
                        </div>

                        <h3 className="font-display text-2xl font-bold text-forest mb-3 group-hover:text-copper transition-colors">
                          {item.title}
                        </h3>

                        <p className="text-body text-sm sm:text-[15px] text-walnut/80 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 03. Luxury Comparison: Individual vs Agency */}
      <section className="section-padding bg-parchment/50 border-y border-border relative overflow-hidden">
        <div className="container-luxury max-w-5xl relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="badge badge-accent border border-copper/25 mb-4 px-4 py-1.5 font-heading text-xs text-forest">
              {comparison.badge}
            </span>
            <h2 className="heading-display text-3xl sm:text-4xl text-forest leading-[1.35]">
              {comparison.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            {/* Individual Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5 }}
              className="rounded-[var(--radius-xl)] bg-white/85 border border-border p-8 sm:p-10 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-5 mb-6 border-b border-border">
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-walnut/85">
                    {comparison.individual.title}
                  </h3>
                  <span className="rounded-full bg-red-500/10 px-3 py-1 font-heading text-[11px] font-medium text-red-700">
                    مخاطرة عالية
                  </span>
                </div>

                <ul className="space-y-4">
                  {comparison.individual.points.map((pt, i) => (
                    <li key={i} className="flex items-start gap-3.5">
                      <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red-500/10 text-red-600">
                        <X className="h-3.5 w-3.5" />
                      </span>
                      <span className="font-arabic text-sm text-walnut/80 leading-relaxed">
                        {pt}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Agency Card (Elevated Prestige) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="relative rounded-[var(--radius-xl)] bg-forest text-ivory border-2 border-copper p-8 sm:p-10 shadow-[var(--shadow-card)] overflow-hidden"
            >
              <div className="pointer-events-none absolute -top-20 -left-20 h-56 w-56 rounded-full bg-copper/20 blur-3xl" />

              <div className="relative z-10">
                <div className="flex items-center justify-between pb-5 mb-6 border-b border-ivory/15">
                  <div>
                    <span className="font-heading text-[11px] text-copper block mb-1">
                      الخيار الموصى به
                    </span>
                    <h3 className="font-display text-xl sm:text-2xl font-bold text-ivory">
                      {comparison.agency.title}
                    </h3>
                  </div>
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-copper/20 border border-copper/40 text-copper">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                </div>

                <ul className="space-y-4">
                  {comparison.agency.points.map((pt, i) => (
                    <li key={i} className="flex items-start gap-3.5">
                      <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-copper text-white">
                        <Check className="h-3.5 w-3.5" />
                      </span>
                      <span className="font-arabic text-sm text-ivory/95 leading-relaxed">
                        {pt}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 04. Interactive Nice Classification Explorer */}
      <section className="section-padding">
        <div className="container-luxury max-w-5xl">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="badge badge-accent border border-copper/20 mb-4 px-4 py-1.5 font-heading text-xs text-forest">
              {niceCategories.badge}
            </span>
            <h2 className="heading-display text-3xl sm:text-4xl text-forest mb-3">
              {niceCategories.title}
            </h2>
            <p className="text-body text-sm sm:text-base text-walnut/80 mb-7">
              {niceCategories.subtitle}
            </p>

            {/* Quick Sector Filter Input */}
            <div className="relative max-w-md mx-auto">
              <Search className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted" />
              <input
                type="text"
                value={sectorQuery}
                onChange={(e) => setSectorQuery(e.target.value)}
                placeholder="ابحث عن قطاع نشاطك (مثلاً: التجارة، المطاعم، العقار...)"
                className="input-luxury !pr-11 !rounded-full bg-white shadow-[var(--shadow-soft)]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredSectors.map((cat, idx) => (
              <motion.div
                key={cat.code}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="group rounded-[var(--radius-md)] bg-white border border-border p-6 shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-1 hover:border-copper/60"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-ivory border border-border px-3 py-1 font-heading text-[11px] font-bold text-copper">
                    <Layers className="h-3.5 w-3.5" />
                    {cat.code}
                  </span>
                  <span className="font-heading text-[10px] text-muted">
                    OMPIC
                  </span>
                </div>
                <p className="font-arabic text-sm font-semibold text-forest leading-relaxed group-hover:text-copper transition-colors">
                  {cat.sector}
                </p>
              </motion.div>
            ))}
          </div>

          {filteredSectors.length === 0 && (
            <p className="text-center font-arabic text-sm text-muted py-8">
              لم يتم العثور على قطاع مطابق. يتولى مستشارونا تحديد الفئة الدقيقة
              لنشاطك من أصل 45 فئة دولية.
            </p>
          )}
        </div>
      </section>

      {/* 05. Architectural Bottom CTA */}
      <section className="pb-24">
        <div className="container-luxury">
          <div className="relative overflow-hidden rounded-[var(--radius-xl)] bg-forest p-10 sm:p-16 text-center text-ivory shadow-[var(--shadow-card)] border border-ivory/10">
            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1400&q=80"
              alt="Service Marque Cabinet"
              className="absolute inset-0 h-full w-full object-cover opacity-15 mix-blend-luminosity"
            />
            <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-64 w-96 rounded-full bg-copper/25 blur-3xl" />

            <div className="relative z-10 max-w-2xl mx-auto">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-copper/40 bg-copper/15 px-4 py-1.5 font-heading text-xs text-copper mb-5">
                <Sparkles className="h-3.5 w-3.5" />
                <span>إيداع رسمي خلال 48 ساعة</span>
              </span>

              <h2 className="heading-display text-3xl sm:text-4xl font-bold text-ivory mb-4">
                {cta.title}
              </h2>

              <p className="font-arabic text-sm sm:text-base text-ivory/80 mb-8 leading-relaxed">
                {cta.subtitle}
              </p>

              <Link
                href={cta.buttonHref}
                className="btn btn-secondary !px-8 !py-4 !text-sm group"
              >
                <span>{cta.buttonLabel}</span>
                <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}