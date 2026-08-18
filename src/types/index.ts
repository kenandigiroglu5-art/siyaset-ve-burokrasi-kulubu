export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface Event {
  id: string;
  slug: string;
  title: string;
  date: string;
  time?: string;
  location: string;
  category: EventCategory;
  description: string;
  image: string;
  /** Etkinlik detay sayfasındaki fotoğraf galerisi (opsiyonel) */
  gallery?: string[];
  registrationUrl?: string;
  isPast?: boolean;
  speakers?: string[];
  attendees?: number;
  /** Doğrulama için kaynak (Instagram/LinkedIn) bağlantısı */
  sourceUrl?: string;
  sourceLabel?: string;
}

export type EventCategory =
  | "Panel"
  | "Konferans"
  | "Workshop"
  | "Seminer"
  | "Söyleşi"
  | "Sosyal";

export interface TeamMember {
  id: string;
  role: string;
  /** Doğrulanmış isim yoksa boş bırakılır */
  name?: string;
  sourceLabel?: string;
}

export interface Committee {
  id: string;
  name: string;
  head: string;
  members: string[];
}

export interface Announcement {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  eventSlug?: string;
  sourceUrl?: string;
  sourceLabel?: string;
}

export interface InstagramHighlight {
  id: string;
  topic: string;
  category: string;
}

export interface Statistic {
  id: string;
  label: string;
  icon: string;
  value?: number;
  suffix?: string;
}

export interface Partner {
  id: string;
  name: string;
  logo: string;
  url?: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export interface TimelineItem {
  year: string;
  title: string;
  description: string;
  highlight?: boolean;
}

export interface WhyJoinItem {
  id: string;
  icon: string;
  title: string;
  description: string;
}

