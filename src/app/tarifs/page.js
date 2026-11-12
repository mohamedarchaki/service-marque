"use client";

import { useState, useRef } from "react";
import { motion } from "motion/react";
import {
  Check,
  X,
  ShieldCheck,
  ArrowLeft,
  MessageCircle,
} from "lucide-react";
import { TARIFS_PAGE_DATA } from "@/data/tarifs";
import PageBanner from "@/components/PageBanner";

// Bdel had numero b numero WhatsApp dyal l-wakala (bla + w bla sfar)
const AGENCY_WHATSAPP = "212671790556";

export default function TarifsPage() {
  const { hero, plans, comparisonRows, sectors } = TARIFS_PAGE_DATA;
  const formRef = useRef(null);

  const [selectedPlan, setSelectedPlan] = useState("business");
  const [formData, setFormData] = useState({
    brandName: "",
    sector: sectors[0],
    fullName: "",
    phone: "",
    city: "",
  });

  const activePlanObj = plans.find((p) => p.id === selectedPlan) || plans[1];

  const handleSelectPlan = (planId) => {
    setSelectedPlan(planId);
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = [
      "السلام عليكم فريق سيرفيس مارك، أرغب في تكليفكم بتسجيل علامتي التجارية:",
      `• *الباقة المختارة:* ${activePlanObj.name} (${activePlanObj.price} درهم)`,
      `• *اسم العلامة المقترح:* ${formData.brandName}`,
      `• *قطاع النشاط:* ${formData.sector}`,
      `• *الاسم الكامل:* ${formData.fullName}`,
      `• *رقم الهاتف:* ${formData.phone}`,
      `• *المدينة:* ${formData.city}`,
    ].join("\n");

    const whatsappUrl = `https://wa.me/${AGENCY_WHATSAPP}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <main dir="rtl" className="bg-ivory selection:bg-forest selection:text-ivory">
      {/* 01. Hero Banner */}
      <PageBanner
        badge={hero.badge}
        title={hero.title}
        subtitle={hero.subtitle}
        currentPage="الباقات والأسعار"
        bgImage="/images/PageBanner.jpg"
      />

      {/* 02. 3 Luxury Pricing Cards */}
      <section className="section-padding">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {plans.map((plan, idx) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.55,
                  delay: idx * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`relative flex flex-col justify-between rounded-[var(--radius-xl)] p-8 transition-all duration-300 ${
                  plan.featured
                    ? "bg-forest text-ivory border-2 border-copper shadow-[var(--shadow-card)] lg:-translate-y-3"
                    : "bg-white text-walnut border border-border shadow-[var(--shadow-soft)] hover:border-copper/50"
                }`}
              >
                {plan.featured && plan.popularBadge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-copper px-4 py-1.5 font-heading text-[11px] font-semibold text-white shadow-md">
                    {plan.popularBadge}
                  </div>
                )}

                <div>
                  <span
                    className={`font-heading text-xs font-medium ${
                      plan.featured ? "text-copper" : "text-accent"
                    }`}
                  >
                    {plan.audience}
                  </span>

                  <div className="flex items-baseline justify-between mt-1.5 mb-3">
                    <h2
                      className={`font-display text-2xl sm:text-3xl font-bold ${
                        plan.featured ? "text-ivory" : "text-forest"
                      }`}
                    >
                      {plan.name}
                    </h2>
                    <span className="font-heading text-xs text-copper">
                      {plan.enName}
                    </span>
                  </div>

                  <p
                    className={`font-arabic text-xs sm:text-sm leading-relaxed mb-6 ${
                      plan.featured ? "text-ivory/75" : "text-muted"
                    }`}
                  >
                    {plan.description}
                  </p>

                  {/* Price Block */}
                  <div
                    className={`flex flex-wrap items-baseline justify-between gap-2 border-y py-5 mb-6 ${
                      plan.featured ? "border-ivory/15" : "border-border"
                    }`}
                  >
                    <div className="flex items-baseline gap-1.5">
                      <span
                        className={`font-heading text-4xl font-bold ${
                          plan.featured ? "text-ivory" : "text-forest"
                        }`}
                      >
                        {plan.price}
                      </span>
                      <span className="font-heading text-sm font-medium text-copper">
                        درهم
                      </span>
                    </div>
                    <span
                      className={`font-arabic text-[11px] ${
                        plan.featured ? "text-ivory/65" : "text-muted"
                      }`}
                    >
                      شامل الرسوم والضرائب والـ OMPIC
                    </span>
                  </div>

                  {/* Features */}
                  <ul className="space-y-3.5 mb-8">
                    {plan.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-3">
                        {feat.included ? (
                          <span
                            className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                              plan.featured
                                ? "bg-copper/20 text-copper"
                                : "bg-forest/10 text-forest"
                            }`}
                          >
                            <Check className="h-3.5 w-3.5" />
                          </span>
                        ) : (
                          <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red-500/10 text-red-500">
                            <X className="h-3.5 w-3.5" />
                          </span>
                        )}
                        <span
                          className={`font-arabic text-xs sm:text-sm leading-relaxed ${
                            !feat.included
                              ? "line-through opacity-45"
                              : plan.featured
                              ? "text-ivory/90"
                              : "text-walnut/85"
                          }`}
                        >
                          {feat.label}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  type="button"
                  onClick={() => handleSelectPlan(plan.id)}
                  className={`btn w-full justify-center !py-3.5 ${
                    plan.featured ? "btn-secondary" : "btn-outline"
                  }`}
                >
                  <span>تكليف الوكالة بهذه الباقة</span>
                  <ArrowLeft className="h-4 w-4" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 03. Detailed Comparison Matrix */}
      <section className="section-padding bg-parchment/50 border-y border-border">
        <div className="container-luxury max-w-5xl">
          <div className="text-center mb-12">
            <span className="section-label mb-3">مقارنة تفصيلية</span>
            <h2 className="heading-display text-3xl sm:text-4xl text-forest">
              الفرق الدقيق بين الباقات الثلاث
            </h2>
          </div>

          <div className="overflow-x-auto rounded-[var(--radius-xl)] bg-white border border-border shadow-[var(--shadow-soft)]">
            <table className="w-full text-right border-collapse">
              <thead>
                <tr className="border-b border-border bg-forest text-ivory">
                  <th className="p-5 font-heading text-xs sm:text-sm font-semibold">
                    الخدمة والامتيازات القانونية
                  </th>
                  <th className="p-5 text-center font-heading text-xs sm:text-sm font-semibold">
                    البداية (1490 DH)
                  </th>
                  <th className="p-5 text-center font-heading text-xs sm:text-sm font-semibold text-copper">
                    الأعمال (2490 DH)
                  </th>
                  <th className="p-5 text-center font-heading text-xs sm:text-sm font-semibold">
                    التميز (3990 DH)
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border font-arabic text-xs sm:text-sm">
                {comparisonRows.map((row, idx) => (
                  <tr key={idx} className="transition-colors hover:bg-ivory/60">
                    <td className="p-4 sm:p-5 font-medium text-forest">
                      {row.feature}
                    </td>
                    {["starter", "business", "premium"].map((key) => {
                      const val = row[key];
                      return (
                        <td key={key} className="p-4 sm:p-5 text-center">
                          {typeof val === "boolean" ? (
                            val ? (
                              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-forest/10 text-forest">
                                <Check className="h-3.5 w-3.5" />
                              </span>
                            ) : (
                              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-red-500/10 text-red-500">
                                <X className="h-3.5 w-3.5" />
                              </span>
                            )
                          ) : (
                            <span
                              className={`font-heading text-xs font-semibold ${
                                key === "business" ? "text-copper" : "text-walnut"
                              }`}
                            >
                              {val}
                            </span>
                          )}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 04. Direct WhatsApp Mandate Form (No Backend Needed) */}
      <section ref={formRef} id="order-form" className="section-padding">
        <div className="container-luxury max-w-4xl">
          <div className="rounded-[var(--radius-xl)] bg-white border border-border p-7 sm:p-12 shadow-[var(--shadow-card)]">
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 border-b border-border">
              <div>
                <span className="font-heading text-xs font-semibold text-copper block mb-1">
                  تواصل مباشر مع المستشار القانوني
                </span>
                <h2 className="heading-display text-2xl sm:text-3xl text-forest">
                  طلب توكيل إيداع العلامة التجارية
                </h2>
              </div>

              <div className="rounded-[var(--radius-md)] bg-ivory border border-border px-4 py-2.5 text-left">
                <span className="font-arabic text-[11px] text-muted block">
                  الباقة المختارة
                </span>
                <span className="font-heading text-sm font-bold text-forest">
                  {activePlanObj.name} —{" "}
                  <span className="text-copper">{activePlanObj.price} درهم</span>
                </span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Plan Selector Pills */}
              <div>
                <label className="block font-heading text-xs font-semibold text-forest mb-2.5">
                  اختر الباقة المناسبة
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {plans.map((p) => (
                    <button
                      key={p.id}
                      type="button"
                      onClick={() => setSelectedPlan(p.id)}
                      className={`rounded-[var(--radius-md)] border p-3.5 text-right transition-all ${
                        selectedPlan === p.id
                          ? "border-copper bg-forest text-ivory shadow-sm"
                          : "border-border bg-ivory/60 text-forest hover:border-muted"
                      }`}
                    >
                      <div className="font-heading text-xs font-bold">
                        {p.name}
                      </div>
                      <div
                        className={`font-heading text-xs mt-1 ${
                          selectedPlan === p.id ? "text-copper" : "text-muted"
                        }`}
                      >
                        {p.price} درهم شامل الرسوم
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block font-heading text-xs font-semibold text-forest mb-2">
                    اسم العلامة التجارية المقترح *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.brandName}
                    onChange={(e) =>
                      setFormData({ ...formData, brandName: e.target.value })
                    }
                    placeholder="مثال: أطلس، كش فود..."
                    className="input-luxury"
                  />
                </div>

                <div>
                  <label className="block font-heading text-xs font-semibold text-forest mb-2">
                    قطاع نشاط المشروع *
                  </label>
                  <select
                    value={formData.sector}
                    onChange={(e) =>
                      setFormData({ ...formData, sector: e.target.value })
                    }
                    className="input-luxury"
                  >
                    {sectors.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                <div>
                  <label className="block font-heading text-xs font-semibold text-forest mb-2">
                    الاسم الكامل للموكل *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) =>
                      setFormData({ ...formData, fullName: e.target.value })
                    }
                    placeholder="الاسم الشخصي والعائلي"
                    className="input-luxury"
                  />
                </div>

                <div>
                  <label className="block font-heading text-xs font-semibold text-forest mb-2">
                    رقم الهاتف / واتساب *
                  </label>
                  <input
                    type="tel"
                    required
                    dir="ltr"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    placeholder="+212 6 XX XX XX XX"
                    className="input-luxury text-right"
                  />
                </div>

                <div>
                  <label className="block font-heading text-xs font-semibold text-forest mb-2">
                    المدينة *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.city}
                    onChange={(e) =>
                      setFormData({ ...formData, city: e.target.value })
                    }
                    placeholder="الدار البيضاء، الرباط، مراكش..."
                    className="input-luxury"
                  />
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-border">
                <div className="flex items-center gap-2 font-arabic text-xs text-muted">
                  <ShieldCheck className="h-4 w-4 text-copper shrink-0" />
                  <span>
                    سيتم توجيهك مباشرة لمحادثة مستشارنا عبر واتساب لتأكيد الطلب
                  </span>
                </div>

                <button
                  type="submit"
                  className="btn btn-secondary !px-8 !py-4 !text-sm w-full sm:w-auto justify-center"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>إرسال الطلب عبر واتساب</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}