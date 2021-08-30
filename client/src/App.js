import React from "react";
import "./App.css";
import Navbar from "./components/navbar/navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Particles from "react-particles-js";
import Header from "./components/header/header";
import Main from "./components/main/main";
import Aboutme from "./components/aboutme/aboutme";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Skills from "./components/skills/skills";
import Contact from "./components/contact/contact";

function App() {
  console.log("App");
  return (
    <div className="App">
      <Particles
        params={{
          particles: {
            number: {
              value: 30,
              density: {
                enable: true,
                value_area: 900,
              },
            },
            shape: {
              type: "circle",
              stroke: {
                width: 1,
                color: "#ffffff",
              },
            },
          },
        }}
      />
      {/* <Particles
        className="particles-canvas"
        params={{
          particles: {
            number: {
              value: 15,
              density: {
                enable: true,
                value_area: 800,
              },
            },
            line_linked: {
              enable: false,
            },
            move: {
              speed: 1,
              out_mode: "out",
            },
            shape: {
              type: ["image"],
              image: [
                {
                  src: "img/600px-JavaScript-logo.png",
                  height: 20,
                  width: 20,
                },
                {
                  src: "img/1024px-Visual_Studio_Code_1.35_icon.svg.png",
                  height: 20,
                  width: 20,
                },
                {
                  src: "img/1280px-React-icon.svg.png",
                  height: 20,
                  width: 30,
                },
                {
                  src: "img/1200px-HTML5_logo_and_wordmark.svg.png",
                  height: 20,
                  width: 20,
                },
                {
                  src: "img/CSS3_logo_and_wordmark.svg.png",
                  height: 30,
                  width: 20,
                },
                {
                  src: "img/Expressjs.png",
                  height: 10,
                  width: 20,
                },
                {
                  src:
                    "img/kisspng-node-js-javascript-web-application-express-js-comp-5ae0f84e5e7537.0464945815246930703869.png",
                  height: 20,
                  width: 20,
                },
              ],
            },
            color: {
              value: "#CCC",
            },
            size: {
              value: 10,
              random: true,
              anim: {
                enable: true,
                speed: 4,
                size_min: 10,
                sync: false,
              },
            },
          },
          retina_detect: false,
        }}
      /> */}
      <Navbar />
      <Header />
      <Router>
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route exact path="/aboutme">
            <Aboutme />
          </Route>
          <Route exact path="/skills">
            <Skills />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
