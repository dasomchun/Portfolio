import React from "react";
import { Link } from "react-router-dom";
import "./Project2.css";
import "./Project1.css";

export default function Project2() {
  return (
    <section id="project2">
      <header className="portfolio2-header">
        <div className="inner">
          <h2>Project 02</h2>
        </div>
      </header>

      <div className="port2-container">
        <div className="port2-images">
          <div className="left-image">
            <a
              href="https://portfolio-d27x.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              <img src="../images/a1.png" alt="더무비 메인" />
            </a>
          </div>
          <a
            href="https://portfolio-d27x.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <img src="../images/a2.png" alt=" 더무비 서브페이지1" />
          </a>
          <a
            href="https://portfolio-d27x.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <img src="../images/a3.png" alt="더무비 서브페이지2" />
          </a>
        </div>

        <div className="port2-info">
          <div className="port2-number">#2</div>
          <div className="port2-title">F1:The Movie Homepage</div>

          <div className="port2-tools">
            <span>React</span>
            <span>React-Router-Dom</span>
            <span>AnimatePresence</span>
            <span>JavaScript</span>
          </div>

          <div className="port2-desc">
            React Router DOM을 기반으로 제작한 ‘F1: 더 무비’ 컨셉 사이트입니다.
            실제 영화 공식 홈페이지는 콘텐츠가 제한적이어서, 포트폴리오용으로
            페이지 구조·비주얼·UI 흐름을 직접 재구성했습니다. 시네마틱한 색감과
            애니메이션을 통해 영화 트레일러 같은 분위기와 속도감을 시각적으로
            표현했습니다.
          </div>

          <div className="port2-stats">
            <div className="port2-stat">
              <h4>작업 소요 기간</h4>
              <p>2025.11.22 ~ 2025.11.28</p>
            </div>
            <div className="port2-stat">
              <h4>프로젝트 목표</h4>
              <p>
                React Router DOM을 기반으로 페이지 전환 구조를 직접 구현하면서
                React 개발 역량과 Hook 사용 숙련도를 향상시키고, AnimatePresence
                툴을 사용하여 여려가지 효과를 주고 시각적 완성도를 고려한 UI·UX
                디자인 감각 을 함께 성장시키는 것을 목표로 했습니다.
              </p>
            </div>
          </div>

          <div className="port2-result">
            <h4>프로젝트 성과</h4>
            <p>
              React Router DOM을 통해 페이지 전환 구조와 컴포넌트 단위 개발에
              대한 이해를 높였습니다. 또 페이지 구성과 AnimatePresence을 사용해
              시각적 요소를 직접 설계하며 디자인 감각과 연출력을 함께
              발전시켰습니다. 결과적으로 React의 핵심 개념을 실무 감각으로
              체득하고, 스스로 기획·디자인·구현 전 과정을 주도할 수 있는 역량을
              강화했습니다.
            </p>
          </div>

          <div className="port2-buttons">
            <Link to="/project1">
              <button className="btn-primary2">← &nbsp;Project1</button>
            </Link>
            <Link to="/project3">
              <button className="btn-primary2">Next Project &nbsp; →</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
