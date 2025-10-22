import emailjs from "@emailjs/browser";
import React, {  useState, useRef } from 'react'

export default function Contact(){
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
          setSuccess("Message sent successfully!");
          formRef.current.reset();
        },
        (error) => {
          setLoading(false);
          setSuccess("Failed to send message. Try again.");
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
      Get in Touch
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
      Have a question or want to place an order? Fill out the form below or
      contact us directly via WhatsApp.
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
        placeholder="Your Name"
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
        placeholder="Your Email"
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
        placeholder="Subject"
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
        placeholder="Your Message"
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
         {loading ? "Sending..." : "Send Message"}
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
          📱 WhatsApp Us
        </a>
      </div>
       {success && <p>{success}</p>}
    </form>
  </div>
</section>
}