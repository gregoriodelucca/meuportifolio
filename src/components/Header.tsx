import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-sky-900 text-white p-4">
      <nav className="container mx-auto flex justify-between">
        <h1 className="text-2xl font-bold">gregoriodelucca</h1>
        <ul className="flex space-x-4">
          <li><a href="#about" className="hover:underline">Sobre</a></li>
          <li><a href="#services" className="hover:underline">Serviços</a></li>
          <li><a href="#contact" className="hover:underline">Contato</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
