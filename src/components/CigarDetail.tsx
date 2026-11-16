import React, { useState } from "react";
import { CigarLine } from "../types/cigar";
import { StrengthIndicator } from "./StrengthIndicator";
import { FlavorBadges } from "./FlavorBadges";
import { VitolaTable } from "./VitolaTable";
import { useLanguage } from "../i18n/LanguageContext";

interface CigarDetailProps {
  cigar: CigarLine;
  onBack?: () => void;
}

export const CigarDetail: React.FC<CigarDetailProps> = ({ cigar, onBack }) => {
  const { t, getLocalizedCigar } = useLanguage();
  const localized = getLocalizedCigar(cigar);
  const [activeImage, setActiveImage] = useState(localized.image);

  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "2rem 1.5rem" }}>
      {onBack && (
        <button
          onClick={onBack}
          className="btn-outline"
          style={{ marginBottom: "2rem", cursor: "pointer", display: "inline-flex", alignItems: "center", gap: "0.5rem" }}
        >
          {t.cigar.backToCollections}
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
              alt={localized.name}
              style={{ maxHeight: "100%", maxWidth: "100%", objectFit: "contain", transition: "all 0.3s ease" }}
            />
          </div>

          {localized.gallery.length > 1 && (
            <div style={{ display: "flex", gap: "0.75rem", overflowX: "auto", paddingBottom: "0.5rem" }}>
              {localized.gallery.map((img, idx) => (
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
                    alt={`${localized.name} thumbnail ${idx}`}
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
            {localized.isLimitedEdition ? (
              <span
                style={{
                  background: "linear-gradient(135deg, #f5d77f 0%, #c5a059 60%, #9a7836 100%)",
                  color: "#0a0805",
                  padding: "0.32rem 0.85rem",
                  borderRadius: "20px",
                  fontSize: "0.75rem",
                  fontWeight: 800,
                  letterSpacing: "0.85px",
                  textTransform: "uppercase",
                  boxShadow: "0 2px 12px rgba(197, 160, 89, 0.45), 0 0 0 1px rgba(255, 235, 175, 0.5)",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.35rem",
                  marginBottom: "0.75rem",
                }}
              >
                <span style={{ fontSize: "0.8rem", color: "#6e4a10" }}>✦</span> {t.cigar.limitedEdition}
              </span>
            ) : localized.badge ? (
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
                {localized.badge}
              </span>
            ) : null}
            <h1 className="gold-gradient-text" style={{ fontSize: "2.5rem", margin: 0 }}>
              {localized.name}
            </h1>
            {localized.tagline && (
              <p style={{ color: "var(--color-gold-light)", fontSize: "1.1rem", fontStyle: "italic", marginTop: "0.5rem" }}>
                "{localized.tagline}"
              </p>
            )}
          </div>

          <p style={{ color: "#d0c0b0", fontSize: "1.05rem", lineHeight: 1.7, margin: 0 }}>
            {localized.description}
          </p>

          <div className="glass-card" style={{ padding: "1.25rem", borderRadius: "12px" }}>
            <h4 style={{ color: "var(--color-gold-light)", marginTop: 0, marginBottom: "0.75rem" }}>
              {t.cigar.flavorAndStrength}
            </h4>
            <div style={{ marginBottom: "1rem" }}>
              <StrengthIndicator strength={localized.strength} label={t.cigar.strengthLabel} />
            </div>
            <FlavorBadges notes={localized.notes} />
          </div>

          {/* Technical Specs Grid */}
          <div
            className="glass-card"
            style={{
              padding: "1.25rem",
              borderRadius: "12px",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
              gap: "1.25rem",
              fontSize: "0.95rem",
            }}
          >
            <div>
              <span style={{ color: "#a0a0a0", display: "block", fontSize: "0.85rem", marginBottom: "0.25rem" }}>
                {t.cigar.wrapperLabel}
              </span>
              <strong style={{ color: "#fff" }}>{localized.wrapper}</strong>
            </div>
            <div>
              <span style={{ color: "#a0a0a0", display: "block", fontSize: "0.85rem", marginBottom: "0.25rem" }}>
                {t.cigar.binderFillerLabel}
              </span>
              <strong style={{ color: "#fff" }}>{localized.binderFiller || t.cigar.defaultBinderFiller}</strong>
            </div>
            <div>
              <span style={{ color: "#a0a0a0", display: "block", fontSize: "0.85rem", marginBottom: "0.25rem" }}>
                {t.cigar.agingLabel}
              </span>
              <strong style={{ color: "var(--color-gold-light)" }}>{localized.aging}</strong>
            </div>
          </div>

          {/* Vitolas Table */}
          <VitolaTable vitolas={localized.vitolas} packaging={localized.packaging} />
        </div>
      </div>
    </div>
  );
};
