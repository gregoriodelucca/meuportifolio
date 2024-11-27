import React from 'react';
import foto from '../assets/eu.jpg'; // Importando a imagem

const About: React.FC = () => {
  return (
    <section id="about" className="py-10 bg-white">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row-reverse items-center justify-between">
        {/* Foto (agora à direita) */}
        <div className="lg:w-1/2 mb-8 lg:mb-0">
          <img
            src={foto} // Usando a imagem importada
            alt="Minha foto"
            className="rounded-full w-40 h-40 object-cover mx-auto shadow-lg"
          />
        </div>

        {/* Texto (agora à esquerda) */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h2 className="text-3xl font-bold mb-4">Sobre Mim</h2>
          <p className="text-lg text-gray-700">
            Olá, meu nome é gregorio de lucca. Sou um desenvolvedor apaixonado por criar experiências digitais
            incríveis. Trabalho com desenvolvimento web, edição audiovisual e aplicativos móveis. Meu foco é
            sempre em entregar o melhor para os meus clientes, utilizando as melhores práticas de desenvolvimento.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
