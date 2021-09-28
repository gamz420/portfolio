import React, { useEffect } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { FirstPersonControls, Loader } from "@react-three/drei";
import * as THREE from "three";
import "./style.css";

export default function Skills() {
  useEffect(() => {
    fetch("/checkskills", {
      credentials: "include",
    });
  }, []);

  function SkyBox() {
    const { scene } = useThree();
    const loader = new THREE.CubeTextureLoader();
    const texture = loader.load([
      "1.jpg",
      "2.jpg",
      "3.jpg",
      "4.jpg",
      "5.jpg",
      "6.jpg",
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
      <Loader />
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
    </>
  );
}
