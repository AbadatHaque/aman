import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div className="footer-col">
          <h4 className="gradient-text">{t('header.title')}</h4>
          <p style={{ marginTop: '1rem', fontSize: '0.9rem', opacity: 0.8 }}>
            {t('header.tagline')}
          </p>
          <div className="social-links">
            <a href="https://wa.me/916901062075" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="WhatsApp">
              WA
            </a>
          </div>
        </div>

        <div className="footer-col">
          <h4>{t('footer.quick_links')}</h4>
          <ul>
            <li><a href="#home">{t('header.nav.home')}</a></li>
            <li><a href="#about">{t('header.nav.about')}</a></li>
            <li><a href="#product">{t('header.nav.product')}</a></li>
            <li><a href="#custom">{t('header.nav.custom')}</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>{t('footer.products')}</h4>
          <ul>
            <li><a href="#product">{t('product.product1.title')}</a></li>
            <li><a href="#product">{t('product.product2.title')}</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>{t('header.nav.contact')}</h4>
          <ul style={{ fontSize: '0.9rem', color: 'var(--muted)' }}>
            <li>📍 149M, Ellayarasanendal Road, <br/>Kovilpatti, Thoothukudi, <br/>Tamil Nadu, 628502</li>
            <li>📱 +91 69010 62075</li>
            <li>📧 luminexsparqcompany@gmail.com</li>
            <li style={{ marginTop: '5px', color: 'var(--major)', fontWeight: 'bold' }}>{t('footer.gstin')}</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          {t('footer.copyright', { year: new Date().getFullYear() })}{" "}
          <strong>{t('footer.brand')}</strong>. 
          {t('footer.crafted')} <a href="https://www.linkedin.com/in/abadat-dev" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--major)', fontWeight: '600' }}>Sk Abadat Haque</a>.
        </p>
      </div>
    </footer>
  );
}
