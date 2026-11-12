"use client";

import { motion } from "motion/react";
import { AlertTriangle, TrendingUp, Shield } from "lucide-react";
import { HOME_DATA } from "@/data/home";

const WHY_ICONS = {
  alert: AlertTriangle,
  trending: TrendingUp,
  shield: Shield,
};

export default function WhyProtectSection() {
  const { whyProtect } = HOME_DATA;

  return (
    <section id={whyProtect.id} dir="rtl" className="section-padding bg-ivory">
      <div className="container-luxury">
        <div className="mx-auto max-w-2xl text-center mb-14">
          <span className="badge badge-accent border border-copper/20 mb-4 px-4 py-1.5 font-heading text-xs text-forest">
            {whyProtect.badge}
          </span>
          <h2 className="heading-display text-3xl sm:text-4xl text-forest">
            {whyProtect.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {whyProtect.cards.map((card, idx) => {
            const Icon = WHY_ICONS[card.icon];
            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="card bg-white"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-[var(--radius-md)] bg-ivory border border-border text-copper">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-display text-xl font-bold text-forest mb-2.5">
                  {card.title}
                </h3>
                <p className="text-body text-sm text-walnut/80">
                  {card.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}