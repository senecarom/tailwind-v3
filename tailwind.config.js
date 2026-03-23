/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {

      // 1. ÖZEL RENK PALETİ
      // Projedeki violet → "brand", indigo → "accent" olarak isimlendirildi.
      // Kullanım: bg-brand-600, text-accent-600, bg-accent-50 …
      // Nerede: ProfileCard.jsx (gradient, buton, unvan), ProductCard.jsx (kategori etiketi, buton)
      colors: {
        brand: {
          50:  "#f5f3ff",
          100: "#ede9fe",
          500: "#8b5cf6",
          600: "#7c3aed",
          700: "#6d28d9",
        },
        accent: {
          50:  "#eef2ff",
          600: "#4f46e5",
          700: "#4338ca",
        },
      },

      // 2. ÖZEL YAZI TİPİ AİLELERİ
      // "sans"  → Inter (ana metin)
      // "display" → Poppins (başlıklar için)
      // Kullanım: font-sans (zaten default), font-display
      // Nerede: App.jsx — <h1> başlığı (font-display)
      fontFamily: {
        sans:    ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Poppins", "ui-sans-serif", "sans-serif"],
      },

      // 3. ÖZEL KÖŞE YARIAÇAPLARI
      // Tailwind'in en büyüğü rounded-2xl (1rem); bunun üstüne eklendi.
      // Kullanım: rounded-3xl, rounded-4xl
      // Nerede: ProductCard.jsx (kart köşesi), App.jsx (tablo kartları)
      borderRadius: {
        "3xl": "1.5rem",
        "4xl": "2rem",
      },

    },
  },
  plugins: [],
}

