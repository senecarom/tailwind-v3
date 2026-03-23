// ============================================================
//  ProfileCard.jsx  —  Tailwind CSS v3 öğretici bileşen
// ============================================================

export default function ProfileCard() {
  return (
    /*
     * KART SARICI (wrapper)
     * ─────────────────────
     * group          → İçindeki öğelerin "group-hover:" prefix'ini kullanmasını sağlar.
     * w-full         → Genişliği %100 yapar.
     * max-w-sm       → Maksimum genişliği ~384px ile sınırlar (mobil dostu).
     * mx-auto        → Yatayda ortalamak için sol+sağ margin: auto.
     * cursor-pointer → Fare imleci el şekline dönüşür.
     */
    <div className="group w-full max-w-sm mx-auto cursor-pointer">

      {/*
       * KART GÖVDESİ
       * ─────────────
       * bg-white            → Arka plan beyaz.
       * rounded-2xl         → Köşe yarıçapı 1rem (16px) — çok yuvarlak köşeler.
       * shadow-lg           → Belirgin gölge efekti (box-shadow).
       * overflow-hidden     → İçerik köşe dışına taşmasın diye kırpar.
       * border border-slate-100 → İnce açık gri kenarlık.
       * transition-all      → Tüm CSS geçişlerine animasyon ekler.
       * duration-300        → Geçiş süresi 300ms.
       * hover:shadow-2xl    → Üzerine gelinince gölge daha büyür.
       * hover:-translate-y-2 → Üzerine gelinince kart 8px yukarı kalkar.
       */}
      <div className="
        bg-white rounded-2xl shadow-lg overflow-hidden border border-slate-100
        transition-all duration-300
        hover:shadow-2xl hover:-translate-y-2
      ">

        {/*
         * KAPAK FOTOĞRAFI ALANI
         * ──────────────────────
         * relative      → İçindeki absolute konumlu öğelerin referans noktası.
         * h-32          → Yükseklik 8rem (128px).
         * bg-gradient-to-br from-violet-500 to-indigo-600
         *               → Sağ-alta doğru mor→indigo degrade arka plan.
         */}
        <div className="relative h-32 bg-gradient-to-br from-brand-500 to-accent-600">

          {/*
           * ROZET (badge)
           * ─────────────
           * absolute top-3 right-3 → Sağ üst köşeye konumlandır.
           * bg-white/20            → %20 opaklıklı beyaz arka plan (cam efekti).
           * backdrop-blur-sm       → Arkayı hafifçe bulanıklaştırır.
           * text-white text-xs     → Beyaz, küçük yazı.
           * px-2 py-0.5            → Yatay 8px / dikey 2px iç boşluk.
           * rounded-full           → Tam yuvarlak (hap şekli).
           * font-medium            → Orta kalınlıkta yazı.
           */}
          <span className="
            absolute top-3 right-3
            bg-white/20 backdrop-blur-sm
            text-white text-xs px-2 py-0.5 rounded-full font-medium
          ">
            ✦ Pro
          </span>
        </div>

        {/*
         * AVATAR
         * ───────
         * absolute      → Kapak alanına göre konumlandır.
         * -bottom-12    → Kapak bandının 48px dışına taşır (yarısı içeride, yarısı dışarıda).
         * left-1/2 -translate-x-1/2 → Yatayda tam ortala.
         */}
        <div className="relative flex justify-center">
          <div className="absolute -top-12">

            {/*
             * AVATAR ÇERÇEVESİ
             * ─────────────────
             * w-24 h-24      → 6rem × 6rem (96px × 96px).
             * rounded-full   → Daire şekli.
             * border-4 border-white → 4px beyaz kenarlık (arka plandan ayırmak için).
             * shadow-md      → Orta büyüklükte gölge.
             * overflow-hidden → Resmin daire dışına taşmasını önler.
             * transition-transform duration-300
             * group-hover:scale-110 → Karta hover'da avatar %10 büyür.
             */}
            <div className="
              w-24 h-24 rounded-full border-4 border-white shadow-md overflow-hidden
              transition-transform duration-300 group-hover:scale-110
            ">
              <img
                src="https://api.dicebear.com/7.x/avataaars/svg?seed=tailwind"
                alt="Profil fotoğrafı"
                className="w-full h-full object-cover"
                /*
                 * w-full h-full → Resim kapsayıcıyı tamamen doldurur.
                 * object-cover  → En-boy oranını koruyarak kırpar.
                 */
              />
            </div>
          </div>
        </div>

        {/*
         * KART İÇERİĞİ
         * ─────────────
         * pt-16   → Avatar'ın taşan kısmı için üstten boşluk (padding-top: 4rem).
         * pb-6    → Alttan iç boşluk.
         * px-6    → Yanlardan iç boşluk.
         * text-center → Tüm metni ortalar.
         */}
        <div className="pt-16 pb-6 px-6 text-center">

          {/*
           * İSİM
           * text-xl     → Yazı boyutu 1.25rem (20px).
           * font-bold   → Kalın yazı (font-weight: 700).
           * text-slate-800 → Koyu gri-mavi renk.
           * mt-1        → Üstten 4px boşluk.
           */}
          <h2 className="text-xl font-bold text-slate-800 mt-1">
            Ayşe Kaya
          </h2>

          {/*
           * UNVAN
           * text-sm      → Küçük yazı (14px).
           * text-violet-600 → Menekşe rengi.
           * font-medium  → Orta kalınlık.
           * mt-0.5       → Üstten 2px boşluk.
           */}
          <p className="text-sm text-brand-600 font-medium mt-0.5">
            Senior Front-end Developer
          </p>

          {/*
           * KONUM
           * flex items-center justify-center → Yatay hizalanmış flexbox.
           * gap-1   → Öğeler arası 4px boşluk.
           * text-xs → Çok küçük yazı (12px).
           * text-slate-400 → Açık gri renk.
           * mt-1    → Üstten 4px boşluk.
           */}
          <div className="flex items-center justify-center gap-1 text-xs text-slate-400 mt-1">
            <span>📍</span>
            <span>İstanbul, Türkiye</span>
          </div>

          {/*
           * BIO (kısa açıklama)
           * text-sm        → Küçük yazı.
           * text-slate-500 → Orta gri.
           * mt-4           → Üstten 16px boşluk.
           * leading-relaxed → Satır yüksekliği 1.625 (rahat okunur).
           */}
          <p className="text-sm text-slate-500 mt-4 leading-relaxed">
            React, TypeScript ve Tailwind CSS tutkunu.
            Kullanıcı deneyimini her şeyin önünde tutar.
          </p>

          {/*
           * İSTATİSTİKLER SATIRI
           * ─────────────────────
           * flex           → Yan yana dizer.
           * divide-x       → Öğeler arasına dikey çizgi çeker (border-left).
           * divide-slate-100 → Çizgi rengi açık gri.
           * mt-6           → Üstten 24px boşluk.
           * border-t border-slate-100 → Üst kenarlık.
           * pt-4           → Kenarlıktan sonra üst iç boşluk.
           */}
          <div className="flex divide-x divide-slate-100 mt-6 border-t border-slate-100 pt-4">

            {/* Tek bir istatistik bloğu */}
            {[
              { label: "Proje", value: "48" },
              { label: "Takipçi", value: "2.4K" },
              { label: "Yıl Deneyim", value: "6" },
            ].map((stat) => (
              /*
               * flex-1 → Her blok eşit genişlik alır.
               */
              <div key={stat.label} className="flex-1">
                {/*
                 * text-lg font-bold text-slate-800 → Büyük, kalın, koyu rakam.
                 */}
                <p className="text-lg font-bold text-slate-800">{stat.value}</p>
                {/*
                 * text-xs text-slate-400 → Küçük, soluk etiket.
                 */}
                <p className="text-xs text-slate-400">{stat.label}</p>
              </div>
            ))}
          </div>

          {/*
           * AKSİYON DÜĞMELERİ
           * ───────────────────
           * flex gap-3 mt-6 → Yatay flex, 12px boşluklu, üstten 24px.
           */}
          <div className="flex gap-3 mt-6">

            {/*
             * ANA DÜĞME (Takip Et)
             * flex-1         → Mevcut alanı doldurur.
             * bg-violet-600  → Menekşe arka plan.
             * text-white     → Beyaz yazı.
             * text-sm        → Küçük yazı.
             * font-semibold  → Yarı kalın.
             * py-2.5         → Dikey iç boşluk 10px.
             * rounded-xl     → Belirgin yuvarlak köşe (12px).
             * transition-colors duration-200 → Renk geçişi animasyonu.
             * hover:bg-violet-700 → Hover'da daha koyu menekşe.
             * focus:outline-none → Varsayılan tarayıcı focus çerçevesini kaldır.
             * focus:ring-2 focus:ring-violet-500 focus:ring-offset-2
             *               → Klavye focus'u için erişilebilir halka efekti.
             * active:scale-95 → Tıklamada hafif küçülme (basma hissi).
             */}
            <button className="
              flex-1 bg-brand-600 text-white text-sm font-semibold py-2.5 rounded-xl
              transition-colors duration-200
              hover:bg-brand-700
              focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2
              active:scale-95
            ">
              Takip Et
            </button>

            {/*
             * İKİNCİL DÜĞME (Mesaj)
             * bg-slate-100   → Açık gri arka plan.
             * text-slate-700 → Koyu gri yazı.
             * hover:bg-slate-200 → Hover'da biraz daha koyu.
             */}
            <button className="
              flex-1 bg-slate-100 text-slate-700 text-sm font-semibold py-2.5 rounded-xl
              transition-colors duration-200
              hover:bg-slate-200
              focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2
              active:scale-95
            ">
              Mesaj
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
