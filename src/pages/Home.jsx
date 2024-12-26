import React from "react";
import Header from "./../components/Header/index";
import Slides from "../components/Slides";
import CardsCarousel from './../components/CardsCarousel/index';
import SpecialOffers from './../components/SpeacalOffers/index';

export default function Home() {
  return (
    <>
      <Header />
      <Slides />
      <CardsCarousel />
      <SpecialOffers />
    </>
  );
}
