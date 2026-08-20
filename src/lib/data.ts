import type {
  Event,
  TeamMember,
  Committee,
  Statistic,
  Partner,
  FAQ,
  TimelineItem,
  WhyJoinItem,
  NavItem,
  Announcement,
  InstagramHighlight,
} from "@/types";

// Kaynaklar (doğrulama için):
export const SOURCES = {
  instagram: "https://www.instagram.com/siyasetveburokrasi_imu/",
  linkedin:
    "https://www.linkedin.com/in/siyaset-ve-burokrasi-toplulu%C4%9Fu-6b46673a3/",
  whatsapp: "https://chat.whatsapp.com/DsMedSnqoA9Hah9lrLA0iK?s=hd&p=i&mlu=4&amv=1",
};

export const navItems: NavItem[] = [
  { label: "Ana Sayfa", href: "/" },
  { label: "Hakkımızda", href: "/about" },
  { label: "Etkinlikler", href: "/events" },
  { label: "Yönetim Kurulu", href: "/team" },
  { label: "Duyurular", href: "/announcements" },
  { label: "İletişim", href: "/contact" },
];

// Doğrulanmış rakamlar (canlı/değişken oldukları için sabit yazılmamıştır — bkz. Instagram/LinkedIn).
export const statistics: Statistic[] = [
  { id: "1", label: "Yıllık Deneyim", icon: "Calendar" },
  { id: "2", label: "Düzenlenen Etkinlik", icon: "Star" },
  { id: "3", label: "Konuşmacı", icon: "Mic" },
  { id: "4", label: "Topluluk Üyesi", icon: "Users" },
  { id: "5", label: "Tamamlanan Proje", icon: "Trophy" },
];

// Aşağıdaki etkinliklerin tamamı Instagram (@siyasetveburokrasi_imu) ve/veya
// LinkedIn (Siyaset Ve Burokrasi Topluluğu) sayfalarından doğrulanmıştır.
// Kronolojik sırayla (eskiden yeniye) listelenmiştir. Henüz duyurulmuş,
// tarihi gelmemiş bir etkinlik bulunmadığından "upcomingEvents" boştur.
export const pastEvents: Event[] = [
  {
    id: "e1",
    slug: "verona-eurasian-economic-forum-2025",
    title: "XVIII. Verona Avrasya Ekonomik Forumu Katılımı",
    date: "30-31 Ekim 2025",
    location: "İstanbul",
    category: "Konferans",
    description:
      "Topluluk üyelerimiz, İstanbul'da düzenlenen XVIII. Verona Avrasya Ekonomik Forumu'na katılım sağladı.",
    image: "",
    isPast: true,
    sourceUrl: SOURCES.instagram,
    sourceLabel: "Instagram",
  },
  {
    id: "e2",
    slug: "kariyer-yolculugu-soylesisi-ahmet-nohutcu",
    title: "Kariyer Yolculuğu Söyleşisi",
    date: "22 Aralık 2025",
    time: "16.00",
    location: "Kuzey Kampüs, Merkez Kütüphane, Ziraat Bankası Salonu",
    category: "Söyleşi",
    description:
      "KPSS, kaymakamlık, müfettişlik ve hakimlik gibi kariyer mesleklerine hazırlık süreci üzerine söyleşi.",
    image: "/images/events/kariyer-soylesisi/2.jpg",
    gallery: [
      "/images/events/kariyer-soylesisi/1.jpg",
      "/images/events/kariyer-soylesisi/2.jpg",
      "/images/events/kariyer-soylesisi/3.jpg",
      "/images/events/kariyer-soylesisi/4.jpg",
    ],
    isPast: true,
    speakers: ["Prof. Dr. Ahmet Nohutçu"],
    sourceUrl: SOURCES.instagram,
    sourceLabel: "Instagram",
  },
  {
    id: "e2b",
    slug: "8-mart-dunya-kadinlar-gunu",
    title: "8 Mart Dünya Kadınlar Günü",
    date: "8 Mart 2026",
    location: "İstanbul Medeniyet Üniversitesi",
    category: "Sosyal",
    description:
      "8 Mart Dünya Kadınlar Günü vesilesiyle, üniversitemizin farklı birimlerinde görev yapan kadın çalışanlarımızı ziyaret ederek kendilerine karanfil takdim ettik. Kadınların toplumsal, akademik ve çalışma hayatındaki değerli katkılarına dikkat çekmek ve bu anlamlı günü birlikte kutlamak amacıyla gerçekleştirdiğimiz etkinlikte güzel anılar biriktirdik.",
    image: "/images/events/8-mart-dunya-kadinlar-gunu.jpeg",
    isPast: true,
    sourceUrl: SOURCES.instagram,
    sourceLabel: "Instagram",
  },
  {
    id: "e3",
    slug: "ramazan-bilgi-yarismasi-2026",
    title: "Ramazan Konseptli Ödüllü Bilgi Yarışması",
    date: "18 Mart 2026",
    time: "12.30-14.00",
    location: "Kuzey Kampüs, B Blok Mavi Salon",
    category: "Sosyal",
    description: "Ramazan temalı, ödüllü bilgi yarışması etkinliği.",
    image: "",
    isPast: true,
    sourceUrl: SOURCES.instagram,
    sourceLabel: "Instagram",
  },
  {
    id: "e4",
    slug: "genclerde-finansal-okuryazarlik-islam-memis",
    title: "Gençler İçin Finansal Okuryazarlık Söyleşisi",
    date: "13 Nisan 2026",
    time: "12.30-14.00",
    location: "Merkez Kütüphane, Hasan Polatkan Salonu",
    category: "Söyleşi",
    description:
      "Gençlerin parayı doğru yönetmesi üzerine, iki topluluğun ortak düzenlediği söyleşi.",
    image: "/images/events/islam-memis-soylesisi/2.jpeg",
    gallery: [
      "/images/events/islam-memis-soylesisi/1.jpeg",
      "/images/events/islam-memis-soylesisi/2.jpeg",
      "/images/events/islam-memis-soylesisi/3.jpeg",
      "/images/events/islam-memis-soylesisi/4.jpeg",
      "/images/events/islam-memis-soylesisi/5.jpeg",
      "/images/events/islam-memis-soylesisi/6.jpeg",
    ],
    isPast: true,
    speakers: ["İslam Memiş"],
    sourceUrl: SOURCES.instagram,
    sourceLabel: "Instagram",
  },
  {
    id: "e5",
    slug: "huzurevi-ziyareti-2026",
    title: "Huzurevi Ziyareti",
    date: "Mayıs 2026",
    location: "İstanbul",
    category: "Sosyal",
    description:
      "Toplumsal dayanışma amacıyla düzenlenen huzurevi ziyareti; büyüklerle sohbet edildi, el yapımı bileklik ve mektuplar hazırlandı.",
    image: "",
    isPast: true,
    sourceUrl: SOURCES.linkedin,
    sourceLabel: "LinkedIn",
  },
  {
    id: "e6",
    slug: "kano-etkinligi-2026",
    title: "Kano Ekip Etkinliği",
    date: "Mayıs 2026",
    location: "İstanbul",
    category: "Sosyal",
    description: "Ekip ruhunu güçlendirmek amacıyla düzenlenen kano/kürek etkinliği.",
    image: "",
    isPast: true,
    sourceUrl: SOURCES.linkedin,
    sourceLabel: "LinkedIn",
  },
  {
    id: "e7",
    slug: "israil-iran-savasinda-turkiyenin-rolu-esat-arslan",
    title: "İsrail-İran Savaşı'nda Türkiye'nin Rolü ve Geleceği",
    date: "6 Mayıs 2026",
    time: "12.30-14.00",
    location: "B Blok Merkezi Derslik Binası, Mavi Salon",
    category: "Konferans",
    description:
      "Bölgesel güvenlik dengeleri ve Türkiye'nin rolü üzerine konferans.",
    image: "/images/events/esat-arslan-konferansi/1.jpeg",
    gallery: [
      "/images/events/esat-arslan-konferansi/1.jpeg",
      "/images/events/esat-arslan-konferansi/2.jpeg",
      "/images/events/esat-arslan-konferansi/3.jpeg",
    ],
    isPast: true,
    speakers: ["Emekli Tuğgeneral Prof. Dr. Esat Arslan"],
    sourceUrl: SOURCES.linkedin,
    sourceLabel: "LinkedIn",
  },
  {
    id: "e8",
    slug: "profesyonel-imaj-dijital-itibar-aytac-mestci",
    title: "Profesyonel İmaj ve Dijital İtibar: LinkedIn'de Öne Çıkma Sanatı",
    date: "13 Mayıs 2026",
    time: "12.30",
    location: "Kuzey Kampüs, B Blok Merkezi Derslik Binası, Mavi Salon",
    category: "Seminer",
    description:
      "Dijital kişisel marka, profesyonel imaj ve LinkedIn'de görünürlük üzerine seminer. Dış katılımcılara da açıktı.",
    image: "",
    isPast: true,
    speakers: ["Aytaç Mestçi (MarkeFront CEO'su)"],
    sourceUrl: SOURCES.linkedin,
    sourceLabel: "LinkedIn",
  },
  {
    id: "e9",
    slug: "prep-fest-2026",
    title: "Prep Fest Tanıtım Standı",
    date: "16-17 Mayıs 2026",
    location: "İstanbul Medeniyet Üniversitesi",
    category: "Sosyal",
    description:
      "Prep Fest kapsamında topluluk tanıtım standı açıldı, yeni üyelerle tanışıldı.",
    image: "",
    isPast: true,
    sourceUrl: SOURCES.instagram,
    sourceLabel: "Instagram",
  },
  {
    id: "e10",
    slug: "munazaraya-giris-fatih-uyar",
    title: "Münazaraya Giriş Eğitimi",
    date: "17 Mayıs 2026",
    time: "14.30",
    location: "Ziraat Bankası Konferans Salonu",
    category: "Workshop",
    description:
      "Hitabet ve eleştirel düşünce üzerine, İMÜ Teknosfer ve diğer topluluklarla ortak düzenlenen münazara eğitimi.",
    image: "",
    isPast: true,
    speakers: ["Fatih Uyar (Argumind Münazara Kurucusu)"],
    sourceUrl: "https://www.instagram.com/p/DYWHa4roRTv/",
    sourceLabel: "Instagram",
  },
];

// Henüz duyurulmuş, doğrulanabilir yaklaşan bir etkinlik yok.
export const upcomingEvents: Event[] = [];

export const teamMembers: TeamMember[] = [
  {
    id: "tm1",
    role: "Başkan",
    name: "Tamay Tuğra Polat",
  },
  {
    id: "tm2",
    role: "Başkan Yardımcısı",
    name: "Serra Fatma Uğur",
  },
  {
    id: "tm3",
    role: "Genel Sekreter",
    name: "Aybeniz Taş",
  },
];

export const committees: Committee[] = [
  {
    id: "c1",
    name: "Sosyal Medya Komitesi",
    head: "Elif Tütüneken",
    members: ["Sude Yıldız", "Elif Akyapı"],
  },
  {
    id: "c2",
    name: "İletişim Komitesi",
    head: "Serranur Hatice Kaba",
    members: ["Onat Yılmaz Yardımcı", "Hasan Çankaloğlu"],
  },
  {
    id: "c3",
    name: "Organizasyon Komitesi",
    head: "Zehra Betül Şengül",
    members: ["Zehra Yalnız", "Kenan Dığıroğlu", "Merve Gökçen Güden"],
  },
  {
    id: "c4",
    name: "Araştırma Komitesi",
    head: "Neslihan Arslan",
    members: ["Sümeyye Çığrıkçı", "Sebahattin Samed Alkaşi"],
  },
];

// "Duyurular" bölümü — gerçek etkinliklere dayalı kronolojik duyuru akışı.
export const announcements: Announcement[] = [
  {
    id: "a1",
    title: "Yeni döneme \"Biz Kimiz?\" ile merhaba dedik",
    date: "24 Ekim 2025",
    excerpt:
      "Siyaset ve Bürokrasi Topluluğu olarak kendimizi tanıttık: farklı bölümlerden öğrencilerin bir araya gelip fikirlerini özgürce paylaştığı, tartıştığı ve ürettiği bir topluluğuz.",
    sourceUrl: "https://www.instagram.com/p/DQNJ9ZvjFdr/",
    sourceLabel: "Instagram",
  },
  {
    id: "a2",
    title: "Verona Avrasya Ekonomik Forumu'ndaydık",
    date: "30-31 Ekim 2025",
    excerpt: "Üyelerimiz İstanbul'da düzenlenen XVIII. Verona Avrasya Ekonomik Forumu'na katıldı.",
    eventSlug: "verona-eurasian-economic-forum-2025",
    sourceUrl: SOURCES.instagram,
    sourceLabel: "Instagram",
  },
  {
    id: "a3",
    title: "Kariyer Yolculuğu Söyleşisi: Prof. Dr. Ahmet Nohutçu",
    date: "22 Aralık 2025",
    excerpt:
      "KPSS, kaymakamlık, müfettişlik ve hakimlik kariyer yollarına hazırlık süreci konuşuldu.",
    eventSlug: "kariyer-yolculugu-soylesisi-ahmet-nohutcu",
    sourceUrl: SOURCES.instagram,
    sourceLabel: "Instagram",
  },
  {
    id: "a4",
    title: "Ramazan Bilgi Yarışması duyuruldu",
    date: "18 Mart 2026",
    excerpt: "Ramazan konseptli, ödüllü bilgi yarışması Kuzey Kampüs'te gerçekleşti.",
    eventSlug: "ramazan-bilgi-yarismasi-2026",
    sourceUrl: SOURCES.instagram,
    sourceLabel: "Instagram",
  },
  {
    id: "a5",
    title: "Gençler için finansal okuryazarlık söyleşisi",
    date: "13 Nisan 2026",
    excerpt: "İslam Memiş'in konuk olduğu, iki topluluğun ortak düzenlediği söyleşi gerçekleşti.",
    eventSlug: "genclerde-finansal-okuryazarlik-islam-memis",
    sourceUrl: SOURCES.instagram,
    sourceLabel: "Instagram",
  },
  {
    id: "a6",
    title: "Huzurevi ziyaretiyle toplumsal dayanışma",
    date: "Mayıs 2026",
    excerpt: "El yapımı bileklik ve mektuplarla hazırlanıp büyüklerimizi ziyaret ettik.",
    eventSlug: "huzurevi-ziyareti-2026",
    sourceUrl: SOURCES.linkedin,
    sourceLabel: "LinkedIn",
  },
  {
    id: "a7",
    title: "Esat Arslan ile bölgesel güvenlik konferansı",
    date: "6 Mayıs 2026",
    excerpt:
      "Emekli Tuğgeneral Prof. Dr. Esat Arslan, İsrail-İran savaşında Türkiye'nin rolünü değerlendirdi.",
    eventSlug: "israil-iran-savasinda-turkiyenin-rolu-esat-arslan",
    sourceUrl: SOURCES.linkedin,
    sourceLabel: "LinkedIn",
  },
  {
    id: "a8",
    title: "Aytaç Mestçi ile dijital itibar semineri",
    date: "13 Mayıs 2026",
    excerpt:
      "MarkeFront CEO'su Aytaç Mestçi, LinkedIn'de profesyonel imaj oluşturmanın inceliklerini paylaştı.",
    eventSlug: "profesyonel-imaj-dijital-itibar-aytac-mestci",
    sourceUrl: SOURCES.linkedin,
    sourceLabel: "LinkedIn",
  },
  {
    id: "a9",
    title: "Prep Fest'te standımızdaydık",
    date: "16-17 Mayıs 2026",
    excerpt: "Yeni üyelerimizle tanıştık, topluluğumuzu büyüttük.",
    eventSlug: "prep-fest-2026",
    sourceUrl: "https://www.instagram.com/p/DYY9EXHjN5P/",
    sourceLabel: "Instagram",
  },
  {
    id: "a10",
    title: "Fatih Uyar ile \"Münazaraya Giriş\" eğitimi",
    date: "17 Mayıs 2026",
    excerpt:
      "Argumind Münazara Kurucusu Fatih Uyar'ın rehberliğinde hitabet ve eleştirel düşünce eğitimi düzenlendi.",
    eventSlug: "munazaraya-giris-fatih-uyar",
    sourceUrl: "https://www.instagram.com/p/DYWHa4roRTv/",
    sourceLabel: "Instagram",
  },
];

// Instagram hesabımızdaki güncel paylaşım başlıkları (beğeni/yorum sayıları
// anlık değiştiği için sabit yazılmamıştır).
export const instagramHighlights: InstagramHighlight[] = [
  { id: "ig1", topic: "Münazaraya Giriş Eğitimi", category: "Etkinlik" },
  { id: "ig2", topic: "Prep Fest'teyiz", category: "Tanıtım" },
  { id: "ig3", topic: "Aytaç Mestçi Semineri", category: "Etkinlik" },
  { id: "ig4", topic: "Esat Arslan Konferansı", category: "Etkinlik" },
  { id: "ig5", topic: "Huzurevi Ziyaretimiz", category: "Sosyal Sorumluluk" },
  { id: "ig6", topic: "Kano Ekip Etkinliği", category: "Sosyal" },
];

export const faqs: FAQ[] = [
  {
    id: "faq1",
    question: "Topluluğa kimler katılabilir?",
    answer:
      "İstanbul Medeniyet Üniversitesi'nin tüm fakülte ve bölümlerinden öğrenciler topluluğumuza katılabilir. Siyaset, diplomasi ve kamu yönetimine ilgi duyan herkese kapılarımız açıktır.",
  },
  {
    id: "faq2",
    question: "Üyelik ücretli midir?",
    answer: "Hayır, topluluk üyeliği ücretsizdir.",
  },
  {
    id: "faq3",
    question: "Topluluğa nasıl katılabilirim?",
    answer:
      "Prep Fest gibi kampüs etkinliklerindeki standımıza uğrayabilir, Instagram (@siyasetveburokrasi_imu) veya WhatsApp grubumuz üzerinden bize ulaşabilirsiniz.",
  },
  {
    id: "faq4",
    question: "Etkinliklere sadece üyeler mi katılabilir?",
    answer:
      "Etkinliklerimizin çoğu tüm İMÜ öğrencilerine, bazıları dış katılımcılara da açıktır. Katılım koşulları her etkinlik duyurusunda ayrıca belirtilir.",
  },
  {
    id: "faq5",
    question: "Yönetim kurulunda kimler var?",
    answer:
      "Yönetim kurulumuz ve komitelerimizin tam listesine Yönetim Kurulu sayfamızdan ulaşabilirsiniz.",
  },
  {
    id: "faq8",
    question: "Sosyal medyadan nasıl takip edebilirim?",
    answer:
      "Tüm etkinlik duyuruları ve içeriklerimiz için Instagram hesabımız @siyasetveburokrasi_imu'yu ve LinkedIn sayfamızı takip edebilirsiniz.",
  },
];

// Tarihçe yalnızca doğrulanabilen 2025-2026 dönemi etkinliklerinden oluşturulmuştur.
// Kuruluş yılı gibi doğrulanamayan bilgiler eklenmemiştir.
export const timeline: TimelineItem[] = pastEvents.map((e) => ({
  year: e.date,
  title: e.title,
  description: e.description,
  highlight: Boolean(e.speakers && e.speakers.length > 0),
}));

// Yalnızca doğrulanan faaliyet türlerine dayanan, iddialı/doğrulanamayan
// ifadeler (ör. "Model BM") içermeyen genel katılım teşvikleri.
export const whyJoinItems: WhyJoinItem[] = [
  {
    id: "wj1",
    icon: "Network",
    title: "Güçlü Ağ",
    description:
      "Akademisyenler, uzmanlar ve profesyonellerle düzenlenen söyleşi ve seminerlerle doğrudan bağlantı kurma fırsatı.",
  },
  {
    id: "wj2",
    icon: "Briefcase",
    title: "Kariyer Yönelimi",
    description:
      "KPSS, kaymakamlık, hakimlik gibi kamu kariyer yollarına yönelik söyleşiler ve dijital profesyonel imaj seminerleri.",
  },
  {
    id: "wj3",
    icon: "BookOpen",
    title: "Hitabet ve Münazara",
    description:
      "Eleştirel düşünce ve etkili konuşma becerilerini geliştiren eğitim ve atölye çalışmaları.",
  },
  {
    id: "wj4",
    icon: "Heart",
    title: "Toplumsal Sorumluluk",
    description: "Huzurevi ziyareti gibi toplumsal dayanışma etkinlikleriyle fark yaratma imkânı.",
  },
];

// Doğrulanmış kurumsal iş birliği bilgisi gelene kadar boş bırakılmıştır.
export const partners: Partner[] = [];
