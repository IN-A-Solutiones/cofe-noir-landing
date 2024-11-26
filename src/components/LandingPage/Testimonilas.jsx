import React from "react";
import "./Testimonials.css";
import { useTranslation } from "react-i18next";

const Testimonilas = () => {
  const { t } = useTranslation();

  const reviews = [
    {
      id: 1,
      text: t("TESTIMONIALS.TEXT1"),
      author: "Anna",
    },

    {
      id: 2,
      text: t("TESTIMONIALS.TEXT2"),
      author: "Kate",
    },

    {
      id: 3,
      text: t("TESTIMONIALS.TEXT3"),
      author: "Thomas",
    },
  ];

  return (
    <section className="testimonials">
      <h2>{t("TESTIMONIALS.TITLE")}</h2>
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
