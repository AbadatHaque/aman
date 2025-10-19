

import React, { useEffect, useState } from 'react'
import Logo from '../public/logo.svg'
import FAQ from './pages/FAQ'

// import { useState, useEffect } from "react";
// import Logo from "./logo.png"; // Replace with your logo path

 function Header({ dark, setDark }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  // Sticky on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
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
        // style={{
        //   display: "flex",
        //   gap: "1rem",
        //   alignItems: "center",
        //   transition: "all 0.3s ease",
        // }}
      >
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#product">Product</a>
        <a href="#testimonial">Testimonial</a>
        <a href="#faq">FAQ</a>
        <a href="#contact">Contact</a>
      </nav>

      {/* Theme toggle */}
<div className="controls">
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
        <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
        <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
        <a href="#product" onClick={() => setMenuOpen(false)}>Product</a>
        <a href="#testimonial" onClick={() => setMenuOpen(false)}>Testimonial</a>
        <a href="#faq" onClick={() => setMenuOpen(false)}>FAQ</a>
        <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
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

  return (
    <div className="app-root">
      {/* <header className="site-header">
        <div className="brand">
          <img src={Logo} alt="Logo" className="logo" />
          <div>
            <h1 className="site-title">Luminex Sparq Company</h1>
            <p className="site-tag">Bagh Chingari — Igniting Trust with Quality Safety Matches</p>
          </div>
        </div>

        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#product">Product</a>
          <a href="#testimonial">Testimonial</a>
          <a href="#faq">FAQ</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className="controls">
          <button
            className="btn theme-toggle"
            onClick={() => setDark(d => !d)}
            aria-pressed={dark}
            aria-label="Toggle dark mode"
          >
            {dark ? 'Light' : 'Dark'}
          </button>
        </div>
      </header> */}
      <Header dark={dark} setDark={setDark}/>

      <main className="container">
        {/* <section id="home" className="hero">
          <h2>Welcome to Luminex Sparq Company</h2>
          <p>
            <strong>Bagh Chingari:</strong> Igniting Trust with Quality Safety Matches.
          </p>
          <p>
            Bagh Chingari, a brand by <strong>Luminex Sparq Company</strong>, is a renowned manufacturer of premium safety matches and pure matti sticks, committed to delivering exceptional quality products that ignite trust.
          </p>
          <p>
            Based in <strong>Sattur, Tamil Nadu, India</strong>, we pride ourselves on our expertise in crafting matches that burn with precision and safety.
          </p>

          <div className="home-features">
            <h3>Our Key Features</h3>
            <ul>
              <li><strong>Superior Quality:</strong> Our matches are designed to burn with a single strike, ensuring convenience and reliability.</li>
              <li><strong>Safety First:</strong> We prioritize safety in our manufacturing process, adhering to stringent quality controls to guarantee our products meet the highest standards.</li>
              <li><strong>Pure Matti Sticks:</strong> Our matti sticks are made from the finest materials, ensuring a smooth and consistent burn.</li>
            </ul>
          </div>

          <div className="home-reach">
            <h3>Our Reach</h3>
            <ul>
              <li><strong>Pan-India Delivery:</strong> We deliver our products across India, ensuring timely and efficient service to our customers.</li>
              <li><strong>Export:</strong> Our quality products have garnered international recognition, and we export to countries worldwide.</li>
            </ul>
          </div>

          <p>
            With a focus on <strong>quality, safety,</strong> and <strong>customer satisfaction</strong>, Bagh Chingari by Luminex Sparq Company has established itself as a trusted brand in the safety match industry. Our commitment to excellence and customer-centric approach has enabled us to build a loyal customer base, both domestically and internationally.
          </p>
        </section> */}
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


        {/* <section id="faq" className="features">
          <h2>Frequently Asked Questions</h2>
          <article className="card">
            <h3>Where is Luminex Sparq Company based?</h3>
            <p>We are located in Sattur, Tamil Nadu, India.</p>
          </article>
          <article className="card">
            <h3>Do you export your products?</h3>
            <p>Yes, our products are exported worldwide and recognized for their consistent quality.</p>
          </article>
        </section> */}
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
      onSubmit={(e) => {
        e.preventDefault();
        alert("Form submitted! We will contact you soon.");
      }}
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
          Send Message
        </button>

        <a
          href="https://wa.me/919876543210" // Replace with your WhatsApp number
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "var(--minor)",
            color: "#000",
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
    </form>
  </div>
</section>

      </main>

      <footer className="site-footer">
        <p>© {new Date().getFullYear()} Luminex Sparq Company — Bagh Chingari.</p>
      </footer>
    </div>
  )
}

/* CSS additions */

