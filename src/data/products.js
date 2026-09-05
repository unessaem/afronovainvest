/**
 * Product catalogue — sourced from the AFRONOVA INVEST fruit & vegetable catalogues.
 * name: { en, fr, es }
 * family: { en, fr, es }  (the botanical / commercial family printed in the catalogue)
 * category: key of one of the categories in categories.js
 * packaging: array of { type: {en,fr,es}, weight }
 * image: file under /assets/products/
 */

const CARTON = { en: 'Carton box', fr: 'Caisse en carton', es: 'Caja de cartón' }
const WOOD = { en: 'Wooden box', fr: 'Caisse en bois', es: 'Caja de madera' }
const PALOX_W = { en: 'Palox wooden case', fr: 'Caisse bois palox', es: 'Estuche de madera palox' }
const PALOX_C = { en: 'Palox carton case', fr: 'Caisse carton palox', es: 'Estuche de cartón palox' }
const PALOX = { en: 'Palox', fr: 'Palox', es: 'Palox' }
const TRAY = { en: 'Food plastic tray', fr: 'Barquette alimentaire', es: 'Bandeja de comida' }
const BAG = { en: 'Plastic bag', fr: 'Sachet en plastique', es: 'Bolsa plástica' }
const MESH = { en: 'Mesh bag', fr: 'Sac filet', es: 'Bolsa de malla' }
const BIGBAG = { en: 'Big bag', fr: 'Big bag', es: 'Big bag' }
const SACHET = { en: 'Sachet', fr: 'Sachet', es: 'Bolsita' }
const CRATE = { en: 'Wooden crate', fr: 'Cagette en bois', es: 'Caja de madera' }

export const products = [
  /* ---------------------------------------------------------------- CITRUS */
  {
    slug: 'orange', category: 'citrus', image: 'orange.jpg',
    name: { en: 'Orange', fr: 'Orange', es: 'Naranja' },
    family: { en: 'Citrus', fr: 'Agrumes', es: 'Cítricos' },
    packaging: [
      { type: CARTON, weight: '15 kg' },
      { type: CRATE, weight: '15 kg' },
      { type: PALOX, weight: '350 – 450 kg' }
    ]
  },
  {
    slug: 'clementine', category: 'citrus', image: 'clementine.jpg',
    name: { en: 'Clementine', fr: 'Clémentine', es: 'Clementina' },
    family: { en: 'Citrus', fr: 'Agrumes', es: 'Cítricos' },
    packaging: [{ type: CARTON, weight: '15 kg' }, { type: WOOD, weight: '15 kg' }]
  },
  {
    slug: 'mandarin', category: 'citrus', image: 'mandarin.jpg',
    name: { en: 'Mandarin', fr: 'Mandarine', es: 'Mandarina' },
    family: { en: 'Citrus', fr: 'Agrumes', es: 'Cítricos' },
    packaging: [{ type: CARTON, weight: '10 kg' }, { type: WOOD, weight: '15 kg' }]
  },
  {
    slug: 'nadorcott', category: 'citrus', image: 'nadorcott.jpg',
    name: { en: 'Nadorcott', fr: 'Nadorcott', es: 'Nadorcott' },
    family: { en: 'Citrus', fr: 'Agrumes', es: 'Cítricos' },
    packaging: [{ type: CARTON, weight: '10 kg' }, { type: CARTON, weight: '15 kg' }]
  },
  {
    slug: 'lemon', category: 'citrus', image: 'lemon.jpg',
    name: { en: 'Lemon', fr: 'Citron', es: 'Limón' },
    family: { en: 'Citrus', fr: 'Agrumes', es: 'Cítricos' },
    packaging: [{ type: CARTON, weight: '15 kg' }, { type: WOOD, weight: '15 kg' }]
  },

  /* -------------------------------------------------------------- AVOCADOS */
  {
    slug: 'hass-avocado', category: 'avocado', image: 'hass-avocado.jpg',
    name: { en: 'Hass avocado', fr: 'Avocat Hass', es: 'Aguacate Hass' },
    family: { en: 'Fruits', fr: 'Fruits', es: 'Frutas' },
    packaging: [{ type: CARTON, weight: '4 kg' }, { type: CARTON, weight: '10 kg' }]
  },

  /* ---------------------------------------------------------------- BERRIES */
  {
    slug: 'strawberry', category: 'berries', image: 'strawberry.jpg',
    name: { en: 'Strawberry', fr: 'Fraise', es: 'Fresa' },
    family: { en: 'Red berries', fr: 'Fruits rouges', es: 'Frutos rojos' },
    packaging: [
      { type: CARTON, weight: '2 – 4 kg' },
      { type: TRAY, weight: '250 g' },
      { type: TRAY, weight: '500 g' }
    ]
  },
  {
    slug: 'raspberry', category: 'berries', image: 'raspberry.jpg',
    name: { en: 'Raspberry', fr: 'Framboise', es: 'Frambuesa' },
    family: { en: 'Red berries', fr: 'Fruits rouges', es: 'Frutos rojos' },
    packaging: [
      { type: CARTON, weight: '1,5 kg' },
      { type: TRAY, weight: '125 g' },
      { type: TRAY, weight: '250 g' }
    ]
  },
  {
    slug: 'blueberry', category: 'berries', image: 'blueberry.jpg',
    name: { en: 'Blueberry', fr: 'Myrtille', es: 'Arándano' },
    family: { en: 'Red berries', fr: 'Fruits rouges', es: 'Frutos rojos' },
    packaging: [
      { type: CARTON, weight: '1,5 kg' },
      { type: TRAY, weight: '125 g' },
      { type: TRAY, weight: '250 g' }
    ]
  },
  {
    slug: 'blackberry', category: 'berries', image: 'blackberry.jpg',
    name: { en: 'Blackberry', fr: 'Mûre', es: 'Mora' },
    family: { en: 'Red berries', fr: 'Fruits rouges', es: 'Frutos rojos' },
    packaging: [{ type: TRAY, weight: '125 g' }, { type: TRAY, weight: '250 g' }]
  },

  /* ------------------------------------------------------- FROZEN RED FRUIT */
  {
    slug: 'frozen-strawberry', category: 'frozen', image: 'frozen-strawberry.jpg',
    name: { en: 'Frozen strawberry', fr: 'Fraise surgelée', es: 'Fresa congelada' },
    family: { en: 'Frozen red berries', fr: 'Fruits rouges surgelés', es: 'Frutos rojos congelados' },
    packaging: [
      { type: SACHET, weight: '400 g – 1 kg' },
      { type: CARTON, weight: '10 kg' },
      { type: CARTON, weight: '20 kg' }
    ]
  },
  {
    slug: 'frozen-raspberry', category: 'frozen', image: 'frozen-raspberry.jpg',
    name: { en: 'Frozen raspberry', fr: 'Framboise surgelée', es: 'Frambuesa congelada' },
    family: { en: 'Frozen red berries', fr: 'Fruits rouges surgelés', es: 'Frutos rojos congelados' },
    packaging: [
      { type: SACHET, weight: '400 g' },
      { type: SACHET, weight: '1 kg' },
      { type: CARTON, weight: '10 kg' }
    ]
  },
  {
    slug: 'frozen-blueberry', category: 'frozen', image: 'frozen-blueberry.jpg',
    name: { en: 'Frozen blueberry', fr: 'Myrtille surgelée', es: 'Arándano congelado' },
    family: { en: 'Frozen red berries', fr: 'Fruits rouges surgelés', es: 'Frutos rojos congelados' },
    packaging: [
      { type: SACHET, weight: '400 g – 1 kg' },
      { type: CARTON, weight: '20 kg' }
    ]
  },
  {
    slug: 'frozen-blackberry', category: 'frozen', image: 'frozen-blackberry.jpg',
    name: { en: 'Frozen blackberry', fr: 'Mûre surgelée', es: 'Mora congelada' },
    family: { en: 'Frozen red berries', fr: 'Fruits rouges surgelés', es: 'Frutos rojos congelados' },
    packaging: [
      { type: SACHET, weight: '400 g – 1 kg' },
      { type: CARTON, weight: '10 kg' }
    ]
  },

  /* --------------------------------------------------------- SEASONAL FRUIT */
  {
    slug: 'galia-melon', category: 'seasonal', image: 'galia-melon.jpg',
    name: { en: 'Galia melon', fr: 'Melon Galia', es: 'Melón Galia' },
    family: { en: 'Fruit vegetables', fr: 'Légumes fruits', es: 'Fruta vegetales' },
    packaging: [{ type: CARTON, weight: '5 pieces' }, { type: WOOD, weight: '5 pieces' }]
  },
  {
    slug: 'charentais-melon', category: 'seasonal', image: 'charentais-melon.jpg',
    name: { en: 'Charentais melon', fr: 'Melon Charentais', es: 'Melón Cantalupo' },
    family: { en: 'Fruit vegetables', fr: 'Légumes fruits', es: 'Fruta vegetales' },
    packaging: [
      { type: CARTON, weight: '9 – 11 – 12 – 15 – 18 pieces' },
      { type: WOOD, weight: '9 – 11 – 12 – 15 – 18 pieces' }
    ]
  },
  {
    slug: 'yellow-melon', category: 'seasonal', image: 'yellow-melon.jpg',
    name: { en: 'Yellow melon', fr: 'Melon jaune', es: 'Melón amarillo' },
    family: { en: 'Fruit vegetables', fr: 'Légumes fruits', es: 'Fruta vegetales' },
    packaging: [
      { type: PALOX_W, weight: '450 – 500 kg' },
      { type: WOOD, weight: '300 – 350 kg' }
    ]
  },
  {
    slug: 'watermelon', category: 'seasonal', image: 'watermelon.jpg',
    name: { en: 'Watermelon', fr: 'Pastèque', es: 'Sandía' },
    family: { en: 'Fruit vegetables', fr: 'Légumes fruits', es: 'Fruta vegetales' },
    packaging: [
      { type: PALOX_W, weight: '450 – 500 kg' },
      { type: PALOX_C, weight: '450 – 500 kg' }
    ]
  },
  {
    slug: 'white-grapes', category: 'seasonal', image: 'white-grapes.jpg',
    name: { en: 'White grapes', fr: 'Raisin blanc', es: 'Uva blanca' },
    family: { en: 'Fruits', fr: 'Fruits', es: 'Frutas' },
    packaging: [{ type: CARTON, weight: '4,5 kg' }, { type: CARTON, weight: '5 kg' }]
  },
  {
    slug: 'prickly-pear', category: 'seasonal', image: 'prickly-pear.jpg',
    name: { en: 'Prickly pear', fr: 'Figue de barbarie', es: 'Higo chumbo' },
    family: { en: 'Cactus', fr: 'Cactus', es: 'Cactus' },
    packaging: [{ type: CARTON, weight: '4 – 5 kg' }, { type: WOOD, weight: '4 – 5 kg' }]
  },
  {
    slug: 'pomegranate', category: 'seasonal', image: 'pomegranate.jpg',
    name: { en: 'Pomegranate', fr: 'Grenade', es: 'Granada' },
    family: { en: 'Fruits', fr: 'Fruits', es: 'Frutas' },
    packaging: [{ type: CARTON, weight: '4 kg' }, { type: CARTON, weight: '10 kg' }]
  },

  /* ------------------------------------------------------------- VEGETABLES */
  {
    slug: 'round-tomato', category: 'vegetables', image: 'round-tomato.jpg',
    name: { en: 'Round tomato', fr: 'Tomate ronde', es: 'Tomate redondo' },
    family: { en: 'Fruit vegetables', fr: 'Légumes fruits', es: 'Fruta vegetales' },
    packaging: [
      { type: CARTON, weight: '5 – 6 kg' },
      { type: WOOD, weight: '5 – 6 kg' },
      { type: TRAY, weight: '250 g – 500 g – 1 kg' }
    ]
  },
  {
    slug: 'cluster-tomato', category: 'vegetables', image: 'cluster-tomato.jpg',
    name: { en: 'Cluster tomato', fr: 'Tomate grappe', es: 'Racimo de tomate' },
    family: { en: 'Fruit vegetables', fr: 'Légumes fruits', es: 'Fruta vegetales' },
    packaging: [
      { type: CARTON, weight: '5 – 6 kg' },
      { type: WOOD, weight: '5 – 6 kg' },
      { type: TRAY, weight: '250 g – 500 g – 1 kg' }
    ]
  },
  {
    slug: 'cherry-tomato', category: 'vegetables', image: 'cherry-tomato.jpg',
    name: { en: 'Cherry & plum cherry tomato', fr: 'Tomate cerise & olivette cerise', es: 'Tomate cherry y cherry pera' },
    family: { en: 'Fruit vegetables', fr: 'Légumes fruits', es: 'Fruta vegetales' },
    packaging: [
      { type: CARTON, weight: '3 kg' },
      { type: CARTON, weight: '5 kg' },
      { type: TRAY, weight: '250 g – 500 g' }
    ]
  },
  {
    slug: 'cucumber', category: 'vegetables', image: 'cucumber.jpg',
    name: { en: 'Cucumber', fr: 'Concombre', es: 'Pepino' },
    family: { en: 'Fruit vegetables', fr: 'Légumes fruits', es: 'Fruta vegetales' },
    packaging: [{ type: CARTON, weight: '5 kg' }, { type: WOOD, weight: '5 kg' }]
  },
  {
    slug: 'eggplant', category: 'vegetables', image: 'eggplant.jpg',
    name: { en: 'Eggplant', fr: 'Aubergine', es: 'Berenjena' },
    family: { en: 'Fruit vegetables', fr: 'Légumes fruits', es: 'Fruta vegetales' },
    packaging: [{ type: PALOX_W, weight: '5 kg' }, { type: WOOD, weight: '5 kg' }]
  },
  {
    slug: 'fennel', category: 'vegetables', image: 'fennel.jpg',
    name: { en: 'Fennel', fr: 'Fenouil', es: 'Hinojo' },
    family: { en: 'Fruit vegetables', fr: 'Légumes fruits', es: 'Fruta vegetales' },
    packaging: [{ type: CARTON, weight: '5 kg' }, { type: WOOD, weight: '5 kg' }]
  },
  {
    slug: 'artichoke', category: 'vegetables', image: 'artichoke.jpg',
    name: { en: 'Artichoke', fr: 'Artichaut', es: 'Alcachofa' },
    family: { en: 'Fruit vegetables', fr: 'Légumes fruits', es: 'Fruta vegetales' },
    packaging: [{ type: CARTON, weight: '12 – 15 pieces' }, { type: WOOD, weight: '12 – 15 pieces' }]
  },
  {
    slug: 'leek', category: 'vegetables', image: 'leek.jpg',
    name: { en: 'Leek', fr: 'Poireau', es: 'Puerro' },
    family: { en: 'Fruit vegetables', fr: 'Légumes fruits', es: 'Fruta vegetales' },
    packaging: [{ type: CARTON, weight: '5 kg' }, { type: WOOD, weight: '5 kg' }]
  },
  {
    slug: 'california-pepper', category: 'vegetables', image: 'california-pepper.jpg',
    name: { en: 'California pepper', fr: 'Poivron California', es: 'Pimiento California' },
    family: { en: 'Fruit vegetables', fr: 'Légumes fruits', es: 'Fruta vegetales' },
    packaging: [
      { type: CARTON, weight: '5 kg' },
      { type: WOOD, weight: '5 kg' },
      { type: BAG, weight: '500 g' }
    ]
  },
  {
    slug: 'long-green-pepper', category: 'vegetables', image: 'long-green-pepper.jpg',
    name: { en: 'Sweet long green pepper', fr: 'Poivron vert long', es: 'Pimiento verde largo' },
    family: { en: 'Fruit vegetables', fr: 'Légumes fruits', es: 'Fruta vegetales' },
    packaging: [
      { type: CARTON, weight: '5 kg' },
      { type: WOOD, weight: '5 kg' },
      { type: BAG, weight: '500 g' }
    ]
  },
  {
    slug: 'white-pepper', category: 'vegetables', image: 'white-pepper.jpg',
    name: { en: 'White pepper', fr: 'Poivron blanc', es: 'Pimiento blanco' },
    family: { en: 'Fruit vegetables', fr: 'Légumes fruits', es: 'Fruta vegetales' },
    packaging: [
      { type: CARTON, weight: '5 kg' },
      { type: WOOD, weight: '5 kg' },
      { type: BAG, weight: '500 g' }
    ]
  },
  {
    slug: 'kapia-pepper', category: 'vegetables', image: 'kapia-pepper.jpg',
    name: { en: 'Kapia pepper', fr: 'Poivron Kapia', es: 'Pimiento Kapia' },
    family: { en: 'Fruit vegetables', fr: 'Légumes fruits', es: 'Fruta vegetales' },
    packaging: [
      { type: CARTON, weight: '4 – 5 kg' },
      { type: WOOD, weight: '4 – 5 kg' },
      { type: BAG, weight: '500 g' }
    ]
  },
  {
    slug: 'starter-pepper', category: 'vegetables', image: 'starter-pepper.jpg',
    name: { en: 'Starter pepper', fr: 'Piment Starter', es: 'Pimiento Starter' },
    family: { en: 'Fruit vegetables', fr: 'Légumes fruits', es: 'Fruta vegetales' },
    packaging: [
      { type: CARTON, weight: '4 – 5 kg' },
      { type: WOOD, weight: '4 – 5 kg' },
      { type: BAG, weight: '500 g' }
    ]
  },
  {
    slug: 'hot-pepper', category: 'vegetables', image: 'hot-pepper.jpg',
    name: { en: 'Sharp red & green pepper', fr: 'Piment Sahim rouge & vert', es: 'Guindilla roja y verde' },
    family: { en: 'Fruit vegetables', fr: 'Légumes fruits', es: 'Fruta vegetales' },
    packaging: [
      { type: CARTON, weight: '5 kg' },
      { type: WOOD, weight: '5 kg' },
      { type: BAG, weight: '500 g' }
    ]
  },
  {
    slug: 'black-zucchini', category: 'vegetables', image: 'black-zucchini.jpg',
    name: { en: 'Black zucchini', fr: 'Courgette noire', es: 'Calabacín negro' },
    family: { en: 'Squash', fr: 'Courge', es: 'Calabaza' },
    packaging: [{ type: CARTON, weight: '5 kg' }, { type: WOOD, weight: '5 kg' }]
  },
  {
    slug: 'white-zucchini', category: 'vegetables', image: 'white-zucchini.jpg',
    name: { en: 'White zucchini', fr: 'Courgette blanche', es: 'Calabacín blanco' },
    family: { en: 'Squash', fr: 'Courge', es: 'Calabaza' },
    packaging: [{ type: CARTON, weight: '5 kg' }, { type: WOOD, weight: '5 kg' }]
  },
  {
    slug: 'round-zucchini', category: 'vegetables', image: 'round-zucchini.jpg',
    name: { en: 'Round zucchini', fr: 'Courgette ronde', es: 'Calabacín redondo' },
    family: { en: 'Squash', fr: 'Courge', es: 'Calabaza' },
    packaging: [{ type: CARTON, weight: '5 kg' }, { type: WOOD, weight: '5 kg' }]
  },
  {
    slug: 'squash', category: 'vegetables', image: 'squash.jpg',
    name: { en: 'Pumpkin, red kuri & butternut', fr: 'Potiron, potimarron & courge musquée', es: 'Calabaza, kuri rojo y butternut' },
    family: { en: 'Squash', fr: 'Courge', es: 'Calabaza' },
    packaging: [
      { type: PALOX_W, weight: '450 – 500 kg' },
      { type: WOOD, weight: '6 – 8 – 12 pieces' }
    ]
  },
  {
    slug: 'cauliflower', category: 'vegetables', image: 'cauliflower.jpg',
    name: { en: 'Cauliflower', fr: 'Chou-fleur', es: 'Coliflor' },
    family: { en: 'Cabbage family', fr: 'Choux', es: 'Familia de las coles' },
    packaging: [{ type: CARTON, weight: '6 – 8 pieces' }, { type: WOOD, weight: '6 – 8 pieces' }]
  },
  {
    slug: 'cabbage', category: 'vegetables', image: 'cabbage.jpg',
    name: { en: 'Cabbage', fr: 'Chou pomme', es: 'Repollo' },
    family: { en: 'Cabbage family', fr: 'Choux', es: 'Familia de las coles' },
    packaging: [{ type: CARTON, weight: '6 – 8 pieces' }, { type: WOOD, weight: '6 – 8 pieces' }]
  },
  {
    slug: 'broccoli', category: 'vegetables', image: 'broccoli.jpg',
    name: { en: 'Broccoli', fr: 'Brocoli', es: 'Brócoli' },
    family: { en: 'Cabbage family', fr: 'Choux', es: 'Familia de las coles' },
    packaging: [{ type: CARTON, weight: '5 kg' }, { type: CARTON, weight: '8 kg' }]
  },
  {
    slug: 'flat-beans', category: 'vegetables', image: 'flat-beans.jpg',
    name: { en: 'Flat beans', fr: 'Haricot coco plat', es: 'Judía helda' },
    family: { en: 'Legumes', fr: 'Légumineuses', es: 'Leguminosas' },
    packaging: [
      { type: CARTON, weight: '4 kg' },
      { type: WOOD, weight: '4 kg' },
      { type: BAG, weight: '500 g' }
    ]
  },
  {
    slug: 'green-beans', category: 'vegetables', image: 'green-beans.jpg',
    name: { en: 'Climbing french bean', fr: 'Haricot vert filet', es: 'Judía verde' },
    family: { en: 'Legumes', fr: 'Légumineuses', es: 'Leguminosas' },
    packaging: [
      { type: CARTON, weight: '4 kg' },
      { type: WOOD, weight: '4 kg' },
      { type: BAG, weight: '500 g' }
    ]
  },
  {
    slug: 'peas', category: 'vegetables', image: 'peas.jpg',
    name: { en: 'Peas', fr: 'Petit pois', es: 'Guisantes' },
    family: { en: 'Legumes', fr: 'Légumineuses', es: 'Leguminosas' },
    packaging: [{ type: CARTON, weight: '4 kg' }, { type: WOOD, weight: '4 kg' }]
  },
  {
    slug: 'fava-beans', category: 'vegetables', image: 'fava-beans.jpg',
    name: { en: 'Fava beans', fr: 'Fève', es: 'Habas' },
    family: { en: 'Legumes', fr: 'Légumineuses', es: 'Leguminosas' },
    packaging: [{ type: CARTON, weight: '4 kg' }, { type: WOOD, weight: '4 kg' }]
  },
  {
    slug: 'carrot', category: 'vegetables', image: 'carrot.jpg',
    name: { en: 'Carrot', fr: 'Carotte', es: 'Zanahoria' },
    family: { en: 'Root vegetables', fr: 'Légumes racines', es: 'Verduras de raíz' },
    packaging: [{ type: PALOX_W, weight: '4 – 5 kg' }, { type: WOOD, weight: '4 – 5 kg' }]
  },
  {
    slug: 'onion', category: 'vegetables', image: 'onion.jpg',
    name: { en: 'Onion', fr: 'Oignon', es: 'Cebolla' },
    family: { en: 'Root vegetables', fr: 'Légumes racines', es: 'Verduras de raíz' },
    packaging: [{ type: MESH, weight: '10 – 25 kg' }, { type: BIGBAG, weight: '650 kg' }]
  },
  {
    slug: 'potato', category: 'vegetables', image: 'potato.jpg',
    name: { en: 'Potato', fr: 'Pomme de terre', es: 'Patata' },
    family: { en: 'Root vegetables', fr: 'Légumes racines', es: 'Verduras de raíz' },
    packaging: [{ type: MESH, weight: '10 – 25 kg' }, { type: BIGBAG, weight: '650 kg' }]
  },
  {
    slug: 'sweet-potato', category: 'vegetables', image: 'sweet-potato.jpg',
    name: { en: 'Sweet potato', fr: 'Patate douce', es: 'Batata' },
    family: { en: 'Root vegetables', fr: 'Légumes racines', es: 'Verduras de raíz' },
    packaging: [{ type: CARTON, weight: '5 – 6 kg' }, { type: WOOD, weight: '5 – 6 kg' }]
  },
  {
    slug: 'beetroot', category: 'vegetables', image: 'beetroot.jpg',
    name: { en: 'Beetroot', fr: 'Betterave', es: 'Remolacha' },
    family: { en: 'Root vegetables', fr: 'Légumes racines', es: 'Verduras de raíz' },
    packaging: [{ type: CARTON, weight: '5 kg' }, { type: WOOD, weight: '5 kg' }]
  },
  {
    slug: 'turnip', category: 'vegetables', image: 'turnip.jpg',
    name: { en: 'Turnip', fr: 'Navet', es: 'Nabo' },
    family: { en: 'Root vegetables', fr: 'Légumes racines', es: 'Verduras de raíz' },
    packaging: [{ type: CARTON, weight: '5 kg' }, { type: WOOD, weight: '5 kg' }]
  },
  {
    slug: 'parsnip', category: 'vegetables', image: 'parsnip.jpg',
    name: { en: 'Parsnip', fr: 'Panais', es: 'Chirivía' },
    family: { en: 'Root vegetables', fr: 'Légumes racines', es: 'Verduras de raíz' },
    packaging: [{ type: CARTON, weight: '4 – 5 kg' }, { type: WOOD, weight: '4 – 5 kg' }]
  }
]

export default products
