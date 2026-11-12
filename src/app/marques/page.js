"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { Search, ShieldCheck, ArrowLeft, Sparkles } from "lucide-react";
import { MARQUES_DATA } from "@/data/marques";
import PageBanner from "@/components/PageBanner";

export default function MarquesPage() {
  const { hero, categories, items, cta } = MARQUES_DATA;
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredItems = items.filter((item) => {
    const matchesCategory =
      activeCategory === "all" || item.category === activeCategory;
    const q = searchQuery.trim().toLowerCase();
    const matchesSearch =
      !q ||
      item.name.toLowerCase().includes(q) ||
      item.industry.toLowerCase().includes(q);
    return matchesCategory && matchesSearch;
  });

  return (
    <main dir="rtl" className="bg-ivory selection:bg-forest selection:text-ivory">
      <PageBanner
        badge={hero.badge}
        title={hero.title}
        subtitle={hero.subtitle}
        currentPage="العلامات المسجلة"
      />

      <section className="section-padding">
        <div className="container-luxury max-w-5xl">
          {/* Search + Category Filter */}
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-10 bg-white border border-border p-4 rounded-[var(--radius-xl)] shadow-[var(--shadow-soft)]">
            <div className="relative w-full md:max-w-xs">
              <Search className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="بحث باسم العلامة أو القطاع..."
                className="input-luxury !pr-11 !py-2.5 !rounded-full text-sm"
              />
            </div>

            <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto justify-start md:justify-end">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveCategory(cat.id)}
                  className={`rounded-full px-4 py-2 font-heading text-[11px] font-semibold transition-all ${
                    activeCategory === cat.id
                      ? "bg-forest text-ivory shadow-sm"
                      : "bg-ivory text-forest border border-border hover:border-copper/50"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Brands Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item, idx) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35, delay: idx * 0.03 }}
                  className="group rounded-[var(--radius-lg)] bg-white border border-border p-6 shadow-[var(--shadow-soft)] hover:border-copper/60 hover:shadow-[var(--shadow-card)] transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="flex h-14 w-14 items-center justify-center rounded-[var(--radius-md)] bg-forest text-copper font-heading text-base font-bold tracking-wide group-hover:bg-copper group-hover:text-ivory transition-colors duration-300 overflow-hidden">
                        {item.logoUrl ? (
                          <img
                            src={item.logoUrl}
                            alt={item.name}
                            className="h-full w-full object-cover"
                          />
                        ) : (
                          item.logoType
                        )}
                      </div>

                      <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 border border-emerald-500/15 px-3 py-1 font-heading text-[10px] font-bold text-emerald-700">
                        <ShieldCheck className="h-3.5 w-3.5" />
                        {item.status}
                      </span>
                    </div>

                    <h3 className="font-display text-xl font-bold text-forest mb-1 group-hover:text-copper transition-colors">
                      {item.name}
                    </h3>
                    <p className="font-arabic text-xs text-muted leading-relaxed">
                      {item.industry}
                    </p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {filteredItems.length === 0 && (
            <div className="rounded-[var(--radius-lg)] bg-white border border-border p-12 text-center shadow-sm">
              <p className="font-display text-xl font-bold text-forest mb-1">
                لا توجد نتائج مطابقة
              </p>
              <p className="font-arabic text-sm text-muted">
                تواصل معنا لمعرفة ما إذا كان الاسم الذي تبحث عنه متاحاً للتسجيل.
              </p>
            </div>
          )}
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
                <span>تأكيد الإتاحة خلال ساعات</span>
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