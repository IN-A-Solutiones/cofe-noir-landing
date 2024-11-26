import React from "react";
import "./Footer.css";
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="footer-container">
        <FaInstagram className="footer-icon" />
        <FaFacebook className="footer-icon" />
        <FaTiktok className="footer-icon" />
      </div>
      <p>&copy; 2024 Café Noir. {t("FOOTER.COPYWRITE")}</p>
    </footer>
  );
};

export default Footer;
