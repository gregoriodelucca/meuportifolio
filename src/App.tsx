import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <About />
      <Services />
      <Contact />
      <Footer />
      <WhatsAppButton />

    </>
  );
};

export default App;
