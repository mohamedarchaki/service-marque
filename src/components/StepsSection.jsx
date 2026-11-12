"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowLeft } from "lucide-react";
import { HOME_DATA } from "@/data/home";

export default function StepsSection() {
  const { steps } = HOME_DATA;

  return (
    <section
      id={steps.id}
      dir="rtl"
      className="section-padding  bg-parchment/40 border-y border-border"
    >
      <div className="container-luxury">
        <div className="mx-auto max-w-2xl text-center mb-14">
          <span className="badge badge-accent border border-copper/20 mb-4 px-4 py-1.5 font-heading text-xs text-forest">
            {steps.badge}
          </span>
          <h2 className="heading-display text-3xl sm:text-4xl text-forest">
            {steps.title}
          </h2>
        </div>

        <div className="relative mb-12">
          <div className="hidden lg:block absolute top-7 right-16 left-16 h-[1px] bg-border" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.items.map((step, idx) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                className="flex flex-col items-center text-center"
              >
                <div
                  className={`mb-5 flex h-14 w-14 items-center justify-center rounded-[var(--radius-md)] font-heading text-base font-bold shadow-[var(--shadow-soft)] ${
                    step.active
                      ? "bg-copper text-white ring-4 ring-copper/15"
                      : "bg-white text-forest border border-border"
                  }`}
                >
                  {step.number}
                </div>
                <h3 className="font-display text-xl font-bold text-forest mb-2">
                  {step.title}
                </h3>
                <p className="font-arabic text-sm text-walnut/80 max-w-[230px]">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <Link href={steps.cta.href} className="btn btn-outline group">
            <span>{steps.cta.label}</span>
            <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}