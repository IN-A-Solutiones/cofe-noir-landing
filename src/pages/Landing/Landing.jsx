import React from "react";
import "./Landing.css";

import AboutUs from "../../components/LandingPage/AboutUs";
import ContactForm from "../../components/LandingPage/ContactForm";
import Footer from "../../components/LandingPage/Footer";
import Header from "../../components/LandingPage/Header";
import HeroSection from "../../components/LandingPage/HeroSection";
import Location from "../../components/LandingPage/Location";
import Products from "../../components/LandingPage/Products";
import Testimonilas from "../../components/LandingPage/Testimonilas";

const Landing = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <AboutUs />
      <Products />
      <Testimonilas />
      <Location />
      <ContactForm />
      <Footer />
    </>
  );
};

export default Landing;
