import { useState } from "react";
import "./App.css";
import Animation from "./componants/Animation";
import Navbar from "./Nav/Navbar";
import Home from "./componants/Home";
import Intro from "./componants/Intro";
import Resource from "./componants/Rating";
import Contact from "./componants/Contact";
import Footer from "./componants/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Intro />
      <Animation />
      <Resource />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
