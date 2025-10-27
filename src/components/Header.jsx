import React, { useEffect, useState, useRef } from 'react'
import pngLogo from "../../public/bg_remove_logo.png"


 export default  function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
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
        <img src={pngLogo} alt="Logo" className="logo" style={{ width: 48, height: 48 }} />
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
        />
        <span
        />
        <span
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