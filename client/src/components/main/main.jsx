import React, { useEffect } from "react";
import Typed from "react-typed";
import "./style.css";

export default function Main() {
  console.log("main");
  useEffect(() => {
    fetch("/check", {
      credentials: "include",
    });
  }, []);
  return (
    <div>
      <div className="main-info">
        <h1>Gamzali Gamzaliev</h1>
        <Typed
          className="typed-text"
          strings={["Freelancer", "Web developer"]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
        <a href="/contact" className="btn-main-offer">
          Связаться со мной
        </a>
      </div>
    </div>
  );
}
