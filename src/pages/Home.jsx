import { useTranslation, Trans } from 'react-i18next';

export default function Home() {
  const { t } = useTranslation();
  return (
    <section
      id="home"
      className="home-section"
      style={{
        padding: "80px 20px",
        textAlign: "center",
        backgroundColor: "var(--bg)",
        color: "var(--text)",
        transition: "all 0.4s ease-in-out",
      }}
    >
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <h1
          style={{
            fontSize: "3rem",
            color: "var(--major)",
            fontWeight: 700,
            marginBottom: "1rem",
          }}
        >
          {t('home.title')}
        </h1>

        <p
          style={{
            fontSize: "1.2rem",
            lineHeight: 1.8,
            color: "var(--muted)",
            marginBottom: "2rem",
          }}
        >
          <Trans i18nKey="home.description">
            Welcome to <strong>Bagh Chingari</strong> — the creative extension of{" "}
            <strong>Luminex Sparq Company</strong>, one of India’s leading
            manufacturers and exporters of premium-quality safety matchboxes based
            in Kovilpatti, Tamil Nadu.
            We’re dedicated to crafting <strong>wooden matches</strong>,{" "}
            <strong>wax matches</strong>, and <strong>promotional matchboxes</strong>{" "}
            that meet international quality and safety standards — lighting up
            lives across the world with sustainable craftsmanship and precision.
          </Trans>
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            flexWrap: "wrap",
          }}
        >
          <div
            className="card reveal"
            style={{
              width: "260px",
              borderTopColor: "var(--major)",
            }}
          >
            <h3 style={{ color: "var(--minor)", marginBottom: "0.5rem" }}>
              {t('home.quality.title')}
            </h3>
            <p style={{ color: "var(--text)", fontSize: "0.95rem" }}>
              {t('home.quality.desc')}
            </p>
          </div>

          <div
            className="card reveal"
            style={{
              width: "260px",
              borderTopColor: "var(--minor)",
            }}
          >
            <h3 style={{ color: "var(--major)", marginBottom: "0.5rem" }}>
              {t('home.reach.title')}
            </h3>
            <p style={{ color: "var(--text)", fontSize: "0.95rem" }}>
              {t('home.reach.desc')}
            </p>
          </div>

          <div
            className="card reveal"
            style={{
              width: "260px",
              borderTopColor: "var(--patch)",
            }}
          >
            <h3 style={{ color: "var(--patch)", marginBottom: "0.5rem" }}>
              {t('home.excellence.title')}
            </h3>
            <p style={{ color: "var(--text)", fontSize: "0.95rem" }}>
              {t('home.excellence.desc')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
