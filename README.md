# GitHub Personal Page

Pagina vetrina personale per GitHub Pages, simile a Linktree, con informazioni generali e descrizione dei progetti.

## 🚀 Caratteristiche

- Design moderno e responsive
- Sezioni per progetti in Production e Developing/Testnet
- Link ai social media
- Animazioni fluide
- Ottimizzato per GitHub Pages

## 📝 Personalizzazione

### Modificare le informazioni personali

Apri `index.html` e modifica:
- Avatar e username nella sezione `.profile-section`
- Bio e descrizione
- Link ai social media nella sezione `.social-links`
- Progetti nelle sezioni Production e Developing/Testnet

### Modificare i colori

Apri `styles.css` e modifica le variabili CSS in `:root`:
- `--primary-color`: Colore primario
- `--secondary-color`: Colore secondario
- `--bg-color`: Colore di sfondo
- `--card-bg`: Colore delle card

## 🛠️ Setup per GitHub Pages

1. Fai push del codice sul tuo repository GitHub
2. Vai su Settings > Pages nel tuo repository
3. Seleziona il branch `main` (o `master`) come source
4. La pagina sarà disponibile su `https://[tuo-username].github.io/[nome-repo]/`

## 📦 Struttura File

```
.
├── index.html      # Pagina principale
├── styles.css      # Stili CSS
├── script.js       # JavaScript
└── README.md       # Questo file
```

## 🎨 Preview Locale

Per vedere la preview in locale, puoi:

1. Aprire direttamente `index.html` nel browser
2. Oppure usare un server locale:
   ```bash
   # Con Python
   python3 -m http.server 8000
   
   # Con Node.js (se hai http-server installato)
   npx http-server
   ```

Poi apri `http://localhost:8000` nel browser.

## 📄 Licenza

Questo progetto è open source e disponibile per uso personale.


