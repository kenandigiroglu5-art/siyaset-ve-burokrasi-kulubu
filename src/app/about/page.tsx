import type { Metadata } from "next";
import About from "@/components/sections/About";
import Statistics from "@/components/sections/Statistics";

export const metadata: Metadata = {
  title: "Hakkımızda",
  description: "İMÜ Siyaset ve Bürokrasi Topluluğu hakkında — misyonumuz ve doğrulanmış etkinlik geçmişimiz.",
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
