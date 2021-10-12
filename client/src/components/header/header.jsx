import React from "react";
import { useSelector } from "react-redux";
import "./style.css";

function Header() {
  const theme = useSelector((state) => state.theme);

  return (
    <div className={!theme ? "header-wraper" : "header-wraperLight"}></div>
  );
}

export default Header;
