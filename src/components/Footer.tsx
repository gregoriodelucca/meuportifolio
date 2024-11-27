import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto text-center">
        <p> Desenvolvido gregorio de lucca. &copy; {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
};

export default Footer;
