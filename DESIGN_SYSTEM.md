# Andreas Krieger — Design System Architecture

Dieses Dokument beschreibt das finale, implementierte Design-System für die persönliche Web-Präsenz ([andreaskrieger.github.io](https://andreaskrieger.github.io)).

---

## 1. Farb- & Atmosphären-Architektur (Obsidian Slate)

Die Website basiert auf einem tiefen, warmen Nacht-Graphit mit feinen Milchglas-Highlights:

| Token | Wert | Rolle / Verwendung |
|---|---|---|
| `--color-bg-base` | `#08080a` | Primärer Hintergrund (Obsidian Slate) |
| `--color-bg-surface` | `rgba(255, 255, 255, 0.03)` | Glas-Oberflächen der Panels & Cards |
| `--color-bg-surface-hover` | `rgba(255, 255, 255, 0.06)` | Hover-Zustand für Panels |
| `--text-primary` | `#f4f4f5` | Headlines & Primärtext (Soft-White) |
| `--text-body` | `#d4d4d8` | Fließtext & Beschreibungen (Hohe Lesbarkeit) |
| `--text-muted` | `#71717a` | Meta-Tags, Datumsangaben, Labels |
| `--glass-border` | `rgba(255, 255, 255, 0.08)` | Subtile Glasränder |
| `--glass-border-top` | `rgba(255, 255, 255, 0.18)` | Oberkanten-Lichtreflexion |

---

## 2. Typografie-Architektur (100% Self-Hosted / DSGVO-konform)

Alle Schriftarten liegen als performante `.woff2`-Dateien lokal in `assets/fonts/` und werden ohne externe Serveranfragen ausgeliefert. Lizenz: **SIL Open Font License (OFL 1.1)**.

| Schicht | Schriftfamilie | Schnitt & Tracking | Verwendungszweck |
|---|---|---|---|
| **Display / Headline** | `Pixelify Sans` | Semibold (`600`), Tracking `0.04em` | Hero Title, Sektionsüberschriften (`h1`, `h2`, `h3`) |
| **Body / Copy** | `Inter` | Regular/Medium (`400`/`500`), Zeilenhöhe `1.78` | Fließtext, Geschichten, Textblöcke |
| **Meta / Data Layer** | `IBM Plex Mono` | Medium (`500`/`600`), Tracking `0.02em` | Badges, Chips, Navigation, Altersanzeige, Code |

---

## 3. Dateistruktur & Komponenten-Hierarchie

```
andreaskrieger.github.io/
├── index.html                  # Semantisches HTML5-Markup
├── DESIGN_SYSTEM.md            # Diese Spezifikation
├── .gitignore                  # Git-Ausschlüsse (Builds, Temp)
└── assets/
    ├── css/
    │   ├── main.css            # Master-Manifest & @import
    │   ├── tokens.css          # Design-Tokens & Farbvariablen
    │   ├── typography.css      # Typografie-Skala & Lesefluss
    │   ├── reset.css           # Modern CSS Reset
    │   ├── layout.css          # Layout-Container & Grid-System
    │   └── components/
    │       ├── nav.css         # Minimalistische Top-Right Navbar
    │       ├── cards.css       # Accordion-Panels & App-Window Frame
    │       ├── buttons.css     # Primary CTA & Glass Buttons
    │       └── badges.css      # Status-Pills & Tech-Chips
    ├── fonts/
    │   ├── fonts.css           # Lokale @font-face Definitionen
    │   └── *.woff2             # 56 optimierte Schrift-Dateien
    ├── images/
    │   ├── andi-profile.png    # Hero Bar-Porträtfoto
    │   └── andi-club.png       # Club-Porträtfoto
    └── js/
        └── main.js             # Live-Altersberechnung, Accordion & Spotlight
```

---

## 4. Kern-Komponenten

### 1. In-Place Accordion Cards („Andis Welt“)
Klickbare Glass-Panels mit sanfter CSS-Transition zur Anzeige von Subpage-Inhalten ohne Seitenwechsel:
```html
<div class="glass-panel spotlight-card expandable-card is-open">
    <div class="card-header-clickable">
        <h3>Software</h3>
        <div class="expand-chevron">...</div>
    </div>
    <div class="card-expanded-body">
        <!-- Reicher Inhalt: Techstack, BRAVEBOX, etc. -->
    </div>
</div>
```

### 2. BRAVEBOX App-Window Frame
Stilisierter Desktop-Fensterrahmen mit Window-Dots und Platzhalter für Video-/Screenshot-Showcases:
```html
<div class="app-window-frame">
    <div class="app-window-header">
        <div class="window-dots">
            <div class="window-dot red"></div>
            <div class="window-dot yellow"></div>
            <div class="window-dot green"></div>
        </div>
        <span>BRAVEBOX</span>
    </div>
    <div class="placeholder-screen-area">...</div>
</div>
```

### 3. Dezentrales Impressum-Modal (§ 5 DDG & DSGVO)
Abgedunkeltes Milchglas-Overlay für rechtliche Pflichtangaben:
```html
<div id="legal-modal" class="modal-backdrop">
    <div class="modal-dialog-box">
        <!-- Angaben gem. § 5 DDG & DSGVO-Hinweise -->
    </div>
</div>
```
