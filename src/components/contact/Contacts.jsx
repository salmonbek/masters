import React, { useState } from "react";
import "./Contact.scss";

const telegram_bot_id = "7386920088:AAGRMWAiFzLMA6noQKMQfF-bdq30P6tnOU0";
const chat_id = 7036053107;

const Contacts = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(""); // Add a state for status messages

  const sendMessage = () => {
    const url = `https://api.telegram.org/bot${telegram_bot_id}/sendMessage?chat_id=${chat_id}&text=Name: ${name}%0A%0AMessage: ${message}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (data.ok) {
          console.log("Message sent:", data);
          setStatus("Xabar jo'natildi!");
        } else {
          throw new Error(data.description);
        }
      })
      .catch((error) => {
        console.error("Error sending message:", error);
        setStatus("Xatolik yuz berdi. Iltimos, qaytadan urinib ko'ring.");
      });
  };

  return (
    <>
      <div className="contacts">
        <div className="container">
          <h2>BIZ BILAN ALOQA</h2>
          <div className="contact-message">
            Agar sizga bizning ishlarimiz ma'qul bo'lsa hoziroq shu yerni
            to'ldring
          </div>
          <div className="contact-form">
            <input
              type="text"
              placeholder="Ismingiz"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Xabar"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button onClick={sendMessage}>Jo'natish</button>
            {status && <p>{status}</p>} {/* Display status messages */}
          </div>
          <div className="call">
            <div>
              <a href="tel:+998770765599">+998770765599</a>
            </div>
            <div>
              <a href="tel:+998901234567">+998901234567</a>
            </div>
            <div>
              <a href="tel:+998910580702">+998910580702</a>
            </div>
          </div>
        </div>
      </div>
      <div className="note">
        <marquee behavior="smo" direction="right">
          SAYTGA O'Z ELONINGIZNI BERISHINGIZ MUMKIN
        </marquee>
      </div>
    </>
  );
};

export default Contacts;
