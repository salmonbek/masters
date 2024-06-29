import { useState, useEffect } from "react";
import "./Footer.scss";
import { FaTelegram, FaPhone, FaInstagram } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";

const Footer = () => {
  const telegram_bot_id = "7386920088:AAGRMWAiFzLMA6noQKMQfF-bdq30P6tnOU0";
  const chat_id = 7036053107;

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    region: "",
    service: "",
  });

  const [showBackToTop, setShowBackToTop] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = () => {
    const { name, phone, region, service } = formData;
    const message = `Ism: ${name}\nTel: ${phone}\nViloyat: ${region}\nQanday xizmat: ${service}`;
    fetch(`https://api.telegram.org/bot${telegram_bot_id}/sendMessage`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id,
        text: message,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.ok) {
          alert("Yuborildi!");
          setFormData({ name: "", phone: "", region: "", service: "" });
        } else {
          alert("Xatolik yuz berdi!");
        }
      })
      .catch((error) => alert("Xatolik yuz berdi!"));
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer>
      <div className="container">
        <div className="footer-icons">
          <a
            href="https://t.me/sardorbe_5599"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTelegram size={40} />
          </a>
          <a href="tel:+998770765599">
            <FaPhone size={40} />
          </a>
          <a
            href="https://instagram.com/sardor_akbarov2018"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram size={40} />
          </a>
        </div>

        <div className="form">
          <input
            type="text"
            name="name"
            placeholder="Ism"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="tel"
            name="phone"
            placeholder="Tel"
            value={formData.phone}
            onChange={handleChange}
          />
          <input
            type="text"
            name="region"
            placeholder="Qaysi viloyat"
            value={formData.region}
            onChange={handleChange}
          />
          <input
            type="text"
            name="service"
            placeholder="Qanday xizmat"
            value={formData.service}
            onChange={handleChange}
          />
          <button onClick={handleSubmit}>Yuborish</button>
        </div>
        <h5>
          AGAR SAYTGA O'Z E'LONINGIZNI JOYLAMOQCHI BO'LSANGIZ USHBU NO'MERGA
          MUROJAT QILING +998906287742
        </h5>
      </div>

      {showBackToTop && (
        <button className="back-to-top" onClick={scrollToTop}>
          <FaArrowUp size={20} />
        </button>
      )}
    </footer>
  );
};

export default Footer;
