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
            in Sattur, Tamil Nadu.
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
            style={{
              backgroundColor: "var(--surface)",
              border: "1px solid rgba(0,0,0,0.1)",
              borderTop: "4px solid var(--major)",
              borderRadius: "12px",
              padding: "20px",
              width: "260px",
              boxShadow: "0 6px 18px rgba(0,0,0,0.06)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "var(--bg)";
              e.currentTarget.style.transform = "translateY(-5px)";
              e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.08)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "var(--surface)";
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 6px 18px rgba(0,0,0,0.06)";
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
            style={{
              backgroundColor: "var(--surface)",
              border: "1px solid rgba(0,0,0,0.1)",
              borderTop: "4px solid var(--minor)",
              borderRadius: "12px",
              padding: "20px",
              width: "260px",
              boxShadow: "0 6px 18px rgba(0,0,0,0.06)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "var(--bg)";
              e.currentTarget.style.transform = "translateY(-5px)";
              e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.08)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "var(--surface)";
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 6px 18px rgba(0,0,0,0.06)";
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
            style={{
              backgroundColor: "var(--surface)",
              border: "1px solid rgba(0,0,0,0.1)",
              borderTop: "4px solid var(--patch)",
              borderRadius: "12px",
              padding: "20px",
              width: "260px",
              boxShadow: "0 6px 18px rgba(0,0,0,0.06)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "var(--bg)";
              e.currentTarget.style.transform = "translateY(-5px)";
              e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.08)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "var(--surface)";
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 6px 18px rgba(0,0,0,0.06)";
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
