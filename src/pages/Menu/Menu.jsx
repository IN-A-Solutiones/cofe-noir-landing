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
      title: t("BREAKFASTDATAS.TITLE3"),
      summary: t("BREAKFASTDATAS.SUMMARY2"),
      price: "6.99",
    },
  ];

  const LunchDatas = [
    {
      id: 1,
      image: TurkeySandwichImage,
      alt: "Turkey Sandwich",
      title: t("LUNCHDATAS.TITLE1"),
      summary: t("LUNCHDATAS.SUMMARY1"),
      price: "9.99",
    },

    {
      id: 2,
      image: CaesarSaladImage,
      alt: "Caesar Salad",
      title: t("LUNCHDATAS.TITLE2"),
      summary: t("LUNCHDATAS.SUMMARY2"),
      price: "10.99",
    },

    {
      id: 3,
      image: TomatoSoupImage,
      alt: "Tomato Soup",
      title: t("LUNCHDATAS.TITLE3"),
      summary: t("LUNCHDATAS.SUMMARY3"),
      price: "7.99",
    },
  ];

  const PastriesDatas = [
    {
      id: 1,
      image: CroissantsImage,
      alt: "Croissants",
      title: t("PASTRIESDATA.TITLE1"),
      summary: t("PASTRIESDATA.SUMMARY1"),
      price: "4.99",
    },

    {
      id: 2,
      image: ChocolateEclairImage,
      alt: "Chocolate Eclair",
      title: t("PASTRIESDATA.TITLE2"),
      summary: t("PASTRIESDATA.SUMMARY2"),
      price: "5.99",
    },

    {
      id: 3,
      image: AssortedMuffinsImage,
      alt: "Assorted Muffins",
      title: t("PASTRIESDATA.TITLE3"),
      summary: t("PASTRIESDATA.SUMMARY3"),
      price: "3.99",
    },
  ];

  const BeveragesDatas = [
    {
      id: 1,
      image: CappuccinoImage,
      alt: "Cappuccino",
      title: t("BEVERAGESDATAS.TITLE1"),
      summary: t("BEVERAGESDATAS.SUMMARY1"),
      price: "3.49",
    },

    {
      id: 2,
      image: OrangeJuiceImage,
      alt: "Orange Juice",
      title: t("BEVERAGESDATAS.TITLE2"),
      summary: t("BEVERAGESDATAS.SUMMARY2"),
      price: "2.99",
    },

    {
      id: 3,
      image: IcedTeaImage,
      alt: "Iced Tea",
      title: t("BEVERAGESDATAS.TITLE3"),
      summary: t("BEVERAGESDATAS.SUMMARY3"),
      price: "3.49",
    },
  ];

  return (
    <div className="menu">
      <h2>{t("MENU.TITLE1")}</h2>
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
            </div>
          );
        })}
      </div>

      <h2>{t("MENU.TITLE2")}</h2>
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
            </div>
          );
        })}
      </div>

      <h2>{t("MENU.TITLE3")}</h2>
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
            </div>
          );
        })}
      </div>

      <h2>{t("MENU.TITLE4")}</h2>
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
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Menu;
