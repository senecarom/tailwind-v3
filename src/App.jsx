import ProfileCard from "./components/ProfileCard";
import ProductCard from "./components/ProductCard";

/*
 * App.jsx  —  İki kartı yan yana gösteren ana sayfa
 *
 * min-h-screen      → Sayfa en az ekran yüksekliği kadar uzar.
 * bg-slate-50       → Açık gri arka plan (kartlar öne çıksın).
 * py-12             → Üstten ve alttan 48px iç boşluk.
 * px-4              → Yanlardan 16px (mobilde kenarlardan taşmasın).
 * font-sans         → Tailwind'in varsayılan sans-serif font ailesi.
 */
export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 font-sans">

      {/* BAŞLIK ALANI */}
      <div className="text-center mb-12">
        {/*
         * text-4xl md:text-5xl → Mobilde 36px, büyük ekranda 48px.
         * font-extrabold        → Çok kalın (font-weight: 800).
         * text-slate-800        → Koyu gri.
         * tracking-tight        → Harfler arası boşluk azaltılmış.
         */}
        <h1 className="text-4xl md:text-5xl font-extrabold font-display text-slate-800 tracking-tight">
          Tailwind CSS v3
        </h1>
        {/*
         * text-slate-500 mt-2 text-lg → Gri, üstten 8px, biraz büyük yazı.
         * max-w-md mx-auto            → Metin çok geniş olmasın, ortala.
         */}
        <p className="text-slate-500 mt-2 text-lg max-w-md mx-auto">
          Vite + React ile Utility-First CSS öğrenme projesi
        </p>
      </div>

      {/*
       * KART IZGARA DÜZENİ
       * ─────────────────────────────────────────────────────────────────
       * grid                  → CSS Grid kullan.
       * grid-cols-1           → MOBİL: Tek sütun.
       * lg:grid-cols-2        → BÜYÜK EKRAN (1024px+): İki sütun.
       * gap-8                 → Sütunlar/satırlar arası 32px boşluk.
       * max-w-6xl mx-auto     → Maksimum genişlik 72rem, ortala.
       * items-start           → Farklı yükseklikteki kartlar üstten hizalanır.
       */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto items-start">

        {/* SOL KART — Profil Kartı */}
        <section>
          {/*
           * text-xs font-bold text-slate-400 uppercase tracking-widest
           *   → Küçük, kalın, büyük harf, geniş harf aralıklı etiket.
           * mb-4 → Altına 16px boşluk.
           */}
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 text-center">
            Profil Kartı
          </p>
          <ProfileCard />
        </section>

        {/* SAĞ KART — Ürün Kartı */}
        <section>
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 text-center">
            Ürün Kartı (Responsive)
          </p>
          <ProductCard />
        </section>
      </div>

      {/* TAILWIND KAVRAMLARI HIZLI REFERANS */}
      <div className="max-w-6xl mx-auto mt-16">
        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6 text-center">
          Hızlı Başvuru Tablosu
        </p>

        {/*
         * grid grid-cols-2 md:grid-cols-4 gap-4
         *   → MOBİL: 2 sütun, MASAÜSTÜ: 4 sütun.
         */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { kategori: "Layout",     ornekler: ["flex", "grid", "block", "hidden", "relative", "absolute"] },
            { kategori: "Spacing",    ornekler: ["p-4", "px-6", "py-2", "m-auto", "mt-4", "gap-3"] },
            { kategori: "Typography", ornekler: ["text-xl", "font-bold", "leading-relaxed", "tracking-tight", "truncate", "uppercase"] },
            { kategori: "Görünüm",    ornekler: ["rounded-xl", "shadow-lg", "border", "opacity-50", "overflow-hidden", "ring-2"] },
          ].map((grup) => (
            <div key={grup.kategori} className="bg-white rounded-3xl p-4 border border-slate-100 shadow-sm">
              <p className="text-xs font-bold text-indigo-600 uppercase mb-3">
                {grup.kategori}
              </p>
              {/* space-y-1.5 → Liste öğeleri arası 6px dikey boşluk. */}
              <ul className="space-y-1.5">
                {grup.ornekler.map((ornek) => (
                  <li key={ornek}>
                    {/*
                     * font-mono → Tek aralıklı yazı tipi.
                     * bg-slate-50 text-slate-700 → Hafif kodlu görünüm.
                     * px-2 py-0.5 rounded inline-block → Pill efekti.
                     */}
                    <code className="font-mono text-xs bg-slate-50 text-slate-700 px-2 py-0.5 rounded inline-block">
                      {ornek}
                    </code>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* SAYFA ALTI */}
      <p className="text-center text-xs text-slate-400 mt-16">
        Tailwind CSS v3 · Vite · React · Öğrenme Projesi
      </p>
    </div>
  );
}



// Vite + React ortamında Tailwind CSS öğrenmemi sağlayacak küçük bir 'Profil Kartı' (Profile Card) veya 'Ürün Kartı' (Product Card) bileşeni oluşturmanı istiyorum. tailwind'in v3 versiyonunu kullan.

// Lütfen şu adımları izle:

// 1. Kurulum: Tailwind CSS'in Vite + React projesine nasıl ekleneceğini kısaca özetle.

// 2. Bileşen Yapısı: Tailwind sınıflarını (utility classes) kullanarak şık, modern bir kart tasarımı yap.

// 3. Öğretici Açıklamalar: Kullandığın sınıfları (örneğin; flex, p-4, shadow-lg, rounded-xl, hover:scale-105) ne işe yaradıklarıyla birlikte satır aralarında veya kodun altında açıkla.

// 4. Responsive Tasarım: Kartın mobilde ve masaüstünde nasıl farklı göründüğünü (örneğin; md:flex-row gibi) göster.

// 5. Etkileşim: Hover (üzerine gelme) ve Focus gibi durumlar için birkaç Tailwind sınıfı ekle.

// 6. Proje çok karmaşık olmasın, sadece temel Tailwind mantığını (Layout, Spacing, Typography, Colors) kavramamı sağlasın.


