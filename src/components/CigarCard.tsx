import React from "react";
import { CigarLine } from "../types/cigar";
import { StrengthIndicator } from "./StrengthIndicator";
import { FlavorBadges } from "./FlavorBadges";

interface CigarCardProps {
  cigar: CigarLine;
  onSelect?: (cigarId: string) => void;
}

export const CigarCard: React.FC<CigarCardProps> = ({ cigar, onSelect }) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onSelect) {
      e.preventDefault();
      onSelect(cigar.id);
    }
  };

  return (
    <div className="card glass-card" style={{ display: "flex", flexDirection: "column" }}>
      {cigar.badge && (
        <span
          style={{
            position: "absolute",
            top: "1rem",
            right: "1rem",
            background: "var(--gradient-gold)",
            color: "#0f0c08",
            padding: "0.25rem 0.75rem",
            borderRadius: "12px",
            fontSize: "0.75rem",
            fontWeight: 700,
            letterSpacing: "1px",
            textTransform: "uppercase",
            zIndex: 2,
          }}
        >
          {cigar.badge}
        </span>
      )}
      <div
        style={{
          width: "100%",
          height: "240px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          borderRadius: "8px",
          marginBottom: "1rem",
          background: "rgba(0, 0, 0, 0.2)",
        }}
      >
        <img
          src={`/images/${cigar.image}`}
          alt={cigar.name}
          style={{ maxHeight: "100%", maxWidth: "100%", objectFit: "contain" }}
        />
      </div>

      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "0.5rem",
          }}
        >
          <h3 className="gold-gradient-text" style={{ margin: 0, fontSize: "1.35rem" }}>
            {cigar.name}
          </h3>
          <StrengthIndicator strength={cigar.strength} />
        </div>

        <p style={{ color: "#d0c0b0", fontSize: "0.95rem", lineHeight: 1.5, flex: 1, marginBottom: "1rem" }}>
          {cigar.description || cigar.tagline}
        </p>

        <div style={{ marginBottom: "1.25rem" }}>
          <FlavorBadges notes={cigar.notes} />
        </div>

        <a
          href={`/lineas/${cigar.id}/`}
          className="btn-outline"
          onClick={handleClick}
          style={{ width: "100%", textAlign: "center", marginTop: "auto" }}
        >
          Ver Detalle de Línea &rarr;
        </a>
      </div>
    </div>
  );
};
