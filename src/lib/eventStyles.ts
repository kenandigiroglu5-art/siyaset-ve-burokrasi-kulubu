import { Users, Mic, GraduationCap, Star, MessagesSquare, PartyPopper } from "lucide-react";
import type { EventCategory } from "@/types";

export const categoryColors: Record<EventCategory, { bg: string; color: string }> = {
  Panel: { bg: "rgba(26,86,219,0.2)", color: "#60a5fa" },
  Konferans: { bg: "rgba(201,168,76,0.2)", color: "#c9a84c" },
  Workshop: { bg: "rgba(34,197,94,0.15)", color: "#4ade80" },
  Seminer: { bg: "rgba(168,85,247,0.15)", color: "#c084fc" },
  Söyleşi: { bg: "rgba(244,114,182,0.15)", color: "#f472b6" },
  Sosyal: { bg: "rgba(96,165,250,0.15)", color: "#60a5fa" },
};

export const categoryIcons: Record<EventCategory, React.ElementType> = {
  Panel: Users,
  Konferans: Mic,
  Workshop: GraduationCap,
  Seminer: Star,
  Söyleşi: MessagesSquare,
  Sosyal: PartyPopper,
};

export function categoryStyle(category: EventCategory) {
  return categoryColors[category] ?? { bg: "rgba(26,86,219,0.2)", color: "#60a5fa" };
}
