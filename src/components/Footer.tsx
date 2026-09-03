import React from "react";

interface FooterProps {
  onNavigate?: (path: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    if (onNavigate) {
      e.preventDefault();
      onNavigate(path);
    }
  };

  return (
    <footer id="contact">
      <div className="footer-content">
        <div className="footer-logo">
          <a href="/" onClick={(e) => handleLinkClick(e, "/")}>
            <img src="/images/logo-caoba.png" alt="Caoba Cigars Logo" />
          </a>
        </div>
        <h2 className="gold-gradient-text" style={{ fontSize: "1.6rem", marginBottom: "2.5rem" }}>
          Santo Domingo &bull; República Dominicana
        </h2>

        <div className="footer-columns">
          <div className="footer-col">
            <h4>Sobre Caoba</h4>
            <p>
              Tradición y excelencia artesanal dominicana desde 1992. Elaborados 100% a mano
              por experimentados maestros torcedores en la mítica Plaza Colón de la Zona Colonial.
            </p>
          </div>

          <div className="footer-col">
            <h4>Navegación</h4>
            <ul>
              <li>
                <a href="/" onClick={(e) => handleLinkClick(e, "/")}>
                  Inicio
                </a>
              </li>
              <li>
                <a href="/lineas/" onClick={(e) => handleLinkClick(e, "/lineas/")}>
                  Líneas de Cigarros (11)
                </a>
              </li>
              <li>
                <a href="/historia/" onClick={(e) => handleLinkClick(e, "/historia/")}>
                  Historia y Producción
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Boutique & Ubicación</h4>
            <p>
              C/ El Conde #101, Local #9<br />
              Centro Comercial Colón (Plaza Colón)<br />
              Zona Colonial, Santo Domingo, R.D.
            </p>
          </div>

          <div className="footer-col">
            <h4>Contacto & Pagos</h4>
            <p style={{ marginBottom: "0.5rem" }}>📞 +1 (809) 685-6425</p>
            <p style={{ marginBottom: "1rem" }}>✉️ caobacigars.dr@gmail.com</p>
            <div className="payment-icons">
              <span className="payment-badge">PayPal</span>
              <span className="payment-badge">VISA</span>
              <span className="payment-badge">MasterCard</span>
              <span className="payment-badge">AMEX</span>
            </div>
          </div>
        </div>

        <div className="disclaimer">
          <p>
            Los impuestos establecidos por el país de destino son a cargo y responsabilidad exclusiva del comprador. &copy; {new Date().getFullYear()} Caoba Cigars. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
