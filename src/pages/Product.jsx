import { useTranslation, Trans } from 'react-i18next';
import product1Image from "../../public/product1.jpeg"
import product2Image from "../../public/product2.jpeg"


export default function Product() {
  const { t } = useTranslation();
    return   <section
  id="product"
  className="reveal"
  style={{
    padding: "80px 20px",
    backgroundColor: "var(--bg)",
    color: "var(--text)",
    transition: "all 0.3s ease",
  }}
>
  <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
    <h2
      className="gradient-text"
      style={{
        fontSize: "2.5rem",
        color: "var(--major)",
        fontWeight: "700",
        textAlign: "center",
        marginBottom: "1rem",
      }}
    >
      {t('product.title')}
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
      <Trans i18nKey="product.description">
        At <strong>Luminex Sparq Company</strong>, we take pride in crafting
        products that combine quality, safety, and sustainability. Our products
        are trusted by customers across India and worldwide for their reliability
        and performance.
      </Trans>
    </p>

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
        gap: "24px",
      }}
    >
      {/* Product 1 */}
      <div
        className="card product-card reveal-left"
        style={{
          padding: 0,
          overflow: "hidden",
        }}
      >
        <div
          style={{
            backgroundColor: "var(--bg)",
            height: "180px",
            borderBottom: "4px solid var(--major)",
          }}

        >
          <img style={{opacity:"1", objectFit:"cover", width:"100%", height:"100%"}} src={product1Image} alt="Premium Wooden Safety Matches by Bagh Chingari" />
        </div>
        <div style={{ padding: "24px" }}>
          <h3 style={{ color: "var(--major)", fontSize: "1.4rem" }}>
            {t('product.product1.title')}
          </h3>
          <p
            style={{
              color: "var(--text)",
              lineHeight: "1.7",
              marginTop: "0.75rem",
            }}
          >
            {t('product.product1.desc')}
          </p>
          <ul
            style={{
              color: "var(--muted)",
              marginTop: "1rem",
              paddingLeft: "1.2rem",
            }}
          >
            <li>{t('product.product1.features.1')}</li>
            <li>{t('product.product1.features.2')}</li>
            <li>{t('product.product1.features.3')}</li>
          </ul>
        </div>
      </div>

      {/* Product 2 */}
      <div
        className="card product-card"
        style={{
          padding: 0,
          overflow: "hidden",
          borderTopColor: "var(--minor)",
        }}
      >
        <div
          style={{
            backgroundColor: "var(--bg)",
            height: "180px",
            borderBottom: "4px solid var(--minor)",
          }}
        >
           <img  style={{opacity:"1", width:"100%", height:"100%",  }} src={product2Image} alt="Premium Wax Safety Matches by Bagh Chingari" />
        </div>
        <div style={{ padding: "24px" }}>
          <h3 style={{ color: "var(--minor)", fontSize: "1.4rem" }}>
            {t('product.product2.title')}
          </h3>
          <p
            style={{
              color: "var(--text)",
              lineHeight: "1.7",
              marginTop: "0.75rem",
            }}
          >
            {t('product.product2.desc')}
          </p>
          <ul
            style={{
              color: "var(--muted)",
              marginTop: "1rem",
              paddingLeft: "1.2rem",
            }}
          >
            <li>{t('product.product2.features.1')}</li>
            <li>{t('product.product2.features.2')}</li>
            <li>{t('product.product2.features.3')}</li>
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
        {t('product.footer')}
      </p>
    </div>
  </div>
</section>
}