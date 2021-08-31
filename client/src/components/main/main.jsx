import React, { useEffect } from "react";
import Typed from "react-typed";
import "./style.css";

export default function Main() {
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
        <h1>Gamzali Gamzaliev</h1>
        <Typed
          className="typed-text"
          strings={["Freelancer", "Web developer"]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
        <a onClick={handleEvent} href="/contact" className="btn-main-offer">
          Связаться со мной
        </a>
      </div>
    </div>
  );
}
