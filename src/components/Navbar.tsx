import React from "react";

interface NavbarProps {
  currentPath?: string;
  onNavigate?: (path: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPath = "/", onNavigate }) => {
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
          INICIO
        </a>
        <a
          href="/historia/"
          className={isLinkActive("/historia/") ? "active" : ""}
          onClick={(e) => handleLinkClick(e, "/historia/")}
        >
          HISTORIA Y PRODUCCIÓN
        </a>
        <a
          href="/lineas/"
          className={isLinkActive("/lineas/") ? "active" : ""}
          onClick={(e) => handleLinkClick(e, "/lineas/")}
        >
          LÍNEAS DE CIGARROS
        </a>
      </nav>
    </header>
  );
};
