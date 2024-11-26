import React from "react";
import "./HeroSection.css";
import { useTranslation } from "react-i18next";

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <section className="hero">
      <div className="hero-container">
        <h1>{t("HERO.TITLE")}</h1>
        <p>{t("HERO.P")}.</p>
        <button>{t("HERO.BUTTON")}</button>
      </div>
    </section>
  );
};

export default HeroSection;
