import React from "react";
import "./Menu.css";
import PancakesImage from "../../assets/pictures/Menu/PancakesImage.png";
import BreakfastPlatterImage from "../../assets/pictures/Menu/BreakfastPlatterImage.png";
import OatmealImage from "../../assets/pictures/Menu/OatmealImage.png";
import TurkeySandwichImage from "../../assets/pictures/Menu/TurkeySandwichImage.png";
import CaesarSaladImage from "../../assets/pictures/Menu/CaesarSaladImage.png";
import TomatoSoupImage from "../../assets/pictures/Menu/TomatoSoupImage.png";
import CroissantsImage from "../../assets/pictures/Menu/CroissantsImage.png";
import ChocolateEclairImage from "../../assets/pictures/Menu/ChocolateEclairImage.png";
import AssortedMuffinsImage from "../../assets/pictures/Menu/AssortedMuffinsImage.png";
import CappuccinoImage from "../../assets/pictures/Menu/CappuccinoImage.png";
import OrangeJuiceImage from "../../assets/pictures/Menu/OrangeJuiceImage.png";
import IcedTeaImage from "../../assets/pictures/Menu/IcedTeaImage.png";

import { useTranslation } from "react-i18next";

const Menu = () => {
  const { t, i18n } = useTranslation();

  // Conversion rates (1 USD to HUF and 1 USD to SOL)
  const usdToHuf = 370; // Example rate: 1 USD = 370 HUF
  const usdToSol = 3.8; // Example rate: 1 USD = 3.8 SOL

  // Function to convert USD to HUF and SOL based on selected language
  const convertPrice = (priceInUsd) => {
    const priceInHuf = (priceInUsd * usdToHuf).toFixed(0);
    const priceInSol = (priceInUsd * usdToSol).toFixed(2);
    switch (i18n.language) {
      case "hu":
        return { price: priceInHuf, currency: "Ft" };
      case "es":
        return { price: priceInSol, currency: "S/" };
      default:
        return { price: priceInUsd, currency: "$" }; // Default to USD
    }
  };
  const BreakfastDatas = [
    {
      id: 1,
      image: PancakesImage,
      alt: "pancakes",
      title: t("BREAKFASTDATAS.TITLE1"),
      summary: t("BREAKFASTDATAS.SUMMARY1"),
      price: "8.99",
    },

    {
      id: 2,
      image: BreakfastPlatterImage,
      alt: "Breakfast Platter",
      title: t("BREAKFASTDATAS.TITLE2"),
      summary: t("BREAKFASTDATAS.SUMMARY2"),
      price: "12.99",
    },

    {
      id: 3,
      image: OatmealImage,
      alt: "Oatmeal",
      title: "Oatmeal",
      summary: "Warm oatmeal topped with sliced bananas and almonds.",
      price: "6.99",
    },
  ];

  const LunchDatas = [
    {
      id: 1,
      image: TurkeySandwichImage,
      alt: "Turkey Sandwich",
      title: "Turkey Sandwich",
      summary: "Turkey sandwich with Swiss cheese and fresh lettuce.",
      price: "9.99",
    },

    {
      id: 2,
      image: CaesarSaladImage,
      alt: "Caesar Salad",
      title: "Caesar Salad",
      summary: "Classic Caesar salad with grilled chicken and croutons.",
      price: "10.99",
    },

    {
      id: 3,
      image: TomatoSoupImage,
      alt: "Tomato Soup",
      title: "Tomato Soup",
      summary: "Creamy tomato soup garnished with fresh basil leaves.",
      price: "7.99",
    },
  ];
  const PastriesDatas = [
    {
      id: 1,
      image: CroissantsImage,
      alt: "Croissants",
      title: "Croissants",
      summary: "Buttery and flaky croissants perfect for any time of day.",
      price: "4.99",
    },

    {
      id: 2,
      image: ChocolateEclairImage,
      alt: "Chocolate Eclair",
      title: "Chocolate Eclair",
      summary: "Decadent eclair filled with rich chocolate cream.",
      price: "5.99",
    },

    {
      id: 3,
      image: AssortedMuffinsImage,
      alt: "Assorted Muffins",
      title: "Assorted Muffins",
      summary: "A selection of muffins including blueberry and chocolate chip.",
      price: "3.99",
    },
  ];
  const BeveragesDatas = [
    {
      id: 1,
      image: CappuccinoImage,
      alt: "Cappuccino",
      title: "Cappuccino",
      summary: "Rich and creamy cappuccino with a touch of latte art.",
      price: "3.49",
    },

    {
      id: 2,
      image: OrangeJuiceImage,
      alt: "Orange Juice",
      title: "Orange Juice",
      summary: "Freshly squeezed orange juice with a vibrant taste.",
      price: "2.99",
    },

    {
      id: 3,
      image: IcedTeaImage,
      alt: "Iced Tea",
      title: "Iced Tea",
      summary: "Chilled iced tea served with lemon slices.",
      price: "3.49",
    },
  ];

  return (
    <div className="menu">
      <h2>Breakfast</h2>
      <div className="menu-card-container">
        {BreakfastDatas.map((data) => {
          const { price, currency } = convertPrice(data.price);
          return (
            <div key={data.id} className="menu-card">
              <img src={data.image} alt={data.alt} loading="lazy" />
              <h3>{data.title}</h3>
              <p>{data.summary}</p>
              <p>
                {price} {currency}
              </p>
              <button>View Details</button>
            </div>
          );
        })}
      </div>

      <h2>Lunch</h2>
      <div className="menu-card-container">
        {LunchDatas.map((data) => {
          const { price, currency } = convertPrice(data.price);
          return (
            <div key={data.id} className="menu-card">
              <img src={data.image} alt={data.alt} loading="lazy" />
              <h3>{data.title}</h3>
              <p>{data.summary}</p>
              <p>
                {price} {currency}
              </p>
              <button>View Details</button>
            </div>
          );
        })}
      </div>

      <h2>Pastries</h2>
      <div className="menu-card-container">
        {PastriesDatas.map((data) => {
          const { price, currency } = convertPrice(data.price);
          return (
            <div key={data.id} className="menu-card">
              <img src={data.image} alt={data.alt} loading="lazy" />
              <h3>{data.title}</h3>
              <p>{data.summary}</p>
              <p>
                {price} {currency}
              </p>
              <button>View Details</button>
            </div>
          );
        })}
      </div>

      <h2>Beverages</h2>
      <div className="menu-card-container">
        {BeveragesDatas.map((data) => {
          const { price, currency } = convertPrice(data.price);
          return (
            <div key={data.id} className="menu-card">
              <img src={data.image} alt={data.alt} loading="lazy" />
              <h3>{data.title}</h3>
              <p>{data.summary}</p>
              <p>
                {price} {currency}
              </p>
              <button>View Details</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Menu;
