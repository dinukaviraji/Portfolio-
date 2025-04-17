import './App.css';
import Navbar from './components/navbar';
import HeroSection from './components/HeroSection';
import Projects from './components/Projects';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';

function App() {

  return (
  <>
      <Navbar />
      <HeroSection />
      <About/>
      <Projects/>
      <Skills/>
      <Education/>
  </>
  )
}

export default App;
