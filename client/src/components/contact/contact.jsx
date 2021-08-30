import React, { useState } from "react";
import "./style.css";

let list = [
  {
    first: "Имя:",
    second: "Гамзалиев Гамзали",
    src: "img/icon-human-21.jpg",
  },
  {
    first: "Страна, Город:",
    second: "Россия, Москва",
    src: "img/gps.png",
  },
  {
    first: "Почта:",
    second: "gamzalievgamz@gmail.com",
    src: "img/mail.png",
  },
  {
    first: "Github:",
    second: "github.com/gamz420",
    src: "img/github_PNG83.png",
    link: "https://github.com/gamz420",
  },
  {
    first: "Linkedin:",
    second: "linkedin.com/in/gamzali-gamzaliev-1361a2210",
    src: "img/linkedin.png",
    link: "https://linkedin.com/in/gamzali-gamzaliev-1361a2210",
  },
  {
    first: "Facebook:",
    second: "facebook.com/gamzat.gamzaliev420",
    src: "img/facebook.png",
    link: "https://facebook.com/gamzat.gamzaliev420",
  },
  {
    first: "Telegram:",
    second: "@gamzalievgamz",
    src: "img/telegram.png",
    link: "https://t.me/gamzalievgamz",
  },
];

export default function Contact() {
  console.log("contact");
  const [status, setStatus] = useState("");

  const handleGetMessage = async (e) => {
    e.preventDefault();
    if (e.target.from.value && e.target.message.value) {
      fetch("/message", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          from: e.target.from.value,
          message: e.target.message.value,
        }),
      });
      e.target.from.value = "";
      e.target.message.value = "";
      setStatus("Сообщение отправлено, спасибо");
    } else {
      setStatus("Заполните все поля");
    }
  };

  return (
    <div className="contact">
      <div className="contacts-info">
        <div className="contacts-div">
          {list.map((e) => (
            <div key={e.second} className="item">
              <div className="img-div">
                <img className="icon" src={e.src} alt={e.first} />
              </div>
              <div className="text">
                <p className="text-header"> {e.first} </p>
                {!e.link ? (
                  <p className="text-information"> {e.second} </p>
                ) : (
                  <a href={e.link} className="text-information" target="_blank">
                    {" "}
                    {e.second}{" "}
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="contacts-form">
        <h2>ОТПРАВЬТЕ МНЕ СООБЩЕНИЕ</h2>
        <form onSubmit={handleGetMessage} className="form">
          <span>{status}</span>
          <label className="label-form" htmlFor="">
            ОТ КОГО
          </label>
          <input name="from" className="input-form" type="text" />
          <label className="label-form" htmlFor="">
            СООБЩЕНИЕ
          </label>
          <textarea name="message" className="input-form-message" />
          <button className="button-form">ОТПРАВИТЬ</button>
        </form>
      </div>
    </div>
  );
}
