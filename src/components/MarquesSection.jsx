"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowLeft, Award } from "lucide-react";
import { MARQUES_DATA } from "@/data/marques";

export default function MarquesSection() {
  const { hero, items } = MARQUES_DATA;
  const previewItems = items.slice(0, 4);

  return (
    <section dir="rtl" className="section-padding  bg-white/50 border-y border-border">
      <div className="container-luxury">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <span className="badge badge-accent border border-copper/20 mb-4 px-4 py-1.5 font-heading text-xs text-forest">
              شريك النجاح والحماية
            </span>
            <h2 className="heading-display text-3xl sm:text-4xl text-forest leading-[1.3] mb-4">
              علامات تجارية مغربية محمية بنجاح
            </h2>
            <p className="text-body text-sm sm:text-base text-walnut/80">
              ساعدنا مئات المقاولين والشركات المغربية في حيازة شهادات الملكية الفكرية الرسمية من OMPIC بكل ثقة وأمان.
            </p>
          </div>

          <Link href="/marques" className="btn btn-outline group shrink-0 self-start lg:self-auto">
            <span>عرض سجل العلامات الكامل</span>
            <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
          </Link>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {previewItems.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: idx * 0.08 }}
              className="group rounded-[var(--radius-lg)] bg-white/50 border border-border p-6 shadow-[var(--shadow-soft)] hover:border-copper/50 hover:shadow-[var(--shadow-card)] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-[var(--radius-md)] bg-forest text-copper font-heading text-lg font-bold tracking-wider group-hover:bg-copper group-hover:text-ivory transition-colors duration-300 overflow-hidden">
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

                <h3 className="font-display text-xl font-bold text-forest mb-1 group-hover:text-copper transition-colors">
                  {item.name}
                </h3>

                <p className="font-arabic text-xs text-muted mb-5">
                  {item.industry}
                </p>
              </div>

              <div className="flex items-center gap-1.5 border-t border-border/60 pt-4 font-heading text-[11px] font-semibold text-copper">
                <Award className="h-3.5 w-3.5 shrink-0" />
                <span>{item.status}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 border-t border-border/80 pt-8 text-center max-w-4xl mx-auto">
          {hero.stats.map((stat, i) => (
            <div key={i}>
              <div className="font-heading text-2xl sm:text-3xl font-bold text-copper">
                {stat.value}
              </div>
              <div className="font-arabic text-xs text-walnut/75 mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}