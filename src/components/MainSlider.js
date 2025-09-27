import React from 'react';
import { Carousel } from 'react-bootstrap';
import './MainSlider.css'; 

const MainSlider = () => {
  return (
    <div className="carousel-container">
      <Carousel fade controls={false} indicators={false} interval={4000} pause={false}>
        <Carousel.Item>
          <img
            className="d-block carousel-image"
            src="https://images.unsplash.com/photo-1612813562440-f3f455f77bf7?w=1920"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Bold Design</h3>
            <p>Unmistakable presence on every road.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block carousel-image"
            src="https://images.unsplash.com/photo-1596044021783-8f4b592565ed?w=1920"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Unleash the Beast</h3>
            <p>Built for those who dare to drive different.</p>
          </Carousel.Caption>
        </Carousel.Item>    
      </Carousel>
    </div>
  );
};

export default MainSlider;
