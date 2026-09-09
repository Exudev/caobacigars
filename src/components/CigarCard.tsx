import React from "react";
import { CigarLine } from "../types/cigar";
import { StrengthIndicator } from "./StrengthIndicator";

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
      {cigar.isLimitedEdition ? (
        <span
          style={{
            position: "absolute",
            top: "0.85rem",
            right: "0.85rem",
            background: "linear-gradient(135deg, #f5d77f 0%, #c5a059 60%, #9a7836 100%)",
            color: "#0a0805",
            padding: "0.3rem 0.75rem",
            borderRadius: "20px",
            fontSize: "0.68rem",
            fontWeight: 800,
            letterSpacing: "0.75px",
            textTransform: "uppercase",
            boxShadow: "0 2px 10px rgba(197, 160, 89, 0.45), 0 0 0 1px rgba(255, 235, 175, 0.5)",
            display: "inline-flex",
            alignItems: "center",
            gap: "0.3rem",
            zIndex: 2,
          }}
        >
          <span style={{ fontSize: "0.72rem", color: "#6e4a10" }}>✦</span> Edición Limitada
        </span>
      ) : cigar.badge ? (
        <span
          style={{
            position: "absolute",
            top: "0.85rem",
            right: "0.85rem",
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
      ) : null}
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

        <p style={{ color: "#d0c0b0", fontSize: "0.95rem", lineHeight: 1.5, flex: 1, marginBottom: "1.25rem" }}>
          {cigar.description || cigar.tagline}
        </p>

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
