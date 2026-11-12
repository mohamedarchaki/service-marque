"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { Check, X } from "lucide-react";
import { PACKAGES_DATA } from "@/data/packages";

export default function PackagesSection() {
  return (
    <section
      id={PACKAGES_DATA.id}
      dir="rtl"
      className="section-padding bg-ivory"
    >
      <div className="container-luxury">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-3xl text-center mb-16"
        >
          <span className="badge badge-accent border border-copper/20 mb-4 px-4 py-1.5 font-heading text-xs text-forest">
            {PACKAGES_DATA.badge}
          </span>

          <h2 className="heading-display text-3xl sm:text-4xl lg:text-[42px] text-forest leading-[1.35] mb-4">
            {PACKAGES_DATA.title}
          </h2>

          <p className="text-body text-sm sm:text-base text-walnut/80 leading-relaxed">
            {PACKAGES_DATA.subtitle}
          </p>
        </motion.div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PACKAGES_DATA.plans.map((plan, idx) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.55,
                delay: idx * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`relative flex flex-col justify-between rounded-[var(--radius-xl)] p-7 sm:p-8 transition-all duration-300 ${
                plan.featured
                  ? "bg-forest text-ivory border-2 border-copper shadow-[var(--shadow-card)] lg:-translate-y-2"
                  : "bg-white text-walnut border border-border shadow-[var(--shadow-soft)] hover:border-muted"
              }`}
            >
              {/* Popular Badge for Featured Plan */}
              {plan.featured && plan.popularBadge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-copper px-4 py-1.5 font-heading text-[11px] font-semibold text-white shadow-md">
                  {plan.popularBadge}
                </div>
              )}

              <div>
                {/* Top Audience & Title */}
                <div className="mb-6">
                  <span
                    className={`font-heading text-xs font-medium ${
                      plan.featured ? "text-copper" : "text-accent"
                    }`}
                  >
                    {plan.audience}
                  </span>
                  <h3
                    className={`font-display text-2xl sm:text-[26px] font-bold mt-1.5 mb-2.5 ${
                      plan.featured ? "text-ivory" : "text-forest"
                    }`}
                  >
                    {plan.name}
                  </h3>
                  <p
                    className={`font-arabic text-xs sm:text-sm leading-relaxed ${
                      plan.featured ? "text-ivory/75" : "text-muted"
                    }`}
                  >
                    {plan.description}
                  </p>
                </div>

                {/* Price Block */}
                <div
                  className={`flex flex-wrap items-baseline justify-between gap-2 border-y py-5 mb-6 ${
                    plan.featured ? "border-ivory/15" : "border-border"
                  }`}
                >
                  <div className="flex items-baseline gap-1.5">
                    <span
                      className={`font-heading text-3xl sm:text-4xl font-bold ${
                        plan.featured ? "text-ivory" : "text-forest"
                      }`}
                    >
                      {plan.price}
                    </span>
                    <span
                      className={`font-heading text-sm font-medium ${
                        plan.featured ? "text-copper" : "text-walnut"
                      }`}
                    >
                      {plan.currency}
                    </span>
                  </div>
                  <span
                    className={`font-arabic text-[11px] ${
                      plan.featured ? "text-ivory/65" : "text-muted"
                    }`}
                  >
                    {plan.priceNote}
                  </span>
                </div>

                {/* Features List */}
                <ul className="space-y-3.5 mb-8">
                  {plan.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-3">
                      {feat.included ? (
                        <span
                          className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                            plan.featured
                              ? "bg-copper/20 text-copper"
                              : "bg-forest/10 text-forest"
                          }`}
                        >
                          <Check className="h-3.5 w-3.5" />
                        </span>
                      ) : (
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red-500/10 text-red-500">
                          <X className="h-3.5 w-3.5" />
                        </span>
                      )}
                      <span
                        className={`font-arabic text-xs sm:text-sm leading-relaxed ${
                          !feat.included
                            ? "line-through opacity-50"
                            : plan.featured
                            ? "text-ivory/90"
                            : "text-walnut/85"
                        }`}
                      >
                        {feat.label}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Button */}
              <Link
                href={plan.href}
                className={`btn w-full justify-center !py-3.5 ${
                  plan.featured ? "btn-secondary" : "btn-outline"
                }`}
              >
                {plan.cta}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}