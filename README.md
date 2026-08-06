# İMÜ Siyaset ve Bürokrasi Kulübü — Web Sitesi

İstanbul Medeniyet Üniversitesi Siyaset ve Bürokrasi Kulübü'nün tanıtım web sitesi. [Next.js](https://nextjs.org) App Router üzerine kurulmuştur.

## Teknoloji Yığını

- **Next.js 16** (App Router, Turbopack) — bkz. `node_modules/next/dist/docs/` bu sürüme özgü API farkları için
- **React 19** / **TypeScript**
- **Tailwind CSS v4**
- **Framer Motion** — sayfa/etkileşim animasyonları
- **lucide-react** — ikon seti

## Geliştirme

```bash
npm install
npm run dev
```

Tarayıcıda [http://localhost:3000](http://localhost:3000) adresini açın.

## Komutlar

| Komut | Açıklama |
|---|---|
| `npm run dev` | Geliştirme sunucusunu başlatır |
| `npm run build` | Prodüksiyon derlemesi oluşturur |
| `npm run start` | Derlenmiş uygulamayı çalıştırır |
| `npm run lint` | ESLint denetimi çalıştırır |

## Proje Yapısı

```
src/
  app/                 Route'lar (Next.js App Router) — /, /about, /events, /team, /blog, /contact
  components/
    layout/            Navbar, Footer
    sections/          Sayfa bölümleri (Hero, About, Statistics, Events, Team, Blog, Partners, Instagram, FAQ, Contact...)
    common/             Paylaşılan küçük bileşenler (SectionHeader, ikonlar, sayaç, vb.)
  hooks/               Paylaşılan React hook'ları
  lib/
    data.ts            Site içeriği (etkinlikler, ekip, istatistikler, SSS, vb.)
    animations.ts      Framer Motion varyantları
    utils.ts           Yardımcı fonksiyonlar
  types/               Paylaşılan TypeScript tipleri
```

## İçerik Politikası

`src/lib/data.ts` sitenin tüm içerik verisini barındırır. **Doğrulanmamış hiçbir bilgi** (gerçek kişi isimleri, kurum ortaklıkları, etkinlik detayları, istatistikler) bu dosyaya eklenmemelidir. Henüz doğrulanmamış/teyit edilmemiş alanlar boş bırakılmış ve ilgili bölümlerde kullanıcıya "Yakında açıklanacak", "Duyurulacak" veya "Güncelleniyor" gibi durum mesajları gösterilmektedir. Gerçek içerik (yönetim kurulu üyeleri, geçmiş/yaklaşan etkinlikler, kurumsal iş birlikleri, blog yazıları) elde edildiğinde `src/lib/data.ts` güncellenmeli ve ilgili bölüm bileşenleri (`src/components/sections/`) buna göre gözden geçirilmelidir.

## Dağıtım

Proje [Vercel](https://vercel.com) üzerinde barındırmaya uygundur. Dağıtım öncesi `src/app/layout.tsx` içindeki `metadataBase` ve `openGraph.url` alanlarının gerçek prodüksiyon domainiyle eşleştiğinden emin olun.
