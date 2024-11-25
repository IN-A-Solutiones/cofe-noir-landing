import "./App.css";
import Landing from "./pages/Landing/Landing";
import Footer from "./components/LandingPage/Footer";
import Header from "./components/LandingPage/Header";
import Menu from "./pages/Menu/Menu";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/menu" element={<Menu />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
