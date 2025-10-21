

import React, { useEffect, useState, useRef } from 'react'
import Logo from '../public/logo.svg'
import FAQ from './pages/FAQ'
import emailjs from "@emailjs/browser";


 function Header({ dark, setDark }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
 let current = "home";
  const [activeSection, setActiveSection] = useState(current);
  // Sticky on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);

      const sections = document.querySelectorAll("section[id]");
    
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 150 && rect.bottom >= 150) {
          current = section.id;
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  

  return (
    <header
      className="site-header"
      style={{
        position: isSticky ? "sticky" : "relative",
        top: 0,
        zIndex: 1000,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1rem 1.25rem",
        backgroundColor: "var(--bg)",
        borderBottom: "1px solid rgba(0,0,0,0.1)",
        transition: "all 0.3s ease",
      }}
    >
      {/* Brand */}
      <div className="brand" style={{ display: "flex", gap: "0.75rem", alignItems: "center" }}>
        <img src={Logo} alt="Logo" className="logo" style={{ width: 48, height: 48 }} />
        <div>
          <h1 className="site-title" style={{ margin: 0, fontSize: "1.1rem", color: "var(--major)" }}>
            Luminex Sparq Company
          </h1>
          <p className="site-tag" style={{ margin: 0, fontSize: "0.85rem", color: "var(--muted)" }}>
            Bagh Chingari — Igniting Trust with Quality Safety Matches
          </p>
        </div>
      </div>

      {/* Hamburger for mobile */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="hamburger"
      >
        <span
        //   style={{
        //     display: "block",
        //     height: "3px",
        //     width: "100%",
        //     background: "var(--text)",
        //     borderRadius: "2px",
        //     transition: "0.3s",
        //     transform: menuOpen ? "rotate(45deg) translate(5px, 5px)" : "none",
        //   }}
        />
        <span
        //   style={{
        //     display: "block",
        //     height: "3px",
        //     width: "100%",
        //     background: "var(--text)",
        //     borderRadius: "2px",
        //     transition: "0.3s",
        //     opacity: menuOpen ? 0 : 1,
        //   }}
        />
        <span
        //   style={{
        //     display: "block",
        //     height: "3px",
        //     width: "100%",
        //     background: "var(--text)",
        //     borderRadius: "2px",
        //     transition: "0.3s",
        //     transform: menuOpen ? "rotate(-45deg) translate(5px, -5px)" : "none",
        //   }}
        />
      </button>

      {/* Nav Links */}
      <nav
        className="nav-links"
      >
    {["home", "about", "product", "testimonial", "faq", "contact"].map((id) => (
          <a
            key={id}
            href={`#${id}`}
            className={activeSection === id ? "active" : ""}
          >
            {id.charAt(0).toUpperCase() + id.slice(1)}
          </a>
        ))}
      
      </nav>

      {/* Theme toggle */}
<div className="controls nav-links">
  <button
    className="theme-toggle"
    onClick={() => setDark((d) => !d)}
    aria-pressed={dark}
    aria-label="Toggle dark mode"
  >
    {dark ? (
      // Sun icon (professional)
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <circle cx="12" cy="12" r="5"/>
        <g stroke="currentColor" strokeWidth="2">
          <line x1="12" y1="1" x2="12" y2="3"/>
          <line x1="12" y1="21" x2="12" y2="23"/>
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
          <line x1="1" y1="12" x2="3" y2="12"/>
          <line x1="21" y1="12" x2="23" y2="12"/>
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
        </g>
      </svg>
    ) : (
      // Moon icon
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path d="M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79z"/>
      </svg>
    )}
  </button>
</div>



      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        {["home", "about", "product", "testimonial", "faq", "contact"].map((id) => (
          <a
            key={id}
            href={`#${id}`}
            className={activeSection === id ? "active" : ""}
            onClick={() => setMenuOpen(false)}
          >
            {id.charAt(0).toUpperCase() + id.slice(1)}
          </a>
        ))}
          <a>
         <button
    className="theme-toggle"
    onClick={() => setDark((d) => !d)}
    aria-pressed={dark}
    aria-label="Toggle dark mode"
  >
    {dark ? (
      // Sun icon (professional)
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <circle cx="12" cy="12" r="5"/>
        <g stroke="currentColor" strokeWidth="2">
          <line x1="12" y1="1" x2="12" y2="3"/>
          <line x1="12" y1="21" x2="12" y2="23"/>
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
          <line x1="1" y1="12" x2="3" y2="12"/>
          <line x1="21" y1="12" x2="23" y2="12"/>
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
        </g>
      </svg>
    ) : (
      // Moon icon
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path d="M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79z"/>
      </svg>
    )}
  </button></a>
        </div>

      )}

      {/* Responsive Styles */}
      <style>
        {`
          @media (max-width: 768px) {
            .nav-links { display: none; }
            .hamburger { display: flex; }
          }
        `}
      </style>
    </header>
  );
}


export default function App() {
  const [dark, setDark] = useState(() => {
    try {
      const saved = localStorage.getItem('site-theme')
      if (saved) return saved === 'dark'
      return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
    } catch (e) {
      return false
    }
  })

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    localStorage.setItem('site-theme', dark ? 'dark' : 'light')
  }, [dark])
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

  return (
    <div className="app-root">
      <Header dark={dark} setDark={setDark}/>

      <main className="container">
<section
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

<section
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


       <section
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


    <section
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
        <FAQ/>
       <section
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

      </main>
   {/* Floating WhatsApp Button */}
<a
  href="https://wa.me/919360888472"
  className="floating-btn"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Chat on WhatsApp"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    fill="currentColor"
  >
    <path d="M16 .667A15.307 15.307 0 00.667 16 15.22 15.22 0 003.67 25.16L2 31.333l6.37-1.667A15.256 15.256 0 0016 31.333 15.333 15.333 0 0016 .667zm0 28.04a12.89 12.89 0 01-6.57-1.807l-.473-.283-3.78.987 1.007-3.6-.307-.48A12.792 12.792 0 1130.667 16a12.83 12.83 0 01-14.667 12.707z" />
    <path d="M23.567 19.04c-.4-.2-2.367-1.167-2.73-1.3-.367-.133-.633-.2-.9.2s-1.033 1.3-1.267 1.567-.467.3-.867.1-1.693-.627-3.227-2a11.93 11.93 0 01-2.207-2.733c-.233-.4 0-.617.167-.817.173-.173.4-.467.6-.7a2.51 2.51 0 00.4-.667.76.76 0 00-.033-.733c-.1-.2-.9-2.133-1.233-2.933-.327-.8-.66-.687-.9-.7h-.767a1.47 1.47 0 00-1.066.5A4.52 4.52 0 008.5 12.1a7.8 7.8 0 00.5 3.333 17.81 17.81 0 006.567 7.467c2.4 1.467 3.333 1.6 4.533 1.367a3.82 3.82 0 002.6-1.833 3.117 3.117 0 00.2-1.833c-.133-.233-.4-.333-.833-.533z" />
  </svg>
</a>

      <footer className="site-footer">
        <p>© {new Date().getFullYear()} Luminex Sparq Company — Bagh Chingari.</p>
      </footer>
    </div>
  )
}


