import React, { useState } from 'react'
import './navbar.css'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">Gregório</div>

        {/* Botão Hamburger (aparece no mobile) */}
        <button
          className="hamburger md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <div className={`bar ${isOpen ? 'open' : ''}`} />
          <div className={`bar ${isOpen ? 'open' : ''}`} />
          <div className={`bar ${isOpen ? 'open' : ''}`} />
        </button>

        {/* Menu principal */}
        <ul className={`navbar-list ${isOpen ? 'open' : ''}`}>
          <li><a href="#home" className="navbar-link" onClick={() => setIsOpen(false)}>Home</a></li>
          <li><a href="#about" className="navbar-link" onClick={() => setIsOpen(false)}>Sobre</a></li>
          <li><a href="#services" className="navbar-link" onClick={() => setIsOpen(false)}>Serviços</a></li>
          <li><a href="#projects" className="navbar-link" onClick={() => setIsOpen(false)}>Projetos</a></li>
          <li><a href="#contact" className="navbar-link" onClick={() => setIsOpen(false)}>Contato</a></li>
        </ul>
      </div>
    </nav>
  )
}


