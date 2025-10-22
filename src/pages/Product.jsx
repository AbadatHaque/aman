

export default function Product() {
    return   <section
  id="product"
  className="product-section"
  style={{
    padding: "80px 20px",
    backgroundColor: "var(--bg)",
    color: "var(--text)",
    transition: "all 0.3s ease",
  }}
>
  <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
    <h2
      style={{
        fontSize: "2.5rem",
        color: "var(--major)",
        fontWeight: "700",
        textAlign: "center",
        marginBottom: "2rem",
      }}
    >
      Our Products
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
      At <strong>Luminex Sparq Company</strong>, we take pride in crafting
      products that combine quality, safety, and sustainability. Our products
      are trusted by customers across India and worldwide for their reliability
      and performance.
    </p>

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gap: "24px",
      }}
    >
      {/* Product 1 */}
      <div
        style={{
          backgroundColor: "var(--surface)",
          borderRadius: "14px",
          boxShadow: "0 6px 18px var(--card-shadow)",
          overflow: "hidden",
          border: "1px solid rgba(0,0,0,0.06)",
          transition: "transform 0.3s ease",
        }}
        className="product-card"
      >
        <div
          style={{
            background: "linear-gradient(135deg, var(--major), var(--minor))",
            height: "180px",
          }}
        ></div>
        <div style={{ padding: "24px" }}>
          <h3 style={{ color: "var(--major)", fontSize: "1.4rem" }}>
            Safety Matches
          </h3>
          <p
            style={{
              color: "var(--text)",
              lineHeight: "1.7",
              marginTop: "0.75rem",
            }}
          >
            Our premium safety matches are designed to ignite with a single
            strike, ensuring efficiency and reliability. Manufactured with
            precision and quality control, they meet international safety
            standards and deliver a consistent flame every time.
          </p>
          <ul
            style={{
              color: "var(--muted)",
              marginTop: "1rem",
              paddingLeft: "1.2rem",
            }}
          >
            <li>Eco-friendly production</li>
            <li>Safe and reliable ignition</li>
            <li>Durable packaging for export</li>
          </ul>
        </div>
      </div>

      {/* Product 2 */}
      <div
        style={{
          backgroundColor: "var(--surface)",
          borderRadius: "14px",
          boxShadow: "0 6px 18px var(--card-shadow)",
          overflow: "hidden",
          border: "1px solid rgba(0,0,0,0.06)",
          transition: "transform 0.3s ease",
        }}
        className="product-card"
      >
        <div
          style={{
            background: "linear-gradient(135deg, var(--minor), var(--patch))",
            height: "180px",
          }}
        ></div>
        <div style={{ padding: "24px" }}>
          <h3 style={{ color: "var(--minor)", fontSize: "1.4rem" }}>
            Pure Matti Sticks
          </h3>
          <p
            style={{
              color: "var(--text)",
              lineHeight: "1.7",
              marginTop: "0.75rem",
            }}
          >
            Our Matti sticks are crafted using high-grade raw materials for a
            smooth, long-lasting, and consistent burn. Each stick reflects our
            commitment to purity and craftsmanship.
          </p>
          <ul
            style={{
              color: "var(--muted)",
              marginTop: "1rem",
              paddingLeft: "1.2rem",
            }}
          >
            <li>Premium quality materials</li>
            <li>Clean and uniform burn</li>
            <li>Natural and chemical-free finish</li>
          </ul>
        </div>
      </div>
    </div>

    <div
      style={{
        textAlign: "center",
        marginTop: "3rem",
        color: "var(--muted)",
      }}
    >
      <p>
        Trusted by thousands, our products light homes, industries, and lives —
        safely and beautifully.
      </p>
    </div>
  </div>
</section>
}