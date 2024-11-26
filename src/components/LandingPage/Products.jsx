import React from "react";
import "./Products.css";
import Product1 from "../../assets/pictures/LandingPage/BerryCheesecakeImage.webp";
import Product2 from "../../assets/pictures/LandingPage/LatteArtImage.webp";
import Product3 from "../../assets/pictures/LandingPage/GourmetSandwichImage.png";

const Products = () => {
  const products = [
    {
      id: 1,
      image: Product1,
      name: "Berry Cheesecake",
      summary: "Indulge in our creamy cheesecake topped with fresh berries.",
    },

    {
      id: 2,
      name: "Barista Latte Art",
      image: Product2,
      summary:
        "A classic latte with a touch of love, perfect for any coffee lover.",
    },

    {
      id: 3,
      name: "Gourmet Sandwich",
      image: Product3,
      summary:
        "Crafted with the freshest ingredients, our sandwiches are a taste delight.",
    },
  ];
  return (
    <section id="menu" className="products">
      <h2>Legnépszerűbb termékeink</h2>
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
