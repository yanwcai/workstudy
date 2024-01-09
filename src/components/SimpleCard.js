import React from 'react';

const SimpleCard = ({ image }) => {
  return (
    <div className="card">
      <img src={image} alt="Card" />
    </div>
  );
};

export default SimpleCard;