import React from "react";
import "./Location.css";
import { FaPhone } from "react-icons/fa";
import { FaMapLocation } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { TbClockHour3 } from "react-icons/tb";
import { useTranslation } from "react-i18next";

const Location = () => {
  const { t } = useTranslation();

  return (
    <section id="location" className="location">
      <h2>{t("LOCATION.TITLE")}</h2>
      <div className="location-content">
        <div className="map">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=..."
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
        <div className="contact-info">
          <p>
            <TbClockHour3 /> Monday - Friday: 7:00 AM - 8:00 PM
          </p>
          <p>
            <FaMapLocation /> 1234 New York, NE 12.
          </p>
          <p>
            <FaPhone /> +1 123 45678
          </p>
          <p>
            <IoIosMail /> info@coffe.com
          </p>
        </div>
      </div>
    </section>
  );
};

export default Location;
