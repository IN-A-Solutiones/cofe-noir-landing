import "./App.css";
import AboutUs from "./components/LandingPage/AboutUs";
import Header from "./components/LandingPage/Header";
import HeroSection from "./components/LandingPage/HeroSection";
import Products from "./components/LandingPage/Products";

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <AboutUs />
      <Products />
    </>
  );
}

export default App;
