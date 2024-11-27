import React from 'react';
import { FaWhatsapp } from 'react-icons/fa'; // Biblioteca de ícones

const WhatsAppButton: React.FC = () => {
  const whatsappNumber = "5511971108462"; // Substitua pelo seu número com DDI

  const handleClick = () => {
    const whatsappUrl = `https://wa.me/${whatsappNumber}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div
      onClick={handleClick}
      className="fixed bottom-4 right-4 bg-green-500 text-white rounded-full p-4 shadow-lg cursor-pointer hover:bg-green-600 transition-transform transform hover:scale-105"
      title="Fale comigo no WhatsApp"
    >
      <FaWhatsapp size={24} />
    </div>
  );
};

export default WhatsAppButton;
