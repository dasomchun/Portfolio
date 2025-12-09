import React from "react";
import {
  HashRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import "./App.css";
import Navbar from "./components/Navbar";

import Home from "./components/Home";
import About from "./components/About";
import Cast from "./components/Cast";
import Gallery from "./components/Gallery";
import Trailer from "./components/Trailer";
import Contact from "./components/Contact";

// 🔹 페이지 전환 애니메이션용 라우트 컴포넌트
function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/cast" element={<Cast />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/trailer" element={<Trailer />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <Router>
      <div
        className="app-container"
        style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
      >
        <Navbar />
        <main style={{ flexGrow: 1 }}>
          <AnimatedRoutes />
        </main>
      </div>
    </Router>
  );
}
