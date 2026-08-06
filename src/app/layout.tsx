import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CustomCursor from "@/components/common/DeferredCustomCursor";
import ScrollProgress from "@/components/common/ScrollProgress";
import BackToTop from "@/components/common/BackToTop";
import CommandMenu from "@/components/common/CommandMenu";
import CookieBanner from "@/components/common/CookieBanner";
import Script from "next/script";
import ThemeProvider, { THEME_INIT_SCRIPT } from "@/components/common/ThemeProvider";
import LocaleProvider, { LOCALE_INIT_SCRIPT } from "@/lib/i18n/LocaleProvider";
import { SOURCES } from "@/lib/data";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const SITE_DESCRIPTION =
  "İstanbul Medeniyet Üniversitesi Siyaset ve Bürokrasi Topluluğu — siyasi partilerden bağımsız, vatanseverlerin buluşma noktası.";

export const metadata: Metadata = {
  metadataBase: new URL("https://siyaset-ve-burokrasi-kulubu.vercel.app"),
  title: {
    default: "İMÜ Siyaset ve Bürokrasi Topluluğu",
    template: "%s | İMÜ SBT",
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "İMÜ",
    "Siyaset ve Bürokrasi Topluluğu",
    "İstanbul Medeniyet Üniversitesi",
    "Öğrenci Topluluğu",
    "Siyaset Bilimi",
    "Kamu Yönetimi",
  ],
  authors: [{ name: "İMÜ Siyaset ve Bürokrasi Topluluğu" }],
  creator: "İMÜ Siyaset ve Bürokrasi Topluluğu",
  openGraph: {
    type: "website",
    locale: "tr_TR",
    siteName: "İMÜ Siyaset ve Bürokrasi Topluluğu",
    title: "İMÜ Siyaset ve Bürokrasi Topluluğu",
    description: SITE_DESCRIPTION,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "İMÜ Siyaset ve Bürokrasi Topluluğu",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "İMÜ Siyaset ve Bürokrasi Topluluğu",
    description: SITE_DESCRIPTION,
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "İMÜ Siyaset ve Bürokrasi Topluluğu",
  alternateName: "Siyaset ve Bürokrasi Topluluğu",
  url: "https://siyaset-ve-burokrasi-kulubu.vercel.app",
  description: SITE_DESCRIPTION,
  parentOrganization: {
    "@type": "CollegeOrUniversity",
    name: "İstanbul Medeniyet Üniversitesi",
  },
  sameAs: [SOURCES.instagram, SOURCES.linkedin],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={`${inter.variable} ${playfair.variable}`} suppressHydrationWarning>
      <body className="noise">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <Script
          id="theme-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }}
        />
        <Script
          id="locale-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: LOCALE_INIT_SCRIPT }}
        />
        <ThemeProvider>
          <LocaleProvider>
            <CustomCursor />
            <ScrollProgress />
            <Navbar />
            <main>{children}</main>
            <Footer />
            <BackToTop />
            <CommandMenu />
            <CookieBanner />
          </LocaleProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
