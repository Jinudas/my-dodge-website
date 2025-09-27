import React from 'react';
import HeroSection from './HeroSection';
import './AboutPage.css';
import QuoteWithImage from './QuoteWithImage';

const AboutPage = () => {
  return (
    <div className="about-wrapper">
      <HeroSection />

      <div className="about-details">
        <h2>About Us</h2>
        <p>
          Dodge is a renowned American automotive brand founded in 1900 by brothers John and Horace Dodge. Initially a supplier of auto parts, it began producing vehicles in 1915. Known for its bold styling and high-performance muscle cars, Dodge offers iconic models like the Charger, Challenger, and Durango. Now part of Stellantis, Dodge continues to evolve with electrified performance vehicles such as the Charger Daytona Scat Pack. The brand emphasizes power, speed, and a rebellious spirit, appealing to enthusiasts who value aggressive design and thrilling driving experiences. Dodge remains a symbol of American automotive innovation and muscle car heritage.
        </p>

        <QuoteWithImage />
      </div>
    </div>
  );
};

export default AboutPage;