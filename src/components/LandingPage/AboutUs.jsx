import React from "react";
import "./AboutUs.css";
import { useTranslation } from "react-i18next";

import Interior from "../../assets/pictures/LandingPage/about-us.webp";

const AboutUs = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="about">
      <div className="about-content">
        <h2>{t("ABOUTUS.TITLE")}</h2>
        <p>{t("ABOUTUS.P")}</p>
      </div>
      <div className="about-image">
        <img src={Interior} alt="Kávézó belső tér" />
      </div>
    </section>
  );
};

export default AboutUs;
