import React from "react";
import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer bg-gray-900 text-gray-400 py-6">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm">&copy; 2025 Gregório de Lucca. Todos os direitos reservados.</p>
        <nav className="mt-4 md:mt-0 flex gap-6">
          <a href="#home" className="hover:text-purple-500 transition">Home</a>
          <a href="#about" className="hover:text-purple-500 transition">Sobre</a>
          <a href="#services" className="hover:text-purple-500 transition">Serviços</a>
          <a href="#projetos" className="hover:text-purple-500 transition">Projetos</a>
          <a href="#contato" className="hover:text-purple-500 transition">Contato</a>
        </nav>
      </div>
    </footer>
  );
}
