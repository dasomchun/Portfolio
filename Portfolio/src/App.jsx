import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./conponents/Home";
import About from "./conponents/About";
import Project1 from "./conponents/Project1";
import Project2 from "./conponents/Project2";
import Project3 from "./conponents/Project3";
import NavBar from "./conponents/NavBar";
import Contact from "./conponents/Contact";
import ScrollTop from "./conponents/ScrollTop";

export default function App() {
  return (
    <div className="app">
      <NavBar />
      <ScrollTop />
      <main className="site-main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/project1" element={<Project1 />}></Route>
          <Route path="/project2" element={<Project2 />}></Route>
          <Route path="/project3" element={<Project3 />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </main>
    </div>
  );
}
