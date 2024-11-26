import React from "react";
import "./ContactForm.css";
import { useTranslation } from "react-i18next";

const ContactForm = () => {
  const { t } = useTranslation();

  return (
    <section id="contact" className="contact">
      <h2>{t("CONTACT.TITLE")}</h2>
      <form>
        <input type="text" placeholder={t("CONTACT.INPUT1")} required />
        <input type="email" placeholder={t("CONTACT.INPUT2")} required />
        <textarea placeholder={t("CONTACT.INPUT3")} required></textarea>
        <button type="submit">{t("CONTACT.BUTTON")}</button>
      </form>
    </section>
  );
};

export default ContactForm;
