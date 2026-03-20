
import { useTranslation } from 'react-i18next';

export default function Testimonial(){
  const { t } = useTranslation();

    return <section
  id="testimonial"
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
      {t('testimonials.title')}
    </h2>

    <p
      style={{
        textAlign: "center",
        color: "var(--muted)",
        fontSize: "1.1rem",
        maxWidth: "800px",
        margin: "0 auto 3rem auto",
        lineHeight: "1.8",
      }}
    >
      {t('testimonials.description')}
    </p>

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
        gap: "24px",
      }}
    >
      {/* Testimonial 1 */}
      <div
        className="card reveal"
        style={{
          borderTopColor: "var(--major)",
          padding: "24px",
        }}
      >
        <p style={{ color: "var(--text)", lineHeight: "1.7", marginBottom: "1rem" }}>
          {t('testimonials.t1.text')}
        </p>
        <p style={{ fontWeight: "700", color: "var(--major)" }}>{t('testimonials.t1.author')}</p>
        <p style={{ color: "var(--muted)", fontSize: "0.9rem" }}>{t('testimonials.t1.location')}</p>
      </div>

      {/* Testimonial 2 */}
      <div
        className="card reveal"
        style={{
          borderTopColor: "var(--minor)",
          padding: "24px",
        }}
      >
        <p style={{ color: "var(--text)", lineHeight: "1.7", marginBottom: "1rem" }}>
          {t('testimonials.t2.text')}
        </p>
        <p style={{ fontWeight: "700", color: "var(--minor)" }}>{t('testimonials.t2.author')}</p>
        <p style={{ color: "var(--muted)", fontSize: "0.9rem" }}>{t('testimonials.t2.location')}</p>
      </div>

      {/* Testimonial 3 */}
      <div
        className="card reveal"
        style={{
          borderTopColor: "var(--patch)",
          padding: "24px",
        }}
      >
        <p style={{ color: "var(--text)", lineHeight: "1.7", marginBottom: "1rem" }}>
          {t('testimonials.t3.text')}
        </p>
        <p style={{ fontWeight: "700", color: "var(--patch)" }}>{t('testimonials.t3.author')}</p>
        <p style={{ color: "var(--muted)", fontSize: "0.9rem" }}>{t('testimonials.t3.location')}</p>
      </div>
    </div>
  </div>
</section>
}