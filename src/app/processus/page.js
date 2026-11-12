"use client";

import Link from "next/link";
import { motion } from "motion/react";
import {
  Clock,
  FileCheck2,
  User,
  Building2,
  CheckCircle2,
  ArrowLeft,
  Sparkles,
} from "lucide-react";
import { PROCESSUS_PAGE_DATA } from "@/data/processus";
import PageBanner from "@/components/PageBanner";

export default function ProcessusPage() {
  const { hero, timeline, documents, cta } = PROCESSUS_PAGE_DATA;

  return (
    <main dir="rtl" className="bg-ivory selection:bg-forest selection:text-ivory">
      {/* 01. Hero Banner */}
      <PageBanner
        badge={hero.badge}
        title={hero.title}
        subtitle={hero.subtitle}
        currentPage="مراحل التسجيل"
        bgImage="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1600&q=85"
      />

      {/* 02. Luxury Vertical Timeline */}
      <section className="section-padding">
        <div className="container-luxury max-w-4xl">
          <div className="relative">
            {/* Vertical Line */}
            <div className="hidden sm:block absolute top-6 bottom-6 right-7 w-[1.5px] bg-gradient-to-b from-copper via-border to-forest/30" />

            <div className="space-y-8">
              {timeline.map((item, idx) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{
                    duration: 0.55,
                    delay: idx * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="relative flex flex-col sm:flex-row items-start gap-6"
                >
                  {/* Step Number Circle */}
                  <div
                    className={`relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full font-heading text-base font-bold shadow-[var(--shadow-soft)] ${
                      idx === 0
                        ? "bg-copper text-white ring-4 ring-copper/20"
                        : "bg-forest text-ivory border border-copper/40"
                    }`}
                  >
                    {item.step}
                  </div>

                  {/* Step Content Card */}
                  <div className="flex-1 rounded-[var(--radius-lg)] bg-white border border-border p-6 sm:p-8 shadow-[var(--shadow-soft)] transition-all duration-300 hover:border-copper/50 hover:shadow-[var(--shadow-card)]">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-ivory border border-border px-3 py-1 font-heading text-[11px] font-semibold text-copper">
                        <Clock className="h-3.5 w-3.5" />
                        {item.duration}
                      </span>
                    </div>

                    <h2 className="font-display text-2xl font-bold text-forest mb-3">
                      {item.title}
                    </h2>

                    <p className="text-body text-sm sm:text-[15px] text-walnut/80 mb-5">
                      {item.description}
                    </p>

                    {/* Deliverable Tag */}
                    <div className="flex items-center gap-2 border-t border-border/70 pt-4 font-heading text-xs font-medium text-forest">
                      <FileCheck2 className="h-4 w-4 text-copper shrink-0" />
                      <span>المخرج القانوني: {item.deliverable}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 03. Required Documents Split */}
      <section className="section-padding bg-parchment/50 border-y border-border">
        <div className="container-luxury max-w-5xl">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="badge badge-accent border border-copper/25 mb-4 px-4 py-1.5 font-heading text-xs text-forest">
              {documents.badge}
            </span>
            <h2 className="heading-display text-3xl sm:text-4xl text-forest mb-3">
              {documents.title}
            </h2>
            <p className="text-body text-sm sm:text-base text-walnut/80">
              {documents.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Individual */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5 }}
              className="rounded-[var(--radius-xl)] bg-white border border-border p-8 shadow-[var(--shadow-soft)]"
            >
              <div className="flex items-center gap-3.5 pb-5 mb-6 border-b border-border">
                <div className="flex h-11 w-11 items-center justify-center rounded-[var(--radius-md)] bg-ivory border border-border text-copper">
                  <User className="h-5 w-5" />
                </div>
                <h3 className="font-display text-xl font-bold text-forest">
                  {documents.individual.title}
                </h3>
              </div>

              <ul className="space-y-4">
                {documents.individual.items.map((doc, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-copper mt-1" />
                    <span className="font-arabic text-sm text-walnut/85">
                      {doc}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Company */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="rounded-[var(--radius-xl)] bg-white border border-border p-8 shadow-[var(--shadow-soft)]"
            >
              <div className="flex items-center gap-3.5 pb-5 mb-6 border-b border-border">
                <div className="flex h-11 w-11 items-center justify-center rounded-[var(--radius-md)] bg-forest text-copper">
                  <Building2 className="h-5 w-5" />
                </div>
                <h3 className="font-display text-xl font-bold text-forest">
                  {documents.company.title}
                </h3>
              </div>

              <ul className="space-y-4">
                {documents.company.items.map((doc, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-copper mt-1" />
                    <span className="font-arabic text-sm text-walnut/85">
                      {doc}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 04. Bottom CTA */}
      <section className="py-20">
        <div className="container-luxury">
          <div className="relative overflow-hidden rounded-[var(--radius-xl)] bg-forest p-10 sm:p-16 text-center text-ivory shadow-[var(--shadow-card)] border border-ivory/10">
            <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-64 w-96 rounded-full bg-copper/25 blur-3xl" />

            <div className="relative z-10 max-w-2xl mx-auto">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-copper/40 bg-copper/15 px-4 py-1.5 font-heading text-xs text-copper mb-5">
                <Sparkles className="h-3.5 w-3.5" />
                <span>بدون تنقل أو انتظار</span>
              </span>

              <h2 className="heading-display text-3xl sm:text-4xl font-bold text-ivory mb-4">
                {cta.title}
              </h2>

              <p className="font-arabic text-sm sm:text-base text-ivory/80 mb-8">
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