import React from "react";
import { Link } from "react-router-dom";
import "./Project1.css";

export default function Portfolio1() {
  return (
    <section id="project1">
      <header className="portfolio1-header">
        <div className="inner">
          <h2>Project 01</h2>
        </div>
      </header>

      <div className="port1-container">
        <div className="port1-images">
          <div className="left-image">
            <a
              href="https://portfolio-ww2p.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              <img src="../images/d3.jpg" alt="메가커피 메인" />
            </a>
          </div>
          <a
            href="https://portfolio-ww2p.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <img src="../images/d1.png" alt=" 메가커피 서브페이지1" />
          </a>
          <a
            href="https://portfolio-ww2p.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <img src="../images/d2.png" alt="메가커피 서브페이지2" />
          </a>
        </div>

        <div className="port1-info">
          <div className="port1-number">#1</div>
          <div className="port1-title">MEGACOFFIE Homepage Clone</div>

          <div className="port1-tools">
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
          </div>

          <div className="port1-desc">
            메가커피 공식 홈페이지를 HTML, CSS, JavaScript를 사용해 카피
            구현했습니다.
            <br /> 메가커피 홈페이지에서 작동하는 모든 효과를 똑같이 적용하였고,
            디자인도 최대한 비슷하게 만들어 보았습니다.
          </div>

          <div className="port1-stats">
            <div className="port1-stat">
              <h4>작업 소요 기간</h4>
              <p>2025.11.17 ~ 2025.11.24</p>
            </div>
            <div className="port1-stat">
              <h4>프로젝트 목표</h4>
              <p>
                정적 웹페이지 제작을 통해 웹 구조 설계와 스타일링, 기본적인
                사용자 인터랙션 구현 능력을 향상시키는 것을 목표로 하였습니다.
              </p>
            </div>
          </div>

          <div className="port1-result">
            <h4>프로젝트 성과</h4>
            <p>
              HTML과 CSS를 직접 작성하며 구조적 이해와 숙련도가 향상되었습니다.
              슬라이드 구현 과정에서 JavaScript의 DOM 조작과 이벤트 제어
              숙련도가 크게 향상되었습니다.
            </p>
          </div>

          {/* 다음 페이지 버튼 */}
          <div className="port1-buttons">
            <Link to="/project2">
              <button className="btn-primary">Next Project &nbsp;→</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
