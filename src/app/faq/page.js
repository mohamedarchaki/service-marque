"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import {
  Search,
  ChevronDown,
  ArrowLeft,
  MessageSquareText,
  Sparkles,
} from "lucide-react";
import { FAQ_PAGE_DATA } from "@/data/faqPage";
import PageBanner from "@/components/PageBanner";

export default function FaqPage() {
  const { hero, categories, items, cta } = FAQ_PAGE_DATA;
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [openId, setOpenId] = useState(items[0].id);

  const filteredItems = items.filter((item) => {
    const matchesCategory =
      activeCategory === "all" || item.category === activeCategory;
    const q = searchQuery.trim();
    const matchesSearch =
      !q || item.question.includes(q) || item.answer.includes(q);
    return matchesCategory && matchesSearch;
  });

  return (
    <main dir="rtl" className="bg-ivory selection:bg-forest selection:text-ivory">
      {/* 01. Hero Banner */}
      <PageBanner
        badge={hero.badge}
        title={hero.title}
        subtitle={hero.subtitle}
        currentPage="الأسئلة الشائعة"
        bgImage="/images/PageBanner.jpg"
      />

      {/* 02. Search & Category Filter + Accordion */}
      <section className="section-padding">
        <div className="container-luxury max-w-4xl">
          {/* Search Bar */}
          <div className="relative max-w-xl mx-auto mb-8">
            <Search className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="ابحث في الأسئلة (مثلاً: OMPIC، الرسوم، الاعتراض، الشهادة السلبية...)"
              className="input-luxury !pr-11 !rounded-full bg-white shadow-[var(--shadow-soft)]"
            />
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveCategory(cat.id)}
                  className={`rounded-full px-5 py-2.5 font-heading text-xs font-medium transition-all duration-300 ${
                    isActive
                      ? "bg-forest text-ivory shadow-[var(--shadow-soft)]"
                      : "bg-white text-walnut/80 border border-border hover:border-copper/60 hover:text-forest"
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Accordion List */}
          <div className="space-y-4">
            {filteredItems.map((item, idx) => {
              const isOpen = openId === item.id;
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: idx * 0.04 }}
                  className={`rounded-[var(--radius-lg)] border transition-all duration-300 ${
                    isOpen
                      ? "bg-white border-copper/50 shadow-[var(--shadow-card)]"
                      : "bg-white/85 border-border hover:border-muted"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenId(isOpen ? null : item.id)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-right"
                  >
                    <span className="font-display text-lg sm:text-xl font-bold text-forest leading-snug">
                      {item.question}
                    </span>
                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                        isOpen
                          ? "bg-copper text-white border-copper rotate-180"
                          : "bg-ivory text-forest border-border"
                      }`}
                    >
                      <ChevronDown className="h-4 w-4" />
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="border-t border-border/60 px-6 pb-6 pt-4">
                          <p className="text-body text-sm sm:text-[15px] text-walnut/85 leading-relaxed">
                            {item.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}

            {filteredItems.length === 0 && (
              <div className="rounded-[var(--radius-lg)] bg-white border border-border p-10 text-center">
                <MessageSquareText className="h-8 w-8 text-copper mx-auto mb-3" />
                <p className="font-display text-xl font-bold text-forest mb-1">
                  لم نجد سؤالاً مطابقاً لبحثك
                </p>
                <p className="font-arabic text-sm text-muted">
                  جرب كلمات مفتاحية أخرى أو تواصل مباشرة مع مستشارينا القانونيين.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 03. Bottom CTA */}
      <section className="pb-24">
        <div className="container-luxury max-w-5xl">
          <div className="relative overflow-hidden rounded-[var(--radius-xl)] bg-forest p-10 sm:p-14 text-center text-ivory shadow-[var(--shadow-card)] border border-ivory/10">
            <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-64 w-96 rounded-full bg-copper/25 blur-3xl" />

            <div className="relative z-10 max-w-2xl mx-auto">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-copper/40 bg-copper/15 px-4 py-1.5 font-heading text-xs text-copper mb-5">
                <Sparkles className="h-3.5 w-3.5" />
                <span>مواكبة قانونية مخصصة</span>
              </span>

              <h2 className="heading-display text-3xl sm:text-4xl font-bold text-ivory mb-4">
                {cta.title}
              </h2>

              <p className="font-arabic text-sm sm:text-base text-ivory/80 mb-8 leading-relaxed">
                {cta.subtitle}
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link
                  href={cta.primaryHref}
                  className="btn btn-secondary !px-7 !py-3.5 group"
                >
                  <span>{cta.primaryLabel}</span>
                  <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
                </Link>

              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}