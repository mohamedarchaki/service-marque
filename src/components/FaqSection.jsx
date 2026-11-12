"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";
import { FAQ_DATA } from "@/data/faq";

export default function FaqSection() {
  const [openId, setOpenId] = useState(FAQ_DATA.items[0].id);

  const toggle = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id={FAQ_DATA.id}
      dir="rtl"
      className="section-padding bg-parchment/45 border-t border-border"
    >
      <div className="container-luxury max-w-4xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-14"
        >
          <span className="badge badge-accent border border-copper/20 mb-4 px-4 py-1.5 font-heading text-xs text-forest">
            {FAQ_DATA.badge}
          </span>

          <h2 className="heading-display text-3xl sm:text-4xl lg:text-[42px] text-forest leading-[1.35] mb-4">
            {FAQ_DATA.title}
          </h2>

          <p className="text-body text-sm sm:text-base text-walnut/80 leading-relaxed">
            {FAQ_DATA.subtitle}
          </p>
        </motion.div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQ_DATA.items.map((item, idx) => {
            const isOpen = openId === item.id;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.45,
                  delay: idx * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`rounded-[var(--radius-lg)] border transition-all duration-300 ${
                  isOpen
                    ? "bg-white border-copper/40 shadow-[var(--shadow-soft)]"
                    : "bg-white/75 border-border hover:border-muted"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggle(item.id)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-right"
                >
                  <span className="font-display text-lg sm:text-xl font-bold text-forest">
                    {item.question}
                  </span>

                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                      isOpen
                        ? "bg-copper text-white border-copper rotate-180"
                        : "bg-ivory text-forest border-border"
                    }`}
                  >
                    <ChevronDown className="h-4 w-4" />
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="border-t border-border/60 px-6 pb-6 pt-4">
                        <p className="text-body text-sm sm:text-[15px] text-walnut/85 leading-relaxed">
                          {item.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}