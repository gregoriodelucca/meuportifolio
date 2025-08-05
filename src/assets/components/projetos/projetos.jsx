import React from "react";
import "./projetos.css";

export default function Projeto() {
  const projetos = [
    {
      id: 1,
      nome: "Portfólio",
      descricao: "Site moderno criado com React e TailwindCSS.",
      imagem: "",
    },
    {
      id: 2,
      nome: "E-commerce",
      descricao: "Loja online responsiva com integração de pagamentos.",
      imagem: "https://www.aasoft.com.br/lovable-uploads/551ed7b8-7311-42fe-b3c1-a30b24367f8d.png",
    },
    {
      id: 3,
      nome: "Visual destac",
      descricao: "umn site responsivo em html, css, javascript e bootstrap",
      imagem: "https://visualdestac.com.br/img/logotopo1.png",
    },
  ];

  return (
    <section className="projeto-section" id="projetos">
      <h2 className="projeto-title">Projetos</h2>

      <div className="projeto-grid">
        {projetos.map((proj) => (
          <div key={proj.id} className="projeto-card">
            <img src={proj.imagem} alt={proj.nome} className="projeto-img" />
            <div className="projeto-body">
              <h3 className="projeto-nome">{proj.nome}</h3>
              <p className="projeto-descricao">{proj.descricao}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
