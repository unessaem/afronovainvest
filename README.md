# AFRONOVA INVEST — site web

Site vitrine trilingue (EN / FR / ES) pour **AFRONOVA INVEST**, société marocaine
de sourcing et de coordination opérationnelle à l'export de produits frais.

Construit avec **React 18 + Vite + React Router**. Aucun backend requis.

---

## Démarrage

```bash
npm install       # installe les dépendances
npm run dev       # serveur de développement → http://localhost:5173
npm run build     # build de production → dossier dist/
npm run preview   # prévisualise le build
```

Un fichier HTML autonome (tout inliné : CSS, JS, images) peut être généré
pour envoyer une prévisualisation par mail :

```bash
npm run build
node scripts/build-singlefile.mjs   # → dist-preview/afronova-invest-preview.html
```

---

## Structure

```
src/
├── assets/
│   ├── products/        53 photos produits (extraites des catalogues PDF)
│   ├── photos/          20 photos d'ambiance
│   └── logo.png / logo-white.png
├── components/          Header, Footer, ProductCard, ProcessSteps, CtaBanner, Icons…
├── data/
│   ├── site.js          ⚠️ COORDONNÉES DE L'ENTREPRISE — à compléter
│   ├── products.js      catalogue produits (nom EN/FR/ES, famille, conditionnements)
│   ├── categories.js    les 6 catégories de la page Produits
│   └── images.js        résolveur d'images
├── i18n/
│   ├── translations.js  ⚠️ TOUS LES TEXTES du site, en EN / FR / ES
│   └── LanguageContext.jsx
├── pages/               Home, About, Services, Products, Quality, Contact, NotFound
└── styles.css           design tokens + styles (couleurs issues du logo)
```

### Pages

| Route | Contenu |
|---|---|
| `/` | Hero, Qui sommes-nous, Services, Catégories produits, Processus, Pourquoi nous, Chiffres, CTA |
| `/about` | Présentation, Mission & Vision, Approche, Expertise, Réseau Maroc / marchés internationaux |
| `/services` | Les 3 pôles de services détaillés |
| `/products` | 53 produits filtrables par catégorie, avec conditionnements |
| `/quality` | Qualité & conformité, laboratoires, processus |
| `/contact` | Formulaire de demande, coordonnées, carte |

---

## À faire avant la mise en ligne

1. **`src/data/site.js`** — remplacer les valeurs provisoires :
   email, téléphone, WhatsApp, adresse, URL LinkedIn, `mapQuery` (adresse Google Maps),
   et les 4 chiffres clés de la section statistiques.
2. **Formulaire de contact** — il ouvre actuellement le client mail de l'utilisateur
   (`mailto:`). Pour recevoir les demandes côté serveur, brancher `onSubmit`
   dans `src/pages/Contact.jsx` sur Formspree / Web3Forms / une API.
3. **Textes** — tout est dans `src/i18n/translations.js`, un objet par section
   avec les trois langues côte à côte.
4. **Mentions légales & politique de confidentialité** — les liens du pied de page
   pointent pour l'instant vers `/contact`.
5. **Photos** — les visuels produits proviennent des catalogues PDF fournis.
   Remplacer les fichiers de `src/assets/products/` en gardant les mêmes noms
   suffit à changer une image.

---

## Déploiement

Le build produit un site **100 % statique** dans `dist/`.

- **Vercel / Netlify** : commande `npm run build`, dossier de publication `dist`.
- **Hébergement classique (cPanel, OVH, LWS…)** : uploader le contenu de `dist/`
  à la racine du domaine (ou dans un sous-dossier — `base: './'` est déjà configuré
  dans `vite.config.js`).

Le routage utilise `HashRouter` (URLs en `/#/products`) pour fonctionner partout
sans règle de réécriture serveur. Sur Vercel/Netlify, vous pouvez passer à
`BrowserRouter` dans `src/main.jsx` et ajouter une redirection catch-all vers
`index.html` pour obtenir des URLs propres (`/products`).

---

## Détails techniques

- **Langues** : EN / FR / ES. La langue est détectée depuis le navigateur au premier
  passage, puis mémorisée dans `localStorage`.
- **Couleurs** : extraites du logo — bleu `#00597b`, bleu clair `#29abe2`,
  vert `#8cc63f`. Définies en variables CSS dans `src/styles.css`.
- **Polices** : Inter + Barlow Condensed (Google Fonts).
- **Icônes** : SVG inline (`src/components/Icons.jsx`), aucune librairie externe.
- **Responsive** : testé de 390 px à 1440 px.
- **Poids du build** : ~240 kB de JS (73 kB gzip) + les images.
