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
import GoogleAnalytics from "@/components/common/GoogleAnalytics";
import Script from "next/script";
import ThemeProvider, { THEME_INIT_SCRIPT } from "@/components/common/ThemeProvider";
import LocaleProvider, { LOCALE_INIT_SCRIPT } from "@/lib/i18n/LocaleProvider";
import { SOURCES } from "@/lib/data";
import { SITE_URL, SITE_NAME, SITE_NAME_FULL } from "@/lib/seo";

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
  "İstanbul Medeniyet Üniversitesi Siyaset ve Bürokrasi Topluluğu. Etkinlikler, duyurular, projeler ve topluluk faaliyetleri hakkında bilgi alın.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | İstanbul Medeniyet Üniversitesi`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "Siyaset ve Bürokrasi Topluluğu",
    "İMÜ Siyaset ve Bürokrasi Topluluğu",
    "İstanbul Medeniyet Üniversitesi Siyaset ve Bürokrasi Topluluğu",
    "Siyaset ve Bürokrasi Kulübü",
    "İstanbul Medeniyet Üniversitesi öğrenci kulüpleri",
    "İMÜ öğrenci kulüpleri",
    "İstanbul Medeniyet Üniversitesi siyaset",
    "İMÜ",
    "Siyaset Bilimi",
    "Kamu Yönetimi",
  ],
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    siteName: SITE_NAME,
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    images: [
      {
        url: "/logo.png",
        width: 1024,
        height: 1024,
        alt: `${SITE_NAME} logosu`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    images: ["/logo.png"],
  },
  verification: {
    other: {
      "google-adsense-account": "ca-pub-6238768944122112",
    },
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
  name: SITE_NAME,
  alternateName: [SITE_NAME_FULL, "Siyaset ve Bürokrasi Kulübü"],
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
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
        <GoogleAnalytics />
        <Script
          id="google-adsense"
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6238768944122112"
          crossOrigin="anonymous"
          strategy="afterInteractive"
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
