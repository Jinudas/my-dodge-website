import React from 'react';
import './BackgroundSection.css'; 

const BackgroundSection = () => {
  return (
    <div className="background-container">
      <div className="content">
        <h1>Welcome to Our Site</h1>
        <p>
          Discover amazing content and explore new ideas. This is a place where creativity meets technology.
        </p>
        <button onClick={() => alert('Button clicked!')}>Get Started</button>
      </div>
    </div>
  );
};

export default BackgroundSection;
