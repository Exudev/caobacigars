import React, { useState, useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { HomePage } from "./pages/HomePage";
import { LineasPage } from "./pages/LineasPage";
import { HistoriaPage } from "./pages/HistoriaPage";

export const App: React.FC = () => {
  const [currentPath, setCurrentPath] = useState<string>(
    window.location.pathname
  );

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const handleNavigate = (path: string) => {
    window.history.pushState({}, "", path);
    setCurrentPath(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Determine active view based on current path
  const renderContent = () => {
    const cleanPath = currentPath.toLowerCase();

    if (cleanPath.includes("historia")) {
      return <HistoriaPage onNavigate={handleNavigate} />;
    }

    if (cleanPath.includes("lineas")) {
      // Check if viewing a specific detail route, e.g., /lineas/caoba-oro/
      const match = cleanPath.match(/lineas\/([^/]+)/);
      const selectedId = match ? match[1] : undefined;
      return (
        <LineasPage
          selectedCigarId={selectedId}
          onNavigate={handleNavigate}
        />
      );
    }

    // Direct product line URL match (e.g. /caoba-oro/)
    const productSlugs = [
      "caoba-oro",
      "caoba-platino",
      "caoba-diamante",
      "supreme",
      "magnifico",
      "unique",
      "quisqueyano",
      "gran-reserva",
      "origen-dominicano",
      "toa",
      "summum",
    ];

    const foundSlug = productSlugs.find((slug) => cleanPath.includes(slug));
    if (foundSlug) {
      return (
        <LineasPage
          selectedCigarId={foundSlug}
          onNavigate={handleNavigate}
        />
      );
    }

    return <HomePage onNavigate={handleNavigate} />;
  };

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Navbar currentPath={currentPath} onNavigate={handleNavigate} />
      <div style={{ flex: 1 }}>{renderContent()}</div>
      <Footer onNavigate={handleNavigate} />
    </div>
  );
};

export default App;
