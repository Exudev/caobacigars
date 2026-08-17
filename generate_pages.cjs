const fs = require('fs');
const path = require('path');

const lineasHtml = fs.readFileSync(path.join(__dirname, 'lineas', 'index.html'), 'utf8');

// Use regex to extract cards
const regex = /<div class="card">[\s\S]*?<img src="\/images\/([^"]+)" alt="([^"]+)"[\s\S]*?<h3>([^<]+)<\/h3>[\s\S]*?<p>([^<]+)<\/p>[\s\S]*?<\/div>/g;
let match;
const cigars = [];

while ((match = regex.exec(lineasHtml)) !== null) {
  cigars.push({
    img: match[1],
    alt: match[2],
    title: match[3],
    desc: match[4]
  });
}

const template = (cigar) => `<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${cigar.title} | Caoba Cigars</title>
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Inter:wght@400;600&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="/style.css">
  </head>
  <body>
    <!-- Navbar -->
    <header class="navbar">
      <div class="logo-container">
        <img src="/images/logo-caoba.png" alt="Caoba Logo" style="height: 100px;">
      </div>
      <nav>
        <a href="/">INICIO</a>
        <a href="/historia/">HISTORIA Y PRODUCCIÓN</a>
        <a href="/lineas/">LÍNEAS DE CIGARROS</a>
      </nav>
    </header>

    <div style="margin-top: 150px;"></div> <!-- Spacer for fixed navbar -->

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

    <!-- Footer -->
    <footer id="contact" style="margin-top: 4rem;">
      <div class="footer-content">
        <div class="footer-logo"><img src="/images/logo-caoba.png" alt="Caoba Logo" style="height: 60px;"></div>
        <h2>República Dominicana</h2>
        <div class="footer-columns">
          <div class="contact-info">
            <p>C/ El conde #101 local #9 Centro comercial Colon, Santo Domingo. R.D</p>
            <p>📞 +1 (809) 685-6425</p>
          </div>
          <div class="payment-info">
            <p>Aceptamos pagos con:</p>
            <div class="payment-icons">
               <span>PayPal</span> | <span>VISA</span> | <span>MasterCard</span> | <span>AMEX</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </body>
</html>`;

cigars.forEach(cigar => {
  const slug = cigar.title.toLowerCase().replace(/ /g, '-').normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  const dirPath = path.join(__dirname, slug);
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath);
  }
  fs.writeFileSync(path.join(dirPath, 'index.html'), template(cigar));
  console.log(`Created: /${slug}/index.html`);
  
  // Update lineas/index.html to include Ver Mas button
  lineasHtmlUpdated = fs.readFileSync(path.join(__dirname, 'lineas', 'index.html'), 'utf8');
  const replaceStr = `<h3>${cigar.title}</h3>\n          <p>${cigar.desc}</p>`;
  const newStr = `<h3>${cigar.title}</h3>\n          <p>${cigar.desc}</p>\n          <a href="/${slug}/" class="btn-primary" style="margin-top: 1.5rem; display: inline-block; padding: 0.5rem 1.5rem; font-size: 0.9rem;">Ver Más</a>`;
  fs.writeFileSync(path.join(__dirname, 'lineas', 'index.html'), lineasHtmlUpdated.replace(replaceStr, newStr));
});
