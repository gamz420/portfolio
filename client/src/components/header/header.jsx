import React from "react";
import { useSelector } from "react-redux";
import "./style.css";

function Header() {
  const state = useSelector((state) => state.class);
  return <div className={state}></div>;
}

export default Header;
