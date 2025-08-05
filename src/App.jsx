import './index.css'
import Navbar from './assets/components/navbar/navbar'
import About from './assets/components/about/about'
import Services from './assets/components/services/services'
import Projects from './assets/components/projetos/projetos'
import Contact from './assets/components/contatos.jsx/contato'
import Footer from './assets/components/footer/footer'

function App() {
  return (
    <>
      <Navbar />
      <About />
      <Services/>
      <Projects/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App

