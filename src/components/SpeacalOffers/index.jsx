import React from "react";
import SectionTitle from "../SectionTitle";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import OfferItem from "./OfferItem";

const SpecialOffers = () => {
  const offers = [
    {
      image: "special-offers/1.png",
      title: "ԿինոՏոն մինչև հունվարի...",
      text: "OVIO-ի All in փաթեթների կազմում ներառել ենք մինչև 35 000 ֆիլմեր և սերիալներ",
    },
    {
      image: "special-offers/2.png",
      title: "4950 ֏՝ 3 ամիս 50%...",
      text: "Միացի՛ր  All in տարեկան III փաթեթին 4950 ֏՝ 3 ամիս 50% զեղչված գնով",
    },
    {
      image: "special-offers/3.png",
      title: "Վերածի՛ր հին... ",
      text: "PowerPlay-ի և GFN.AM-ի հետ ցանկացած սարք խաղային է",
    },
    {
      image: "special-offers/4.jpg",
      title: "OVIO-ն և Վեգան... ",
      text: "Միացի՛ր OVIO-ին և կատարիր գնումներ Վեգայից ՄԵԾԱԾԱԽ գներով",
    },
    {
      image: "special-offers/5.png",
      title: "Ուրախ շաբաթ կիրակի",
      text: "Շաբաթ և կիրակի օրերը վայելե՛ք նոր արագություններով։",
    },
  ];
  return (
    <div className=" mx-20 mb-40">
      <SectionTitle title="Հատուկ առաջարկներ" />
      <Slide slidesToScroll={1} slidesToShow={3} transitionDuration={500}>
        {offers.map((offer, index) => (
          <OfferItem
            key={index}
            title={offer.title}
            text={offer.text}
            image={offer.image}
          />
        ))}
      </Slide>
    </div>
  );
};

export default SpecialOffers;
