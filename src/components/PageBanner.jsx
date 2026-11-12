"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ChevronLeft } from "lucide-react";

const DEFAULT_BG_IMAGE =
  "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1600&q=85";

export default function PageBanner({
  badge,
  title,
  subtitle,
  currentPage,
  bgImage = DEFAULT_BG_IMAGE,
}) {
  return (
    <section
      dir="rtl"
      className="relative overflow-hidden bg-forest text-ivory pt-16 pb-20 lg:pt-20 lg:pb-24 border-b border-ivory/10"
    >
      {/* Background Image */}
      <img
        src={bgImage}
        alt={title}
        className="absolute inset-0 h-full w-full object-cover opacity-25 mix-blend-luminosity scale-105"
      />

      {/* Luxury Dark Forest Gradient Overlay for High Text Contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-forest/90 via-forest/85 to-forest" />

      {/* Subtle Copper Ambient Glow */}
      <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-72 w-[36rem] rounded-full bg-copper/15 blur-3xl" />

      {/* Content */}
      <div className="container-luxury relative z-10 max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Breadcrumb */}
          {currentPage && (
            <nav
              aria-label="Breadcrumb"
              className="mb-6 inline-flex items-center gap-2 font-heading text-xs text-ivory/65"
            >
              <Link href="/" className="transition-colors hover:text-copper">
                الرئيسية
              </Link>
              <ChevronLeft className="h-3.5 w-3.5 text-copper" />
              <span className="text-ivory font-medium">{currentPage}</span>
            </nav>
          )}

          {/* Badge */}
          {badge && (
            <div className="mb-5">
              <span className="inline-flex items-center gap-2 rounded-full border border-copper/40 bg-copper/15 px-4 py-1.5 font-heading text-xs font-medium text-copper backdrop-blur-sm">
                {badge}
              </span>
            </div>
          )}

          {/* Title */}
          <h1 className="heading-display text-3xl sm:text-5xl text-ivory leading-[1.28] mb-5">
            {title}
          </h1>

          {/* Subtitle */}
          {subtitle && (
            <p className="text-body text-base sm:text-lg text-ivory/80 max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
}