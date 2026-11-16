import React, { useState } from "react";
import { useLanguage } from "../i18n/LanguageContext";

interface ContactoPageProps {
  onNavigate?: (path: string) => void;
}

export const ContactoPage: React.FC<ContactoPageProps> = () => {
  const { t } = useLanguage();

  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    asunto: "Pedido de Cigarros",
    mensaje: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const whatsappPhone = "18494490857";
  const defaultWhatsAppMsg = t.contact.defaultWhatsAppMsg;
  const whatsappUrl = `https://wa.me/${whatsappPhone}?text=${encodeURIComponent(defaultWhatsAppMsg)}`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleCustomWhatsApp = () => {
    const customMsg = `${t.contact.customWhatsAppPrefix(formData.nombre)} ${
      formData.mensaje ? formData.mensaje : defaultWhatsAppMsg
    }`;
    window.open(`https://wa.me/${whatsappPhone}?text=${encodeURIComponent(customMsg)}`, "_blank");
  };

  return (
    <div style={{ width: "100%", overflowX: "hidden" }}>
      {/* Hero Banner */}
      <section
        style={{
          padding: "4rem 2rem 2.5rem",
          textAlign: "center",
          background: "linear-gradient(180deg, rgba(197, 160, 89, 0.12) 0%, rgba(10, 9, 8, 0) 100%)",
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
          {t.contact.eyebrow}
        </p>
        <h1 className="section-title gold-gradient-text" style={{ fontSize: "2.8rem", margin: 0 }}>
          {t.contact.title}
        </h1>
        <p
          className="section-subtitle"
          style={{
            color: "#d0c0b0",
            maxWidth: "700px",
            margin: "1rem auto 0",
            fontSize: "1.05rem",
            lineHeight: 1.7,
          }}
        >
          {t.contact.subtitle}
        </p>
      </section>

      {/* Main Content */}
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1.5rem 4rem" }}>
        {/* WhatsApp Featured CTA Card */}
        <div
          className="glass-card"
          style={{
            padding: "2rem 2.5rem",
            marginBottom: "3rem",
            borderRadius: "16px",
            border: "1px solid rgba(37, 211, 102, 0.4)",
            background: "linear-gradient(135deg, rgba(37, 211, 102, 0.08) 0%, rgba(197, 160, 89, 0.08) 100%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "1.5rem",
          }}
        >
          <div style={{ flex: 1, minWidth: "280px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "0.5rem" }}>
              <span
                style={{
                  background: "#25D366",
                  color: "#0a0908",
                  padding: "0.2rem 0.65rem",
                  borderRadius: "20px",
                  fontSize: "0.75rem",
                  fontWeight: 800,
                  letterSpacing: "0.5px",
                  textTransform: "uppercase",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.3rem",
                }}
              >
                {t.contact.fastAttention}
              </span>
              <span style={{ color: "var(--color-gold-light)", fontSize: "0.9rem", fontWeight: 600 }}>
                {t.contact.officialChannel}
              </span>
            </div>
            <h3 style={{ color: "#fff", fontSize: "1.5rem", margin: "0 0 0.5rem 0" }}>
              {t.contact.whatsappTitle}
            </h3>
            <p style={{ color: "#d0c0b0", margin: 0, fontSize: "0.95rem" }}>
              {t.contact.whatsappDesc_part1}
              <strong>+1 (849) 449-0857</strong>
              {t.contact.whatsappDesc_part2}
            </p>
          </div>

          <div>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.75rem",
                padding: "0.9rem 2rem",
                borderRadius: "30px",
                fontSize: "0.95rem",
                fontWeight: 700,
                textDecoration: "none",
                background: "linear-gradient(135deg, #25D366 0%, #128C7E 100%)",
                color: "#ffffff",
                boxShadow: "0 6px 20px rgba(37, 211, 102, 0.35)",
                transition: "all 0.3s ease",
              }}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
              </svg>
              <span>{t.contact.whatsappBtn}</span>
            </a>
          </div>
        </div>

        {/* 2-Column Section: Contact Details & Interactive Form */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
            gap: "2.5rem",
            alignItems: "start",
            marginBottom: "4rem",
          }}
        >
          {/* Information Column */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <div className="glass-card" style={{ padding: "1.75rem", borderRadius: "14px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.75rem" }}>
                <span style={{ fontSize: "1.5rem" }}>📍</span>
                <h3 className="gold-gradient-text" style={{ margin: 0, fontSize: "1.25rem" }}>
                  {t.contact.boutiqueTitle}
                </h3>
              </div>
              <p style={{ color: "#d0c0b0", lineHeight: 1.7, margin: 0 }}>
                <strong>{t.contact.boutiquePlace}</strong>
                <br />
                {t.contact.boutiqueStreet}
                <br />
                {t.contact.boutiqueCity}
              </p>
              <p style={{ color: "var(--color-gold-light)", fontSize: "0.88rem", marginTop: "0.5rem" }}>
                <em>{t.contact.boutiqueRef}</em>
              </p>
            </div>

            <div className="glass-card" style={{ padding: "1.75rem", borderRadius: "14px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.75rem" }}>
                <span style={{ fontSize: "1.5rem" }}>📞</span>
                <h3 className="gold-gradient-text" style={{ margin: 0, fontSize: "1.25rem" }}>
                  {t.contact.linesTitle}
                </h3>
              </div>
              <div style={{ color: "#d0c0b0", lineHeight: 1.8 }}>
                <p style={{ margin: "0 0 0.5rem 0" }}>
                  <strong>{t.contact.whatsappOrdersLabel}</strong>{" "}
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#25D366", textDecoration: "none", fontWeight: 600 }}
                  >
                    +1 (849) 449-0857
                  </a>
                </p>
                <p style={{ margin: "0 0 0.5rem 0" }}>
                  <strong>{t.contact.phoneBoutiqueLabel}</strong>{" "}
                  <a href="tel:+18096856425" style={{ color: "#fff", textDecoration: "none" }}>
                    +1 (809) 685-6425
                  </a>
                </p>
                <p style={{ margin: 0 }}>
                  <strong>{t.contact.emailLabel}</strong>{" "}
                  <a href="mailto:Info@caobacigars.com" style={{ color: "var(--color-gold-light)", textDecoration: "none" }}>
                    Info@caobacigars.com
                  </a>
                </p>
              </div>
            </div>

            <div className="glass-card" style={{ padding: "1.75rem", borderRadius: "14px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.75rem" }}>
                <span style={{ fontSize: "1.5rem" }}>🕒</span>
                <h3 className="gold-gradient-text" style={{ margin: 0, fontSize: "1.25rem" }}>
                  {t.contact.hoursTitle}
                </h3>
              </div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, color: "#d0c0b0", lineHeight: 1.8 }}>
                <li>
                  <strong>{t.contact.hoursMonSatLabel}</strong> {t.contact.hoursMonSatVal}
                </li>
                <li>
                  <strong>{t.contact.hoursSunLabel}</strong> {t.contact.hoursSunVal}
                </li>
              </ul>
            </div>
          </div>

          {/* Form Column */}
          <div className="glass-card" style={{ padding: "2.25rem", borderRadius: "16px" }}>
            <h2 className="gold-gradient-text" style={{ fontSize: "1.8rem", marginBottom: "0.5rem" }}>
              {t.contact.formTitle}
            </h2>
            <p style={{ color: "#d0c0b0", fontSize: "0.95rem", marginBottom: "1.75rem" }}>
              {t.contact.formSubtitle}
            </p>

            {isSubmitted ? (
              <div
                style={{
                  background: "rgba(197, 160, 89, 0.1)",
                  border: "1px solid var(--color-gold)",
                  borderRadius: "12px",
                  padding: "2rem",
                  textAlign: "center",
                }}
              >
                <div style={{ fontSize: "2.5rem", marginBottom: "0.75rem" }}>✨</div>
                <h3 className="gold-gradient-text" style={{ fontSize: "1.4rem", margin: "0 0 0.5rem 0" }}>
                  {t.contact.receivedTitle}
                </h3>
                <p style={{ color: "#d0c0b0", marginBottom: "1.5rem" }}>
                  {t.contact.receivedDesc_part1}
                  <strong>{formData.nombre}</strong>
                  {t.contact.receivedDesc_part2}
                </p>
                <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ nombre: "", email: "", telefono: "", asunto: "Pedido de Cigarros", mensaje: "" });
                    }}
                    className="btn-outline"
                    style={{ fontSize: "0.85rem", padding: "0.6rem 1.5rem" }}
                  >
                    {t.contact.sendAnotherBtn}
                  </button>
                  <button
                    onClick={handleCustomWhatsApp}
                    className="btn-primary"
                    style={{ fontSize: "0.85rem", padding: "0.6rem 1.5rem" }}
                  >
                    {t.contact.openWhatsAppBtn}
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                <div className="form-group">
                  <label htmlFor="contacto-nombre" className="form-label">
                    {t.contact.nameLabel}
                  </label>
                  <input
                    id="contacto-nombre"
                    type="text"
                    required
                    value={formData.nombre}
                    onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                    placeholder={t.contact.namePlaceholder}
                    className="form-input"
                  />
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: "1rem" }}>
                  <div className="form-group">
                    <label htmlFor="contacto-email" className="form-label">
                      {t.contact.emailInputLabel}
                    </label>
                    <input
                      id="contacto-email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder={t.contact.emailPlaceholder}
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="contacto-telefono" className="form-label">
                      {t.contact.phoneInputLabel}
                    </label>
                    <input
                      id="contacto-telefono"
                      type="tel"
                      value={formData.telefono}
                      onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                      placeholder="+1 (849) 000-0000"
                      className="form-input"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="contacto-asunto" className="form-label">
                    {t.contact.subjectLabel}
                  </label>
                  <select
                    id="contacto-asunto"
                    value={formData.asunto}
                    onChange={(e) => setFormData({ ...formData, asunto: e.target.value })}
                    className="form-select"
                  >
                    <option value="Pedido de Cigarros">{t.contact.subjectOptions.order}</option>
                    <option value="Consulta sobre Líneas Exclusivas">{t.contact.subjectOptions.exclusive}</option>
                    <option value="Visita a la Boutique / Fábrica">{t.contact.subjectOptions.visit}</option>
                    <option value="Distribución Mayorista">{t.contact.subjectOptions.wholesale}</option>
                    <option value="Otro">{t.contact.subjectOptions.other}</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="contacto-mensaje" className="form-label">
                    {t.contact.messageLabel}
                  </label>
                  <textarea
                    id="contacto-mensaje"
                    required
                    rows={4}
                    value={formData.mensaje}
                    onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                    placeholder={t.contact.messagePlaceholder}
                    className="form-textarea"
                  />
                </div>

                <div style={{ display: "flex", gap: "1rem", marginTop: "0.5rem", flexWrap: "wrap" }}>
                  <button type="submit" className="btn-primary" style={{ flex: 1 }}>
                    {t.contact.submitBtn}
                  </button>
                  <button
                    type="button"
                    onClick={handleCustomWhatsApp}
                    className="btn-outline"
                    style={{ flex: 1, display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "0.5rem" }}
                  >
                    <span>💬</span> {t.contact.sendViaWhatsAppBtn}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* Interactive Google Map Section */}
        <div className="glass-card" style={{ padding: "1.5rem", borderRadius: "16px", marginTop: "1rem" }}>
          <div style={{ textAlign: "center", marginBottom: "1.5rem" }}>
            <p
              style={{
                textTransform: "uppercase",
                letterSpacing: "2px",
                color: "var(--color-gold-light)",
                fontSize: "0.85rem",
                fontWeight: 600,
                margin: 0,
              }}
            >
              {t.contact.mapEyebrow}
            </p>
            <h2 className="gold-gradient-text" style={{ fontSize: "1.8rem", margin: "0.25rem 0" }}>
              {t.contact.mapTitle}
            </h2>
          </div>

          <div
            style={{
              width: "100%",
              height: "420px",
              borderRadius: "12px",
              overflow: "hidden",
              border: "1px solid rgba(197, 160, 89, 0.3)",
            }}
          >
            <iframe
              title={t.contact.mapIframeTitle}
              src="https://maps.google.com/maps?q=Caoba%20Cigars%2C%20Calle%20El%20Conde%20101%2C%20Plaza%20Col%C3%B3n%2C%20Santo%20Domingo%2C%20Dominican%20Republic&t=&z=17&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
