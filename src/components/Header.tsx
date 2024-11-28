import React, { useState } from 'react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Função para alternar o menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-sky-900 text-white p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">gregoriodelucca</h1>

        {/* Botão hamburger (visível em telas pequenas) */}
        <button
          className="lg:hidden flex flex-col space-y-2"
          onClick={toggleMenu}
        >
          <span className="w-6 h-0.5 bg-white"></span>
          <span className="w-6 h-0.5 bg-white"></span>
          <span className="w-6 h-0.5 bg-white"></span>
        </button>

        {/* Menu de navegação */}
        <ul
          className={`${
            isMenuOpen ? 'block' : 'hidden'
          } lg:flex flex-col lg:flex-row space-x-4 lg:space-x-6`}
        >
          <li>
            <a href="#about" className="hover:underline">
              Sobre
            </a>
          </li>
          <li>
            <a href="#services" className="hover:underline">
              Serviços
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:underline">
              Contato
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
