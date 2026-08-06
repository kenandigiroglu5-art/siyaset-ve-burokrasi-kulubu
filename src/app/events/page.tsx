import type { Metadata } from "next";
import UpcomingEvents from "@/components/sections/UpcomingEvents";
import EventGallery from "@/components/sections/EventGallery";

export const metadata: Metadata = {
  title: "Etkinlikler",
  description: "İMÜ Siyaset ve Bürokrasi Topluluğu yaklaşan ve geçmiş etkinlikleri — paneller, konferanslar, seminerler ve söyleşiler.",
};

export default function EventsPage() {
  return (
    <div className="pt-[72px]">
      <div className="py-16 text-center" style={{ background: "linear-gradient(180deg, var(--color-bg-base), var(--color-bg-elevated))" }}>
        <p className="text-xs font-semibold tracking-[0.25em] uppercase mb-3" style={{ color: "#c9a84c" }}>Takvim</p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold" style={{ color: "var(--color-text-primary)" }}>Etkinlikler</h1>
        <p className="mt-4 text-base" style={{ color: "var(--color-text-muted)" }}>Paneller, konferanslar, workshoplar ve çok daha fazlası</p>
      </div>
      <UpcomingEvents />
      <EventGallery />
    </div>
  );
}
