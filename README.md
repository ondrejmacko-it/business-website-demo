# IT Servis — moderní web pro lokální IT firmu

> Responzivní **demo / portfolio** web fiktivní lokální firmy „IT Servis“.
> Cílem je ukázat, že zvládnu navrhnout a vytvořit moderní, čistý a profesionální web pro malé a lokální podnikání.

Postaveno čistě na **HTML + CSS + JavaScriptu** — bez build kroku, bez frameworku, bez placených knihoven. Stačí otevřít `index.html` a hostovat kdekoliv (GitHub Pages, Vercel, Netlify).

---

## ✨ Náhled

Jednostránkový web (single-page) s plynulým scrollováním mezi sekcemi, tmavým moderním vzhledem a modro-zelenými akcenty.

> 💡 **Tip:** Po nasazení sem přidej skutečný screenshot, např. `![Náhled webu](screenshot.png)`.

---

## 🧩 Funkce

- **Plně responzivní design** — od mobilu po velký monitor (breakpointy 980 / 760 / 620 px).
- **Tmavé moderní téma** s azurovými a zelenými akcenty a jemnými světelnými přechody.
- **Sticky navigace** s efektem při scrollu a plnohodnotným **mobilním hamburger menu**.
- **Hero sekce** s výrazným nadpisem, CTA tlačítky, statistikami a dekorativním „terminálem“.
- **Scroll-reveal animace** (přes `IntersectionObserver`) s ohledem na `prefers-reduced-motion`.
- **Kontaktní formulář** s validací na straně klienta a demo potvrzením (data se reálně neodesílají).
- **Tlačítko „zpět nahoru“**, dynamický rok v patičce, přístupné focus stavy a ARIA atributy.
- **Bez závislostí** — žádné npm, žádný bundler, žádná externí JS knihovna (jen Google Font Inter).

---

## 📑 Obsah stránky

1. **Hero** — nadpis, popis a CTA tlačítko
2. **Služby**
   - Opravy PC a notebooků
   - Instalace Windows a softwaru
   - Čištění a zrychlení počítače
   - Záchrana dat
   - Nastavení Wi-Fi a sítí
   - IT podpora pro domácnosti a malé firmy
3. **Proč si vybrat nás**
4. **Orientační ceník**
5. **Jak spolupráce probíhá** (4 kroky)
6. **Reference / ukázkové recenze**
7. **Kontaktní formulář** (frontend demo)
8. **Patička** s kontakty

---

## 🛠️ Použité technologie

| Technologie | Použití |
|-------------|---------|
| **HTML5** | Sémantická struktura, přístupnost (ARIA) |
| **CSS3** | Custom properties (proměnné), Grid, Flexbox, `clamp()`, animace, media queries |
| **JavaScript (ES6)** | Mobilní menu, scroll efekty, `IntersectionObserver`, validace formuláře |
| **Google Fonts (Inter)** | Typografie (zdarma) |

Žádné placené knihovny, žádné build nástroje.

---

## 📁 Struktura projektu

```
IT servis - Web/
├── index.html      # Struktura a obsah stránky
├── styles.css      # Kompletní vzhled a responzivita
├── script.js       # Interaktivita (menu, animace, formulář)
├── README.md       # Tento soubor
└── LICENSE         # Licence MIT
```

---

## 🚀 Spuštění lokálně

Projekt nepotřebuje žádnou instalaci. Stačí jeden ze způsobů:

**A) Nejjednodušší**
Otevři soubor `index.html` přímo v prohlížeči (dvojklik).

**B) S lokálním serverem** (doporučeno — kvůli korektnímu chování cest)

```bash
# Python 3
python -m http.server 8000

# nebo Node.js
npx serve
```

Poté otevři `http://localhost:8000`.

> Ve VS Code můžeš použít i rozšíření **Live Server**.

---

## 🌐 Nasazení (deploy)

Protože jde o statický web, nasazení je triviální:

- **GitHub Pages** — v repozitáři `Settings → Pages → Branch: main → /root`. Web poběží na `https://<uživatel>.github.io/<repo>/`.
- **Vercel** — *Import Project* → vybrat repo → bez build commandu (Framework Preset: *Other*). Hotovo.
- **Netlify** — přetáhnout složku do *Netlify Drop*, nebo propojit repo (build command necháš prázdný, publish directory `/`).

---

## 🎨 Přizpůsobení

Barvy, rádiusy a rozměry jsou centralizované v CSS proměnných na začátku `styles.css`:

```css
:root {
  --primary:   #38bdf8;  /* azurová */
  --secondary: #34d399;  /* zelená  */
  --bg:        #0b1020;  /* pozadí  */
  /* … */
}
```

Změnou těchto proměnných změníš vzhled celého webu. Texty, služby a ceny se upravují přímo v `index.html`.

---

## 🔮 Plánovaná vylepšení

- [ ] Reálné odesílání formuláře (Formspree / Netlify Forms / vlastní e-mailové API)
- [ ] Přepínač světlého a tmavého režimu
- [ ] Vícejazyčná verze (CZ / EN)
- [ ] Sekce blog / rady a tipy
- [ ] Galerie „před a po“ (ukázky oprav)
- [ ] Lazy-loading obrázků a vlastní OG náhledový obrázek
- [ ] Online rezervační kalendář termínů
- [ ] Vylepšení SEO (strukturovaná data `LocalBusiness`, sitemap, robots.txt)

---

## 📝 Poznámka

Veškerý obsah (firma, kontakty, recenze, ceny) je **smyšlený** a slouží pouze jako ukázka pro portfolio.

## 📄 Licence

Vydáno pod licencí **MIT** — viz [LICENSE](LICENSE). Volně použitelné jako základ pro vlastní projekty.
