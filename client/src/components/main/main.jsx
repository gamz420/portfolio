import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Typed from "react-typed";
import "./style.css";

export default function Main() {
  const theme = useSelector((state) => state.theme);

  useEffect(() => {
    fetch("/check", {
      credentials: "include",
    });
  }, []);

  const handleEvent = () => {
    fetch("/buttoncontact", {
      credentials: "include",
    });
  };

  return (
    <div>
      <div className="main-info">
        <h1 className={!theme ? "name" : "nameLight"}>Gamzali Gamzaliev</h1>
        <Typed
          className={!theme ? "typed-text" : "typed-textLight"}
          strings={["Freelancer", "Web developer"]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
        <Link
          onClick={handleEvent}
          to="/contact"
          className={!theme ? "btn-main-offer" : "btn-main-offerLight"}
        >
          Связаться со мной
        </Link>
      </div>
    </div>
  );
}
