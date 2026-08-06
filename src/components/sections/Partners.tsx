"use client";
import SectionHeader from "@/components/common/SectionHeader";
import { partners } from "@/lib/data";
import { useLocale } from "@/lib/i18n/LocaleProvider";

export default function Partners() {
  const { t } = useLocale();
  if (partners.length === 0) {
    return (
      <section id="partners" className="section-padding relative overflow-hidden" style={{ background: "var(--color-bg-deep)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeader
            eyebrow={t.partners.eyebrow}
            title={t.partners.title}
            subtitle={t.partners.subtitle}
          />
          <div
            className="rounded-3xl p-12 text-center"
            style={{ background: "var(--surface-1)", border: "1px solid var(--border-1)" }}
          >
            <p className="text-sm" style={{ color: "var(--color-text-muted)" }}>
              {t.partners.empty}
            </p>
          </div>
        </div>
      </section>
    );
  }

  const doubled = [...partners, ...partners];

  return (
    <section id="partners" className="section-padding relative overflow-hidden" style={{ background: "var(--color-bg-deep)" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeader
          eyebrow={t.partners.eyebrow}
          title={t.partners.title}
          subtitle={t.partners.subtitle}
        />
      </div>

      {/* Marquee */}
      <div className="relative overflow-hidden" style={{ mask: "linear-gradient(90deg, transparent, black 10%, black 90%, transparent)" }}>
        <div className="flex animate-marquee gap-8 py-4" style={{ width: "max-content" }}>
          {doubled.map((partner, i) => (
            <div
              key={`${partner.id}-${i}`}
              className="flex-shrink-0 px-8 py-5 rounded-2xl flex items-center justify-center transition-all duration-300 hover:scale-105 cursor-default"
              style={{
                background: "var(--surface-2)",
                border: "1px solid var(--border-1)",
                minWidth: "160px",
              }}
            >
              <span className="text-sm font-semibold text-center" style={{ color: "var(--color-text-muted)" }}>
                {partner.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
