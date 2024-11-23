import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">Café Noir</div>
      <nav>
        <ul>
          <li>
            <a href="#about">Rólunk</a>
          </li>
          <li>
            <a href="#menu">Menü</a>
          </li>
          <li>
            <a href="#contact">Kapcsolat</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
