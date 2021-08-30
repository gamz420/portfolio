import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { change } from "../../redux/action/changeImg";
import "./style.css";

export default function Skills() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(change("header-wraper2"));
  }, []);

  return (
    <div className="skills">
      <h1 className="skillstext">Технологии, с которыми я работал</h1>
      <div>
        <div className="front">
          <h2>Front-end</h2>
          <img src="img/front-end.png" alt="front" />
        </div>
        <div>
          <h2>Back-end</h2>
          <img src="img/back-end.png" alt="back" />
        </div>
      </div>
    </div>
  );
}
