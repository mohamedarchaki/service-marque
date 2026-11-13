"use client";

import Link from "next/link";
import { Clock, PhoneCall, MapPin, ShieldCheck } from "lucide-react";
import { FOOTER_DATA } from "@/data/footer";
import Image from 'next/image'

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
            <Link href="/" className="flex w-50 h-10 relative items-center mb-5 gap-3 shrink-0 group">
            <div className="">
                <Image
            src="/images/ServiceMarqueLogo.png"
            fill
            alt="Service Marque Logo"
             style={{
    filter: `
      drop-shadow(0.0001px 0 0 white)
      drop-shadow(-0.0001px 0 0 white)
    `,
  }}/>  
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