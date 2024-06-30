import React from "react";
import { Typewriter } from "react-simple-typewriter";
import "./About.scss";
import Hero from "../../assets/images/hero-about.jpg";
import Team1 from "../../assets/images/team.jpg";
import Team2 from "../../assets/images/team2.jpg";
import Team3 from "../../assets/images/team3.jpg";
import Team4 from "../../assets/images/team-enjoy2.jpg";
import Team5 from "../../assets/images/team-enjoy.jpg";
import Team6 from "../../assets/images/gips-master.jpg";
import Video2 from "../../assets/videos/baxti-video.mp4";

const About = () => {
  const videoRef = React.useRef(null);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleStop = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <div className="about">
      <div className="container">
        <div className="about-hero">
          <div className="about-hero-left">
            <h2>
              Men Sardorbek 7 yillik tajribaga ega hamda o'z jamoamni
              qadirlayman
            </h2>
            <Typewriter
              words={[
                "Sifatli xizmat",
                "Belgilangan vaqt",
                "Mijozlarning quvonchi",
              ]}
              loop={0}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </div>
          <div className="about-hero-right">
            <img src={Hero} alt="Hero" />
          </div>
        </div>
        <div className="gallery">
          <h2>Jamoamiz ish vaqtida hamda boshqa paytlari</h2>
          <div className="gallery-grid">
            <img src={Team1} alt="Team1" />
            <img src={Team2} alt="Team2" />
            <img src={Team3} alt="Team3" />
            <img src={Team4} alt="Team4" />
            <img src={Team5} alt="Team5" />
            <img src={Team6} alt="Team6" />
          </div>
        </div>
        <div className="video-section">
          <h2>Video</h2>
          <div className="video-container">
            <video ref={videoRef} controls={false}>
              <source src={Video2} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="video-controls">
              <button onClick={handlePlay}>Play</button>
              <button onClick={handleStop}>Stop</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
