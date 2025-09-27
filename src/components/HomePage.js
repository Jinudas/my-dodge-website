import React from 'react';
import MainSlider from './MainSlider';
import CarOverlay from './CarOverlay';
import Cards from './Cards';
import InspirePage from './InspirePage';
import CounterSection from './CounterSection'; 

const HomePage = () => {
  return (
    <div style={{ backgroundColor: 'black', color: 'white', minHeight: '100vh' }}>
      <MainSlider />
      <CarOverlay />
      <Cards />
      <InspirePage />
      <CounterSection /> {}
    </div>
  );
};

export default HomePage;
