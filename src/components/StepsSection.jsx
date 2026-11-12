"use client";

import { motion } from "motion/react";
import { STEPS_DATA } from "@/data/steps";

export default function StepsSection() {
  return (
    <section
      id={STEPS_DATA.id}
      dir="rtl"
      className="section-padding bg-parchment/45 border-y border-border"
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
            {STEPS_DATA.badge}
          </span>

          <h2 className="heading-display text-3xl sm:text-4xl lg:text-[42px] text-forest leading-[1.35] mb-4">
            {STEPS_DATA.title}
          </h2>

          <p className="text-body text-sm sm:text-base text-walnut/80 leading-relaxed">
            {STEPS_DATA.subtitle}
          </p>
        </motion.div>

        {/* 4 Steps Timeline */}
        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-7 right-12 left-12 h-[1px] bg-border z-0" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {STEPS_DATA.steps.map((step, idx) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  delay: idx * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="flex flex-col items-center text-center group"
              >
                {/* Step Number Box */}
                <div
                  className={`mb-6 flex h-14 w-14 items-center justify-center rounded-[var(--radius-md)] font-heading text-lg font-bold transition-all duration-300 shadow-[var(--shadow-soft)] ${
                    step.active
                      ? "bg-copper text-white ring-4 ring-copper/15"
                      : "bg-white text-forest border border-border group-hover:border-copper group-hover:text-copper"
                  }`}
                >
                  {step.number}
                </div>

                {/* Title */}
                <h3 className="font-display text-xl font-bold text-forest mb-3">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-body text-sm text-walnut/80 leading-relaxed max-w-xs">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}