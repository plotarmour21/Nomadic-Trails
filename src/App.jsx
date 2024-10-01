import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar"; // Navbar import
import Home from "./components/Home"; // Home component import
import Destinations from "./components/Destinations"; // Destinations component import
import TravelTips from "./components/TravelTips"; // TravelTips component import
import Blog from "./components/Blog"; // Blog component import
import About from "./components/About"; // About component import
import Contact from "./components/Contact"; // Contact component import

const App = () => {
  return (
    <>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/travel-tips" element={<TravelTips />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
};

export default App;
