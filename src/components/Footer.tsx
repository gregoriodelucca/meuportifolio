import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Meu Portfólio. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;