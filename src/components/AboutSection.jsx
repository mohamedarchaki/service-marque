"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { CheckCircle2, ArrowLeft } from "lucide-react";
import { HOME_DATA } from "@/data/home";

export default function AboutSection() {
  const { about } = HOME_DATA;

  return (
    <section
      id={about.id}
      dir="rtl"
      className="section-padding bg-parchment/45 border-y border-border"
    >
      <div className="container-luxury grid items-center gap-12 lg:grid-cols-12">
        {/* Image Column */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 order-2 lg:order-1"
        >
          <div className="relative rounded-[var(--radius-xl)] overflow-hidden border border-border shadow-[var(--shadow-card)] aspect-[4/4.3] bg-forest">
            <img
              src={about.image}
              alt={about.title}
              className="h-full w-full object-cover opacity-85"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest/70 via-transparent to-transparent" />
          </div>
        </motion.div>

        {/* Copy Column */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="lg:col-span-7 order-1 lg:order-2 flex flex-col items-start"
        >
          <span className="badge badge-accent border border-copper/20 mb-4 px-4 py-1.5 font-heading text-xs text-forest">
            {about.badge}
          </span>

          <h2 className="heading-display text-3xl sm:text-4xl text-forest leading-[1.35] mb-5">
            {about.title}
          </h2>

          <p className="text-body text-base text-walnut/80 mb-8 max-w-2xl">
            {about.description}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mb-8">
            {about.highlights.map((item, idx) => (
              <div key={idx} className="card !p-5 bg-white">
                <div className="flex items-center gap-2.5 mb-2">
                  <CheckCircle2 className="h-4 w-4 text-copper shrink-0" />
                  <h3 className="font-heading text-sm font-semibold text-forest">
                    {item.title}
                  </h3>
                </div>
                <p className="font-arabic text-xs text-muted leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <Link href={about.cta.href} className="btn btn-outline group">
            <span>{about.cta.label}</span>
            <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}