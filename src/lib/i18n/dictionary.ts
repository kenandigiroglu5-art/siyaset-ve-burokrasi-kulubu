export type Locale = "tr" | "en";

export interface Dictionary {
  nav: Record<
    "home" | "about" | "events" | "team" | "announcements" | "contact" | "search" | "exploreEvents" | "joinUs" | "followUs",
    string
  >;
  hero: Record<
    "badgeUniversity" | "badgeTerm" | "titleLine1" | "titleLine2" | "subtitle" | "description" | "exploreEvents" | "joinUs" | "latestActivity" | "scroll",
    string
  >;
  about: Record<
    "eyebrow" | "title" | "subtitle" | "missionTitle" | "missionText" | "missionSource" | "stanceTitle" | "stanceText" | "stanceSource" | "visionTitle" | "visionText" | "timelineTitle" | "timelineSubtitle" | "timelineEmpty",
    string
  >;
  statistics: Record<"eyebrow" | "title" | "subtitle" | "updating", string> & { labels: string[] };
  upcomingEvents: Record<
    "eyebrow" | "title" | "subtitle" | "emptyTitle" | "emptyBody" | "register" | "details" | "viewAll" | "speakers" | "capacity",
    string
  >;
  eventGallery: Record<"eyebrow" | "title" | "subtitle" | "empty" | "viewDetail", string>;
  eventDetail: Record<"back" | "upcoming" | "register" | "source" | "related", string>;
  team: Record<"eyebrow" | "title" | "subtitle" | "updating" | "source" | "footnote", string>;
  committees: Record<"eyebrow" | "title" | "subtitle" | "headLabel", string>;
  whyJoin: Record<"eyebrow" | "title" | "subtitle" | "cta", string>;
  partners: Record<"eyebrow" | "title" | "subtitle" | "empty", string>;
  instagram: Record<"eyebrow" | "title" | "subtitle" | "viewOnInstagram" | "follow", string>;
  announcements: Record<"eyebrow" | "title" | "subtitle" | "empty" | "viewDetail", string>;
  faq: Record<"eyebrow" | "title" | "subtitle", string>;
  contact: Record<
    "eyebrow" | "title" | "subtitle" | "formTitle" | "name" | "namePlaceholder" | "email" | "emailPlaceholder" | "subject" | "subjectPlaceholder" | "message" | "messagePlaceholder" | "send" | "sending" | "sentTitle" | "sentBody" | "newMessage" | "errorTitle" | "errorBody" | "tryAgain",
    string
  >;
  footer: Record<"tagline" | "explore" | "resources" | "rights", string>;
  notFound: Record<"title" | "body" | "home" | "back", string>;
  cookie: Record<"text" | "policy" | "accept", string>;
  search: Record<"placeholder" | "noResults" | "select" | "close", string>;
}

export const dictionary: Record<Locale, Dictionary> = {
  tr: {
    nav: {
      home: "Ana Sayfa",
      about: "Hakkımızda",
      events: "Etkinlikler",
      team: "Yönetim Kurulu",
      announcements: "Duyurular",
      contact: "İletişim",
      search: "Ara",
      exploreEvents: "Etkinlikleri İncele",
      joinUs: "Topluluğa Katıl",
      followUs: "Bizi takip edin",
    },
    hero: {
      badgeUniversity: "İstanbul Medeniyet Üniversitesi",
      badgeTerm: "2025-2026 Dönemi",
      titleLine1: "Siyaset ve ",
      titleLine2: "Bürokrasi Topluluğu",
      subtitle: "Siyasi partilerden bağımsız, vatanseverlerin buluşma noktası.",
      description:
        "Üniversitemizde farklı bölümlerden öğrencilerin bir araya gelip düşüncelerini özgürce paylaştığı, tartıştığı ve ürettiği bir topluluğuz.",
      exploreEvents: "Etkinlikleri İncele",
      joinUs: "Topluluğa Katıl",
      latestActivity: "Son Etkinlik",
      scroll: "Kaydır",
    },
    about: {
      eyebrow: "Hakkımızda",
      title: "Siyaset ve Bürokrasi Topluluğu",
      subtitle:
        "Üniversitemizde farklı bölümlerden öğrencilerin bir araya gelip düşüncelerini özgürce paylaştığı, tartıştığı ve ürettiği bir topluluğuz.",
      missionTitle: "Misyonumuz",
      missionText:
        "Farklı bölümlerden öğrencileri bir araya getirerek düşüncelerin özgürce paylaşıldığı, tartışıldığı ve üretildiği bağımsız bir platform oluşturmak.",
      missionSource: "Kaynak: Instagram — \"Biz Kimiz?\"",
      stanceTitle: "Duruşumuz",
      stanceText: "Siyasi partilerden bağımsız; vatanseverlerin buluşma noktası olmak.",
      stanceSource: "Kaynak: Instagram biyografisi",
      visionTitle: "Vizyonumuz",
      visionText: "Vizyon bildirgemiz yakında paylaşılacaktır.",
      timelineTitle: "2025-2026 Dönemi",
      timelineSubtitle: "Tarihçemiz yalnızca Instagram ve LinkedIn üzerinden doğrulanabilen etkinlikleri içerir.",
      timelineEmpty: "Tarihçemiz güncelleniyor.",
    },
    statistics: {
      eyebrow: "Rakamlarla Biz",
      title: "Rakamlarla Topluluğumuz",
      subtitle: "Doğrulanmış rakamlar elde edildikçe bu alan güncellenecektir.",
      updating: "Güncelleniyor",
      labels: ["Yıllık Deneyim", "Düzenlenen Etkinlik", "Konuşmacı", "Topluluk Üyesi", "Tamamlanan Proje"],
    },
    upcomingEvents: {
      eyebrow: "Yaklaşan Etkinlikler",
      title: "Sizi Bekliyoruz",
      subtitle: "Uzman konuşmacılar, interaktif atölyeler ve güçlü bir toplulukla dolu etkinlik takvimine katılın.",
      emptyTitle: "Yaklaşan etkinlikler yakında açıklanacaktır.",
      emptyBody: "Etkinlik takvimimiz güncelleniyor, lütfen daha sonra tekrar kontrol edin.",
      register: "Kayıt Ol",
      details: "Detaylar",
      viewAll: "Tüm Etkinlikleri Gör",
      speakers: "Konuşmacılar",
      capacity: "katılımcı kapasitesi",
    },
    eventGallery: {
      eyebrow: "Etkinlik Galerisi",
      title: "İzimizi Bıraktık",
      subtitle: "Her etkinlik, topluluğumuzun büyümesine ve üyelerimizin gelişimine katkı sağladı.",
      empty: "Galeri güncelleniyor.",
      viewDetail: "Etkinlik Detayı",
    },
    eventDetail: {
      back: "Tüm Etkinlikler",
      upcoming: "Yaklaşan",
      register: "Kayıt Ol",
      source: "Kaynak",
      related: "Benzer Etkinlikler",
    },
    team: {
      eyebrow: "Yönetim Kurulu",
      title: "Ekibimizle Tanışın",
      subtitle: "Topluluğumuzu yöneten yönetim kurulumuzla tanışın.",
      updating: "Bilgiler güncelleniyor",
      source: "Kaynak",
      footnote: "Yönetim kurulumuza ve tüm komite üyelerimize emekleri için teşekkür ederiz.",
    },
    committees: {
      eyebrow: "Komiteler",
      title: "Komitelerimiz",
      subtitle: "Farklı alanlarda çalışan komitelerimiz ve değerli üyeleri.",
      headLabel: "Komite Başkanı",
    },
    whyJoin: {
      eyebrow: "Neden Biz?",
      title: "Topluluğumuza Neden Katılmalısınız?",
      subtitle: "Her üyemize özel fırsatlar sunuyoruz. Kariyer, ağ, deneyim ve gelişim için doğru yerdesiniz.",
      cta: "Hemen Üye Ol",
    },
    partners: {
      eyebrow: "İş Ortaklarımız",
      title: "Kurumsal İşbirliklerimiz",
      subtitle: "Kurumsal iş birliklerimiz yakında duyurulacaktır.",
      empty: "Doğrulanmış kurumsal iş birliği bilgisi eklendiğinde bu bölüm güncellenecektir.",
    },
    instagram: {
      eyebrow: "Instagram",
      title: "Bizi Takip Edin",
      subtitle: "@siyasetveburokrasi_imu hesabımızdan en güncel etkinlik ve içeriklerimizi takip edin.",
      viewOnInstagram: "Instagram'da Gör",
      follow: "Takip Et",
    },
    announcements: {
      eyebrow: "Duyurular",
      title: "Topluluktan Haberler",
      subtitle: "Instagram ve LinkedIn hesaplarımızdan doğrulanan, kronolojik duyuru akışı.",
      empty: "Duyurular güncelleniyor.",
      viewDetail: "Etkinlik detayı",
    },
    faq: {
      eyebrow: "SSS",
      title: "Sıkça Sorulan Sorular",
      subtitle: "Topluluğumuz hakkında merak ettiğiniz her şeyin cevabı burada.",
    },
    contact: {
      eyebrow: "İletişim",
      title: "Bizimle İletişime Geçin",
      subtitle: "Sorularınız için buradayız. Topluluğa katılmak, etkinlikler veya işbirliği için mesaj gönderin.",
      formTitle: "Mesaj Gönderin",
      name: "Adınız",
      namePlaceholder: "Adınız Soyadınız",
      email: "E-posta",
      emailPlaceholder: "ornek@imu.edu.tr",
      subject: "Konu",
      subjectPlaceholder: "Mesajınızın konusu",
      message: "Mesajınız",
      messagePlaceholder: "Mesajınızı buraya yazın...",
      send: "Mesajı Gönder",
      sending: "Gönderiliyor...",
      sentTitle: "Mesajınız İletildi!",
      sentBody: "En kısa sürede size geri döneceğiz.",
      newMessage: "Yeni Mesaj",
      errorTitle: "Mesaj Gönderilemedi",
      errorBody: "Bir sorun oluştu. Lütfen tekrar deneyin ya da bizimle Instagram/WhatsApp üzerinden iletişime geçin.",
      tryAgain: "Tekrar Dene",
    },
    footer: {
      tagline: "Siyasi partilerden bağımsız, vatanseverlerin buluşma noktası.",
      explore: "Keşfet",
      resources: "Kaynaklar",
      rights: "Tüm hakları saklıdır.",
    },
    notFound: {
      title: "Sayfa Bulunamadı",
      body: "Aradığınız sayfa taşınmış, silinmiş ya da hiç var olmamış olabilir.",
      home: "Ana Sayfaya Dön",
      back: "Geri Dön",
    },
    cookie: {
      text: "Deneyiminizi iyileştirmek için çerezler kullanıyoruz.",
      policy: "Gizlilik politikası",
      accept: "Kabul Et",
    },
    search: {
      placeholder: "Etkinlik, duyuru, sayfa ara...",
      noResults: "Sonuç bulunamadı.",
      select: "Seç",
      close: "Kapat",
    },
  },
  en: {
    nav: {
      home: "Home",
      about: "About",
      events: "Events",
      team: "Board",
      announcements: "Announcements",
      contact: "Contact",
      search: "Search",
      exploreEvents: "Explore Events",
      joinUs: "Join Us",
      followUs: "Follow us",
    },
    hero: {
      badgeUniversity: "Istanbul Medeniyet University",
      badgeTerm: "2025-2026 Term",
      titleLine1: "Politics and",
      titleLine2: "Bureaucracy Community",
      subtitle: "Independent of political parties — a meeting point for patriots.",
      description:
        "We are a community where students from different departments come together to freely share, discuss, and develop ideas.",
      exploreEvents: "Explore Events",
      joinUs: "Join Us",
      latestActivity: "Latest Event",
      scroll: "Scroll",
    },
    about: {
      eyebrow: "About Us",
      title: "Politics and Bureaucracy Community",
      subtitle:
        "We are a community where students from different departments come together to freely share, discuss, and develop ideas.",
      missionTitle: "Our Mission",
      missionText:
        "To bring together students from different departments and create an independent platform where ideas are freely shared, discussed, and produced.",
      missionSource: "Source: Instagram — \"Who We Are\"",
      stanceTitle: "Our Stance",
      stanceText: "Independent of political parties; a meeting point for patriots.",
      stanceSource: "Source: Instagram bio",
      visionTitle: "Our Vision",
      visionText: "Our vision statement will be shared soon.",
      timelineTitle: "2025-2026 Term",
      timelineSubtitle: "Our history only includes events verifiable via Instagram and LinkedIn.",
      timelineEmpty: "Our history is being updated.",
    },
    statistics: {
      eyebrow: "By the Numbers",
      title: "Our Community in Numbers",
      subtitle: "This section will be updated as verified figures become available.",
      updating: "Updating",
      labels: ["Years Active", "Events Held", "Speakers", "Community Members", "Projects Completed"],
    },
    upcomingEvents: {
      eyebrow: "Upcoming Events",
      title: "We're Waiting for You",
      subtitle: "Join our calendar full of expert speakers, interactive workshops, and a strong community.",
      emptyTitle: "Upcoming events will be announced soon.",
      emptyBody: "Our event calendar is being updated, please check back later.",
      register: "Register",
      details: "Details",
      viewAll: "View All Events",
      speakers: "Speakers",
      capacity: "capacity",
    },
    eventGallery: {
      eyebrow: "Event Gallery",
      title: "Moments We've Made",
      subtitle: "Every event contributed to our community's growth and our members' development.",
      empty: "Gallery is being updated.",
      viewDetail: "Event Detail",
    },
    eventDetail: {
      back: "All Events",
      upcoming: "Upcoming",
      register: "Register",
      source: "Source",
      related: "Related Events",
    },
    team: {
      eyebrow: "Board",
      title: "Meet Our Team",
      subtitle: "Meet the board leading our community.",
      updating: "Information being updated",
      source: "Source",
      footnote: "We thank our board and all committee members for their dedication.",
    },
    committees: {
      eyebrow: "Committees",
      title: "Our Committees",
      subtitle: "Our committees working across different areas and their valued members.",
      headLabel: "Committee Head",
    },
    whyJoin: {
      eyebrow: "Why Us?",
      title: "Why Should You Join Our Community?",
      subtitle: "We offer special opportunities to every member. It's the right place for career, network, experience, and growth.",
      cta: "Join Now",
    },
    partners: {
      eyebrow: "Our Partners",
      title: "Institutional Collaborations",
      subtitle: "Our institutional collaborations will be announced soon.",
      empty: "This section will be updated once verified institutional partnership information is added.",
    },
    instagram: {
      eyebrow: "Instagram",
      title: "Follow Us",
      subtitle: "Follow @siyasetveburokrasi_imu for our latest events and content.",
      viewOnInstagram: "View on Instagram",
      follow: "Follow",
    },
    announcements: {
      eyebrow: "Announcements",
      title: "News from the Community",
      subtitle: "A chronological announcement feed verified from our Instagram and LinkedIn accounts.",
      empty: "Announcements are being updated.",
      viewDetail: "Event detail",
    },
    faq: {
      eyebrow: "FAQ",
      title: "Frequently Asked Questions",
      subtitle: "Everything you want to know about our community, answered here.",
    },
    contact: {
      eyebrow: "Contact",
      title: "Get in Touch",
      subtitle: "We're here for your questions. Send a message to join, ask about events, or collaborate.",
      formTitle: "Send a Message",
      name: "Your Name",
      namePlaceholder: "Your full name",
      email: "Email",
      emailPlaceholder: "example@imu.edu.tr",
      subject: "Subject",
      subjectPlaceholder: "Subject of your message",
      message: "Message",
      messagePlaceholder: "Write your message here...",
      send: "Send Message",
      sending: "Sending...",
      sentTitle: "Your Message Was Sent!",
      sentBody: "We'll get back to you as soon as possible.",
      newMessage: "New Message",
      errorTitle: "Message Could Not Be Sent",
      errorBody: "Something went wrong. Please try again or reach us via Instagram/WhatsApp.",
      tryAgain: "Try Again",
    },
    footer: {
      tagline: "Independent of political parties — a meeting point for patriots.",
      explore: "Explore",
      resources: "Resources",
      rights: "All rights reserved.",
    },
    notFound: {
      title: "Page Not Found",
      body: "The page you're looking for may have been moved, deleted, or never existed.",
      home: "Back to Home",
      back: "Go Back",
    },
    cookie: {
      text: "We use cookies to improve your experience.",
      policy: "Privacy policy",
      accept: "Accept",
    },
    search: {
      placeholder: "Search events, announcements, pages...",
      noResults: "No results found.",
      select: "Select",
      close: "Close",
    },
  },
};
