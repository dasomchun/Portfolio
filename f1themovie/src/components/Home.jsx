import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Play, ChevronRight } from "lucide-react";
import "./Home.css";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="home-container"
    >
      <div className="home-bg">
        <img src="/img/bg.png" alt="F1 The Movie Poster" className="bg-image" />
        <div className="bg-overlay-gradient"></div>
        <div className="bg-overlay-vignette"></div>
      </div>

      <div className="home-content">
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="home-subtitle"
        >
          브래드 피트
        </motion.p>

        <motion.h1
          initial={{ scale: 0.9, opacity: 0, letterSpacing: "0em" }}
          animate={{ scale: 1, opacity: 1, letterSpacing: "-0.05em" }}
          transition={{ delay: 0.8, duration: 1, ease: "easeOut" }}
          className="home-title"
        >
          <span>F1 :</span> THE MOVIE
        </motion.h1>

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "200px" }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="home-divider"
        ></motion.div>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="home-description"
        >
          “If the last thing I do is drive that car, <br />I will take that
          life, man, a thousand times.”
        </motion.p>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.8 }}
          className="home-buttons"
        >
          <Link to="/trailer" className="btn btn-primary slant-effect">
            <span className="btn-content">
              <Play size={20} fill="currentColor" /> 예고편 보기
            </span>
            <div className="btn-shine"></div>
          </Link>

          <Link to="/about" className="btn btn-outline">
            <span className="btn-content">
              시놉시스 <ChevronRight size={20} />
            </span>
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
}
