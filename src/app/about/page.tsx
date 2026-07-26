import type { Metadata } from "next";
import About from "@/components/sections/About";
import Statistics from "@/components/sections/Statistics";
import { timeline } from "@/lib/data";
import SectionHeader from "@/components/common/SectionHeader";

export const metadata: Metadata = {
  title: "Hakkımızda",
  description: "İMÜ Siyaset ve Bürokrasi Kulübü hakkında — tarihimiz, misyonumuz, vizyonumuz ve değerlerimiz.",
};

export default function AboutPage() {
  return (
    <>
      <div className="pt-[72px]">
        <About />
        <Statistics />
      </div>
    </>
  );
}
