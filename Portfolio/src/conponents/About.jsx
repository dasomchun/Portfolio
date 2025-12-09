import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaFigma,
} from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import "./About.css";

export default function About() {
  const skills = [
    { name: "HTML5", icon: FaHtml5, percent: 100 },
    { name: "CSS3", icon: FaCss3Alt, percent: 100 },
    { name: "JavaScript", icon: FaJs, percent: 90 },
    { name: "React", icon: FaReact, percent: 90 },
    { name: "TypeScript", icon: SiTypescript, percent: 85 },
    { name: "Git", icon: FaGitAlt, percent: 100 },
    { name: "Figma", icon: FaFigma, percent: 82 },
  ];

  return (
    <div id="about" className="about-section">
      <header className="introduce">
        <h2>About Me</h2>
      </header>

      <div className="about-container">
        {/* 프로필 */}
        <div className="profile-card">
          <img src="../images/pic.jpg" alt="Profile" className="profile-img" />
          <h2 className="profile-name">
            천다솜 / Chun Da-Som <br />/ 1990.06.10
          </h2>

          <div className="profile-info">
            <p>📞 010-6469-8610</p>
            <p>✉️ didierdrogba_@nate.com</p>
            <p>📍 서울시 관악구 신림동</p>
          </div>
        </div>

        {/* 정보 블록들 */}
        <div className="info-grid">
          <div className="info-block education">
            <h3>학력 Education</h3>
            <ul>
              <li>
                <span>2015.03 ~ 2017.02</span> 세종대학교 호텔외식비즈니스 학과
                졸업
              </li>
              <li>
                <span>2009.03 ~ 2015.02</span> 국제대학교 컴퓨터정보 학과 졸업
              </li>
              <li>
                <span>2006.03 ~ 2009.02</span> 삼성고등학교 졸업
              </li>
            </ul>
          </div>

          <div className="info-block experience">
            <h3>경력 Experience</h3>
            <ul>
              <li>
                <span>2022.02 ~ 2022.11</span> 김종용누룽지통닭 신림점 홀매니저
              </li>
              <li>
                <span>2018.11 ~ 2020.10</span> 압구정순대국 주방실장
              </li>
              <li>
                <span>2017.08 ~ 2018.02</span> 네모오징어 본사 슈퍼바이저
              </li>
              <li>
                <span>2012.10 ~ 2017.01</span> 불고기브라더스 서비스 매니저
              </li>
            </ul>
          </div>

          <div className="info-block license">
            <h3>자격증 License</h3>
            <ul>
              <li>
                <span>2012.04</span> 운전면허 1종 보통
              </li>
              <li>
                <span>2013.04</span> MOS PowerPoint (Microsoft)
              </li>
              <li>
                <span>2013.06</span> MOS Excel (Microsoft)
              </li>
            </ul>
          </div>

          <div className="info-block skill">
            <h3>기술 Skill</h3>
            {skills.map((skill, idx) => {
              const Icon = skill.icon;
              const skillClass = skill.name.toLowerCase().replace(/\s+/g, "");
              return (
                <div className={`skill-row ${skillClass}`} key={idx}>
                  <div className="skill-icon-name">
                    <Icon className="skill-icon" />
                    <span>{skill.name}</span>
                  </div>
                  <div className="skill-bar-track">
                    <div
                      className="skill-bar-fill"
                      style={{ width: `${skill.percent}%` }}
                    ></div>
                  </div>
                  <span className="skill-percent">{skill.percent}%</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
