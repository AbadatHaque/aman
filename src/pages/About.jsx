export default function About() {
    return <section
  id="about"
  className="about-section"
  style={{
    padding: "80px 20px",
    backgroundColor: "var(--bg)",
    color: "var(--text)",
    transition: "all 0.3s ease",
  }}
>
  <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
    <h2
      style={{
        fontSize: "2.5rem",
        color: "var(--major)",
        fontWeight: "700",
        textAlign: "center",
        marginBottom: "2rem",
      }}
    >
      About Luminex Sparq Company
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
      <strong>Luminex Sparq Company</strong> — the creator of{" "}
      <strong>Bagh Chingari</strong> — stands as a trusted manufacturer of
      premium <strong>safety matches</strong> and <strong>pure matti sticks</strong>.
      Based in <strong>Sattur, Tamil Nadu</strong>, we combine craftsmanship,
      technology, and sustainability to deliver quality products that ignite
      trust and reliability.
    </p>

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
        gap: "20px",
      }}
    >
      <div
        style={{
          backgroundColor: "var(--surface)",
          borderLeft: "5px solid var(--major)",
          borderRadius: "12px",
          padding: "24px",
          boxShadow: "0 6px 18px var(--card-shadow)",
        }}
      >
        <h3 style={{ color: "var(--major)" }}>Our Mission</h3>
        <p style={{ color: "var(--text)", lineHeight: "1.7" }}>
          To deliver high-quality and safe products that bring reliability and
          satisfaction to our customers — both in India and across the globe.
        </p>
      </div>

      <div
        style={{
          backgroundColor: "var(--surface)",
          borderLeft: "5px solid var(--minor)",
          borderRadius: "12px",
          padding: "24px",
          boxShadow: "0 6px 18px var(--card-shadow)",
        }}
      >
        <h3 style={{ color: "var(--minor)" }}>Our Vision</h3>
        <p style={{ color: "var(--text)", lineHeight: "1.7" }}>
          To be the most trusted and innovative brand in the safety match
          industry, setting new benchmarks in quality, sustainability, and
          customer service.
        </p>
      </div>

      <div
        style={{
          backgroundColor: "var(--surface)",
          borderLeft: "5px solid var(--patch)",
          borderRadius: "12px",
          padding: "24px",
          boxShadow: "0 6px 18px var(--card-shadow)",
        }}
      >
        <h3 style={{ color: "var(--patch)" }}>Our Values</h3>
        <ul style={{ color: "var(--text)", lineHeight: "1.7", paddingLeft: "1.2rem" }}>
          <li>Quality first, always</li>
          <li>Safety and sustainability</li>
          <li>Innovation with integrity</li>
          <li>Customer satisfaction at the core</li>
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
        <strong>“Igniting Trust with Quality”</strong> — Bagh Chingari continues
        to light up lives with dedication and craftsmanship.
      </p>
    </div>
  </div>
</section>
}