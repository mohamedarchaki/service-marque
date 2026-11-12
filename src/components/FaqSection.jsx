"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, ArrowLeft } from "lucide-react";
import { HOME_DATA } from "@/data/home";

export default function FaqSection() {
  const { faq } = HOME_DATA;
  const [openId, setOpenId] = useState(faq.items[0].id);

  return (
    <section
      id={faq.id}
      dir="rtl"
      className="section-padding bg-parchment/45 border-t border-border"
    >
      <div className="container-luxury max-w-3xl">
        <div className="text-center mb-12">
          <span className="badge badge-accent border border-copper/20 mb-4 px-4 py-1.5 font-heading text-xs text-forest">
            {faq.badge}
          </span>
          <h2 className="heading-display text-3xl sm:text-4xl text-forest">
            {faq.title}
          </h2>
        </div>

        <div className="space-y-3.5 mb-10">
          {faq.items.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className={`rounded-[var(--radius-lg)] border transition-all ${
                  isOpen
                    ? "bg-white border-copper/40 shadow-[var(--shadow-soft)]"
                    : "bg-white/80 border-border"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenId(isOpen ? null : item.id)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-4 text-right"
                >
                  <span className="font-display text-lg font-bold text-forest">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`h-4 w-4 shrink-0 text-copper transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <p className="border-t border-border/60 px-6 pb-5 pt-3.5 text-body text-sm text-walnut/85">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <Link href={faq.cta.href} className="btn btn-outline group">
            <span>{faq.cta.label}</span>
            <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}