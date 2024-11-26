import React from "react";
import "./HeroSection.css";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <section className="hero">
      <div className="hero-container">
        <h1>{t("HERO.TITLE")}</h1>
        <p>{t("HERO.P")}.</p>
        <NavLink to={"/menu"}>
          <button>{t("HERO.BUTTON")}</button>
        </NavLink>
      </div>
    </section>
  );
};

export default HeroSection;
