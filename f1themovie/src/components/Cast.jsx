import React from "react";
import { motion } from "framer-motion";
import "./Cast.css";

const characters = [
  {
    id: 1,
    name: "소니 헤이스",
    role: "Expensify APXGP No. 7",
    actor: "브래드피트",
    description:
      "한때 유망한 F1® 드라이버였지만, 끔찍한 사고로 추락한 ‘소니 헤이스’. 오랜 동료 ‘루벤 세르반테스’의 제안으로 최하위 팀 APXGP에 복귀한다.",
    image: "/img/b1.jpg",
    link: "https://namu.wiki/w/%EC%86%8C%EB%8B%88%20%ED%97%A4%EC%9D%B4%EC%8A%A4",
  },
  {
    id: 2,
    name: "조슈아 피어스",
    role: "Expensify APXGP No. 9",
    actor: "댐슨 이드리스",
    description:
      "역대 신인 드라이버들 중 최고의 재능을 가졌다 평가받는 젊고 혈기왕성한 슈퍼루키.",
    image: "/img/b2.jpg",
    link: "https://namu.wiki/w/%EC%A1%B0%EC%8A%88%EC%95%84%20%ED%94%BC%EC%96%B4%EC%8A%A4",
  },
  {
    id: 3,
    name: "루벤 세르반테스",
    role: "Expensify APXGP Proprietor",
    actor: "하비에르 바르뎀",
    description:
      "에이펙스GP의 소유주이자 모기업 세르반테스 캐피탈의 대표. F1® 루키시절 ‘소니 헤이즈’의 팀메이트.",
    image: "/img/b3.jpg",
    link: "https://namu.wiki/w/%EC%97%90%EC%9D%B4%ED%8E%99%EC%8A%A4GP#s-4.1",
  },
  {
    id: 4,
    name: "케이트 매케나",
    role: "Technical Director",
    actor: "케리 콘던",
    description: "에이펙스GP의 테크니컬 디렉터. F1에서 보기 드문 여성 디렉터.",
    image: "/img/b4.jpg",
    link: "https://namu.wiki/w/%EC%97%90%EC%9D%B4%ED%8E%99%EC%8A%A4GP#s-4.4",
  },
];
export default function Cast() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="cast-section"
    >
      <div className="cast-container">
        <h2 className="cast-main-title">
          &nbsp; Cast <span className="text-primary">&</span> Characters
        </h2>

        <div className="cast-grid">
          {characters.map((cast) => (
            <motion.div
              key={cast.id}
              whileHover={{ y: -10 }}
              className="cast-card"
            >
              <a href={cast.link} target="_blank" rel="noreferrer">
                <img src={cast.image} alt={cast.name} className="cast-image" />

                <div className="cast-overlay"></div>

                <div className="cast-content">
                  <div className="cast-header">
                    <h3 className="cast-name">{cast.name}</h3>
                    <p className="cast-role">{cast.role}</p>
                  </div>
                  <p className="cast-actor">Played by {cast.actor}</p>
                  <div className="cast-description-wrapper">
                    <p className="cast-description">{cast.description}</p>
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
