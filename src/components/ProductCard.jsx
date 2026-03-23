// ============================================================
//  ProductCard.jsx  —  Responsive + hover etkileşimli kart
//
//  Bu bileşen "md:" prefix'ini (breakpoint) yoğun şekilde
//  kullanarak mobil-önce (mobile-first) tasarım gösterir.
// ============================================================

export default function ProductCard() {
  return (
    /*
     * SAYFA SARICI
     * ─────────────────────────────────────────────────────────────
     * p-4           → Tüm ekranlarda 16px iç boşluk.
     * md:p-8        → Orta ekrandan (768px+) itibaren 32px iç boşluk.
     *
     * MOBİL-ÖNCE MANTIĞI:
     *   Tailwind'de sınıflar küçük ekrandan büyüğe doğru çalışır.
     *   Prefix'siz sınıf → her ekran.
     *   md:sınıf         → ≥768px ekranlar.
     *   lg:sınıf         → ≥1024px ekranlar.
     */
    <div className="p-4 md:p-8">

      {/*
       * KART KÖKü
       * ─────────────────────────────────────────────────────────
       * flex flex-col   → MOBİL: Dikey yığılmış (resim üstte, bilgi altta).
       * md:flex-row     → MASAÜSTÜ: Yatay yan yana (resim solda, bilgi sağda).
       *
       * max-w-2xl mx-auto → Maksimum genişlik 672px, yatayda ortalar.
       * bg-white          → Beyaz arka plan.
       * rounded-2xl       → Yuvarlak köşeler.
       * shadow-lg         → Gölge.
       * overflow-hidden   → Köşe dışı içeriği kırpar.
       * border border-slate-100 → İnce kenarlık.
       * group             → Hover efektleri için grup tanımı.
       */}
      <div className="
        flex flex-col md:flex-row
        max-w-2xl mx-auto
        bg-white rounded-3xl shadow-lg overflow-hidden border border-slate-100
        group
      ">

        {/*
         * ÜRÜN GÖRSELI ALANI
         * ─────────────────────────────────────────────────────────
         * relative         → Badge için referans nokta.
         * w-full           → MOBİL: Tam genişlik.
         * md:w-2/5         → MASAÜSTÜ: Toplam genişliğin 2/5'i.
         * h-56             → MOBİL: Yükseklik 14rem (224px).
         * md:h-auto        → MASAÜSTÜ: Yükseklik otomatik (flex ile dolsun).
         * overflow-hidden  → Zoom efektinin taşmasını önler.
         * bg-slate-50      → Resim yüklenemezse görünecek açık gri arka plan.
         */}
        <div className="relative w-full md:w-2/5 h-56 md:h-auto overflow-hidden bg-slate-50">

          {/*
           * transition-transform duration-500
           * group-hover:scale-110 → Karta hover'da resim %10 büyür (zoom efekti).
           */}
          <img
            src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=500&fit=crop"
            alt="Ürün görseli"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />

          {/*
           * İNDİRİM ROZET'İ
           * absolute top-3 left-3 → Sol üst köşe.
           * bg-rose-500            → Kırmızı arka plan.
           * text-white text-xs font-bold → Beyaz, küçük, kalın yazı.
           * px-2.5 py-1            → İç boşluklar.
           * rounded-lg             → Hafif yuvarlak köşe.
           */}
          <div className="absolute top-3 left-3 bg-rose-500 text-white text-xs font-bold px-2.5 py-1 rounded-lg">
            %20 İNDİRİM
          </div>
        </div>

        {/*
         * BİLGİ ALANI
         * ─────────────────────────────────────────────────────────
         * flex flex-col    → İçeriği dikey dizer.
         * flex-1           → Kalan tüm yatay alanı kaplar (md:flex-row içinde).
         * p-6              → Tüm yönlerden 24px iç boşluk.
         * md:p-8           → Büyük ekranda 32px iç boşluk.
         */}
        <div className="flex flex-col flex-1 p-6 md:p-8">

          {/* KATEGORİ ETİKETİ */}
          {/*
           * inline-flex items-center gap-1.5 → Yatay hizalı flex (içeriğe göre genişlik).
           * text-xs font-semibold             → Küçük, yarı kalın yazı.
           * text-indigo-600                   → İndigo rengi.
           * bg-indigo-50                      → Çok açık indigo arka plan.
           * px-3 py-1                         → İç boşluklar.
           * rounded-full                      → Hap şekli.
           * self-start                        → Flex içinde sol tarafa yaslan (tam genişlik almasın).
           */}
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent-600 bg-accent-50 px-3 py-1 rounded-full self-start">
            ⌚ Saat & Aksesuar
          </span>

          {/* ÜRÜN ADI */}
          {/*
           * text-2xl     → 1.5rem (24px).
           * md:text-3xl  → Büyük ekranda 1.875rem (30px).
           * font-bold text-slate-800 → Kalın, koyu gri.
           * mt-3         → Üstten 12px boşluk.
           * leading-tight → Satır aralığı sıkışık (1.25).
           */}
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mt-3 leading-tight">
            Klasik Minimalist Saat
          </h2>

          {/* YILDIZ DERECELENDİRME */}
          {/*
           * flex items-center gap-2 mt-2 → Yatay hizalı, 8px boşluklu, üstten 8px.
           * text-amber-400               → Sarı-amber rengi (yıldızlar için).
           * text-sm text-slate-500       → Küçük, gri yorum sayısı.
           */}
          <div className="flex items-center gap-2 mt-2">
            <div className="flex text-amber-400">
              {"★★★★☆"}
            </div>
            <span className="text-sm text-slate-500">(128 yorum)</span>
          </div>

          {/* AÇIKLAMA */}
          {/*
           * text-sm text-slate-500 mt-4 leading-relaxed → Küçük, gri, rahat okunur.
           */}
          <p className="text-sm text-slate-500 mt-4 leading-relaxed">
            İtalyan tasarımı minimalist kadran, safir cam ve paslanmaz çelik
            kasa. Günlük kullanım için 50m su direnci.
          </p>

          {/* ÖZELLİK ETİKETLERİ */}
          {/*
           * flex flex-wrap gap-2 mt-4 → Satır sonu yapabilen flex, 8px boşluk.
           */}
          <div className="flex flex-wrap gap-2 mt-4">
            {["Safir Cam", "50m Su Geçirmez", "2 Yıl Garanti"].map((tag) => (
              /*
               * text-xs text-slate-600 → Küçük, gri yazı.
               * bg-slate-100           → Açık gri arka plan.
               * px-2.5 py-1 rounded-md → İç boşluk ve hafif yuvarlak köşe.
               */
              <span key={tag} className="text-xs text-slate-600 bg-slate-100 px-2.5 py-1 rounded-md">
                {tag}
              </span>
            ))}
          </div>

          {/*
           * mt-auto → Kalan boşluğu iter, fiyat+düğme her zaman alta yapışır.
           * Bu sayede kartlar farklı yükseklikte olsa bile düğme hep altta olur.
           */}
          <div className="mt-auto pt-6">

            {/* FİYAT SATIRI */}
            {/*
             * flex items-center justify-between → İkisini iki uca yaslar.
             */}
            <div className="flex items-center justify-between">

              <div>
                {/*
                 * text-3xl font-bold text-slate-900 → Büyük, kalın, neredeyse siyah fiyat.
                 */}
                <span className="text-3xl font-bold text-slate-900">₺2.399</span>
                {/*
                 * text-sm text-slate-400 line-through ml-2 → Küçük, soluk, üstü çizili eski fiyat.
                 */}
                <span className="text-sm text-slate-400 line-through ml-2">₺2.999</span>
              </div>

              {/*
               * FAVORI DÜĞMESİ
               * p-2.5         → 10px iç boşluk (kare görünüm).
               * rounded-xl    → Yuvarlak köşe.
               * bg-slate-100 text-slate-500 → Varsayılan durum.
               * hover:bg-rose-50 hover:text-rose-500 → Hover'da pembe ton.
               * transition-colors duration-200 → Renk geçişi animasyonu.
               */}
              <button className="
                p-2.5 rounded-xl text-xl
                bg-slate-100 text-slate-500
                hover:bg-rose-50 hover:text-rose-500
                transition-colors duration-200
                focus:outline-none focus:ring-2 focus:ring-rose-400 focus:ring-offset-2
              ">
                ♡
              </button>
            </div>

            {/* SEPETE EKLE DÜĞMESİ */}
            {/*
             * w-full    → Tam genişlik.
             * mt-4      → Üstten 16px boşluk.
             * py-3      → Dikey iç boşluk 12px (tıklaması kolay büyük düğme).
             * bg-indigo-600 → İndigo arka plan.
             * text-white font-semibold → Beyaz, yarı kalın yazı.
             * rounded-xl → Yuvarlak köşe.
             * flex items-center justify-center gap-2 → İkon + yazı yan yana ortalı.
             * hover:bg-indigo-700 → Hover'da koyu indigo.
             * active:scale-[0.98] → Tıklamada çok hafif küçülme.
             * transition-all duration-200 → Tüm geçişlere animasyon.
             */}
            <button className="
              w-full mt-4 py-3
              bg-accent-600 text-white font-semibold rounded-xl
              flex items-center justify-center gap-2
              hover:bg-accent-700
              active:scale-[0.98]
              transition-all duration-200
              focus:outline-none focus:ring-2 focus:ring-accent-600 focus:ring-offset-2
            ">
              <span>🛒</span>
              <span>Sepete Ekle</span>
            </button>
          </div>
        </div>
      </div>

      {/* AÇIKLAMA NOTU */}
      <p className="text-center text-xs text-slate-400 mt-4">
        ↔ Tarayıcı penceresini küçültüp büyüterek responsive davranışı gözlemleyebilirsin.
      </p>
    </div>
  );
}
