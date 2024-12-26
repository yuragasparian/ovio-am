import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import Button from "../Button";

const Slides = () => {
  const slides = [
    {
      image: "slides/1.jpg",
      title: "Մեծ ԿինոՏոն 📽️",
      text: "Դու էլ միացի՛ր OVIO-ի All in փաթեթներին և վայելի՛ր մինչև 35 000 ֆիլմեր և սերիալներ՝ ներառված փաթեթի կազմում",
      buttons: [
        { color: "white", text: "Իմացի՛ր ավելին" },
        { color: "emerald", text: "Միացի՛ր հիմա" },
      ],
    },

    {
      image: "slides/2.png",
      title: "Միացի՛ր All in տարեկան III-ին ♡  4950 դրամով՝ 9900-ի փոխարեն",
      text: "մինչև 300 Մբ/վ արագություն, 180+ ալիք, 25 000 ֆիլմ և սերիալ 3 ամիս 50% զեղչով",
      buttons: [
        { color: "white", text: "Իմացի՛ր ավելին" },
        { color: "emerald", text: "Միացի՛ր հիմա" },
      ],
    },

    {
      image: "slides/3.jpg",
      title: "Բարի գալու՜ստ OVIO",
      text: "Բացահայտի՛ր...",
      buttons: [],
    }
  ];

  return (
    <Slide>
      {slides.map((slide, index) => (
        <div
          key={index}
          className="grid grid-cols-5 h-[calc(100vh-6rem)] w-screen bg-violet-800"
        >
          <div className="h-full col-span-2 flex justify-center items-center">
            <div className="flex flex-col w-3/4">
              <h2 className="text-[#04eed2] text-6xl font-thin ">
                {slide.title}
              </h2>
              <p className="my-7 text-lg text-white font-normal">
                {slide.text}
              </p>
              <div>
                {slide.buttons.map((btn, i) => (
                  <Button key={i} size="large" color={btn.color}>
                    {btn.text}
                  </Button>
                ))}
              </div>
            </div>
          </div>
          <div
            className="bg-cover overflow-hidden bg-center bg-no-repeat w-full rounded-s-[28rem] col-span-3 -mt-[8rem] "
            style={{ backgroundImage: `url(${slide.image})` }}
          ></div>
        </div>
      ))}
    </Slide>
  );
};

export default Slides;
