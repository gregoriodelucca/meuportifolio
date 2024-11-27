import React from 'react';
import { FaCamera, FaLaptopCode, FaMobileAlt } from 'react-icons/fa'; // Importando os ícones

const Services: React.FC = () => {
  return (
    <section id="services" className="py-10 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Meus Serviços</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
         

          {/* Serviço de Desenvolvimento Web */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow flex flex-col items-center">
            <div className="text-blue-500 mb-4">
              <FaLaptopCode size={40} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Desenvolvimento Web</h3>
            <p className="text-gray-600 text-center">
              Criação de websites e sistemas interativos utilizando as melhores práticas de desenvolvimento.
            </p>
          </div>

          {/* Serviço de Desenvolvimento Mobile */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow flex flex-col items-center">
            <div className="text-purple-500 mb-4">
              <FaMobileAlt size={40} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Desenvolvimento Mobile</h3>
            <p className="text-gray-600 text-center">
              Desenvolvimento de aplicativos móveis para Android e iOS com uma experiência incrível.
            </p>
          </div>
           {/* Serviço de Edição Audiovisual */}
           <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow flex flex-col items-center">
            <div className="text-green-500 mb-4">
              <FaCamera size={40} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Edição Audiovisual</h3>
            <p className="text-gray-600 text-center">
              Edição de vídeos, animações e ajustes audiovisuais para qualquer tipo de projeto.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
