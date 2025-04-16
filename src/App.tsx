import './App.css';
import Navbar from './components/navbar';
import HeroSection from './components/HeroSection';
import Projects from './components/Projects';
import About from './components/About';
import Skills from './components/Skills';

function App() {

  return (
  <>
      <Navbar />
      <HeroSection />
      <About/>
      <Projects/>
      <Skills/>
  </>
  )
}

export default App;
