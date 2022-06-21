import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import "./style.css";

export default function Contact() {
  const [status, setStatus] = useState("");
  const theme = useSelector((state) => state.theme);
  const language = useSelector((state) => state.language);

  let list = [
    {
      first: !language ? "Имя:" : "Name:",
      second: !language ? "Гамзалиев Гамзали" : "Gamzaliev Gamzali",
      src: "img/icon-human-21.jpg",
    },
    {
      first: !language ? "Страна, Город:" : "Country, City:",
      second: !language ? "Россия, Москва" : "Russia, Moscow",
      src: "img/gps.png",
    },
    {
      first: !language ? "Почта:" : "Mail:",
      second: "gamzalievgamz@gmail.com",
      src: "img/mail.png",
    },
    {
      first: "Github:",
      second: "github.com/gamz420",
      src: "img/github_PNG83.png",
      link: "https://github.com/gamz420",
      req: () => {
        fetch("/github", {
          credentials: "include",
        });
      },
    },
    {
      first: "Linkedin:",
      second: "linkedin.com/in/gamzali-gamzaliev-1361a2210",
      src: "img/linkedin.png",
      link: "https://linkedin.com/in/gamzali-gamzaliev-1361a2210",
      req: () => {
        fetch("/linkedin", {
          credentials: "include",
        });
      },
    },
    // {
    //   first: "Facebook:",
    //   second: "facebook.com/gamzat.gamzaliev420",
    //   src: "img/facebook.png",
    //   link: "https://facebook.com/gamzat.gamzaliev420",
    //   req: () => {
    //     fetch("/facebook", {
    //       credentials: "include",
    //     });
    //   },
    // },
    {
      first: "Telegram:",
      second: "@gamzalievgamz",
      src: "img/telegram.png",
      link: "https://t.me/gamzalievgamz",
      req: () => {
        fetch("/telegram", {
          credentials: "include",
        });
      },
    },
  ];

  useEffect(() => {
    fetch("/checkcontact", {
      credentials: "include",
    });
  }, []);

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
      setStatus(
        !language ? "Сообщение отправлено, спасибо" : "Message sent, thank you"
      );
    } else {
      setStatus(!language ? "Заполните все поля" : "Fill in all the fields");
    }
  };

  return (
    <div className={!theme ? "contact" : "contactLight"}>
      <div className="contacts-info">
        <div className="contacts-div">
          {list.map((e) => (
            <div key={e.second} className="item">
              <div className="img-div">
                <img
                  className={!theme ? "icon" : "iconLight"}
                  src={e.src}
                  alt={e.first}
                />
              </div>
              <div className={!theme ? "text" : "textLight"}>
                <p className="text-header"> {e.first} </p>
                {!e.link ? (
                  <p
                    className={
                      !theme ? "text-information" : "text-informationLight"
                    }
                  >
                    {" "}
                    {e.second}{" "}
                  </p>
                ) : (
                  <a
                    onClick={e.req}
                    href={e.link}
                    className={
                      !theme ? "text-information" : "text-informationLight"
                    }
                    target="_blank"
                  >
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
        <h2>{!language ? "ОТПРАВЬТЕ МНЕ СООБЩЕНИЕ" : "SEND ME A MESSAGE"}</h2>
        <form onSubmit={handleGetMessage} className="form">
          <span>{status}</span>
          <label
            className={!theme ? "label-form" : "label-formLight"}
            htmlFor=""
          >
            {!language ? "ОТ КОГО" : "SENDER"}
          </label>
          <input
            name="from"
            className={!theme ? "input-form" : "input-formLight"}
            type="text"
          />
          <label
            className={!theme ? "label-form" : "label-formLight"}
            htmlFor=""
          >
            {!language ? "СООБЩЕНИЕ" : "MESSAGE"}
          </label>
          <textarea
            name="message"
            className={
              !theme ? "input-form-message" : "input-form-messageLight"
            }
          />
          <button className={!theme ? "button-form" : "button-formLight"}>
            {!language ? "ОТПРАВИТЬ" : "SEND"}
          </button>
        </form>
      </div>
    </div>
  );
}
