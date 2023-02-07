import './App.css';
import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/home/Home';
// import Services from './components/services/Services';
// import About from './components/about/About';
// import Contact from './components/contact/Contact';

const App = () => (
  <Router>
    <Navbar />
    
    <Routes>
      <Route exact path="/" component={Home} />
      {/* <Route path="/services" component={Services} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} /> */}
    </Routes>
    
    <Footer />
  </Router>
);

export default App;
