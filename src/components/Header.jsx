import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import pngLogo from "../../public/bg_remove_logo.png";


 export default  function Header() {
  const { t, i18n } = useTranslation();
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
        <img src={pngLogo} alt="Bagh Chingari by Luminex Sparq Logo" className="logo" style={{ width: 48, height: 48 }} />
        <div>
          <h1 className="site-title" style={{ margin: 0, fontSize: "1.1rem", color: "var(--major)" }}>
            {t('header.title')}
          </h1>
          <p className="site-tag" style={{ margin: 0, fontSize: "0.85rem", color: "var(--muted)" }}>
            {t('header.tagline')}
          </p>
        </div>
      </div>


      {/* Nav Links */}
      <nav
        className="nav-links"
      >
    {["home", "about", "product", "custom", "testimonial", "faq", "contact"].map((id) => (
          <a
            key={id}
            href={`#${id}`}
            className={activeSection === id ? "active" : ""}
          >
            {t(`header.nav.${id}`)}
          </a>
        ))}
      
      </nav>

      {/* Right side container (controls + hamburger) */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
        {/* Language Switcher */}
        <div className="controls" style={{ display: 'flex', gap: '0.4rem' }}>
          <select 
            onChange={(e) => i18n.changeLanguage(e.target.value)}
            value={i18n.language}
            style={{
              background: 'transparent',
              color: 'var(--major)',
              border: '1px solid var(--muted)',
              padding: '0.15rem 0.3rem',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '0.75rem',
              fontWeight: '700',
              outline: 'none',
              appearance: 'none',
              textAlign: 'center'
            }}
          >
            <option value="en">EN</option>
            <option value="hi">HI</option>
            <option value="bn">BN</option>
          </select>

          {/* Theme Toggle */}
          <button
            className="theme-toggle"
            onClick={() => setDark((d) => !d)}
            aria-pressed={dark}
            aria-label="Toggle dark mode"
            style={{ padding: '0.4rem', border: 'none', background: 'transparent' }}
          >
            {dark ? (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="var(--major)" style={{ width: 18, height: 18 }}>
                <circle cx="12" cy="12" r="5"/>
                <g stroke="currentColor" strokeWidth="2">
                  <line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/>
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                  <line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/>
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
                </g>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="var(--major)" style={{ width: 18, height: 18 }}>
                <path d="M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79z"/>
              </svg>
            )}
          </button>
        </div>

        {/* Hamburger for mobile */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`hamburger ${menuOpen ? 'open' : ''}`}
          style={{ marginLeft: '0.5rem' }}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
          {["home", "about", "product", "custom", "testimonial", "faq", "contact"].map((id) => (
            <a
              key={id}
              href={`#${id}`}
              className={activeSection === id ? "active" : ""}
              onClick={() => setMenuOpen(false)}
            >
              {t(`header.nav.${id}`)}
            </a>
          ))}
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