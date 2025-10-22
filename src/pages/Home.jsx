
export default function Home() {
     return <section
  id="home"
  className="home-section"
  style={{
    padding: "80px 20px",
    textAlign: "center",
    backgroundColor: "var(--bg)",
    color: "var(--text)",
    transition: "all 0.3s ease",
  }}
>
  <div style={{ maxWidth: "900px", margin: "0 auto" }}>
    <h1
      style={{
        fontSize: "3rem",
        color: "var(--major)",
        fontWeight: "700",
        marginBottom: "1rem",
      }}
    >
      Luminex Sparq Company
    </h1>

    <p
      style={{
        fontSize: "1.2rem",
        lineHeight: "1.8",
        color: "var(--muted)",
        marginBottom: "2rem",
      }}
    >
      Welcome to <strong>Bagh Chingari</strong> — a leading innovation-driven
      brand that blends technology, creativity, and sustainability to deliver
      cutting-edge digital experiences. We specialize in web, mobile, and
      product design solutions that help businesses grow faster and smarter.
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
          border: "1px solid var(--major)",
          borderRadius: "12px",
          padding: "20px",
          width: "260px",
          boxShadow: "0 4px 12px var(--card-shadow)",
        }}
      >
        <h3 style={{ color: "var(--minor)" }}>Innovation</h3>
        <p style={{ color: "var(--text)" }}>
          We focus on forward-thinking solutions that redefine how brands engage
          with audiences.
        </p>
      </div>

      <div
        style={{
          backgroundColor: "var(--surface)",
          border: "1px solid var(--minor)",
          borderRadius: "12px",
          padding: "20px",
          width: "260px",
          boxShadow: "0 4px 12px var(--card-shadow)",
        }}
      >
        <h3 style={{ color: "var(--major)" }}>Technology</h3>
        <p style={{ color: "var(--text)" }}>
          Using modern tools and frameworks, we build scalable and
          high-performing digital systems.
        </p>
      </div>

      <div
        style={{
          backgroundColor: "var(--surface)",
          border: "1px solid var(--patch)",
          borderRadius: "12px",
          padding: "20px",
          width: "260px",
          boxShadow: "0 4px 12px var(--card-shadow)",
        }}
      >
        <h3 style={{ color: "var(--patch)" }}>Excellence</h3>
        <p style={{ color: "var(--text)" }}>
          Our commitment to quality ensures every product we build exceeds
          client expectations.
        </p>
      </div>
    </div>
  </div>
</section>
}