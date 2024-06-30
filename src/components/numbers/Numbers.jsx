import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import "./Numbers.scss";

const Counter = ({ end, label }) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const duration = 2000;
      const increment = end / (duration / 100);
      const counter = setInterval(() => {
        start += increment;
        if (start > end) {
          start = end;
          clearInterval(counter);
        }
        setCount(Math.ceil(start));
      }, 100);
    }
  }, [inView, end]);

  return (
    <div ref={ref} className="card">
      <div className="number">{count}</div>
      <div className="label">{label}</div>
    </div>
  );
};

const Numbers = () => {
  return (
    <div className="container">
      <div className="flex1">
        <Counter className="number" end={200} label="Mijozlar" />
        <Counter className="number" end={300} label="Ishlarimiz" />
        <Counter className="number" end={10} label="Jamoa" />
      </div>
    </div>
  );
};

export default Numbers;
