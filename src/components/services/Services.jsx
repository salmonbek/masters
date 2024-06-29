import React from "react";
import { Link } from "react-router-dom";
import "./Services.scss";
import videoBg from "../../assets/videos/VIDEO-BG1.mp4";
import HiTech1 from "../../assets/images/HI-TECH1.jpg";
import HiTech2 from "../../assets/images/HI-TECH2.jpg";
import HiTech3 from "../../assets/images/HI-TECH3.jpg";
import {
  GiAbstract026,
  GiAbstract112,
  GiAmethyst,
  GiBrickWall,
  GiCalendarHalfYear,
} from "react-icons/gi";
import { FaHandHoldingWater } from "react-icons/fa";
import { MdMapsHomeWork } from "react-icons/md";
import { IoIosColorPalette } from "react-icons/io";
import { Fragment } from "react";

const Services = () => {
  const scrollToContent = () => {
    window.scrollBy({
      top: 200,
      behavior: "smooth",
    });
  };

  return (
    <Fragment>
      <div className="services">
        <video className="video-bg" autoPlay loop muted>
          <source src={videoBg} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="content container">
          <h1>BIZNING XIZMATLARIMZDAN FOYDALANAYOTGANIZDAN BIZ MAMNUNMIZ</h1>
          <p>
            SIFATLI VA O'Z ISHIMIZGA ALBATDA JAVOB BERAMIZ, ZAMONAVIY HI TECH
            UYLARINI BIZ BILAN QURING
          </p>
          <div className="links">
            <Link to="/savollar" className="link">
              SAVOLLAR
            </Link>
            <Link to="/contact" className="link">
              ALOQA
            </Link>
            <Link to="#" className="link" onClick={scrollToContent}>
              KO'PROQ KO'RING
            </Link>
          </div>
        </div>
      </div>
      <div className="cards">
        <div className="carousel container">
          <div className="carousel-card">
            <GiAbstract026 className="icon" />
            <h5>KAFEL TERISH</h5>
          </div>
          <div className="carousel-card">
            <GiAbstract112 className="icon" />
            <h5>TRAVERTIN</h5>
          </div>
          <div className="carousel-card">
            <GiAmethyst className="icon" />
            <h5>GIPS KARTON</h5>
          </div>
          <div className="carousel-card">
            <GiBrickWall className="icon" />
            <h5>PLITA</h5>
          </div>
          <div className="carousel-card">
            <GiCalendarHalfYear className="icon" />
            <h5>SOKL</h5>
          </div>
          <div className="carousel-card">
            <FaHandHoldingWater className="icon" />
            <h5>SANITEXNIKA</h5>
          </div>
          <div className="carousel-card">
            <MdMapsHomeWork className="icon" />
            <h5>ICHKI FASAD</h5>
          </div>
          <div className="carousel-card">
            <MdMapsHomeWork className="icon" />
            <h5>TASHQI FASAD</h5>
          </div>
          <div className="carousel-card">
            <IoIosColorPalette className="icon" />
            <h5>BO'YOQCHILIK</h5>
          </div>
        </div>
      </div>

      <div className="hi-tech">
        <h2>RIVOJLANIB KELAYOTGAN HI TECH USULINI TANLANG</h2>
        <div className="cards container">
          <div className="hi-tech-card">
            <img src={HiTech1} alt="hitech" />
            <p>
              Agar siz yaltiroq metall, shisha va plastmassaning sovuqligidan
              zavqlansangiz, zamonaviy texnologiyalarni qadrlasangiz, demak siz
              haqiqatan ham yuqori texnologiyali uslubning muxlisisiz.
            </p>
          </div>
          <div className="hi-tech-card">
            <img src={HiTech2} alt="hitech" />
            <p>
              Odatda, bu uslubdagi binolar binoning tashqi ko'rinishidagi
              alyuminiy va po'lat kabi konstruktiv elementlar bilan bog'liq
              bo'lgan materiallar bilan yaratilgan.
            </p>
          </div>
          <div className="hi-tech-card">
            <img src={HiTech3} alt="hitech" />
            <p>
              Yuqori texnologiyalarda hamma narsa o'ta zamonaviy va
              funktsionaldir va har bir element eng mayda detallarigacha ishlab
              chiqilgan.
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Services;
