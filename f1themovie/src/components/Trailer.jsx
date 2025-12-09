import React from "react";
import { motion } from "framer-motion";
import "./Trailer.css";

export default function Trailer() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="trailer-page"
    >
      <div className="trailer-bg-pattern"></div>

      <div className="trailer-content">
        <div className="video-frame">
          <iframe
            className="video-iframe"
            src="https://www.youtube.com/embed/2uxvxJMadQ4"
            title="Official Trailer"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>

        <div className="trailer-info">
          <div>
            <h1 className="trailer-title">&nbsp;Official Trailer #1</h1>
            <p className="trailer-subtitle">Exclusively in Theaters</p>
          </div>
          <div className="trailer-actions">
            <button className="share-btn">Share</button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
