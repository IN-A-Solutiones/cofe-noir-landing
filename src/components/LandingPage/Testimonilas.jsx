import React from "react";
import "./Testimonials.css";

const Testimonilas = () => {
  const reviews = [
    { id: 1, text: "Az epres sajttorta mennyei volt!", author: "Anna" },
    { id: 2, text: "A kávéjuk és a kiszolgálás elsőosztályú.", author: "Béla" },
  ];

  return (
    <section className="testimonials">
      <h2>Vélemények</h2>
      <div className="reviews">
        {reviews.map((review) => (
          <div key={review.id} className="review">
            <p>"{review.text}"</p>
            <h4>- {review.author}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonilas;
