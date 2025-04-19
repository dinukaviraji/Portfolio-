import './App.css';
import Navbar from './components/navbar';
import HeroSection from './components/HeroSection';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Certificates from './components/Certificates';
import Contact from './components/Contact';

function App() {

  return (
  <>
      <Navbar />
      <HeroSection />
      <Skills/>
      <Projects/>
      <Education/>
      <Certificates/>
      <Contact/>
  </>
  )
}

export default App;
