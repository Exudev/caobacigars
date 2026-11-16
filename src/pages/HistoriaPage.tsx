import React from "react";
import { CIGAR_LINES } from "../data/cigars";
import { useLanguage } from "../i18n/LanguageContext";

interface HistoriaPageProps {
  onNavigate: (path: string) => void;
}

export const HistoriaPage: React.FC<HistoriaPageProps> = ({ onNavigate }) => {
  const { t } = useLanguage();

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
          {t.history.eyebrow}
        </p>
        <h1 className="section-title gold-gradient-text" style={{ fontSize: "2.8rem", margin: 0 }}>
          {t.history.title}
        </h1>
        <p className="section-subtitle" style={{ color: "#d0c0b0", maxWidth: "680px", margin: "1rem auto 0", fontSize: "1.05rem" }}>
          {t.history.subtitle}
        </p>
      </section>

      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1.5rem 4rem" }}>
        {/* Founder & Origins Section */}
        <section className="split-section" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "3rem", alignItems: "center", padding: "3rem 0" }}>
          <div className="text-content">
            <h2 className="gold-gradient-text" style={{ fontSize: "2rem", marginBottom: "1.25rem" }}>
              {t.history.originsTitle}
            </h2>
            <p style={{ color: "#d0c0b0", lineHeight: 1.8, fontSize: "1.05rem" }}>
              {t.history.originsP1_part1}
              <strong>Don Julio Pérez González</strong>
              {t.history.originsP1_part2}
              <strong>Doña Alicia Lama Handal</strong>
              {t.history.originsP1_part3}
            </p>
            <p style={{ color: "#d0c0b0", lineHeight: 1.8, fontSize: "1.05rem" }}>
              {t.history.originsP2}
            </p>
            <p style={{ color: "#d0c0b0", lineHeight: 1.8, fontSize: "1.05rem" }}>
              {t.history.originsP3_part1}
              <em>{t.history.originsP3_em}</em>
              {t.history.originsP3_part2}
            </p>

            <div
              className="glass-card"
              style={{
                padding: "1.25rem 1.75rem",
                marginTop: "2rem",
                borderLeft: "4px solid var(--color-gold)",
                borderRadius: "0 12px 12px 0",
              }}
            >
              <p
                style={{
                  color: "var(--color-gold-light)",
                  fontWeight: 600,
                  fontSize: "1.1rem",
                  margin: 0,
                  fontFamily: "'Cinzel', serif",
                }}
              >
                {t.history.dnaQuote}
              </p>
            </div>
          </div>

          <div className="image-content" style={{ textAlign: "center" }}>
            <div className="glass-card" style={{ padding: "1rem", borderRadius: "16px", display: "inline-block" }}>
              <img
                src="/images/fundador-tabacalera-caoba.jpg"
                alt={t.history.founderAlt}
                style={{ width: "100%", maxWidth: "420px", borderRadius: "12px", objectFit: "cover" }}
              />
              <div style={{ marginTop: "1.25rem" }}>
                <h3 style={{ color: "var(--color-gold-light)", fontSize: "1.4rem", margin: "0 0 0.25rem 0" }}>
                  Don Julio Pérez González
                </h3>
                <p style={{ color: "#a0a0a0", fontSize: "0.95rem", margin: 0 }}>
                  {t.history.founderRole}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Craftsmanship Section */}
        <section
          style={{
            borderTop: "1px solid rgba(197, 160, 89, 0.15)",
            padding: "4rem 0",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "3rem",
            alignItems: "center",
          }}
        >
          <div className="image-content" style={{ textAlign: "center" }}>
            <div className="glass-card" style={{ padding: "1rem", borderRadius: "16px" }}>
              <img
                src="/images/prod1-1.png"
                alt={t.history.craftAlt}
                style={{ width: "100%", maxHeight: "380px", objectFit: "cover", borderRadius: "12px" }}
              />
            </div>
          </div>

          <div className="text-content">
            <h2 className="gold-gradient-text" style={{ fontSize: "2rem", marginBottom: "1.25rem" }}>
              {t.history.craftTitle}
            </h2>
            <p style={{ color: "#d0c0b0", lineHeight: 1.8, fontSize: "1.05rem" }}>
              {t.history.craftP1_part1}
              <strong>{t.history.craftP1_strong}</strong>
              {t.history.craftP1_part2}
            </p>
            <p style={{ color: "#d0c0b0", lineHeight: 1.8, fontSize: "1.05rem" }}>
              {t.history.craftP2}
            </p>
          </div>
        </section>

        {/* Limited Production Section */}
        <section
          style={{
            borderTop: "1px solid rgba(197, 160, 89, 0.15)",
            padding: "4rem 0 2rem",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "3rem",
            alignItems: "center",
          }}
        >
          <div className="text-content">
            <h2 className="gold-gradient-text" style={{ fontSize: "2rem", marginBottom: "1.25rem" }}>
              {t.history.limitedTitle}
            </h2>
            <p style={{ color: "#d0c0b0", lineHeight: 1.8, fontSize: "1.05rem" }}>
              {t.history.limitedP1}
            </p>
            <p style={{ color: "#d0c0b0", lineHeight: 1.8, fontSize: "1.05rem" }}>
              {t.history.limitedP2}
            </p>
            <p style={{ color: "#d0c0b0", lineHeight: 1.8, fontSize: "1.05rem" }}>
              {t.history.limitedP3}
            </p>
            <div style={{ marginTop: "2rem" }}>
              <a
                href="/lineas/"
                className="btn-primary"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate("/lineas/");
                }}
              >
                {t.history.discoverBtn(CIGAR_LINES.length)}
              </a>
            </div>
          </div>

          <div className="image-content" style={{ textAlign: "center" }}>
            <div className="glass-card" style={{ padding: "1rem", borderRadius: "16px" }}>
              <img
                src="/images/prod2-1.png"
                alt={t.history.limitedAlt}
                style={{ width: "100%", maxHeight: "380px", objectFit: "cover", borderRadius: "12px" }}
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
