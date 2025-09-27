import React from 'react';
import './Cards.css';

const cardData = [
  { image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=500&auto=format&fit=crop&q=60', caption: 'Luxury Sedan' },
  { image: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=500&auto=format&fit=crop&q=60', caption: 'Sport Coupe' },
  { image: 'https://images.unsplash.com/photo-1632685493661-eca0a35cf28f?w=500&auto=format&fit=crop&q=60', caption: 'Electric SUV' },
  { image: 'https://images.unsplash.com/photo-1642197992607-c143dc5f3e92?w=500&auto=format&fit=crop&q=60', caption: 'Classic Convertible' },
  { image: 'https://images.unsplash.com/photo-1604940500627-d3f44d1d21c6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGRvZGdlfGVufDB8fDB8fHww', caption: 'Off-Road Beast' },
  { image: 'https://images.unsplash.com/photo-1632686341231-0a65b83bafaa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGRvZGdlfGVufDB8fDB8fHww', caption: 'City Hatchback' },
  { image: 'https://images.unsplash.com/photo-1610414290892-25e043dbf3a5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGRvZGdlfGVufDB8fDB8fHww', caption: 'Family Van' },
  { image: 'https://images.unsplash.com/photo-1646512267334-158b3e6ddc47?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D', caption: 'Vintage Racer' },
];

const Cards = () => {
  return (
    <div className="card-container">
      {cardData.map((card, index) => (
        <div className="card" key={index}>
          <img src={card.image} alt={card.caption} className="card-image" />
          <div className="card-caption">{card.caption}</div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
