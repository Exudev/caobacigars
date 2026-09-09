import React, { useState } from "react";
import { CIGAR_LINES } from "../data/cigars";
import { CigarCard } from "../components/CigarCard";
import { CigarDetail } from "../components/CigarDetail";

interface LineasPageProps {
  selectedCigarId?: string;
  onNavigate: (path: string) => void;
}

export const LineasPage: React.FC<LineasPageProps> = ({
  selectedCigarId,
  onNavigate,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const selectedCigar = CIGAR_LINES.find((c) => c.id === selectedCigarId);

  if (selectedCigar) {
    return (
      <CigarDetail
        cigar={selectedCigar}
        onBack={() => onNavigate("/lineas/")}
      />
    );
  }

  const filteredCigars = CIGAR_LINES.filter((cigar) => {
    if (activeCategory === "all") return true;
    return cigar.category === activeCategory;
  });

  return (
    <div style={{ width: "100%", overflowX: "hidden" }}>
      {/* Page Header Banner */}
      <section
        style={{
          padding: "4rem 2rem 2rem",
          textAlign: "center",
          background: "linear-gradient(180deg, rgba(197, 160, 89, 0.1) 0%, rgba(10, 9, 8, 0) 100%)",
        }}
      >
        <p
          style={{
            textTransform: "uppercase",
            letterSpacing: "3px",
            color: "var(--color-gold-light)",
            fontSize: "0.85rem",
            fontWeight: 600,
            marginBottom: "0.5rem",
          }}
        >
          Colección Exclusiva de Puros Dominicanos
        </p>
        <h1 className="section-title gold-gradient-text" style={{ fontSize: "2.8rem", margin: 0 }}>
          Líneas de Cigarros
        </h1>
        <p className="section-subtitle" style={{ color: "#d0c0b0", maxWidth: "680px", margin: "1rem auto 0", fontSize: "1.05rem" }}>
          Ligas únicas elaboradas con las más finas hojas de tabaco cultivados en las mejores vegas de la República Dominicana.
        </p>
      </section>

      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "1rem 1.5rem 4rem" }}>
        {/* Category Filters */}
        <div
          className="glass-card"
          style={{
            padding: "1rem 1.5rem",
            borderRadius: "12px",
            marginBottom: "2.5rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "0.75rem",
          }}
        >
          <button
            onClick={() => setActiveCategory("all")}
            className={activeCategory === "all" ? "btn-primary" : "btn-outline"}
            style={{ padding: "0.5rem 1.25rem", fontSize: "0.88rem" }}
          >
            Todas las Líneas ({CIGAR_LINES.length})
          </button>
          <button
            onClick={() => setActiveCategory("premium")}
            className={activeCategory === "premium" ? "btn-primary" : "btn-outline"}
            style={{ padding: "0.5rem 1.25rem", fontSize: "0.88rem" }}
          >
            Cigarros Premium
          </button>
          <button
            onClick={() => setActiveCategory("seleccion")}
            className={activeCategory === "seleccion" ? "btn-primary" : "btn-outline"}
            style={{ padding: "0.5rem 1.25rem", fontSize: "0.88rem" }}
          >
            Cigarros Selección
          </button>
          <button
            onClick={() => setActiveCategory("gran-seleccion")}
            className={activeCategory === "gran-seleccion" ? "btn-primary" : "btn-outline"}
            style={{ padding: "0.5rem 1.25rem", fontSize: "0.88rem" }}
          >
            Gran Selección & Ediciones Limitadas
          </button>
        </div>

        {/* Product Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
            gap: "2rem",
          }}
        >
          {filteredCigars.map((cigar) => (
            <CigarCard
              key={cigar.id}
              cigar={cigar}
              onSelect={(id) => onNavigate(`/lineas/${id}/`)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
