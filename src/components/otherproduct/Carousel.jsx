import Kafel1 from "../../assets/images/kafel1.jpg";
import Kafel2 from "../../assets/images/kafel2.jpg";
import Kafel3 from "../../assets/images/kafel3.jpg";
import Kafel4 from "../../assets/images/kafel4.jpg";
import Kafel5 from "../../assets/images//kafel5.jpg";
import Danger1 from "../../assets/images/plita1.jpg";
import Danger2 from "../../assets/images/plita2.jpg";
import Danger3 from "../../assets/images/plita3.jpg";
import Danger4 from "../../assets/images/travertin1.jpg";
import Danger5 from "../../assets/images/travertin2.jpg";
import "./Carousel.scss";

const Carousel = () => {
  return (
    <div className="carousel container">
      <h2>BU YERDA O'ZINGIZNI QULAY HIS QILING</h2>
      <marquee behavior="scroll" direction="left" scrollamount="10">
        <div className="container flex">
          <img src={Kafel1} alt="Kafel 1" />
          <img src={Kafel2} alt="Kafel 2" />
          <img src={Kafel3} alt="Kafel 3" />
          <img src={Kafel4} alt="Kafel 4" />
          <img src={Kafel5} alt="Kafel 5" />
        </div>
      </marquee>
      <marquee behavior="scroll" direction="right" scrollamount="10">
        <div className="container flex">
          <img src={Danger1} alt="Danger 1" />
          <img src={Danger2} alt="Danger 2" />
          <img src={Danger3} alt="Danger 3" />
          <img src={Danger4} alt="Danger 4" />
          <img src={Danger5} alt="Danger 5" />
        </div>
      </marquee>
    </div>
  );
};

export default Carousel;
