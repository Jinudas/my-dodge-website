import React from 'react';
import './QuoteWithImage.css';

const QuoteWithImage = () => {
  return (
    <div className="dual-layout-wrapper">
      {}
      <div className="quote-image-container">
        <div className="quote">
          “Dodge’s commitment to advanced automotive technology is evident in its integration of performance-focused innovation. The brand is embracing electrification with models like the Charger Daytona SRT, which features an 800V Banshee propulsion system for instant torque and high-speed capability. Inside, drivers enjoy a digital cockpit with customizable displays, performance telemetry, and voice-activated controls. Dodge’s PowerShot feature delivers short bursts of extra horsepower, enhancing acceleration during critical moments. With over-the-air updates and track-ready engineering, Dodge blends muscle car legacy with modern tech. These advancements position Dodge as a pioneer in redefining speed, control, and connectivity for the next generation of enthusiasts.”
        </div>
        <div className="image">
          <img
            src="https://i.pinimg.com/736x/00/ec/f0/00ecf047b89103036d1c634d03014edb.jpg"
            alt="Dodge Car"
          />
        </div>
      </div>

      {}
      <div className="quote-image-container reversed">
        <div className="quote">
          Dodge continues to push automotive boundaries with advanced engineering and bold innovation. Its latest models integrate high-performance hybrid and electric powertrains, like the Charger Daytona SRT, blending muscle car heritage with future-ready technology. Advanced driver-assistance systems enhance safety and control, while Uconnect infotainment delivers seamless connectivity. Dodge’s adaptive suspension and launch control systems optimize handling and acceleration, making every drive thrilling. Aerodynamic designs and lightweight materials improve efficiency without sacrificing power. With a focus on electrified performance and aggressive styling, Dodge remains a leader in redefining American muscle for the modern era—where raw energy meets cutting-edge sophistication.
        </div>
        <div className="image">
          <img
            src="https://i.pinimg.com/736x/47/65/ed/4765ed9633e58ea49fd6ef407bebc2c0.jpg"
            alt="Dodge Car"
          />
        </div>
      </div>
    </div>
  );
};

export default QuoteWithImage;