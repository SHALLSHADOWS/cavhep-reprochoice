# CAVHEP ReproChoice AI — Application Mobile

Application mobile de soutien à la décision contraceptive, développée dans le cadre du **HASH Innovation Challenge** pour la piste *Informed Contraceptive Choice* (Afrique subsaharienne).

---

## Présentation

**ReproChoice AI** est une PWA mobile (React Native / Expo) qui aide les femmes à accéder à une information fiable sur la contraception, avec ou sans connexion internet.

### Fonctionnalités

| Fonctionnalité | Mode | Description |
|---|---|---|
| Chat IA conversationnel | En ligne | Propulsé par OpenAI GPT-4o-mini |
| Grille interactive des méthodes | En ligne + hors ligne | 6 méthodes, déclenchée automatiquement dans le chat |
| Mode hors ligne complet | Hors ligne | FAQ locale + réponses par mots-clés |
| Onboarding 5 étapes | — | Présentation de l'app au premier lancement |
| Fiches méthodes détaillées | — | Efficacité, avantages, effets secondaires, accès |
| FAQ searchable | Hors ligne | 12 questions/réponses, filtrées par catégorie |
| Bannière IST | — | Rappel permanent sur la protection IST |
| Bulle Empowerment | — | Message bienveillant déclenché par l'IA |

---

## Stack Technique

### Versions exactes (importantes pour la reproductibilité)

| Technologie | Version | Note |
|---|---|---|
| **Expo SDK** | `54.0.33` | Compatible Expo Go 54.x |
| **React Native** | `0.81.5` | Requis par Expo SDK 54 |
| **React** | `19.1.0` | Requis par Expo SDK 54 |
| **expo-router** | `6.0.24` | Navigation file-based |
| **NativeWind** | `4.1.23` | Tailwind CSS pour React Native |
| **Tailwind CSS** | `3.x` | ⚠️ NativeWind 4 ne supporte PAS Tailwind v4 |
| **Zustand** | `4.5.5` | State management |
| **OpenAI SDK** | `4.79.1` | Client API GPT-4o-mini |
| **react-native-worklets** | `0.5.1` | ⚠️ Version exacte requise (0.9.1 incompatible) |
| **TypeScript** | `5.9.2` | — |
| **Node.js** | `>= 18` | Recommandé : 20 LTS |

### Dépendances complètes

```json
{
  "expo": "~54.0.33",
  "react": "19.1.0",
  "react-native": "0.81.5",
  "expo-router": "~6.0.24",
  "expo-font": "~14.0.12",
  "expo-linking": "~8.0.12",
  "expo-splash-screen": "~31.0.13",
  "expo-status-bar": "~3.0.9",
  "expo-system-ui": "~6.0.9",
  "nativewind": "^4.1.23",
  "tailwindcss": "^3.4.19",
  "zustand": "^4.5.5",
  "openai": "^4.79.1",
  "lucide-react-native": "^0.475.0",
  "react-native-reanimated": "~4.1.1",
  "react-native-worklets": "0.5.1",
  "react-native-gesture-handler": "~2.28.0",
  "react-native-safe-area-context": "~5.6.0",
  "react-native-screens": "~4.16.0",
  "react-native-svg": "15.12.1",
  "@react-native-async-storage/async-storage": "2.2.0",
  "@react-native-community/netinfo": "11.4.1",
  "@expo-google-fonts/inter": "^0.4.2"
}
```

---

## Architecture

```
cavhep-app/
├── app/                        # Expo Router (file-based routing)
│   ├── _layout.tsx             # Root layout (fonts, SafeAreaProvider)
│   ├── index.tsx               # Redirect → onboarding ou chat
│   ├── onboarding.tsx          # 5 slides d'onboarding
│   ├── (main)/
│   │   ├── _layout.tsx         # Tab navigation (Chat / Méthodes / FAQ)
│   │   ├── chat.tsx            # Écran chat principal
│   │   ├── methods.tsx         # Liste des méthodes contraceptives
│   │   └── faq.tsx             # FAQ searchable accordion
│   └── method/
│       └── [id].tsx            # Page détail d'une méthode
├── components/
│   ├── chat/
│   │   ├── AIAvatar.tsx        # Avatar IA (cercle vert + feuille)
│   │   ├── ChatBubble.tsx      # Bulle chat (text / methods_grid / empowerment)
│   │   ├── ChatInput.tsx       # Champ de saisie
│   │   ├── EmpowermentBubble.tsx # Bulle "You are in control"
│   │   ├── MethodsGrid.tsx     # Grille 3x2 méthodes cliquables
│   │   └── TypingIndicator.tsx # Animation 3 points
│   ├── layout/
│   │   └── Header.tsx          # En-tête avec indicateur réseau
│   ├── methods/
│   │   ├── MethodCard.tsx      # Carte méthode (liste)
│   │   └── MethodDetail.tsx    # Détail complet d'une méthode
│   └── ui/
│       ├── Badge.tsx           # Badges colorés
│       ├── Button.tsx          # Bouton multi-variantes
│       ├── Card.tsx            # Carte conteneur
│       ├── ProgressBar.tsx     # Barre d'efficacité
│       └── Separator.tsx       # Séparateur horizontal
├── constants/
│   └── colors.ts               # Palette de couleurs CAVHEP
├── data/
│   ├── faq.ts                  # 12 questions/réponses hors ligne
│   └── methods.ts              # 6 méthodes contraceptives (données complètes)
├── hooks/
│   └── useNetworkStatus.ts     # Détection connectivité réseau
├── services/
│   ├── offlineChat.ts          # Réponses FAQ locales (mode hors ligne)
│   └── openai.ts               # Client OpenAI lazy + system prompt
├── stores/
│   └── chatStore.ts            # Zustand store + logique chat + triggers
├── app.json                    # Config Expo
├── babel.config.js             # Babel + NativeWind
├── eas.json                    # Config EAS Build
├── global.css                  # Directives Tailwind
├── metro.config.js             # Metro + NativeWind
├── tailwind.config.js          # Config couleurs CAVHEP
└── .env                        # Clé API (non versionnée)
```

---

## Installation

### Prérequis

- Node.js >= 18 (recommandé : 20 LTS)
- npm >= 9
- Expo Go 54.x sur Android/iOS
- Compte Expo (pour EAS Build)

### Étapes

```bash
# 1. Cloner le dépôt
git clone https://github.com/<votre-repo>/cavhep-reprochoice.git
cd cavhep-reprochoice/cavhep-app

# 2. Installer les dépendances
npm install --legacy-peer-deps

# ⚠️  IMPORTANT : toujours utiliser --legacy-peer-deps
# Des conflits de peer deps existent entre lucide-react-native (React 18)
# et React 19 requis par Expo SDK 54. Le fichier .npmrc gère cela
# automatiquement pour les builds EAS.

# 3. Configurer la clé OpenAI
cp .env.example .env
# Éditer .env et ajouter : EXPO_PUBLIC_OPENAI_API_KEY=sk-...

# 4. Lancer l'application
npx expo start --tunnel
```

> **Sans clé OpenAI** : l'application fonctionne entièrement en mode hors ligne (FAQ locale). Aucune erreur ne sera levée.

---

## Variables d'environnement

| Variable | Requis | Description |
|---|---|---|
| `EXPO_PUBLIC_OPENAI_API_KEY` | Non | Clé API OpenAI pour le mode en ligne. Sans elle, l'app utilise automatiquement le mode hors ligne. |

Copier `.env.example` → `.env` et renseigner la clé.

---

## Build APK (distribution interne)

```bash
# Installer EAS CLI
npm install -g eas-cli

# Se connecter
eas login

# Build Android (preview = APK installable)
eas build --platform android --profile preview
```

Le build est effectué dans le cloud (~10-15 min). Un lien de téléchargement est fourni à la fin.

---

## Points d'attention techniques

### ⚠️ Tailwind CSS v3 obligatoire
NativeWind 4.x ne supporte pas Tailwind CSS v4. Ne pas upgrader tailwindcss au-delà de `3.x`.

### ⚠️ react-native-worklets version exacte
La version `0.5.1` est requise. La version `0.9.1` est incompatible avec `react-native-reanimated@4.1.1` sur ce SDK.

### ⚠️ --legacy-peer-deps obligatoire
`lucide-react-native@0.475.0` déclare React 18 comme peer dep mais fonctionne avec React 19. Utiliser systématiquement `--legacy-peer-deps` ou se fier au `.npmrc`.

### ⚠️ expo-status-bar hors des plugins
Ne pas ajouter `expo-status-bar` dans la section `plugins` de `app.json`. Ce package n'a pas de config plugin.

---

## Éthique IA

- Aucun diagnostic médical n'est fourni
- Chaque réponse inclut un disclaimer professionnel
- Aucune donnée personnelle n'est transmise à OpenAI (pas de profil utilisateur dans les requêtes)
- L'historique de chat est stocké localement (AsyncStorage) uniquement
- Le modèle utilisé est GPT-4o-mini avec un system prompt contrôlé

---

## Équipe

Projet développé dans le cadre du **HASH Innovation Challenge 2026** — Piste : *Informed Contraceptive Choice*.

---

## Licence

MIT — voir `LICENSE` pour les détails.
