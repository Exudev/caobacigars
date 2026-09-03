import React from "react";

interface HistoriaPageProps {
  onNavigate: (path: string) => void;
}

export const HistoriaPage: React.FC<HistoriaPageProps> = ({ onNavigate }) => {
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
          Tradición & Meticuloso Saber Hacer
        </p>
        <h1 className="section-title gold-gradient-text" style={{ fontSize: "2.8rem", margin: 0 }}>
          Nuestra Historia y Producción
        </h1>
        <p className="section-subtitle" style={{ color: "#d0c0b0", maxWidth: "680px", margin: "1rem auto 0", fontSize: "1.05rem" }}>
          Tres décadas dedicadas a la búsqueda de la perfección en cada hoja de tabaco dominicano.
        </p>
      </section>

      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1.5rem 4rem" }}>
        {/* Founder & Origins Section */}
        <section className="split-section" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "3rem", alignItems: "center", padding: "3rem 0" }}>
          <div className="text-content">
            <h2 className="gold-gradient-text" style={{ fontSize: "2rem", marginBottom: "1.25rem" }}>
              Orígenes de Caoba Cigars
            </h2>
            <p style={{ color: "#d0c0b0", lineHeight: 1.8, fontSize: "1.05rem" }}>
              Caoba Cigars es una empresa familiar de labores de tabaco situada en el corazón de Santo Domingo en la emblemática Plaza Colón. Nace de la pasión por los cigarros de <strong>Don Julio Pérez González</strong>, emigrante de origen español, que contrajo matrimonio con la empresaria dominicana <strong>Doña Alicia Lama Handal</strong>, quien se estableció durante 66 años en República Dominicana e inició en 1992 la producción de los cigarros que hoy dan nombre a nuestra marca.
            </p>
            <p style={{ color: "#d0c0b0", lineHeight: 1.8, fontSize: "1.05rem" }}>
              Don Julio era un enamorado de la madera noble y como tal fue propietario de un taller artesanal de esculturas de caoba en Santo Domingo, lo que le llevó a nombrar nuestra marca. Actualmente, Caoba Cigars se encuentra registrada en República Dominicana, Estados Unidos y la Unión Europea.
            </p>
            <p style={{ color: "#d0c0b0", lineHeight: 1.8, fontSize: "1.05rem" }}>
              Inicialmente, Caoba Cigars tenía su sede en Villa Faro (fábrica que aún conservamos). En la actualidad, nuestra <em>Boutique de Fabricación</em> se encuentra en la Zona Colonial, frente a la Catedral Primada de América, donde nuestros clientes contemplan el proceso de producción enteramente manual de nuestros cigarros.
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
                Nuestro ADN: “Pasión por la excelencia”.
              </p>
            </div>
          </div>

          <div className="image-content" style={{ textAlign: "center" }}>
            <div className="glass-card" style={{ padding: "1rem", borderRadius: "16px", display: "inline-block" }}>
              <img
                src="/images/fundador-tabacalera-caoba.jpg"
                alt="Don Julio Pérez González - Fundador Caoba Cigars"
                style={{ width: "100%", maxWidth: "420px", borderRadius: "12px", objectFit: "cover" }}
              />
              <div style={{ marginTop: "1.25rem" }}>
                <h3 style={{ color: "var(--color-gold-light)", fontSize: "1.4rem", margin: "0 0 0.25rem 0" }}>
                  Don Julio Pérez González
                </h3>
                <p style={{ color: "#a0a0a0", fontSize: "0.95rem", margin: 0 }}>
                  Fundador de Caoba Cigars
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
                alt="Maestros Torcedores de Caoba Cigars"
                style={{ width: "100%", maxHeight: "380px", objectFit: "cover", borderRadius: "12px" }}
              />
            </div>
          </div>

          <div className="text-content">
            <h2 className="gold-gradient-text" style={{ fontSize: "2rem", marginBottom: "1.25rem" }}>
              Elaboración 100% Artesanal
            </h2>
            <p style={{ color: "#d0c0b0", lineHeight: 1.8, fontSize: "1.05rem" }}>
              Todo el proceso que sigue nuestra hoja de tabaco desde su cosecha está avalado por más de 30 años de buen hacer en las fértiles vegas de <strong>El Cibao</strong>. El control de calidad en cada uno de los pasos es constante, riguroso y tradicional.
            </p>
            <p style={{ color: "#d0c0b0", lineHeight: 1.8, fontSize: "1.05rem" }}>
              Los procesos de secado, escogida de la hoja, despalille, empalme y torcido terminan en un producto de aroma excelso para luego empacarlo con mimo en hermosas cajas de madera de caoba noble.
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
              Edición y Producción Limitada
            </h2>
            <p style={{ color: "#d0c0b0", lineHeight: 1.8, fontSize: "1.05rem" }}>
              Como las más exclusivas producciones artesanales del mundo, Caoba mantiene una producción estrictamente limitada. No por falta de demanda, sino porque Caoba no compromete su calidad, manteniéndose fiel a su herencia.
            </p>
            <p style={{ color: "#d0c0b0", lineHeight: 1.8, fontSize: "1.05rem" }}>
              Contamos con tabacos seleccionados de la cuenca caribeña, Brasil y África. Elaboramos cigarros de tripa Dominicana y Nicaragüense con capote de Habano Ecuador y capas San Andrés (México) o Connecticut. Este grado de precisión solo se logra conservando lotes limitados.
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
                Descubrir las 11 Líneas &rarr;
              </a>
            </div>
          </div>

          <div className="image-content" style={{ textAlign: "center" }}>
            <div className="glass-card" style={{ padding: "1rem", borderRadius: "16px" }}>
              <img
                src="/images/prod2-1.png"
                alt="Producción Limitada y Añejamiento Caoba"
                style={{ width: "100%", maxHeight: "380px", objectFit: "cover", borderRadius: "12px" }}
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
