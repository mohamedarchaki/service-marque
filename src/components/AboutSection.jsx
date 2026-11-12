"use client";

import { motion } from "motion/react";
import { Users, FileCheck, Check } from "lucide-react";
import { ABOUT_DATA } from "@/data/about";

export default function AboutSection() {
  return (
    <section
      id={ABOUT_DATA.id}
      dir="rtl"
      className="section-padding bg-parchment/45 border-y border-border"
    >
      <div className="container-luxury grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
        {/* Right Column: Editorial Copy & Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-6 flex flex-col items-start"
        >
          <span className="badge badge-accent border border-copper/20 mb-5 px-4 py-1.5 font-heading text-xs text-forest">
            {ABOUT_DATA.badge}
          </span>

          <h2 className="heading-display text-3xl sm:text-4xl text-forest leading-[1.35] mb-6">
            {ABOUT_DATA.title}
          </h2>

          <div className="space-y-4 mb-8">
            {ABOUT_DATA.paragraphs.map((text, idx) => (
              <p
                key={idx}
                className="text-body text-[15px] sm:text-base text-walnut/85"
              >
                {text}
              </p>
            ))}
          </div>

          {/* Two Highlight Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
            {ABOUT_DATA.highlights.map((item, idx) => {
              const Icon = idx === 0 ? Users : FileCheck;
              return (
                <div
                  key={item.id}
                  className="card p-5! flex items-start gap-3.5 bg-white/30!"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-ivory border border-border text-copper">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-heading text-sm font-semibold text-forest mb-1">
                      {item.title}
                    </h3>
                    <p className="font-arabic text-xs text-muted leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Left Column: Agency Services Luxury Card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.65, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-6"
        >
          <div className="card-dark relative overflow-hidden !p-7 sm:!p-9 rounded-[var(--radius-xl)] shadow-[var(--shadow-card)]">
            {/* Subtle Copper Glow */}
            <div className="pointer-events-none absolute -top-20 -left-20 h-56 w-56 rounded-full bg-copper/15 blur-3xl" />

            <h3 className="font-display text-2xl sm:text-[26px] font-bold text-ivory mb-7 relative z-10">
              {ABOUT_DATA.agencyCard.title}
            </h3>

            <ul className="space-y-5 relative z-10">
              {ABOUT_DATA.agencyCard.items.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3.5 border-b border-ivory/10 pb-5 last:border-none last:pb-0"
                >
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-copper/20 text-copper">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  <p className="font-arabic text-sm leading-relaxed text-ivory/85">
                    <strong className="font-heading font-semibold text-ivory ml-1">
                      {item.title}
                    </strong>
                    {item.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}