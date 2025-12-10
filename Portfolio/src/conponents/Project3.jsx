import React from "react";
import { Link } from "react-router-dom";
import "./Project3.css";
import "./Project1.css";
export default function Project3() {
  return (
    <section id="project3">
      <header className="portfolio3-header">
        <div className="inner">
          <h2>Project 03</h2>
        </div>
      </header>

      <div className="port3-container">
        <div className="port3-images">
          <div className="left-image">
            <a
              href="https://www.figma.com/design/zblxhySYdg5CSoteL8DrPL/revolt?node-id=16-650&p=f&t=84qsRb3O1iGkFPLR-0"
              target="_blank"
              rel="noreferrer"
            >
              <img src="../images/c1.jpg" alt="리볼트 온보딩" />
            </a>
          </div>
          <a
            href="https://www.figma.com/design/zblxhySYdg5CSoteL8DrPL/revolt?node-id=16-650&p=f&t=84qsRb3O1iGkFPLR-0"
            target="_blank"
            rel="noreferrer"
          >
            <img src="../images/c2.png" alt=" 리볼트 홈&검색" />
          </a>
          <a
            href="https://www.figma.com/design/zblxhySYdg5CSoteL8DrPL/revolt?node-id=16-650&p=f&t=84qsRb3O1iGkFPLR-0"
            target="_blank"
            rel="noreferrer"
          >
            <img src="../images/c3.png" alt="리볼트 상시&위시" />
          </a>
        </div>

        <div className="port3-info">
          <div className="port3-number">#3</div>
          <div className="port3-title">revolt Mobile App Clone</div>

          <div className="port3-tools">
            <span>Figma</span>
            <span>Photoshop</span>
          </div>

          <div className="port3-desc">
            전기차 전문 플랫폼 revolt의 Mobile App을 Figma를 사용해 카피 구현
            하였습니다. 이미지 같은 경우 픽셀 조정 필요 시 Photoshop을
            이용하였으며, 디자인을 최대한 비슷하게 만들었습니다.
            <a href="https://wwit.design/2025/03/15/revolt/">
              (WWIT 리볼트 탭 참조)
            </a>
          </div>

          <div className="port3-stats">
            <div className="port3-stat">
              <h4>작업 소요 기간</h4>
              <p>2025.11.27 ~ 2025.11.</p>
            </div>
            <div className="port3-stat">
              <h4>프로젝트 목표</h4>
              <p>
                revolt의 UI/UX를 분석하고, 피그마를 활용해 디자인 시스템과
                인터랙션을 재구성함으로써 디자인 구현 능력 향상.
              </p>
            </div>
          </div>

          <div className="port3-result">
            <h4>프로젝트 성과</h4>
            <p>
              20여 개 이상의 화면을 피그마에서 재현하며, 컴포넌트 구조화 및 오토
              레이아웃 활용 능력을 향상시켰습니다. 앱의 색상, 폰트, 인터랙션
              패턴을 분석하여 디자인 일관성을 유지하는 방법을 체득하였습니다.
              실무 수준의 디자인 시스템 구성 경험을 쌓아, 추후 협업 시
              재사용성과 유지보수성을 고려한 설계를 할 수 있게 되었습니다.
            </p>
          </div>

          <div className="port3-buttons">
            <Link to="/project2">
              <button className="btn-primary3">← &nbsp;Project2</button>
            </Link>
            <Link to="/contact">
              <button className="btn-primary3">End &nbsp; →</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
