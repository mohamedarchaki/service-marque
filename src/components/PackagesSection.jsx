"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { Check, ArrowLeft } from "lucide-react";
import { HOME_DATA } from "@/data/home";

export default function PackagesSection() {
  const { packages } = HOME_DATA;

  return (
    <section id={packages.id} dir="rtl" className="section-padding bg-white/50">
      <div className="container-luxury">
        <div className="mx-auto max-w-2xl text-center mb-14">
          <span className="badge badge-accent border border-copper/20 mb-4 px-4 py-1.5 font-heading text-xs text-forest">
            {packages.badge}
          </span>
          <h2 className="heading-display text-3xl sm:text-4xl text-forest mb-3">
            {packages.title}
          </h2>
          <p className="text-body text-sm sm:text-base text-walnut/80">
            {packages.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-7 items-stretch mb-12">
          {packages.plans.map((plan, idx) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`relative flex flex-col justify-between rounded-[var(--radius-xl)] p-7 sm:p-8 ${
                plan.featured
                  ? "bg-forest text-ivory border-2 border-copper shadow-[var(--shadow-card)] lg:-translate-y-2"
                  : "bg-white text-walnut border border-border shadow-[var(--shadow-soft)]"
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-copper px-4 py-1 font-heading text-[11px] font-semibold text-white">
                  {plan.popularBadge}
                </div>
              )}

              <div>
                <div className="flex items-baseline justify-between mb-4">
                  <h3
                    className={`font-display text-2xl font-bold ${
                      plan.featured ? "text-ivory" : "text-forest"
                    }`}
                  >
                    {plan.name}
                  </h3>
                  <span className="font-heading text-xs text-copper">
                    {plan.subtitle}
                  </span>
                </div>

                <div
                  className={`flex items-baseline gap-1.5 border-y py-4 mb-6 ${
                    plan.featured ? "border-ivory/15" : "border-border"
                  }`}
                >
                  <span
                    className={`font-heading text-3xl font-bold ${
                      plan.featured ? "text-ivory" : "text-forest"
                    }`}
                  >
                    {plan.price}
                  </span>
                  <span className="font-heading text-xs text-copper">
                    درهم شامل الرسوم
                  </span>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feat, i) => (
                    <li key={i} className="flex items-center gap-2.5">
                      <Check className="h-4 w-4 shrink-0 text-copper" />
                      <span
                        className={`font-arabic text-sm ${
                          plan.featured ? "text-ivory/90" : "text-walnut/85"
                        }`}
                      >
                        {feat}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                href="/tarifs"
                className={`btn w-full justify-center ${
                  plan.featured ? "btn-secondary" : "btn-outline"
                }`}
              >
                اختر الباقة
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link href={packages.cta.href} className="btn btn-ghost group">
            <span>{packages.cta.label}</span>
            <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}