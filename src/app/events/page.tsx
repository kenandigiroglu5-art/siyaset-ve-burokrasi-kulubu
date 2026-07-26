import type { Metadata } from "next";
import UpcomingEvents from "@/components/sections/UpcomingEvents";
import PastEvents from "@/components/sections/PastEvents";

export const metadata: Metadata = {
  title: "Etkinlikler",
  description: "İMÜ Siyaset ve Bürokrasi Kulübü yaklaşan ve geçmiş etkinlikleri — paneller, konferanslar, workshoplar ve daha fazlası.",
};

export default function EventsPage() {
  return (
    <div className="pt-[72px]">
      <div className="py-16 text-center" style={{ background: "linear-gradient(180deg, #08152e, #0d1f3c)" }}>
        <p className="text-xs font-semibold tracking-[0.25em] uppercase mb-3" style={{ color: "#c9a84c" }}>Takvim</p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold" style={{ color: "rgb(248,250,252)" }}>Etkinlikler</h1>
        <p className="mt-4 text-base" style={{ color: "rgb(138,155,184)" }}>Paneller, konferanslar, workshoplar ve çok daha fazlası</p>
      </div>
      <UpcomingEvents />
      <PastEvents />
    </div>
  );
}
