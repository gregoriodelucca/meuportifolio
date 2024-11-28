import React from "react";

// Definindo a interface para os projetos
interface Project {
  title: string;
  description: string;
  link: string; // Link para o repositório ou demonstração
  image: string; // URL ou caminho da imagem do projeto
}

const projects: Project[] = [
  {
    title: "A.L. VEICULOS",
    description: "A.L. VEICULOS a melhor loja vendedora de carro do Brasil",
    link: "https://www.alveiculossp.com.br",
    image: "https://cdn.sitewebmotors.com.br/uploads/userGallery/f4ca301a146f9b3d5fe0b7fd7c0a65b3.png", // Coloque o caminho correto da imagem
  },
  {
    title: "AASOFT",
    description: "empresa software",
    link: "https://aasoft.com.br/",
    image: "https://aasoft.com.br/images/logo.png", // Coloque o caminho correto da imagem
  },
  {
    title: "igreja batista nacional da mooca",
    description: "Bem-vindo à Igreja Batista da Mooca!",
    link: "https://igrejabatistamooca.vercel.app",
    image: "https://ugc.production.linktr.ee/Mb7mrVZRIaQWfSPz8jEn_hu34oaud2K6K9TdH?io=true&size=avatar-v3_0", // Coloque o caminho correto da imagem
  },
  // Adicione mais projetos conforme necessário
];

const Projects = () => {
  return (
    <div id="projects" className="py-20 bg-gray-50">
      <h2 className="text-4xl font-semibold text-center text-gray-800 mb-12">
        Meus Projetos
      </h2>
      <div className="flex flex-wrap justify-center gap-12">
        {projects.map((project, index) => (
          <div
            className="w-72 bg-white p-6 rounded-lg shadow-lg hover:scale-105 transform transition duration-300"
            key={index}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
            <p className="text-gray-600 mb-4">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              Ver Projeto
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
