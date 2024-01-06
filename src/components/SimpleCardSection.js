import React from 'react';
import SimpleCard from "./SimpleCard";
import "./SimpleCardSection.css";

const SimpleCardSection = () => {
  const cardData = [
    { id: 1, imageUrl: "https://images.pexels.com/photos/1543793/pexels-photo-1543793.jpeg" },
    { id: 2, imageUrl: "https://images.pexels.com/photos/1276553/pexels-photo-1276553.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"},
    { id: 3, imageUrl: "https://images.pexels.com/photos/126407/pexels-photo-126407.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
    { id: 4, imageUrl: "https://images.pexels.com/photos/126407/pexels-photo-126407.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
    { id: 5, imageUrl: "https://images.pexels.com/photos/126407/pexels-photo-126407.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
  ];

  const renderCardCount = window.innerWidth < 200 ? 3 : cardData.length; 


  return (
    <div className="card-section">
      <h2>Card Section Title</h2>
      <div className="card-row">
        {cardData.slice(0, renderCardCount).map((card) => (
          <SimpleCard key={card.id} imageUrl={card.imageUrl} />
        ))}
      </div>
    </div>
  );
};

export default SimpleCardSection;
