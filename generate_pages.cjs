const fs = require("fs");
const path = require("path");

const lineasHtml = fs.readFileSync(
  path.join(__dirname, "src", "lineas", "index.html"),
  "utf8",
);

// Use regex to extract cards (updated for h2 and new button location)
const regex =
  /<div class="card">[\s\S]*?<img src="\/images\/([^"]+)" alt="([^"]+)"[\s\S]*?<h2>([^<]+)<\/h2>[\s\S]*?<p>([^<]+)<\/p>[\s\S]*?<\/div>/g;
let match;
const cigars = [];

while ((match = regex.exec(lineasHtml)) !== null) {
  cigars.push({
    img: match[1],
    alt: match[2],
    title: match[3],
    desc: match[4],
    slug: match[3].toLowerCase().replace(/\s+/g, "-"),
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

  const html = `
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="icon" type="image/x-icon" href="/favicon.ico?v=2">
  <meta name="description" content="Descubre el cigarro ${cigar.title} de Caoba Cigars. ${cigar.desc}">
  <title>${cigar.title} - Caoba Cigars</title>
  <link rel="stylesheet" href="/css/style.css">
</head>
<body class="product-page">
    <header class="navbar">
      <div class="logo">
        <a href="/"><img src="/images/logo-caoba.png" alt="Caoba Cigars Logo"></a>
      </div>
      <nav>
        <a href="/">INICIO</a>
        <a href="/historia/">HISTORIA Y PRODUCCIÓN</a>
        <a href="/lineas/">LÍNEAS DE CIGARROS</a>
      </nav>
    </header>

    

    <section class="split-section" style="padding-top: 2rem;">
      <div class="text-content">
        <h2 style="font-family: 'Playfair Display', serif; font-size: 3rem; color: var(--color-gold); margin-bottom: 1.5rem;">${cigar.title}</h2>
        <p style="font-size: 1.2rem; line-height: 1.8; color: var(--color-text); margin-bottom: 2rem;">${cigar.desc}</p>
        
        <h3 style="color: var(--color-gold); font-size: 1.5rem; margin-bottom: 1rem;">Especificaciones</h3>
        <table style="width: 100%; border-collapse: collapse; color: var(--color-text);">
          <tr style="border-bottom: 1px solid #333;">
            <td style="padding: 1rem 0; font-weight: 600; width: 40%; color: var(--color-gold-dark);">Origen</td>
            <td style="padding: 1rem 0;">República Dominicana</td>
          </tr>
          <tr style="border-bottom: 1px solid #333;">
            <td style="padding: 1rem 0; font-weight: 600; color: var(--color-gold-dark);">Categoría</td>
            <td style="padding: 1rem 0;">Premium</td>
          </tr>
        </table>
        
        <div style="margin-top: 3rem;">
           <a href="/lineas/" class="btn-primary">Volver a la Colección</a>
        </div>
      </div>
      <div class="image-content" style="display: flex; justify-content: center; background-color: transparent; border-radius: 8px; padding: 2rem;">
        <img src="/images/${cigar.img}" alt="${cigar.alt}" style="max-height: 500px; object-fit: contain;">
      </div>
    </section>

    <footer id="contact" style="margin-top: 4rem;">
      <div class="footer-content">
        <div class="footer-logo"><img src="/images/logo-caoba.png" alt="Caoba Logo" style="height: 60px;"></div>
        <h2>República Dominicana</h2>
        <div class="footer-columns">
          <div class="contact-info">
            <p>1 (809) 221-5080</p>
            <p>caobacigars.dr@gmail.com</p>
          </div>
          <div class="location-info">
            <p>Calle Conde 109, Zona Colonial, 10210</p>
            <p>Santo Domingo, República Dominicana</p>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2026 Caoba Cigars. Todos los derechos reservados.</p>
      </div>
    </footer>
</body>
</html>
`;

  fs.writeFileSync(path.join(dir, "index.html"), html);
  console.log(`Created: ${dir}/index.html`);
});
