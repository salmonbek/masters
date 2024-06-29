import { useEffect, useState } from "react";
import Hero1 from "../../../assets/images/hero1.jpg";
import Hero2 from "../../../assets/images/hero2.jpg";
import Hero3 from "../../../assets/images/hero3.jpg";
import Hero4 from "../../../assets/images/hero4.jpeg";
import Hero5 from "../../../assets/images/hero5.jpg";
import "./Hero.scss";

const Hero = () => {
  const images = [Hero1, Hero2, Hero3, Hero4, Hero5];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [images.length]);

  return (
    <>
      <div className="hero">
        {images.map((image, index) => (
          <div
            key={index}
            className={`hero-image ${
              index === currentImageIndex ? "active" : ""
            }`}
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>
            SIZNING UYINGIZ BIZNING USTALARIMIZ QO'LIDA YANGI KO'RINISHGA EGA
            BO'LADI
          </h1>
          <p>
            Eng ishonchli va malakali ustalar, uyingizdagi barcha ta'mirlash va
            qurilish ishlarini bajarish uchun bu yerda.
          </p>
          <a href="#" className="hero-btn">
            Bizning Xizmatlarimizni Ko'ring
          </a>
          <div className="arrow-down"></div>
        </div>
      </div>
    </>
  );
};

export default Hero;
