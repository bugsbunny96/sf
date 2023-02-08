import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/home/Home';
import Services from './components/services/Services';
import About from './components/about/About';
import Contact from './components/contact/Contact';

const App = () => (
  <Router>
    <Navbar />
    
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    
    <Footer />
  </Router>
);

export default App;
