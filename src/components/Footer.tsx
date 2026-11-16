import React from "react";
import { CIGAR_LINES } from "../data/cigars";
import { useLanguage } from "../i18n/LanguageContext";

interface FooterProps {
  onNavigate?: (path: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const { t } = useLanguage();

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    if (onNavigate) {
      e.preventDefault();
      onNavigate(path);
    }
  };

  const whatsappUrl = `https://wa.me/18494490857?text=${encodeURIComponent(
    t.contact.defaultWhatsAppMsg
  )}`;

  return (
    <footer id="contact">
      <div className="footer-content">
        <div className="footer-logo">
          <a href="/" onClick={(e) => handleLinkClick(e, "/")}>
            <img src="/images/logo-caoba.png" alt="Caoba Cigars Logo" />
          </a>
        </div>
        <h2 className="gold-gradient-text" style={{ fontSize: "1.6rem", marginBottom: "2.5rem" }}>
          {t.footer.locationHeader}
        </h2>

        <div className="footer-columns">
          <div className="footer-col">
            <h4>{t.footer.aboutTitle}</h4>
            <p>{t.footer.aboutText}</p>
          </div>

          <div className="footer-col">
            <h4>{t.footer.navTitle}</h4>
            <ul>
              <li>
                <a href="/" onClick={(e) => handleLinkClick(e, "/")}>
                  {t.footer.navHome}
                </a>
              </li>
              <li>
                <a href="/lineas/" onClick={(e) => handleLinkClick(e, "/lineas/")}>
                  {t.footer.navLines(CIGAR_LINES.length)}
                </a>
              </li>
              <li>
                <a href="/historia/" onClick={(e) => handleLinkClick(e, "/historia/")}>
                  {t.footer.navHistory}
                </a>
              </li>
              <li>
                <a href="/contacto/" onClick={(e) => handleLinkClick(e, "/contacto/")}>
                  {t.footer.navContact}
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>{t.footer.boutiqueTitle}</h4>
            <p>
              {t.footer.boutiqueLine1}
              <br />
              {t.footer.boutiqueLine2}
              <br />
              {t.footer.boutiqueLine3}
            </p>
          </div>

          <div className="footer-col">
            <h4>{t.footer.contactPaymentsTitle}</h4>
            <p style={{ marginBottom: "0.5rem" }}>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#25D366", textDecoration: "none", fontWeight: 600 }}
              >
                💬 WhatsApp: +1 (849) 449-0857
              </a>
            </p>
            <p style={{ marginBottom: "0.5rem" }}>📞 +1 (809) 685-6425</p>
            <p style={{ marginBottom: "1rem" }}>
              <a href="mailto:Info@caobacigars.com" style={{ color: "#d0c0b0", textDecoration: "none" }}>
                ✉️ Info@caobacigars.com
              </a>
            </p>
            <div className="payment-icons">
              <span className="payment-badge">PayPal</span>
              <span className="payment-badge">VISA</span>
              <span className="payment-badge">MasterCard</span>
              <span className="payment-badge">AMEX</span>
            </div>
          </div>
        </div>

        <div className="disclaimer">
          <p>{t.footer.disclaimer(new Date().getFullYear())}</p>
        </div>
      </div>
    </footer>
  );
};
