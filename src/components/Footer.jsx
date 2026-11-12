"use client";

import Link from "next/link";
import { Clock, PhoneCall, MapPin, ShieldCheck } from "lucide-react";
import { FOOTER_DATA } from "@/data/footer";

export default function Footer() {
  return (
    <footer
      dir="rtl"
      className="bg-forest text-ivory border-t border-ivory/10 pt-16 pb-8"
    >
      <div className="container-luxury">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-ivory/10">
          {/* Brand Column */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <Link href="/" className="flex items-center gap-3 mb-5 group">
              <div className="flex h-11 w-11 items-center justify-center rounded-[var(--radius-md)] bg-ivory/10 border border-ivory/15 transition-transform duration-300 group-hover:scale-105">
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

              <div className="flex items-baseline gap-1 font-heading text-base font-bold tracking-wide">
                <span className="text-ivory">{FOOTER_DATA.brand.nameFirst}</span>
                <span className="text-copper">{FOOTER_DATA.brand.nameSecond}</span>
              </div>
            </Link>

            <p className="font-arabic text-xs sm:text-sm text-ivory/75 leading-relaxed max-w-sm">
              {FOOTER_DATA.brand.description}
            </p>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h3 className="font-heading text-sm font-semibold text-ivory mb-5">
              {FOOTER_DATA.quickLinks.title}
            </h3>
            <ul className="space-y-3">
              {FOOTER_DATA.quickLinks.items.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-arabic text-xs sm:text-sm text-ivory/70 transition-colors hover:text-copper"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Partners & Authorities */}
          <div className="lg:col-span-3">
            <h3 className="font-heading text-sm font-semibold text-ivory mb-5">
              {FOOTER_DATA.partners.title}
            </h3>
            <ul className="space-y-3">
              {FOOTER_DATA.partners.items.map((partner, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2 font-arabic text-xs sm:text-sm text-ivory/70 leading-relaxed"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-copper" />
                  <span>{partner}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours & Contact */}
          <div className="lg:col-span-3">
            <h3 className="font-heading text-sm font-semibold text-ivory mb-5">
              {FOOTER_DATA.contact.title}
            </h3>
            <ul className="space-y-3.5 font-arabic text-xs sm:text-sm text-ivory/75">
              <li className="flex items-start gap-2.5">
                <Clock className="h-4 w-4 shrink-0 text-copper mt-0.5" />
                <span>{FOOTER_DATA.contact.hours}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <PhoneCall className="h-4 w-4 shrink-0 text-copper mt-0.5" />
                <span className="leading-relaxed">
                  {FOOTER_DATA.contact.whatsapp}
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 shrink-0 text-copper mt-0.5" />
                <span>{FOOTER_DATA.contact.location}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col lg:flex-row items-center justify-between gap-4 text-center lg:text-right">
          <p className="font-arabic text-xs text-ivory/60">
            {FOOTER_DATA.bottom.copyright}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-5">
            {FOOTER_DATA.bottom.links.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="font-arabic text-xs text-ivory/65 transition-colors hover:text-ivory"
              >
                {item.label}
              </Link>
            ))}

          </div>
        </div>
      </div>
    </footer>
  );
}