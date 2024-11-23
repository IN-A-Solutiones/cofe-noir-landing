import React from "react";
import "./Products.css";
const Products = () => {
  const products = [
    { id: 1, name: "Házi málnatorta", image: "/images/product1.jpg" },
    { id: 2, name: "Barista Latte Art", image: "/images/product2.jpg" },
    { id: 3, name: "Epres sajttorta", image: "/images/product3.jpg" },
  ];
  return (
    <section id="menu" className="products">
      <h2>Legnépszerűbb termékeink</h2>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
