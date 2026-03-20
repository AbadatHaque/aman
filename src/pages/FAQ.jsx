import React, { useState } from "react";
import { useTranslation } from "react-i18next";

export default function FAQ() {
  const { t } = useTranslation();
  const faqs = [
    {
      question: t("faq.q1.q"),
      answer: t("faq.q1.a"),
    },
    {
      question: t("faq.q2.q"),
      answer: t("faq.q2.a"),
    },
    {
      question: t("faq.q3.q"),
      answer: t("faq.q3.a"),
    },
    {
      question: t("faq.q4.q"),
      answer: t("faq.q4.a"),
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="reveal"
      style={{
        padding: "80px 20px",
        backgroundColor: "var(--bg)",
        color: "var(--text)",
        transition: "all 0.3s ease",
      }}
    >
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <h2
          className="gradient-text"
          style={{
            fontSize: "2.5rem",
            fontWeight: "700",
            textAlign: "center",
            marginBottom: "2rem",
          }}
        >
          {t("faq.title")}
        </h2>

        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="card reveal"
              style={{
                borderTop:
                  index % 3 === 0
                    ? "4px solid var(--major)"
                    : index % 3 === 1
                    ? "4px solid var(--minor)"
                    : "4px solid var(--patch)",
                cursor: "pointer",
                padding: "20px",
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
