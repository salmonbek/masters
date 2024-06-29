import "./Works.scss";

import HiTech1 from "../../assets/images/uy1.jpg";
import HiTech7 from "../../assets/images/uy7.jpg";
import HiTech3 from "../../assets/images/uy3.jpg";
import HiTech4 from "../../assets/images/uy5.jpg";
import HiTech5 from "../../assets/images/uy6.jpg";
import HiTech6 from "../../assets/images/uy1.jpg";
import Carousel from "../otherproduct/Carousel";

const Works = () => {
  return (
    <div>
      <main>
        <section id="Works" className="works">
          <h2 className="works-title">BIZNING ISHLARIMIZ</h2>
          <div className="call">
            <div>
              <a href="tel:+998770765599"></a>
            </div>
            <div>
              <div>
                <a href="tel:+998958470997">+998958470997</a>
              </div>
              <div>
                <a href="tel:+998901234567">+998901234567</a>
              </div>
              <a href="tel:+998910580702">+998910580702</a>
            </div>
          </div>
          <div className="works-card container">
            <div className="works-card-items">
              <img src={HiTech1} alt="hitech image" />

              <h4>HI TECH STYLE</h4>
              <p>USHBU USLUB SARDORBEK AKBAROV TOMONIDAN YARQATILGAN</p>
            </div>
            <div className="works-card-items">
              <img src={HiTech6} alt="hitech image" />
              <h4>HI TECH STYLE</h4>
              <p>USHBU USLUB SARDORBEK AKBAROV TOMONIDAN YARQATILGAN</p>
            </div>
            <div className="works-card-items">
              <img src={HiTech3} alt="hitech image" />
              <h4>HI TECH STYLE</h4>
              <p>USHBU USLUB SARDORBEK AKBAROV TOMONIDAN YARQATILGAN</p>
            </div>
            <div className="works-card-items">
              <img src={HiTech4} alt="hi tech image" />
              <h4>HI TECH STYLE</h4>
              <p>USHBU USLUB SARDORBEK AKBAROV TOMONIDAN YARQATILGAN</p>
            </div>
            <div className="works-card-items">
              <img src={HiTech5} alt="hitech image" />
              <h4>HI TECH STYLE</h4>
              <p>USHBU USLUB SARDORBEK AKBAROV TOMONIDAN YARQATILGAN</p>
            </div>
            <div className="works-card-items">
              <img src={HiTech7} alt="hitech image" />
              <h4>HI TECH STYLE</h4>
              <p>USHBU USLUB SARDORBEK AKBAROV TOMONIDAN YARQATILGAN</p>
            </div>
          </div>
        </section>
        <section className="other-product">
          <Carousel />
        </section>
      </main>
    </div>
  );
};

export default Works;
