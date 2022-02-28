import React, { useState } from "react";
import logo from "../../img/image.png";
import logoLight from "../../img/imageDark.png";
import lang from "../../img/langWhite.png";
import langLight from "../../img/langBlack.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import { changeAC } from "../../redux/action/changeAC";
import "./style.css";

function Navbar() {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme);
  const language = useSelector((state) => state.language);
  const [styleLangBar, setStyleLangBar] = useState(true);
  const [barShow, setBarShow] = useState(false);

  const handleTheme = () => {
    dispatch(changeAC(!theme, "theme"));
    fetch("/changetheme", {
      credentials: "include",
    });
  };

  const handleLanguageBar = () => {
    setStyleLangBar(!styleLangBar);
  };

  const handleChangeLanguage = (bool) => {
    dispatch(changeAC(bool, "language"));
    setStyleLangBar(!styleLangBar);
    fetch("/changelanguage", {
      credentials: "include",
    });
  };

  return (
    <>
      <nav
        className={
          !theme
            ? "navbar navbar-expand-lg navbar-custom"
            : "navbar navbar-expand-lg navbar-customLight"
        }
      >
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img className="logo" src={!theme ? logo : logoLight} alt="logo" />
          </Link>
          <button
            onClick={() => setBarShow(true)}
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <FontAwesomeIcon
              icon={faBars}
              style={!theme ? { color: "#fff" } : { color: "#000" }}
            />
          </button>

          <div
            className={`navbar-collapse div-categories collapse ${
              barShow ? "" : "hide"
            }`}
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ml-auto">
              <li onClick={() => setBarShow(false)}>
                <Link className={!theme ? "nav-link" : "nav-linkLight"} to="/">
                  {!language ? "Главная" : "HOME"}
                  <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li onClick={() => setBarShow(false)}>
                <Link
                  className={!theme ? "nav-link" : "nav-linkLight"}
                  to="/aboutme"
                >
                  {!language ? "Обо мне" : "About me"}
                </Link>
              </li>
              <li onClick={() => setBarShow(false)}>
                <Link
                  className={!theme ? "nav-link" : "nav-linkLight"}
                  to="/skills"
                >
                  {!language ? "Технологии" : "Technologies"}
                </Link>
              </li>
              <li onClick={() => setBarShow(false)}>
                <Link
                  className={!theme ? "nav-link" : "nav-linkLight"}
                  to="/contact"
                >
                  {!language ? "Контакты" : "Contacts"}
                </Link>
              </li>
              <li className="liCheckbox">
                <div>
                  <input type="checkbox" class="checkbox" id="chk" />
                  <label
                    class="label"
                    for="chk"
                    onClick={() => {
                      handleTheme();
                    }}
                  >
                    <FontAwesomeIcon
                      icon={faSun}
                      style={{
                        color: "#fff",
                        marginRight: "3px",
                        width: "10px",
                      }}
                    />
                    <FontAwesomeIcon
                      icon={faMoon}
                      style={{ color: "#fff", width: "10px" }}
                    />
                    <div class="ball"></div>
                  </label>
                </div>
              </li>
              <li className="langBox">
                <img
                  className={!theme ? "langLogo" : "langLogoLight"}
                  src={!theme ? lang : langLight}
                  alt="language"
                  onClick={() => {
                    handleLanguageBar();
                  }}
                />
                <div
                  className={
                    styleLangBar
                      ? !theme
                        ? "langContainer"
                        : "langContainerLight"
                      : !theme
                      ? "langContainerVisible"
                      : "langContainerVisibleLight"
                  }
                >
                  <p
                    className={!theme ? "langType" : "langTypeLight"}
                    onClick={() => {
                      handleChangeLanguage(false);
                    }}
                  >
                    {language ? "RU" : <u>RU</u>}
                  </p>
                  <p
                    className={!theme ? "langType" : "langTypeLight"}
                    onClick={() => {
                      handleChangeLanguage(true);
                    }}
                  >
                    {!language ? "EN" : <u>EN</u>}
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
