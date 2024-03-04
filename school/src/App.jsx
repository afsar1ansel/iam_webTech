import { useState } from "react";
import "./App.css";
import Animation from "./componants/Animation";
import Navbar from "./Nav/Navbar";
import Home from "./componants/Home";
import Intro from "./componants/Intro";
import Resource from "./componants/Rating";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Intro />
      <Animation />
      <Resource />
    </>
  );
}

export default App;
