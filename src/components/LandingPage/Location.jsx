import React from "react";
import "./Location.css";

const Location = () => {
  return (
    <section id="location" className="location">
      <h2>Hol találsz minket?</h2>
      <p>Cím: 1234 Budapest, Példa utca 12.</p>
      <div className="map">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=..."
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
};

export default Location;
