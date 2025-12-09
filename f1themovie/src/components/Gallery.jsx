import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import "./Gallery.css";

const images = [
  "/img/c1.jpg",
  "/img/c2.jpg",
  "/img/c3.jpeg",
  "/img/c4.jpg",
  "/img/c5.jpg",
  "/img/c6.jpg",
];

export default function Gallery() {
  const [selectedId, setSelectedId] = useState(null);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="gallery-section"
    >
      <div className="gallery-container">
        <header className="gallery-header">
          <h2 className="gallery-title">Gallery</h2>
          <p className="gallery-subtitle">Behind The Scenes & Stills</p>
        </header>

        <div className="gallery-grid">
          {images.map((src, index) => (
            <motion.div
              key={index}
              layoutId={`image-${index}`}
              onClick={() => setSelectedId(index)}
              className="gallery-item"
            >
              <img
                src={src}
                alt={`Gallery ${index}`}
                className="gallery-thumb"
              />
              <div className="gallery-overlay"></div>
              <div className="gallery-caption">
                <p>Scene 0{index + 1}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedId !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="lightbox"
              onClick={() => setSelectedId(null)}
            >
              <button
                className="lightbox-close"
                onClick={() => setSelectedId(null)}
              >
                <X size={32} />
              </button>

              <button
                className="lightbox-nav prev"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedId((prev) =>
                    prev === 0 ? images.length - 1 : prev - 1
                  );
                }}
              >
                <ChevronLeft size={48} />
              </button>

              <motion.img
                layoutId={`image-${selectedId}`}
                src={images[selectedId]}
                alt="Selected"
                className="lightbox-image"
                onClick={(e) => e.stopPropagation()}
              />

              <button
                className="lightbox-nav next"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedId((prev) =>
                    prev === images.length - 1 ? 0 : prev + 1
                  );
                }}
              >
                <ChevronRight size={48} />
              </button>

              <div className="lightbox-counter">
                {selectedId + 1} / {images.length}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
