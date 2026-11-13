"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowLeft, ArrowUpLeft } from "lucide-react";
import { MARQUES_DATA } from "@/data/marques";

export default function MarquesSection() {
  const { items } = MARQUES_DATA;
  const previewItems = items.slice(0, 4);

  return (
    <section
      dir="rtl"
      className="section-padding bg-parchment/40 border-y border-border"
    >
      <div className="container-luxury">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <span className="badge badge-accent border border-copper/20 mb-3 px-4 py-1.5 font-heading text-xs text-forest">
              ثقة عملائنا
            </span>
            <h2 className="heading-display text-3xl sm:text-4xl text-forest">
              علامات تجارية محمية بنجاح
            </h2>
          </div>

          <Link
            href="/marques"
            className="btn btn-outline group shrink-0 self-start sm:self-auto"
          >
            <span>عرض جميع العلامات</span>
            <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
          </Link>
        </div>

        {/* Full-Logo Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {previewItems.map((item, idx) => (
            <motion.a
              key={item.id}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: idx * 0.08 }}
              className="group relative overflow-hidden rounded-[var(--radius-xl)] bg-white border border-border shadow-[var(--shadow-soft)] hover:border-copper/60 hover:shadow-[var(--shadow-card)] transition-all duration-300 flex flex-col"
            >
              {/* Large Logo Area (Takes most of the card) */}
              <div className="relative aspect-[4/3.6] w-full bg-ivory/60 flex items-center justify-center p-8 overflow-hidden">
                {item.logoUrl ? (
                  <img
                    src={item.logoUrl}
                    alt={item.name}
                    className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <span className="font-display text-4xl font-bold tracking-widest text-forest/80 group-hover:text-copper transition-colors">
                    {item.logoType}
                  </span>
                )}

                {/* External Link Pill */}
                <span className="absolute top-3.5 left-3.5 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 border border-border text-forest shadow-sm transition-all duration-300 group-hover:bg-forest group-hover:text-ivory group-hover:border-forest">
                  <ArrowUpLeft className="h-4 w-4" />
                </span>
              </div>

              {/* Minimal Name Footer */}
              <div className="border-t border-border/70 bg-white px-5 py-4 text-center">
                <h3 className="font-heading text-sm font-bold tracking-wide text-forest group-hover:text-copper transition-colors">
                  {item.name}
                </h3>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}