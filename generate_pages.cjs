const fs = require("fs");
const path = require("path");

const lineasHtml = fs.readFileSync(
  path.join(__dirname, "src", "lineas", "index.html"),
  "utf8",
);

// Updated regex to handle Prettier formatting
const regex =
  /<div class="card">[\s\S]*?src="\/images\/([^"]+)"[\s\S]*?alt="([^"]+)"[\s\S]*?<h2>([\s\S]*?)<\/h2>[\s\S]*?<p>([\s\S]*?)<\/p>[\s\S]*?<\/div>/g;
let match;
const cigars = [];

while ((match = regex.exec(lineasHtml)) !== null) {
  const title = match[3].trim();
  cigars.push({
    img: match[1].trim(),
    alt: match[2].trim(),
    title: title,
    desc: match[4].trim(),
    slug: title.toLowerCase().replace(/\s+/g, "-"),
  });
}

// Special case for 'toa' (töa)
const toaIndex = cigars.findIndex((c) => c.title.toLowerCase().includes("töa"));
if (toaIndex !== -1) {
  cigars[toaIndex].slug = "toa";
}

console.log(`Found ${cigars.length} cigars.`);

cigars.forEach((cigar) => {
  const dir = `./src/${cigar.slug}`;
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  const html = `<!doctype html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="icon" type="image/x-icon" href="/favicon.ico?v=2" />
    <meta
      name="description"
      content="Descubre el cigarro ${cigar.title} de Caoba Cigars. ${cigar.desc}"
    />
    <title>${cigar.title} - Caoba Cigars</title>
    <link
      href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Inter:wght@400;600&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="/css/style.css" />
  </head>
  <body class="product-page">
    <header class="navbar">
      <div class="logo-container">
        <a href="/">
          <img
            src="/images/logo-caoba.png"
            alt="Caoba Logo"
            style="height: 100px"
          />
        </a>
      </div>
      <nav>
        <a href="/">INICIO</a>
        <a href="/historia/">HISTORIA Y PRODUCCIÓN</a>
        <a href="/lineas/" class="active">LÍNEAS DE CIGARROS</a>
      </nav>
    </header>

    <section class="split-section" style="padding-top: 3rem">
      <div class="text-content">
        <h1
          style="
            font-family: 'Playfair Display', serif;
            font-size: 3rem;
            color: var(--color-gold);
            margin-bottom: 1.5rem;
          "
        >
          ${cigar.title}
        </h1>
        <p
          style="
            font-size: 1.2rem;
            line-height: 1.8;
            color: var(--color-text);
            margin-bottom: 2.5rem;
          "
        >
          ${cigar.desc}
        </p>

        <h2
          style="
            color: var(--color-gold);
            font-size: 1.5rem;
            margin-bottom: 1rem;
          "
        >
          Especificaciones
        </h2>
        <table
          style="
            width: 100%;
            border-collapse: collapse;
            color: var(--color-text);
            margin-bottom: 3rem;
          "
        >
          <tr style="border-bottom: 1px solid #333">
            <td
              style="
                padding: 1rem 0;
                font-weight: 600;
                width: 40%;
                color: var(--color-gold-dark);
              "
            >
              Origen
            </td>
            <td style="padding: 1rem 0">República Dominicana</td>
          </tr>
          <tr style="border-bottom: 1px solid #333">
            <td
              style="
                padding: 1rem 0;
                font-weight: 600;
                color: var(--color-gold-dark);
              "
            >
              Elaboración
            </td>
            <td style="padding: 1rem 0">Hecho a mano / Handmade</td>
          </tr>
          <tr style="border-bottom: 1px solid #333">
            <td
              style="
                padding: 1rem 0;
                font-weight: 600;
                color: var(--color-gold-dark);
              "
            >
              Categoría
            </td>
            <td style="padding: 1rem 0">Premium</td>
          </tr>
        </table>

        <div>
          <a href="/lineas/" class="btn-primary">Volver a la Colección</a>
        </div>
      </div>
      <div
        class="image-content"
        style="
          display: flex;
          justify-content: center;
          align-items: center;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(195, 153, 64, 0.15);
          border-radius: 12px;
          padding: 2.5rem;
        "
      >
        <img
          src="/images/${cigar.img}"
          alt="${cigar.alt}"
          style="max-height: 520px; width: 100%; object-fit: contain"
        />
      </div>
    </section>

    <footer id="contact" style="margin-top: 4rem">
      <div class="footer-content">
        <div class="footer-logo">
          <img
            src="/images/logo-caoba.png"
            alt="Caoba Logo"
            style="height: 60px"
          />
        </div>
        <h2>República Dominicana</h2>

        <div class="footer-columns">
          <div class="contact-info">
            <p>
              C/ El conde #101 local #9 Centro comercial Colon, Santo Domingo.
              R.D
            </p>
            <p>📞 +1 (809) 685-6425</p>
          </div>

          <div class="payment-info">
            <p>Aceptamos pagos con:</p>
            <div class="payment-icons">
              <span>PayPal</span> | <span>VISA</span> |
              <span>MasterCard</span> | <span>AMEX</span>
            </div>
          </div>
        </div>

        <div class="disclaimer">
          <p>
            Los impuesto establecidos por el pais de destino son a cargo y
            responsabilidad exclusiva del comprador.
          </p>
        </div>
      </div>
    </footer>
  </body>
</html>`;

  fs.writeFileSync(path.join(dir, "index.html"), html);
  console.log(`Created: ${dir}/index.html`);
});
