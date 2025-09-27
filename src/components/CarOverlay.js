import React from 'react';
import './CarOverlay.css';

const CarOverlay = () => {
  return (
    <div className="car-overlay-container">
      <img
        src="https://images.unsplash.com/photo-1680574893873-c7563dc5f81d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZG9kZ2V8ZW58MHx8MHx8fDA%3D"
        alt="Dodge Car"
        className="car-image"
      />
      <div className="overlay-content">
        <h2 className="quote-text">"What we drive says a lot about who we are.."</h2>
        <button className="quote-button">Get Car</button>
      </div>
    </div>
  );
};

export default CarOverlay;
