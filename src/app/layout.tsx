import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import LoadingScreen from "@/components/common/LoadingScreen";
import CustomCursor from "@/components/common/CustomCursor";
import ScrollProgress from "@/components/common/ScrollProgress";
import BackToTop from "@/components/common/BackToTop";
import CommandMenu from "@/components/common/CommandMenu";
import CookieBanner from "@/components/common/CookieBanner";

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

export const metadata: Metadata = {
  title: {
    default: "İMÜ Siyaset ve Bürokrasi Kulübü",
    template: "%s | İMÜ SBK",
  },
  description:
    "İstanbul Medeniyet Üniversitesi Siyaset ve Bürokrasi Kulübü — Geleceğin diplomatlarını, siyasetçilerini ve kamu yöneticilerini yetiştiren öğrenci topluluğu.",
  keywords: [
    "İMÜ",
    "Siyaset Kulübü",
    "Bürokrasi",
    "Diplomasi",
    "İstanbul Medeniyet Üniversitesi",
    "Öğrenci Kulübü",
    "Siyaset Bilimi",
    "Kamu Yönetimi",
    "Uluslararası İlişkiler",
  ],
  authors: [{ name: "İMÜ Siyaset ve Bürokrasi Kulübü" }],
  creator: "İMÜ Siyaset ve Bürokrasi Kulübü",
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://imusbk.com",
    siteName: "İMÜ Siyaset ve Bürokrasi Kulübü",
    title: "İMÜ Siyaset ve Bürokrasi Kulübü",
    description:
      "Geleceğin diplomatlarını, siyasetçilerini ve kamu yöneticilerini yetiştiren öğrenci topluluğu.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "İMÜ Siyaset ve Bürokrasi Kulübü",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "İMÜ Siyaset ve Bürokrasi Kulübü",
    description:
      "Geleceğin diplomatlarını, siyasetçilerini ve kamu yöneticilerini yetiştiren öğrenci topluluğu.",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={`${inter.variable} ${playfair.variable}`}>
      <body className="noise">
        <LoadingScreen />
        <CustomCursor />
        <ScrollProgress />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <BackToTop />
        <CommandMenu />
        <CookieBanner />
      </body>
    </html>
  );
}
