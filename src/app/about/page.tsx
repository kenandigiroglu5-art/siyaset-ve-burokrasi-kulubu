import type { Metadata } from "next";
import About from "@/components/sections/About";
import Statistics from "@/components/sections/Statistics";
import { SITE_URL, SITE_NAME } from "@/lib/seo";

const PAGE_URL = `${SITE_URL}/about`;
const TITLE = "Hakkımızda";
const DESCRIPTION =
  "İstanbul Medeniyet Üniversitesi Siyaset ve Bürokrasi Topluluğu (öğrenci kulübü) hakkında — misyonumuz, duruşumuz ve doğrulanmış etkinlik geçmişimiz.";

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
    { "@type": "ListItem", position: 2, name: "Hakkımızda", item: PAGE_URL },
  ],
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <div className="pt-[72px]">
        <About />
        <Statistics />
      </div>
    </>
  );
}
