import React from 'react';

const SimpleCard = ({ imageUrl }) => {
  return (
    <div className="card">
      <img src={imageUrl} alt="Card" />
    </div>
  );
};

export default SimpleCard;
