import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./about.css";
import foto from "../../img/euuu.jpg"; // seu caminho da foto

export default function About() {
  return (
    <section className="about-section">
      <img src={foto} alt="Foto Gregório" className="photo" />

      <h1 className="name-gradient">Gregório de Lucca</h1>

      <p className="subtitle">Desenvolvedor Front End React e Angular, especializado</p>

      <div className="social-icons">
        <a href="https://github.com/seu-github" target="_blank" rel="noreferrer" className="icon github">
          <FaGithub />
        </a>
        <a href="https://linkedin.com/in/seu-linkedin" target="_blank" rel="noreferrer" className="icon linkedin">
          <FaLinkedin />
        </a>
      </div>

      <button className="btn-curriculo">Meu Currículo</button>
    </section>
  );
}

