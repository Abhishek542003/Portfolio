
import './App.css';
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Services from "./components/services/Services";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Experience from './components/experience/Experience';

function App() {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience/>
      <Services />
      <Portfolio />
      <Contact />
      <Footer/>
    </>
  );
}

export default App;
