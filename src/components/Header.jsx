"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import { SlidersHorizontal, ArrowLeft } from "lucide-react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const NAV_LINKS = [
  { label: "الرئيسية", href: "/" },
  { label: "خدمات الإنابة", href: "/services" },
  { label: "مراحل التسجيل", href: "/processus" },
  { label: "الباقات والأسعار", href: "/tarifs" },
  { label: "الأسئلة الشائعة", href: "/faq" },
];

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
              <svg viewBox="0 0 36 40" fill="none" className="h-6 w-6" aria-hidden="true">
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
            {NAV_LINKS.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "relative font-heading text-[13px] font-medium transition-colors py-1 group",
                    isActive ? "text-forest font-semibold" : "text-walnut/80 hover:text-forest"
                  )}
                >
                  {item.label}
                  <span
                    className={cn(
                      "absolute bottom-0 right-0 h-[1.5px] bg-copper transition-all duration-300",
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    )}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            

            <Link
              href="/tarifs"
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
            className="xl:hidden relative z-50 flex items-center gap-3 rounded-full border border-border bg-white px-4 py-2.5 text-forest shadow-[var(--shadow-soft)] transition-all duration-300 hover:border-copper/60"
          >
            <span className="font-heading text-xs font-medium tracking-wide">
              {menuOpen ? "إغلاق" : "القائمة"}
            </span>
            <div className="flex h-4 w-5 flex-col items-end justify-center gap-[5px]">
              <span className="block h-[1.5px] w-full rounded-full bg-forest" />
              <span className="block h-[1.5px] w-[65%] rounded-full bg-copper" />
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
            <div className="container-luxury flex h-20 items-center justify-between border-b border-ivory/10 shrink-0">
              <span className="font-heading text-sm font-semibold tracking-wider text-ivory">
                SERVICE <span className="text-copper">MARQUE</span>
              </span>

              <button
                type="button"
                onClick={() => setMenuOpen(false)}
                className="flex items-center gap-3 rounded-full border border-ivory/25 bg-ivory/10 px-4 py-2 text-ivory transition-colors hover:bg-ivory/20"
              >
                <span className="font-heading text-xs font-medium">إغلاق</span>
                <span className="text-copper text-sm leading-none">✕</span>
              </button>
            </div>

            <nav className="container-luxury flex flex-col justify-center py-10 my-auto gap-6 sm:gap-8">
              {NAV_LINKS.map((item, idx) => {
                const isActive = pathname === item.href;
                return (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
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
                      <span className="font-heading text-xs font-medium text-copper">
                        0{idx + 1}
                      </span>
                      <span
                        className={cn(
                          "font-display text-2xl sm:text-4xl font-bold transition-all duration-300 group-hover:text-copper group-hover:-translate-x-2",
                          isActive ? "text-copper" : "text-ivory/90"
                        )}
                      >
                        {item.label}
                      </span>
                    </Link>
                  </motion.div>
                );
              })}
            </nav>

            <div className="container-luxury border-t border-ivory/10 py-6 shrink-0">
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/tarifs"
                  onClick={() => setMenuOpen(false)}
                  className="btn btn-secondary justify-center"
                >
                  <span>احمِ علامتك الآن</span>
                  <ArrowLeft className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}