
export default function Testimonial(){

    return <section
  id="testimonial"
  className="testimonial-section"
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
      What Our Customers Say
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
      Our commitment to quality and safety has earned us trust across India and
      internationally. Hear what our satisfied customers have to say about our
      products.
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
        style={{
          backgroundColor: "var(--surface)",
          borderRadius: "14px",
          boxShadow: "0 6px 18px var(--card-shadow)",
          padding: "24px",
          borderLeft: "5px solid var(--major)",
        }}
      >
        <p style={{ color: "var(--text)", lineHeight: "1.7", marginBottom: "1rem" }}>
          “Bagh Chingari matches are simply the best! High quality, reliable, and safe
          for my household. I trust this brand completely.”
        </p>
        <p style={{ fontWeight: "700", color: "var(--major)" }}>– Ramesh Kumar</p>
        <p style={{ color: "var(--muted)", fontSize: "0.9rem" }}>Chennai, India</p>
      </div>

      {/* Testimonial 2 */}
      <div
        style={{
          backgroundColor: "var(--surface)",
          borderRadius: "14px",
          boxShadow: "0 6px 18px var(--card-shadow)",
          padding: "24px",
          borderLeft: "5px solid var(--minor)",
        }}
      >
        <p style={{ color: "var(--text)", lineHeight: "1.7", marginBottom: "1rem" }}>
          “The matti sticks are top-notch — smooth, consistent burn, and safe to use.
          Highly recommend Bagh Chingari products for any household or business.”
        </p>
        <p style={{ fontWeight: "700", color: "var(--minor)" }}>– Anita Sharma</p>
        <p style={{ color: "var(--muted)", fontSize: "0.9rem" }}>Mumbai, India</p>
      </div>

      {/* Testimonial 3 */}
      <div
        style={{
          backgroundColor: "var(--surface)",
          borderRadius: "14px",
          boxShadow: "0 6px 18px var(--card-shadow)",
          padding: "24px",
          borderLeft: "5px solid var(--patch)",
        }}
      >
        <p style={{ color: "var(--text)", lineHeight: "1.7", marginBottom: "1rem" }}>
          “Excellent product quality and timely delivery. Bagh Chingari has never let us
          down. Their attention to safety and detail is impressive.”
        </p>
        <p style={{ fontWeight: "700", color: "var(--patch)" }}>– John Mathew</p>
        <p style={{ color: "var(--muted)", fontSize: "0.9rem" }}>Bangalore, India</p>
      </div>
    </div>
  </div>
</section>
}