export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  category: EventCategory;
  description: string;
  image: string;
  registrationUrl?: string;
  isPast?: boolean;
  speakers?: string[];
  attendees?: number;
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
  name: string;
  role: string;
  department: string;
  year: string;
  image: string;
  bio: string;
  linkedin?: string;
  instagram?: string;
  email?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content?: string;
  author: string;
  authorImage: string;
  date: string;
  readTime: string;
  category: BlogCategory;
  image: string;
  slug: string;
  tags: string[];
}

export type BlogCategory =
  | "Diplomasi"
  | "Siyaset"
  | "Kamu Yönetimi"
  | "Uluslararası İlişkiler"
  | "Analiz";

export interface Statistic {
  id: string;
  value: number;
  suffix: string;
  label: string;
  icon: string;
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

export interface InstagramPost {
  id: string;
  image: string;
  likes: number;
  comments: number;
  caption: string;
  url: string;
}
