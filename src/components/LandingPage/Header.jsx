import React from "react";
import "./Header.css";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t } = useTranslation();
  const { i18n } = useTranslation();

  // List of available languages
  const languages = [
    { code: "en", label: "EN" },
    { code: "es", label: "ES" },
    { code: "hu", label: "HU" },
  ];

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <header className="header">
      <div className="logo">Café Noir</div>
      <nav>
        <ul>
          <li>
            <a href="#about">{t("HEADER.NAVBAR1")}</a>
          </li>
          <li>
            <a href="#menu">{t("HEADER.NAVBAR2")}</a>
          </li>
          <li>
            <a href="#contact">{t("HEADER.NAVBAR3")}</a>
          </li>
          <li>
            <div className="language-selector">
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
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
