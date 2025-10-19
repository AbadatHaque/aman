import React, { useState } from "react";

export default function FAQ() {
  const faqs = [
    {
      question: "Where are Bagh Chingari products manufactured?",
      answer:
        "All our products are manufactured in Sattur, Tamil Nadu, India, under strict quality control and safety standards.",
    },
    {
      question: "Do you export your products internationally?",
      answer:
        "Yes, we export our premium safety matches and pure matti sticks to multiple countries worldwide, maintaining the highest quality standards.",
    },
    {
      question: "Are the products safe for household use?",
      answer:
        "Absolutely. Safety is our top priority. All matches and matti sticks are designed for safe and reliable use.",
    },
    {
      question: "What is the minimum order quantity?",
      answer:
        "We cater to both retail and bulk orders. Minimum order quantity varies depending on the product. Please contact us for details.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="faq-section"
      style={{
        padding: "80px 20px",
        backgroundColor: "var(--bg)",
        color: "var(--text)",
        transition: "all 0.3s ease",
      }}
    >
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <h2
          style={{
            fontSize: "2.5rem",
            color: "var(--major)",
            fontWeight: "700",
            textAlign: "center",
            marginBottom: "2rem",
          }}
        >
          Frequently Asked Questions
        </h2>

        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {faqs.map((faq, index) => (
            <div
              key={index}
              style={{
                backgroundColor: "var(--surface)",
                borderRadius: "12px",
                boxShadow: "0 6px 18px var(--card-shadow)",
                padding: "20px",
                borderLeft:
                  index % 3 === 0
                    ? "5px solid var(--major)"
                    : index % 3 === 1
                    ? "5px solid var(--minor)"
                    : "5px solid var(--patch)",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
              onClick={() => toggleFAQ(index)}
            >
              <h3
                style={{
                  margin: 0,
                  color:
                    index % 3 === 0
                      ? "var(--major)"
                      : index % 3 === 1
                      ? "var(--minor)"
                      : "var(--patch)",
                  fontSize: "1.2rem",
                  fontWeight: "600",
                }}
              >
                {faq.question}
              </h3>
              <p
                style={{
                  marginTop: "10px",
                  color: "var(--text)",
                  lineHeight: "1.7",
                  maxHeight: activeIndex === index ? "500px" : "0",
                  overflow: "hidden",
                  transition: "max-height 0.3s ease",
                }}
              >
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
