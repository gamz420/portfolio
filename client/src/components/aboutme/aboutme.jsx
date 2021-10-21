import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import "./style.css";

function Aboutme() {
  const theme = useSelector((state) => state.theme);
  const language = useSelector((state) => state.language);

  useEffect(() => {
    fetch("/checkaboutme", {
      credentials: "include",
    });
  }, []);

  const handleEvent = () => {
    fetch("/downloadresume", {
      credentials: "include",
    });
  };

  return (
    <div className="aboutme">
      <div className={!theme ? "card" : "cardLight"}>
        <div>
          <img src="img/me.jpg" alt="photo" />
        </div>
        <div className="info-text">
          <h2>HELLO WORLD!</h2>
          <p>
            {!language
              ? "Привет я Гамзалиев Гамзали, мне 26 лет и я web-разработчик, с опытом разработки веб-приложений с использованием React. Также имеется опыт разработки REST API с использованием Node JS (Express). Уделяю большое внимание грамотному использованию JS, а также знаком с современным синтаксисом ES6+."
              : "Hi, I'm Gamzaliev Gamzali, I'm 26 years old and I'm a web developer with experience in developing web applications using React. I also have experience in developing REST APIs using Node JS (Express). I pay great attention to the competent use of JS, and also am familiar with modern ES6 + syntax."}
          </p>
          <p>
            {!language
              ? "Получаю удовольствие от программирования и уделяю этому большую часть времени. Не боюсь жёстких дедлайнов, многозадачности и капризных клиентов. Люблю учиться новому, развиваться и общаться с классными людьми."
              : "I enjoy programming and spend most of my time on it. I'm not afraid of tough deadlines, multitasking and capricious clients. I love to learn new things, develop and communicate with cool people."}
          </p>
          <p>
            {!language
              ? "Подробней обо мне в резюме."
              : "More details about me in the resume."}
          </p>
          <a
            onClick={handleEvent}
            href="https://hh.ru/resume_converter/%D0%93%D0%B0%D0%BC%D0%B7%D0%B0%D0%BB%D0%B8%D0%B5%D0%B2%20%D0%93%D0%B0%D0%BC%D0%B7%D0%B0%D0%BB%D0%B8.pdf?hash=5febcf71ff08e06de80039ed1f7a4d30555274&type=pdf&hhtmSource=resume_view&hhtmFrom="
            className={!theme ? "btn-main-offer" : "btn-main-offerLight"}
          >
            {!language ? "Скачать резюме" : "Download CV"}
          </a>
        </div>
      </div>
    </div>
  );
}

export default Aboutme;
