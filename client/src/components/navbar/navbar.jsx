import React from "react";
import logo from "../../img/image.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./style.css";

function Navbar() {
  console.log("navbar");

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-custom">
        <div className="container">
          <a className="navbar-brand" href="/">
            <img className="logo" src={logo} alt="logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <FontAwesomeIcon icon={faBars} style={{ color: "#fff" }} />
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <a className="nav-link" href="/">
                  Главная <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/aboutme">
                  Обо мне
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/skills">
                  Технологии
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contact">
                  Контакты
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
