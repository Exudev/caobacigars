const fs = require("fs");
const path = require("path");

const lineasHtml = fs.readFileSync(
  path.join(__dirname, "src", "lineas", "index.html"),
  "utf8"
);

// Metadata map for flavor notes, strength, wrapper type, and extra gallery images
const cigarMetadata = {
  "caoba-oro": {
    strength: 2,
    wrapper: "Connecticut",
    binder: "Dominicano",
    filler: "Dominicana",
    aging: "> 2 años",
    body: "Suave - Medio",
    notes: ["Crema", "Nuez", "Cedro Noble", "Vainilla"],
    packaging: "20 / 12 / 6 / 3",
    vitolas: [
      { name: "Espléndido", dimension: '6 3/4" x 47' },
      { name: "Torpedo", dimension: '6" x 52' },
      { name: "Robusto", dimension: '5" x 50' },
    ],
    gallery: [
      "Caoba-Oro-Robusto1.png",
      "Caoba-Oro-Robusto2.png",
      "Caoba-Oro-Torpedos4.png",
    ],
  },
  "caoba-platino": {
    strength: 3,
    wrapper: "Connecticut Colorado",
    binder: "Dominicano",
    filler: "Dominicana",
    aging: "> 3 años",
    body: "Medio",
    notes: ["Pimiento Suave", "Cacao Rico", "Frutos Secos"],
    packaging: "20 / 12 / 6 / 3",
    vitolas: [
      { name: "Espléndido", dimension: '6 3/4" x 47' },
      { name: "Torpedo", dimension: '6" x 52' },
      { name: "Robusto", dimension: '5" x 50' },
    ],
    gallery: [
      "Caoba-Platino-Esplendidos1.png",
      "Caoba-Platino-Robusto1.png",
      "Caoba-Platino-Torpedo1.png",
    ],
  },
  "caoba-diamante": {
    strength: 4,
    wrapper: "San Andrés (México)",
    binder: "Dominicano",
    filler: "Dominicana Criolla",
    aging: "> 3 años",
    body: "Medio - Fuerte",
    notes: ["Tierra Fértil", "Chocolate Negro", "Especias Cálidas"],
    packaging: "20 / 12 / 6 / 3",
    vitolas: [
      { name: "Espléndido", dimension: '6 3/4" x 47' },
      { name: "Torpedo", dimension: '6" x 52' },
      { name: "Robusto", dimension: '5" x 50' },
    ],
    gallery: ["Diamante-1_cpweHj.png", "diamante.png"],
  },
  supreme: {
    strength: 2,
    wrapper: "Selección Dominicana",
    binder: "Dominicano",
    filler: "Dominicana",
    aging: "> 2 años",
    body: "Suave",
    notes: ["Miel Silvestre", "Mantequilla", "Madera Fina"],
    packaging: "20 / 12 / 6 / 3",
    vitolas: [
      { name: "Toro", dimension: '6" x 52' },
      { name: "Robusto", dimension: '5" x 50' },
      { name: "Torpedo", dimension: '6" x 52' },
    ],
    gallery: ["Caoba-Supreme1.png", "Caoba-Supreme2.png", "Caoba-Supreme4.png"],
  },
  magnifico: {
    strength: 3,
    wrapper: "San Andrés Nacional",
    binder: "Habano Ecuador",
    filler: "Dominicana & Nicaragüense",
    aging: "> 4 años",
    body: "Medio",
    notes: ["Madera Tostada", "Caramelo Tostado", "Cuero Fino"],
    packaging: "20 / 12 / 6 / 3",
    vitolas: [
      { name: "Toro", dimension: '6" x 54' },
      { name: "Torpedo", dimension: '6" x 52' },
      { name: "Robusto", dimension: '5" x 52' },
    ],
    gallery: ["Caoba-Magnificos-Toro1.png", "Caoba-Magnificos-Torpedo2.png"],
  },
  unique: {
    strength: 2,
    wrapper: "Connecticut Premium",
    binder: "Dominicano",
    filler: "Selección Especial Dominicana",
    aging: "> 3 años",
    body: "Suave - Medio",
    notes: ["Almendra Tostada", "Vainilla", "Té Dulce"],
    packaging: "20 / 12 / 6 / 3",
    vitolas: [
      { name: "Unique Gold", dimension: '6" x 52' },
      { name: "Unique Silver", dimension: '6" x 50' },
    ],
    gallery: ["Caoba-Unique-gold1.png", "Caoba-Unique-Silver1.png"],
  },
  quisqueyano: {
    strength: 3,
    wrapper: "Yamasá",
    binder: "Dominicano",
    filler: "Dominicana Tradicional",
    aging: "> 3 años",
    body: "Medio",
    notes: ["Tierra Fértil", "Café Tostado", "Corteza de Pan"],
    packaging: "20 / 12 / 6 / 3",
    vitolas: [
      { name: "Espléndido", dimension: '6 3/4" x 47' },
      { name: "Toro", dimension: '6" x 52' },
      { name: "Robusto", dimension: '5" x 50' },
    ],
    gallery: ["Caoba-Quisqueyanos-Esplendidos1.png", "Caoba-Quisqueyanos-Toro2.png"],
  },
  "gran-reserva": {
    strength: 4,
    wrapper: "Añejada Especial (Vintage)",
    binder: "Dominicano",
    filler: "Selección Privada Dominicana",
    aging: "> 5 años",
    body: "Fuerte Añejado",
    notes: ["Roble Antiguo", "Tabaco Curado", "Frutas Secas"],
    packaging: "20 / 12 / 6 / 3",
    vitolas: [
      { name: "Gran Reserva Churchill", dimension: '7" x 50' },
      { name: "Gran Reserva Torpedo", dimension: '6 1/4" x 52' },
      { name: "Gran Reserva Robusto", dimension: '5 1/2" x 52' },
    ],
    gallery: ["gran-reserva-1_osIOzT.png"],
  },
  "origen-dominicano": {
    strength: 5,
    wrapper: "San Andrés Oscura",
    binder: "Dominicano",
    filler: "Ligero Dominicano",
    aging: "> 4 años",
    body: "Fuerte Intenso",
    notes: ["Espresso", "Cacao Puro", "Pimienta Negra"],
    packaging: "20 / 12 / 6 / 3",
    vitolas: [
      { name: "Don Juan", dimension: '6" x 54' },
      { name: "Don Julio", dimension: '5 1/2" x 52' },
      { name: "Don Manuel", dimension: '6 1/2" x 54' },
      { name: "Don Mario", dimension: '5" x 50' },
    ],
    gallery: [
      "Caoba-Origen-Dominicano-Don-Juan1.png",
      "Caoba-Origen-Dominicano-Don-Julio1.png",
      "Caoba-Origen-Dominicano-Don-Manuel1.png",
    ],
  },
  toa: {
    strength: 4,
    wrapper: "Taíno Criollo 100%",
    binder: "Dominicano",
    filler: "Autóctona Dominicana",
    aging: "> 3 años",
    body: "Medio - Fuerte",
    notes: ["Especias Nativas", "Hierbas Silvestres", "Madera Guayacán"],
    packaging: "20 / 12 / 6 / 3",
    vitolas: [
      { name: "Töa Toro", dimension: '6" x 52' },
      { name: "Töa Robusto", dimension: '5" x 50' },
    ],
    gallery: ["toa-1.png"],
  },
  summum: {
    strength: 5,
    wrapper: "Cosecha Selección 30 Años",
    binder: "Dominicano",
    filler: "Reserva de la Familia",
    aging: "> 5 años",
    body: "Fuerte Complejo",
    notes: ["Melasa", "Cedro Añejo", "Chocolate Puro", "Nuez Tostada"],
    packaging: "20 / 12 / 6 / 3",
    vitolas: [
      { name: "Summum Gran Toro", dimension: '6 1/2" x 54' },
      { name: "Summum Torpedo", dimension: '6 1/2" x 52' },
      { name: "Summum Robusto Extra", dimension: '5 1/2" x 52' },
    ],
    gallery: ["summun-1.png"],
  },
};

const regex =
  /<div class="card glass-card"[\s\S]*?src="\.\.\/images\/([^"]+)"[\s\S]*?alt="([^"]+)"[\s\S]*?<h3>([\s\S]*?)<\/h3>[\s\S]*?<p>([\s\S]*?)<\/p>[\s\S]*?<\/div>/g;
let match;
const cigars = [];

while ((match = regex.exec(lineasHtml)) !== null) {
  const title = match[3].trim();
  let slug = title.toLowerCase().replace(/\s+/g, "-");
  if (title.toLowerCase().includes("töa") || title.toLowerCase().includes("toa")) {
    slug = "toa";
  }

  cigars.push({
    img: match[1].trim(),
    alt: match[2].trim(),
    title: title,
    desc: match[4].trim(),
    slug: slug,
  });
}

console.log(`Generating relative product pages for ${cigars.length} cigars...`);

cigars.forEach((cigar) => {
  const dir = `./src/${cigar.slug}`;
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  const meta = cigarMetadata[cigar.slug] || {
    strength: 3,
    wrapper: "Selección Especial",
    body: "Medio",
    notes: ["Madera Noble", "Especias", "Cacao"],
    gallery: [],
  };

  let dotsHtml = "";
  for (let i = 1; i <= 5; i++) {
    dotsHtml += `<span class="strength-dot ${i <= meta.strength ? "filled" : ""}"></span>`;
  }

  let notesHtml = meta.notes
    .map(
      (note) =>
        `<span style="background: rgba(197,160,89,0.12); border: 1px solid var(--border-gold); color: var(--color-gold-light); padding: 0.4rem 1rem; border-radius: 20px; font-size: 0.85rem; font-weight: 500;">${note}</span>`
    )
    .join(" ");

  let gallerySectionHtml = "";
  if (meta.gallery && meta.gallery.length > 0) {
    const galleryItems = meta.gallery
      .map(
        (gImg) => `
        <div class="glass-card" style="padding: 1.5rem; text-align: center; display: flex; align-items: center; justify-content: center; height: 200px;">
          <img src="../images/${gImg}" alt="${cigar.title} Vitola" style="max-height: 170px; width: auto; object-fit: contain; filter: drop-shadow(0 8px 16px rgba(0,0,0,0.7));" />
        </div>`
      )
      .join("");

    gallerySectionHtml = `
      <section style="max-width: 1280px; margin: 0 auto; padding: 0 2rem 5rem;">
        <h3 style="color: var(--color-gold); font-size: 1.25rem; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 1.5rem; text-align: center;">
          Vitolas & Presentación de la Línea
        </h3>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 1.5rem;">
          ${galleryItems}
        </div>
      </section>
    `;
  }

  const html = `<!doctype html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="icon" type="image/x-icon" href="../favicon.ico?v=2" />
    <meta
      name="description"
      content="Cigarro ${cigar.title} de Caoba Cigars. ${cigar.desc}"
    />
    <title>${cigar.title} - Caoba Cigars</title>
    <link rel="stylesheet" href="../css/style.css" />
  </head>
  <body class="product-page">
    <!-- Navbar -->
    <header class="navbar">
      <div class="logo-container">
        <a href="../">
          <img
            src="../images/logo-caoba.png"
            alt="Caoba Cigars Logo"
          />
        </a>
      </div>
      <nav>
        <a href="../">INICIO</a>
        <a href="../historia/">HISTORIA Y PRODUCCIÓN</a>
        <a href="../lineas/" class="active">LÍNEAS DE CIGARROS</a>
      </nav>
    </header>

    <!-- Product Detail Section -->
    <section class="split-section" style="padding-top: 4rem; padding-bottom: 4rem;">
      <div class="text-content">
        <p style="text-transform: uppercase; letter-spacing: 3px; color: var(--color-gold); font-size: 0.85rem; font-weight: 600; margin-bottom: 0.5rem;">
          Línea Exclusiva Caoba Cigars
        </p>
        <h1 class="gold-gradient-text" style="font-size: clamp(2.5rem, 4vw, 3.5rem); margin-bottom: 1.25rem;">
          ${cigar.title}
        </h1>

        <!-- Strength Indicator -->
        <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1.75rem;">
          <span style="font-size: 0.85rem; text-transform: uppercase; letter-spacing: 1.5px; color: var(--color-text-muted);">
            Fortaleza: <strong>${meta.body}</strong>
          </span>
          <div class="strength-meter" style="margin-bottom: 0;">
            ${dotsHtml}
          </div>
        </div>

        <p style="font-size: 1.15rem; line-height: 1.8; color: var(--color-text); margin-bottom: 2rem; font-weight: 300;">
          ${cigar.desc}
        </p>

        <!-- Blend Features -->
        <ul style="list-style: none; padding: 0; margin-bottom: 2rem; display: flex; flex-direction: column; gap: 0.6rem;">
          <li style="display: flex; align-items: center; gap: 0.6rem; color: var(--color-gold-light); font-size: 0.95rem;">
            <span style="color: var(--color-gold);">🕒</span> Envejecimiento: <span style="color: var(--color-text); font-weight: 500;">${meta.aging || "> 2 años"}</span>
          </li>
          <li style="display: flex; align-items: center; gap: 0.6rem; color: var(--color-gold-light); font-size: 0.95rem;">
            <span style="color: var(--color-gold);">✔</span> Capa: <span style="color: var(--color-text); font-weight: 500;">${meta.wrapper}</span>
          </li>
          <li style="display: flex; align-items: center; gap: 0.6rem; color: var(--color-gold-light); font-size: 0.95rem;">
            <span style="color: var(--color-gold);">✔</span> Tripa: <span style="color: var(--color-text); font-weight: 500;">${meta.filler || "Dominicana"}</span>
          </li>
          <li style="display: flex; align-items: center; gap: 0.6rem; color: var(--color-gold-light); font-size: 0.95rem;">
            <span style="color: var(--color-gold);">✔</span> Capote: <span style="color: var(--color-text); font-weight: 500;">${meta.binder || "Dominicano"}</span>
          </li>
        </ul>

        <!-- Vitolas & Dimensions Table -->
        <div class="glass-card" style="padding: 1rem 1.5rem; margin-bottom: 2.5rem; overflow-x: auto;">
          <table style="width: 100%; border-collapse: collapse; color: var(--color-text); font-size: 0.95rem;">
            <thead>
              <tr style="border-bottom: 1px solid rgba(197, 160, 89, 0.3);">
                <th style="padding: 0.75rem 0.5rem; text-align: left; color: var(--color-gold-light); font-weight: 600; font-family: 'Cinzel', serif;">Vitola</th>
                <th style="padding: 0.75rem 0.5rem; text-align: left; color: var(--color-gold-light); font-weight: 600; font-family: 'Cinzel', serif;">Dimensión</th>
              </tr>
            </thead>
            <tbody>
              ${(meta.vitolas || []).map(v => `
                <tr style="border-bottom: 1px solid rgba(255, 255, 255, 0.08);">
                  <td style="padding: 0.75rem 0.5rem; color: var(--color-text); font-weight: 500;">${v.name}</td>
                  <td style="padding: 0.75rem 0.5rem; color: var(--color-text-muted);">${v.dimension}</td>
                </tr>
              `).join("")}
            </tbody>
          </table>
        </div>

        <!-- Presentación Packaging -->
        <div style="margin-bottom: 2.5rem;">
          <h3 style="color: var(--color-gold); font-size: 1.5rem; font-family: 'Cinzel', serif; margin-bottom: 0.75rem;">Presentación</h3>
          <p style="color: var(--color-text); font-size: 1rem; display: flex; align-items: center; gap: 0.5rem;">
            <span>📦</span> <strong>cajas (unidades):</strong> ${meta.packaging || "20 / 12 / 6 / 3"}
          </p>
        </div>

        <!-- Tasting Notes -->
        <div style="margin-bottom: 2.5rem;">
          <h3 style="color: var(--color-gold); font-size: 1rem; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 0.85rem;">
            Notas de Cata & Aroma
          </h3>
          <div style="display: flex; gap: 0.75rem; flex-wrap: wrap;">
            ${notesHtml}
          </div>
        </div>

        <div style="display: flex; gap: 1.25rem; flex-wrap: wrap;">
          <a href="../lineas/" class="btn-primary">&larr; Volver a la Colección</a>
          <a href="../#contact" class="btn-outline">Consultar Disponibilidad</a>
        </div>
      </div>

      <div class="image-content glass-card" style="display: flex; justify-content: center; align-items: center; padding: 3rem; background: radial-gradient(circle at center, rgba(197,160,89,0.12) 0%, rgba(18,16,13,0.9) 100%);">
        <img
          src="../images/${cigar.img}"
          alt="${cigar.alt}"
          style="max-height: 520px; width: 100%; object-fit: contain; filter: drop-shadow(0 15px 30px rgba(0,0,0,0.8));"
        />
      </div>
    </section>

    <!-- Vitola Gallery Section -->
    ${gallerySectionHtml}

    <!-- Footer -->
    <footer id="contact">
      <div class="footer-content">
        <div class="footer-logo">
          <img
            src="../images/logo-caoba.png"
            alt="Caoba Cigars Logo"
          />
        </div>
        <h2 class="gold-gradient-text">Santo Domingo &bull; República Dominicana</h2>

        <div class="footer-columns">
          <div class="footer-col">
            <h4>Boutique & Ubicación</h4>
            <p>
              C/ El Conde #101, Local #9<br />
              Centro Comercial Colón (Plaza Colón)<br />
              Zona Colonial, Santo Domingo, R.D.
            </p>
          </div>

          <div class="footer-col">
            <h4>Contacto Directo</h4>
            <p>📞 +1 (809) 685-6425</p>
            <p>✉️ caobacigars.dr@gmail.com</p>
          </div>

          <div class="footer-col">
            <h4>Medios de Pago</h4>
            <p>Aceptamos pagos internacionales:</p>
            <div class="payment-icons">
              <span class="payment-badge">PayPal</span>
              <span class="payment-badge">VISA</span>
              <span class="payment-badge">MasterCard</span>
              <span class="payment-badge">AMEX</span>
            </div>
          </div>
        </div>

        <div class="disclaimer">
          <p>
            Los impuestos establecidos por el país de destino son a cargo y responsabilidad exclusiva del comprador. &copy; 2026 Caoba Cigars. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  </body>
</html>`;

  fs.writeFileSync(path.join(dir, "index.html"), html);
  console.log(`Created product page with relative paths: ${dir}/index.html`);
});
