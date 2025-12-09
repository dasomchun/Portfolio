import React from "react";
import { motion } from "framer-motion";
import "./About.css";

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="about-section"
    >
      <div className="about-container">
        <header className="about-header">
          <h2 className="about-title">Synopsis</h2>
        </header>
        <div className="about-content">
          <div className="about-text">
            <p>
              <span className="highlight">
                최고가 되지 못한 전설 VS 최고가 되고 싶은 루키
              </span>
              <br />
              <br />
              한때 주목받는 유망주였지만 끔찍한 사고로 F1®에서 우승하지 못하고
              한순간에 추락한 드라이버 ‘소니 헤이스’(브래드 피트). 그의 오랜
              동료인 ‘루벤 세르반테스’(하비에르 바르뎀)에게 레이싱 복귀를
              제안받으며 최하위 팀인 APXGP에 합류한다.
            </p>
            <p>
              그러나 팀 내 떠오르는 천재 드라이버 ‘조슈아 피어스’(댐슨
              이드리스)와 ‘소니 헤이스’의 갈등은 날이 갈수록 심해지고. 설상가상
              우승을 향한 APXGP 팀의 전략 또한 번번이 실패하며 최하위권을
              벗어나지 못하고 고전하는데···
            </p>
            <blockquote className="about-quote">
              빨간 불이 꺼지고 운명을 건 레이스가 시작된다!
            </blockquote>
          </div>
          <div className="about-image-wrapper">
            <div className="about-image-overlay"></div>
            <img src="/img/a1.jpg" alt="Movie Poster" className="about-image" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
