import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Canvas, useThree } from "@react-three/fiber";
import { FirstPersonControls, Loader } from "@react-three/drei";
import * as THREE from "three";
import "./style.css";

export default function Skills() {
  const theme = useSelector((state) => state.theme);

  useEffect(() => {
    fetch("/checkskills", {
      credentials: "include",
    });
  }, []);

  function SkyBox() {
    const { scene } = useThree();
    const loader = new THREE.CubeTextureLoader();

    const texture = !theme
      ? loader.load(["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg"])
      : loader.load([
          "1light.jpg",
          "2light.jpg",
          "3light.jpg",
          "4light.jpg",
          "5light.jpg",
          "6light.jpg",
        ]);
    scene.background = texture;
    return null;
  }

  return (
    <>
      <Canvas className="webgl">
        <SkyBox />
        <FirstPersonControls lookSpeed={0.05} />
      </Canvas>
      <Loader
        barStyles={!theme ? { background: "white" } : { background: "black" }}
        containerStyles={
          !theme ? { background: "black" } : { background: "white" }
        }
        innerStyles={!theme ? {} : { background: "#D5D5D5" }}
        dataStyles={!theme ? { color: "white" } : { color: "black" }}
        dataInterpolation={(p) => `Загрузка ${p.toFixed(2)}%`}
      />
      <div className={!theme ? "skills" : "skillsLight"}>
        <h1 className="skillstext">Технологии, с которыми я работал</h1>
        <div>
          <div className={!theme ? "front" : "frontLight"}>
            <h2>Front-end</h2>
            <img
              className={!theme ? "skillsLogo" : "skillsLogoLight"}
              src="img/front-end.png"
              alt="front"
            />
          </div>
          <div>
            <h2>Back-end</h2>
            <img
              className={!theme ? "skillsLogo" : "skillsLogoLight"}
              src="img/back-end.png"
              alt="back"
            />
          </div>
        </div>
      </div>
    </>
  );
}
