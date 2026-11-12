"use client";

import { motion } from "motion/react";
import { AlertTriangle, TrendingUp, Shield } from "lucide-react";
import { WHY_PROTECT_DATA } from "@/data/whyProtect";

const ICONS = {
  alert: AlertTriangle,
  trending: TrendingUp,
  shield: Shield,
};

const TONE_STYLES = {
  danger: {
    iconWrap: "bg-red-500/10 text-red-700 border-red-200",
    footer: "text-red-700",
  },
  copper: {
    iconWrap: "bg-copper/10 text-copper border-copper/25",
    footer: "text-copper",
  },
  forest: {
    iconWrap: "bg-forest/10 text-forest border-forest/20",
    footer: "text-forest",
  },
};

export default function WhyProtectSection() {
  return (
    <section
      id={WHY_PROTECT_DATA.id}
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
          className="mx-auto max-w-3xl text-center mb-14"
        >
          <span className="badge badge-accent border border-copper/20 mb-4 px-4 py-1.5 font-heading text-xs text-forest">
            {WHY_PROTECT_DATA.badge}
          </span>

          <h2 className="heading-display text-3xl sm:text-4xl lg:text-[42px] text-forest leading-[1.35] mb-4">
            {WHY_PROTECT_DATA.title}
          </h2>

          <p className="text-body text-sm sm:text-base text-walnut/80 leading-relaxed">
            {WHY_PROTECT_DATA.subtitle}
          </p>
        </motion.div>

        {/* 3 Luxury Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {WHY_PROTECT_DATA.cards.map((card, idx) => {
            const Icon = ICONS[card.icon];
            const tone = TONE_STYLES[card.tone];

            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.55,
                  delay: idx * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="card flex flex-col justify-between h-full bg-white/30!"
              >
                <div>
                  {/* Icon */}
                  <div
                    className={`mb-6 flex h-12 w-12 items-center justify-center rounded-[var(--radius-md)] border ${tone.iconWrap}`}
                  >
                    <Icon className="h-5 w-5" />
                  </div>

                  {/* Title */}
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-forest mb-3">
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p className="text-body text-sm text-walnut/80 leading-relaxed mb-6">
                    {card.description}
                  </p>
                </div>

                {/* Footer Note */}
                <div className="border-t border-border pt-4 mt-auto">
                  <p className={`font-heading text-xs font-semibold ${tone.footer}`}>
                    {card.footer}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}