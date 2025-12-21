# WORLD TRENDS - Prediction Market Analytics

Dashboard web per l'analisi dei prediction market di Predict.fun con stile grafico tipo Arkham Intelligence.

## Caratteristiche

- 🎨 Design dark/neon stile Arkham
- 📊 Visualizzazione mercati predittivi in tempo reale
- 🔍 Filtri per categoria e stato
- 📈 Statistiche aggregate
- ⚡ Interfaccia moderna e responsiva

## Setup

### 1. Installazione Dipendenze

```bash
npm install
```

### 2. Configurazione Supabase

La dashboard legge i dati da Supabase. Configura le credenziali nel file `.env.local`:

```bash
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_ANON_KEY=your-publishable-key
```

**📍 Come trovare le credenziali in Supabase:**

1. Vai su **Supabase Dashboard → Settings → API**
2. Nella sezione **"Project API keys"** troverai:
   - **Project URL** → copia questo come `SUPABASE_URL`
   - **Publishable key** → copia questo come `SUPABASE_ANON_KEY`
     - Dovrebbe iniziare con `sb_publishable_...` (formato nuovo)
     - Oppure `eyJ...` (formato legacy JWT token)

**⚠️ IMPORTANTE:** 
- ✅ Usa la **Publishable key** (`sb_publishable_...`) - è sicura per il browser
- ❌ NON usare le **Secret keys** (`sb_secret_...`) - non possono essere usate nel browser
- ❌ NON usare la **JWT key** (Legacy HS256) - non è quella giusta

**Esempio `.env.local`:**
```bash
SUPABASE_URL=https://fpuasxhpupyvkmbwrane.supabase.co
SUPABASE_ANON_KEY=sb_publishable_Fvgy...
```

**Nota:** Assicurati di aver eseguito `sync-to-supabase` almeno una volta per popolare il database.

### 3. Avvio

```bash
npm run dev
```

Il server di sviluppo sarà disponibile su `http://localhost:5173` (o altra porta se 5173 è occupata).

### Build per Produzione

```bash
npm run build
```

I file compilati saranno nella cartella `dist/`.

## Struttura File

- `index.html` - Struttura HTML principale
- `styles.css` - Stili CSS con tema dark/neon
- `app.js` - Logica JavaScript per fetch e visualizzazione dati
- `config.js` - File di configurazione (da creare)

## API Endpoints Utilizzati

- `GET /v1/markets` - Lista mercati
- `GET /v1/markets/{id}/statistics` - Statistiche mercato
- `GET /v1/markets/{id}/orderbook` - Orderbook mercato

## Stile Grafico

Il design è ispirato ad Arkham Intelligence con:
- Background nero con gradienti colorati
- Effetti neon (verde, blu, viola)
- Glassmorphism e blur effects
- Animazioni fluide
- Tipografia moderna

## Sviluppo

Per modifiche e miglioramenti, i file principali sono:
- `styles.css` - Per modifiche grafiche
- `app.js` - Per logica e integrazione API

