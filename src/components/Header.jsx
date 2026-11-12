"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { SlidersHorizontal, ArrowLeft } from "lucide-react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const NAV_LINKS = [
  { label: "فحص الأسبقية", href: "#priority-check" },
  { label: "من نكون؟", href: "#about" },
  { label: "لماذا الحماية؟", href: "#why-protect" },
  { label: "خطوات الإنابة", href: "#steps" },
  { label: "باقات الخدمة الشاملة", href: "#packages" },
  { label: "الأسئلة الشائعة", href: "#faq" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when full-screen menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header
        dir="rtl"
        className={cn(
          "sticky top-0 z-40 w-full transition-all duration-300",
          scrolled
            ? "bg-ivory/90 backdrop-blur-md border-b border-border shadow-[var(--shadow-soft)]"
            : "bg-ivory border-b border-border/60"
        )}
      >
        <div className="container-luxury flex h-20 items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0 group">
            <div className="flex h-11 w-11 items-center justify-center rounded-[var(--radius-md)] bg-forest text-ivory transition-transform duration-300 group-hover:scale-105">
              <svg
                viewBox="0 0 36 40"
                fill="none"
                className="h-6 w-6"
                aria-hidden="true"
              >
                <path
                  d="M18 2L4 8v11c0 9.5 6 16.8 14 19 8-2.2 14-9.5 14-19V8L18 2z"
                  stroke="#A66D48"
                  strokeWidth="2.2"
                  fill="rgba(166, 109, 72, 0.12)"
                />
                <path
                  d="M11 23l5-5 4 3.5 6-7.5M26 14h-4.5M26 14v4.5"
                  stroke="#F5F0E6"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <div className="flex flex-col leading-tight">
              <div className="flex items-baseline gap-1 font-heading text-sm font-bold tracking-wide">
                <span className="text-forest">SERVICE</span>
                <span className="text-copper">MARQUE</span>
              </div>
              <span className="font-arabic text-[11px] text-muted">
                بسّط عملية إيداع علامتك التجارية بالمغرب
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-7">
            {NAV_LINKS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative font-heading text-[13px] font-medium text-walnut/85 transition-colors hover:text-forest py-1 group"
              >
                {item.label}
                <span className="absolute bottom-0 right-0 h-[1.5px] w-0 bg-copper transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
           
            <Link
              href="#protect-now"
              className="btn btn-secondary !py-2.5 !px-5 !text-xs shadow-[var(--shadow-soft)] group"
            >
              <span>احمِ علامتك الآن</span>
              <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
            </Link>
          </div>

          {/* Pro Luxury Menu Button */}
          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? "إغلاق القائمة" : "فتح القائمة"}
            aria-expanded={menuOpen}
            className={cn(
              "xl:hidden relative z-50 flex items-center gap-3 rounded-full border px-4 py-2.5 transition-all duration-300",
              menuOpen
                ? "border-ivory/25 bg-ivory/10 text-ivory backdrop-blur-md"
                : "border-border bg-white text-forest shadow-[var(--shadow-soft)] hover:border-copper/60"
            )}
          >
            <span className="font-heading text-xs font-medium tracking-wide">
              {menuOpen ? "إغلاق" : "القائمة"}
            </span>

            <div className="flex h-4 w-5 flex-col items-end justify-center gap-[5px]">
              <motion.span
                animate={
                  menuOpen
                    ? { rotate: 45, y: 3.5, width: "100%" }
                    : { rotate: 0, y: 0, width: "100%" }
                }
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className={cn(
                  "block h-[1.5px] rounded-full",
                  menuOpen ? "bg-ivory" : "bg-forest"
                )}
              />
              <motion.span
                animate={
                  menuOpen
                    ? { rotate: -45, y: -3.5, width: "100%" }
                    : { rotate: 0, y: 0, width: "65%" }
                }
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className={cn(
                  "block h-[1.5px] rounded-full",
                  menuOpen ? "bg-copper" : "bg-copper"
                )}
              />
            </div>
          </button>
        </div>
      </header>

      {/* Full-Screen Luxury Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            dir="rtl"
            initial={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
            animate={{ opacity: 1, clipPath: "inset(0 0 0% 0)" }}
            exit={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-50 flex flex-col justify-between bg-forest text-ivory overflow-y-auto"
          >
            {/* Top Bar inside Full-Screen Menu */}
            <div className="container-luxury flex h-20 items-center justify-between border-b border-ivory/10 shrink-0">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-[var(--radius-md)] bg-ivory/10 border border-ivory/15">
                  <span className="font-heading text-xs font-bold text-copper">
                    SM
                  </span>
                </div>
                <span className="font-heading text-sm font-semibold tracking-wider text-ivory">
                  SERVICE <span className="text-copper">MARQUE</span>
                </span>
              </div>

              <button
                type="button"
                onClick={() => setMenuOpen(false)}
                className="flex items-center gap-3 rounded-full border border-ivory/25 bg-ivory/10 px-4 py-2 text-ivory transition-colors hover:bg-ivory/20"
              >
                <span className="font-heading text-xs font-medium">إغلاق</span>
                <span className="text-copper text-sm leading-none">✕</span>
              </button>
            </div>

            {/* Center Navigation Links with Generous Spacing */}
            <nav className="container-luxury flex flex-col justify-center py-10 my-auto gap-6 sm:gap-8">
              {NAV_LINKS.map((item, idx) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 12 }}
                  transition={{
                    duration: 0.45,
                    delay: 0.15 + idx * 0.06,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="group flex items-baseline gap-5 py-1 transition-all duration-300"
                  >
                    <span className="font-heading text-xs font-medium text-copper/80 group-hover:text-copper transition-colors">
                      0{idx + 1}
                    </span>
                    <span className="font-display text-2xl sm:text-4xl font-bold text-ivory/90 transition-all duration-300 group-hover:text-copper group-hover:-translate-x-2">
                      {item.label}
                    </span>
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* Bottom Actions & Info */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.45 }}
              className="container-luxury border-t border-ivory/10 py-6 shrink-0"
            >
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                  <Link
                    href="/track"
                    onClick={() => setMenuOpen(false)}
                    className="btn border border-ivory/25 bg-transparent text-ivory hover:bg-ivory/10 justify-center"
                  >
                    <SlidersHorizontal className="h-4 w-4 text-copper" />
                    <span>تتبع الطلبات</span>
                  </Link>

                  <Link
                    href="#protect-now"
                    onClick={() => setMenuOpen(false)}
                    className="btn btn-secondary justify-center"
                  >
                    <span>احمِ علامتك الآن</span>
                    <ArrowLeft className="h-4 w-4" />
                  </Link>
                </div>

                <p className="font-arabic text-xs text-ivory/50 text-center sm:text-left">
                  بسّط عملية إيداع علامتك التجارية بالمغرب
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}