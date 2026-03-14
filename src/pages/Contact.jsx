import emailjs from "@emailjs/browser";
import React, { useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';

export default function Contact(){
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const formRef = useRef();

    const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .sendForm(
        "service_gttjqpq",   // replace with your EmailJS service ID
        "template_wkcirvc",  // replace with your template ID
        formRef.current,
        "cm5FlUHqe7sOdP98h"    // replace with your public key
      )
      .then(
        (result) => {
          setLoading(false);
          setSuccess(t("contact.success"));
          formRef.current.reset();
        },
        (error) => {
          setLoading(false);
          setSuccess(t("contact.error"));
        }
      );
  };
    return        <section
  id="contact"
  className="contact-section"
  style={{
    padding: "80px 20px",
    backgroundColor: "var(--bg)",
    color: "var(--text)",
    transition: "all 0.3s ease",
  }}
>
  <div style={{ maxWidth: "700px", margin: "0 auto" }}>
    <h2
      style={{
        fontSize: "2.5rem",
        color: "var(--major)",
        fontWeight: "700",
        textAlign: "center",
        marginBottom: "1.5rem",
      }}
    >
      {t("contact.title")}
    </h2>

    <p
      style={{
        textAlign: "center",
        color: "var(--muted)",
        fontSize: "1.1rem",
        marginBottom: "2.5rem",
        lineHeight: "1.7",
      }}
    >
      {t("contact.description")}
    </p>

    <form
      className="contact-form"
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "15px",
      }}
      onSubmit={handleSubmit}
       ref={formRef}
    >
      <input
        type="text"
        name="name"
        placeholder={t("contact.form.name")}
        required
        style={{
          padding: "12px",
          borderRadius: "8px",
          border: "1px solid rgba(0,0,0,0.1)",
          backgroundColor: "var(--surface)",
          color: "var(--text)",
        }}
      />
      <input
        type="email"
        name="email"
        placeholder={t("contact.form.email")}
        required
        style={{
          padding: "12px",
          borderRadius: "8px",
          border: "1px solid rgba(0,0,0,0.1)",
          backgroundColor: "var(--surface)",
          color: "var(--text)",
        }}
      />
      <input
        type="text"
        name="subject"
        placeholder={t("contact.form.subject")}
        required
        style={{
          padding: "12px",
          borderRadius: "8px",
          border: "1px solid rgba(0,0,0,0.1)",
          backgroundColor: "var(--surface)",
          color: "var(--text)",
        }}
      />
      <textarea
        name="message"
        placeholder={t("contact.form.message")}
        required
        style={{
          padding: "12px",
          borderRadius: "8px",
          border: "1px solid rgba(0,0,0,0.1)",
          backgroundColor: "var(--surface)",
          color: "var(--text)",
          minHeight: "120px",
        }}
      />

      <div style={{ display: "flex", gap: "15px", flexWrap: "wrap" }}>

        <button
          type="submit"
          style={{
            backgroundColor: "var(--major)",
            color: "#fff",
            padding: "12px 20px",
            borderRadius: "8px",
            fontWeight: "600",
            border: "none",
            cursor: "pointer",
            flex: "1",
          }}
        >
         {loading ? t("contact.form.sending") : t("contact.form.send")}
        </button>



        <a
          href="https://wa.me/919360888472"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "var(--minor)",
            color: "var(--bg)",
            padding: "12px 20px",
            borderRadius: "8px",
            fontWeight: "600",
            textDecoration: "none",
            flex: "1",
            transition: "all 0.3s ease",
          }}
        >
          {t("contact.whatsapp")}
        </a>
      </div>
       {success && <p>{success}</p>}
    </form>
  </div>
</section>
}