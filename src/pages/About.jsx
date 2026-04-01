import { useTranslation, Trans } from 'react-i18next';

export default function About() {
    const { t } = useTranslation();
    return <section
  id="about"
  className="reveal"
  style={{
    padding: "80px 20px",
    backgroundColor: "var(--bg)",
    color: "var(--text)",
    transition: "all 0.3s ease",
  }}
>
  <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
    <h2
      className="gradient-text"
      style={{
        fontSize: "2.5rem",
        fontWeight: "700",
        textAlign: "center",
        marginBottom: "2rem",
      }}
    >
      {t('about.title')}
    </h2>

    <p
      style={{
        fontSize: "1.1rem",
        lineHeight: "1.8",
        color: "var(--muted)",
        textAlign: "center",
        marginBottom: "3rem",
      }}
    >
      <Trans i18nKey="about.description">
        <strong>Luminex Sparq Company</strong> — the creator of{" "}
        <strong>Bagh Chingari</strong> — stands as a trusted manufacturer of
        premium <strong>safety matches</strong> and <strong>pure matti sticks</strong>.
        Based in <strong>Kovilpatti, Tamil Nadu</strong>, we combine craftsmanship,
        technology, and sustainability to deliver quality products that ignite
        trust and reliability.
      </Trans>
    </p>

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
        gap: "20px",
      }}
    >
      <div
        className="card reveal"
        style={{
          borderTopColor: "var(--major)",
        }}
      >
        <h3 style={{ color: "var(--major)" }}>{t('about.mission.title')}</h3>
        <p style={{ color: "var(--text)", lineHeight: "1.7" }}>
          {t('about.mission.desc')}
        </p>
      </div>

      <div
        className="card reveal"
        style={{
          borderTopColor: "var(--minor)",
        }}
      >
        <h3 style={{ color: "var(--minor)" }}>{t('about.vision.title')}</h3>
        <p style={{ color: "var(--text)", lineHeight: "1.7" }}>
          {t('about.vision.desc')}
        </p>
      </div>

      <div
        className="card reveal"
        style={{
          borderTopColor: "var(--patch)",
        }}
      >
        <h3 style={{ color: "var(--patch)" }}>{t('about.values.title')}</h3>
        <ul style={{ color: "var(--text)", lineHeight: "1.7", paddingLeft: "1.2rem" }}>
          <li>{t('about.values.list.1')}</li>
          <li>{t('about.values.list.2')}</li>
          <li>{t('about.values.list.3')}</li>
          <li>{t('about.values.list.4')}</li>
        </ul>
      </div>
    </div>

    <div
      style={{
        marginTop: "3rem",
        textAlign: "center",
        color: "var(--muted)",
      }}
    >
      <p>
        <Trans i18nKey="about.footer">
          <strong>“Igniting Trust with Quality”</strong> — Bagh Chingari continues
          to light up lives with dedication and craftsmanship.
        </Trans>
      </p>
    </div>
  </div>
</section>
}