import React from "react";
import { useLanguage } from "../i18n/LanguageContext";

interface NavbarProps {
  currentPath?: string;
  onNavigate?: (path: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPath = "/", onNavigate }) => {
  const { lang, setLang, t } = useLanguage();

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    if (onNavigate) {
      e.preventDefault();
      onNavigate(path);
    }
  };

  const isLinkActive = (path: string) => {
    if (path === "/" && (currentPath === "/" || currentPath === "" || currentPath === "/index.html")) {
      return true;
    }
    if (path !== "/" && currentPath.includes(path.replace(/\//g, ""))) {
      return true;
    }
    return false;
  };

  return (
    <header className="navbar">
      <div className="logo-container">
        <a href="/" onClick={(e) => handleLinkClick(e, "/")}>
          <img src="/images/logo-caoba.png" alt="Caoba Cigars Logo" />
        </a>
      </div>
      <nav>
        <a
          href="/"
          className={isLinkActive("/") ? "active" : ""}
          onClick={(e) => handleLinkClick(e, "/")}
        >
          {t.nav.home}
        </a>
        <a
          href="/historia/"
          className={isLinkActive("/historia/") ? "active" : ""}
          onClick={(e) => handleLinkClick(e, "/historia/")}
        >
          {t.nav.history}
        </a>
        <a
          href="/lineas/"
          className={isLinkActive("/lineas/") ? "active" : ""}
          onClick={(e) => handleLinkClick(e, "/lineas/")}
        >
          {t.nav.lines}
        </a>
        <a
          href="/contacto/"
          className={isLinkActive("/contacto/") ? "active" : ""}
          onClick={(e) => handleLinkClick(e, "/contacto/")}
        >
          {t.nav.contact}
        </a>

        <div className="lang-switcher" role="group" aria-label="Language selector">
          <button
            type="button"
            className={`lang-btn ${lang === "es" ? "active" : ""}`}
            onClick={() => setLang("es")}
            aria-pressed={lang === "es"}
          >
            ES
          </button>
          <span className="lang-divider">|</span>
          <button
            type="button"
            className={`lang-btn ${lang === "en" ? "active" : ""}`}
            onClick={() => setLang("en")}
            aria-pressed={lang === "en"}
          >
            EN
          </button>
        </div>
      </nav>
    </header>
  );
};
