import React from 'react';
import './InspirePage.css';

const InspirePage = () => {
  return (
    <div className="inspire-container">
      <img
        src="https://images.unsplash.com/photo-1634025643317-3ed0f330b78b?q=80&w=781&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Motivation"
        className="inspire-image"
      />
      <div className="inspire-text">
        <p className="quote">"Push yourself, because no one else is going to do it for you."</p>
        <button className="inspire-button">Start Now</button>
      </div>
    </div>
  );
};

export default InspirePage;

