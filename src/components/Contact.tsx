import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-10 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Entre em Contato</h2>
        <p className="text-gray-700 mb-4">
          Quer saber mais sobre meus serviços ou colaborar em um projeto? Entre em contato!
        </p>
        <form className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md">
          <div className="mb-4">
            <label htmlFor="name" className="block text-left text-gray-700 font-medium mb-2">Nome</label>
            <input
              type="text"
              id="name"
              placeholder="Seu Nome"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-left text-gray-700 font-medium mb-2">E-mail</label>
            <input
              type="email"
              id="email"
              placeholder="Seu E-mail"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-left text-gray-700 font-medium mb-2">Mensagem</label>
            <textarea
              id="message"
              rows={4}
              placeholder="Sua mensagem..."
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition-colors"
          >
            Enviar
          </button>
        </form>
        <div className="mt-6">
          <p className="text-gray-700">
            Ou entre em contato diretamente:
          </p>
          <p className="font-medium text-blue-500">gregoriodelucca@gmail.com</p>
          <p className="font-medium text-blue-500">+55 (11) 97110-8462 </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
