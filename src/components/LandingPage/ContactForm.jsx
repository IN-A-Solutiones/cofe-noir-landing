import React from "react";
import "./ContactForm.css";

const ContactForm = () => {
  return (
    <section id="contact" className="contact">
      <h2>Kapcsolat</h2>
      <form>
        <input type="text" placeholder="Név" required />
        <input type="email" placeholder="Email" required />
        <textarea placeholder="Üzenet" required></textarea>
        <button type="submit">Küldés</button>
      </form>
    </section>
  );
};

export default ContactForm;
