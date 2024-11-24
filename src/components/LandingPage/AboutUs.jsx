import React from "react";
import "./AboutUs.css";

import Interior from "../../assets/pictures/LandingPage/about-us.webp";

const AboutUs = () => {
  return (
    <section id="about" className="about">
      <div className="about-content">
        <h2>Rólunk</h2>
        <p>
          A Café Noir nem csak egy hely, hanem egy élmény. Minőségi kávé,
          kézműves sütemények, és modern városi hangulat vár rád minden
          látogatáskor.
        </p>
      </div>
      <div className="about-image">
        <img src={Interior} alt="Kávézó belső tér" />
      </div>
    </section>
  );
};

export default AboutUs;
