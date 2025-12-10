import React, { useState } from "react";
import { FaEnvelope, FaPhone, FaGithub, FaMapMarkerAlt } from "react-icons/fa";
import "./Contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("메시지가 전송되었습니다 😊");

   
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <section id="contact">
      <header className="contact-header">
        <div className="inner">
          <h2>Contact</h2>
        </div>
      </header>

      <div className="contact-container">
       
        <div className="contact-left">
          <h2 className="form-title">Contact Me</h2>
          <h3>Let’s Work Together</h3>
          <p>
            프로젝트 제안, 협업 문의, 또는 간단한 인사도 환영합니다.
            <br />
            아래 정보를 통해 언제든 연락주세요.
          </p>

          <div className="contact-info">
            <div className="contact-card">
              <FaEnvelope className="contact-icon" />
              <p>didierdrogba_@nate.com</p>
            </div>
            <div className="contact-card">
              <FaPhone className="contact-icon" />
              <p>010-6469-8610</p>
            </div>
            <div className="contact-card">
              <FaGithub className="contact-icon" />
              <a
                href="https://github.com/dasomchun"
                target="_blank"
                rel="noreferrer"
              >
                https://github.com/dasomchun
              </a>
            </div>
            <div className="contact-card">
              <FaMapMarkerAlt className="contact-icon" />
              <p>Seoul, Republic of Korea</p>
            </div>
          </div>
        </div>

        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>이름</label>
              <input
                type="text"
                name="name"
                placeholder="이름을 입력하세요"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>이메일</label>
              <input
                type="email"
                name="email"
                placeholder="이메일을 입력하세요"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>메시지</label>
              <textarea
                name="message"
                placeholder="메시지를 입력하세요"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="btn-send">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
