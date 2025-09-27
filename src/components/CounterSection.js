import React, { useEffect, useState } from 'react';
import './CounterSection.css';

const Counter = ({ target, label }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 6000; 
    const increment = target / (duration / 50);

    const counter = setInterval(() => {
      start += increment;
      if (start >= target) {
        clearInterval(counter);
        setCount(target);
      } else {
        setCount(Math.ceil(start));
      }
    }, 50);

    return () => clearInterval(counter);
  }, [target]);

  return (
    <div className="counter-box">
      <div className="counter-number">{count}</div>
      <div className="counter-label">{label}</div>
    </div>
  );
};

const CounterSection = () => {
  return (
    <div className="counter-section">
      <Counter target={1200} label="Happy Clients" />
      <Counter target={350} label="Projects Completed" />
      <Counter target={25} label="Awards Won" />
      <Counter target={10} label="Years Experience" />
    </div>
  );
};

export default CounterSection;
