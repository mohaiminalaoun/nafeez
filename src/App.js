import React from "react";
import { useState } from "react";
import "./App.scss";
import menu from "./assets/menu.svg";
import Sidebar from "./Sidebar";
import Lottie from "react-lottie";
import animationData from "./animations/cat.json";

function App() {
  const [showSidebar, setShowSidebar] = useState(false);
  const [animateOut, setAnimateOut] = useState(false);
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid"
    }
  };
  const lottieStyle = {
    position: "absolute",
    bottom: "0px"
  };
  const sidecat = {
    display: "inline-block"
  };
  return (
    <div className="App">
      <img
        alt=""
        className="menu"
        onClick={() => {
          if (showSidebar) {
            setAnimateOut(true);
            setTimeout(() => {
              setShowSidebar(false);
            }, 400);
          } else {
            setAnimateOut(false);
            setShowSidebar(!showSidebar);
          }
        }}
        src={menu}
      ></img>
      {showSidebar ? <Sidebar animateOut={animateOut} /> : null}
      <div className="name-logo">
        <div className="name">
          <div style={sidecat}>
            <div>Nafeez</div>
            <div>Ishmam</div>
            <div>Ahmed</div>
            <div className="subtitle">Welcome to my website</div>
          </div>
          {window.screen.width > 500 ? (
            <Lottie
              style={sidecat}
              options={defaultOptions}
              height={230}
              width={300}
            />
          ) : null}
        </div>
        {window.screen.width <= 500 ? (
          <Lottie
            style={lottieStyle}
            options={defaultOptions}
            height={300}
            width={window.screen.width}
          />
        ) : null}
      </div>
    </div>
  );
}

export default App;
