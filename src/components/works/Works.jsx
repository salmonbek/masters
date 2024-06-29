import "./Works.scss";
import { IoHomeOutline } from "react-icons/io5";
import HiTech1 from "../../assets/images/uy1.jpg";
import HiTech7 from "../../assets/images/uy7.jpg";
import HiTech3 from "../../assets/images/uy3.jpg";
import HiTech4 from "../../assets/images/uy5.jpg";
import HiTech5 from "../../assets/images/uy6.jpg";
import HiTech6 from "../../assets/images/uy1.jpg";
// import Kafel1 from "../../assets/images/kafel1.jpg";
// import Kafel2 from "../../assets/images/kafel2.jpg";
// import Kafel3 from "../../assets/images/kafel3.jpg";
// import Kafel4 from "../../assets/images/kafel4.jpg";
// import Kafel5 from "../../assets/images//kafel5.jpg";
const Works = () => {
  return (
    <div>
      <main>
        <section className="works">
          <h2 className="works-title">BIZNING ISHLARIMIZ</h2>
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
      </main>
    </div>
  );
};

export default Works;
