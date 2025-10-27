export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <p>
          © {new Date().getFullYear()}{" "}
          <span className="brand">Luminex Sparq Company — Bagh Chingari</span>
        </p>
        <p>
          Crafted with ❤️ by{" "}
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
