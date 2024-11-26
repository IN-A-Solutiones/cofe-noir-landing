import React, { useState } from "react";
import "./Header.css";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

const Header = () => {
  const { t } = useTranslation();
  const { i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // List of available languages
  const languages = [
    { code: "en", label: "EN" },
    { code: "es", label: "ES" },
    { code: "hu", label: "HU" },
  ];

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setIsMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="logo">Café Noir</div>
      {/* Hamburger Menu for Mobile */}
      <button
        className={`hamburger ${isMenuOpen ? "is-active" : ""}`}
        onClick={toggleMobileMenu}
        aria-label="Toggle mobile menu"
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>
      <nav className={`main-nav ${isMenuOpen ? "is-active" : ""}`}>
        <ul>
          <li>
            <NavLink to={"/"} onClick={toggleMobileMenu}>
              {t("HEADER.NAVBAR1")}{" "}
            </NavLink>
          </li>
          <li>
            <a href="#about" onClick={toggleMobileMenu}>
              {t("HEADER.NAVBAR2")}
            </a>
          </li>
          <li>
            <NavLink to={"/menu"} onClick={toggleMobileMenu}>
              {t("HEADER.NAVBAR3")}
            </NavLink>
          </li>
          <li>
            <a href="#contact" onClick={toggleMobileMenu}>
              {t("HEADER.NAVBAR4")}
            </a>
          </li>
        </ul>
      </nav>
      <div className={`language-selector ${isMenuOpen ? "is-active" : ""}`}>
        {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => changeLanguage(lang.code)}
            className="language-button"
          >
            {lang.label}
          </button>
        ))}
      </div>
    </header>
  );
};

export default Header;
