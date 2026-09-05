export const languages = [
  { code: 'en', label: 'EN', name: 'English' },
  { code: 'fr', label: 'FR', name: 'Français' },
  { code: 'es', label: 'ES', name: 'Español' }
]

const t = {
  /* ------------------------------------------------------------------ NAV */
  nav: {
    home: { en: 'Home', fr: 'Accueil', es: 'Inicio' },
    about: { en: 'About us', fr: 'À propos', es: 'Nosotros' },
    services: { en: 'Services', fr: 'Services', es: 'Servicios' },
    products: { en: 'Products', fr: 'Produits', es: 'Productos' },
    quality: { en: 'Quality', fr: 'Qualité', es: 'Calidad' },
    contact: { en: 'Contact', fr: 'Contact', es: 'Contacto' },
    inquiry: { en: 'Send inquiry', fr: 'Faire une demande', es: 'Enviar consulta' }
  },

  /* ----------------------------------------------------------------- HERO */
  hero: {
    eyebrow: { en: 'Moroccan fresh produce', fr: 'Produits frais du Maroc', es: 'Productos frescos de Marruecos' },
    title1: { en: 'Reliable Moroccan Sourcing', fr: 'Sourcing marocain fiable', es: 'Abastecimiento marroquí fiable' },
    title2: { en: '& Quality Coordination', fr: '& coordination qualité', es: 'y coordinación de calidad' },
    subtitle: {
      en: 'Transparent sourcing, operational coordination and export support for international fresh produce markets.',
      fr: 'Sourcing transparent, coordination opérationnelle et accompagnement export pour les marchés internationaux de produits frais.',
      es: 'Abastecimiento transparente, coordinación operativa y apoyo a la exportación para los mercados internacionales de productos frescos.'
    },
    cta1: { en: 'Explore our services', fr: 'Découvrir nos services', es: 'Ver nuestros servicios' },
    cta2: { en: 'Contact us', fr: 'Nous contacter', es: 'Contáctenos' },
    pills: {
      reliability: { en: 'Reliability', fr: 'Fiabilité', es: 'Fiabilidad' },
      transparency: { en: 'Transparency', fr: 'Transparence', es: 'Transparencia' },
      quality: { en: 'Quality', fr: 'Qualité', es: 'Calidad' },
      global: { en: 'Global connection', fr: 'Connexion mondiale', es: 'Conexión global' }
    }
  },

  /* ------------------------------------------------------------ WHO WE ARE */
  who: {
    eyebrow: { en: 'Who we are', fr: 'Qui sommes-nous', es: 'Quiénes somos' },
    title: {
      en: 'Your trusted partner for Moroccan fresh produce',
      fr: 'Votre partenaire de confiance pour les produits frais marocains',
      es: 'Su socio de confianza para productos frescos marroquíes'
    },
    p1: {
      en: 'AFRONOVA INVEST is a Morocco-based sourcing and operational coordination company specialised in fresh produce export activities.',
      fr: 'AFRONOVA INVEST est une société marocaine de sourcing et de coordination opérationnelle spécialisée dans l’export de produits frais.',
      es: 'AFRONOVA INVEST es una empresa marroquí de abastecimiento y coordinación operativa especializada en la exportación de productos frescos.'
    },
    p2: {
      en: 'We support international importers, distributors and trade partners through reliable sourcing solutions, quality-focused coordination and operational follow-up across the Moroccan agricultural supply chain.',
      fr: 'Nous accompagnons importateurs, distributeurs et partenaires commerciaux internationaux avec des solutions de sourcing fiables, une coordination centrée sur la qualité et un suivi opérationnel sur toute la chaîne agricole marocaine.',
      es: 'Acompañamos a importadores, distribuidores y socios comerciales internacionales con soluciones de abastecimiento fiables, coordinación centrada en la calidad y seguimiento operativo en toda la cadena agrícola marroquí.'
    },
    p3: {
      en: 'Our network includes growers, packing stations, exporters and technical partners operating across Morocco’s leading agricultural regions.',
      fr: 'Notre réseau réunit producteurs, stations de conditionnement, exportateurs et partenaires techniques dans les principales régions agricoles du Maroc.',
      es: 'Nuestra red incluye productores, estaciones de acondicionamiento, exportadores y socios técnicos en las principales regiones agrícolas de Marruecos.'
    },
    more: { en: 'Learn more about us', fr: 'En savoir plus', es: 'Conozca más' },
    card1: { en: 'Strong Moroccan network', fr: 'Réseau marocain solide', es: 'Sólida red marroquí' },
    card2: { en: 'Quality-focused coordination', fr: 'Coordination centrée qualité', es: 'Coordinación centrada en calidad' },
    card3: { en: 'Reliable export coordination', fr: 'Coordination export fiable', es: 'Coordinación de exportación fiable' }
  },

  /* ------------------------------------------------------------- SERVICES */
  services: {
    eyebrow: { en: 'Our services', fr: 'Nos services', es: 'Nuestros servicios' },
    title: { en: 'What we do', fr: 'Ce que nous faisons', es: 'Qué hacemos' },
    seeAll: { en: 'See all our services', fr: 'Voir tous nos services', es: 'Ver todos nuestros servicios' },
    intro: {
      en: 'Three complementary service lines covering the full path from grower selection to delivery coordination.',
      fr: 'Trois pôles de services complémentaires couvrant tout le parcours, de la sélection des producteurs à la coordination des livraisons.',
      es: 'Tres líneas de servicio complementarias que cubren todo el recorrido, desde la selección de productores hasta la coordinación de entregas.'
    },
    s1: {
      title: { en: 'Supplier sourcing', fr: 'Sourcing fournisseurs', es: 'Abastecimiento de proveedores' },
      short: {
        en: 'Reliable grower and supplier identification adapted to export market requirements.',
        fr: 'Identification de producteurs et fournisseurs fiables, adaptée aux exigences des marchés export.',
        es: 'Identificación de productores y proveedores fiables, adaptada a los requisitos de exportación.'
      },
      points: {
        en: ['Grower and packing station identification', 'Capacity, volume and calendar assessment', 'Commercial condition negotiation support', 'Supplier reliability follow-up', 'Alternative sourcing during shortages'],
        fr: ['Identification de producteurs et stations de conditionnement', 'Évaluation des capacités, volumes et calendriers', 'Appui à la négociation des conditions commerciales', 'Suivi de la fiabilité fournisseurs', 'Sourcing alternatif en cas de pénurie'],
        es: ['Identificación de productores y estaciones de acondicionamiento', 'Evaluación de capacidad, volumen y calendario', 'Apoyo en la negociación de condiciones comerciales', 'Seguimiento de la fiabilidad de proveedores', 'Abastecimiento alternativo ante escasez']
      }
    },
    s2: {
      title: { en: 'Quality & compliance', fr: 'Qualité & conformité', es: 'Calidad y cumplimiento' },
      short: {
        en: 'Quality verification coordination, laboratory follow-up and compliance-oriented operational support.',
        fr: 'Coordination des contrôles qualité, suivi laboratoire et appui opérationnel orienté conformité.',
        es: 'Coordinación de verificaciones de calidad, seguimiento de laboratorio y soporte operativo orientado al cumplimiento.'
      },
      points: {
        en: ['Quality verification coordination', 'Pesticide residue monitoring follow-up', 'Accredited laboratory coordination', 'Compliance and export standards verification', 'Technical operational support'],
        fr: ['Coordination des vérifications qualité', 'Suivi du contrôle des résidus de pesticides', 'Coordination avec laboratoires accrédités', 'Vérification de la conformité et des normes export', 'Appui technique opérationnel'],
        es: ['Coordinación de verificaciones de calidad', 'Seguimiento del control de residuos de pesticidas', 'Coordinación con laboratorios acreditados', 'Verificación de conformidad y normas de exportación', 'Soporte técnico operativo']
      }
    },
    s3: {
      title: { en: 'Operations & logistics coordination', fr: 'Coordination opérations & logistique', es: 'Coordinación de operaciones y logística' },
      short: {
        en: 'Shipment monitoring, export documentation coordination and operational follow-up from sourcing to delivery.',
        fr: 'Suivi des expéditions, coordination des documents export et suivi opérationnel du sourcing à la livraison.',
        es: 'Seguimiento de envíos, coordinación de documentación de exportación y seguimiento operativo desde el origen hasta la entrega.'
      },
      points: {
        en: ['Packing and loading supervision', 'Export documentation coordination', 'Shipment dispatch and transit follow-up', 'Delivery confirmation and reporting', 'Issue anticipation and resolution'],
        fr: ['Supervision du conditionnement et du chargement', 'Coordination des documents d’export', 'Suivi de l’expédition et du transit', 'Confirmation de livraison et reporting', 'Anticipation et résolution des incidents'],
        es: ['Supervisión de acondicionamiento y carga', 'Coordinación de documentación de exportación', 'Seguimiento de expedición y tránsito', 'Confirmación de entrega e informes', 'Anticipación y resolución de incidencias']
      }
    }
  },

  /* ------------------------------------------------------------------ WHY */
  why: {
    eyebrow: { en: 'Why AFRONOVA INVEST', fr: 'Pourquoi AFRONOVA INVEST', es: 'Por qué AFRONOVA INVEST' },
    title: { en: 'Sourcing beyond commercial intermediation', fr: 'Le sourcing au-delà de la simple intermédiation', es: 'Abastecimiento más allá de la intermediación comercial' },
    message: {
      en: 'At AFRONOVA INVEST, sourcing goes beyond commercial intermediation. We focus on operational reliability, transparency and long-term business relationships.',
      fr: 'Chez AFRONOVA INVEST, le sourcing dépasse la simple intermédiation commerciale. Nous misons sur la fiabilité opérationnelle, la transparence et des relations durables.',
      es: 'En AFRONOVA INVEST, el abastecimiento va más allá de la intermediación comercial. Apostamos por la fiabilidad operativa, la transparencia y relaciones a largo plazo.'
    },
    items: {
      en: ['Strong Moroccan sourcing network', 'Quality-focused operational approach', 'Reliable export coordination', 'Transparent communication', 'Supply chain follow-up', 'International market understanding'],
      fr: ['Réseau de sourcing marocain solide', 'Approche opérationnelle centrée qualité', 'Coordination export fiable', 'Communication transparente', 'Suivi de la chaîne d’approvisionnement', 'Connaissance des marchés internationaux'],
      es: ['Sólida red de abastecimiento en Marruecos', 'Enfoque operativo centrado en la calidad', 'Coordinación de exportación fiable', 'Comunicación transparente', 'Seguimiento de la cadena de suministro', 'Conocimiento de los mercados internacionales']
    }
  },

  /* ----------------------------------------------------------- CATEGORIES */
  cat: {
    eyebrow: { en: 'Our products', fr: 'Nos produits', es: 'Nuestros productos' },
    title: { en: 'Fresh produce categories', fr: 'Catégories de produits frais', es: 'Categorías de productos frescos' },
    intro: {
      en: 'We support sourcing operations across diversified Moroccan fresh produce categories adapted to international market requirements.',
      fr: 'Nous accompagnons des opérations de sourcing sur des catégories diversifiées de produits frais marocains, adaptées aux exigences des marchés internationaux.',
      es: 'Apoyamos operaciones de abastecimiento en categorías diversificadas de productos frescos marroquíes, adaptadas a los requisitos de los mercados internacionales.'
    },
    all: { en: 'View all products', fr: 'Voir tous les produits', es: 'Ver todos los productos' }
  },

  /* -------------------------------------------------------------- PROCESS */
  process: {
    eyebrow: { en: 'Our process', fr: 'Notre processus', es: 'Nuestro proceso' },
    title: { en: 'End-to-end supply chain coordination', fr: 'Coordination de bout en bout', es: 'Coordinación integral de la cadena' },
    message: {
      en: 'Our operational process is designed to improve transparency, coordination efficiency and shipment reliability.',
      fr: 'Notre processus opérationnel vise à améliorer la transparence, l’efficacité de la coordination et la fiabilité des expéditions.',
      es: 'Nuestro proceso operativo busca mejorar la transparencia, la eficiencia de la coordinación y la fiabilidad de los envíos.'
    },
    steps: {
      en: ['Supplier selection', 'Quality verification', 'Laboratory coordination', 'Packing supervision', 'Export documentation', 'Shipment follow-up', 'Delivery coordination'],
      fr: ['Sélection des fournisseurs', 'Vérification qualité', 'Coordination laboratoire', 'Supervision du conditionnement', 'Documents d’export', 'Suivi d’expédition', 'Coordination de livraison'],
      es: ['Selección de proveedores', 'Verificación de calidad', 'Coordinación de laboratorio', 'Supervisión de acondicionamiento', 'Documentación de exportación', 'Seguimiento del envío', 'Coordinación de entrega']
    }
  },

  /* -------------------------------------------------------------- QUALITY */
  quality: {
    eyebrow: { en: 'Quality & compliance', fr: 'Qualité & conformité', es: 'Calidad y cumplimiento' },
    title: {
      en: 'Quality coordination integrated into every operation',
      fr: 'La coordination qualité intégrée à chaque opération',
      es: 'Coordinación de calidad integrada en cada operación'
    },
    p1: {
      en: 'Quality is at the core of AFRONOVA INVEST’s operational approach. Through collaboration with accredited laboratories and technical partners, we support:',
      fr: 'La qualité est au cœur de l’approche opérationnelle d’AFRONOVA INVEST. En collaboration avec des laboratoires accrédités et des partenaires techniques, nous assurons :',
      es: 'La calidad está en el centro del enfoque operativo de AFRONOVA INVEST. En colaboración con laboratorios acreditados y socios técnicos, apoyamos:'
    },
    points: {
      en: ['Quality verification coordination', 'Pesticide residue monitoring follow-up', 'Compliance verification', 'Export standards coordination', 'Technical operational support'],
      fr: ['Coordination des vérifications qualité', 'Suivi du contrôle des résidus de pesticides', 'Vérification de la conformité', 'Coordination des normes d’export', 'Appui technique opérationnel'],
      es: ['Coordinación de verificaciones de calidad', 'Seguimiento del control de residuos de pesticidas', 'Verificación del cumplimiento', 'Coordinación de normas de exportación', 'Soporte técnico operativo']
    },
    p2: {
      en: 'Our objective is to reduce operational risks and strengthen confidence throughout the sourcing and export process.',
      fr: 'Notre objectif : réduire les risques opérationnels et renforcer la confiance tout au long du processus de sourcing et d’export.',
      es: 'Nuestro objetivo: reducir los riesgos operativos y reforzar la confianza a lo largo de todo el proceso de abastecimiento y exportación.'
    }
  },

  /* -------------------------------------------------------------- NETWORK */
  network: {
    eyebrow: { en: 'International market network', fr: 'Réseau de marchés internationaux', es: 'Red de mercados internacionales' },
    title: { en: 'From Moroccan fields to global markets', fr: 'Des champs marocains aux marchés mondiaux', es: 'Del campo marroquí a los mercados globales' },
    moroccoTitle: { en: 'Morocco network', fr: 'Réseau Maroc', es: 'Red en Marruecos' },
    morocco: {
      en: ['Growers', 'Packing stations', 'Exporters', 'Technical partners'],
      fr: ['Producteurs', 'Stations de conditionnement', 'Exportateurs', 'Partenaires techniques'],
      es: ['Productores', 'Estaciones de acondicionamiento', 'Exportadores', 'Socios técnicos']
    },
    marketsTitle: { en: 'International markets', fr: 'Marchés internationaux', es: 'Mercados internacionales' },
    markets: {
      en: ['European Union', 'United Kingdom', 'North America', 'Africa', 'Asia'],
      fr: ['Union européenne', 'Royaume-Uni', 'Amérique du Nord', 'Afrique', 'Asie'],
      es: ['Unión Europea', 'Reino Unido', 'América del Norte', 'África', 'Asia']
    },
    message: {
      en: 'AFRONOVA INVEST supports sourcing and trade coordination operations across strategic international fresh produce markets.',
      fr: 'AFRONOVA INVEST accompagne des opérations de sourcing et de coordination commerciale sur les marchés internationaux stratégiques des produits frais.',
      es: 'AFRONOVA INVEST acompaña operaciones de abastecimiento y coordinación comercial en mercados internacionales estratégicos de productos frescos.'
    }
  },

  /* ------------------------------------------------------------------ CTA */
  cta: {
    title: {
      en: 'Let’s build reliable sourcing operations together',
      fr: 'Construisons ensemble des opérations de sourcing fiables',
      es: 'Construyamos juntos operaciones de abastecimiento fiables'
    },
    text: {
      en: 'Whether you are an importer, distributor or sourcing partner, AFRONOVA INVEST is ready to support your Moroccan fresh produce operations.',
      fr: 'Que vous soyez importateur, distributeur ou partenaire de sourcing, AFRONOVA INVEST est prêt à accompagner vos opérations sur les produits frais marocains.',
      es: 'Ya sea importador, distribuidor o socio de abastecimiento, AFRONOVA INVEST está listo para acompañar sus operaciones de productos frescos marroquíes.'
    }
  },

  /* ------------------------------------------------------------ ABOUT PAGE */
  about: {
    hero: { en: 'About us', fr: 'À propos', es: 'Nosotros' },
    heroSub: {
      en: 'A Morocco-based sourcing and operational coordination company built around reliability and transparency.',
      fr: 'Une société marocaine de sourcing et de coordination opérationnelle bâtie sur la fiabilité et la transparence.',
      es: 'Una empresa marroquí de abastecimiento y coordinación operativa basada en la fiabilidad y la transparencia.'
    },
    overview: { en: 'Company overview', fr: 'Présentation de la société', es: 'Presentación de la empresa' },
    overviewText: {
      en: 'AFRONOVA INVEST operates at the meeting point between Moroccan agricultural production and international fresh produce demand. Rather than acting as a simple trading intermediary, we position ourselves as an operational partner: we select suppliers, coordinate quality verification, supervise packing and follow shipments through to delivery.',
      fr: 'AFRONOVA INVEST se situe à la rencontre entre la production agricole marocaine et la demande internationale en produits frais. Plutôt qu’un simple intermédiaire commercial, nous nous positionnons comme un partenaire opérationnel : sélection des fournisseurs, coordination des contrôles qualité, supervision du conditionnement et suivi des expéditions jusqu’à la livraison.',
      es: 'AFRONOVA INVEST opera en el punto de encuentro entre la producción agrícola marroquí y la demanda internacional de productos frescos. Más que un simple intermediario comercial, nos posicionamos como socio operativo: selección de proveedores, coordinación de controles de calidad, supervisión del acondicionamiento y seguimiento de los envíos hasta la entrega.'
    },
    missionTitle: { en: 'Mission', fr: 'Mission', es: 'Misión' },
    missionText: {
      en: 'To connect Moroccan fresh produce to global markets with reliability, transparency and quality at every step of the operation.',
      fr: 'Connecter les produits frais marocains aux marchés mondiaux avec fiabilité, transparence et qualité à chaque étape.',
      es: 'Conectar los productos frescos marroquíes con los mercados globales con fiabilidad, transparencia y calidad en cada etapa.'
    },
    visionTitle: { en: 'Vision', fr: 'Vision', es: 'Visión' },
    visionText: {
      en: 'To become a reference operational coordination partner for international buyers sourcing fresh produce from Morocco, supported by digital supply chain visibility.',
      fr: 'Devenir le partenaire de référence en coordination opérationnelle pour les acheteurs internationaux qui sourcent au Maroc, appuyé par une visibilité digitale de la chaîne.',
      es: 'Convertirnos en el socio de referencia en coordinación operativa para compradores internacionales que se abastecen en Marruecos, con visibilidad digital de la cadena.'
    },
    approachTitle: { en: 'Our approach', fr: 'Notre approche', es: 'Nuestro enfoque' },
    approachText: {
      en: 'Every operation follows a structured sequence — supplier selection, quality verification, laboratory coordination, packing supervision, export documentation, shipment follow-up and delivery coordination — so that our clients always know where their order stands.',
      fr: 'Chaque opération suit une séquence structurée — sélection du fournisseur, vérification qualité, coordination laboratoire, supervision du conditionnement, documents d’export, suivi d’expédition et coordination de livraison — pour que nos clients sachent toujours où en est leur commande.',
      es: 'Cada operación sigue una secuencia estructurada — selección de proveedor, verificación de calidad, coordinación de laboratorio, supervisión de acondicionamiento, documentación de exportación, seguimiento del envío y coordinación de entrega — para que nuestros clientes siempre sepan en qué punto está su pedido.'
    },
    expertiseTitle: { en: 'Operational expertise', fr: 'Expertise opérationnelle', es: 'Experiencia operativa' },
    expertiseText: {
      en: 'Our teams work daily with growers, packing stations, laboratories, freight forwarders and export administrations. That field proximity is what allows us to anticipate problems instead of reporting them after the fact.',
      fr: 'Nos équipes travaillent quotidiennement avec producteurs, stations de conditionnement, laboratoires, transitaires et administrations d’export. Cette proximité terrain nous permet d’anticiper les problèmes plutôt que de les constater.',
      es: 'Nuestros equipos trabajan a diario con productores, estaciones de acondicionamiento, laboratorios, transitarios y administraciones de exportación. Esa proximidad al terreno nos permite anticipar los problemas en lugar de constatarlos.'
    },
    partnershipTitle: { en: 'Long-term partnership vision', fr: 'Vision partenariale de long terme', es: 'Visión de asociación a largo plazo' },
    partnershipText: {
      en: 'We build recurring, season-after-season relationships rather than one-off transactions. Consistent volumes, stable quality and honest communication are the basis of that model.',
      fr: 'Nous construisons des relations récurrentes, saison après saison, plutôt que des transactions ponctuelles. Volumes réguliers, qualité stable et communication honnête en sont la base.',
      es: 'Construimos relaciones recurrentes, temporada tras temporada, más que transacciones puntuales. Volúmenes constantes, calidad estable y comunicación honesta son la base.'
    }
  },

  /* --------------------------------------------------------- PRODUCTS PAGE */
  products: {
    hero: { en: 'Our products', fr: 'Nos produits', es: 'Nuestros productos' },
    heroSub: {
      en: 'Diversified Moroccan fresh produce sourced through reliable growers, packing stations and export partners.',
      fr: 'Des produits frais marocains diversifiés, sourcés auprès de producteurs, stations de conditionnement et partenaires export fiables.',
      es: 'Productos frescos marroquíes diversificados, obtenidos a través de productores, estaciones de acondicionamiento y socios de exportación fiables.'
    },
    filterAll: { en: 'All products', fr: 'Tous les produits', es: 'Todos los productos' },
    packaging: { en: 'Packaging', fr: 'Conditionnement', es: 'Acondicionamiento' },
    family: { en: 'Family', fr: 'Famille', es: 'Familia' },
    transport: { en: 'Air · Sea · Road', fr: 'Aérien · Maritime · Routier', es: 'Aéreo · Marítimo · Terrestre' },
    pallets: { en: 'Euro & international pallets', fr: 'Palettes Euro & internationales', es: 'Palés Euro e internacionales' },
    note: {
      en: 'Availability follows the Moroccan seasonal calendar. Packaging formats can be adapted to your specifications — contact us for the current season calendar and available volumes.',
      fr: 'La disponibilité suit le calendrier saisonnier marocain. Les formats de conditionnement peuvent être adaptés à votre cahier des charges — contactez-nous pour le calendrier de la saison et les volumes disponibles.',
      es: 'La disponibilidad sigue el calendario estacional marroquí. Los formatos de acondicionamiento pueden adaptarse a sus especificaciones — contáctenos para el calendario de la temporada y los volúmenes disponibles.'
    },
    count: { en: 'products referenced', fr: 'produits référencés', es: 'productos referenciados' },
    inquire: { en: 'Request this product', fr: 'Demander ce produit', es: 'Solicitar este producto' }
  },

  /* ---------------------------------------------------------- CONTACT PAGE */
  contact: {
    hero: { en: 'Contact', fr: 'Contact', es: 'Contacto' },
    heroSub: {
      en: 'Tell us what you are sourcing — we will come back with availability, packaging options and next steps.',
      fr: 'Dites-nous ce que vous recherchez — nous revenons vers vous avec la disponibilité, les conditionnements et les prochaines étapes.',
      es: 'Cuéntenos qué está buscando — le responderemos con disponibilidad, opciones de acondicionamiento y próximos pasos.'
    },
    formTitle: { en: 'Send an inquiry', fr: 'Envoyer une demande', es: 'Enviar una consulta' },
    name: { en: 'Full name', fr: 'Nom complet', es: 'Nombre completo' },
    company: { en: 'Company', fr: 'Société', es: 'Empresa' },
    email: { en: 'Email', fr: 'E-mail', es: 'Correo electrónico' },
    phone: { en: 'Phone / WhatsApp', fr: 'Téléphone / WhatsApp', es: 'Teléfono / WhatsApp' },
    country: { en: 'Country', fr: 'Pays', es: 'País' },
    product: { en: 'Product of interest', fr: 'Produit recherché', es: 'Producto de interés' },
    message: { en: 'Message', fr: 'Message', es: 'Mensaje' },
    send: { en: 'Send inquiry', fr: 'Envoyer la demande', es: 'Enviar consulta' },
    sent: {
      en: 'Thank you — your inquiry is ready. Your email client should open with the message prepared.',
      fr: 'Merci — votre demande est prête. Votre messagerie devrait s’ouvrir avec le message pré-rempli.',
      es: 'Gracias — su consulta está lista. Su cliente de correo debería abrirse con el mensaje preparado.'
    },
    fallback: {
      en: 'Nothing opened?',
      fr: 'Rien ne s’est ouvert ?',
      es: '¿No se abrió nada?'
    },
    openMail: { en: 'Open the email again', fr: 'Rouvrir l’e-mail', es: 'Abrir el correo de nuevo' },
    copy: { en: 'Copy the message', fr: 'Copier le message', es: 'Copiar el mensaje' },
    copied: { en: 'Copied', fr: 'Copié', es: 'Copiado' },
    orWhatsapp: { en: 'Send on WhatsApp', fr: 'Envoyer sur WhatsApp', es: 'Enviar por WhatsApp' },
    orDirect: {
      en: 'You can also write to us directly at',
      fr: 'Vous pouvez aussi nous écrire directement à',
      es: 'También puede escribirnos directamente a'
    },
    callUs: { en: 'Call us', fr: 'Appelez-nous', es: 'Llámenos' },
    infoTitle: { en: 'Contact details', fr: 'Coordonnées', es: 'Datos de contacto' },
    hours: { en: 'Monday – Friday, 9:00 – 18:00 (GMT+1)', fr: 'Lundi – vendredi, 9h00 – 18h00 (GMT+1)', es: 'Lunes – viernes, 9:00 – 18:00 (GMT+1)' },
    location: { en: 'Morocco', fr: 'Maroc', es: 'Marruecos' },
    mapTitle: { en: 'Where we are', fr: 'Où nous trouver', es: 'Dónde estamos' }
  },

  /* --------------------------------------------------------------- FOOTER */
  footer: {
    tagline: {
      en: 'Connecting Moroccan fresh produce to global markets with reliability, transparency and quality at every step.',
      fr: 'Connecter les produits frais marocains aux marchés mondiaux avec fiabilité, transparence et qualité à chaque étape.',
      es: 'Conectar los productos frescos marroquíes con los mercados globales con fiabilidad, transparencia y calidad en cada paso.'
    },
    company: { en: 'Company', fr: 'Société', es: 'Empresa' },
    productsCol: { en: 'Products', fr: 'Produits', es: 'Productos' },
    contactCol: { en: 'Contact', fr: 'Contact', es: 'Contacto' },
    follow: { en: 'Follow us', fr: 'Nous suivre', es: 'Síguenos' },
    rights: { en: 'All rights reserved.', fr: 'Tous droits réservés.', es: 'Todos los derechos reservados.' },
    legal: { en: 'Legal notice', fr: 'Mentions légales', es: 'Aviso legal' },
    privacy: { en: 'Privacy policy', fr: 'Politique de confidentialité', es: 'Política de privacidad' }
  },

  /* --------------------------------------------------------------- COMMON */
  common: {
    stats: {
      growers: { en: 'Growers & suppliers in network', fr: 'Producteurs & fournisseurs du réseau', es: 'Productores y proveedores en red' },
      categories: { en: 'Product references', fr: 'Références produits', es: 'Referencias de producto' },
      markets: { en: 'Target export markets', fr: 'Marchés export ciblés', es: 'Mercados de exportación objetivo' },
      quality: { en: 'Quality & compliance focus', fr: 'Focus qualité & conformité', es: 'Enfoque en calidad y cumplimiento' }
    },
    backHome: { en: 'Back to home', fr: 'Retour à l’accueil', es: 'Volver al inicio' },
    notFound: { en: 'Page not found', fr: 'Page introuvable', es: 'Página no encontrada' }
  }
}

export default t
