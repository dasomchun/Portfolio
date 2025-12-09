import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  return (
    <section id="home" className="home">
      <div className="overlay"></div> {/* 어두운 블러 효과용 */}
      <div className="home-content">
        <h3 className="home-sub">Chun-Da-Som</h3>
        <h1 className="home-title">PORTFOLIO</h1>
        <p className="home-role">FRONTEND DEVELOPER</p>

        <div className="home-buttons">
          <Link to="/about">
            <button className="btn-outline">About me</button>
          </Link>
        </div>
      </div>
    </section>
  );
}
