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
    title: "Fedora Brasil",
    description: "Fedora Brasil é uma comunidade dedicada ao sistema operacional Fedora.",
    link: "https://fedorabr.org/",
    image: "https://fedorabr.org/wp-content/uploads/2021/05/Fedora-logo.svg", // Coloque o caminho correto da imagem
  },
  {
    title: "Projeto 2",
    description: "Descrição do Projeto 2",
    link: "https://github.com/usuario/projeto2",
    image: "/images/projeto2.jpg", // Coloque o caminho correto da imagem
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
