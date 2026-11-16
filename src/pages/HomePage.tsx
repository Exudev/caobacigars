import React from "react";
import { CIGAR_LINES } from "../data/cigars";
import { CigarCard } from "../components/CigarCard";
import { useLanguage } from "../i18n/LanguageContext";

interface HomePageProps {
  onNavigate: (path: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const { t } = useLanguage();
  const featuredLines = CIGAR_LINES.filter((c) => c.featured);

  return (
    <main style={{ width: "100%", overflowX: "hidden" }}>
      {/* Hero Section */}
      <section
        id="hero-slider"
        className="hero"
        style={{ backgroundImage: 'url("/images/DSC05620.jpg")' }}
      >
        <div className="hero-overlay" />
        <div className="hero-content">
          <p
            style={{
              textTransform: "uppercase",
              letterSpacing: "4px",
              color: "var(--color-gold-light)",
              fontSize: "0.9rem",
              marginBottom: "1rem",
              fontWeight: 600,
            }}
          >
            {t.home.eyebrow}
          </p>
          <h1 className="gold-gradient-text">{t.home.title}</h1>
          <p>{t.home.subtitle}</p>
          <div
            style={{
              display: "flex",
              gap: "1.25rem",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <a
              href="/lineas/"
              className="btn-primary"
              onClick={(e) => {
                e.preventDefault();
                onNavigate("/lineas/");
              }}
            >
              {t.home.exploreBtn}
            </a>
            <a
              href="/historia/"
              className="btn-outline"
              onClick={(e) => {
                e.preventDefault();
                onNavigate("/historia/");
              }}
            >
              {t.home.historyBtn}
            </a>
          </div>
        </div>
      </section>

      {/* Heritage Stats Bar */}
      <div className="heritage-stats glass-card">
        <div className="stat-item">
          <div className="stat-number">30+</div>
          <div className="stat-label">{t.home.stats.years}</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">100%</div>
          <div className="stat-label">{t.home.stats.handmade}</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">{CIGAR_LINES.length}</div>
          <div className="stat-label">{t.home.stats.exclusiveLines}</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">{t.home.stats.bestValleysNum}</div>
          <div className="stat-label">{t.home.stats.bestValleysLabel}</div>
        </div>
      </div>

      {/* Featured Collections Showcase */}
      <section className="collection" style={{ padding: "4rem 1.5rem" }}>
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <h2 className="section-title gold-gradient-text">{t.home.featuredTitle}</h2>
          <p className="section-subtitle">{t.home.featuredSubtitle}</p>
        </div>

        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "2rem",
          }}
        >
          {featuredLines.map((cigar) => (
            <CigarCard
              key={cigar.id}
              cigar={cigar}
              onSelect={(id) => onNavigate(`/lineas/${id}/`)}
            />
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: "3rem" }}>
          <a
            href="/lineas/"
            className="btn-primary"
            onClick={(e) => {
              e.preventDefault();
              onNavigate("/lineas/");
            }}
          >
            {t.home.viewAllLines(CIGAR_LINES.length)}
          </a>
        </div>
      </section>

      {/* Brand Heritage Section */}
      <section
        style={{
          borderTop: "1px solid rgba(197, 160, 89, 0.15)",
          padding: "5rem 1.5rem",
          background: "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(197, 160, 89, 0.04) 100%)",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "3rem",
            alignItems: "center",
          }}
        >
          <div>
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
              {t.home.heritageEyebrow}
            </p>
            <h2 className="gold-gradient-text" style={{ fontSize: "2.2rem", marginBottom: "1.25rem" }}>
              {t.home.heritageTitle}
            </h2>
            <p style={{ color: "#d0c0b0", lineHeight: 1.8, fontSize: "1.05rem", marginBottom: "1.25rem" }}>
              {t.home.heritageP1}
            </p>
            <p style={{ color: "#d0c0b0", lineHeight: 1.8, fontSize: "1.05rem", marginBottom: "2rem" }}>
              {t.home.heritageP2}
            </p>
            <a
              href="/historia/"
              className="btn-outline"
              onClick={(e) => {
                e.preventDefault();
                onNavigate("/historia/");
              }}
            >
              {t.home.heritageBtn}
            </a>
          </div>

          <div style={{ textAlign: "center" }}>
            <div className="glass-card" style={{ padding: "1rem", borderRadius: "16px" }}>
              <img
                src="/images/fundador-tabacalera-caoba.jpg"
                alt={t.home.heritageImgAlt}
                style={{ width: "100%", maxHeight: "380px", objectFit: "cover", borderRadius: "12px" }}
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
