export default function Home() {
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
          Luminex Sparq Company
        </h1>

        <p
          style={{
            fontSize: "1.2rem",
            lineHeight: 1.8,
            color: "var(--muted)",
            marginBottom: "2rem",
          }}
        >
          Welcome to <strong>Bagh Chingari</strong> — the creative extension of{" "}
          <strong>Luminex Sparq Company</strong>, one of India’s leading
          manufacturers and exporters of premium-quality safety matchboxes based
          in Sattur, Tamil Nadu.  
          We’re dedicated to crafting <strong>wooden matches</strong>,{" "}
          <strong>wax matches</strong>, and <strong>promotional matchboxes</strong>{" "}
          that meet international quality and safety standards — lighting up
          lives across the world with sustainable craftsmanship and precision.
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
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-5px)";
              e.currentTarget.style.boxShadow = "0 8px 20px var(--card-shadow)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 4px 12px var(--card-shadow)";
            }}
          >
            <h3 style={{ color: "var(--minor)", marginBottom: "0.5rem" }}>
              Quality
            </h3>
            <p style={{ color: "var(--text)", fontSize: "0.95rem" }}>
              Each matchbox is crafted with precision, ensuring durability,
              safety, and unmatched lighting performance.
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
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-5px)";
              e.currentTarget.style.boxShadow = "0 8px 20px var(--card-shadow)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 4px 12px var(--card-shadow)";
            }}
          >
            <h3 style={{ color: "var(--major)", marginBottom: "0.5rem" }}>
              Global Reach
            </h3>
            <p style={{ color: "var(--text)", fontSize: "0.95rem" }}>
              From India to international markets, our matchboxes illuminate
              homes, businesses, and communities worldwide.
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
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-5px)";
              e.currentTarget.style.boxShadow = "0 8px 20px var(--card-shadow)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 4px 12px var(--card-shadow)";
            }}
          >
            <h3 style={{ color: "var(--patch)", marginBottom: "0.5rem" }}>
              Excellence
            </h3>
            <p style={{ color: "var(--text)", fontSize: "0.95rem" }}>
              Our relentless pursuit of excellence has made us a trusted name in
              the safety match industry, known for reliability and craftsmanship.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
