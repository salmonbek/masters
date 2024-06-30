import React from "react";
import "./Gallary.scss";
import Img1 from "../../assets/images/work1.jpg";
import Img2 from "../../assets/images/work2.jpg";
import Img3 from "../../assets/images/work3.jpg";
import Img4 from "../../assets/images/work4.jpg";
import Img5 from "../../assets/images/work5.jpg";
import Img6 from "../../assets/images/work6.jpg";
import Img7 from "../../assets/images/work10.jpg";
import Img8 from "../../assets/images/work12.jpg";
import Img9 from "../../assets/images/work13.jpg";
import Img10 from "../../assets/images/work14.jpg";
import Img11 from "../../assets/images/work15.jpg";
import Img12 from "../../assets/images/work17.jpg";

const images = [
  { src: Img1, alt: "Work 1", description: "Work 1 description" },
  { src: Img2, alt: "Work 2", description: "Work 2 description" },
  { src: Img3, alt: "Work 3", description: "Work 3 description" },
  { src: Img4, alt: "Work 4", description: "Work 4 description" },
  { src: Img5, alt: "Work 5", description: "Work 5 description" },
  { src: Img6, alt: "Work 6", description: "Work 6 description" },
  { src: Img7, alt: "Work 7", description: "Work 7 description" },
  { src: Img8, alt: "Work 8", description: "Work 8 description" },
  { src: Img9, alt: "Work 9", description: "Work 9 description" },
  { src: Img10, alt: "Work 10", description: "Work 10 description" },
  { src: Img11, alt: "Work 11", description: "Work 11 description" },
  { src: Img12, alt: "Work 12", description: "Work 12 description" },
];

const Gallary = () => {
  return (
    <div className="gallary container">
      <h2>ENG SARA ISHLARIMIZ BU YERDA</h2>
      <div className="gallary-grid">
        {images.map((image, index) => (
          <div className="card" key={index}>
            <img src={image.src} alt={image.alt} />
            <div className="card-description">{image.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallary;
