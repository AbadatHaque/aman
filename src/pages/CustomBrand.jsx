import React from 'react';
import { useTranslation, Trans } from 'react-i18next';

export default function CustomBrand() {
  const { t } = useTranslation();

  return (
    <section
      id="custom"
      className="custom-brand-section"
      style={{
        padding: "80px 20px",
        backgroundColor: "var(--surface)",
        color: "var(--text)",
        transition: "all 0.3s ease",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <div className="card reveal" style={{ padding: "40px", textAlign: "center", borderTopWidth: "6px" }}>
          <h2
            className="gradient-text"
            style={{
              fontSize: "2.5rem",
              fontWeight: "700",
              marginBottom: "1.5rem",
            }}
          >
            {t('custom.title')}
          </h2>

          <p
            style={{
              fontSize: "1.2rem",
              color: "var(--muted)",
              maxWidth: "800px",
              margin: "0 auto 2.5rem auto",
              lineHeight: "1.8",
            }}
          >
            <Trans i18nKey="custom.description">
              Stand out with your own identity! We provide complete <strong>OEM and Private Label</strong> solutions.
              Whatever your brand name or matchbox specification, we manufacture it with precision just for you.
            </Trans>
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "20px",
              marginBottom: "3rem",
              textAlign: "left",
            }}
          >
            <div style={{ padding: "20px", backgroundColor: "var(--bg)", borderRadius: "12px", border: "1px solid rgba(0,0,0,0.05)" }}>
              <h4 style={{ color: "var(--major)", marginBottom: "10px" }}>{t('custom.features.title')}</h4>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                <li style={{ marginBottom: "8px", display: "flex", alignItems: "center", gap: "10px" }}>
                  <span style={{ color: "var(--major)" }}>✓</span> {t('custom.features.1')}
                </li>
                <li style={{ marginBottom: "8px", display: "flex", alignItems: "center", gap: "10px" }}>
                  <span style={{ color: "var(--major)" }}>✓</span> {t('custom.features.2')}
                </li>
                <li style={{ marginBottom: "8px", display: "flex", alignItems: "center", gap: "10px" }}>
                  <span style={{ color: "var(--major)" }}>✓</span> {t('custom.features.3')}
                </li>
                <li style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <span style={{ color: "var(--major)" }}>✓</span> {t('custom.features.4')}
                </li>
              </ul>
            </div>

            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", padding: "20px" }}>
              <a href="#contact" className="cta" style={{ margin: 0 }}>
                {t('custom.cta')}
              </a>
              <p style={{ marginTop: "1rem", fontSize: "0.9rem", color: "var(--muted)" }}>
                Available for Domestic & Export Markets
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
