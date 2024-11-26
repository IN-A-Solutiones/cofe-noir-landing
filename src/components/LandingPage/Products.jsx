import React from "react";
import "./Products.css";
import Product1 from "../../assets/pictures/LandingPage/BerryCheesecakeImage.webp";
import Product2 from "../../assets/pictures/LandingPage/LatteArtImage.webp";
import Product3 from "../../assets/pictures/LandingPage/GourmetSandwichImage.png";
import { useTranslation } from "react-i18next";

const Products = () => {
  const { t } = useTranslation();

  const products = [
    {
      id: 1,
      image: Product1,
      name: t("PRODUCT.1_TITLE"),
      summary: t("PRODUCT.1_SUMMARY"),
    },

    {
      id: 2,
      name: t("PRODUCT.2_TITLE"),
      image: Product2,
      summary: t("PRODUCT.2_SUMMARY"),
    },

    {
      id: 3,
      name: t("PRODUCT.3_TITLE"),
      image: Product3,
      summary: t("PRODUCT.3_SUMMARY"),
    },
  ];
  return (
    <section id="menu" className="products">
      <h2>{t("PRODUCT.TITLE")}</h2>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.summary}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
