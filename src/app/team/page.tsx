import type { Metadata } from "next";
import ManagementBoard from "@/components/sections/ManagementBoard";
import Committees from "@/components/sections/Committees";
import { SITE_URL, SITE_NAME } from "@/lib/seo";

const PAGE_URL = `${SITE_URL}/team`;
const TITLE = "Yönetim Kurulu";
const DESCRIPTION = "İstanbul Medeniyet Üniversitesi Siyaset ve Bürokrasi Topluluğu yönetim kurulu ve komite üyeleri.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: `${TITLE} | ${SITE_NAME}`,
    description: DESCRIPTION,
    url: PAGE_URL,
    type: "website",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Yönetim Kurulu", item: PAGE_URL },
  ],
};

export default function TeamPage() {
  return (
    <div className="pt-[72px]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <div className="py-16 text-center" style={{ background: "linear-gradient(180deg, var(--color-bg-base), var(--color-bg-elevated))" }}>
        <p className="text-xs font-semibold tracking-[0.25em] uppercase mb-3" style={{ color: "#c9a84c" }}>Ekibimiz</p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold" style={{ color: "var(--color-text-primary)" }}>Yönetim Kurulu</h1>
        <p className="mt-4 text-base" style={{ color: "var(--color-text-muted)" }}>Topluluğumuzu ileri taşıyan liderlik kadrosu</p>
      </div>
      <ManagementBoard />
      <Committees />
    </div>
  );
}
