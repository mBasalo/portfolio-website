import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import About from './Components/About/About';
import Services from './Components/Services/Services';
import MyWork from './Components/MyWork/MyWork';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Background from './Components/Background/Background';

const App = () => {
  // Estado para controlar si el background está activo o no
  const [isBackgroundActive, setIsBackgroundActive] = useState(true);

  // Función para activar/desactivar el background
  const toggleBackground = () => {
    setIsBackgroundActive(prevState => !prevState);
  };

  return (
    <Router>
      {/* Solo renderizamos el background si isBackgroundActive es true */}
      {isBackgroundActive && <Background />}
      
      {/* Pasamos la función toggleBackground al Navbar */}
      <Navbar toggleBackground={toggleBackground} isBackgroundActive={isBackgroundActive} />

      {/* Definimos las rutas para las diferentes secciones */}
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/mywork" element={<MyWork />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      {/* <Footer /> */}
    </Router>
  );
};

export default App;
