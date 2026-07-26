import type {
  Event,
  TeamMember,
  BlogPost,
  Statistic,
  Partner,
  FAQ,
  TimelineItem,
  WhyJoinItem,
  NavItem,
  InstagramPost,
} from "@/types";

export const navItems: NavItem[] = [
  { label: "Ana Sayfa", href: "/" },
  { label: "Hakkımızda", href: "/about" },
  { label: "Etkinlikler", href: "/events" },
  { label: "Yönetim Kurulu", href: "/team" },
  { label: "Blog", href: "/blog" },
  { label: "İletişim", href: "/contact" },
];

export const statistics: Statistic[] = [
  { id: "1", value: 5, suffix: "+", label: "Yıllık Deneyim", icon: "Calendar" },
  { id: "2", value: 120, suffix: "+", label: "Düzenlenen Etkinlik", icon: "Star" },
  { id: "3", value: 200, suffix: "+", label: "Konuşmacı", icon: "Mic" },
  { id: "4", value: 850, suffix: "+", label: "Kulüp Üyesi", icon: "Users" },
  { id: "5", value: 30, suffix: "+", label: "Tamamlanan Proje", icon: "Trophy" },
];

export const upcomingEvents: Event[] = [
  {
    id: "ue1",
    title: "Türk Dış Politikasında Yeni Dinamikler",
    date: "15 Ağustos 2025",
    time: "14:00",
    location: "Kültürel Merkez, İMÜ Kadıköy Kampüsü",
    category: "Panel",
    description:
      "Türkiye'nin değişen dış politika parametrelerini akademisyenler ve diplomatlarla masaya yatırıyoruz. Bölgesel denklemler, ittifak yönetimi ve stratejik özerklik tartışılacak.",
    image: "/events/panel1.jpg",
    registrationUrl: "#",
    speakers: ["Prof. Dr. Ahmet Davutoğlu", "Büyükelçi Namık Tan"],
    attendees: 150,
  },
  {
    id: "ue2",
    title: "Diplomatlık Mesleki Gelişim Atölyesi",
    date: "22 Ağustos 2025",
    time: "10:00",
    location: "B101 Konferans Salonu, İMÜ",
    category: "Workshop",
    description:
      "Diplomatik müzakere teknikleri, protokol kuralları ve uluslararası arenadaki iletişim stratejileri üzerine interaktif atölye çalışması.",
    image: "/events/workshop1.jpg",
    registrationUrl: "#",
    speakers: ["Büyükelçi Hüseyin Müftüoğlu"],
    attendees: 40,
  },
  {
    id: "ue3",
    title: "Yapay Zeka ve Siyasi Karar Alma",
    date: "5 Eylül 2025",
    time: "15:00",
    location: "İMÜ Konferans Salonu",
    category: "Konferans",
    description:
      "Yapay zekanın kamu yönetimi ve siyasi süreçlere etkisi üzerine uzmanlar arası büyük konferans. Türkiye ve global örnekler ele alınacak.",
    image: "/events/conf1.jpg",
    registrationUrl: "#",
    speakers: ["Prof. Dr. Erdem Başçı", "Dr. Leyla Yıldız"],
    attendees: 300,
  },
  {
    id: "ue4",
    title: "Gençlik ve Siyaset Söyleşisi",
    date: "20 Eylül 2025",
    time: "16:00",
    location: "İMÜ Öğrenci Merkezi",
    category: "Söyleşi",
    description:
      "Siyasete gençlerin bakışı, genç liderlik ve Türkiye'nin demokratik geleceği üzerine samimi bir söyleşi.",
    image: "/events/soylesi1.jpg",
    registrationUrl: "#",
    speakers: ["Milletvekili Deniz Yücel"],
    attendees: 100,
  },
];

export const pastEvents: Event[] = [
  {
    id: "pe1",
    title: "Büyükelçilerle Buluşma 2024",
    date: "10 Kasım 2024",
    time: "14:00",
    location: "İMÜ Rektörlük Salonu",
    category: "Panel",
    description: "Aktif büyükelçilerle diplomatik kariyere dair samimi bir buluşma.",
    image: "/events/past1.jpg",
    isPast: true,
    attendees: 200,
  },
  {
    id: "pe2",
    title: "Model BM Türkiye Zirvesi 2024",
    date: "3 Ekim 2024",
    time: "09:00",
    location: "İstanbul Üniversitesi",
    category: "Konferans",
    description: "İMÜ delegasyonunun altın ödül kazandığı Model BM simülasyonu.",
    image: "/events/past2.jpg",
    isPast: true,
    attendees: 400,
  },
  {
    id: "pe3",
    title: "Kamu Diplomasisi Sempozyumu",
    date: "15 Mayıs 2024",
    time: "10:00",
    location: "İMÜ Konferans Salonu",
    category: "Seminer",
    description: "Türk kamu diplomasisinin araçları ve uygulama örnekleri.",
    image: "/events/past3.jpg",
    isPast: true,
    attendees: 180,
  },
  {
    id: "pe4",
    title: "Siyasi Liderlik Çalıştayı",
    date: "1 Mart 2024",
    time: "13:00",
    location: "İMÜ Kadıköy Kampüsü",
    category: "Workshop",
    description: "Siyasi liderlik becerileri, kamuoyu iletişimi ve kriz yönetimi.",
    image: "/events/past4.jpg",
    isPast: true,
    attendees: 60,
  },
  {
    id: "pe5",
    title: "Uluslararası İlişkiler Paneli",
    date: "10 Ocak 2024",
    time: "15:00",
    location: "İMÜ Konferans Salonu",
    category: "Panel",
    description: "2024 küresel siyasi dengeler ve Türkiye'nin rolü tartışması.",
    image: "/events/past5.jpg",
    isPast: true,
    attendees: 220,
  },
  {
    id: "pe6",
    title: "Diplomatik Protokol Atölyesi",
    date: "5 Aralık 2023",
    time: "10:00",
    location: "İMÜ B Blok",
    category: "Workshop",
    description: "Uluslararası protocole ait kurallar ve pratik uygulamalar.",
    image: "/events/past6.jpg",
    isPast: true,
    attendees: 45,
  },
];

export const teamMembers: TeamMember[] = [
  {
    id: "tm1",
    name: "Yusuf Kaya",
    role: "Kulüp Başkanı",
    department: "Siyaset Bilimi ve Kamu Yönetimi",
    year: "4. Sınıf",
    image: "/team/member1.jpg",
    bio: "Uluslararası ilişkiler ve Türk dış politikası üzerine araştırmalar yürüten Yusuf, İMÜ'yü Model BM simülasyonlarında temsil etmiştir.",
    linkedin: "https://linkedin.com",
    instagram: "https://instagram.com",
    email: "yusuf@imu.edu.tr",
  },
  {
    id: "tm2",
    name: "Selin Arslan",
    role: "Başkan Yardımcısı",
    department: "Uluslararası İlişkiler",
    year: "3. Sınıf",
    image: "/team/member2.jpg",
    bio: "Kamu diplomasisi ve soft power üzerine uzmanlaşan Selin, kulübün etkinlik koordinasyonunu yönetmektedir.",
    linkedin: "https://linkedin.com",
    instagram: "https://instagram.com",
    email: "selin@imu.edu.tr",
  },
  {
    id: "tm3",
    name: "Mert Öztürk",
    role: "Genel Sekreter",
    department: "Hukuk",
    year: "3. Sınıf",
    image: "/team/member3.jpg",
    bio: "Anayasa hukuku ve siyasi kurumlar üzerine çalışan Mert, kulübün idari işlerini koordine etmektedir.",
    linkedin: "https://linkedin.com",
    instagram: "https://instagram.com",
    email: "mert@imu.edu.tr",
  },
  {
    id: "tm4",
    name: "Zeynep Demir",
    role: "Etkinlik Koordinatörü",
    department: "Sosyoloji",
    year: "2. Sınıf",
    image: "/team/member4.jpg",
    bio: "Zeynep, kulübün tüm etkinliklerini ve konuşmacı davetlerini organize eden dinamik koordinatördür.",
    linkedin: "https://linkedin.com",
    instagram: "https://instagram.com",
    email: "zeynep@imu.edu.tr",
  },
  {
    id: "tm5",
    name: "Emre Çelik",
    role: "İletişim ve Medya Sorumlusu",
    department: "Gazetecilik",
    year: "3. Sınıf",
    image: "/team/member5.jpg",
    bio: "Dijital iletişim ve medya yönetimi alanında uzmanlaşan Emre, kulübün sosyal medya stratejisini yönetmektedir.",
    linkedin: "https://linkedin.com",
    instagram: "https://instagram.com",
    email: "emre@imu.edu.tr",
  },
  {
    id: "tm6",
    name: "Ayşe Yıldız",
    role: "Akademik Koordinatör",
    department: "Siyaset Bilimi",
    year: "4. Sınıf",
    image: "/team/member6.jpg",
    bio: "Blog ve akademik yayınlar birimimizi yöneten Ayşe, siyasi analiz ve araştırma çalışmalarını koordine etmektedir.",
    linkedin: "https://linkedin.com",
    instagram: "https://instagram.com",
    email: "ayse@imu.edu.tr",
  },
  {
    id: "tm7",
    name: "Burak Şahin",
    role: "Proje Koordinatörü",
    department: "Kamu Yönetimi",
    year: "2. Sınıf",
    image: "/team/member7.jpg",
    bio: "Kulübün uzun vadeli projelerini ve kurumsal ilişkilerini yöneten Burak, liderlik programlarına odaklanmaktadır.",
    linkedin: "https://linkedin.com",
    instagram: "https://instagram.com",
    email: "burak@imu.edu.tr",
  },
  {
    id: "tm8",
    name: "Nil Karaca",
    role: "Uluslararası İlişkiler Sorumlusu",
    department: "Uluslararası İlişkiler",
    year: "3. Sınıf",
    image: "/team/member8.jpg",
    bio: "Diğer üniversite kulüpleri ve uluslararası öğrenci organizasyonlarıyla ilişkileri koordine eden Nil, ağ oluşturma konusunda uzmanlaşmıştır.",
    linkedin: "https://linkedin.com",
    instagram: "https://instagram.com",
    email: "nil@imu.edu.tr",
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: "bp1",
    title: "Türkiye'nin Arabuluculuk Rolü: Fırsatlar ve Sınırlılıklar",
    excerpt:
      "Rusya-Ukrayna savaşından Filistin krizine uzanan çizgide Türkiye'nin diplomatik arabuluculuk kapasitesini analiz ediyoruz.",
    author: "Ayşe Yıldız",
    authorImage: "/team/member6.jpg",
    date: "20 Temmuz 2025",
    readTime: "8 dk",
    category: "Diplomasi",
    image: "/blog/blog1.jpg",
    slug: "turkiye-arabuluculuk-rolu",
    tags: ["Türk Dış Politikası", "Arabuluculuk", "Diplomasi"],
  },
  {
    id: "bp2",
    title: "Yapay Zeka Çağında Bürokratik Dönüşüm",
    excerpt:
      "Dijital devlet, algoritmik karar alma ve kamu yönetiminde yapay zeka entegrasyonunun hukuki ve etik boyutları.",
    author: "Mert Öztürk",
    authorImage: "/team/member3.jpg",
    date: "14 Temmuz 2025",
    readTime: "11 dk",
    category: "Kamu Yönetimi",
    image: "/blog/blog2.jpg",
    slug: "yapay-zeka-buyokratik-donusum",
    tags: ["Yapay Zeka", "Kamu Yönetimi", "Dijital Devlet"],
  },
  {
    id: "bp3",
    title: "Yeni Soğuk Savaş mı? ABD-Çin Rekabetinin Anatomisi",
    excerpt:
      "İkili ticaret savaşından teknoloji hegemonyasına, deniz haklarından ittifak politikalarına uzanan ABD-Çin eksenini mercek altına alıyoruz.",
    author: "Selin Arslan",
    authorImage: "/team/member2.jpg",
    date: "8 Temmuz 2025",
    readTime: "13 dk",
    category: "Uluslararası İlişkiler",
    image: "/blog/blog3.jpg",
    slug: "abd-cin-rekabeti",
    tags: ["ABD", "Çin", "Jeopolitik", "Uluslararası İlişkiler"],
  },
  {
    id: "bp4",
    title: "Seçim Sistemlerinin Siyasi Temsile Etkisi",
    excerpt:
      "Çoğunlukçu, orantılı ve karma seçim sistemlerinin demokratik temsil kalitesine etkileri karşılaştırmalı perspektiften inceleniyor.",
    author: "Yusuf Kaya",
    authorImage: "/team/member1.jpg",
    date: "1 Temmuz 2025",
    readTime: "9 dk",
    category: "Siyaset",
    image: "/blog/blog4.jpg",
    slug: "secim-sistemleri-siyasi-temsil",
    tags: ["Seçim Sistemleri", "Demokrasi", "Siyaset"],
  },
  {
    id: "bp5",
    title: "Soft Power ve Kültürel Diplomasinin Ötesi",
    excerpt:
      "Joseph Nye'ın soft power kavramından Türkiye'nin TİKA, YTB ve TRT World gibi araçlarına uzanan kültürel diplomasi analizi.",
    author: "Nil Karaca",
    authorImage: "/team/member8.jpg",
    date: "22 Haziran 2025",
    readTime: "10 dk",
    category: "Diplomasi",
    image: "/blog/blog5.jpg",
    slug: "soft-power-kulturel-diplomasi",
    tags: ["Soft Power", "Kültürel Diplomasi", "Türkiye"],
  },
  {
    id: "bp6",
    title: "Genç Diplomatlara Tavsiyeler: Kariyer Yol Haritası",
    excerpt:
      "Dışişleri Bakanlığı'ndan TBMM'ye, uluslararası kuruluşlardan düşünce kuruluşlarına uzanan diplomatik kariyer seçenekleri ve giriş yolları.",
    author: "Burak Şahin",
    authorImage: "/team/member7.jpg",
    date: "15 Haziran 2025",
    readTime: "7 dk",
    category: "Analiz",
    image: "/blog/blog6.jpg",
    slug: "genc-diplomatlara-tavsiyeler",
    tags: ["Kariyer", "Diplomasi", "Tavsiye"],
  },
];

export const faqs: FAQ[] = [
  {
    id: "faq1",
    question: "Kulübe kimler katılabilir?",
    answer:
      "İstanbul Medeniyet Üniversitesi'nin tüm fakülte ve bölümlerinden öğrenciler kulübümüze katılabilir. Siyaset, diplomasi ve kamu yönetimine ilgi duyan herkese kapılarımız açıktır. Bölüm veya sınıf farkı gözetmeksizin tüm İMÜ öğrencilerini aramıza bekliyoruz.",
  },
  {
    id: "faq2",
    question: "Kulüp üyeliği ücretli midir?",
    answer:
      "Hayır, kulüp üyeliği tamamen ücretsizdir. Tüm etkinliklerimize ve çalışma gruplarımıza ücretsiz katılabilirsiniz. Bazı özel workshop ve geziler için nominal katkı payı istenebilir, ancak bu durum önceden duyurulur.",
  },
  {
    id: "faq3",
    question: "Kulübe nasıl katılabilirim?",
    answer:
      "Kulübümüze katılmak için dönem başlarında gerçekleştirilen üye kayıt fuarına katılabilir, web sitemizden online üyelik formunu doldurabilir veya sosyal medya hesaplarımız üzerinden bize ulaşabilirsiniz. Her dönem yeni üye alımı yapıyoruz.",
  },
  {
    id: "faq4",
    question: "Etkinliklere sadece üyeler mi katılabilir?",
    answer:
      "Etkinliklerimizin büyük çoğunluğu tüm İMÜ öğrencilerine açıktır. Bazı özel workshop ve çalışma gruplarına öncelikle aktif üyeler davet edilir. Duyurularda her etkinlik için katılım koşulları belirtilmektedir.",
  },
  {
    id: "faq5",
    question: "Kulüpte hangi pozisyonlar mevcuttur?",
    answer:
      "Kulübümüzde Başkan, Başkan Yardımcısı, Genel Sekreter, Etkinlik Koordinatörü, İletişim ve Medya Sorumlusu, Akademik Koordinatör, Proje Koordinatörü ve Uluslararası İlişkiler Sorumlusu gibi pozisyonlar bulunmaktadır. Bu pozisyonlar için seçimler her akademik yıl başında yapılır.",
  },
  {
    id: "faq6",
    question: "Kulüp hangi sıklıkta toplantı yapar?",
    answer:
      "Yönetim kurulu her iki haftada bir toplantı yapar. Genel kurul toplantıları dönemde iki kez gerçekleştirilir. Bunların yanı sıra her ay en az bir büyük etkinlik, aylık çalışma grupları ve haftalık okuma seminerleri düzenlenmektedir.",
  },
  {
    id: "faq7",
    question: "Kulüp hangi tür sertifikalar sunmaktadır?",
    answer:
      "Etkinliklerimize katılım karşılığında katılım sertifikası, workshop ve atölye çalışmalarına devam eden üyelere tamamlama sertifikası, Model BM simülasyonlarında başarılı olan delegelere özel başarı sertifikası verilmektedir. Bunlara ek olarak akademik yıl sonunda aktif üyelik sertifikası düzenlenmektedir.",
  },
  {
    id: "faq8",
    question: "Sosyal medyadan nasıl takip edebilirim?",
    answer:
      "Tüm etkinlik duyuruları, akademik içerikler ve kulüp haberlerimiz için Instagram hesabımız @siyasetveburokrasi_imu'yu takip edebilirsiniz. Ayrıca LinkedIn sayfamız üzerinden üye ağımıza dahil olabilirsiniz.",
  },
];

export const timeline: TimelineItem[] = [
  {
    year: "2020",
    title: "Kuruluş",
    description:
      "İstanbul Medeniyet Üniversitesi'nde 12 kurucu üye ile Siyaset ve Bürokrasi Kulübü kuruldu.",
    highlight: false,
  },
  {
    year: "2021",
    title: "İlk Büyük Etkinlik",
    description:
      "Türk diplomatlarıyla ilk büyük panel etkinliği gerçekleştirildi. 200'den fazla katılımcı ile rekor kırıldı.",
    highlight: false,
  },
  {
    year: "2022",
    title: "Model BM'ye Katılım",
    description:
      "İlk kez İstanbul Model Birleşmiş Milletler simülasyonuna katılım sağlandı ve 'En İyi Delegasyon' ödülü kazanıldı.",
    highlight: true,
  },
  {
    year: "2023",
    title: "Büyük Büyüme",
    description:
      "Üye sayısı 500'ü aştı, üniversitelerarası işbirlikleri kuruldu ve ilk uluslararası konuşmacılar davet edildi.",
    highlight: false,
  },
  {
    year: "2024",
    title: "Altın Dönem",
    description:
      "Türkiye'nin en aktif üniversite siyaset kulüplerinden biri olarak tanındı. 850+ üye, 120+ etkinlik.",
    highlight: true,
  },
  {
    year: "2025",
    title: "Yeni Vizyon",
    description:
      "Uluslararası ağların genişletilmesi, dijital platform lansmanı ve Türkiye'nin sesi olma hedefiyle yeni döneme adım atıldı.",
    highlight: false,
  },
];

export const whyJoinItems: WhyJoinItem[] = [
  {
    id: "wj1",
    icon: "Network",
    title: "Güçlü Ağ",
    description:
      "Diplomatlar, milletvekilleri, akademisyenler ve kamu yöneticileriyle doğrudan bağlantı kurma fırsatı.",
  },
  {
    id: "wj2",
    icon: "Briefcase",
    title: "Kariyer Avantajı",
    description:
      "Staj ve iş fırsatları, kariyer danışmanlığı ve mentörlük programlarıyla profesyonel gelişim.",
  },
  {
    id: "wj3",
    icon: "Globe",
    title: "Diplomatik Deneyim",
    description:
      "Model BM simülasyonları ve uluslararası konferanslarla gerçek diplomatik deneyim kazanma.",
  },
  {
    id: "wj4",
    icon: "Crown",
    title: "Liderlik Gelişimi",
    description:
      "Yönetim pozisyonları, proje koordinasyonu ve liderlik programlarıyla kendinizi geliştirin.",
  },
  {
    id: "wj5",
    icon: "BookOpen",
    title: "Akademik Derinlik",
    description:
      "Uzman konuşmacılar, okuma grupları ve araştırma projeleriyle entelektüel gelişim sağlayın.",
  },
  {
    id: "wj6",
    icon: "Award",
    title: "Sertifikalar",
    description:
      "Katılım, başarı ve aktif üyelik sertifikaları ile akademik ve profesyonel özgeçmişinizi güçlendirin.",
  },
];

export const partners: Partner[] = [
  { id: "p1", name: "Dışişleri Bakanlığı", logo: "/partners/partner1.svg" },
  { id: "p2", name: "TİKA", logo: "/partners/partner2.svg" },
  { id: "p3", name: "İstanbul Büyükşehir Belediyesi", logo: "/partners/partner3.svg" },
  { id: "p4", name: "SETA", logo: "/partners/partner4.svg" },
  { id: "p5", name: "TRT World", logo: "/partners/partner5.svg" },
  { id: "p6", name: "ORSAM", logo: "/partners/partner6.svg" },
  { id: "p7", name: "TEPAV", logo: "/partners/partner7.svg" },
  { id: "p8", name: "Boğaziçi Üniversitesi", logo: "/partners/partner8.svg" },
];

export const instagramPosts: InstagramPost[] = [
  {
    id: "ig1",
    image: "/instagram/ig1.jpg",
    likes: 342,
    comments: 28,
    caption: "Türk diplomatlarıyla unutulmaz bir panel etkinliği! #SiyasetVeBürokrasi #İMÜ",
    url: "https://www.instagram.com/siyasetveburokrasi_imu/",
  },
  {
    id: "ig2",
    image: "/instagram/ig2.jpg",
    likes: 289,
    comments: 19,
    caption: "Model BM simülasyonumuzda delegelerimiz büyük başarı kazandı! 🏆",
    url: "https://www.instagram.com/siyasetveburokrasi_imu/",
  },
  {
    id: "ig3",
    image: "/instagram/ig3.jpg",
    likes: 415,
    comments: 35,
    caption: "Yeni dönem, yeni ufuklar. Kulübümüze katılmaya hazır mısınız? ✨",
    url: "https://www.instagram.com/siyasetveburokrasi_imu/",
  },
  {
    id: "ig4",
    image: "/instagram/ig4.jpg",
    likes: 198,
    comments: 14,
    caption: "Workshop serimizin ikinci etkinliği büyük ilgi gördü.",
    url: "https://www.instagram.com/siyasetveburokrasi_imu/",
  },
  {
    id: "ig5",
    image: "/instagram/ig5.jpg",
    likes: 527,
    comments: 47,
    caption: "Genel kurulumuzda yeni yönetim kurulumuz göreve başladı! 🎉",
    url: "https://www.instagram.com/siyasetveburokrasi_imu/",
  },
  {
    id: "ig6",
    image: "/instagram/ig6.jpg",
    likes: 376,
    comments: 31,
    caption: "Siyaset bilimi üzerine okuma grubumuz her hafta devam ediyor. 📚",
    url: "https://www.instagram.com/siyasetveburokrasi_imu/",
  },
];
