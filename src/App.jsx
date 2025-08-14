// ...existing code...
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import cloud from "/cloud-removebg.png";
import "./App.css";
import { useGSAP } from "@gsap/react";
import React from "react";
import gsap from "gsap";
import LightRays from "./components/organisms/Background/Background";
import SplashCursor from "./components/organisms/Cursor/SplashCursor";
import MusicPlayer from "./components/organisms/Music/MusicPlayer";
function App() {
  // ...existing code...
  return (
    <div style={{ width: "100%", height: "100vh", position: "relative" }}>
      <SplashCursor />
      <LightRays
        raysOrigin="top-center"
        raysColor="#AF4DFF"
        raysSpeed={1.5}
        lightSpread={2}
        rayLength={3}
        followMouse={true}
        mouseInfluence={0.1}
        noiseAmount={0.1}
        distortion={0.05}
        saturation={1.0}
        className="custom-rays"
      />
      <MusicPlayer />
    </div>
  );
}

export default App;
