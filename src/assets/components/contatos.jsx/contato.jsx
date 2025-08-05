import React from "react";
import "./contato.css";

export default function Contact() {
  return (
    <section id="contato" className="contact-section">
      <div className="contact-container">
        <h2 className="contact-title">Contato</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert("Mensagem enviada! Obrigado pelo contato.");
          }}
          className="contact-form"
        >
          <div className="form-group">
            <label htmlFor="nome" className="form-label">Nome</label>
            <input
              type="text"
              id="nome"
              name="nome"
              required
              className="form-input"
              placeholder="Seu nome"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="form-input"
              placeholder="seuemail@exemplo.com"
            />
          </div>

          <div className="form-group">
            <label htmlFor="mensagem" className="form-label">Mensagem</label>
            <textarea
              id="mensagem"
              name="mensagem"
              required
              className="form-textarea"
              placeholder="Escreva sua mensagem aqui"
            ></textarea>
          </div>

          <button type="submit" className="btn-submit">
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
}
