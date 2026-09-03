import React, { useState } from "react";
import { CigarLine } from "../types/cigar";
import { StrengthIndicator } from "./StrengthIndicator";
import { FlavorBadges } from "./FlavorBadges";
import { VitolaTable } from "./VitolaTable";

interface CigarDetailProps {
  cigar: CigarLine;
  onBack?: () => void;
}

export const CigarDetail: React.FC<CigarDetailProps> = ({ cigar, onBack }) => {
  const [activeImage, setActiveImage] = useState(cigar.image);

  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "2rem 1.5rem" }}>
      {onBack && (
        <button
          onClick={onBack}
          className="btn-outline"
          style={{ marginBottom: "2rem", cursor: "pointer", display: "inline-flex", alignItems: "center", gap: "0.5rem" }}
        >
          &larr; Volver a Colecciones
        </button>
      )}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "2.5rem",
          alignItems: "start",
        }}
      >
        {/* Gallery Section */}
        <div>
          <div
            className="glass-card"
            style={{
              padding: "1.5rem",
              borderRadius: "16px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "380px",
              marginBottom: "1rem",
              background: "rgba(0, 0, 0, 0.3)",
            }}
          >
            <img
              src={`/images/${activeImage}`}
              alt={cigar.name}
              style={{ maxHeight: "100%", maxWidth: "100%", objectFit: "contain", transition: "all 0.3s ease" }}
            />
          </div>

          {cigar.gallery.length > 1 && (
            <div style={{ display: "flex", gap: "0.75rem", overflowX: "auto", paddingBottom: "0.5rem" }}>
              {cigar.gallery.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(img)}
                  style={{
                    border: activeImage === img ? "2px solid var(--color-gold-light)" : "1px solid rgba(255, 255, 255, 0.1)",
                    borderRadius: "8px",
                    background: "rgba(0, 0, 0, 0.4)",
                    padding: "0.4rem",
                    cursor: "pointer",
                    width: "72px",
                    height: "72px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <img
                    src={`/images/${img}`}
                    alt={`${cigar.name} thumbnail ${idx}`}
                    style={{ maxHeight: "100%", maxWidth: "100%", objectFit: "contain" }}
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Specifications & Details */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          <div>
            {cigar.badge && (
              <span
                style={{
                  background: "var(--gradient-gold)",
                  color: "#0f0c08",
                  padding: "0.25rem 0.75rem",
                  borderRadius: "12px",
                  fontSize: "0.8rem",
                  fontWeight: 700,
                  letterSpacing: "1px",
                  textTransform: "uppercase",
                  display: "inline-block",
                  marginBottom: "0.75rem",
                }}
              >
                {cigar.badge}
              </span>
            )}
            <h1 className="gold-gradient-text" style={{ fontSize: "2.5rem", margin: 0 }}>
              {cigar.name}
            </h1>
            {cigar.tagline && (
              <p style={{ color: "var(--color-gold-light)", fontSize: "1.1rem", fontStyle: "italic", marginTop: "0.5rem" }}>
                "{cigar.tagline}"
              </p>
            )}
          </div>

          <p style={{ color: "#d0c0b0", fontSize: "1.05rem", lineHeight: 1.7, margin: 0 }}>
            {cigar.description}
          </p>

          <div className="glass-card" style={{ padding: "1.25rem", borderRadius: "12px" }}>
            <h4 style={{ color: "var(--color-gold-light)", marginTop: 0, marginBottom: "0.75rem" }}>
              Perfil de Sabor & Fortaleza
            </h4>
            <div style={{ marginBottom: "1rem" }}>
              <StrengthIndicator strength={cigar.strength} label="Fortaleza" />
            </div>
            <FlavorBadges notes={cigar.notes} />
          </div>

          {/* Technical Specs Grid */}
          <div
            className="glass-card"
            style={{
              padding: "1.25rem",
              borderRadius: "12px",
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "1rem",
              fontSize: "0.95rem",
            }}
          >
            <div>
              <span style={{ color: "#a0a0a0", display: "block", fontSize: "0.85rem" }}>Capa:</span>
              <strong style={{ color: "#fff" }}>{cigar.wrapper}</strong>
            </div>
            <div>
              <span style={{ color: "#a0a0a0", display: "block", fontSize: "0.85rem" }}>Capote:</span>
              <strong style={{ color: "#fff" }}>{cigar.binder}</strong>
            </div>
            <div>
              <span style={{ color: "#a0a0a0", display: "block", fontSize: "0.85rem" }}>Tripa:</span>
              <strong style={{ color: "#fff" }}>{cigar.filler}</strong>
            </div>
            <div>
              <span style={{ color: "#a0a0a0", display: "block", fontSize: "0.85rem" }}>Añejamiento:</span>
              <strong style={{ color: "var(--color-gold-light)" }}>{cigar.aging}</strong>
            </div>
          </div>

          {/* Vitolas Table */}
          <VitolaTable vitolas={cigar.vitolas} packaging={cigar.packaging} />
        </div>
      </div>
    </div>
  );
};
