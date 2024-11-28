// src/components/HamburgerMenu.tsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // ou a biblioteca que você está utilizando para navegação, ex: Next.js, React Router, etc.

const HamburgerMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      {/* Botão do menu hamburger */}
      <button
        className="lg:hidden flex items-center space-x-2 p-3"
        onClick={toggleMenu}
      >
        <span className="w-6 h-0.5 bg-black"></span>
        <span className="w-6 h-0.5 bg-black"></span>
        <span className="w-6 h-0.5 bg-black"></span>
      </button>

      {/* Menu aberto */}
      <div
        className={`${
          isOpen ? 'block' : 'hidden'
        } absolute top-12 left-0 w-full bg-gray-800 text-white lg:hidden`}
      >
        <nav className="flex flex-col items-center space-y-4 py-4">
          <Link to="/" className="text-lg hover:text-gray-400">Home</Link>
          <Link to="/about" className="text-lg hover:text-gray-400">About</Link>
          <Link to="/services" className="text-lg hover:text-gray-400">Services</Link>
          <Link to="/projects" className="text-lg hover:text-gray-400">Projects</Link>
          <Link to="/contact" className="text-lg hover:text-gray-400">Contact</Link>
        </nav>
      </div>
    </div>
  );
};

export default HamburgerMenu;
