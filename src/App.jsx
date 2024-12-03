

import './App.css';
import About from './components/About';
import Blog from './components/Blog';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Resume from './components/Resume';
import Services from './components/Services';
import Skills from './components/Skills'; // Import Skills component

function App() {
  return (
    <>
      <div id="hero">
        <Hero />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="resume">
        <Resume />
      </div>
      <div id="skills">
        {/* Passing custom accentColor to Skills */}
        <Skills accentColor="#ffb016" /> {/* Yellow progress bar */}
      </div>
      <div id="services">
        <Services />
      </div>
      <div id="blog">
        <Blog />
      </div>
      <div id="footer">
        <Footer />
      </div>
    </>
  );
}

export default App;
