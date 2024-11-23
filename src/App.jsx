import "./App.css";
import AboutUs from "./components/LandingPage/AboutUs";
import Header from "./components/LandingPage/Header";
import HeroSection from "./components/LandingPage/HeroSection";
import Location from "./components/LandingPage/Location";
import Products from "./components/LandingPage/Products";
import Testimonilas from "./components/LandingPage/Testimonilas";

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <AboutUs />
      <Products />
      <Testimonilas />
      <Location />
    </>
  );
}

export default App;
