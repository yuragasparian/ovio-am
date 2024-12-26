import React from "react";
import SectionTitle from "../SectionTitle";
import CardItem from "./CardItem";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const CardsCarousel = () => {
  const cards = [
    {
      title: "Հուսալի է",
      text: "Երեք միջազգային կապուղիներ դեպի Ռուսաստան և Եվրոպա"
    },
    {
      title: "Կայուն է",
      text: "Համացանցի դիվերսիֆիկացված... "
    },
    {
      title: "Վստահելի է",
      text: "Տասնյակ հազարավոր բաժանորդներ ՀՀ 19..."
    },
    {
      title: "Նորարար է",
      text: "Արդի տեխնոլոգիական լուծումներ և..."
    },
    {
      title: "Ճկուն է",
      text: "Ծառայությունների ընտրության լայն..."
    }
  ];
  return (
    <div className="py-8 mx-20">
      <SectionTitle title = "Ինչու՞ OVIO" />
            <Slide slidesToScroll={1} slidesToShow={3} transitionDuration={500}>
                {cards.map((card, index)=> 
                <CardItem
                key={index}
                title={card.title}
                text={card.text}
                order={index+1}
              />
                )}
            </Slide>
      
    </div>
  );
};

export default CardsCarousel;
