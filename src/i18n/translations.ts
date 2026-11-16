import { CigarLine } from "../types/cigar";

export type Language = "es" | "en";

export interface CigarTranslation {
  tagline?: string;
  description?: string;
  badge?: string;
  categoryName?: string;
  wrapper?: string;
  binderFiller?: string;
  aging?: string;
  body?: string;
  notes?: string[];
}

export const CIGAR_TRANSLATIONS_EN: Record<string, CigarTranslation> = {
  "caoba-diamante": {
    tagline: "Deep character and a refined finish",
    description:
      "A Mexican San Andrés wrapper enveloping Dominican Criollo filler for an intense, earthy experience with dark chocolate undertones.",
    categoryName: "Premium Cigars",
    wrapper: "San Andrés",
    binderFiller: "Selected Dominican Tobaccos",
    aging: "> 3 years",
    body: "Medium - Full",
    notes: ["Rich Earth", "Dark Chocolate", "Warm Spices"],
  },
  "caoba-platino": {
    tagline: "Perfect balance of intensity and elegance",
    description:
      "Featuring a matured Connecticut Colorado wrapper, this line offers a medium strength distinguished by notes of mild pepper and rich cocoa.",
    categoryName: "Premium Cigars",
    wrapper: "Connecticut Maduro",
    binderFiller: "Selected Dominican Tobaccos",
    aging: "> 3 years",
    body: "Medium",
    notes: ["Mild Pepper", "Rich Cocoa", "Nuts"],
  },
  "caoba-oro": {
    tagline: "Smooth, creamy elegance for discerning palates",
    description:
      "A masterful blend with a selected Connecticut wrapper, offering a silky, mild smoke full of delicate cream and cedar nuances.",
    categoryName: "Premium Cigars",
    wrapper: "Connecticut Shade",
    binderFiller: "Selected Dominican Tobaccos",
    aging: "> 2 years",
    body: "Mild - Medium",
    notes: ["Cream", "Walnut", "Noble Cedar", "Vanilla"],
  },
  quisqueyano: {
    tagline: "Tribute to the ancestral homeland of tobacco",
    description:
      "Crafted with a select Yamasá wrapper, evoking authentic Dominican flavors such as roasted coffee and freshly baked bread.",
    categoryName: "Selection Cigars",
    wrapper: "Yamasá",
    binderFiller: "Selected Dominican Tobaccos",
    aging: "> 3 years",
    body: "Medium",
    notes: ["Rich Earth", "Roasted Coffee", "Bread Crust"],
  },
  magnifico: {
    tagline: "Complex body and rich nuances",
    description:
      "A masterful combination of a San Andrés wrapper with an Ecuadorian Habano binder and a blend of Dominican and Nicaraguan fillers.",
    categoryName: "Selection Cigars",
    wrapper: "Light San Andrés",
    binderFiller: "Selected Dominican Tobaccos",
    aging: "> 4 years",
    body: "Medium",
    notes: ["Toasted Wood", "Toasted Caramel", "Fine Leather"],
  },
  unique: {
    tagline: "Distinctive edition with aromatic smoothness",
    description:
      "Light-toned Premium Connecticut wrapper with aromatic notes of toasted almonds and sweet tea.",
    categoryName: "Selection Cigars",
    wrapper: "Connecticut",
    binderFiller: "Selected Dominican Tobaccos",
    aging: "> 3 years",
    body: "Mild - Medium",
    notes: ["Toasted Almond", "Vanilla", "Sweet Tea"],
  },
  supreme: {
    tagline: "Natural sweetness and incomparable finesse",
    description:
      "A delicate blend of aged tobaccos with sweet aromas of wild honey and butter, ideal for moments of refined relaxation.",
    categoryName: "Selection Cigars",
    wrapper: "Light Habano",
    binderFiller: "Selected Dominican Tobaccos",
    aging: "> 2 years",
    body: "Mild",
    notes: ["Wild Honey", "Butter", "Fine Wood"],
  },
  "gran-reserva": {
    tagline: "Luxury and tradition in long-aged leaves",
    description:
      "The pinnacle of aging: selected leaves from special harvests rested for over 5 years for a mature, sophisticated smoke.",
    badge: "Vintage",
    categoryName: "Selection Cigars",
    wrapper: "Light San Andrés",
    binderFiller: "Selected Dominican Tobaccos",
    aging: "> 5 years",
    body: "Aged Full",
    notes: ["Aged Oak", "Cured Tobacco", "Dried Fruits"],
  },
  toa: {
    tagline: "Ancestral heritage of Taíno roots",
    description:
      "Inspired by the Taíno word for tobacco, crafted with a 100% native Criollo wrapper featuring herbal and spicy flavors.",
    categoryName: "Grand Selection & Limited Editions",
    wrapper: "San Andrés Maduro",
    binderFiller: "Selected Dominican Tobaccos",
    aging: "> 3 years",
    body: "Medium - Full",
    notes: ["Native Spices", "Wild Herbs", "Guayacán Wood"],
  },
  "origen-dominicano": {
    tagline: "Pure intensity born in the finest valleys of the Dominican Republic",
    description:
      "Dark San Andrés wrapper combined with potent Dominican Ligero, designed for smokers seeking full body and black pepper notes.",
    badge: "Limited Edition",
    categoryName: "Grand Selection & Limited Editions",
    wrapper: "Dark San Andrés",
    binderFiller: "Selected Dominican Tobaccos",
    aging: "> 4 years",
    body: "Intense Full",
    notes: ["Espresso", "Pure Cocoa", "Black Pepper"],
  },
  bohio: {
    tagline: "New Exclusive Large Ring Gauge Edition",
    description:
      "A distinguished handcrafted creation in a special wide-ring edition. Presented in an elegant white case with silver and gold accents, 100% hand-rolled from a superior selection of aged leaves.",
    badge: "New Edition",
    categoryName: "Grand Selection & Limited Editions",
    wrapper: "Dark Habano Colorado",
    binderFiller: "Selected Dominican Tobaccos",
    aging: "> 3 years",
    body: "Medium - Full",
    notes: ["Toasted Cedar", "Noble Walnut", "Cocoa", "Spices"],
  },
  summum: {
    tagline: "The masterpiece of 30 years of craftsmanship",
    description:
      "Family Reserve Selection harvest with leaves aged for over 5 years. An unforgettable experience with notes of molasses and aged cedar.",
    badge: "Limited Edition",
    categoryName: "Grand Selection & Limited Editions",
    wrapper: "Habano Colorado",
    binderFiller: "Selected Dominican Tobaccos",
    aging: "> 5 years",
    body: "Complex Full",
    notes: ["Molasses", "Aged Cedar", "Pure Chocolate", "Toasted Walnut"],
  },
};

export function localizeCigar(cigar: CigarLine, lang: Language): CigarLine {
  if (lang === "es") return cigar;
  const tr = CIGAR_TRANSLATIONS_EN[cigar.id];
  if (!tr) return cigar;
  return {
    ...cigar,
    tagline: tr.tagline ?? cigar.tagline,
    description: tr.description ?? cigar.description,
    badge: tr.badge ?? cigar.badge,
    categoryName: tr.categoryName ?? cigar.categoryName,
    wrapper: tr.wrapper ?? cigar.wrapper,
    binderFiller: tr.binderFiller ?? cigar.binderFiller,
    aging: tr.aging ?? cigar.aging,
    body: tr.body ?? cigar.body,
    notes: tr.notes ?? cigar.notes,
  };
}

export const TRANSLATIONS = {
  es: {
    nav: {
      home: "INICIO",
      history: "HISTORIA Y PRODUCCIÓN",
      lines: "LÍNEAS DE CIGARROS",
      contact: "CONTACTO",
    },
    home: {
      eyebrow: "República Dominicana • Desde 1992",
      title: "Artesanos de Labores de Tabaco",
      subtitle:
        "Cigarros de liga exclusiva elaborados 100% a mano por experimentados maestros torcedores en el casco histórico de Santo Domingo.",
      exploreBtn: "Explorar Colección",
      historyBtn: "Nuestra Historia",
      stats: {
        years: "Años de Tradición",
        handmade: "Hecho a Mano",
        exclusiveLines: "Líneas Exclusivas",
        bestValleysNum: "Rep. Dom",
        bestValleysLabel: "Mejores Vegas",
      },
      featuredTitle: "Colección Emblemática",
      featuredSubtitle:
        "Cada línea posee una personalidad distintiva, resultado de añejamientos prolongados y selecciones de capa de clase mundial.",
      viewAllLines: (count: number) => `Ver Todas las ${count} Líneas →`,
      heritageEyebrow: "Legado & Artesanía",
      heritageTitle: "Tradición en Cada Hoja",
      heritageP1:
        "Nacidos en la emblemática Plaza Colón de la Zona Colonial de Santo Domingo en 1992, Caoba Cigars mantiene viva la herencia tabacalera de Don Julio Pérez González y Doña Alicia Lama Handal.",
      heritageP2:
        "Nuestra Boutique de Fabricación permite contemplar el arte del torcido a mano y el empaque cuidadoso en cajas de cedro.",
      heritageBtn: "Conocer Nuestra Historia Completa",
      heritageImgAlt: "Fábrica de Caoba Cigars en Santo Domingo",
    },
    history: {
      eyebrow: "Tradición & Meticuloso Saber Hacer",
      title: "Nuestra Historia y Producción",
      subtitle:
        "Tres décadas dedicadas a la búsqueda de la perfección en cada hoja de tabaco Dominicano.",
      originsTitle: "Orígenes de Caoba Cigars",
      originsP1_part1:
        "Caoba Cigars es una empresa familiar de labores de tabaco situada en el corazón de Santo Domingo en la emblemática Plaza Colón. Nace de la pasión por los cigarros de ",
      originsP1_part2:
        ", emigrante de origen español, que contrajo matrimonio con la empresaria Dominicana ",
      originsP1_part3:
        ", quien se estableció durante 66 años en República Dominicana e inició en 1992 la producción de los cigarros que hoy dan nombre a nuestra marca.",
      originsP2:
        "Don Julio era un enamorado de la madera noble y como tal fue propietario de un taller artesanal de esculturas de caoba en Santo Domingo, lo que le llevó a nombrar nuestra marca. Actualmente, Caoba Cigars se encuentra registrada en República Dominicana, Estados Unidos y la Unión Europea.",
      originsP3_part1:
        "Inicialmente, Caoba Cigars tenía su sede en Villa Faro (fábrica que aún conservamos). En la actualidad, nuestra ",
      originsP3_em: "Boutique de Fabricación",
      originsP3_part2:
        " se encuentra en la Zona Colonial, frente a la Catedral Primada de América, donde nuestros clientes contemplan el proceso de producción enteramente manual de nuestros cigarros.",
      dnaQuote: "Nuestro ADN: “Pasión por la excelencia”.",
      founderRole: "Fundador de Caoba Cigars",
      founderAlt: "Don Julio Pérez González - Fundador Caoba Cigars",
      craftTitle: "Elaboración 100% Artesanal & de Alta Regalía",
      craftP1_part1:
        "Todo el proceso que sigue nuestra hoja de tabaco desde su cosecha está avalado por más de 30 años de buen hacer en las fértiles vegas de ",
      craftP1_strong: "la República Dominicana",
      craftP1_part2:
        ". El control de calidad en cada uno de los pasos es constante, riguroso y tradicional.",
      craftP2:
        "Los procesos de secado, escogida de la hoja, despalille, en puño y torcido terminan en un producto de aroma excelso para luego empacarlo con mimo en hermosas cajas de cedro.",
      craftAlt: "Maestros Torcedores de Caoba Cigars",
      limitedTitle: "Edición y Producción Seleccionada",
      limitedP1:
        "Como las más exclusivas producciones artesanales del mundo, Caoba mantiene una producción estrictamente limitada. No por falta de demanda, sino porque Caoba no compromete su calidad, manteniéndose fiel a su herencia.",
      limitedP2:
        "Elaboramos nuestros cigarros a partir de diversas semillas, todas cultivadas en la República Dominicana, específicamente en las diferentes Vegas tabaqueras y garantizamos un riguroso control desde el origen.",
      limitedP3:
        "Para las capas, utilizamos variedades criollas Dominicanas como la Yamasá, así como hoja mexicana San Andrés, capa Habana y capa Connecticut seleccionadas para ofrecer un perfil de sabor y aroma equilibrados.",
      discoverBtn: (count: number) => `Descubrir las ${count} Líneas →`,
      limitedAlt: "Producción Limitada y Añejamiento Caoba",
    },
    lines: {
      eyebrow: "Colección Exclusiva de Puros Dominicanos",
      title: "Líneas de Cigarros",
      showcaseBadge: "✦ Maestría y Arte en la Alta Regalía ✦",
      showcaseAlt: "Caoba Cigars - Maestría y Arte en la Alta Regalía",
      filterAll: (count: number) => `Todas las Líneas (${count})`,
      filterPremium: "Cigarros Premium",
      filterSeleccion: "Cigarros Selección",
      filterGranSeleccion: "Gran Selección & Ediciones Limitadas",
    },
    cigar: {
      limitedEdition: "Edición Limitada",
      viewDetail: "Ver Detalle de Línea →",
      backToCollections: "← Volver a Colecciones",
      flavorAndStrength: "Perfil de Sabor & Fortaleza",
      strengthLabel: "Fortaleza",
      wrapperLabel: "Capa:",
      binderFillerLabel: "Tripa & Capote:",
      defaultBinderFiller: "Selección de tabacos Dominicanos",
      agingLabel: "Añejamiento:",
      vitolasTitle: "Vitolas y Formatos",
      vitolaCol: "Vitola",
      dimensionsCol: "Dimensiones",
      availablePackaging: "Empaques disponibles:",
      cigarsPerBox: (pkg: string) => `${pkg} cigarros por caja / estuche`,
    },
    contact: {
      eyebrow: "Atención Directa & Boutique de Fabricación",
      title: "Contáctanos & Pedidos",
      subtitle:
        "Estamos a su entera disposición para pedidos personalizados, atención a clientes y visitas a nuestra boutique en el casco histórico de Santo Domingo.",
      fastAttention: "● Atención Rápida",
      officialChannel: "Canal Oficial de Pedidos",
      whatsappTitle: "Haz tu Pedido Directo por WhatsApp",
      whatsappDesc_part1: "Escríbenos directamente al ",
      whatsappDesc_part2:
        " para pedidos de cajas, vitolas especiales y envíos nacionales e internacionales.",
      whatsappBtn: "Pedir por WhatsApp",
      defaultWhatsAppMsg: "Hola, tengo interés en realizar un pedido de sus tabacos.",
      customWhatsAppPrefix: (name: string) => `Hola, mi nombre es ${name || "Cliente"}.`,
      boutiqueTitle: "Boutique & Fábrica",
      boutiquePlace: "Centro Comercial Colón (Plaza Colón)",
      boutiqueStreet: "Calle El Conde #101, Local #9",
      boutiqueCity: "Zona Colonial, Santo Domingo, República Dominicana",
      boutiqueRef: "Frente a la Catedral Primada de América",
      linesTitle: "Líneas de Atención",
      whatsappOrdersLabel: "WhatsApp Pedidos:",
      phoneBoutiqueLabel: "Teléfono Boutique:",
      emailLabel: "Email:",
      hoursTitle: "Horarios de Atención",
      hoursMonSatLabel: "Lunes a Sábado:",
      hoursMonSatVal: "9:00 AM – 7:00 PM",
      hoursSunLabel: "Domingos & Feriados:",
      hoursSunVal: "10:00 AM – 5:00 PM",
      formTitle: "Envíanos un Mensaje",
      formSubtitle:
        "Complete el formulario para solicitar información sobre pedidos, vitolas o consultas generales.",
      receivedTitle: "¡Mensaje Recibido!",
      receivedDesc_part1: "Gracias ",
      receivedDesc_part2: ". Nos pondremos en contacto con usted a la mayor brevedad.",
      sendAnotherBtn: "Enviar otro mensaje",
      openWhatsAppBtn: "Abrir en WhatsApp →",
      nameLabel: "Nombre Completo *",
      namePlaceholder: "Ej. Juan Pérez",
      emailInputLabel: "Correo Electrónico *",
      emailPlaceholder: "correo@ejemplo.com",
      phoneInputLabel: "Teléfono / WhatsApp",
      subjectLabel: "Interés / Motivo de Contacto",
      subjectOptions: {
        order: "Realizar un Pedido de Cigarros",
        exclusive: "Consulta sobre Líneas Exclusivas",
        visit: "Visita a la Boutique / Fábrica",
        wholesale: "Distribución Mayorista / Internacional",
        other: "Otro",
      },
      messageLabel: "Mensaje *",
      messagePlaceholder: "Escriba aquí los detalles de su pedido o consulta...",
      submitBtn: "Enviar Mensaje",
      sendViaWhatsAppBtn: "Enviar por WhatsApp",
      mapEyebrow: "Ubicación Privilegiada",
      mapTitle: "Visítanos en Plaza Colón, Santo Domingo",
      mapIframeTitle: "Ubicación de Caoba Cigars en Plaza Colón, Santo Domingo",
    },
    footer: {
      locationHeader: "Santo Domingo • República Dominicana",
      aboutTitle: "Sobre Caoba",
      aboutText:
        "Tradición y excelencia artesanal Dominicana desde 1992. Elaborados 100% a mano por experimentados maestros torcedores en la mítica Plaza Colón de la Zona Colonial.",
      navTitle: "Navegación",
      navHome: "Inicio",
      navLines: (count: number) => `Líneas de Cigarros (${count})`,
      navHistory: "Historia y Producción",
      navContact: "Contacto & Pedidos",
      boutiqueTitle: "Boutique & Ubicación",
      boutiqueLine1: "C/ El Conde #101, Local #9",
      boutiqueLine2: "Centro Comercial Colón (Plaza Colón)",
      boutiqueLine3: "Zona Colonial, Santo Domingo, R.D.",
      contactPaymentsTitle: "Contacto & Pagos",
      disclaimer: (year: number) =>
        `Los impuestos establecidos por el país de destino son a cargo y responsabilidad exclusiva del comprador. © ${year} Caoba Cigars. Todos los derechos reservados.`,
    },
  },
  en: {
    nav: {
      home: "HOME",
      history: "HISTORY & PRODUCTION",
      lines: "CIGAR LINES",
      contact: "CONTACT",
    },
    home: {
      eyebrow: "Dominican Republic • Since 1992",
      title: "Artisans of Fine Tobacco",
      subtitle:
        "Exclusive blend cigars crafted 100% by hand by master cigar rollers in the historic heart of Santo Domingo.",
      exploreBtn: "Explore Collection",
      historyBtn: "Our Story",
      stats: {
        years: "Years of Tradition",
        handmade: "Handcrafted",
        exclusiveLines: "Exclusive Lines",
        bestValleysNum: "Dom. Rep.",
        bestValleysLabel: "Finest Valleys",
      },
      featuredTitle: "Signature Collection",
      featuredSubtitle:
        "Each line possesses a distinctive personality, resulting from extended aging and world-class wrapper selections.",
      viewAllLines: (count: number) => `View All ${count} Lines →`,
      heritageEyebrow: "Legacy & Craftsmanship",
      heritageTitle: "Tradition in Every Leaf",
      heritageP1:
        "Born in the emblematic Plaza Colón in the Colonial Zone of Santo Domingo in 1992, Caoba Cigars keeps alive the tobacco heritage of Don Julio Pérez González and Doña Alicia Lama Handal.",
      heritageP2:
        "Our Manufacturing Boutique invites visitors to witness the art of hand-rolling and careful packaging in cedar boxes.",
      heritageBtn: "Discover Our Full Story",
      heritageImgAlt: "Caoba Cigars Factory in Santo Domingo",
    },
    history: {
      eyebrow: "Tradition & Meticulous Savoir-Faire",
      title: "Our History & Production",
      subtitle:
        "Three decades dedicated to the pursuit of perfection in every Dominican tobacco leaf.",
      originsTitle: "Origins of Caoba Cigars",
      originsP1_part1:
        "Caoba Cigars is a family-owned tobacco company located in the heart of Santo Domingo at the emblematic Plaza Colón. It was born from the passion for cigars of ",
      originsP1_part2:
        ", a Spanish emigrant who married Dominican businesswoman ",
      originsP1_part3:
        ", settling in the Dominican Republic for 66 years and beginning in 1992 the production of the cigars that today bear our brand's name.",
      originsP2:
        "Don Julio was a lover of fine noble wood and owned an artisanal mahogany sculpture workshop in Santo Domingo, which inspired him to name our brand (“Caoba” means Mahogany). Today, Caoba Cigars is a registered trademark in the Dominican Republic, the United States, and the European Union.",
      originsP3_part1:
        "Initially, Caoba Cigars was headquartered in Villa Faro (a factory we still preserve). Today, our ",
      originsP3_em: "Manufacturing Boutique",
      originsP3_part2:
        " is located in the Colonial Zone, right across from the First Cathedral of the Americas, where our clients can witness the entirely hand-rolled production process of our cigars.",
      dnaQuote: "Our DNA: “Passion for Excellence”.",
      founderRole: "Founder of Caoba Cigars",
      founderAlt: "Don Julio Pérez González - Founder of Caoba Cigars",
      craftTitle: "100% Artisanal & High-Regalia Craftsmanship",
      craftP1_part1:
        "Every step our tobacco leaf follows from harvest is backed by over 30 years of expertise in the fertile valleys of ",
      craftP1_strong: "the Dominican Republic",
      craftP1_part2:
        ". Quality control at every stage is constant, rigorous, and traditional.",
      craftP2:
        "The processes of curing, leaf sorting, stemming, bunching, and rolling culminate in a product of sublime aroma, carefully packed in beautiful cedar boxes.",
      craftAlt: "Master Cigar Rollers at Caoba Cigars",
      limitedTitle: "Selected Edition & Limited Production",
      limitedP1:
        "Like the most exclusive artisanal productions in the world, Caoba maintains a strictly limited production—not for lack of demand, but because Caoba never compromises on quality, remaining faithful to its heritage.",
      limitedP2:
        "We craft our cigars from diverse tobacco seeds, all grown in the Dominican Republic across its finest tobacco valleys, ensuring rigorous quality control from the very origin.",
      limitedP3:
        "For our wrappers, we use native Dominican Criollo varieties such as Yamasá, as well as Mexican San Andrés leaf, Habano wrapper, and selected Connecticut wrapper to deliver a balanced flavor and aroma profile.",
      discoverBtn: (count: number) => `Discover All ${count} Lines →`,
      limitedAlt: "Limited Production and Aging at Caoba",
    },
    lines: {
      eyebrow: "Exclusive Collection of Dominican Cigars",
      title: "Cigar Lines",
      showcaseBadge: "✦ Mastery & Art in Fine Cigars ✦",
      showcaseAlt: "Caoba Cigars - Mastery & Art in Fine Cigars",
      filterAll: (count: number) => `All Lines (${count})`,
      filterPremium: "Premium Cigars",
      filterSeleccion: "Selection Cigars",
      filterGranSeleccion: "Grand Selection & Limited Editions",
    },
    cigar: {
      limitedEdition: "Limited Edition",
      viewDetail: "View Line Details →",
      backToCollections: "← Back to Collections",
      flavorAndStrength: "Flavor Profile & Strength",
      strengthLabel: "Strength",
      wrapperLabel: "Wrapper:",
      binderFillerLabel: "Binder & Filler:",
      defaultBinderFiller: "Selected Dominican Tobaccos",
      agingLabel: "Aging:",
      vitolasTitle: "Vitolas & Formats",
      vitolaCol: "Vitola",
      dimensionsCol: "Dimensions",
      availablePackaging: "Available packaging:",
      cigarsPerBox: (pkg: string) => `${pkg} cigars per box / pack`,
    },
    contact: {
      eyebrow: "Direct Assistance & Manufacturing Boutique",
      title: "Contact Us & Orders",
      subtitle:
        "We are at your complete disposal for custom orders, customer service, and visits to our boutique in the historic center of Santo Domingo.",
      fastAttention: "● Fast Response",
      officialChannel: "Official Ordering Channel",
      whatsappTitle: "Place Your Order Directly via WhatsApp",
      whatsappDesc_part1: "Message us directly at ",
      whatsappDesc_part2:
        " for box orders, special vitolas, and domestic or international shipping.",
      whatsappBtn: "Order via WhatsApp",
      defaultWhatsAppMsg: "Hello, I am interested in placing an order for your cigars.",
      customWhatsAppPrefix: (name: string) => `Hello, my name is ${name || "Customer"}.`,
      boutiqueTitle: "Boutique & Factory",
      boutiquePlace: "Centro Comercial Colón (Plaza Colón)",
      boutiqueStreet: "Calle El Conde #101, Suite #9",
      boutiqueCity: "Colonial Zone, Santo Domingo, Dominican Republic",
      boutiqueRef: "Across from the First Cathedral of the Americas",
      linesTitle: "Contact Channels",
      whatsappOrdersLabel: "WhatsApp Orders:",
      phoneBoutiqueLabel: "Boutique Phone:",
      emailLabel: "Email:",
      hoursTitle: "Opening Hours",
      hoursMonSatLabel: "Monday to Saturday:",
      hoursMonSatVal: "9:00 AM – 7:00 PM",
      hoursSunLabel: "Sundays & Holidays:",
      hoursSunVal: "10:00 AM – 5:00 PM",
      formTitle: "Send Us a Message",
      formSubtitle:
        "Fill out the form to request information about orders, vitolas, or general inquiries.",
      receivedTitle: "Message Received!",
      receivedDesc_part1: "Thank you, ",
      receivedDesc_part2: ". We will get in touch with you as soon as possible.",
      sendAnotherBtn: "Send another message",
      openWhatsAppBtn: "Open in WhatsApp →",
      nameLabel: "Full Name *",
      namePlaceholder: "e.g. John Smith",
      emailInputLabel: "Email Address *",
      emailPlaceholder: "email@example.com",
      phoneInputLabel: "Phone / WhatsApp",
      subjectLabel: "Interest / Reason for Contact",
      subjectOptions: {
        order: "Place a Cigar Order",
        exclusive: "Inquiry About Exclusive Lines",
        visit: "Boutique / Factory Visit",
        wholesale: "Wholesale / International Distribution",
        other: "Other",
      },
      messageLabel: "Message *",
      messagePlaceholder: "Write the details of your order or inquiry here...",
      submitBtn: "Send Message",
      sendViaWhatsAppBtn: "Send via WhatsApp",
      mapEyebrow: "Prime Location",
      mapTitle: "Visit Us at Plaza Colón, Santo Domingo",
      mapIframeTitle: "Caoba Cigars Location at Plaza Colón, Santo Domingo",
    },
    footer: {
      locationHeader: "Santo Domingo • Dominican Republic",
      aboutTitle: "About Caoba",
      aboutText:
        "Dominican artisanal tradition and excellence since 1992. 100% handcrafted by experienced master cigar rollers in the iconic Plaza Colón of the Colonial Zone.",
      navTitle: "Navigation",
      navHome: "Home",
      navLines: (count: number) => `Cigar Lines (${count})`,
      navHistory: "History & Production",
      navContact: "Contact & Orders",
      boutiqueTitle: "Boutique & Location",
      boutiqueLine1: "Calle El Conde #101, Suite #9",
      boutiqueLine2: "Centro Comercial Colón (Plaza Colón)",
      boutiqueLine3: "Colonial Zone, Santo Domingo, D.R.",
      contactPaymentsTitle: "Contact & Payments",
      disclaimer: (year: number) =>
        `Taxes established by the destination country are the sole responsibility of the buyer. © ${year} Caoba Cigars. All rights reserved.`,
    },
  },
} as const;

export type TranslationDictionary = (typeof TRANSLATIONS)[Language];
