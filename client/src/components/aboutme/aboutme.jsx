import React from "react";
import "./style.css";

export default function Aboutme() {
  return (
    <div className="aboutme">
      <div>
        <div>
          <img src="img/me.jpg" alt="photo" />
        </div>
        <div className="info-text">
          <h2>HELLO WORLD!</h2>
          <p>
            Привет я Гамзалиев Гамзали, мне 26 лет и я fullstack-разработчик, с
            опытом разработки веб-приложений с использованием React. Также
            имеется опыт разработки REST API с использованием Node JS (Express).
            Уделяю большое внимание грамотному использованию JS, а также знаком
            с современным синтаксисом ES6+.
          </p>
          <p>
            Получаю удовольствие от программирования и уделяю этому большую
            часть времени. Не боюсь жёстких дедлайнов, многозадачности и
            капризных клиентов. Люблю учиться новому, развиваться и общаться с
            классными людьми.
          </p>
          <p>Подробней обо мне в резюме.</p>
          <a
            href="https://hh.ru/resume_converter/%D0%93%D0%B0%D0%BC%D0%B7%D0%B0%D0%BB%D0%B8%D0%B5%D0%B2%20%D0%93%D0%B0%D0%BC%D0%B7%D0%B0%D0%BB%D0%B8.pdf?hash=5febcf71ff08e06de80039ed1f7a4d30555274&type=pdf&hhtmSource=resume_view&hhtmFrom="
            className="btn-main-offer"
          >
            Скачать резюме
          </a>
        </div>
      </div>
    </div>
  );
}
