import React from 'react';
import SimpleCard from "./SimpleCard";
import "./SimpleCardSection.css";
import cat1 from "./../images/cat1.jpeg";
import cat2 from "./../images/cat2.jpeg";
import cat3 from "./../images/cat3.jpeg";

const SimpleCardSection = () => {
  const cardData = [
    { id: 1, image: cat1 },
    { id: 2, image: cat2 },
    { id: 3, image: cat3 }
  ];

  const renderCardCount = window.innerWidth < 200 ? 3 : cardData.length; 


  return (
    <div className="card-section">
      <h2>Card Section Title</h2>
      <div className="card-row">
        {cardData.slice(0, renderCardCount).map((card) => (
          <SimpleCard key={card.id} image={card.image} />
        ))}
      </div>
    </div>
  );
};

export default SimpleCardSection;
