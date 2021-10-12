import React from "react";
import logo from "../../img/image.png";
import logoLight from "../../img/imageDark.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import { changeThemeAC } from "../../redux/action/changeThemeAC";
import "./style.css";

function Navbar() {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme);

  const handleTheme = () => {
    dispatch(changeThemeAC(!theme));
    fetch("/changetheme", {
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
            className="collapse navbar-collapse div-categories"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ml-auto">
              <li>
                <Link className={!theme ? "nav-link" : "nav-linkLight"} to="/">
                  Главная <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li>
                <Link
                  className={!theme ? "nav-link" : "nav-linkLight"}
                  to="/aboutme"
                >
                  Обо мне
                </Link>
              </li>
              <li>
                <Link
                  className={!theme ? "nav-link" : "nav-linkLight"}
                  to="/skills"
                >
                  Технологии
                </Link>
              </li>
              <li>
                <Link
                  className={!theme ? "nav-link" : "nav-linkLight"}
                  to="/contact"
                >
                  Контакты
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
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
