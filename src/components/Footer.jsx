import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <p>
          {t('footer.copyright', { year: new Date().getFullYear() })}{" "}
          <span className="brand">{t('footer.brand')}</span>
        </p>
        <p>
          {t('footer.crafted')}{" "}
          <a
            href="https://www.linkedin.com/in/abadat-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="author"
          >
            Sk Abadat Haque
          </a>
          .
        </p>
      </div>
      <div className="footer-line"></div>

 
    </footer>
  );
}
