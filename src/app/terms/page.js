"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { Scale, ArrowLeft, ShieldCheck } from "lucide-react";
import { LEGAL_PAGES_DATA } from "@/data/legal";
import PageBanner from "@/components/PageBanner";

export default function TermsPage() {
  const { terms } = LEGAL_PAGES_DATA;

  return (
    <main dir="rtl" className="bg-ivory selection:bg-forest selection:text-ivory">
      <PageBanner
        badge={terms.badge}
        title={terms.title}
        subtitle={terms.subtitle}
        currentPage="الشروط والأحكام"
        bgImage="/images/PageBanner.jpg"
      />

      <section className="section-padding">
        <div className="container-luxury max-w-4xl">
          {/* Meta Header */}
          <div className="flex flex-wrap items-center justify-between gap-3 rounded-[var(--radius-lg)] bg-white border border-border px-6 py-4 mb-10 shadow-[var(--shadow-soft)]">
            <div className="flex items-center gap-2.5 font-heading text-xs font-semibold text-forest">
              <Scale className="h-4 w-4 text-copper" />
              <span>وثيقة تنظيمية ملزمة لخدمة الإنابة القانونية</span>
            </div>
            <span className="font-arabic text-xs text-muted">
              {terms.lastUpdated}
            </span>
          </div>

          {/* Articles */}
          <div className="space-y-6">
            {terms.sections.map((sec, idx) => (
              <motion.article
                key={sec.number}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: idx * 0.06 }}
                className="rounded-[var(--radius-lg)] bg-white border border-border p-7 sm:p-9 shadow-[var(--shadow-soft)]"
              >
                <span className="font-heading text-xs font-bold text-copper tracking-wider block mb-2">
                  {sec.number}
                </span>
                <h2 className="font-display text-2xl font-bold text-forest mb-3">
                  {sec.title}
                </h2>
                <p className="text-body text-sm sm:text-[15px] text-walnut/85 leading-relaxed">
                  {sec.content}
                </p>
              </motion.article>
            ))}
          </div>

          {/* Bottom Navigation Card */}
          <div className="mt-12 rounded-[var(--radius-xl)] bg-forest text-ivory p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-[var(--shadow-card)]">
            <div className="flex items-center gap-3.5">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-copper/20 text-copper">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold">
                  هل لديك استفسار حول بنود التوكيل؟
                </h3>
                <p className="font-arabic text-xs text-ivory/75 mt-0.5">
                  اطلع أيضاً على سياسة حماية المعطيات أو تواصل معنا مباشرة.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 shrink-0">
              <Link
                href="/privacy"
                className="btn border border-ivory/25 text-ivory hover:bg-ivory/10 !text-xs"
              >
                سياسة الخصوصية
              </Link>
              <Link href="/tarifs" className="btn btn-secondary !text-xs group">
                <span>ابدأ طلب التوكيل</span>
                <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}