import { useEffect, useState } from 'react';
import './Style/App.css';
import MouseTracker from './Components/MouseTracker';
import Hero from './Pages/Hero';
import Projects from './Pages/Projects';
import About from './Pages/About';

function App() {
  const [mousePos, setMousePos] = useState({});
  const [activeSection, setSection] = useState("About");
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const isSmallScreen = windowWidth <= 780; // Define o limite para o tamanho da tela considerado "pequeno"


  const updateState = (string) => {
    setSection(string);
  }
  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePos({ x: event.clientX, y: event.clientY });    
    };


    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener(
        'mousemove',
        handleMouseMove
      );
    };
  }, []);

  return (
    <div className={`App ${ isSmallScreen ? 'Small' : '' }`}>
      <MouseTracker mousePos = { mousePos } />
      <Hero updateState = {updateState} activeSection = {activeSection} isSmallScreen={ isSmallScreen } />
      <About activeSection = {activeSection} isSmallScreen={ isSmallScreen } />
      <Projects activeSection = {activeSection} isSmallScreen={ isSmallScreen } />
    </div>
  );
}

export default App;
