import React from "react";
import "./Landing.css";
import AboutUs from "../../components/LandingPage/AboutUs";
import ContactForm from "../../components/LandingPage/ContactForm";
import HeroSection from "../../components/LandingPage/HeroSection";
import Location from "../../components/LandingPage/Location";
import Products from "../../components/LandingPage/Products";
import Testimonilas from "../../components/LandingPage/Testimonilas";

const Landing = () => {
  return (
    <>
      <HeroSection />
      <AboutUs />
      <Products />
      <Testimonilas />
      <Location />
      <ContactForm />
    </>
  );
};

export default Landing;
