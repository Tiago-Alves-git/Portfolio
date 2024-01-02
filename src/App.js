import { useEffect, useState } from 'react';
import './Style/App.css';
import MouseTracker from './Components/MouseTracker';
import Hero from './Pages/Hero';
import Projects from './Pages/Projects';
import About from './Pages/About';

function App() {
  const [mousePos, setMousePos] = useState({});
  const [activeSection, setSection] = useState("About");


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
    <div className='App'>
      <MouseTracker mousePos = { mousePos } />
      <Hero updateState = {updateState} activeSection = {activeSection}/>
      <About activeSection = {activeSection}/>
      <Projects activeSection = {activeSection} />
    </div>
  );
}

export default App;
