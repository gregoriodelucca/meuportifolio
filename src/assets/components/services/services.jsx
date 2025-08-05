import React from "react";
import { FaLaptopCode, FaMobileAlt, FaPalette } from "react-icons/fa";
import "./services.css";

export default function Services() {
  return (
    <section className="services-section" id="services">
      <h2 className="services-title">Serviços</h2>
      <div className="cards-container">
        <div className="card">
          <FaLaptopCode className="card-icon" />
          <h3 className="card-title">Web Design</h3>
          <p className="card-description">
            Desenvolvimento de sites modernos, responsivos e com design atrativo.
          </p>
        </div>
        <div className="card">
          <FaMobileAlt className="card-icon" />
          <h3 className="card-title">Mobile Developer</h3>
          <p className="card-description">
            Criação de aplicativos móveis para Android e iOS usando tecnologias modernas.
          </p>
        </div>
        <div className="card">
          <FaPalette className="card-icon" />
          <h3 className="card-title">UX/UI Design</h3>
          <p className="card-description">
            Design de interfaces intuitivas e experiências de usuário incríveis.
          </p>
        </div>
      </div>
    </section>
  );
}
